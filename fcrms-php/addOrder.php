<?php

require('utils/db.php');
require('utils/cors.php');

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST)){
    $res=$conn->query("select MAX(oid) from orders");
    $oid=$res->fetch_assoc();
    $oid=$oid["MAX(oid)"]+1;
    $count=count($_POST);
    foreach($_POST as $order)
    {
        $pid = $order['pid'];
        $qty = $order['qty'];
        $price = $order['price'];
        $total = $order['total'];
        $status = $order['status'];
        $pmethod = $order['pmethod'];
        $uid = $order['uid'];
        $result = $conn->query("INSERT INTO `orders`(`oid`, `pid`, `qty`, `price`, `total`, `status`, `pmethod`, `uid`) VALUES ($oid,$pid,$qty,$price,$total,'$status','$pmethod',$uid)");
        if($result){
            $count=$count-1;
        }
    }
    if($count == 0){
        echo '{"status":"true","message":"Order Placed"}';
    }
    else{
        echo '{"status":"false","message":"Some Error Occured.<br>Please try again","extra":'.$conn->error.'}';
        $conn->query("delete from orders where oid = $oid");
    }
}

?>