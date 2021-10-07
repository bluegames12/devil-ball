class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,90,60);
    this.image = loadImage("Sprites/ball.png");
    this.smokeImg=loadImage("Sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
      this.trajectory.push([this.body.position.x,this.body.position.y]);
  }
for(var i =0;i<this.trajectory.length;i++){
  image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1])
}
}
}