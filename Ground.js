class Ground{
    constructor(x,y,width,height){
      var options={ 
          'isStatic':true}

          this.Ground = Bodies.rectangle(x,y,width,height,options);
          World.add(world, this.Ground);
          this.width=width;
          this.height=height;
    }
    display(){
        rectMode(CENTER);
        stroke(0);
        fill("yellow");
        rect(this.Ground.position.x,this.Ground.position.y,this.width,this.height);
    }
    
}