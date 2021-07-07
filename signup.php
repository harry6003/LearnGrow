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
    
$username=mysqli_real_escape_string($con,$_POST['username']);
$email=mysqli_real_escape_string($con,$_POST['email']);
$mobile=mysqli_real_escape_string($con,$_POST['mobile']);
$password=mysqli_real_escape_string($con,$_POST['password']);
$cpassword=mysqli_real_escape_string($con,$_POST['cpassword']);

$pass=password_hash($password,PASSWORD_BCRYPT);
$cpass=password_hash($cpassword,PASSWORD_BCRYPT);

$token=random_int(15,999999999999999999);
$emailquery="SELECT * FROM `loginform`.`login` where email='$email'";
$query=mysqli_query($con,$emailquery);
$count=mysqli_num_rows($query);
if($count>0){
   ?><div class="alert alert-danger" role="alert">Email already exists</div> <?php
}
else{
    if($password===$cpassword){

            $sql="INSERT INTO `loginform`.`login`(`username`, `email`, `mobile`, `password`, `cpassword`,`token`,`status`) VALUES ('$username','$email','$mobile','$pass','$cpass','$token','inactive')";

            if($con->query($sql)==true){
                ini_set('SMTP','smtp.gmail.com');
                $subject= "Email Activation";
                $body="Hi $username. Click her to activate your account http://localhost/r2/activate.php?token=$token";
                $eader_mail="From:piyalitayde16@gmail.com";

                if(mail($email,$subject,$body,$eader_mail)){
                    $_SESSION['msg']="Check your mail to activate your account $email";
                  
                                  
                     header('location:login.php');
                }
                else{
                    echo"Email sending fail";
                }




           
            }
            else{
                echo "$con->error";
                }
            $con->close();

    }
    else{
        ?><div class="alert alert-danger" role="alert">Password does not match</div> <?php
        echo "";
    }
}

}

?>

<div class="contain">
    <h1 class="text">Create Account</h1>
    <form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post">
    <div class="form-group input-group">
        <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-user"></i></span>
        </div>
        <input type="text" class="form-control" placeholder="Full Name" required name="username">
    </div>
    <div class="form-group input-group">
        <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-envelope"></i></span>
        </div>
        <input type="email" class="form-control" placeholder="Email" required name="email">
    </div>
    <div class="form-group input-group">
        <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-phone"></i></span>
        </div>
        <input type="tel" class="form-control" placeholder="Mobile no." required name="mobile">
    </div>
    <div class="form-group input-group">
        <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span>
        </div>
        <input type="password" class="form-control" placeholder="Password" required name="password">
    </div>
    <div class="form-group input-group">
        <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span>
        </div>
        <input type="password" class="form-control" placeholder="Confirm Password" required name="cpassword">
    </div>
    <button name="submit" class="bwt btn btn-primary" type="submit">Sign Up</button>
    
    <h5 class="text">Already have account?&nbsp&nbsp<a href="login.php">Log In</a></h5>
    </form>
    </div>
</body>
</html>