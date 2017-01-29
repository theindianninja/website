var ref = new Firebase("https://therich.firebaseio.com/rooms");


function findroom() {
  var roomId = $('#roomid').val();
  roomId = roomId.replace(/@.*/, '');
  tryCreateRoom(roomId, 1); //the one here is an arbitrary data value for the room.
}

var USERS_LOCATION = ref;

function roomCreated(roomId, success) {
  if (!success) {
    alert('Joining Game Momentarily!');
	window.location.replace('room.html?'+roomId);
  } else {
    alert('Successfully created ' + roomId);
	window.location.replace('room.html?'+roomId);
  }
}

// Tries to set /rooms/<roomId> to the specified data, but only
// if there's no data there already.
function tryCreateRoom(roomId, roomData) {
  var roomsRef = ref;
  roomsRef.child(roomId).transaction(function(currentRoomData) {
    if (currentRoomData === null)
      return roomData;
  }, function(error, committed) {
    roomCreated(roomId, committed);
  });
}