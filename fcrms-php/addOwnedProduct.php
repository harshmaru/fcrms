<?php

require('utils/cors.php');
require('utils/db.php');

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST)){
    // var_dump($_POST);
    $pname = $_POST["pname"];
    $pdescription = $_POST["pdescription"];
    $price = $_POST["price"];
    $uid = $_POST["uid"];
    $role = $_POST["role"];
    if($role == 'farmer'){
        $type='customer';
    }
    if($role == 'dealer'){
        $type='farmer';
    }
    
    $res = $conn->query("INSERT INTO products (`pname`,`pdescription`,`price`,`uid`,`type`) values ('".$pname."','".$pdescription."','".$price."','".$uid."','".$type."')");
    
    if($res){
        echo '{"status" : true}';
    }else{
        echo '{"status": false, "message" :"'.$conn->error.'","extra": "'.json_encode($_POST).'"}';
    }
}else{
    echo '{"status" : false}';
}

?>