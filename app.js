const btn = document.querySelector(".switch-btn");
const video = document.querySelector("#video");
const volumeSlider = document.querySelector(".volume-slider");
const progressBar = document.querySelector(".progress-bar");

// Play/Pause Toggle
btn.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    btn.classList.remove("paused");
  } else {
    video.pause();
    btn.classList.add("paused");
  }
});

// Volume Control
volumeSlider.addEventListener("input", function () {
  video.volume = volumeSlider.value / 100;
});

// Update Progress Bar as video plays
video.addEventListener("timeupdate", function () {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
});

// Click on progress bar to change video time
progressBar.addEventListener("input", function () {
  const seekTime = (progressBar.value / 100) * video.duration;
  video.currentTime = seekTime;
});

// Forward 5s
document.querySelector(".forward-btn").add
