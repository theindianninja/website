<?php 

//Set the database access information as constants
DEFINE ('DB_USER1', 'homer');
DEFINE ('DB_PASSWORD1', 'homer');
DEFINE ('DB_HOST1', 'magistermartincom.ipagemysql.com');
DEFINE ('DB_NAME1', 'logindatabase');
/*
@ $dbc = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);



if (mysqli_connect_error()){
	//echo "Could not connect to MySql. Please try again";
	exit();
}
*/

$link = mysql_connect('magistermartincom.ipagemysql.com', DB_USER1, DB_PASSWORD1); 
if (!$link) { 
    die('Could not connect: ' . mysql_error()); 
} 
//echo 'Connected successfully'; 
mysql_select_db(DB_NAME1); 

?>