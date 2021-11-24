prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width: 350,
    height:300,
    image_fromat:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2JIqi6xdQ/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }

else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction_1 = results[0].label
    prediction_2 = results[1].label
    if(results[0].label == "happy"){
        document.getElementById("update_emoji").innerHTML = "&#128522;";
    }

    if(results[0].label == "sad"){
        document.getElementById("update_emoji").innerHTML = "&#128532;";
    }

    if(results[0].label == "mad"){
        document.getElementById("update_emoji").innerHTML = "&#128545;"
    }

    if(results[0].label == "shocked"){
        document.getElementById("update_emoji").innerHTML = "&#128559;"
    }


    if(results[1].label == "happy"){
        document.getElementById("update_emoji2").innerHTML = "&#128522;";
    }

    if(results[1].label == "sad"){
        document.getElementById("update_emoji2").innerHTML = "&#128532;";
    }

    if(results[1].label == "mad"){
        document.getElementById("update_emoji2").innerHTML = "&#128545;"
    }

    if(results[1].label == "shocked"){
        document.getElementById("update_emoji2").innerHTML = "&#128559;"
    }
    }
}