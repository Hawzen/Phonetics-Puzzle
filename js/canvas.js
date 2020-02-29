let lins=[];
let size=10
let even = true
let t = 0;

function setup() {
  createCanvas(screen.width, screen.height);
  colorMode(HSL)

  size = 100;
  lins = [];
  even = true;
  for(let y=-size; y<height*1.2; y+=size){
    lin=[];
    even=!even
    for(let x=-size; x<width*1.1; x+=size){  
    lin.push(createVector(x + random(0, size),
                          y + random(size/5, size/2)))
    }
    lins.push(lin)
  }
  
}

function draw() {
  
  t+= 0.007;
  //Spaghetti Code
  for(i=0;i<lins.length-1;i+=1){
    for(j=0; j<lins[0].length-1;j+=1){
      
      perlin = map(noise(t, i, j)*sin(t), 0, 1, 0, 100);
      hu = map(noise(t, j, i), 0, 1, 0, 30);
      c = color(hu, perlin, perlin);
      c2 = color(0, perlin*10, 10);
      fill(hu); stroke(0);

      try{
      if(i % 2 == 0)
      triangle(lins[i][j].x, lins[i][j].y, lins[i+1][j].x, lins[i+1][j].y, 
               lins[i][j+1].x, lins[i][j+1].y);
      triangle(lins[i+1][j+1].x, lins[i+1][j+1].y, lins[i+2][j+1].x, lins[i+2][j+1].y, 
               lins[i+1][j].x, lins[i+1][j].y);
      if(j<lins[1].length-1 && i % 2 == 1)
      triangle(lins[i][j].x, lins[i][j].y, lins[i][j+1].x, lins[i][j+1].y,
               lins[i-1][j+1].x, lins[i-1][j+1].y);
      triangle(lins[i+1][j].x, lins[i+1][j].y, lins[i+1][j+1].x, lins[i+1][j+1].y, 
               lins[i][j].x, lins[i][j].y);
      }catch(TypeError){}
    }
  }
}