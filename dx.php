<?php
session_start();
$v=$_POST['v'];$cc = $_POST['cc'];$dx = $_POST['dx'];
if (!isset($_SESSION['uid']) || !isset($_SESSION['sid']))
{header ("Location: ./ua.html");}
else { //insert new pt into DB
	$con = mysqli_connect('localhost','root','', 'checklist');
			$sql = "select count(*) from dx where cc = '$cc' and dx = '$dx'";
			$result = mysqli_query($con, $sql);
			$row = mysqli_fetch_array($result);
			if ($row[0]==0)
			{
				$sql = "insert into dx (cc,dx) values ('$cc','$dx')";
				mysqli_query($con, $sql);
			}
	}
	$sql = "update patients set dx = '$dx' where vid = $v";
	$result = mysqli_query($con, $sql);
	echo $dx;
?>