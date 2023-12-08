document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("carousel-container");
  let currentIndex = 0;

  if (carouselContainer) {
    const images = ["beach.jpeg", "rocket.jpeg", "flamePrius.jpeg"];

    function showImages() {
      // Clear the container
      carouselContainer.innerHTML = "";

      // Create and append three image elements
      for (let i = currentIndex - 1; i <= currentIndex + 1; i++) {
        const index = (i + images.length) % images.length;
        const slide = document.createElement("img");
        slide.src = `components/img/${images[index]}`;
        slide.alt = `Slide ${index + 1}`;
        slide.classList.add("carousel-slide");
        carouselContainer.appendChild(slide);
      }
    }

    function updateCarousel() {
      // Move to the next set of images with a transition
      carouselContainer.style.transition = "transform 1s ease-in-out";
      carouselContainer.style.transform = "translateX(-200%)";

      // Move to the next image index after the transition is complete
      setTimeout(function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImages();
        carouselContainer.style.transition = "transform 1s ease-in-out";
        carouselContainer.style.transform = "translateX(0%)";
      }, 1000); // Adjust the timeout to match the transition duration
    }

    // Show the initial set of images
    showImages();

    // Set an interval for the next slide
    setInterval(updateCarousel, 3000);
  }

  const carouselHtml = document.getElementById("carousel-html");
  const carouselCss = document.getElementById("carousel-css");
  const carouselJs = document.getElementById("carousel-js");

  carouselHtml.innerText = `
    <div class="carousel-example">
      <div class="carousel-container" id="carousel-container"></div>
    </div>`;

  // Update the CSS code in the documentation
  carouselCss.innerText = `
    /* Image Carousel Styles */
    .carousel-container {
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap; /* Prevent line breaks between images */
      display: flex;
      transition: transform 1s ease-in-out;
    }

    .carousel-slide {
      flex: 0 0 33.33%; /* Each image takes up 33.33% of the container */
    }
  `;

  // Remove the keyframes animation from the JS code in the documentation
  carouselJs.innerText = `
    document.addEventListener("DOMContentLoaded", function () {
      const carouselContainer = document.getElementById("carousel-container");
      let currentIndex = 0;

      if (carouselContainer) {
        const images = ["beach.jpeg", "rocket.jpeg", "flamePrius.jpeg"];

        function showImages() {
          // Clear the container
          carouselContainer.innerHTML = "";

          // Create and append three image elements
          for (let i = currentIndex - 1; i <= currentIndex + 1; i++) {
            const index = (i + images.length) % images.length;
            const slide = document.createElement("img");
            slide.src = \`components/img/\${images[index]}\`;
            slide.alt = \`Slide \${index + 1}\`;
            slide.classList.add("carousel-slide");
            carouselContainer.appendChild(slide);
          }
        }

        function updateCarousel() {
          // Move to the next set of images with a transition
          carouselContainer.style.transition = "transform 1s ease-in-out";
          carouselContainer.style.transform = "translateX(-100%)";

          // Move to the next image index after the transition is complete
          setTimeout(function () {
            currentIndex = (currentIndex + 1) % images.length;
            showImages();
            carouselContainer.style.transition = "none";
            carouselContainer.style.transform = "translateX(0)";
          }, 1000); // Adjust the timeout to match the transition duration
        }

        // Show the initial set of images
        showImages();

        // Set an interval for the next slide
        setInterval(updateCarousel, 3000);
      }
    });
  `;
});