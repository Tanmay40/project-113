function preload(){

}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,200,150,250,200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    circle(50,430,80);
    circle(550,50,80);
    circle(550,430,80);
    fill(0,255,0);
    stroke(0,255,0);
    rect(90,40,420,20);
    rect(90,420,420,20);
    rect(40,90,20,300);
    rect(540,90,20,300);
}

function take_snapshot(){
    save('photo.png');
}