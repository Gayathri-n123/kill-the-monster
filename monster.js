class Monster{

constructor(x,y,width,height){

    var options={
      
    restitution:0.2,
    friction:1,
    density:2


    }
    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    this.image=loadImage("Monster-01.png")
World.add(world,this.body)

}

display(){

var pos = this.body.position;
translate(pos.x,pos.y)
imageMode(CENTER)
image(this.image,0,0,this.width,this.height)



}

}