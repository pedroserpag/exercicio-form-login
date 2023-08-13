const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault;

  CheckUsername();
});

function errorInput(input, messege) {
  const formItem = input.parentElement;
  const textMessege = formItem.querySelector("p");

  textMessege.innerText = messege;
  formItem.classname = "input-box error";
}

function CheckUsername() {
  const usernameValue = username.value;
  if (usernameValue === "") {
    errorInput(username, "Este campo é obrigatório");
  } else {
    const formItem = username.parentElement;
    formItem.classname = "input-box";
  }
}
