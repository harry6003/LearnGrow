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
    
$email=mysqli_real_escape_string($con,$_POST['email']);


$emailquery="SELECT * FROM `loginform`.`login` where email='$email'";
$query=mysqli_query($con,$emailquery);
$count=mysqli_num_rows($query);

if($count){

    $userdata=mysqli_fetch_array($query);
    $username=$userdata['username'];
    $token=$userdata['token'];
  
                ini_set('SMTP','smtp.gmail.com');
                $subject= "Email Activation";
                $body="Hi $username. Click her to reset your password http://localhost/r2/update.php?token=$token";
                $eader_mail="From:piyalitayde16@gmail.com";

                if(mail($email,$subject,$body,$eader_mail)){
                    $_SESSION['msg']="Check your mail to reset your password $email";

                     header('location:login.php');
                }
                else{
                    echo"Email sending fail";
                }

            }
            else{
                echo "error";
            }

}



?>

<div class="contain">
    <h1 class="text">Recover Your Account</h1>
    <h6>Fill email id correctly</h6>
    <form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post">
 
    <div class="form-group input-group">
        <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-envelope"></i></span>
        </div>
        <input type="email" class="form-control" placeholder="Email" required name="email">
    </div>

    <button name="submit" class="bwt btn btn-primary" type="submit">Verify</button>
    
    <h5 class="text">Already have account?<a href="login.php">Log In</a></h5>
    </form>
    </div>
</body>
</html>