// Accordion
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else { 
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function submitAnswers() {
  /*document.getElementById("start1").innerHTML = output*/
}

var question0 = {
  "questionToAsk": "Is this the correct play for default attacking",
  "imageSource": "./images/std_attack_plays.jpg",
  "answers": [ "True", "False", "Maybe" ],
  "correctAnswer": 0
};

var question1 = {
  "questionToAsk": "Is this the correct play for a backrow attack",
  "imageSource": "./images/std_attack_plays.jpg",
  "answers": [ "True", "False" ],
  "correctAnswer": 0
};

var question2 = {
  "questionToAsk": "Is this the correct play for trick play #1",
  "imageSource": "./images/std_attack_plays.jpg",
  "answers": [ "True", "False" ],
  "correctAnswer": 0
};

var questions = {
  "question1": question0,
  "quesiton2": question1,
  "question3": question2
}