noStroke();
var x = 255;
var y = 256;
var faceSize = 340;
var eyeSize = faceSize/8;

// ears
var earSize=faceSize*1/2;
fill(89, 52, 17);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

// face
fill(163, 113, 5);
ellipse(x, y, faceSize, faceSize);



//eyes 
fill(0, 0, 0);
ellipse(x-faceSize/4, y-faceSize/8, eyeSize, eyeSize);
ellipse(x+faceSize/4, y-faceSize/8, eyeSize, eyeSize);



//nose
fill(89, 52, 20);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);
