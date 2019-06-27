
var recipe = {
    Title:"Pizza",
    Servings:2,
    Ingredients:["Curd", "Water"]
};
fill(26, 26, 26);
textSize(20);
text(recipe.Title, 10, 23);
text("Serves: " + recipe.Servings, 10, 55);
text("Ingredients: " + recipe.Ingredients, 10, 85);
