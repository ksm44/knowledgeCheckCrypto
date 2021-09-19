<?php

$link = mysqli_connect ("localhost","username","password","dataBaseName");

$fio = $_POST['fio'];
$org = $_POST['org'];
$email = $_POST['email'];
$resultUser = $_POST['endresult'];
$timeResolve = $_POST['timeResolve'];
$dateTest = date('Y-m-d');


$sql = ("INSERT INTO results_skzi_table (fio, organization, email, time_resolve, result, date_test) VALUES ('$fio', '$org', '$email', '$timeResolve', '$resultUser', '$dateTest');");

$result = mysqli_query($link,$sql);
?>