
var importedModule = require ('./component1');
var Component1 = importedModule.Component1;


// var jQuery = require("jquery");

require ('./../sass/bundlesass.scss');

// require ('./../css/bundlecss.css');


console.log("I'm from main APP.js file !!! -_.oOo._- ");

document.getElementsByClassName("loader")[0].innerHTML = "DONE : use a for in loop";

document.getElementById("demo").innerHTML = "Paragraph changed!";


//(function ($) {
//    $('h1').after("<p>Hello world</p>");
//})(jQuery);