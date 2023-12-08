document.addEventListener("DOMContentLoaded", function () {
    // Spinner 1: Animated Text
    const textSpinnerContainer = document.getElementById("text-spinner-container");
  
    if (textSpinnerContainer) {
      const textSpinner = document.createElement("div");
      textSpinner.classList.add("text-spinner");
      textSpinner.textContent = "Loading...";
      textSpinnerContainer.appendChild(textSpinner);
    }
  
    // Spinner 2: Repeating Animation
    const repeatingSpinnerContainer = document.getElementById("repeating-spinner-container");
  
    if (repeatingSpinnerContainer) {
      const repeatingSpinner = document.createElement("div");
      repeatingSpinner.classList.add("repeating-spinner");
      repeatingSpinnerContainer.appendChild(repeatingSpinner);
    }
  
    // Spinner 3: Interactive Spinner
    const interactiveSpinnerContainer = document.getElementById("interactive-spinner-container");

  if (interactiveSpinnerContainer) {
    const interactiveSpinner = document.createElement("div");
    interactiveSpinner.classList.add("interactive-spinner");
    interactiveSpinnerContainer.appendChild(interactiveSpinner);

    // Add event listener for interactivity (example: change color on hover)
    interactiveSpinner.addEventListener("mouseenter", function () {
      // Continuously change colors while mouse is over
      const colorInterval = setInterval(function () {
        interactiveSpinner.style.backgroundColor = getRandomColor();
      }, 500);

      // Stop changing colors on click and perform a 360-degree spin
      interactiveSpinner.addEventListener("click", function () {
        clearInterval(colorInterval);
        interactiveSpinner.style.transition = "transform 1s ease-in-out";
        interactiveSpinner.style.transform = "rotate(360deg)";
      });
    });

    interactiveSpinner.addEventListener("mouseleave", function () {
      interactiveSpinner.style.backgroundColor = rgb(14, 73, 168);
    });
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const spinnerHtml = document.getElementById("spinner-html");
  const spinnerCss = document.getElementById("spinner-css");
  const spinnerJs = document.getElementById("spinner-js");

  spinnerHtml.innerText = `
  <div class="spinner-example">
  <div class="spinner-container" id="text-spinner-container"></div> <!--Animated Text-->
  <div class="spinner-container" id="repeating-spinner-container"></div> <!--Repeating Spinner-->
  <div class="spinner-container" id="interactive-spinner-container"></div> <!--Interactive Spinner-->
</div>`;

  spinnerCss.innerText = `
  .text-spinner {
    font-size: 18px;
    font-weight: bold;
    animation: textSpin 1s linear infinite;
  }
  
  @keyframes textSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .repeating-spinner {
    width: 20px;
    height: 20px;
    background-color: #3498db;
    animation: rotate 2s linear infinite;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .interactive-spinner {
    width: 50px;
    height: 50px;
    background-color: blue;
    transition: background-color 0.5s ease;
  }`;


  spinnerJs.innerText = `
  document.addEventListener("DOMContentLoaded", function () {
    // Spinner 1: Animated Text
    const textSpinnerContainer = document.getElementById("text-spinner-container");
  
    if (textSpinnerContainer) {
      const textSpinner = document.createElement("div");
      textSpinner.classList.add("text-spinner");
      textSpinner.textContent = "Loading...";
      textSpinnerContainer.appendChild(textSpinner);
    }
  
    // Spinner 2: Repeating Animation
    const repeatingSpinnerContainer = document.getElementById("repeating-spinner-container");
  
    if (repeatingSpinnerContainer) {
      const repeatingSpinner = document.createElement("div");
      repeatingSpinner.classList.add("repeating-spinner");
      repeatingSpinnerContainer.appendChild(repeatingSpinner);
    }
  
    // Spinner 3: Interactive Spinner
    const interactiveSpinnerContainer = document.getElementById("interactive-spinner-container");
  
    if (interactiveSpinnerContainer) {
      const interactiveSpinner = document.createElement("div");
      interactiveSpinner.classList.add("interactive-spinner");
      interactiveSpinnerContainer.appendChild(interactiveSpinner);
  
      // Add event listener for interactivity (example: change color on hover)
      interactiveSpinner.addEventListener("mouseenter", function () {
        interactiveSpinner.style.backgroundColor = "red";
      });
  
      interactiveSpinner.addEventListener("mouseleave", function () {
        interactiveSpinner.style.backgroundColor = "blue";
      });
    }
    `;
  });