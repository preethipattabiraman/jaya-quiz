var readLineSync = require('readline-sync');
var questions = require('./questions');
var username = readLineSync.question("What is your name? ");
var score = 0;
console.log("Welcome, " + username + " to Mahabharata quiz!");

var highScores = [
  {
    name : "Preethi",
    score : 6
  }
]
//Play function
function play(question, answer) {
  console.log("----Question----");
  let yourAnswer = readLineSync.question(question);

  if(yourAnswer.toLowerCase() == answer.toLowerCase()) {
    score++;
    console.log("You're right.");
  }
  else {
    console.log("Oops.");
  }
  console.log("----Score----");
  console.log(score);
}

for(let i = 0 ; i < questions.length ; i++) {
  play(questions[i].question, questions[i].answer);
}

//Check for high highScores

for(let i = 0; i < highScores.length ; i++) {
    if(score > highScores[i].score) {
    console.log("Whoo hoo! You are a high scrorer!");
    highScores.push({name : username, score : score});
    break;
  }
}

console.log("Check out the high scrorers!\nName\tScore");

for(let i = 0; i < highScores.length ; i++) {
    console.log(highScores.name + "\t" + highScores.score + "\n");
    
}