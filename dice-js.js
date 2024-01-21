var randomnumber1 = Math.floor(Math.random()*6)+1;
var diceimage1 = "dice" + randomnumber1 + ".png";
var imagesource1 = "images/" + diceimage1;     
document.querySelectorAll("img")[0].setAttribute("src",imagesource1); 

var randomnumber2 = Math.floor(Math.random()*6)+1;
var diceimage2 = "dice" + randomnumber2 + ".png";
var imagesource2 = "images/" + diceimage2; 
document.querySelectorAll("img")[1].setAttribute("src",imagesource2); 

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins !";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins !";
}
else{
    document.querySelector("h1").innerHTML = "Game Draw !";
}