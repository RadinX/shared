function setup() {
  createCanvas(1024, 1024);
  strokeWeight(0.3);
  noLoop();
}

function gbr(kol, bar) {
 
  elsize = 20;
  
  pixw = 4*elsize*1.2;
  pixh = 1*elsize*1.8;
  stroke(0);strokeWeight(0.3);
  for(y=0;y<bar;y++) {
    
    for(x=0;x<kol;x++) {
      xx = x * pixw;
      yy = y * pixh;
      fill(255); stroke(0);strokeWeight(0.3);
      rect(xx,yy,pixw, pixh);
      
      fill(255,0,0); square(xx+elsize*0+10,yy+10,elsize);
      fill(0,255,0); square(xx+elsize*1+10,yy+10,elsize);
      fill(0,0,255); square(xx+elsize*2+10,yy+10,elsize);
      fill(120); square(xx+elsize*3+10,yy+10,elsize);
      
      strokeWeight(0); fill(255);
      text('R',xx+elsize*0+15,yy+25);
      text('G',xx+elsize*1+15,yy+25);
      text('B',xx+elsize*2+15,yy+25);
      text('A',xx+elsize*3+15,yy+25);
    }
  }
  
  
  for(y=0;y<bar;y++) {
    stroke(0);strokeWeight(0.3); fill(0); text(y, -15, y*pixh+25 );
  }
  for(x=0;x<kol;x++) {
    stroke(0);strokeWeight(0.3); fill(0); text(x, x*pixw+35, -15);
  }
  
  
}

function draw() {
  background(220);
  
  resetMatrix();
  translate(40,40);
  gbr(9,5);
}
