class Obstacle{

    constructor(){
        this.body = Bodies.rectangle(width, height-30, 20, 10)
        World.add(world, this.body);

        this.width = 20;
    }


    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 20, 10);

        Body.setVelocity(this.body, {x: -5, y: 0});
        
    }





}