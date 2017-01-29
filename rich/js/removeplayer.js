// JavaScript Document

//wait is required, because other functions have priority upon room entry/refresh. (race conditions)
setTimeout(function(){removeplayer();
}, 5000);



function removeplayer() {
	userid = loginCheck();
	roomid = urlCheck();
	var dataRef = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_data');
	var playerRef = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_list');
	var y2;
	var track; //we have to use track here b/c the setTimeout doesn't pause the rest of the loop. It continues on; if you use i by itself, you'll end up deleting the last player.
	
		//if your presence state changes...
	dataRef.on('value', function(snapshot) {
			//gotta see if you're in the game.
			playerRef.on('value', function(snapshot) {
				
				y2 = snapshot.val();
				for(i = 0;i<=(y2.length)-1;i++)
				{
					
					var userRef = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_data/' + i + '/state');
					userRef.once('value', function(snapshot) {//alert(snapshot.val());
						if(snapshot.val() != true /*&& abs(snapshot.val()-Firebase.ServerValue.TIMESTAMP)>50000*/)
						{
							track = i;
							var userRef = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_data/' + track + '/state');
							console.log(track);
							setTimeout(function(){
								userRef.once('value', function(snapshot) {console.log(snapshot.val(),111111);
									if(snapshot.val() != true && snapshot.val() != null)
									{
										
										var delete1Ref = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_data/' + track);
										var delete2Ref = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_list/' + track);
										var delete3Ref = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_name/' + track);
										var delete3Ref = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_number/' + track);
										delete1Ref.remove();
										delete2Ref.remove();
										delete3Ref.remove();
										delete4Ref.remove();
										track = -1;
										//playerRef.off();
									}
								});
							}, 5000);
							
							/*
							var user1Ref = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_list/' + i);
							var user2Ref = new Firebase('https://therich.firebaseio.com/rooms/' +roomid + '/player_data/' + i);
							user1Ref.remove();
							user1Ref.remove();
							*/
						}
					});
				}
			});  
	
	});
}