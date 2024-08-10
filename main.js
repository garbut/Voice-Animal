dog = 0;
cat = 0;
lion = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    ml5.soundClassifier(modelReady,//teachablemachine.withgoogle.com/models/LH_A5T5tf/model.json
    )
}

function modelReady()
{
    ml5.classifier.classify(gotResults())
}

function gotResults(error,results)
{
  if gotResults == error :
  



}
