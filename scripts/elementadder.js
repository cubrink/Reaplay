function add_profile_desc(reference, position, name, job, date) {
    var text = `<div class="w3-card w3-round w3-white profile-desc">
    <div class="w3-container">
    <h4 class="w3-center">My Profile</h4>
    <p class="w3-center"><img src="/w3images/avatar3.png" class="w3-circle" style="height:106px;width:106px" alt="Avatar"></p>
    <hr>
    <p><i class="fa fa-user fa-fw w3-margin-right w3-text-theme"></i>${name}</p>
    <p><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>${job}</p>
    <p><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>${date}</p>
    </div>
    </div>
    <br>
    `;
    reference.insertAdjacentHTML(position, text);
}

function add_coach_accordian(reference, position) {
  var text =`<div class="coach-accordian">
          <div class="w3-card w3-round" id="demo-list">
            <div class="w3-white">
              <button onclick="myFunction('Demo1')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Team</button>

              <div id="Demo1" class="w3-hide w3-container">
                <!--<p>MST Club Volleyball</p>-->
                <br>
                <button type="button" class="w3-button w3-theme"><i class="fa fa-users"></i>  MST Club Volleyball</button> 
                <br><br>
              </div>

              <button onclick="myFunction('Demo2')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-calendar-check-o fa-fw w3-margin-right"></i> Team Games</button>
              <div id="Demo2" class="w3-hide w3-container">
                <br>
                <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Crossover Event</button> 
                <br><br>
                <!--<p>Crossover Event</p>-->
              </div>

              <button onclick="myFunction('Demo3')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-book fa-fw w3-margin-right"></i> Playbook</button>
              <div id="Demo3" class="w3-hide w3-container">
                <div class="w3-row-padding">
                <br>
                <button type="button" class="w3-button w3-theme"><i class="fa fa-book"></i>  Playbook</button>
                <br><br>
                  <div class="w3-half">
                    <img src="./images/std_attack_play.jpg" alt="Volleyball Play" style="width:100%;">
                  </div>
                  <div class="w3-half">
                    <img src="./images/std_cross_play.jpg" alt="Volleyball Play" style="width:100%;">
                    </div>
                  <div class="w3-half">
                    <img src="./images/std_slide_play.jpg" alt="Volleyball Play" style="width:100%;">
                  </div>
                  <div class="w3-half">
                    <img src="./images/std_back_row_play.jpg" alt="Volleyball Play" style="width:100%;">
                  </div>
                  <div class="w3-half">
                    <img src="./images/alt_back_row_play.jpg" alt="Volleyball Play" style="width:100%;">
                  </div>
                  <div class="w3-half">
                    <img src="./images/std_set_front_row.jpg" alt="Volleyball Play" style="width:100%;">
                  </div>
                </div>
              </div>
            </div>      
          </div>
          <br>
        </div>
        `;
    reference.insertAdjacentHTML(position, text);
}

function add_accordion(reference, position) {
    var text =`<div class="w3-card w3-round accordion" id="demo-list">
          <div class="w3-white">
            <button onclick="myFunction('Demo1')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Team</button>

            <div id="Demo1" class="w3-hide w3-container">
              <!--<p>MST Club Volleyball</p>-->
              <button type="button" class="w3-button w3-theme"><i class="fa fa-users"></i>  MST Club Volleyball</button> 
            </div>

            <button onclick="myFunction('Demo2')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Games</button>
            <div id="Demo2" class="w3-hide w3-container">
              <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Crossover Event</button> 
              <!--<p>Crossover Event</p>-->
            </div>

            <button onclick="myFunction('Demo3')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-video-camera fa-fw w3-margin-right"></i> My Videos</button>
            <div id="Demo3" class="w3-hide w3-container">
          <div class="w3-row-padding">
          <br>
            <div class="w3-half">
              <video width=100% height=100% controls>
              <source src="./videos/clip1.mp4" type="video/mp4" style="width:100%" class="w3-margin-bottom">
              </video>
            </div>
            <div class="w3-half">
              <video width=100% height=100% controls>
                <source src="./videos/clip2.mp4" type="video/mp4" style="width:100%" class="w3-margin-bottom">
              </video>
              </div>
            <div class="w3-half">
              <video width=100% height=100% controls>
                <source src="./videos/clip3.mp4" type="video/mp4" style="width:100%" class="w3-margin-bottom">
              </video>
            </div>
            <div class="w3-half">
              <video width=100% height=100% controls>
                <source src="./videos/clip4.mp4" type="video/mp4" style="width:100%" class="w3-margin-bottom">
              </video>
            </div>
            <div class="w3-half">
              <video width=100% height=100% controls>
                <source src="./videos/clip5.mp4" type="video/mp4" style="width:100%" class="w3-margin-bottom">
              </video>
            </div>
            <div class="w3-half">
              <video width=100% height=100% controls>
                <source src="./videos/clip6.mp4" type="video/mp4" style="width:100%" class="w3-margin-bottom">
              </video>
            </div>
          </div>
            </div>
          </div>      
        </div>
        <br>
        `;
    reference.insertAdjacentHTML(position, text);
}

function add_player_positions(reference, position, player_data) {
    var text = `<div class="positions">
    <div class="w3-card w3-round w3-white w3-hide-small">
    <div class="w3-container">    
      <p>Positions</p>
      <p>`;
    for (var i = 0; i < player_data['positions'].length; i++) {
        text += create_player_position_line(player_data['positions'][i], player_data['weights'][i]);
    }
    text += `</p>
    </div>
  </div>
  <br>
  </div>`
  reference.insertAdjacentHTML(position, text);

}

function create_player_position_line(player_position, weight) {
   return `<span class="w3-tag w3-small w3-theme${weight_tag_mapper(weight)}">${player_position}</span>\n`
}

function weight_tag_mapper(weight) {
    var map = {
        0: "-l5",
        1: "-l4",
        2: "-l3",
        3: "-l2",
        4: "-l1",
        5: "",
        6: "-d1",
        7: "-d2",
        8: "-d3",
        9: "-d4",
        10: "-d5"
    };
    var color = map[weight];
    if (color != undefined) {
        return color;
    }
    else {
        return "";
    }
}

function add_question(reference, position, question) {
    var text = `<div class="quiz-question">
    <div class="w3-row-padding quiz">
      <div class="w3-col m12">
        <div class="w3-card w3-round w3-white">
          <div class="w3-container w3-padding">

            <h2 class="w3-opacity">${question["questionToAsk"]}</h2>
            <h6 class="w3-opacity">What was your accomplishment today?</h6>

            <img src=${question["imageSource"]} alt="Volleyball Play" style="width:80%;">

            <p>Select the answer:</p>
            <span>
                <form>
                    ${create_checkbox_questions(question["answers"])}
                </form>
            </span>
            <br>
            <button type="button" class="w3-button w3-theme" onclick="nextQuestion()"><i class="fa fa-arrow-right"></i>  Next</button>  
          </div>
        </div>
      </div>
          </div>
          <br>
      </div>`
    reference.insertAdjacentHTML(position, text);
}

function create_checkbox_questions(answers){
    var text = ``;
    for (var i = 0; i < answers.length; i++) {
        text += `<input type="checkbox" name="Answer${i}"> ${answers[i]}<br>\n`;
    }
    return text;
}

function insert_question_at_bottom(question) {
    questions = document.getElementsByClassName('quiz-question');
    last_question = questions.item(questions.length - 1);
    add_question(last_question, "afterend", question);
}