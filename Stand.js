class Stand{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true // means it stays in a given position forever.
        }
        this.body = Bodies.rectangle(x, y, width, height, options); // What does this do? It cant be a normal rect, u want it to have some 
        this.width = width;
        this.height = height;
        World.add(world, this.body); // adding this.body to the World
      }
      display(){
        var angle = this.body.angle; // Angle of what??
        push();
        translate(this.body.position.x, this.body.position.y); // translate means to move something to a different position right?
        rotate(angle); 
        rectMode(CENTER); // What does this do?
        rect(0,0,this.width, this.height);
        pop();
      }
}