class Ground{
    constructor(x,y,w,h){
        var options =  {
            isStatic:true
        }

        this.x=x
        this.y=y
        this.width=w
        this.height=h

        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world, this.body)

    }
    display(){
        
        var groundpos=this.body.position;
        var angle=this.body.angle;
       
        push();
        rectMode(CENTER)
        rotate (angle);
        translate (groundpos.x,groundpos.y);
        fill("black");
        rect(0,0, this.width, this.height)
        pop();



        
    }


}