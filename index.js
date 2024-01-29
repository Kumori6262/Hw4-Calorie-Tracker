// script.js

// Define the Food class
class Food {
  constructor(name, calories) {
    this.name = name;
    this.calories = parseInt(calories);
  }
}

// Initialize an array to store food items
const foodArray = [
  new Food("Banana", 105),
  new Food("Hot Dog", 565)
];

// Function to display the food list
function displayFoodList() {
  const foodList = document.getElementById("foodItems");
  foodList.innerHTML = "";

  // Iterate over the food array and create list items
  foodArray.forEach(food => {
    const li = document.createElement("li");
    li.innerText = `${food.name} - ${food.calories} calories`;
    foodList.appendChild(li);
  });
}

// Function to update the total calorie count
function updateCalorieCount() {
  const calorieCountElement = document.getElementById("calorieCount");
  const totalCalories = foodArray.reduce((sum, food) => sum + food.calories, 0);
  calorieCountElement.innerText = totalCalories;
}

// Event listener for the "Add Food" button
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
  const foodNameInput = document.getElementById("foodName");
  const caloriesInput = document.getElementById("calories");

  // Get the values from the input fields
  const foodName = foodNameInput.value;
  const calories = caloriesInput.value;

  // Create a new food object and add it to the array
  const newFood = new Food(foodName, calories);
  foodArray.push(newFood);

  // Display the food list and update the total calorie count
  displayFoodList();
  updateCalorieCount();

  // Clear the input fields
  foodNameInput.value = "";
  caloriesInput.value = "";
});

// Initial display of the food list and total calorie count
displayFoodList();
updateCalorieCount();
 