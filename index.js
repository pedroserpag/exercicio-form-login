const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

function errorInput(input, messege) {
  const formItem = input.parentElement;
  const textMessege = formItem.querySelector("p");

  textMessege.innerText = messege;
  formItem.className = "input-box error";
}

function CheckInputUsername() {
  const usernameValue = username.value;
  if (usernameValue === "") {
    errorInput(username, "Digite um username!");
  } else {
    const formItem = username.parentElement;
    formItem.className = "input-box";
  }
}

function CheckInputPassword() {
  const passwordValue = password.value;
  if (passwordValue === "") {
    errorInput(password, "Digite uma password!");
  } else {
    const formItem = password.parentElement;
    formItem.className = "input-box";
  }
}

function checkForm() {
  CheckInputUsername();
  CheckInputPassword();

  const formItems = form.querySelectorAll(".input-box");
  const isValid = [...formItems].every((item) => {
    return item.className === "input-box";
  });

  if (isValid) {
    alert("CADASTRADO COM SUCESSO");
  }
}

username.addEventListener("blur", () => {
  CheckInputUsername();
});
password.addEventListener("blur", () => {
  CheckInputPassword();
});
