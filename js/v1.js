function getImage(){
   var input = $("#files")[0];
   var file = input.files[0];
   // load file into preview pane
   var reader = new FileReader();
   reader.onload = function(e){
      imageToDataUri(e.target.result,200,200);
   };
   reader.readAsDataURL(file);
}

function imageToDataUri(base64, width, height) {

   var image = new Image();
   image.src=base64;
   // create an empty canvas element
   var canvas = document.createElement("canvas"),
   canvasContext = canvas.getContext("2d");

   canvas.width = 200;
   canvas.height = 200;

   // draw image into canvas element
   canvasContext.drawImage(image, 0, 0, 200, 200);

   // get canvas contents as a data URL (returns png format by default)
   var dataURL = canvas.toDataURL("image/png");
   alert(dataURL);

   var filebase64 = $("#filebase64");

   filebase64.val(dataURL);
   alert("filebase64 = " +filebase64.val());

   submitForm();


}

function submitForm() {
    console.log("submit event");
    var fd = new FormData(document.getElementById("fileinfo"));
    $.ajax({
      url: "http://0.0.0.0:3000/uploadBase64",
      type: "POST",
      data: fd,
      enctype: 'multipart/form-data',
      processData: false,  // tell jQuery not to process the data
      contentType: false   // tell jQuery not to set contentType
    }).done(function( data ) {
      console.log("PHP Output:");
      console.log( data );
    });

}
