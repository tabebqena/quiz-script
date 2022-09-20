import { Sortable } from "sortablejs";
import { ChoiceAdapter } from "./adapters/choiceAdapter";
import { HeaderAdapter } from "./adapters/headerAdapter";
import { LearningNotesAdapter } from "./adapters/learningNotesAdapter";
import { MCAdapter } from "./adapters/mc_adapter";
import { MediaAdapter } from "./adapters/media_adapter";
import { SCAdapter } from "./adapters/sc_adapter";
import { SORTAdapter } from "./adapters/sort_adapter";
import { TFAdapter } from "./adapters/tf_adapter";
import { QuizModel, QUIZ_TYPES } from "./models/quizModel";
import { createElement } from "./utils";

export const HTML_MODE = Object.freeze({
  CREATE: "CREATE", // update
  ANSWER: "ANSWER",
  UPDATE_ANSWER: "UPDATE_ANSWER",
  SHOW_RESULT: "SHOW_RESULT",
});

export interface ICallbacks {
  onSubmit: (quizModel: QuizModel) => void;
  onAddImageToQuizClicked: () => void;
  onImageClicked: (url: string) => void;
}

export class QuizHTML {
  private _quizModel: QuizModel;
  private _fixedQuizModel: QuizModel;


  private _mode: string;
  private _headerAdapter: HeaderAdapter;

  private _callbacks: ICallbacks;

  private _learningNotesAdapter: LearningNotesAdapter;
  private _choicesAdapter: ChoiceAdapter;
  private _mediaAdapter: MediaAdapter;
  private _parent: any;
  // Html elements
  private _element: HTMLFormElement;
  private _headerDiv: HTMLDivElement;
  private _learningNotesBar: HTMLDivElement;
  private _quizBodyDiv: HTMLDivElement;
  private _mediaDiv: HTMLDivElement;
  private _statusBar: HTMLElement;



  constructor(
    quizModel: QuizModel,
    mode: string,
    parent: HTMLElement,
    callbacks: ICallbacks
  ) {
    if (quizModel == null || quizModel === undefined) {
      throw ("QuizModel can't be null or undefined !");
    }
    let validation = QuizModel.validateEmpty(quizModel.id, quizModel.type, quizModel.mediaList, quizModel.choicesList)
    if (!validation.valid) {
      throw ("Invalid quizModel: " + validation.error);
    }
    this._quizModel = quizModel;
    this._fixedQuizModel = quizModel;
    this._mode = mode || HTML_MODE.CREATE;
    this._parent = parent;
    this._callbacks = callbacks || {
      onSubmit: undefined,
      onAddImageToQuizClicked: undefined,
      onImageClicked: undefined
    };
    this.createLayout()
    this._headerAdapter = new HeaderAdapter(this._mode, this._quizModel, this.headerDiv);
    this._choicesAdapter = new this.ChoiceAdapter(this._mode, this._quizModel, this.quizBodyDiv)
    this._learningNotesAdapter = new LearningNotesAdapter(this._mode, this._quizModel, this.learningNotesBar);
    if ((this._callbacks.onAddImageToQuizClicked !== undefined && this._callbacks.onAddImageToQuizClicked !== null) ||
      (this._callbacks.onImageClicked !== undefined && this._callbacks.onImageClicked !== null)) {
      this._mediaAdapter = new MediaAdapter(
        this._mode,
        this._quizModel,
        this.mediaDiv,
        this._callbacks
      );
    }
    this.updateView();
    if (parent) {
      parent.appendChild(this.element);
    }
  }


  createLayout() {
    this._element = (createElement("form", {}, ["quiz-card", "border-primary"]) as HTMLFormElement);
    this._headerDiv = (createElement("div", {}, ["quiz-header", "card-header", "container", "container-fluid"]) as HTMLDivElement);
    this._element.appendChild(this._headerDiv);

    if (
      (this._callbacks.onAddImageToQuizClicked !== undefined && this._callbacks.onAddImageToQuizClicked !== null) ||
      (this._callbacks.onImageClicked !== undefined && this._callbacks.onImageClicked !== null)) {
      this._mediaDiv = (createElement("div", {}, ["quiz-media", "card"]) as HTMLDivElement);
      this._element.appendChild(this._mediaDiv);
    }

    this._quizBodyDiv = (createElement("div", {}, ["quiz-body"]) as HTMLDivElement);
    this._element.appendChild(this._quizBodyDiv)

    this._learningNotesBar = (createElement("div", {}, ["col-12", "quiz-learning-notes"], "padding:5px") as HTMLDivElement);
    this._element.appendChild(this._learningNotesBar)
    this._statusBar = createElement("p", {}, ["form-text", "text-center", "text-danger"])
    this._element.appendChild(this._statusBar)
  }

  reset() {
    if (this._parent !== undefined && this._parent !== null) {
      this._parent.removeChild(this.element);
    }
    this.createLayout();
    this._headerAdapter = new HeaderAdapter(this._mode, this._fixedQuizModel, this.headerDiv);
    this._choicesAdapter = new this.ChoiceAdapter(this._mode, this._fixedQuizModel, this.quizBodyDiv)
    this._learningNotesAdapter = new LearningNotesAdapter(this._mode, this._fixedQuizModel, this.learningNotesBar);
    if ((this._callbacks.onAddImageToQuizClicked !== undefined && this._callbacks.onAddImageToQuizClicked !== null) ||
      (this._callbacks.onImageClicked !== undefined && this._callbacks.onImageClicked !== null)) {
      this._mediaAdapter = new MediaAdapter(this._mode,
        this._quizModel,
        this.mediaDiv,
        this._callbacks);
    }
    this.updateView();
    if (this._parent) {
      this._parent.appendChild(this.element);
    }
  }

  private get ChoiceAdapter(): typeof ChoiceAdapter {
    let type = this._quizModel.type;
    if (type === QUIZ_TYPES.SC) {
      return SCAdapter
    }
    if (type === QUIZ_TYPES.MC) {
      return MCAdapter
    }
    if (type === QUIZ_TYPES.TF) {
      return TFAdapter
    }
    if (type === QUIZ_TYPES.SORT) {
      return SORTAdapter
    }

  }


  addChoice() {
    if (this._quizModel.type !== QUIZ_TYPES.TF) {
      this._choicesAdapter.appendEmptyChoice();
    }
  }

  addMediaItem(type, url) {
    this._mediaAdapter.addMediaItem(type, url);
    //this._quiz_header_editor_adapter.add_media_item(type, url)
  }

  private updateView() {
    this._headerAdapter.updateView();
    if (this._mediaAdapter) {
      this._mediaAdapter.updateView();
    }
    this._choicesAdapter.updateView();

    if (this.mode === HTML_MODE.CREATE) {
      this._learningNotesAdapter.updateView();
      if (
        this._quizModel.type === QUIZ_TYPES.SC ||
        this._quizModel.type === QUIZ_TYPES.MC ||
        this._quizModel.type === QUIZ_TYPES.SORT
      ) {
        var sortable = new Sortable(this.quizBodyDiv, {
          sort: true, // sorting inside list
          animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
          draggable: ".quiz-choice", // Specifies which items inside the element should be draggable
          direction: "vertical", // Direction of Sortable (will be detected automatically if not given)
        });
      }
    } else if (
      this.mode === HTML_MODE.ANSWER ||
      this.mode === HTML_MODE.UPDATE_ANSWER
    ) {
      if (this._quizModel.type === QUIZ_TYPES.SORT) {
        var sortable = new Sortable(this.quizBodyDiv, {
          sort: true, // sorting inside list
          animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
          draggable: ".quiz-choice", // Specifies which items inside the element should be draggable
          direction: "vertical", // Direction of Sortable (will be detected automatically if not given)
        });
      }
    } else if (this.mode === HTML_MODE.SHOW_RESULT) {
      this._learningNotesAdapter.updateView();
    }
  }

  submit() {
    this.statusBar.innerText = "";
    this.updateModel();

    let valid = this._quizModel.validateFull();
    if (valid.valid) {
      if (this._callbacks.onSubmit) {
        this._callbacks.onSubmit(this._quizModel);
      }
    } else {
      this.statusBar.innerText = valid.error;
    }
  }


  updateModel() {
    if (this.mode === HTML_MODE.CREATE) {
      this._quizModel = this._headerAdapter.updateModel();
      this._quizModel = this._choicesAdapter.updateModel(this._quizModel);
      this._quizModel = this._learningNotesAdapter.updateModel();
      if (this._mediaAdapter) {
        this._quizModel = this._mediaAdapter.updateModel();
      }
    } else if (
      this.mode === HTML_MODE.ANSWER ||
      this.mode === HTML_MODE.UPDATE_ANSWER
    ) {
      this._quizModel = this._choicesAdapter.updateModel(this._quizModel); // this._choices_viewer_adapter.update_model(this._quizModel)
    } else if (this.mode === HTML_MODE.SHOW_RESULT) {
      /* this._quizModel = this._choices_viewer_adapter.update_model(this._quizModel) */
    }
  }

  /**
   * Getter quizModel
   * @return {QuizModel}
   */
  public get quizModel(): QuizModel {
    return this._quizModel;
  }

  public getModel(): QuizModel {
    this.updateModel();
    return this._quizModel;
  }



  /**
   * Getter mode
   * @return {string}
   */
  public get mode(): string {
    return this._mode;
  }

  public get learningNotesBar(): HTMLDivElement {
    return this._learningNotesBar;
  }

  public get headerDiv(): HTMLDivElement {
    return this._headerDiv;
  }
  public get element(): HTMLFormElement {
    return this._element;
  }
  public get quizBodyDiv(): HTMLDivElement {
    return this._quizBodyDiv;
  }
  public get mediaDiv(): HTMLDivElement {
    return this._mediaDiv;
  }

  public get statusBar(): HTMLElement {
    return this._statusBar;
  }
}



