// Toggle "Show More" section
document.getElementById("moreBtn").addEventListener("click", function () {
  const moreInfo = document.getElementById("moreInfo");
  if (moreInfo.classList.contains("hidden")) {
    moreInfo.classList.remove("hidden");
    this.textContent = "Show Less";
  } else {
    moreInfo.classList.add("hidden");
    this.textContent = "Show More";
  }
});

// Toggle dark/light theme
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
