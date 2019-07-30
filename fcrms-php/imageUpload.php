<?php

require('utils/cors.php');
require('utils/db.php');

$message=array();

if(isset($_GET["id"])&&isset($_GET["type"])&&isset($_GET["uid"])) {
    $target_dir = "images/";
    $target_file = $target_dir . basename($_FILES["image"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    // Check if image file is a actual image or fake image

    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if($check !== false) {
        // array_push($message,"File is an image - " . $check["mime"] . ".");
        $uploadOk = 1;
    } else {
        array_push($message,"File is not an image.");
        $uploadOk = 0;
    }

    // Check if file already exists
    if (file_exists($target_file)) {
        array_push($message,"Sorry, file already exists.");
        $uploadOk = 0;
    }
    // Check file size
    if ($_FILES["image"]["size"] > 200000) {
        array_push($message,"Sorry, your file is too large.");
        $uploadOk = 0;
    }
    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" ) {
        array_push($message,"Sorry, only JPG, JPEG, PNG & GIF files are allowed.");
        $uploadOk = 0;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        array_push($message,"Sorry, your file was not uploaded.");
        // var_dump($message);
        echo '{"success":false,"message":'.json_encode(join("<br>",$message)).'}';
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_dir.$_GET['id'].$_GET['uid'].basename($_FILES["image"]["name"]))) {
            if($_GET["type"]==="Product"){
                $result=$conn->query("update products set pimg='images/".$_GET['id'].$_GET['uid'].$_FILES['image']['name']."' where pid=".$_GET['id']." and uid=".$_GET["uid"]);
            }
            if($_GET["type"]==="Post"){
                $result=$conn->query("update posts set post_img='images/".$_GET['id'].$_GET['uid'].$_FILES['image']['name']."' where post_id=".$_GET['id']." and uid=".$_GET["uid"]);
            }
            if($result){
                array_push($message,"The file ". basename( $_FILES["image"]["name"]). " has been uploaded.");
                echo '{"success":true,"message":'.json_encode(join("<br>",$message)).'}';
            }
            else{
                array_push($message,"Error Updating DataBase");
                echo '{"success":true,"message":'.json_encode(join("<br>",$message)).'}';
            }
            
        } else {
            array_push($message,"Sorry, there was an error uploading your file.");
            echo '{"success":false,"message":'.json_encode(join("<br>",$message)).'}';
        }
    }
}
?>