<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="login.css">
    <?php include 'links.php' ?>
</head>
<body> 

<?php
include 'conn.php';
if(isset($_POST['submit'])){

    if(isset($_GET['token'])){
        $token=$_GET['token'];
        

$password=mysqli_real_escape_string($con,$_POST['password']);
$cpassword=mysqli_real_escape_string($con,$_POST['cpassword']);

$pass=password_hash($password,PASSWORD_BCRYPT);
$cpass=password_hash($cpassword,PASSWORD_BCRYPT);


    if($password===$cpassword){
            $updateq="update `loginform`.`login` set password='$pass' where token='$token'";
             $query=mysqli_query($con,$updateq);
             echo $pass;
             if($query){
                 $_SESSION['msg']="Your password is updated";
                 header('location:login.php');
             }
    }
    else{
        echo "password not match";
    }
}else{
    echo "no token";
}
}

?>

<div class="contain">
    <h1 class="text">Update Your Password</h1>
    <form action="" method="post">
   
    <div class="form-group input-group">
        <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span>
        </div>
        <input type="password" class="form-control" placeholder="New Password" required name="password">
    </div>
    <div class="form-group input-group">
        <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span>
        </div>
        <input type="password" class="form-control" placeholder="Confirm Password" required name="cpassword">
    </div>
    <button name="submit" class="bwt btn btn-primary" type="submit">Update</button>
    
    </form>
    </div>
</body>
</html>