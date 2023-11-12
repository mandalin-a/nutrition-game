
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const loginErrorMessage = document.getElementById("login-error-message")

loginButton.addEventListener("click", (e) => {

    e.preventDefault();
    let username = loginForm.username.value;
    let password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        window.location.assign("./index.html");
    } else {
        loginErrorMessage.style.opacity = 1;
        loginForm.username.value = '';
        loginForm.password.value = '';
    }
})