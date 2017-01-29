// JavaScript Document
var myDataRef = new Firebase('https://therich.firebaseio.com/');
window.onload = function() {
	loginCheck();
};
var userID;
function loginCheck()
{
	try{
	temp = localStorage.getItem('firebase:session::therich')
	var authData = JSON.parse(temp);
	if(authData == null) {
		//reroutes back to the login page.
		alert('yo');
		window.location.replace("login.html");
	} else {
		var classRef = myDataRef.child("users").child(authData.uid);
		//alert(classRef);
		return authData.uid;
	};
	} catch (exception){
		window.location.replace("login.html");
	}
		
}