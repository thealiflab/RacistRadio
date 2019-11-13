//Button pressed
var buttonID;
for(var i = 0; i< document.querySelectorAll(".radio").length; i++){
  document.querySelectorAll(".radio")[i].addEventListener("click", function() {

    buttonID = this.id;

    console.log(buttonID); //for debugging

    makeSound(buttonID);

    buttonAnimation(buttonID);

  });
}



//Keypress in Keyboard
document.addEventListener("keypress", function(event){

  console.log(event.key);

  var key;

  switch (event.key) {
    case "1":
      key = "black";
      break;

    case "2":
      key = "arab";
      break;

    case "3":
      key = "latino";
      break;

    case "4":
      key = "white";
      break;

    case "5":
      key = "mix";
      break;

    default:
      console.log(event.key);  //for debugging

  }
  makeSound(key);

  buttonAnimation(key);
})


//for sound
function makeSound(button){
  switch (button){
    case "black":
      black = new Audio("assets/black.mp3");
      black.play();
      break;

    case "arab":
      arab = new Audio("assets/arab.mp3");
      arab.play();
      break;

    case "latino":
      latino = new Audio("assets/latino.mp3");
      latino.play();
      break;

    case "white":
      white = new Audio("assets/white.mp3");
      white.play();
      break;

    case "mix":
      mix = new Audio("assets/mix.mp3");
      mix.play();
      break;

    default:
      console.log(buttonID);  //for debugging

  }
}

//animation
function buttonAnimation(pressedkey){
  var button = document.querySelector("#"+pressedkey);
  button.classList.add("pressed");

  setTimeout(function(){
    button.classList.remove("pressed");
  }, 100)
}
