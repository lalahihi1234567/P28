class Boy {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,100,200,options);
      this.image=loadImage("boy.png");
      this.width = 100;
      this.height = 200;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };