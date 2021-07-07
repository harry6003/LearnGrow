<?php
session_start();

include 'conn.php';
if(isset($_GET['token'])){
    $token=$_GET['token'];
    $updateq="update `loginform`.`login` set status='active' where token='$token'";
    $query=mysqli_query($con,$updateq);

    if($query){
        $_SESSION['msg']="Account activated successfully";
        echo $_SESSION['msg'];
        header('location:login.php');
    }
    else{
        $_SESSION['msg']="You are logged out";
        echo $_SESSION['msg'];
        header('location:login.php');
    }
}
else{
    $_SESSION['msg']="Account not updated";
    echo $_SESSION['msg'];
    header('location:registration.php');
}

?>