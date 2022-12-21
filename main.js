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
}