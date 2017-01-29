// JavaScript Document
alert("hey");
function login()
		{
				var username1 = "hello";
				alert(username);
				var time = $("#time").val();
				var category = $("#category").val();
				var caffeine = $("#caffeine").val();
				var dataString = 'username='+ username1 + '&time='+ time + + '&category='+ category + '&caffeine='+ caffeine;
				
				if(time == NULL)
				{
					time = getHours()+":"+getMinutes();
				}
				if(caffeine == NULL)
				{
					caffeine = 0;
				}
				// AJAX Code To Submit Form.
				$.ajax({
					type: "POST",
					url: "sleep.php",
					data: dataString,
					cache: false,
					success: function(result){
						alert(result);
						}
					
				});
		

		}