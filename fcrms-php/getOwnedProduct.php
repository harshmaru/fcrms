<?php

require('utils/db.php');
require('utils/cors.php');

if(isset($_GET['pid']) && isset($_GET["uid"]))
{
    $result = $conn->query("SELECT * FROM `products` WHERE pid =".$_GET['pid']." and uid=".$_GET['uid']);
    $row = $result->fetch_assoc();
    echo json_encode($row);
}

?>