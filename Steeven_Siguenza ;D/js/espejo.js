// Select the element that contains the video
let video = document.querySelector("#video");

// Check if the navigator.mediaDevices.getUserMedia method is available in the browser
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    video.srcObject = stream;
  })
  .catch(function (err0r) {
    console.log("Algo salio mal");
  });
}