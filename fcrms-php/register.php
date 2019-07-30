<?php

require('utils/db.php');
require('utils/cors.php');

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST["email"])){
    $result = $conn->query("INSERT INTO user (`fname`, `lname`, `email`, `password`, `role`) VALUES ( '".$_POST['fname']."', '".$_POST['lname']."', '".$_POST['email']."', '".$_POST['password']."','".$_POST['role']."')");

    if ($result === TRUE) {
        echo '{  "status": true,  "type": "success",  "message": "Successfully Created User"}';
    } else {
        echo '{  "status": false,  "type": "fail",  "message": "'.$conn->error.'"}';
    }
}


?>