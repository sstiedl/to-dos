<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$pdo = new PDO('mysql:host=localhost;dbname=test', 'root', '');


if(isset($_SERVER["REQUEST_METHOD"]) == "POST"){
    // saving form data
    $title = $_POST["title"];
    $details = $_POST["details"];
    $complete = $_POST["complete"];


    $sql = "INSERT INTO events(title, details, complete) VALUES ('$title', '$details', '$complete');";
    $query = mysqli_query($connect, $sql);

    

} else {
    echo "SERVER: ERROR - Request of the method POST failed";
}

