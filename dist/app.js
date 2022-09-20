let wrapper = document.getElementById("wrapper");
let viewer = document.getElementById("viewer");
/*let m1 = QuizModel.from_json(
  '{"answer": [], "choices": [{"id": 0, "media_list": [], "text": "استراليا"}, {"id": 1, "media_list": [], "text": "اسيا"}, {"id": 2, "media_list": [], "text": "افريقيا"}, {"id": 3, "media_list": [], "text": "امريكا الشمالية"}],"correct": [0],"extra": {}, "hint": "", "id": "117326373f17349d1", "learning_notes": "", "media_list": [],"title": "ما هي أصغر قارة من حيث المساحة ؟", "type": "SC"}'
);
let m2 = QuizModel.from_json(
  '{"answer": [], "choices": [{"id": 0, "media_list": [], "text": "الصين"}, {"id": 1, "media_list": [], "text": "اسيا"}, {"id": 2, "media_list": [], "text": "افريقيا"}, {"id": 3, "media_list": [], "text": "امريكا الشمالية"}],"correct": [1],"extra": {}, "hint": "", "id": "117326373f17349d2", "learning_notes": "", "media_list": [],"title": "ما هي أكبر قارة من حيث المساحة 2 ؟", "type": "SC"}'
);
let m3 = QuizModel.from_json(
  '{"answer": [], "choices": [{"id": 0, "media_list": [], "text": "الصين"}, {"id": 1, "media_list": [], "text": "اسيا"}, {"id": 2, "media_list": [], "text": "افريقيا"}, {"id": 3, "media_list": [], "text": "امريكا الشمالية"}],"correct": [2],"extra": {}, "hint": "", "id": "117326373f17349d3", "learning_notes": "", "media_list": [],"title": "ما هي أقدم قارة عاش فيها الانسان 3؟", "type": "SC"}'
);
let m4 = QuizModel.from_json(
  '{"answer": [], "choices": [{"id": 0, "media_list": [], "text": "الصين"}, {"id": 1, "media_list": [], "text": "اسيا"}, {"id": 2, "media_list": [], "text": "افريقيا"}, {"id": 3, "media_list": [], "text": "امريكا الشمالية"}],"correct": [2],"extra": {}, "hint": "", "id": "117326373f17349d4", "learning_notes": "", "media_list": [],"title": "ما هي أقدم قتااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغغارة عاش فيها الانسان 4؟", "type": "SC"}'
);
*/
// new TestViewer(viewer, [m1, m2, m3, m4,], "ANSWER", {})
let submitBtn = document.getElementById("submitAnswerBtn");
let model2 = null;
let model = new QuizModel(1, "TF");
let html = null;

let callbacks = {
  onSubmit: (model) => {
    console.log(model);
    model = QuizModel.toJson(model);
    console.log(model);
    submitBtn.style.display = "block";
    model2 = QuizModel.fromJson(model);
    console.log(model);

    html = new QuizHTML(model2, "ANSWER", viewer, {});
  },
};
html = new QuizHTML(model, "CREATE", wrapper, callbacks);

function getAnswer() {
  console.log(QuizModel.toDict(model2));
  console.log(html);
}

/* {"id":1,"type":"SC","title":"fvzx","hint":"","choices":[{"id":0,"text":"1","media_list":[]},{"id":1,"text":"2","media_list":[]}],"media_list":[],"correct":[1],"answer":[],"extra":{},"learning_notes":""} */
