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