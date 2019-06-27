var paintBrush = {
    x: 327,
    y: 166,
    img: getImage("avatars/leaf-grey")
    
    
};

var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};

mouseMoved = function(){
    paintBrush.x=mouseX;
    paintBrush.y=mouseY;
    paintCanvas();
    
    
};



