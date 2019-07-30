<?php

require('utils/db.php');
require('utils/cors.php');

if(isset($_GET["role"])){
    $products = array();
    $result = $conn->query("SELECT * FROM `products` WHERE type='".$_GET['role']."' and visible='Y';");
    while($row = $result->fetch_assoc()){
        array_push($products,$row);
    }
    echo json_encode($products);
}

?>