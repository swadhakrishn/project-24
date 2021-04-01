class Paperclass{

    constructor(){
        this.x = 100
        this.y = 100
        this.width = 100
 
        
         var Options = {
            isStatic:false,
            resititution: 0.3,
            friction:0.5,
            density : 1.2
        }
        this.body = Bodies.circle(this.x, this.y, 100, {isStatic:false});
        World.add(world, this.body);
    }

    display(){
        circle(this.x, this.y, this.width);
    }
    

}
