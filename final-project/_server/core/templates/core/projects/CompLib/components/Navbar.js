document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("navbar-container");
    const navbarHtml = document.getElementById("navbar-html");
    const navbarCss = document.getElementById("navbar-css");
    const navbarJs = document.getElementById("navbar-js");
  
    // HTML code
    navbarHtml.innerText = `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" defer>
      <nav class="navbar">
        <div class="example-box">
          <div class="example-content">
            <span class="material-icons">menu_open</span>
            <span class="example-title">Your Title Here</span>
          </div>
          <div class="links">
            <a href="ExtraDocs/Home.html">Home</a>
            <a href="ExtraDocs/About.html">About</a>
            <a href="ExtraDocs/Services.html">Services</a>
            <a href="ExtraDocs/Contact.html">Contact</a>
          </div>
        </div>
      </nav>
    `;
  
    // CSS code
    navbarCss.innerText = `
      .navbar {
        background-color: #3498db;
        color: #fff;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
      }
    `;
  
    // JS code
    navbarJs.innerText = `
      document.addEventListener("DOMContentLoaded", function () {
        const navbarContainer = document.getElementById("navbar-container");
      });
    `;
  });
  