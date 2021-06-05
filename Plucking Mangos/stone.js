class Stone{
    constructor(x,y,r){
        var options={
            density:2,
            friction:0.3
        }
        this.x=x
        this.y=y
        this.r=r

        this.body=Bodies.circle(x,y ,r, options)
        this.image=loadImage("images/stone.png")
        World.add(world, this.body)

    }

    display(){

        var stonepos=this.body.position
        fill("black")
        imageMode(CENTER)
        image(this.image,stonepos.x,stonepos.y,this.r,this.r)





    }

}