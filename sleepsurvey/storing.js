var myDataRef = new Firebase('https://sleepsurvey.firebaseio.com/');
//var authData = JSON.parse(sessionStorage.myObject);
yo = localStorage.getItem('firebase:session::sleepsurvey')
var authData = JSON.parse(yo);
if(authData == null) {
	window.location.replace("login.html");
} else {
var classRef = myDataRef.child("users").child(authData.uid).child("classes");
}

function saveClass1(){
	if(!($('#time').val()==null))
	{
	var classRef = myDataRef.child("users").child(authData.uid).child("data");
    classRef.push().set({
    	time: $('#time').val(),
    	category: $('#category').val()
    })
	window.location.replace("sleepsurvey.html");
	}
}


 function logout() {
        myDataRef.unauth();
		window.location.replace("login.html");
    }
	
	function viewCalendar() {
		window.location.replace("calendar.html");
	}