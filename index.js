var ReadlineSync = require("readline-sync");
var chalk = require("chalk");

console.log("***********************************");
var userName = ReadlineSync.question(chalk.bold.cyan("Can we have your beautiful name.... \n"));
console.log(chalk.italic.yellow.bold("\nHEY " +userName+ "!!!\n "));
console.log(chalk.bold.cyan('"Lets Test your Knowledge" \n'));
console.log(chalk.bold("************************"));
console.log(chalk.bgBlue.underline("RULES OF THE GAME:"));
console.log("1)To finish the quiz you need to answer all the questions.");
console.log("2)For every correct answer you will get 1 point and for every wrong answer 0.5 will be deducted from your score.");
console.log("3)For every question you have 3 options and you need to give(a,b,c) one option as your answer.");
console.log(chalk.bold("************************\n"));

var score = 0;

function play(question,answer){
  var userAnswer = ReadlineSync.question(chalk.italic.blue(question));
  if(userAnswer === answer){
    console.log(chalk.italic.green("Well Done!!! You are doing Great"));
    score++;
    console.log(chalk.italic.green("Your Current Score is : " + score));
  }else{
    console.log(chalk.italic.red("Wrong Answer!!! Better Luck Next Time"));
    score = score - 0.5 ;
    console.log(chalk.italic.red("Your Current Score is : " + score));
  }
}

function QuizSelection(question){
  var userChoice = ReadlineSync.question(chalk.yellow.italic(question));
  if(userChoice === "a"){
    console.log(chalk.italic.bgBlue.underline("\nLets Test your Knowledge on your Favourite Show - FRIENDS\n"));
    
    for(var i = 0; i < questions1.length ; i++){
      play(questions1[i].question,questions1[i].answer);
      console.log(chalk.bold("================================"));
    }
  }
  else if(userChoice === "b"){
    console.log(chalk.italic.bgBlue.underline("\nLets Test your Knowledge on your Favourite Show - HOW I MET YOUR MOTHER\n"));
    
    for(var i = 0; i < questions2.length ; i++){
      play(questions2[i].question,questions2[i].answer);
      console.log(chalk.bold("================================"));
    }
  }
}

var EntryQuestion = "Please Select Your Fav Show. \n a)FRIENDS  b)HOW I MET YOUR MOTHER \n";

var questions1 = [{
  question : "Which FRIENDS are siblings? \n a)Monica and Ross \n b)Chandler and Joey \n c)Phoebe and Joey \n",
  answer : "a"
},{
  question : "Who did Rachel almost marry? \n a)Paolo \n b)Barry \n c)Richard \n",
  answer : "b"
},{
  question : "What is Joey's catchphrase? \n a)Hey whats up? \n b)How's it hanging? \n c)How you doin? \n",
  answer : "c"
},{
  question : "Where are Ross,Rachel, and Monica from? \n a)Long island \n b)New Jersey \n c)Connecticut \n",
  answer : "a"
},{
  question : "What is the name of the coffee house the Friends hangout at? \n a)Starbucks \n b)Central Coffee \n c)Central Perk \n",
  answer : "c"
}];

var questions2 = [{
  question : "In What year is Ted talking to his kids and narrating the episodes? \n a)2040 \n b)2030 \n c)2050 \n",
  answer : "b"
},{
  question : "What instrument does Ted steal for Robin? \n a)Guitar \n b)French horn \n c)Flute \n",
  answer : "b"
},{
  question : "What is the name of Barneys's brother? \n a)John \n b)Jack \n c)James \n",
  answer : "c"
},{
  question : "How many times is Marshall aloowed to slap Barney? \n a)5 \n b)10 \n c)3 \n",
  answer : "a"
},{
  question : "Where does Robin move at the beginning of season 4? \n a)Turkey \n b)California \n c)Japan \n",
  answer : "c"
}];

QuizSelection(EntryQuestion);
if(score >= 3.5 && score <= 5){
  console.log(chalk.italic.cyan("SUPERB!!! you have nailed it"));
  console.log(chalk.italic.cyan("Final Score is : " + score));
}else{
  console.log(chalk.italic.cyan("WELL Played !!!"));
  console.log(chalk.italic.cyan("Final Score is : " + score));
}
console.log(chalk.italic.cyan("THANK YOU " +userName+ "!!! KEEP PLAYING AND KEEP SUPPORTING!!!\n"));


function showLeaderBoard(){
  if(score > 3){
    console.log(chalk.italic.cyan("Congrats you have beaten one of the leaderboards score.... Please send me screenshot to update you score in leaderboard..\n"));
  }
  console.log(chalk.underline.bgBlue("LeaderBoard"));
  console.log("***********************************");
  console.log("1.Player 1 -> 5 \n2.Player 2 -> 4.5 \n3.Player 3 -> 4 \n4.Player 4 -> 3.5 \n5.Player 5 -> 3");
}
showLeaderBoard();
console.log("***********************************");




