let mic, fft;
let smoothing = 0.9;
let samples = 128;
let columns=16;
let rows = 8;

function setup(){
createCanvas( windowWidth, windowHeight);
mic = new p5.AudioIn();
mic.start();
fft = new p5.FFT(smoothing, samples);
fft.setInput(mic);
}

function draw() {
    background(0);
    let spectrum = fft.analyze();
    let width_size = width / rows;
    let height_size = height / columns;
    let index = 0;
    for (let x = 0; x < width; x += width_size){
        for (let y = 0; y < height; y += height_size){
            fill(spectrum[index], 255 - index, 255);
            text(spectrum[index], x, y);
            index++;
        }
    }
}