const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("List of ingredients using while loop:")
var a = 0;
while (a < ingredients.length) {
  console.log(ingredients[a]);
  a++
}

// Write a for loop that prints out the contents of ingredients:
console.log("List of ingredients using for loop:")
var b = 0;
for (var b = 0; b < ingredients.length; b++) {
  console.log(ingredients[b]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("List of ingredients printed backwards:")
var i = 0;
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
