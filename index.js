
var randomNamber1= Math.floor( Math.random()*6)+1; //number between 1-6
var randomDiceImage= "dice" +randomNamber1+ ".png"; // dice1.png - dice6.png

var randomImageSource= "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//the same cod , now its for the second player

var randomNamber2= Math.floor( Math.random()*6)+1;

var randomImageSource2= "images/dice" + randomNamber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNamber1 > randomNamber2){
  document.querySelector("h1").innerHTML =" Player 1 is the Winner! 🚩"
}
else if (randomNamber2> randomNamber1) {
  document.querySelector("h1").innerHTML =" Player 2 is the Winner 🚩!"
}
else{
  document.querySelector("h1").innerHTML =" Draw!"
}
