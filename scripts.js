let activeIndex = 0;
const imageWrappers = document.querySelectorAll(".image-wrapper");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

function showImage(index) {
  // Hide the current image and text
  imageWrappers[activeIndex].classList.remove("active");

  // Show the new image and text
  imageWrappers[index].classList.add("active");

  // Update the active index
  activeIndex = index;
}

function showNextImage() {
  let index = activeIndex + 1;
  if (index >= imageWrappers.length) {
    index = 0;
  }
  showImage(index);
}

prevButton.addEventListener("click", () => {
  let index = activeIndex - 1;
  if (index < 0) {
    index = imageWrappers.length - 1;
  }
  showImage(index);
});

nextButton.addEventListener("click", () => {
  let index = activeIndex + 1;
  if (index >= imageWrappers.length) {
    index = 0;
  }
  showImage(index);
});

// Show the first image and text by default
imageWrappers[activeIndex].classList.add("active");

// Set the timer to show the next image and text every 5 seconds
let intervalTime = 10000; // default interval time
if (window.matchMedia("(max-width: 768px)").matches) {
  intervalTime = 5000; // change interval time for small screens
}
setInterval(showNextImage, intervalTime);
