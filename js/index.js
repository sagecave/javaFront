function numberGenerator() {
  let number = Math.round(Math.random() * 5);
  let yourNumber = document.querySelector("input");
  let header = document.querySelector("h2");
  let guess = yourNumber.value;
  console.log(guess);
  if (guess === number) {
    header.textContent = "Winner, the number was  " + number;
    header.style.color = "green";
    console.log("ja");
  } else if (guess <= number) {
    header.textContent = "Loser the number was to high ";
    header.style.color = "red";
    console.log("nej");
  } else {
    header.textContent = "Loser the number was to low";
    header.style.color = "red";
    console.log("nej");
  }
}

// function randomNuber() {
//   let nummer = Math.round(Math.random() * (100 + 1));
//   document.querySelector("h1").textContent = nummer;
//   console.log("You number is", nummer);
// }

// randomNuber();
