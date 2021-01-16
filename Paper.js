class Paper{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.body = Bodies.circle(x, y,20, options);
        this.radius = 35;
      this.image = loadImage("paperimage.png");
         World.add(world, this.body);
      }
      display(){
        var papercan=this.body.position;
        push();
        fill("white");
        translate(papercan.x,papercan.y);
        ellipseMode(this.radius);
        ellipse(0,0,this.radius,this.radius);
        image(this.image,-35,-50,this.radius+50,this.radius+50);
        pop();
      }
}