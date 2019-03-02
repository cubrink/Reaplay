/*
var coach = {name:"" , username:"" , teamName:"" , roster:"" , playerArray:player[], questions:"" , };

var player = {name:"" , position:"" , number:0 , };

var play = {image:"" , explanation:"" , };
*/

//2D
var coachArray = {};

var play_array = {};

function Coach(first, last, roster, team, plays) {
  this.firstName = first;
  this.lastName = last;
  this.teamName = team;
  this.playArray = plays;
}


//array
var defaultPlays = {};


function makeTeam()
{
  var coach = {name:"a " , username:"b " , teamName:"c " , roster:"d " , playerArray:player, questions:"e "};
  var player = {name:"a " , position:"b " , number:0};
  //document.write(coach.username);
  return coach.name;
}

function makeCoach(firstName, lastName, roster, teamName)
{
  var coach = {name: (firstName + " " + lastName), teamName: teamName, roster: roster};

  document.getElementById('demo').innerHTML = coach.name;
  document.getElementById('demo1').innerHTML = coach.roster;
  document.getElementById('demo2').innerHTML = coach.teamName;
}

function quiz(position, question_num, questions)
{
  var numCorrect;
  var percentage;
  for (var i = 0; i < question_num; i++)
  {
    if (solve_question(questions[i]))
    {
      ++numCorrect;
    }
  }
  percentage = numCorrect/question_num;
  //return percentage;
  //document.getElementById('demo3').innerHTML = percentage;
}

function solve_question(a_question_answer, a_question_response)
{
  var result = false;
  if (a_question_answer == a_question_response)
  {
    result = true;
  }

  document.getElementById('demo3').innerHTML = result;
}

function addPlayer(playerArray, new_player)
{
  teamArray.push(new_player);
}

function deletePlayer(playerArray, playerNum,)
{
  for(var i = 0; i < playerArray.size(); i++)
  {
    if (playerArray.number == playerNum)
    {
      playerArray.splice(i, 1);
    }
  }
  return playerArray;
}

function sortArray(playerArray)
{
  sort(playerArray);
  return playerArray
}
