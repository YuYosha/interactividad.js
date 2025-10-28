let song, fft, binSize = 64;

function preload(){
     song= loadSound("../audio/IN-MY-WAY.mp3");
}

function setup(){
   let canvas = createCanvas( windowWidth, windowHeight);
    canvas.mousePressed(() => {
        if (song.isPlaying()){
            song.pause();
        } else {
            song.play();
        }
    });

    fft = new p5.FFT(.915, binSize);
    fft.setInput(song);
    stroke("#FFF");
    noFill();
}

function windowResized(){
    resizeCanvas (windowWidth, windowHeight);
}

function draw(){
    background(0);
    let waveform = fft.waveform();
    beginShape();
    for (i = 0; i <   waveform.length; i++){
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, innerHeight, 0);
        vertex(x,y);
    }
    vertex(width, height / 2);
    endShape();
}