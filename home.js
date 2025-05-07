document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  // Demo: hardcoded credentials
  if (username === "admin" && password === "secure123") {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "items.html"; // Redirect after login
    }, 1500);
  } else {
    message.textContent = "Invalid username or password.";
  }
});
