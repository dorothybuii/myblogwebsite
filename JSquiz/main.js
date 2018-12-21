function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

  if (
    question1 == "December 3rd" ||
    question1 == "12/3" ||
    question1 == "12/03" ||
    question1 == "december 3rd" ||
    question1 == "dec 3rd" ||
    question1 == "dec 3"
  ) {
    correct++;
  }
  if (question2 == "Salted Caramel Icecream") {
    correct++;
  }
  if (question3 == "Magic Tricks") {
    correct++;
  }

  var messages = ["You're a superstar!", "Decent!", "Wow you suck"];
  var pictures = ["images/1.gif", "images/2.jpg", "images/3.jpg"];

  var range;
  if (correct < 1) {
    range = 2;
  }
  if (correct > 0 && correct < 3) {
    range = 1;
    //&& means if correct is greater than 0 AND less than 3
  }
  if (correct > 2) {
    range = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML =
    "You got " + correct + " correct!";
  document.getElementById("picture").src = pictures[range];
}
