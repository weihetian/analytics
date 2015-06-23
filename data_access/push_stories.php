
<?php
$con= mysqli_connect("analytics.carvertise.com", "stak_scott", "t87565342","carvertise_analytics");
 
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


$campaignid = $_POST['campaignid'];
$story=mysqli_real_escape_string($con, $_POST['content']);

 
 
  mysqli_query($con,"INSERT INTO `stories`  ( `campaignid`, `content`) VALUES ('$campaignid','$story')");
   
 echo "stored!";
mysqli_close($con);

?>
