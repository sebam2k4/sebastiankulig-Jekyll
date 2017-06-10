<?php

$name = $_POST['name'];
$email_address = $_POST['_replyto'];
$phone = $_POST['phone'];
$businessname = $_POST['businessname'];
$referral = $_POST['referral'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'info@sebastiankulig.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Contact Form from: $name";
$email_body = "Hello!

SebastianKulig.com
Your contact form has been submitted by:

Name: $name
Email: $email_address
Company Name or Brand: $businessname
Phone: $phone

Refered by: $referral

Message: $message";

$headers = "From: $email_address \n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);

header('Location: http://www.sebastiankulig.com/thanks/');
exit();
?>