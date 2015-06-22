<?php
$con= mysqli_connect("54.86.136.195", "carvertisetest", "pass","carvertise",3306);

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$sql = "SELECT * FROM user";

echo $sql;
$res = mysqli_query($con,$sql);
while($row = mysqli_fetch_array($res))
{
  echo $row['username'];
}
?>
