function showCookieWall() {
    document.getElementById('cookiewall').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }
  
  function checkAge() {
    var age = document.getElementById('ageInput').value;
  
    if (age >= 18) {
      window.location.href = 'https://www.youtube.com/'; 
    } else {
      document.getElementById('cookiewall').style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('redPage').style.display = 'block';
    }
  }
  