

<?php
$con= mysqli_connect("analytics.carvertise.com", "stak_scott", "t87565342","carvertise_analytics");
 
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$theresult = Array();

$result = mysqli_query($con,"SELECT * FROM campaign ORDER by id DESC")or die("Error: ".mysqli_error($con));

		while($row = mysqli_fetch_array($result)) {
		 $id= $row['id'];
		$name = $row['name'];
		$account = $row['account'];
		$password=$row['password'];
		$start = $row['start'];
		$end=$row['end'];
		
		$theresult[] = array("id"=>$id,"name"=>$name,"account"=>$account,"password"=>$password,"start"=>$start,"end"=>$end);
			
		}


		echo json_encode($theresult);

		mysqli_close($con);

?>

