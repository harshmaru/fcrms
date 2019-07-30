<?php

require('utils/db.php');
require('utils/cors.php');

$_POST = json_decode(file_get_contents('php://input'), true);

// $result = $conn->query("select * from users where email = '".$_POST['email']."' and password = '".$_POST['password']."'");
$result = $conn->query("SELECT * FROM `user` WHERE email = '".$_POST['email']."' and password = '".$_POST['password']."'");
// var_dump($result);
if($result->num_rows == 1){
    $row = $result->fetch_assoc();
    echo json_encode($row);
}
else{
    echo NULL;
}

?>