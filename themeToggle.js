// themeToggle.js

// Function to toggle between light and dark modes
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Update the button text and icon based on the current theme
  const themeButton = document.getElementById("themeToggle");
  if (body.classList.contains("dark-mode")) {
    themeButton.innerHTML =
      '<i class="fa-regular fa-sun"></i><span>Light mode</span>';
  } else {
    themeButton.innerHTML =
      '<i class="fa-regular fa-moon"></i><span>Dark mode</span>';
  }
}

// Add a click event listener to the theme button
document.addEventListener("DOMContentLoaded", function () {
  const themeButton = document.getElementById("themeToggle");
  if (themeButton) {
    themeButton.addEventListener("click", toggleTheme);
  }
});
