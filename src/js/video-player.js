const video = document.getElementById('video');
const videoSource = document.getElementById('video-source');
const videoUpload = document.getElementById('video-upload');

// Manejar la subida de video
videoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    videoSource.src = fileURL;
    video.load();
    video.play();
  }
});