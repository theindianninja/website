<?php
error_reporting(-1);
ini_set('display_errors', 'On');

//Check for empty fields
if(empty($_POST['username']) || empty($_POST['category']) )
   {
    echo "Please enter blachyour name and at least one of the other fields.";
	echo $_POST['username'];
	echo $_POST['time'];
	echo $_POST['category'];
    exit();
   }



//Create short variables
$username = $_POST['username'];
$time = ($_POST['time']);
$category = ($_POST['category']);
$caffeine = ($_POST['caffeine']);
$date = date("Ymd");

//connect to the database
require_once('includes/db_conn.php');

//Create the insert query...formerly INSERT INTO questions

$query = "INSERT INTO sleeprecord    
			-- (id, name, time, category, caffeine, date)
			 VALUES (NULL,'".$username."','".$time."','".$category."','".$caffeine."','".$date."')";


$result = mysql_query($query);

if($result){
    echo "Your quiz has been saved";
} else {
    echo '<h1>System Error</h1>';
}

mysql_close();



?>