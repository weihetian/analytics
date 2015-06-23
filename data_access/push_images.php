
<?php
$con= mysqli_connect("analytics.carvertise.com", "stak_scott", "t87565342","carvertise_analytics");
 
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}



$data   =   $_POST["result"];
$data   =    json_decode("$data",true);


$campaignid = $data['campaignid'];
 $images = $data['images'];
 
 
 foreach ($images as $image) {
   mysqli_query($con,"INSERT INTO `pictures`  ( `campaignid`, `url`) VALUES ('$campaignid','$image')");
 }

 echo "stored!";
		mysqli_close($con);

?>
