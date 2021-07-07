<?php
$username="root";
$password="";
$server='localhost';
$ds='login';

$con =mysqli_connect($server,$username,$password);
if(!$con){
    die("fail".mysqli_connect_error());
}

?>
