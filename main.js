function classify() {
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
maikyalikhu = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ux91ggue6/model.json', modelReady);
}

function modelReady() {
    console.log("sab theek hai...");
    maikyalikhu.classify(gotresult);
}

var dog = 0;
var cat = 0;
var bird = 0;

function gotresult(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("okay3").innerHTML = "I am hearing " + result[0].label;
        document.getElementById("okay4").innerHTML = "The accuracy of my prediction is  " + (result[0].confidence*100).toFixed(2) + "%";
        document.getElementById("okay3").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("okay4").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        if (result[0].label== "Cat") {
            document.getElementById("MotiSa").src= "https://i.ytimg.com/vi/4MhPevpZ9V4/hqdefault.jpg";
        }

        else if (result[0].label== "Dog") {
            document.getElementById("MotiSa").src= "https://www.readersdigest.ca/wp-content/uploads/2019/09/shutterstock_editorial_4862621u_huge-e1567183791714-1.jpg?fit=700,467";
        }

        else if (result[0].label== "Bird") {
            document.getElementById("MotiSa").src= "https://www.irishtimes.com/polopoly_fs/1.2539743.1455805719!/image/image.jpg_gen/derivatives/ratio_4x3_w1200/image.jpg";
        }
    }
    
}
