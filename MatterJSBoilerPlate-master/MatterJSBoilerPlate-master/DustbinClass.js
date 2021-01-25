Class DustbinClass{
    constructor(x,y,width,height){
    var options={
        isStatic:false

    }

    this.body = bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
}

    display(){

    var pos = this.body.position
    fill("white")
    rect(pos.x,pos.y,this.width,this.height);


    }
}
