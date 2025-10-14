import Particula from "./particula.js";

let particulas = [];


window.setup = function() {
    createCanvas(windowWidth, windowHeight);
   
}

window.draw = function() {
    background(0);
    for (let particula of particulas) {
    particula.update();
    particula.draw();
}
}
//window.mousePressed = function() {
    //const p = new Particula(createVector(mouseX, mouseY));
   // particulas.push(p);
//}
window.mouseDragged = function() {
    const p = new Particula(createVector(mouseX, mouseY));
    particulas.push(p);
}
