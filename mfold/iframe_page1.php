<?php
    // Create map with request parameters
$params = $_POST;//array ('surname' => 'Filip', 'lastname' => 'Czaja');
 
// Build Http query using params
$query = http_build_query ($params);
 
// Create Http context details
$contextData = array ( 
                'method' => 'POST',
                'header' => "Connection: close\r\n".
                            "Content-Length: ".strlen($query)."\r\n",
                'content'=> $query );
 
// Create context resource for our request
$context = stream_context_create (array ( 'http' => $contextData ));
 
// Read page rendered as result of your POST request
$result =  file_get_contents (
                  'http://unafold.rna.albany.edu/cgi-bin/mfold-3.4.cgi',  // page url
                  false,
                  $context);
 
// Server response is now stored in $result variable so you can process it

echo $result;
?>


<script>/*
window.onbeforeunload=function(){
    return "Are you sure to leave this page?";
}*/
</script>