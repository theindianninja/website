var myDataRef = new Firebase('https://sleepsurvey.firebaseio.com/');
yo = localStorage.getItem('firebase:session::sleepsurvey')
var authData = JSON.parse(yo);
if(authData == null) {
	window.location.replace("login.html");
} else {
var classRef = myDataRef.child("users").child(authData.uid).child("classes");
}
console.log(authData.uid);
var datasArr = [];
var datasArr2 = [16];
var labelsArr = ["Recommended"];
var key = [];
yolo = 0;
myDataRef.once('value', function(snapshot) {
	yolo = snapshot.val();
	console.log(yolo);
	snapshot.forEach(function(childSnapshot) {
		yolo = childSnapshot.val();
		//console.log(yolo);
		childSnapshot.forEach(function(childSnapshot) {
			yolo = childSnapshot.val();
			//console.log(yolo.data);
			swag = yolo.data;
			childSnapshot.forEach(function(childSnapshot) {
				yolo = childSnapshot.val();
				//console.log(yolo);
				childSnapshot.forEach(function(childSnapshot) {
				yolo = childSnapshot.val();
				//console.log(yolo);
				key1 = [];
				key1.push(childSnapshot.key());
				key1.push(yolo.time)
				key1.push(yolo.category)
				key.push(key1)
				});
			});
		});
		
});
	console.log(key[key.length-1][2] +'niggggga');
	if(key[key.length-1][2] == "wake"){
		datasArr2.push(0);
		console.log('niggga');
	}
	
	for (i=0; i<key.length-1;i++){
		for (j = 1; j <3; j++)
		{
		console.log(key[i][j]);
		}
		//this is for the sleep bar
		if(key[i][2] == "sleep")
		{
			//console.log('hey');
			if(key[i+1][2] == "wake")
			{
				
				labelsArr.push("Day " +(labelsArr.length-1));
				
				var timeSleep = key[i][1].split(':');
				var timeAwake = key[i+1][1].split(':');
				var hours = timeAwake[0] - timeSleep[0];
				datasArr.push(hours);
				//console.log(hours);
				//dataArr.push();
				//console.log('hey');
			}
		}
		
		//this is for the awake bar
		if(key[i][2] == "wake")
		{
			//console.log('hey');
			if(key[i+1][2] == "sleep")
			{
				
				//labelsArr.push("Day " +(labelsArr.length-1));
				
				var timeAwake = key[i][1].split(':');
				var timeSleep = key[i+1][1].split(':');
				if(timeSleep > timeAwake){
				var hours = timeSleep[0] - timeAwake[0];
				console.log(hours+'hey');
				datasArr2.push(hours);
				}else{
					var hours = Number(timeAwake[0])+Number(timeSleep[0]);
					console.log(hours+'hey'+timeAwake[0]+'hey'+timeSleep[0]);
				datasArr2.push(hours);
				}
				
				//dataArr.push();
				//console.log('hey');
			}
		}
		
		
		
	}
	
	average =8;
		datasArr.push(average);
var hello = datasArr.reverse();
var randomScalingFactor = function(i){ console.log('hellothere');return datasArr[i]};
	var barChartData = {
		labels : labelsArr,
		datasets : [
			{
				fillColor : "rgba(255,222,173,0.5)",
				strokeColor : "rgba(255,222,173,0.8)",
				highlightFill : "rgba(255,222,173,0.75)",
				highlightStroke : "rgba(255,222,173,1)",
				data : datasArr2
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,0.8)",
				highlightFill: "rgba(151,187,205,0.75)",
				highlightStroke: "rgba(151,187,205,1)",
				data : datasArr
			},
			
		]
	}
		var ctx = document.getElementById("canvas").getContext("2d");
		console.log(barChartData);
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true,
			scaleGridLineColor : "rgba(0,0,0,.05)",
			scaleFontColor: "#FFFFFF"
		});
	//var dataArr = dataArr.reverse();
		
}, function (errorObject) {
	console.log("error:" + errorObject.code);
	
});


	window.onload = function(){
		
	}
	