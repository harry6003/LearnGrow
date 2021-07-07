<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php include 'links.php' ?>
</head>
<body> 
<style>
.marg{
    z-index:6;
}
</style>

<?php
include 'conn.php';
if(isset($_POST['submit'])){
    $email=mysqli_real_escape_string($con,$_POST['email']);
    $password=mysqli_real_escape_string($con,$_POST['password']);
    $emailSearch="SELECT * FROM `loginform`.`login` where email='$email' and status='active'";
    $query=mysqli_query($con,$emailSearch);
    $emailcount=mysqli_num_rows($query);
    if($emailcount){
        $emailPass=mysqli_fetch_assoc($query);
        $dbpass=$emailPass['password'];

        $_SESSION['username']=$emailPass['username'];

        $passDecode=password_verify($password,$dbpass);
        if($passDecode){
            ?>
            <script>
                location.replace("http://localhost:3000/")
            </script>
            <?php
        }else{
            ?><div class="marg alert alert-danger" role="alert">Password is incorrect</div> <?php
        }
    }else{
        ?><div class=" marg alert alert-danger" role="alert">Invalid email Id</div> <?php
    }
}
?>

<div class="marg alert alert-danger alert-dismissible fade show" role="alert">
*Please ensure that you had activated your account from your mail then<strong> Login</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

    <div class="contain">
        <h1 class="text">Login Here</h1>

<div><p class="bg-success text-white px-4">
<?php
if(isset($_SESSION['msg'])){
echo $_SESSION['msg']; 
 }
?>
</p></div>

    <form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post">
    
    <div class="form-group input-group">
        <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-envelope"></i></span>
        </div>
        <input type="email" class="form-control" placeholder="Email" required name="email">
    </div>
    
    <div class="form-group input-group">
        <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span>
        </div>
        <input type="password" class="form-control" placeholder="Password" required name="password">
    </div>
    
    <button name="submit" class="bwt btn btn-primary" type="submit">Log In</button>
   
    <h5 class="text">Not have account?&nbsp&nbsp <a href="signup.php">Sign Up</a></h5>
   
    <h5 class="text">Forgot password?&nbsp&nbsp <a href="recover_email.php">Click here</a></h5>
    </form></div>
</body>
</html>