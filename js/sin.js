let x = 0;
let amplitud = 100;

function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    line (0, height/2, width, height/2);
    noStroke();
    background(0);

}

function draw() {
    let time = frameCount * 100;
    let y = Math.sin(time* .001) * amplitud;
    const color = abs(sin(time * .001)) * 255;
    fill(color);
    ellipse(x, y + height/2, 5.5);
    if (x> width) {
        x = 0; 
    }
    x += 1;
}