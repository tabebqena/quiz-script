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
import { QuizLayoutCreator } from "./QuizLayoutCreator";

export const HTML_MODE = Object.freeze({
  CREATE: "CREATE", // update
  ANSWER: "ANSWER",
  UPDATE_ANSWER: "UPDATE_ANSWER",
  SHOW_RESULT: "SHOW_RESULT",
});

export interface ICallbacks {
  onSubmit: (quizModel: QuizModel) => void;
  // onCancelClicked: () => void;
  onAddImageToQuizClicked: () => void;
  onImageClicked: (url: string) => void;
}

export class QuizHTML {
  private _quizModel: QuizModel;
  private _fixedQuizModel: QuizModel;


  private _mode: string;
  private _headerAdapter: HeaderAdapter;

  private _callbacks: ICallbacks;

  private _layoutCreator: QuizLayoutCreator;
  private _learningNotesAdapter: LearningNotesAdapter;
  private _choicesAdapter: ChoiceAdapter;
  private _mediaAdapter: MediaAdapter;
  private _parent: any;

  public get layoutCreator(): QuizLayoutCreator {
    return this._layoutCreator;
  }

  public get element() {
    return this._layoutCreator.element;
  }

  constructor(
    parent,
    quizModel: QuizModel,
    mode: string,
    callbacks: ICallbacks
  ) {
    this._parent = parent;
    this._quizModel = quizModel;
    this._fixedQuizModel = quizModel;
    this._mode = mode || HTML_MODE.CREATE;
    this._callbacks = callbacks || {
      onSubmit: null,
      // onCancelClicked: () => void;
      onAddImageToQuizClicked: null,
      onImageClicked: null
    };
    this._layoutCreator = new QuizLayoutCreator(callbacks);
    this._headerAdapter = new HeaderAdapter(this._mode, this._quizModel, this._layoutCreator.headerDiv);
    this._choicesAdapter = new this.ChoiceAdapter(this._mode, this._quizModel, this.layoutCreator.quizBodyDiv)
    this._learningNotesAdapter = new LearningNotesAdapter(this._mode, this._quizModel, this._layoutCreator.learningNotesBar);
    if (callbacks.onAddImageToQuizClicked || callbacks.onImageClicked) {
      this._mediaAdapter = new MediaAdapter(
        this._mode,
        this._quizModel,
        this._layoutCreator.mediaDiv,
        this._callbacks
      );
    }
    this.updateView();
    if (parent) {
      parent.appendChild(this.element);
    }
  }

  reset() {
    this._parent.removeChild(this.layoutCreator.element);
    this._layoutCreator = new QuizLayoutCreator(this._callbacks);
    this._headerAdapter = new HeaderAdapter(this._mode, this._fixedQuizModel, this._layoutCreator.headerDiv);
    this._choicesAdapter = new this.ChoiceAdapter(this._mode, this._fixedQuizModel, this.layoutCreator.quizBodyDiv)
    this._learningNotesAdapter = new LearningNotesAdapter(this._mode, this._fixedQuizModel, this._layoutCreator.learningNotesBar);
    if (this._callbacks.onAddImageToQuizClicked || this._callbacks.onImageClicked) {
      this._mediaAdapter = new MediaAdapter(this._mode,
        this._quizModel,
        this._layoutCreator.mediaDiv,
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
        var sortable = new Sortable(this.layoutCreator.quizBodyDiv, {
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
        var sortable = new Sortable(this.layoutCreator.quizBodyDiv, {
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
    this.layoutCreator.statusBar.innerText = "";
    this.updateModel();

    let valid = this._quizModel.validateFull();
    if (valid.valid) {
      if (this._callbacks.onSubmit) {
        this._callbacks.onSubmit(this._quizModel);
      }
    } else {
      this.layoutCreator.statusBar.innerText = valid.error;
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
}



