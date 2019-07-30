<?php

require('utils/cors.php');
require('utils/db.php');

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST)){
    // var_dump($_POST);
    $post_title = $_POST["post_title"];
    $post_description = $_POST["post_description"];
    $post_type = $_POST["post_type"];
    $posted_by = $_POST["posted_by"];
    
    $res = $conn->query("INSERT INTO posts (`post_title`,`post_description`,`post_type`,`uid`) values ('".$post_title."','".$post_description."','".$post_type."',".$posted_by.")");
    
    if($res){
        echo '{"status" : true}';
    }else{
        echo '{"status": false, "message" :"'.$conn->error.'","extra": "'.json_encode($_POST).'"}';
    }
}else{
    echo '{"status" : false}';
}

?>