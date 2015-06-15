<?php
header("Content-Type: application/json");

$uploaded = array();

if(!empty($_FILES['file']['name'][0])){
	
	foreach($_FILES['file']['name'] as $position=>$name){
		$picid = uniqid();
		if(move_uploaded_file($_FILES['file']['tmp_name'][$position],'../uploads/'.$picid.'.png')){
			$uploaded[] = array(
			'name'=>$name,
			'file'=>'uploads/'.$picid.'.png'
			);
		}
	}
}

echo json_encode($uploaded);



?>