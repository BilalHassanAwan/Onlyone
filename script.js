
let counter = 30;
let countdownEl = document.getElementById("countdown");
let overlay = document.getElementById("overlay");
let birthdayPrompt = document.getElementById("birthday-prompt");
let loveMessage = document.getElementById("love-message");
let gallery = document.getElementById("photo-gallery");
let errorMsg = document.getElementById("error-msg");

let timer = setInterval(() => {
  counter--;
  countdownEl.innerText = counter;
  if (counter === 0) {
    clearInterval(timer);
    overlay.classList.add("hidden");
    birthdayPrompt.classList.remove("hidden");
  }
}, 1000);

function checkBirthday() {
  const input = document.getElementById("birthday-input").value.trim();
  if (input === "28/01/2005") {
    birthdayPrompt.classList.add("hidden");
    loveMessage.classList.remove("hidden");
    gallery.classList.remove("hidden");
    errorMsg.innerText = "";
  } else {
    errorMsg.innerText = "Oops! That’s not your birthday.";
  }
}
