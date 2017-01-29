    var ref = new Firebase("https://sleepsurvey.firebaseio.com/");
	
	
    function register(){
        var usersRef = ref.child("users");
        emailaddress =$('#emailaddress').val();
        password = $('#password').val();
        ref.createUser({
            email    : emailaddress,
            password : password
            }, function(error, userData) {
                if (error) {
                    console.log("Error creating user:", error);
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            });


var isNewUser = true;
ref.onAuth(function(authData) {
    if (authData==null){
        isNewUser = true;
    }
  if (authData && isNewUser) {
    // save the user's profile into the database so we can list users,
    // use them in Security and Firebase Rules, and show profiles
    ref.child("users").child(authData.uid).set({
      provider: authData.provider,
      name: getName(authData)
    });
  }
});
// find a suitable name based on the meta info given by each provider
function getName(authData) {
  switch(authData.provider) {
     case 'password':
       return authData.password.email.replace(/@.*/, '');
     case 'twitter':
       return authData.twitter.displayName;
     case 'facebook':
       return authData.facebook.displayName;
  }
}

    }



    function login11(){
        var usersRef = ref.child("users");
        emailaddress =$('#emailaddress').val();
        password = $('#password').val();
        ref.authWithPassword({
            email    : emailaddress,
            password : password
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    localStorage.setItem(authData.uid, 'uid')
                    window.location.replace('sleepsurvey.html');
                }
            });




    }

    function logout() {
        ref.unauth();
    }


//this makes sure user is online
// Create a callback which logs the current auth state
function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}

// Register the callback to be fired every time auth state changes
var ref = new Firebase("https://sleepsurvey.firebaseio.com/");
ref.onAuth(authDataCallback);

    
   

$('#loginwithfacebook').click(function() {
    myDataRef.authWithOAuthRedirect("facebook", function(error) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            // We'll never get here, as the page will redirect on success.
        }
    });
});


//Save objects
function saveEvent(uid) {

}
