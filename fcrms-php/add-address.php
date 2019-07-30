<?php

require('utils/cors.php');
require('utils/db.php');

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST)){
    
    $res = $conn->query("update user set address = '".$_POST["address"]."' where email='".$_POST["email"]."'");
    
    if($res){
        echo '{"status" : true}';
    }else{
        echo '{"status": false, "message" :"'.$conn->error.'","extra": "'.json_encode($_POST).'"}';
    }
}else{
    echo '{"status" : false}';
}

?>