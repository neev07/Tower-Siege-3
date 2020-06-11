class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("wood1.png");
    this.visibility = 255;
  }
  display(){
    if(this.body.speed < 3 ){
    super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      if(this.visibility >= 0){  
       this.visibility = this.visibility - 5;
      } 
      if(this.visibility === 0){
        console.log(score);
        score = score + 1; 
      }
      tint(255, this.visibility);
      pop();
    }
  }
}
