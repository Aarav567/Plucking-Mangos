class Tree{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }

        this.x=x
        this.y=y
        this.width=w
        this.height=h

        this.body=Bodies.rectangle(x,y,w,h, options)
        this.image=loadImage("images/tree.png")
        World.add(world,this.body)
    }


    display(){
        imageMode(CENTER)
        var treepos=this.body.position
        image(this.image,treepos.x,treepos.y,this.width,this.height)



    }

}