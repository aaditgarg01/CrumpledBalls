class Paper {
  constructor(x, y, radius) {
    var options = {
       // isStatic:true,
       //restitution:0.3,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.image=loadImage("paper.png")
    this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
   // imageMode(CENTER);
  fill ("#87CEEB")
   // ellipse(0, 0, this.radius,this.radius);
    image (this.image,0,-22, this.radius,this.radius);
    pop();
  }
}