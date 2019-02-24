<?php
session_start();
$v = $_POST['v'];$c = $_POST['c'];
if ($c=="true") { $c=1;} else {$c=0;}
if (!isset($_SESSION['uid']) || !isset($_SESSION['sid']))
{header ("Location: ./ua.html");}
else { //insert new pt into DB
	//$con = mysqli_connect('localhost','root','', 'checklist');
	$con = mysqli_connect('localhost','root','', 'checklist');
	$sql = "update patients set tx='$c' where vid=$v";
		mysqli_query($con, $sql);
	}
	echo $c;
?>