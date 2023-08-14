const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  CheckUsername();
  CheckPassword();
});

function errorInput(input, messege) {
  const formItem = input.parentElement;
  const textMessege = formItem.querySelector("p");

  textMessege.innerText = messege;
  formItem.className = "input-box error";
}

function CheckUsername() {
  const usernameValue = username.value;
  if (usernameValue === "") {
    errorInput(username, "Este campo é obrigatório");
  } else {
    const formItem = username.parentElement;
    formItem.className = "input-box";
  }
}

function CheckPassword() {
  const passwordValue = password.value;
  if (passwordValue === "") {
    errorInput(password, "Este campo é obrigatório");
  } else {
    const formItem = password.parentElement;
    formItem.className = "input-box";
  }
}
