/*doc = document

//middle = document.getElementsByClassName("w3-col m7");

//document.getElementsByClassName("w3-col m7")

function gen_card(user, title, text) {
    middle = document.getElementsByClassName("w3-col m7");

    var card = document.createElement("div")
}*/

function __add_element_before(reference, other) {
    reference.parentNode.insertBefore(other, reference.nextSibling);
}

function add_element_before(reference, other) {
    elem = createElementFromHTML("<br>");
    __add_element_before(reference, elem);
    __add_element_before(elem, other);
}

function gen_profile_description(job, location, date) {
    return`
    <div class="w3-card w3-round w3-white" id="profile_description">
        <div class="w3-container">
            <h4 class="w3-center">My Profile</h4>
            <!--<p class="w3-center"><img src="/w3images/avatar3.png" class="w3-circle" style="height:106px;width:106px" alt="Avatar"></p> -->
            <hr>
            <p><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>${job}</p>
            <p><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>${location}</p>
            <p><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>${date}</p>
        </div>
    </div>
    <br>
    `
}

function gen_position(position) {
    return `<span class="w3-tag w3-small w3-theme-d5" id="position">${position}</span>`
}

function gen_positions(positions) {
    var s = `
    <!-- Interests --> 
        <div class="w3-card w3-round w3-white w3-hide-small" id="positions">
        <div class="w3-container">
        <p>Positions</p>
        <p id="position_paragraph">
        `;
    for (i = 0; i < positions.length; i++) {
        s += gen_position(positions[i]);
        s += "\n";
    }
    s += `</p>
        </div>
    </div>
    <br>`;
    return s;
}



function gen_card(name, text) {
    return `
    <div class="w3-container w3-card w3-white w3-round w3-margin"><br>
        <img src="/w3images/avatar2.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
        <span class="w3-right w3-opacity">1 min</span>
        <h4>${name}</h4><br>
        <hr class="w3-clear">
        <p>${text}</p>
        <div class="w3-row-padding" style="margin:0 -16px">
            <div class="w3-half">
            <img src="/w3images/lights.jpg" style="width:100%" alt="Northern Lights" class="w3-margin-bottom">
            </div>
            <div class="w3-half">
            <img src="/w3images/nature.jpg" style="width:100%" alt="Nature" class="w3-margin-bottom">
        </div>
        </div>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
    </div>
    `
}


function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
    //return div.childNodes;
  }

  //x.parentNode.insertBefore(createElementFromHTML(gen_card("Bob", "Hello")), x.nextSibling);