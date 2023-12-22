let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "Correct!";
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You loose";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You loose";
      document.querySelector(".score").textContent = 0;
    }
  }
});

console.log(number);
