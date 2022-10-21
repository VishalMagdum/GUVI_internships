<?php
$host = "localhost";
$username = "root";
$password = "";

 
try{
    $conn = new PDO("mysql:host=$host;dbname:registration1",$username,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

} 
catch(PDOException $e){
    echo "Connection Failed:  ".$e->getMessage();  
}
if(isset($_POST['email']) && $_POST['email']!='' && isset($_POST['password']) && $_POST['password']!='')
{
    $sql = "INSERT INTO usertable(email,password) VALUES('".addslashes($_POST['email'])."','".addslashe($_post['password'])."')";
    $conn->query($sql);
}
