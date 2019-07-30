<?php

require('utils/db.php');
require('utils/cors.php');

if(isset($_GET["pid"])){
    $res = $conn->query("UPDATE products set visible='N' where pid=".$_GET["pid"]);
    if($res){
        echo '{"status" : "true"}';
    }
}

?>