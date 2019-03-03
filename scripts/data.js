var question0 = {
  "id": 0,
  "questionToAsk": "Is this the correct play for default attacking",
  "imageSource": "./images/std_attack_play.jpg",
  "answers": [ "True", "False" ],
  "correctAnswer": 0
};

var question1 = {
  "id": 1,
  "questionToAsk": "Is this the correct play for a backrow attack",
  "imageSource": "./images/std_attack_play.jpg",
  "answers": [ "True", "False" ],
  "correctAnswer": 1
};

var question2 = {
  "id": 2,
  "questionToAsk": "Is this the correct play for trick play #1",
  "imageSource": "./images/std_attack_play.jpg",
  "answers": [ "True", "False" ],
  "correctAnswer": 1
};

var quiz = [question0, question1, question2];

var coach_data = {
  "name":       "Joe Smith",
  "positions": ["Head Coach"],
  "home":  "St. Louis, MO",
  "birthday":   "3/3/1985",
  "username":   "joe_smith1",
  "password":   "1234",
  "picture":    "./images/blank_user.png"
};

var team_data = {
  "plays":    ["Standard Cross",
               "Standard Front Row Set",
               "Standard Slide",
               "Alternate Back Row",
               "Standard Attack",
               "Standard Back Row"],

  "roster":   [player0_data,
               player1_data,
               player2_data,
               player3_data,
               player4_data,
               player5_data]
}

var playerArray = [player0_data, player1_data, player2_data, player3_data, player4_data, player5_data];


var player0_data = {
  "name":       "John Doe",
  "positions":  ["Setter", "Outside Hitter"],
  "weights":    [10, 5],
  "username":   "john_doe1",
  "password":   "1234",
  "home":       "Rolla, Missouri",
  "birthday":   "April 17, 1998",
  "picture":    "./images/blank_user.png"
};

var player1_data = {
  "name":       "Bobby Miller",
  "positions":  ["Libero", "DS"],
  "weights":    [10, 3],
  "username":   "bobby_miller1",
  "password":   "1234",
  "home":       "Rolla, Missouri",
  "birthday":   "September 24, 1998",
  "picture":    "./images/blank_user.png"

};

var player2_data = {
  "name":       "Jacob Joseph",
  "positions":  ["Middle", "Rightside Hitter"],
  "weights":    [10, 7],
  "username":   "jacob_joseph1",
  "password":   "1234",
  "home":       "Rolla, Missouri",
  "birthday":   "February 12, 1997",
  "picture":    "./images/blank_user.png"
};

var player3_data = {
  "name":       "Peter Parker",
  "positions":  ["Outside Hitter", "Setter"],
  "weights":    [10, 4],
  "username":   "peter_parker1",
  "password":   "1234",
  "home":       "Rolla, Missouri",
  "birthday":   "April 29, 1998"
};

var player4_data = {
  "name":       "Jordan Micheals",
  "positions":  ["Rightside Hitter", "Outside Hitter"],
  "weights":    [10, 8],
  "username":   "jordan_micheals1",
  "password":   "1234",
  "home":       "Rolla, Missouri",
  "birthday":   "December 30, 1999"
}

var player5_data = {
  "name":       "Eddy Jones",
  "positions":  ["DS", "Libero"],
  "weights":    [10, 6],
  "username":   "eddy_jones1",
  "password":   "1234",
  "home":       "Rolla, Missouri",
  "birthday":   "June 23, 1997"
}

function logIn() {

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var match = false;
  playerArray.forEach(function(i){
    if (i.username == username && i.password == password){
      localStorage.setItem("name", JSON.stringify(i));
      localStorage.setItem("isCoach", false);
      match = true;
      window.location.href="./my_index.html";
    }
  });
  if (coach_data.username == username && coach_data.password == password){
    localStorage.setItem("name", JSON.stringify(coach_data));
    localStorage.setItem("isCoach", true);
    match = true;
    window.location.href="./my_index.html";
  }
  if(!match)
  {
    document.getElementById('error-message').removeAttribute('style');
  }
}
