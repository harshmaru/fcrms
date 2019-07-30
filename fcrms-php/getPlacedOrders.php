
<?php

require('utils/cors.php');
require('utils/db.php');
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST["uid"])){
    $orders = array();
    $result = $conn->query('select oid,pname,qty,total,status,orders.price from orders,products where orders.pid = products.pid and orders.uid = '.$_POST["uid"].' Order By oid DESC');
    while($row = $result->fetch_assoc())
        array_push($orders,$row);
    echo json_encode($orders);
}

?>