class Dustbin {
    constructor(x, y) {
      var options = {
          isStatic:true
        
      }
      this.x = x;
      this.y = y;
      this.dustbinWidth = 200;
      this.dustbinHeight = 215;

      this.image = loadImage("dustbin.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill(255);
      image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
      pop();
    }
  };