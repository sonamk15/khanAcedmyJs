draw = function() {
    fill (0, 255, 68);
    if (mouseIsPressed && mouseY<200){
        fill(255, 60, 0); // start color
}
    rect(0, 0, 400, 200);  // the button

    // The button text
    fill(0, 0, 0);
    textSize(30);
    text("Press me!", 145, 115);
};

