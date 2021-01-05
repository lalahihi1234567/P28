class Tree {
    constructor() {
      this.image=loadImage("tree.png");
      this.width = 400;
      this.height = 600;
    }
    display(){
      imageMode(CENTER);
      fill("brown");
      image(this.image,900, 500, this.width, this.height);
    }
  };