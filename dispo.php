<?php
session_start();
$v = $_POST['v'];$d = $_POST['d']; //v for vid d for dispo
if (!isset($_SESSION['uid']) || !isset($_SESSION['sid']))
{header ("Location: ./ua.html");}
else { //insert new pt into DB
	$con = mysqli_connect('localhost','root','', 'checklist');
	$sql = "update patients set dispo='$d'where vid=$v";
		mysqli_query($con, $sql);
	}
	$sql = "select * from patients where vid = $v";
	$result = mysqli_query($con, $sql);
	$row = mysqli_fetch_array($result);
	if ($row['seen'] == 0) { $c = "table-danger"; }
	else if ($row['seen'] == 1) { $c = "table-warning"; }
	if (!is_null($row['dispo']) && $row['seen'] == 1) { $c = "table-success"; }
	if (!is_null($row['dispo']) && $row['seen'] == 1 && $row['note'] == 1) { $c = "table-primary"; }
	echo $c;
?>