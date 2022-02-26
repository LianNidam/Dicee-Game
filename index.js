
var randomNamber1= Math.floor( Math.random()*6)+1; //number between 1-6
var randomDiceImage= "dice" +randomNamber1+ ".png"; // dice1.png - dice6.png

var randomImageSource= "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
