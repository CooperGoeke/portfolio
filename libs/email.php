<?php  
	//Composer's autoload file loads all necessary files
	require './PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->isSMTP();
	$mail->Host = 'relay-hosting.secureserver.net';
	$mail->Port = 25;
	$mail->SMTPAuth = false;
	$mail->SMTPSecure = false;

	$mail->From = 'no-reply@coopergoeke.com';
	$mail->FromName = "";
	$mail->addAddress('coopergoeke@gmail.com', 'Cooper');
	$mail->isHTML(true);

	// The following is self explanatory
	$mail->Subject = "";
	$mail->Body    = "Name: <br>Subject: <br>Message: ";
	$mail->AltBody = "Something went wrong, so you aren't seeing the whole message :(";

	if(!$mail->send()) {  
		echo "<span class='email_response error'>There was an error. Please send an email to coopergoeke@gmail.com to get in touch.</span>";
	} else {
		echo "<span class='email_response success'>Your message has been sent!</span>";
	}