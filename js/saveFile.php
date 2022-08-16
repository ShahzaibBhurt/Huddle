<?php
    if(isset($_POST['email'])){
        $email = $_POST['email'];
        $myfile = fopen("emails.txt", "a") or die("Unable to open file!");
        $txt = $email.", \n";
        if(fwrite($myfile, $txt)){
            fclose($myfile);
            echo 1;
        }else{
            echo 0;
        }
    }
?>