<?php

require('utils/db.php');
require('utils/cors.php');

if(isset($_GET["id"])){
    $products = array();
    $result = $conn->query("select * from(
    (select (CONCAT('Product',' - ',pname))Title,('Product')Type,(pid)id from products where uid=".$_GET['id']." and visible='Y') UNION
    (select (CONCAT('Bulletin',' - ',post_title))Title,('Post')Type,(post_id)id from posts where uid=".$_GET['id']."))as gen");
    while($row = $result->fetch_assoc()){
        array_push($products,$row);
    }
    echo json_encode($products);
}
?>