const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your order!');
})
  // Reset the form fields after submission

  const loginForm = document.querySelector("form");
const loginButton = document.querySelector("#login-btn");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  // You can replace this code with your own server-side authentication code
  if (username === "admin" && password === "admin") {
    alert("Login successful");
  } else {
    alert("Incorrect username or password");
  }
});