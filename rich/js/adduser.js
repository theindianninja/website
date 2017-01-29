// JavaScript Document
var name;
userId1 = loginCheck();
var myDataRef = new Firebase('https://therich.firebaseio.com/');
	var classRef = myDataRef.child("users").child(userId1).child('name');
	//var classRef = new Firebase('https://therich.firebaseio.com/users/2c893b58-d606-460f-a77b-709ada76c898/name');
	//alert(classRef+'sdf');
	classRef.once('value', function(snapshot){
		name = snapshot.val();
	});
	//alert(name);

	//alert('hey');
adduser(name,userId1);
	
//add presence system to this.

function adduser(name1,userId1) {
	
	//alert(GAME_LOCATION);
	//gameID and userID are already defined.
	gameID = urlCheck();
	userId = userId1;
	name = name1;
	
	//alert(userId);
    // Consider adding '/<unique id>' if you have multiple games.
    

    // The maximum number of players.  If there are already 
    // NUM_PLAYERS assigned, users won't be able to join the game.
    var NUM_PLAYERS = 4;

    // The root of your game data.
    var GAME_LOCATION = 'https://therich.firebaseio.com/rooms/'+gameID;

    // A location under GAME_LOCATION that will store the list of 
    // players who have joined the game (up to MAX_PLAYERS).
    var PLAYERS_LOCATION = 'player_list';

    // A location under GAME_LOCATION that you will use to store data 
    // for each player (their game state, etc.)
    var PLAYER_DATA_LOCATION = 'player_data';
	var PLAYER_NAME_LOCATION = 'player_name';
	var PLAYER_NUMBER_LOCATION = 'player_number';
	var gameRef = new Firebase(GAME_LOCATION);
	
    assignPlayerNumberAndPlayGame(userId, gameRef);

    // Called after player assignment completes.
    function playGame(myPlayerNumber, userId, justJoinedGame, gameRef) {
        var playerDataRef = gameRef.child(PLAYER_DATA_LOCATION).child(myPlayerNumber);
		var playerNameRef = gameRef.child(PLAYER_NAME_LOCATION).child(myPlayerNumber);
		var playerNameRef = gameRef.child(PLAYER_NUMBER_LOCATION).child(myPlayerNumber);
        //alert('You are player number ' + myPlayerNumber +
            //'.  Your data will be located at ' + playerDataRef.toString());

        if (justJoinedGame) {
            //alert('Doing first-time initialization of data.');
            playerDataRef.set({
                userId: userId,
                state: true
            });
			playerNameRef.set(name
            );
			playerNumberRef.set(myPlayerNumber);
        }
		//alert('bitch');
		onlinecheck(myPlayerNumber, gameRef);
		documentadd(myPlayerNumber, gameRef);
		//alert('bitch');
    }

    // Use transaction() to assign a player number, then call playGame().
    function assignPlayerNumberAndPlayGame(userId, gameRef) {
        var playerListRef = gameRef.child(PLAYERS_LOCATION);
        var myPlayerNumber, alreadyInGame = false;
//alert('hey');
        playerListRef.transaction(function(playerList) {
            // Attempt to (re)join the given game. Notes:
            //
            // 1. Upon very first call, playerList will likely appear null (even if the
            // list isn't empty), since Firebase runs the update function optimistically
            // before it receives any data.
            // 2. The list is assumed not to have any gaps (once a player joins, they 
            // don't leave).
            // 3. Our update function sets some external variables but doesn't act on
            // them until the completion callback, since the update function may be
            // called multiple times with different data.
            if (playerList === null) {
                playerList = [];
            }

            for (var i = 0; i < playerList.length; i++) {
                if (playerList[i] === userId) {
                    // Already seated so abort transaction to not unnecessarily update playerList.
                    alreadyInGame = true;
                    myPlayerNumber = i; // Tell completion callback which seat we have.
                    return;
                }
				
            }
			
			for (var i = 0; i < playerList.length; i++) {
				if (playerList[i] == undefined) {
					if (playerList[i+1] != undefined) {
					playerList[i] = userId;
					myPlayerNumber = i;
					return playerList;
					}
				}
			}
			
            if (i < NUM_PLAYERS) {
                // Empty seat is available so grab it and attempt to commit modified playerList.
                playerList[i] = userId; // Reserve our seat.
                myPlayerNumber = i; // Tell completion callback which seat we reserved.
                return playerList;
            }

            // Abort transaction and tell completion callback we failed to join.
            myPlayerNumber = null;
        }, function(error, committed) {
            // Transaction has completed.  Check if it succeeded or we were already in
            // the game and so it was aborted.
            if (committed || alreadyInGame) {
                playGame(myPlayerNumber, userId, !alreadyInGame, gameRef);
            } else {
                alert('Game is full.  Can\'t join. :-(');
            }
        });
    }
}