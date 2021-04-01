class DustbinClass{

    constructor(){
        this.box1 = Matter.Bodies.rectangle(width/2,500,200,20,{isStatic:true});
        this.box2 = Matter.Bodies.rectangle(300,440,20,100,{isStatic:true});
        this.box3 = Matter.Bodies.rectangle(500,440,20,100,{isStatic:true});
        World.add(world, this.box1);
        World.add(world, this.box2);
        World.add(world, this.box3);
    

    }

    display(){
        rect(this.box1.position.x,this.box1.position.y,200,20);
        rect(this.box2.position.x,this.box2.position.y,20,100);
        rect(this.box3.position.x,this.box3.position.y,20,100);
    }
    

}