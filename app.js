document.getElementById('btnOne').addEventListener('click', function (diceRoll){
let randomNumber = Math.floor(Math.random() * 6 + 1);
let secondRandomNumber = Math.floor(Math.random() * 6 + 1);






const firstDiceImage = "images/dice" + randomNumber + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);



const secondDiceImage = "images/dice" + secondRandomNumber + '.png';
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);






if(randomNumber > secondRandomNumber){
  document.querySelector('#winLose').innerHTML = ("player one is the winner!")
}else if(randomNumber < secondRandomNumber){
  document.querySelector('#winLose').innerHTML = ("Player two is the winner!")
}else if(randomNumber = secondRandomNumber){
  document.querySelector('#winLose').innerHTML = ("It's a Draw!")
}else{
  document.querySelector('#winLose').innerHTML = ("")
}


});
