status="";
values="";
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
}
function start(){
    object_detector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    values="input-1";
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}
function draw(){
    image(video, 0, 0, 300, 300);
}