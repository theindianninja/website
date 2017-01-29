/********onlinecheck.js*********/
//onlinecheck();
function onlinecheck(myPlayerNumber, gameRef){
	//alert('nigga1');
	/*
userid = loginCheck();
roomid = urlCheck();
var amOnline = new Firebase('https://therich.firebaseio.com/.info/connected');
var playerRef = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_list/');
//or easiest thing to do is just to take values from adduser.js ... that entire thing is mucking up the rest of the code.
var y1;
var yolo = [];
//alert('s');
//maybe make a forloop that iterates through the playerRef path, 0-8(number of players) and uses the once function. 
playerRef.on('value', function(snapshot) {
			y1 = snapshot.val();
			snapshot.forEach(function(childSnapshot) {
			yolo = yolo+ [childSnapshot.val()];
				
			});
				//console.log(y1);
		});
var hi = 'sdasd';
console.log(y1);
//alert('nigga2');
*/
var amOnline = new Firebase('https://therich.firebaseio.com/.info/connected');
var PLAYERS_LOCATION = 'player_list';
var PLAYER_DATA_LOCATION = 'player_data';
var playerDataRef = gameRef.child(PLAYER_DATA_LOCATION).child(myPlayerNumber);
var playerLocationRef = gameRef.child(PLAYER_DATA_LOCATION).child(myPlayerNumber);
amOnline.on('value', function(snapshot) {
	//alert('nigga3');
	//if your presence state changes...
	if (snapshot.val()) {
		//gotta see if you're in the game.
		//snapshot.forEach(function(childSnapshot) {
			//	yolo = childSnapshot.val();
				//alert(yolo);
				
			//});
			//now it works, but I have to add in something that allows for multiple sessions.
			/*var userRef = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_data/' + myPlayerNumber + '/state');
			alert(userRef);
						userRef.onDisconnect().set(Firebase.ServerValue.TIMESTAMP);
						userRef.set(true);*/
		/*this works for now...but ideally, there shouldn't be any delay.
		*///setTimeout(function(){
			/*
				for(i = 0;i<=(y1.length)-1;i++)
				{
					if(y1[i] == userid)
					{
						*/
						
						var userRef = playerDataRef.child('/state');
						userRef.onDisconnect().set(Firebase.ServerValue.TIMESTAMP);
						//alert('nigga');
						userRef.on('value', function(snapshot) {
							userRef.set(true);
						});
					//}
				//}
			
		  //},1000);
	}
	
});
}

/*
var presenceRef = new Firebase('https://therich.firebaseio.com/disconnectmessage');
// Write a string when this client loses connection
presenceRef.onDisconnect().set("I disconnected!");//create small little function that waits*/