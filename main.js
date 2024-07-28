Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    pmg_quality:90
});
prediction_1="";
prediction_2="";
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() { 
    Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
         }); 
        }
    console.log('ml5 version',ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kWXN2Pjd5/model.json',modelLoaded);
    function modelLoaded(){
        console.log('Model Loaded!');
    }
    function check ()
    {
        img=document.getElementById('captured_image');
        classifier.classify(img,gotResult);
    }
    function speak()
    {
        var synth =window.speechSynthesis;
speak_data1 = "The first prediction is"+ prediction_1;
speak_data2 = "The second prediction is"+ prediction_2;
var utterThis= new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(utterThis)
    }
    ﻿function gotResult(error, results) 
    { if (error) { 
        console.error(error);
 } 
     else { console.log(results)
        ; document.getElementById("result_hand_name").innerHTML = results[0].label; 
        document.getElementById("result_hand_name2").innerHTML = results[1].label; 
        prediction_1 = results[0].label; 
        prediction_2 = results[1].label;

    speak();
    if (results[0].label == "peace")
    {
    document.getElementById("update_hand").innerHTML = "&#9996;";
    }
    if(results[0].label == "thumbs up")
    {
    document.getElementById("update_hand").innerHTML = "&#128077;";
    }
    if(results[0].label == "ok")
    {
        document.getElementById("update_hand").innerHTML = "&#x1f44c;";
    
    }

    if(results [1]. label == "peace")
    {
    document.getElementById("update_hand2").innerHTML = "&#x1f44c;";
    }
    if(results[1].label=="thumbs up")
    {
    document.getElementById("update_hand2").innerHTML = "&#128077;;";
    }
 
    if(results[1].label=="ok")
    {
    document.getElementById("update_hand2").innerHTML = "&#x1f44c;";
    }
}
    }
