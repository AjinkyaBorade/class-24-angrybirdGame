class Bird {
    constructor(x,y){
        var tbox = {
            restitution:0.5,
            density:1.5,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,50,50,tbox);
        this.width=50;
        this.height=50;
        World.add(world,this.body);

    }

    display(){
        var position = this.body.position;
        position.x=mouseX;
        position.y=mouseY;
        push ();
        translate (this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        rectMode(CENTER);
        fill ("red");
        stroke ("purple");
        strokeWeight (3);
        rect (0,0,this.width,this.height);
        pop ();
    }
}