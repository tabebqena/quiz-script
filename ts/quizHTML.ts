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
  private _header_adapter: HeaderAdapter;

  private _callbacks: ICallbacks;

  private _layout_creator: QuizLayoutCreator;
  private _learning_notes_adapter: LearningNotesAdapter;
  private _choices_adapter: ChoiceAdapter;
  private _media_adapter: MediaAdapter;
  private _parent: any;

  public get layout_creator(): QuizLayoutCreator {
    return this._layout_creator;
  }

  public get element() {
    return this._layout_creator.element;
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
    this._mode = mode;
    this._callbacks = callbacks;
    this._layout_creator = new QuizLayoutCreator(callbacks);
    this._header_adapter = new HeaderAdapter(this._mode, this._quizModel, this._layout_creator.header_div);
    this._choices_adapter = new this.ChoiceAdapter(this._mode, this._quizModel, this.layout_creator.quiz_body_div)
    this._learning_notes_adapter = new LearningNotesAdapter(this._mode, this._quizModel, this._layout_creator.learning_notes_bar);
    if (callbacks.onAddImageToQuizClicked || callbacks.onImageClicked) {
      this._media_adapter = new MediaAdapter(
        this._mode,
        this._quizModel,
        this._layout_creator.media_div,
        this._callbacks
      );
    }
    this.update_view();
    if (parent) {
      parent.appendChild(this.element);
    }
  }

  reset() {
    this._parent.removeChild(this.layout_creator.element);
    this._layout_creator = new QuizLayoutCreator(this._callbacks);
    this._header_adapter = new HeaderAdapter(this._mode, this._fixedQuizModel, this._layout_creator.header_div);
    this._choices_adapter = new this.ChoiceAdapter(this._mode, this._fixedQuizModel, this.layout_creator.quiz_body_div)
    this._learning_notes_adapter = new LearningNotesAdapter(this._mode, this._fixedQuizModel, this._layout_creator.learning_notes_bar);
    if (this._callbacks.onAddImageToQuizClicked || this._callbacks.onImageClicked) {
      this._media_adapter = new MediaAdapter(this._mode,
        this._quizModel,
        this._layout_creator.media_div,
        this._callbacks);
    }
    this.update_view();
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


  add_choice() {
    if (this._quizModel.type !== QUIZ_TYPES.TF) {
      this._choices_adapter.append_empty_choice();
    }
  }

  add_media_item(type, url) {
    this._media_adapter.add_media_item(type, url);
    //this._quiz_header_editor_adapter.add_media_item(type, url)
  }

  private update_view() {
    this._header_adapter.update_view();
    if (this._media_adapter) {
      this._media_adapter.update_view();
    }
    this._choices_adapter.update_view();

    if (this.mode === HTML_MODE.CREATE) {
      this._learning_notes_adapter.update_view();
      if (
        this._quizModel.type === QUIZ_TYPES.SC ||
        this._quizModel.type === QUIZ_TYPES.MC ||
        this._quizModel.type === QUIZ_TYPES.SORT
      ) {
        var sortable = new Sortable(this.layout_creator.quiz_body_div, {
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
        var sortable = new Sortable(this.layout_creator.quiz_body_div, {
          sort: true, // sorting inside list
          animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
          draggable: ".quiz-choice", // Specifies which items inside the element should be draggable
          direction: "vertical", // Direction of Sortable (will be detected automatically if not given)
        });
      }
    } else if (this.mode === HTML_MODE.SHOW_RESULT) {
      this._learning_notes_adapter.update_view();
    }
  }

  submit() {
    this.layout_creator.status_bar.innerText = "";
    this.updateModel();

    let valid = this._quizModel.validate_full();
    if (valid.valid) {
      if (this._callbacks.onSubmit) {
        this._callbacks.onSubmit(this._quizModel);
      }
    } else {
      this.layout_creator.status_bar.innerText = valid.error;
    }
  }


  updateModel() {
    if (this.mode === HTML_MODE.CREATE) {
      this._quizModel = this._header_adapter.update_model();
      this._quizModel = this._choices_adapter.update_model(this._quizModel);
      this._quizModel = this._learning_notes_adapter.update_model();
      if (this._media_adapter) {
        this._quizModel = this._media_adapter.update_model();
      }
    } else if (
      this.mode === HTML_MODE.ANSWER ||
      this.mode === HTML_MODE.UPDATE_ANSWER
    ) {
      this._quizModel = this._choices_adapter.update_model(this._quizModel); // this._choices_viewer_adapter.update_model(this._quizModel)
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



