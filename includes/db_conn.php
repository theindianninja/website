<?php 

//Set the database access information as constants
DEFINE ('DB_USER', 'homer');
DEFINE ('DB_PASSWORD', 'homer');
DEFINE ('DB_HOST', 'yeshymanoharancom.ipagemysql.com');
DEFINE ('DB_NAME', 'sleep');
/*
@ $dbc = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);



if (mysqli_connect_error()){
	//echo "Could not connect to MySql. Please try again";
	exit();
}
*/

$link = mysql_connect('magistermartincom.ipagemysql.com', DB_USER, DB_PASSWORD); 
if (!$link) { 
    die('Could not connect: ' . mysql_error()); 
} 
else
{
	echo 'Connected successfully'; 
}
mysql_select_db(DB_NAME); 

?>
