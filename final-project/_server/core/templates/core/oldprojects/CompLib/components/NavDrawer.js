function openDrawer() {
    document.getElementById("myDrawer").style.width = "250px";
}

function closeDrawer() {
    document.getElementById("myDrawer").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function () {
    const drawerContainer = document.getElementById("drawer-container");
    const drawerHtml = document.getElementById("NavDrawer-html");
    const drawerCss = document.getElementById("drawer-css");
    const drawerJs = document.getElementById("drawer-js");

    // HTML code
    const myDrawer = document.createElement("div");
    myDrawer.id = "myDrawer";
    myDrawer.className = "drawer";

    // HTML content
    const exampleBox = document.createElement("div");
    exampleBox.className = "example-box";
    exampleBox.innerHTML = `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" defer>
        <div class="example-content">
            <span class="material-icons" onclick="window.closeDrawer()">menu_open</span>
            <span class="example-title">Your Title Here</span>
        </div>
        <div class="links">
            <a href="ExtraDocs/home.html">Home</a>
            <a href="ExtraDocs/about.html">About</a>
            <a href="ExtraDocs/services.html">Services</a>
            <a href="ExtraDocs/contact.html">Contact</a>
        `;

    const codeSnippet = exampleBox.outerHTML;
    drawerHtml.textContent = codeSnippet; 
    myDrawer.appendChild(exampleBox);
    drawerContainer.appendChild(myDrawer);

    // CSS code
    drawerCss.textContent = `
    .drawer {
        width: 0;
        height: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
    }
    `;

    // JS code
    drawerJs.textContent = `
    function openDrawer() {
        document.getElementById("myDrawer").style.width = "250px";
    }

    function closeDrawer() {
        document.getElementById("myDrawer").style.width = "0";
    }

    window.openDrawer = openDrawer;
    window.closeDrawer = closeDrawer;
    `;

    window.openDrawer = openDrawer;
    window.closeDrawer = closeDrawer;
});