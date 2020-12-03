class Box {
    constructor(x,y,width,height){
        var tbox = {
            restitution:0.8,
            density:1,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,tbox);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }

    display(){
        push ();
        translate (this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        rectMode(CENTER);
        fill ("orange");
        stroke ("purple");
        strokeWeight (3);
        rect (0,0,this.width,this.height);
        pop ();
    }
}