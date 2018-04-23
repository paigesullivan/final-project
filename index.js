$(document).ready(function(){
var uname = "";

document.getElementById('buttonClick').onclick = function(){  
  	uname = document.getElementById('uname').value;
  	document.getElementById('login').innerHTML="Welcome, " + uname + "! Go see what you've missed on the message board!";
}
});
