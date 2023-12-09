let clickCount = 0;

function handleButtonClick() {
  clickCount++;
  updateClickCount();
}

function updateClickCount() {
  const countElement = document.getElementById("button-count");
  if (countElement) {
    countElement.innerText = clickCount;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateClickCount();
  const navbarHtml = document.getElementById("button-html");
    const navbarCss = document.getElementById("button-css");
    const navbarJs = document.getElementById("button-js");


    // HTML code
    navbarHtml.innerText = `
    <div class="button-example">
    <button class="spinup-button" onclick="handleButtonClick()">
      <span class="material-icons">add</span>
      <span class="button-title">Click Me</span>
      <span class="button-count" id="button-count">0</span>
    </button>
    </div>
    `;
  
    // CSS code
    navbarCss.innerText = `
    .spinup-button {
        background-color: #2ecc71;
        color: #fff;
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: background-color 0.3s ease;
      }
      
      .spinup-button:hover {
        background-color: #27ae60;
      }
    `;
  
    // JS code
    navbarJs.innerText = `
    let clickCount = 0;

    function handleButtonClick() {
      clickCount++;
      updateClickCount();
    }
    
    function updateClickCount() {
      const countElement = document.getElementById("button-count");
      if (countElement) {
        countElement.innerText = clickCount;
      }
    }
    
    document.addEventListener("DOMContentLoaded", function () {
      updateClickCount();
    });
    `;
});