$(document).ready(function(){
var uname = "";

document.getElementById('buttonClick').onclick = function(){  
  	uname = document.getElementById('uname').value;
  	if(uname==""){
  		alert('Please enter a valid username.');
  	}
  	else{
  		document.getElementById('login').innerHTML="Welcome, " + uname + "! Go see what you've missed on the message board!";
  	}
}

document.getElementById('button').onclick = function(){
				var thoughts =document.getElementById('thoughts').value;
				if(uname==""){
					alert("Please login to post on the message board!");
				}
				else if(thoughts==""){
					alert('Please enter a response');
				}				
				else{
					var newNode= document.createElement('p');
					newNode.innerHTML = uname + ": " + thoughts;
					document.getElementById('content').appendChild(newNode);
				}
				document.getElementById('frm1').reset();
			}

});
