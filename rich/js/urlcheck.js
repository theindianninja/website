// JavaScript Document
window.onload = function() {
	urlCheck();
};

function urlCheck()
{
	var urlArray = window.location.href.split( '?' );
	gameID = urlArray[1];
	if(gameID == null)
	{
		//alert('gameID is null');
		window.location.replace("joinroom.html");
	} else {
		return gameID
	}
}