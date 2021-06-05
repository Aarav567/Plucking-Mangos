class Mango{
    constructor(x,y,w,h){
        var options={
            density:2,
            friction:0.5,
            isStatic:true
        }

        this.x=x
        this.y=y
        this.width=w
        this.height=h

        this.body=Bodies.rectangle(x,y,w,h , options)
        this.image=loadImage("images/mango.png")
        World.add(world, this.body)



    }

    display(){
        var mangopos=this.body.position
        fill("yellow")
        imageMode(CENTER)
        image(this.image,mangopos.x,mangopos.y,this.width,this.height)



    }
}