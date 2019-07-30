<?php

require('utils/cors.php');
require('utils/db.php');

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST)){
    // var_dump($_POST);
    $pname = $_POST["pname"];
    $pdescription = $_POST["pdescription"];
    $price = $_POST["price"];
    
    $res = $conn->query("UPDATE products SET pname='".$pname."', pdescription='".$pdescription."', price=".$price." where pid=".$_POST['pid']);
    
    if($res){
        echo '{"status" : true}';
    }else{
        echo '{"status": false, "message" :"'.$conn->error.'","extra" : "'.json_encode($_POST).'"}';
    }
}else{
    echo '{"status" : false}';
}

?>