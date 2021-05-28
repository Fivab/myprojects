Webcam.set({
    width:384,
    height:316,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'">';
    });
}

console.log('ml5 version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/w8Xd8IxYF/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}