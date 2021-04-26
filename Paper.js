class Paper
{
    constructor(x,y,r){
 var options = {
    isStatic : false,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
}
this.r = r

this.image = loadImage("paper.png")
this.body=Bodies.circle(x, y, r, options)
World.add(world,this.body)
    }    
    display()
    {
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y)
    ellipseMode(RADIUS)
    fill(0, 255, 191)
    imageMode(CENTER);
    image(this.image, 0, 0, 2*this.r, 2*this.r)
    pop()

    }
}