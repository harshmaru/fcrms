<?php

require('utils/db.php');
require('utils/cors.php');

$products = array();
$result = $conn->query("SELECT * FROM `posts`");
while($row = $result->fetch_assoc()){
    array_push($products,$row);
}
echo json_encode($products);

?>