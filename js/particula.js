export default class Particula {
    constructor (pos) {
        this.pos = pos;
        this.size = 10;
        this.vel = createVector(random(-10, 10), random(-10, 10));
        this.color = color (255);
        this.alpha = 255;
        this.life = 100;
    }
    draw() {
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
    update() {
        this.pos.add(this.vel);
        this.alpha = map(this.life, 100, 0, 255, 0);
        this.size = map(this.life, 100, 0, 50, 0);
        this.color = color(255, this.alpha);
        this.life --;
    }
    isDead() {
        return this.life < 0;
    }
}
