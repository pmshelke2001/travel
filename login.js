//login.js


// login.js
function login(event) {
    event.preventDefault();
  
    // Temporary login credentials
    const credentials = [
      { username: "user1", password: "ganesh123" },
      { username: "user2", password: "password2" },
      // Add more temporary credentials as needed
    ];
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Find matching credentials
    const user = credentials.find((cred) => cred.username === username && cred.password === password);
  
    if (user) {
      // Redirect to the account details page
      window.location.href = "accountDetails.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
