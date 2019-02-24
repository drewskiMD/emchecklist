<?php 
session_start();
if (!isset($_SESSION['uid']))
{header ("Location: ./ua.html");}
else { //insert new pt into DB
	$uid = $_SESSION['uid'];
	$con = mysqli_connect('localhost','root','', 'checklist');
	$sql = "insert into shifts (uid) values ($uid)";
		mysqli_query($con, $sql);
		$sql = "select LAST_INSERT_ID()";
		$result = mysqli_query($con, $sql);
		$row = mysqli_fetch_array($result);
		$sid = $row[0];
		$sql = "update users set shift = $sid where uid = $uid";
		mysqli_query($con, $sql); $_SESSION['sid'] = $sid;
	include(".\loadpt.php");
	}
 ?>