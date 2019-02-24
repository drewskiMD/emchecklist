<?php
session_start();
$dx = $_POST['dx'];
$output = "";
if (!isset($_SESSION['uid']) || !isset($_SESSION['sid']))

{header ("Location: ./ua.html");}

else { //insert new pt into DB

	$con = mysqli_connect('localhost','root','', 'checklist');

	$sql = "select code from icd where dx = '$dx'";

	$result = mysqli_query($con, $sql);
		while ($row = mysqli_fetch_array($result))

		{

			$code = $row['code'];

			$output = $output."<div><p>$code</p></div>";

		}

	}

	echo $output;

?>