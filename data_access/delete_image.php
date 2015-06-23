<?php
$con= mysqli_connect("analytics.carvertise.com", "stak_scott", "t87565342","carvertise_analytics");
 
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


$picid = $_POST['picid'];


$theresult = Array();

$result = mysqli_query($con,"UPDATE pictures SET view=0 WHERE id='$picid'")or die("Error: ".mysqli_error($con));


		mysqli_close($con);

?>

