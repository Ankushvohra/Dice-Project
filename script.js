const randomNumber = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomNumber < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw !";
}
var diceImage1 = `Images/images/dice${randomNumber}.png`;
var diceImage2 = `Images/images/dice${randomNumber2}.png`;
document.querySelector('.img1').setAttribute('src', diceImage1);
document.querySelector('.img2').setAttribute('src', diceImage2);
if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerhtml = "Player 1 Wins";
}
else if (randomNumber < randomNumber2) {
  document.querySelector("h1").innerhtml = "Player 2 Wins";
}
else {
  document.querySelector("h1").innerhtml = "Draw !";
}
function refresh() {
  // Refresh the page
  location.reload();
}