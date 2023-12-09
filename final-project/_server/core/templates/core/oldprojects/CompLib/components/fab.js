document.addEventListener("DOMContentLoaded", function () {
    const fabButton = document.querySelector(".fab-button");
    if (fabButton) {
        let isClicked = false;

        fabButton.addEventListener("mousedown", function () {
            isClicked = true;
            fabButton.classList.add("clicked");
        });

        fabButton.addEventListener("mouseup", function () {
            if (isClicked) {
                isClicked = false;
                fabButton.classList.remove("clicked");
                window.location.href = "ExtraDocs/button.html";
            }
        });

        fabButton.addEventListener("mouseleave", function () {
            isClicked = false;
            fabButton.classList.remove("clicked");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const fabHtml = document.getElementById("fab-html");
    const fabCss = document.getElementById("fab-css");
    const fabJs = document.getElementById("fab-js");

    // HTML code
    fabHtml.innerText = `
      <!-- FAB Example -->
      <div class="fab-example">
        <a href="ExtraDocs/button.html" class="fab-button">
          <span class="material-icons">add</span>
        </a>
      </div>
    `;

    // CSS code
    fabCss.innerText = `
    .fab-button {
        background-color: #3498db;
        color: #fff;
        width: 120px; 
        height: 50px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-top: 20px;
        text-decoration: none;
        box-shadow: 5px 8px 12px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, transform 0.3s ease;
    }
    
    .fab-button:hover {
        background-color: #2980b9;
        transform: scale(1.1);
    }
    
    .fab-example {
        text-align: center;
        margin-top: 20px;
    }  
    
    .fab-container {
        text-align: center;
    }
    `;

    // JS code
    fabJs.innerText = `
      // FAB Functionality
      document.addEventListener("DOMContentLoaded", function () {
        const fabButton = document.querySelector(".fab-button");
        if (fabButton) {
          fabButton.addEventListener("click", function () {
            // Add any additional functionality on FAB click
          });
        }
      });
    `;
});