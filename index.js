$(document).ready(function(){
var uname = "";

document.getElementById('buttonClick').onclick = function(){  
  	uname = document.getElementById('uname').value;
  	document.getElementById('login').innerHTML="Welcome, " + uname + "! Go see what you've missed on the message board!";
}

document.getElementById('button').onclick = function(){
				var thoughts =document.getElementById('thoughts').value;
				if(thoughts!="" && uname!=""){
					var newNode= document.createElement('p');
					newNode.innerHTML = uname + ": " + thoughts;
					document.getElementById('content').appendChild(newNode);
				}
				else{
					alert("Please login to post on the message board!");
				}
				document.getElementById('frm1').reset();
			}

});
