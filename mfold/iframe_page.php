<?php
    $homepage = file_get_contents('http://unafold.rna.albany.edu/?q=mfold/DNA-Folding-Form');
echo $homepage;
//had to change the PHP ini file to get file_get_contents to work
?>

<button onClick="getElement()">getDiv</button>

<script>
function getElement(){
	/*
	var div = document.getElementById('UNAFold-header');
	document.getElementsByTagName("FORM")[0].setAttribute("onsubmit", "democlass");
	div.innerHTML = '<p>HEY</p>';
	*/
	var div = document.forms; 
	div[1].action = "http://yeshymanoharan.com/mfold/iframe_page1.php"
	console.log(div);
	console.log("hey");
	//console.log(innerDoc);
	}
	</script>