var randomNumb =  Math.floor((Math.random()*6))+1;
var randomDiceImage = "./images/dice" + randomNumb + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

//var randomNumb2 =  Math.floor((Math.random()*6))+1;
//var randomDiceImage2 = "./images/dice" + randomNumb2 + ".png";
//var image2 = document.querySelectorAll("img")[1];
//image2.setAttribute("src", randomDiceImage2);

var randomNumb2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "./images/dice" + randomNumb2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if(randomNumb > randomNumb2){
    document.querySelector("h1").textContent = "Palyer 1 Won!!";
}
else if(randomNumb < randomNumb2){
    document.querySelector("h1").textContent = "Playe 2 Won!!";
}
else if(randomNumb === randomNumb2){
    document.querySelector("h1").textContent = "Draw!!";
}