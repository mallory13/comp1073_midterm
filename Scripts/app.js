// Steele Portfolio
// @author: Mallory Steele
// Midterm

// setup your IIFE (Immediately Invoked Function Expression)
var travelReport = (function () {

"use strict";
console.log("App Started...")

var filePath = location.pathname;
    filePath = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
    console.log(filePath);
    
  var IntroParagraph;
  var Folegandros;
  var Alonissos;
  var Spetses;
  var Amorgos;
  var Syros;
  var Milos;
  var Hydra;
  var Ithaca;
  var Gavdos;
  

                document.getElementById("IntroParagraph").innerHTML = "Skills:";
                document.getElementById("Folegandros").innerHTML = "Skills:";
                document.getElementById("Alonissos").innerHTML = "Skills:";
                document.getElementById("Spetses").innerHTML = "Skills:";
                document.getElementById("Amorgos").innerHTML = "Skills:";
                document.getElementById("Syros").innerHTML = "Skills:";
                document.getElementById("Milos").innerHTML = "Skills:";
                document.getElementById("Hydra").innerHTML = "Skills:";
                document.getElementById("Ithaca").innerHTML = "Skills:";
                document.getElementById("Gavdos").innerHTML = "Skills:";
                
    



})();

