class Raindrop {
  constructor(canvasWidth, canvasHeight, context) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;

    this.x = Math.floor(Math.random() * this.canvasWidth);
    this.y = Math.floor(Math.random() * this.canvasHeight);
    this.length = 3;
    this.width = 1;

    this.color = "#025b6d";

    this.vy = 0.9;
  }

  // function to draw rain drops
  draw() {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.length);
  }

  // fall down
  move() {
    //fall down
    this.y = this.y += this.vy;

    // if reach bottom of canvas return to top
    if (this.y > this.canvasHeight) {
      this.y = 0;
    }
  } //class
}
