let recipe = {
  name: "",
  ingredients: [
  ],
  instructions: [
  ]
};


// title items

function updateTitle() {
  const titleInput = document.getElementById("titleInput");
  recipe.name = titleInput.value;
  document.getElementById("recipeTitle").innerText = recipe.name; 
}

document.getElementById("saveTitleBtn").addEventListener("click", function () {
  updateTitle();
  document.getElementById("titleInput").value = "";
});

document.getElementById("titleInput").addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {
      updateTitle();
      document.getElementById("titleInput").value = "";
  }
});


// Ingredient items

function addIngredient() {
  const ingredient = document.getElementById("ingredientInput").value;
  if (ingredient.trim() !== "") {
    recipe.ingredients.push(ingredient);
    renderRecipe();
    document.getElementById("ingredientInput").value = "";
  }
}

function removeIngredient(ingredient) {
  const index = recipe.ingredients.indexOf(ingredient);
  if (index > -1) {
      recipe.ingredients.splice(index, 1);
      renderRecipe();
  }
}

document.getElementById("ingredientInput").addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {
    addIngredient(event.target.value.trim());
    event.target.value = "";
} else if (event.key === 'Tab' && !event.shiftKey) {
    document.getElementById("exportBtn").focus();
    event.preventDefault();
} else if (event.key === 'Tab' && event.shiftKey) {
    document.getElementById("saveTitleBtn").focus();
    event.preventDefault();
}
});

document.getElementById("ingredientsList").addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {
      const item = event.target.innerText;
      removeIngredient(item);
  }
});

document.getElementById("addIngredientBtn").addEventListener("click", function () {
  const ingredient = document.getElementById("ingredientInput").value;
  if (ingredient.trim() !== "") {
      addIngredient(ingredient);
      document.getElementById("ingredientInput").value = "";
  }
});

// Instruction items

function addInstruction(instruction) {
  const ingredient = document.getElementById("instructionInput").value;
  if (instruction.trim() !== "") {
    recipe.instructions.push(instruction);
    renderRecipe();
    document.getElementById("instructionInput").value = "";
  }
}

function removeInstruction(instruction) {
  const index = recipe.instructions.indexOf(instruction);
  if (index > -1) {
      recipe.instructions.splice(index, 1);
      renderRecipe();
  }
}

document.getElementById("addInstructionBtn").addEventListener("click", function () {
  const instruction = document.getElementById("instructionInput").value;
  if (instruction.trim() !== "") {
      addInstruction(instruction);
      document.getElementById("instructionInput").value = "";
  }
});


document.getElementById("instructionsList").addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {
    const item = event.target.innerText;
    removeInstruction(item);
}
});

document.getElementById("instructionInput").addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {
      addInstruction(event.target.value.trim());
      event.target.value = "";
  } else if (event.key === 'Tab' && !event.shiftKey) {
      document.getElementById("exportBtn").focus();
      event.preventDefault();
  } else if (event.key === 'Tab' && event.shiftKey) {
      document.getElementById("ingreadientInput").focus();
      event.preventDefault();
  }
});

// Functionality Items

function exportRecipe() {
  writeRecipeToFile(recipe);
}

function resetFields() {
  recipe.name = "";
  recipe.ingredients = [];
  recipe.instructions = [];
  document.getElementById("recipeTitle").innerText = ""; 
  renderRecipe();
}

function renderRecipe() {
  const ingredientsContainer = document.getElementById("ingredientsList");
  if (ingredientsContainer) {
      ingredientsContainer.innerHTML = `
      ${recipe.ingredients.map((i, index) => `<li class="rounded-box" tabindex="${index + 11}" onclick="removeIngredient('${i}')">${i}</li>`).join("")}
  `;
  }

  const instructionsContainer = document.getElementById("instructionsList");
  if (instructionsContainer) {
    instructionsContainer.innerHTML = `
      ${recipe.instructions.map((i, index) => `<li class="rounded-box" tabindex="${index + recipe.ingredients.length + 11}" onclick="removeInstruction('${i}')">${i}</li>`).join("")}
  `;
  }
}


document.getElementById("exportBtn").addEventListener("click", exportRecipe);
document.getElementById("resetBtn").addEventListener("click", resetFields);
