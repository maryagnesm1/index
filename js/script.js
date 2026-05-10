document.addEventListener("DOMContentLoaded", () => {

  const video = document.getElementById("museumVideo");
  const videoBtn = document.getElementById("videoBtn");

  const audio = document.getElementById("museumAudio");
  const audioBtn = document.getElementById("audioBtn");

  if (video && videoBtn) {

    videoBtn.addEventListener("click", () => {

      if (video.paused) {
        video.play();
        videoBtn.innerHTML = "❚❚";
      } else {
        video.pause();
        videoBtn.innerHTML = "▶";
      }

    });

  }

  if (audio && audioBtn) {

    audioBtn.addEventListener("click", () => {

      if (audio.paused) {
        audio.play();
        audioBtn.innerHTML = "❚❚";
      } else {
        audio.pause();
        audioBtn.innerHTML = "▶";
      }

    });

  }

});
