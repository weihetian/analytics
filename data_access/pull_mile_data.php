<?php

$con= mysqli_connect("analytics.carvertise.com", "stak_scott", "t87565342","carvertise_analytics");



if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  
$devices = array();
$campaignid=$_POST['campaignid'];
$startdate=date('Y-m-d', strtotime($_POST['startdate']));
$enddate=date('Y-m-d', strtotime($_POST['enddate']));

$sql = "SELECT * FROM miles_report INNER JOIN device ON `miles_report`.`deviceid`=`device`.`deviceid` WHERE campaignid=$campaignid AND (`miles_report`.`date` BETWEEN '$startdate' AND '$enddate') ORDER BY date ASC";
//
// $result = mysqli_query($con,"SELECT * FROM device WHERE campaignid = $campaignid")or die("Error: ".mysqli_error($con));
//
// 		while($row = mysqli_fetch_array($result)) {
//
// 		$devices[]= $row['deviceid'];
// 	}
//
//
// $startdate=date('Y-m-d', strtotime($_GET['startdate']));
// $enddate=date('Y-m-d', strtotime($_GET['enddate']));
   $theresult=array();
  
  // $result = mysqli_query($con,"SELECT * FROM miles_report WHERE date BETWEEN '$startdate' AND '$enddate' AND deviceid IN (" . implode(',', $devices) . ") ORDER BY date ASC")or die("Error: ".mysqli_error($con));
  $result=mysqli_query($con,$sql)or die("Error: ".mysqli_error($con));


 while($row = mysqli_fetch_array($result)) {
 		$date = $row['date'];
 		$mile = $row['mile'];
 		$theresult[$date]+=$mile;				
 }
 //arsort($theresult);

echo json_encode($theresult);


?>
