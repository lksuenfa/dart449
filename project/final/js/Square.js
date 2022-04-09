class Square {
  constructor(canvasHeight, canvasWidth, context, x, height) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;

    this.x = x;
    this.y = 0;
    this.teal = "#025b6d";
    this.width = 200;
    this.height = height;
    this.lime = "#d4d80e";

    this.clicked = false;
  }

  // display square
  display() {
    if (this.clicked === false) {
      this.context.fillStyle = this.teal;
    } else {
      this.context.fillStyle = this.lime;
    }

    this.context.fillRect(this.x, this.y, this.height, this.width);
  } //display

  checkCollision(mouseX, mouseY) {
    // define position of square's furthest point from origin (x,y)
    this.x2 = this.x + this.size;
    this.y2 = this.y + this.size;

    // if mouseX is more than x and less than x2 while being more than y and less than y2
    if (mouseX > this.x && mouseX < this.x2) {
      if (mouseY > this.y && mouseY < this.y2) {
        console.log("i touch you");
        this.clicked = true;
      }
    }
  } //checkCollision
} //class Square
