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

function nextQuestion(id) {
  /*document.getElementById("start1").innerHTML = output*/
  if (id <= quiz.length - 1) {
    var previousAnswers = document.getElementsByClassName('quiz-question');
    for (var i = 0; i < previousAnswers.length; i++) {
      previousAnswers.item(i).getElementsByTagName('button').item(0).setAttribute('style', 'display: None');
    }

    insert_question_at_bottom(quiz[id], id);

  }
}

function showGrade() {
  var grade = gradeQuiz();
  var questions = document.getElementsByClassName('quiz-question')
  var ref = questions.item(questions.length - 1);

  add_grade_box(ref, "afterend", grade);

  for (var i = 0; i < questions.length; i++) {
    var question = questions.item(i).setAttribute("style", "display:None");
  }
}

function startQuiz() {
  var ref = document.getElementById('quiz-start');
  ref.setAttribute('hidden', 'true');
  insert_question_at_bottom(quiz[0], 0);
}

function gradeQuiz() {
  var questions = document.getElementsByClassName('quiz-question');
  var total_questions = questions.length;
  var correct_questions = 0;

  for (var i = 0; i < questions.length; i++) {
    var question = quiz[i];
    var responses = questions.item(i).getElementsByTagName('input');

    var correct = true;
    var all_unchecked = true;
    for (var j = 0; j < responses.length; j++) {
      response = responses.item(j).checked;
      if (response) {
        all_unchecked = false;
      }
      if (question['correctAnswer'] != j && response) {
        correct = false;
        break;
      }
    }

    if (correct && !all_unchecked) {
      correct_questions += 1;
    }
  }
  return (correct_questions / total_questions);
}

function buildIndex() {
  //var isCoach = localStorage.getItem('isCoach');
  var user_data = JSON.parse(localStorage.getItem('user'));

  buildLeft(user_data);
  buildMiddle(user_data);
}

function buildLeft(user_data) {

  add_profile_desc(left, "beforeend", user_data);
  if (isCoach === "true") {
    add_coach_accordion(left, "beforeend");
  }
  else {
    add_accordion(left, "beforeend");
    add_player_positions(left, "beforeend", user_data);
  }
}

function buildMiddle(user_data) {
  ref = document.getElementById('post-message');

  for (var i = 0; i < messages.length; i++) {
    var message = messages[i];
    insert_message(message['message'], message['user_data']);
  }
}

function indexMain() {
  //localStorage.setItem('name', JSON.stringify(player1_data));
  //localStorage.setItem('isCoach', false);

  isCoach = localStorage.getItem('isCoach');
  user_data = JSON.parse(localStorage.getItem('name'));

  left = document.getElementById('left_column');

  buildIndex()
}


function buildIndexAlt() {
  //var isCoach = localStorage.getItem('isCoach');
  var user_data = JSON.parse(localStorage.getItem('user'));

  buildLeftAlt(user_data)
}

function buildLeftAlt(user_data) {

  add_profile_desc(left, "beforeend", user_data);
  if (isCoach === "true") {
    add_coach_accordion(left, "beforeend");
  }
  else {
    add_accordion(left, "beforeend");
    add_player_positions(left, "beforeend", user_data);
  }
}

function altMain() {
  //localStorage.setItem('name', JSON.stringify(player1_data));
  //localStorage.setItem('isCoach', false);

  isCoach = localStorage.getItem('isCoach');
  user_data = JSON.parse(localStorage.getItem('name'));

  left = document.getElementById('left_column');

  buildIndexAlt()
}



function postMessage() {
  user_data = JSON.parse(localStorage.getItem('name'));
  var message = document.getElementById('message').innerText;
  if (message.length > 0) {
    insert_message(message, user_data)
  }
}

