// const drumButtons = document.querySelectorAll(".drum");

// for (let i = 0; i < drumButtons.length; i++) {
//   drumButtons[i].addEventListener("keydown", function (e) {
//     switch (e.keyCode) {
//       case "83":
//         const tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;

//       case "68":
//         const tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;

//       case "70":
//         const snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;

//       case "32":
//         const kickBass = new Audio("sounds/kick-bass.mp3");
//         kickBass.play();
//         break;

//       case "74":
//         const crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;

//       case "75":
//         const tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;

//       case "76":
//         const tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       default:
//         console.log(e);
//         break;
//     }
//   });
// }

document.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "KeyS":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "KeyD":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "KeyF":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "Space":
      const kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "KeyJ":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "KeyK":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "KeyL":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(e.code);
      break;
  }
});

// document.addEventListener("keydown", function (e) {
//   console.log(e.code);
// });
