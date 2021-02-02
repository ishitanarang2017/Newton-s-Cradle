class Slingshot{
    constructor(body1,body2,offsetX , offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options ={
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
           
        } 
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
       
        strokeWeight(2);

        var Anchor2X = pointB.x + this.offsetX;
        var Anchor2Y = pointB.y + this.offsetY;

        
        line (pointA.x,pointA.y,Anchor2X,Anchor2Y);
        
    }
}