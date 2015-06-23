<?php
$con= mysqli_connect("analytics.carvertise.com", "stak_scott", "t87565342","carvertise_analytics");
 
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


$storyid = $_POST['storyid'];


$theresult = Array();

$result = mysqli_query($con,"UPDATE stories SET view=0 WHERE id='$storyid'")or die("Error: ".mysqli_error($con));


		mysqli_close($con);

?>

