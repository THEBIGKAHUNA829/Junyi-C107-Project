//https://teachablemachine.withgoogle.com/models/I6EeWQLap/

function startClassify()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/I6EeWQLap/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}