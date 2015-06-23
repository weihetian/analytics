

<?php
$con= mysqli_connect("analytics.carvertise.com", "stak_scott", "t87565342","carvertise_analytics");
 
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$theresult = Array();
$campaignid=$_POST['campaignid'];


$result = mysqli_query($con,"SELECT * FROM stories WHERE `campaignid`='$campaignid' AND `view` = 1 ORDER by id DESC")or die("Error: ".mysqli_error($con));

		while($row = mysqli_fetch_array($result)) {
		$id= $row['id'];
		$campaignid = $row['campaignid'];
		$content = $row['content'];
		$theresult[] = array("id"=>$id,"name"=>$name,"campaignid"=>$campaignid,"content"=>$content);
		
		}
		echo json_encode($theresult);

		mysqli_close($con);

?>

