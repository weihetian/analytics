<?php
$con= mysqli_connect("analytics.carvertise.com", "stak_scott", "t87565342","carvertise_analytics");



if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  
  $campaignid=$_POST['campaignid'];
  $start = $_POST['start'];
  $end = $_POST['end'];
  

  $theresult = Array();
  
  
  $sql = "SELECT * FROM device INNER JOIN campaign ON `campaign`.`id`=`device`.`campaignid` WHERE `device`.`campaignid`=15";
  

  $result=mysqli_query($con,$sql)or die("Error: ".mysqli_error($con));
  while($row = mysqli_fetch_array($result)) {
	  
  		$deviceid = $row['deviceid'];
		
		$json = file_get_contents('http://map.foxtraxgps.com/service/v1.0/device-history?device-id='.$deviceid.'&start='.$start.'&end='.$end.'&format=json&api_key=2603f74f-b3b4-3ca9-7b5a-00000648c8df');

		
		$theresult[]=$json;
  }
  
echo json_encode($theresult);

mysqli_close($con);
	
?>