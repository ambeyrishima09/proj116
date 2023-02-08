function preload() {
    redlips = loadImage('https://i.postimg.cc/YS9yks4g/l1.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poses', gotPoses);
}

lipsX=0;
lipsX=0;

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log =("lipsX :" + results[0].pose.lips.x);
        console.log =("lipsY :" + results[0].pose.lips.y);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialised');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(redlips, lipsX, lipsX, 30, 30);
}

function take_snapshot() {
    save('l1.png');
}