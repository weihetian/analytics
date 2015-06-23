<?php
$con= mysqli_connect("analytics.carvertise.com", "stak_scott", "t87565342","carvertise_analytics");
 
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


$campaignid = $_POST['campaignid'];


$theresult = Array();

$result = mysqli_query($con,"SELECT * FROM pictures WHERE campaignid='$campaignid' AND `view`=1")or die("Error: ".mysqli_error($con));

		while($row = mysqli_fetch_array($result)) {
		 $id= $row['id'];
		$url = $row['url'];
		
		$theresult[] = array("id"=>$id,"url"=>$url);
			
		}


		echo json_encode($theresult);

		mysqli_close($con);

?>

