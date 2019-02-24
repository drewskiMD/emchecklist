<?php


$u = $_POST['u'];

$p = $_POST['p'];


$con = mysqli_connect('localhost','root','', 'checklist');

if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

if (!$con)

{

	die('Could not connect: ' + mysql_error());

}

$sql = "select * from users where username = '$u'";

$result = mysqli_query($con, $sql);

$row = mysqli_fetch_array($result);

$UID = $row['uid'];

$sid = $row['shift'];

if (!$result) {	echo "fail"; }

else {

	if ($row['password'] == md5($p))

	{

		session_start();

		$_SESSION['uid'] = $UID;

		$_SESSION['sid'] = $sid;

		echo "s"; //success

	}

	else

	{

		echo "f"; //fail

	}

}

?>