<?php
session_start();
$v=$_POST['v'];$cc = $_POST['cc'];$ddx = $_POST['ddx'];
$ddxs = explode(";",$ddx);
if (!isset($_SESSION['uid']) || !isset($_SESSION['sid']))
{header ("Location: ./ua.html");}
else { //insert new pt into DB
	$con = mysqli_connect('localhost','root','', 'checklist');
		for ($i=0;$i<sizeof($ddxs);$i++)
		{	
			$sql = "select count(*) from dx where cc = '$cc' and dx = '$ddxs[$i]'";
			$result = mysqli_query($con, $sql);
			$row = mysqli_fetch_array($result);
			if ($row[0]==0)
			{
				$sql = "insert into dx (cc,dx) values ('$cc','$ddxs[$i]')";
				mysqli_query($con, $sql);
			}
		}
	}
	$sql = "update patients set ddx = '$ddx' where vid = $v";
	$result = mysqli_query($con, $sql);
	echo $ddx;
?>