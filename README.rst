A fork of `https://gitlab.com/tabebqena/quiscript` to be used with `https://github.com/tabebqena/nourlearn`


QuizHTML
========

- Used to manage the htmle element of the quiz.
- Parameters:

  1. parent: The parent element to attach the quiz html to it.
  default: null.
  
  Type: HTMLElement
  
  2. quizModel: 
  
  type: `QuizModel`
  
  3. mode: the HTML mode.
  
  Type: string.
  
  Valid: 
    CREATE
    ANSWER
    UPDATE_ANSWER
    SHOW_RESULT
  
  4. callbacks: object of callbacks.
  
  properties:
  
  onSubmit: (quizModel: QuizModel) => void;
  .. onCancel: () => void;
  
  onAddImageToQuizClicked: () => void;
  
  onImageClicked: (url: string) => void;

- Methods:
1. submit:
2. reset:
3. addChoice:
4. addMediaItem:
5. updateModel:
6. getModel: 


- Element Structure:
- The `QuizHTML.element` return the HTML representation of the quiz.
- This element consist of:
  - Header div.
  - media div (optional)
  - quiz body div.
  - learningNotesBar.
  - status bar



QuizModel
=========
- Used to store the data of the quez.
- Parameters:

  Required:
  - id: unique identifier for the quiz.
  Type: any 

  - type: the quiz type. See 'quizModel.QUIZ_TYPES'. valid:['SC', "MC", 'TF', "SORT"]
  Type: string
  Optional:

  - title: The quiz title.
    Type: string

  - hint: hint to help the student.
    Type: string

  - correct: the correct answer. 
  Type: list of numbers.
  
  - answer: the user answer . 
  Type: list of numbers.

  - learningNotes: text to teach the user some ponts about the quiz.
  Type: string

  - mediaList: if present, should be list of valid media.
  Type: MediaList

  - choicesList: if present, should be a list of valid choices.
  Type: ChoiceList


- How to create?
1. QuizModel(with required parameters)
2. QuizModel.fromDict(d)
3. QuizModel.fromJson(d)


- Conversion:
1. to dict: QuizModel.toDict(quiz)
2. to dict: QuizModel.toJson(quiz)


- How to set the correct choices?
1. model.correct(correct)
Type: Array
2. model.addToCorrect(choiceId)
Type: choiceId : Number
3. removeFromCorrect(choiceId)
Type: choiceId : Number

- How to set the answer?
1. model.answer(answer)
Parameter type: Array


ChoiceList
==========
- Used to store list of choices.
- Type: array of `Choice`.
- Parameters:
  1. input : Optional
  Type: Array of dictionaries or json string

Choice:
=======
- Used to store the choice data.
- Parameters:

  - Required:

    - id: Type: number. unique for each choice in the quiz.
    - title: Type: string. The choice text.
    - mediaList: Type: MediaList


- How to create?
1. Choice(with required parameters)
2. Choice.fromDict(d)
3. Choice.fromJson(d)


- Conversion:
1. to dict: Choice.toDict(quiz)
2. to dict: Choice.toJson(quiz)

MediaList
==========
- Used to store list of media items.
- Type: array of `Media`.
- Parameters:
  1. input : Optional
  Type: Array of dictionaries or json string

MediaItem:
==========
- Used to store the media item data.
- Parameters:
  - Required:
    - type: Type: string. 
    Valid: {
        IMAGE: "IMAGE",
        AUDIO: "AUDIO",
        YOUTUBE: "YOUTUBE",
    }
    - url: Type: string.

- How to create?
1. MediaItem(with required parameters)
2. MediaItem.fromDict(d)
3. MediaItem.fromJson(j)
4. MediaItem.from(d) // from json string or dictionary


- Conversion:
1. to dict: MediaItem.toDict(quiz)
2. to dict: MediaItem.toJson(quiz)
