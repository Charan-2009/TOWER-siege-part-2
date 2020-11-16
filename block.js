class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
       
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        
        this.visibility = 255;
        World.add(world,this.body)
        
    }
    display()  {

        if(this.body.speed<4){
         // rectMode(CENTER)
         // push();
         // fill(171,247,247)
         // rect(this.body.position.x,this.body.position.y,this.width,this.height)
         // pop();
         var angle = this.body.angle;
         var pos = this.body.position;
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         rectMode(CENTER);
         fill(171,247,247)
         rect(0,0,this.width, this.height);
         pop();

          }
          else{
            World.remove(world, this.body);
            push();
            translate(this.body.position.x, this.body.position.y);
            this.visibility = this.visibility -1;
            //Creating a disintegrating effect
            tint(255,this.visibility);
            pop();
          }

        

    }
}