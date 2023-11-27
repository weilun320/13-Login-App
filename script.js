function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");

  const isCorrectUsername = usernameInput.value === "john.doe@example.com";
  const isCorrectPassword = passwordInput.value === "qwerty123";

  if(isCorrectUsername && isCorrectPassword) {
    result.innerHTML = "Welcome John!";
  }
  else if(isCorrectUsername) {
    result.innerHTML = "Wrong password";
  }
  else {
    result.innerHTML = "Wrong password/username";
  }
}