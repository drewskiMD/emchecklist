<?php
session_start();
$f = $_POST['fn'];$l = $_POST['ln'];$cc = $_POST['cc'];$rm = $_POST['rm'];
$n = $l.", ".$f; 
if (!isset($_SESSION['uid']) || !isset($_SESSION['sid']))
{header ("Location: ./ua.html");}
else { //insert new pt into DB
	$con = mysqli_connect('localhost','root','', 'checklist');
	$uid = $_SESSION['uid'];
	$sid = $_SESSION['sid'];
	$sql = "insert into patients (sid,uid,name,rm,cc,seen,tx,note) values ($sid,$uid,'$n','$rm','$cc',0,0,0)";
		mysqli_query($con, $sql);
	}

//return the refreshed list of patients for this shift
	include(".\loadpt.php");
?>
