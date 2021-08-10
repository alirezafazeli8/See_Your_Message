"use strict";

// variable

const usernameInput = document.getElementById("username_input");
const passwordInput = document.getElementById("password_input");
const loginButton = document.getElementById("login-button");
const messageBox = document.querySelector(".message-box");
const btnShowAlert = document.querySelector(".btn-show-alert");
const boxAlert = document.querySelector(".ue_alert");
const userText = document.getElementById("user_text");
const message_container = document.querySelector(".message_container");
const sendMessageBtn = document.querySelector(".send-message");

let userInfo = [];

// alert eventListener
btnShowAlert.addEventListener("click", () => boxAlert.classList.add("hidden"));

function storeData() {
  // login button eventlistener
  loginButton.addEventListener("click", function () {
    // check empty value
    if (usernameInput.value == "" || passwordInput.value == "") {
      // remove box alert
      boxAlert.classList.remove("hidden");
    } else {
      // add hidden to  login page
      document.querySelector(".login-page").classList.add("hidden");
      // remove message box
      messageBox.classList.remove("hidden");
      userInfo.push({
        username: usernameInput.value,
        password: passwordInput.value,
      });

      // play music
      const musicCode = `
        <audio controls autoplay style="display: none;">
          <source src="ordakTakTak.mp3" type="audio/mpeg">
        </audio>
        `;

      document
        .querySelector("body")
        .insertAdjacentHTML("afterbegin", musicCode);
    }
  });
}
storeData();

sendMessageBtn.addEventListener("click", function () {
  const html = `
    <div class=" card-body vertical-scrollable" >
    <div class="row card-header ">
      <div class="user-name text-center row">
        <p class="col-md-9 m-0 text-center"><u>${userInfo[0].username}</u></p>
        <img class="col-md-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSit0UkX5R_ahtlUmsIyxKvgaH1uh6QGg8Dsg&usqp=CAU" alt="" style="width: 95px;">
      </div>
      <div class="card-body text-center" id="active_message">
        <div class="btn btn-success">
        <p class="card-text" >
            ${userText.value}
          </p>
        </div>
      </div>
    </div>
    </div>
  `;
  message_container.insertAdjacentHTML("afterbegin", html);

  // the charactersText
  function sendMessageFromCharacters() {
    const sherekText = `
      <div class="card-body vertical-scrollable">
      <div class="row card-header ">
        <div class="user-name text-center row">
          <p class="col-md-9 m-0 text-center"><u>Kids Call Me Life</u></p>
          <img class="col-md-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MRkGQgI11OH_5Zj45YX4HsQmfIfVXcYecw&usqp=CAU" alt="" style="width: 95px;">
        </div>
        <div class="card-body text-center">
          <div class="btn btn-success ">
        <p class="card-text">
              your call me? i love you my kid
            </p>
          </div>
        </div>
      </div>
    </div>
    `;

    const poorangText = `
      <div class="card-body vertical-scrollable">
      <div class="row card-header ">
        <div class="user-name text-center row">
          <p class="col-md-9 m-0 text-center"><u>poorang savage</u></p>
          <img class="col-md-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZQbaxr8CXATIx_8A_zBs0IExvn3r3z9h0Q&usqp=CAU" alt="" style="width: 95px;">
        </div>
        <div class="card-body text-center">
          <div class="btn btn-success">
          <p class="card-text ">
               Are You Last Babay Kid?i have party , party name is kid Ordak.
            </p>
          </div>
        </div>
      </div>
    </div>
    `;

    const pesarKhaleText = `
      <div class="card-body vertical-scrollable">
      <div class="row card-header ">
        <div class="user-name text-center row">
          <p class="col-md-9 m-0 text-center"><u>Pesar Khale </u></p>
          <img class="col-md-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JlNNY4IVPv3DGu3rdIilDTBRoSQ7anlpRA&usqp=CAU" alt="" style="width: 95px;">
        </div>
        <div class="card-body text-center">
          <div class="btn btn-success">
          <p class="card-text">
              im cousin of redhat boy - hey mr driver im goings tehran.
            </p>
          </div>
        </div>
      </div>
    </div>
    `;
    const newText = userText.value
      .split(" ")
      .filter(
        (value) =>
          value == "poorang" || value == "sherek" || value == "pesarkhale"
      )
      .join("")
      .trim();

    console.log(newText);

    switch (newText) {
      case "sherek":
        message_container.insertAdjacentHTML("afterbegin", sherekText);
        break;

      case "poorang":
        message_container.insertAdjacentHTML("afterbegin", poorangText);
        break;

      case "pesarkhale":
        message_container.insertAdjacentHTML("afterbegin", pesarKhaleText);
        break;
    }
  }

  sendMessageFromCharacters();
});
