$(function(){
   $("#form").submit(function(ev){
      var fileInput = $("#fileInput");
      var filebase64 = $("#filebase64");

      resize_image(fileInput,filebase64,200,200);

   });
});

function resize_image(input,inputbase64,width,height){

   var image = null;
   var file = input[0].files[0];

   var reader = new FileReader();
   reader.onload = function(e){
      image = e.target.result;
      resize(image,inputbase64,width,height);
   };
   reader.readAsDataURL(file);
}

function resize(dataURL, inputbase64, width, height) {

   var image = new Image();
   image.src=dataURL;
   // create an empty canvas element
   var canvas = document.createElement("canvas"),
   canvasContext = canvas.getContext("2d");

   canvas.width = width;
   canvas.height = height;

   // draw image into canvas element
   canvasContext.drawImage(image, 0, 0, width, height);

   // get canvas contents as a data URL (returns png format by default)
   inputbase64.val(canvas.toDataURL("image/png"));

   submitForm($("#form"));

}

function submitForm(form) {
    var fd = new FormData(form);
    $.ajax({
      url: "http://0.0.0.0:3000/uploadBase64",
      type: "POST",
      data: fd,
      enctype: 'multipart/form-data',
      processData: false,  // tell jQuery not to process the data
      contentType: false   // tell jQuery not to set contentType
    }).done(function( data ) {
      alert('Se envio correctamente');
    });
}
