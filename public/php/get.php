<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$pdo = new PDO('mysql:host=localhost;dbname=project-planner', 'root', '');
$statement = $pdo->prepare("SELECT * FROM todos ORDER BY id");
$statement->execute();
$data = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);