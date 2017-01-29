//startgame.js

function startgame() {
	
	
	gameID = urlCheck();
	var GAME_LOCATION = 'https://therich.firebaseio.com/rooms/'+gameID;
	var gameRef = new Firebase(GAME_LOCATION);
	var PLAYER_NAME_LOCATION = 'player_name';
	var playerNameRef = gameRef.child(PLAYER_NAME_LOCATION);
	
	playerNameRef.on('value',function(snapshot){
		length =0;
		snapshot.forEach(function(childSnapshot) {
			yolo = childSnapshot.val();
			length++;
		});
		console.log(length);
		alert(length);
		if(length>1)
		{
			//initialize all of the basic variables.
			var GAME_DETAILS = 'game';
			var gameDetailsRef = gameRef.child(GAME_DETAILS).child('round');
			gamesDetailsRef.set(-1); //this will eventually turn to +1 once all of the initializing has been done.
			//then, call the deck assigning function. (or maybe I'll just include it here. or maybe not.)
			cardassign(gameRef,length);
		}
		else
		{
			alert('not enough players:'+length);
		}
	});
}