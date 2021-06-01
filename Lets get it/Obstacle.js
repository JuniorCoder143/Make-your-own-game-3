class Obstacle {
    constructor(x,y) {
      var options = {
          isStatic: true
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 50;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
   spawnObstacles(){
      if (frameCount % 60 === 0){
        var obstacle = createSprite(600,165,10,40);
        
        
         //generate random obstacles
         var rand = Math.round(random(1,6));
         switch(rand) {
           case 1: obstacle.addImage(obstacle1);
                   break;
           case 2: obstacle.addImage(obstacle2);
                   break;
           case 3: obstacle.addImage(obstacle3);
                   break;
          
           default: break;
         }
        }
        obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}
