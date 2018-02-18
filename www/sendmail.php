<?php
ini_set('default_charset', 'utf-8');
$subject = $_POST['subject'];
$name = $_POST['name'];
$message = $_POST['message'];
$from = $_POST['email'];
$back = $_POST['back-page'];

$to = "adalrsjr1@gmail.com";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$fromHeader = "From: <".$from.">\r\n";
$headers .= $fromHeader;

$subject = '[SITE][CONTATO]['.mb_strtoupper($subject).']';

mail($to,$subject,$message,$headers);
header("Location: ".$back); /* Redirect browser */
exit();
?>