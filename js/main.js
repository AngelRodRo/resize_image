
function imageToDataUri(img, width, height) {

   var image = document.getElementById("preview1");
  image.setAttribute('crossOrigin', 'anonymous');

  // create an empty canvas element
  var canvas = document.createElement("canvas"),
      canvasContext = canvas.getContext("2d");

   image.onload = function () {

     //Set canvas size is same as the picture
     canvas.width = image.width;
     canvas.height = image.height;

     // draw image into canvas element
     canvasContext.drawImage(image, 0, 0, image.width, image.height);

     // get canvas contents as a data URL (returns png format by default)
     var dataURL = canvas.toDataURL("image/png");

     var image1 = new Image();
      image1.src = dataURL;
      document.body.appendChild(image1);


   };

}
