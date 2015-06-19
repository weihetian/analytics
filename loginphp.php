<?php
 // include_once('db.php');

  // $con= mysqli_connect("54.86.136.195","ec2-user","","carvertise");
  // if (mysqli_connect_errno()) {
  //   echo "Failed to connect to MySQL: " . mysqli_connect_error();
  // }
  //
$username = "root";
$password = "bat00man";
$hostname = "54.86.136.195";
$dbname = "carvertise";
$port = 80;

$con= mysqli_connect($hostname, $username, $password,$dbname,$port);

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
  // $username = mysqli_real_escape_string($_POST["username"]);
  // $password = mysqli_real_escape_string($_POST["password"]);

	// echo $username;
// 	echo $password;
  
  $sql = "SELECT * FROM user";
	
  echo $sql;

  $res = mysqli_query($con,$sql);
  while($row = mysqli_fetch_array($res))
  {
	  echo $row['username'];
  }

  // if($row[0]>0){
 //    echo"login Successful";
 //  }
 //  else {
 //    echo "Failed to Login";
 //  }
?>
