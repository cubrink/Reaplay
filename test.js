/*
var coach = {name:"" , username:"" , teamName:"" , roster:"" , playerArray:player[], questions:"" , };

var player = {name:"" , position:"" , number:0 , };

var play = {image:"" , explanation:"" , };
*/

//2D
var coachArray = {};

var play_array = {};


//array
var defaultPlays = {};


function makeTeam()
{
  var coach = {name:"a " , username:"b " , teamName:"c " , roster:"d " , playerArray:player, questions:"e "};
  var player = {name:"a " , position:"b " , number:0};
  document.write(coach.username);
  return coach.name;
}

function makeCoach(firstName, lastName, roster, teamName)
{
  var coach = {name: (firstName + " " + lastName), teamName: teamName};
  printCoach(coach);
  return coach;
}

function printCoach(coach)
{
  document.write(coach.name);
  document.write(coach.teamName);
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
  return percentage;
}

function solve_question(a_question)
{
  var result = false;

  return result;
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
