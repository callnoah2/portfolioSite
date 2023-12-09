import React, { useState } from 'react';
import './styles.css';

const RecipeCardEditor = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: [],
    instructions: [],
  });

  const updateTitle = () => {
    const titleInput = document.getElementById('titleInput');
    setRecipe({ ...recipe, name: titleInput.value });
    document.getElementById('recipeTitle').innerText = recipe.name;
  };

  const addIngredient = () => {
    const ingredientInput = document.getElementById('ingredientInput');
    const ingredient = ingredientInput.value;
    if (ingredient.trim() !== '') {
      setRecipe({
        ...recipe,
        ingredients: [...recipe.ingredients, ingredient],
      });
      renderRecipe();
      ingredientInput.value = '';
    }
  };

  const removeIngredient = (ingredient) => {
    const index = recipe.ingredients.indexOf(ingredient);
    if (index > -1) {
      const updatedIngredients = [...recipe.ingredients];
      updatedIngredients.splice(index, 1);
      setRecipe({ ...recipe, ingredients: updatedIngredients });
      renderRecipe();
    }
  };

  const addInstruction = () => {
    const instructionInput = document.getElementById('instructionInput');
    const instruction = instructionInput.value;
    if (instruction.trim() !== '') {
      setRecipe({
        ...recipe,
        instructions: [...recipe.instructions, instruction],
      });
      renderRecipe();
      instructionInput.value = '';
    }
  };

  const removeInstruction = (instruction) => {
    const index = recipe.instructions.indexOf(instruction);
    if (index > -1) {
      const updatedInstructions = [...recipe.instructions];
      updatedInstructions.splice(index, 1);
      setRecipe({ ...recipe, instructions: updatedInstructions });
      renderRecipe();
    }
  };

  const exportRecipe = () => {
    writeRecipeToFile(recipe);
  };

  const resetFields = () => {
    setRecipe({
      name: '',
      ingredients: [],
      instructions: [],
    });
    document.getElementById('recipeTitle').innerText = '';
    renderRecipe();
  };

  const renderRecipe = () => {
    const ingredientsContainer = document.getElementById('ingredientsList');
    if (ingredientsContainer) {
      ingredientsContainer.innerHTML = `
        ${recipe.ingredients
          .map((i, index) => `<li class="rounded-box" tabindex="${index + 11}" onclick="removeIngredient('${i}')">${i}</li>`)
          .join('')}
      `;
    }

    const instructionsContainer = document.getElementById('instructionsList');
    if (instructionsContainer) {
      instructionsContainer.innerHTML = `
        ${recipe.instructions
          .map((i, index) => `<li class="rounded-box" tabindex="${index + recipe.ingredients.length + 11}" onclick="removeInstruction('${i}')">${i}</li>`)
          .join('')}
      `;
    }
  };

  const writeRecipeToFile = (recipe) => {
    // Functionality to write recipe to file
    // ...

    // Placeholder implementation
    console.log('Recipe exported:', recipe);
  };

  return (
    <div className="container">
      <h1>Recipe Card Editor</h1>
      <div className="editor">
        {/* Title Section */}
        <div className="input-section">
          <label htmlFor="titleInput">Recipe Title: </label>
          <input type="text" id="titleInput" tabIndex={1} autoFocus />
          <button id="saveTitleBtn" onClick={updateTitle} tabIndex={2}>
            Save Title
          </button>
          <br />
          <br />
          {/* Ingredient Section */}
          <label htmlFor="ingredientInput">Add Ingredient: </label>
          <input type="text" id="ingredientInput" tabIndex={3} />
          <button id="addIngredientBtn" onClick={addIngredient} tabIndex={4}>
            Add
          </button>
          <br />
          <br />
          {/* Instruction Section */}
          <label htmlFor="instructionInput">Add Instruction: </label>
          <input type="text" id="instructionInput" tabIndex={5} />
          <button id="addInstructionBtn" onClick={addInstruction} tabIndex={6}>
            Add
          </button>
        </div>
        {/* Recipe Display Section */}
        <div className="recipe-title">
          <h2 id="recipeTitle">{recipe.name}</h2>
        </div>
        <div className="recipe-section">
          <div className="ingredients-section">
            <h2>Ingredients</h2>
            <ul id="ingredientsList" tabIndex={7}></ul>
          </div>
          <div className="instructions-section">
            <h2>Instructions</h2>
            <ol id="instructionsList" tabIndex={8}></ol>
          </div>
        </div>
        {/* Export and Reset Section */}
        <div className="export-section">
          <button id="exportRecipeBtn" onClick={exportRecipe} tabIndex={9}>
            Export Recipe
          </button>
          <button onClick={resetFields} tabIndex={10}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardEditor;