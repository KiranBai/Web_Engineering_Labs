function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'Kiran' && password === 'Kiran123') {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('username', username);
      showWelcomeMessage();
    } 
    else {
      alert('Invalid username or password');
    }
  }
  
  function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('welcomeMessage').style.display = 'none';
  }
  
  function showWelcomeMessage() {
    var username = localStorage.getItem('username');
    document.getElementById('loggedInUser').textContent = username;
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'block';
  }
  window.onload = function() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      showWelcomeMessage();
    }
  };
  
  
  

