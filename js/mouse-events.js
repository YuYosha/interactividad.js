function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
   fill(255);
   stroke(color);
    ellipse(mouseX,mouseY,20,20);
}

function mousePressed() {
    console.log("mousePressed");
}
function mouseReleased() {
    console.log("mouseReleased");
}
function mouseDragged() {
    draw(ellipse(mouseX,mouseY,90,90));
}
function mouseMoved() {
    console.log("mouseMoved");
}