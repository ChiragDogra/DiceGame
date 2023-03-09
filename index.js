function spin(){var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "Images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "Images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);




// Creating the Win status

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "😃Player 1 wins🥲";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "🥲Player 2 wins😃";
}
else{
    document.querySelector("h1").innerHTML = "🤡 Draw! 🤡"
}
}

document.querySelector("button").addEventListener("click",()=>spin());