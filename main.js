Webcam.set({
width:400,
height:450,
image_format:"png",
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");
function picture(){ 
Webcam.snap(function (data_uri){
document.getElementById("captured_image").innerHTML='<img id="result" src="'+data_uri+'"/>';
});
}

console.log("model is loaded",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0qehvre4m/model.json",modelLoaded);
function modelLoaded(){
    console.log("your model is loaded");
}

function check(){
img=document.getElementById("result");
classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.log(error);
}
else{
    gesture=results[0].label;
    toSpeak="";
    if(gesture=="amazing")
{
    toSpeak="this is amazing";
}
else if(gesture=="Victory")
{
    toSpeak="that was a marvelous victory";
}
else if(gesture=="Best")
{
    toSpeak="this is the best";
}
speak();
}
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data=toSpeak;
    var utterThis=new SpeechSynthesisUtterance( speak_data );
    synth.speak(utterThis);
}