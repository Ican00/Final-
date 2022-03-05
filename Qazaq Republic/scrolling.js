//mouseover
(function() {

  var btn = document.getElementById("btn");

  addEvent(btn, "mouseover", handler);


  function handler ( event ) {
    alert("Happy to see you here!");
  }

})();

function addEvent ( element, event, fnc ) {
  var events = event.split(/\s/),
      evt = "";
  while ( evt = events.shift() ) {
    ((element.addEventListener) ? element.addEventListener(evt, fnc, false) : element.attachEvent("on" + evt, fnc));
  }
}

function removeEvent ( element, event, fnc ) {
  var events = event.split(/\s/),
      evt = "";
  while ( evt = events.shift() ) {
    ((element.removeEventListener) ? element.removeEventListener(evt, fnc, false) : element.detachEvent("on" + evt, fnc));
  }
}


//music
function playMusic(){

  document.getElementById('click').play();
}


//onkeypress

function comment() {
        let z = document.getElementById("review").value;
        if(z==="yes")
       document.getElementById('thx').play();


      }
