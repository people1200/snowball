class snow {
    constructor(x,y) {
      var options = {
          isStatic: false,
          density: 0.1
      }
      this.image=loadImage("snow4.webp")
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{
                x:random(0,800),
                y:random(0,400)
            })
        }
    }
    display(){
      var pos =this.body.position;
    imageMode(CENTER)
image (this.image,pos.x,pos.y,this.width,this.height)
}
  }