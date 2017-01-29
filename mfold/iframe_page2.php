<?php
$argument1 = $_GET['argument1'];
$argument2 = $_GET['argument2'];
$argument3 = $_GET['argument3'];
//echo $argument1;
//echo $argument2;
//echo $argument3;
$hey = 'http://unafold.rna.albany.edu/' . $argument1 . '/' . $argument2 . '/'. $argument3 .'/'. $argument3 .'.ct';
//echo strcmp ( $hey , 'http://unafold.rna.albany.edu/results/4/16May09-04-13-31/' );
    $homepage = file_get_contents($hey);
echo $homepage;
?>