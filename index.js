const drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++ in drumButtons) {
  drumButtons[i].addEventListener("click", function () {
    this.style.color = "white";
  });
}

// const audio = new Audio("sounds/tom-1.mp3");
// audio.play();
