<?php

require('utils/db.php');
require('utils/cors.php');

if(isset($_GET["id"])){
    $products = array();
    $result = $conn->query("SELECT * FROM `products` WHERE uid=".$_GET["id"]." and visible='Y';");
    while($row = $result->fetch_assoc()){
        array_push($products,$row);
    }
    echo json_encode($products);
}

?>