function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var fonts = ["Arial", "Helvetica", "Verdana", "Georgia", "Times New Roman", "Courier New", "Tahoma", "Impact"];
    var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#000000", "#ffffff"];
  
    var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    var clockElement = document.getElementById("clock");
    clockElement.innerHTML = hours + ":" + minutes + ":" + seconds;
    clockElement.style.fontFamily = randomFont;
    clockElement.style.color = randomColor;
  
    var audio = document.getElementById("sound");
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  
    setTimeout(updateClock, 1000);
  }
  
  updateClock();