  var b = [];
var d;
function setup() {

  createCanvas (windowWidth,windowHeight);

for (i = 0 ; i < 250; i ++ ){
b[i] = new Ball(random(width),random(height));



}
 
   background(0);
}
var reset = function(){
  
  background(0,b.length);
  
};

function draw() {

background(0,10);


 for(i = 0 ; i < b.length ; i++){
   
 b[i].ball;
 
 b[i].update();
 b[i].shouw();
 b[i].end();
 
 
  for( j = 0 ; j < b.length ; j++){
   if( i != j ){
     b[i].diss( b[i] , b[j]);
     
   
    
   }
  }
 }
}
var Ball = function( x , y  ){
  
  
  
      this.pos = createVector( x , y);
      this.v = p5.Vector.random2D(1,6);
      this.acc = createVector(0,0);
      this.mass = 50;
   
 
     
     this.update = function (){
  
     this.pos.add(this.v);
     this.v.add(this.acc);
     this.acc.mult(0);
 
 
 
 
    };
    
    this.shouw = function(){
    
    ellipse(this.pos.x , this.pos.y , this.mass );
    
    
        
        
      

  
  };
     
     this.end = function(){
     
      
       
       if (this.pos.x < 0 ){
         
         this.pos.x = width;
         
         this.mass = this.mass+2;
        
        
        
       }
       
       if( this.pos.x > width){
         
         this.mass = this.mass + 2;
        this.pos.x = 0;
        
        
       }
       
        if (this.pos.y < 0 ) {
          
          
         this.pos.y = height;
         this.mass = this.mass + 2;
      
        }
        if (this.pos.y > height){
          
          this.pos.y = 0;
          this.mass = this.mass + 2;
          
        }
        
    
     };
    
     
   
   this.diss = function(thiss , other){
  

  if( i != j ){
    
    diss = b[i].pos.dist(b[j].pos);
   
  }
  
  this.d = floor(diss);
   
strokeWeight (this.mass*0.001);
      
   if( d+this.mass < width*0.25){
   
   
   
   
   //line(b[i].pos.x , b[i].pos.y , b[j].pos.x , b[j].pos.y);
   
   
   }

 
     if(b[i].mass  > b[i].d ){
    
    this.v = p5.Vector.random2D();
    
   
    this.mass = this.mass- 1 ;
    
  
}
 
 if(b[i].mass < b[j].mass){
   
   b[j].v.sub(b[i].d* ((this.mass/b.length)* 0.001));
   
    b[j].v.setMag(5);
  
 }

    
   };
   
   
};
