<?php

session_start();

$cc = $_POST['cc'];

$output = "";

if (!isset($_SESSION['uid']) || !isset($_SESSION['sid']))

{header ("Location: ./ua.html");}

else { //insert new pt into DB

	$con = mysqli_connect('localhost','root','', 'checklist');

	$sql = "select dx from dx where cc = '$cc'";

	$result = mysqli_query($con, $sql);

		while ($row = mysqli_fetch_array($result))

		{

			$dx = $row['dx'];

			$output = $output."<div class=\"form-check\"><label class=\"form-check-label\"><input type=\"checkbox\" class=\"ddx form-check-input\" value=\"$dx\" />$dx</label></div>";

		}



			

	}

	

	echo $output;

?>