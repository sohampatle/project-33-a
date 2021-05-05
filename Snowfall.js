class Snowfall {
    constructor(x, y) {
        var options = {
            'restitution': 0.4,
            'friction': 1,
            'density' :1
         }
        
        this.image = loadImage("snow5.webp");
       this.r  = 10
     
        this.body = Bodies.circle(x, y,10, options);
        World.add(world, this.body);
    }
    ab (){
        if (this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,width),y:random (0,height)})
        }
    }
    display() {
  
        var pos = this.body.position;
      // var angle = this.body.angle;
  
        push();
        translate(pos.x, pos.y);
       // rotate(angle);
        
        //noStroke(0);
        fill (255);
        stroke ("black");
        //imageMode(CENTER);
        image(this.image,0,0,10,10);
        //ellipse(0,0,10,10)
        pop();
    }
  
  }