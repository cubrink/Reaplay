var question0 = {
  "questionToAsk": "Is this the correct play for default attacking",
  "imageSource": "../images/std_attack_play.jpg",
  "answers": [ "True", "False" ],
  "correctAnswer": 0
};

var question1 = {
  "questionToAsk": "Is this the correct play for a backrow attack",
  "imageSource": "../images/std_attack_play.jpg",
  "answers": [ "True", "False" ],
  "correctAnswer": 0
};

var question2 = {
  "questionToAsk": "Is this the correct play for trick play #1",
  "imageSource": "../images/std_attack_play.jpg",
  "answers": [ "True", "False" ],
  "correctAnswer": 0
};

var questions = {
  "question1": question0,
  "quesiton2": question1,
  "question3": question2
};

var coach_data = {
  "name":       "Joe Smith",
  "residence":  "St. Louis, MO",
  "birthday":   "3/3/1985",
  "username":   "joe_smith1",
  "password":   "1234"
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
               player2_data]
}

var playerArray = [player0_data, player1_data, player2_data];


var player0_data = {
  "name":       "John Doe",
  "positions":  ["Setter", "Outside Hitter"],
  "weights":    [10, 5],
  "username":   "john_doe1",
  "password":   "1234"
};

var player1_data = {
  "name":       "Bobby Miller",
  "positions":  ["Libero", "DS"],
  "weights":    [10, 3],
  "username":   "bobby_miller1",
  "password":   "1234"
};

var player2_data = {
  "name":       "Jacob Joseph",
  "positions":  ["Middle", "Rightside Hitter"],
  "weights":    [10, 7],
  "username":   "jacob_joseph1",
  "password":   "1234"
}

function logIn(username, password) {
  playerArray.forEach(function(playerArray){
    if (playerArray[i].username == username && playerArray[i].password == password){
      localStorage.setItem("user", "playerArray[i]");
    }
  });
  if (coach_data.username == username && coach_data.password == password){
    localStorage.setItem("user", "coach_data");
  }

}
