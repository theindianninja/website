// JavaScript Document

function cardassign(gameRef, length) {
	
	cardArrOld = ["AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS","AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC"];
	cardArr = shuffle(cardArrOld);
	
	numCards = Math.floor(52/length);
	oddball = 52%length;
	arr = Array.apply(null, Array(length)).map(Number.prototype.valueOf,0);;
	for (i = 0; i <oddball; i++)
	{
		hey = Math.floor(Math.random() * (length+1 - 0)) + 0;
		arr[hey] = arr[hey]+1;
	}
	
	var PLAYER_NUMBER_LOCATION = 'player_number';
	var playerNumberRef = gameRef.child(PLAYER_NUMBER_LOCATION);
	
	playerNumberRef.on('value',function(snapshot){
		length =0;
		number =0;
		snapshot.forEach(function(childSnapshot) {
			//assign [numcards] amount of cards + whatever amount from the random loop
			var PLAYER_DATA_LOCATION = 'player_data';
			for(i =0; i < numCards+arr[length];i++)
			{
				
				var playerCardRef = gameRef.child(PLAYER_DATA_LOCATION).child(childSnapshot).child('cards').child(i);
				playerCardRef.set(cardArr[i+number]) //the + number part is to make sure it iterates through entire array.
			}
			number = number+numCards+arr[length];
			length = length+1;
			//then set user as active player
			var playerActiveRef = gameRef.child(PLAYER_DATA_LOCATION).child(childSnapshot).child('playstate');
			playerActiveRef.set('active');
		});
	});
	
	//then call to next function here.
}