let mic;

function setup(){
    mic = new p5.AudioIn();
    mic.start();
}

function windowResized(){
resizeCanvas(windowWidth, windowHeight);

}
function draw(){
    background(0,10);

    let vol = mic.getLevel();
    let diameter = vol * windowWidth;
    noFill();
    strokeWeight(vol * 50);
    stroke(255);

    let x = windowWidth / 2;
    let y = windowHeight / 2;
    ellispe (x, y, diameter, diameter);
}