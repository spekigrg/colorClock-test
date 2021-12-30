function colorClock() 
  {
    var date = new Date();
   
    var hours = date.getHours();
    if (hours < 10) {
      hours = '0' + hours; 
    }
    var minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes; 
    }
        
    var seconds = date.getSeconds();
    if (seconds < 10) {
      seconds = '0' + seconds; 
    }
  
    var clockFace = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerHTML = clockFace;
  
    hours *= 10.6;
    minutes *= 4.25;
    seconds *= 4.25;
    var rgbColor = 'rgb(' + hours + ',' + minutes + ',' + seconds + ')';
    document.body.style.background = rgbColor;
  
    setTimeout(function() {colorClock();}, 1000);
  }

  colorClock();
  