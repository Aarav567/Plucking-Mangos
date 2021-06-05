class Slingshot{
    constructor(body,anchor){
        var options = {
            bodyA:body,
            pointB:anchor,
            stiffness:0.003,
            length:100
        }
        this.bodyA=body
        this.pointB=anchor
        this.width=40
        this.Slingshot=Constraint.create(options)
        World.add(world, this.Slingshot)




    }
    attach(body){
        this.Slingshot.bodyA=body

    }
    fly(){
        this.Slingshot.bodyA=null

    }

    display(){
        if(this.Slingshot.bodyA){
            var pointA=this.bodyA.position
            var pointB=this.pointB
            fill("green")
            strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x,point.y)
        }




    }

}