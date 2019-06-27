function setup() {
    createCanvas(4000,5000)


};
function draw() {
background(144, 240, 234);

// Draw the sun
var x=0;
noStroke();
fill(255, 140, 0);
ellipse(335, 66, 70, 70);

// Get images from library and remember in variables
var grass = getImage("cute/GrassBlock");
var tree = getImage("cute/TreeUgly");

// Draw the tree and grass once
while (x<300){
    image(grass, x, 270);
    image(tree, x, 200);
    x+=100;
}
}