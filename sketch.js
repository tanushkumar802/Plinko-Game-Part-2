function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  var particles =[];
  var plinkos= []
    var divisions =[];
  
}
var divisionHeight=300;
var particle;
function draw() {
  background(255,255,255); 
  for(var k=0;k <=innerWidth; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  } 
  for(var j=40;j <=innerWidth; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50){
plinkos.push(new Plinkos(j,175));
for (var j=0;j<particles,length;j++){
  particles[j].display();
}
for(var k=0; k<divisions.length; k++){
divisions[k].display();
}
function mousePressed(){
  if(gameState=="end"){
particle=new particle(mouseX,10,10,10);
  }
  if(particle=null){
    particle.display();
    if(particle.body.position.y>700){
      score=score+500;
      particle=null;
    }
    if(count>=5){ gameState="end"}
  }
}
  }
  drawSprites();
}