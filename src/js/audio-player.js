const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const audioUpload = document.getElementById('audio-upload');

// Manejar la subida de audio
audioUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    audioSource.src = fileURL;
    audio.load();
    audio.play();
  }
});