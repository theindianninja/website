// JavaScript Document


function documentadd(myPlayerNumber,gameRef)
{
	//setTimeout(function(){
		var PLAYER_NAME_LOCATION = 'player_name';
		var playerNameRef = gameRef.child(PLAYER_NAME_LOCATION);
		playerNameRef.on('value',function(snapshot){
			document.getElementById("names").innerHTML = "";
			snapshot.forEach(function(childSnapshot) {
			yolo = childSnapshot.val();
			console.log(yolo,'sakdjlasjdklsajdlksjal');
			$( ".names" ).append( '<div class="grid__item1">'+yolo+'</div>' );
			});
			
			
		});
		
		//adds initializing button to webpage
		var GAME_DETAILS = 'game';
		var gameDetailsRef = gameRef.child(GAME_DETAILS).child('round');
		gameDetailsRef.on('value',function(snapshot){
			if(snapshot.val() == null)
			{
				document.getElementById("userinput").innerHTML = '<a href="javascript:void(0)" onClick="startgame()"><div id="three"><p style="color:#aaa;text-align:center;">START GAME</p></div></a>';
			}
			else
			{
				document.getElementById("userinput").innerHTML = '<div id="oneone"><p style="color:white;size:24px;margin:0px;text-align:left;">CURRENT CARD</p><br><div id="drop-area" class="drop-area"><div><div class="drop-area__item"><div class="dummy"></div></div></div></div></div><div id="twotwo"><p style="color:#9A9292;size:24px;margin:0px;text-align:right;padding-right:17px;">YOUR CARDS</p><br><div id="grid" class="grid clearfix"><div id="cards">    </div></div></div><br><br>';
			}
			
			
		});
	//},2000);

		//adds card information to webpage.
		var PLAYER_DATA_LOCATION = 'player_data';
		var playerCardsRef = gameRef.child(PLAYER_DATA_LOCATION).child(myPlayerNumber).child('cards');
		gameDetailsRef.on('value',function(snapshot){
			if(snapshot.val() == null)
			{
				document.getElementById("cards").innerHTML = "";
			}
			else
			{
				snapshot.forEach(function(childSnapshot) {
				yolo = childSnapshot.val();
				console.log(yolo,'sakdjlasjdklsajdlksjal');
				$( ".cards" ).append( '<div class="grid__item">'+ yolo+'</div>' );
				});
			}
			
			
		});
		
		
		//something else that darkens the screen when it's not your turn
}