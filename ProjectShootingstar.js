var xPos = 200;
var yPos = 200;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos-50, yPos-50, 10, 10);
    ellipse(xPos+50, yPos+50, 10, 10);
    xPos--;
    yPos--;
};



