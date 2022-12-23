status= "";
objects= [];
function preload() {
    image1= loadImage("varanda.jpeg");
    image2= loadImage("sala.jpeg");
    image3= loadImage("salaDeJantar.jpeg");
    image4= loadImage("quartoDaBagunça.jpeg");
    image5= loadImage("meuQuarto.jpeg");
    image6= loadImage("cozinha.jpeg");
}
function setup() {
    canvas= createCanvas(480, 380);
    canvas.center();
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detectando Objetos";
}
function modelLoaded() {
    console.log("COCOMELON");
    status= true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects= results;
}
function draw() {
    if(status != "") {
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML= "Status: Ojebeto Decetidado";
            fill("#a742f5");
            percent= floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#a742f5");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function model() {
    image(0, 0, 480, 380);
}