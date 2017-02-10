<?php  
	//Composer's autoload file loads all necessary files
	require './PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->isSMTP();
	$mail->Host = 'relay-hosting.secureserver.net';
	$mail->Port = 25;
	$mail->SMTPAuth = false;
	$mail->SMTPSecure = false;
	
	$mail->From = "no-reply@coopergoeke.com";
	$name = "No Name Given";
	if($_POST["name"]){
		$name = $_POST["name"];
	}
	$mail->FromName = $name;
	$mail->addAddress('coopergoeke@gmail.com', 'Cooper');
	$mail->isHTML(true);
	
	$message = "No Name Given";
	if($_POST["name"]){
		$message = $_POST["message"];
	}
	$email = "No Email Given";
	if($_POST["email"]){
		$email = $_POST["email"];
	}
	$mail->Subject = "An email from your portfolio";
	$mail->Body    = "Name: {$name}<br>Email: {$email}<br>Message: {$message}";
	$mail->AltBody = "Something went wrong, so you aren't seeing the whole message :(";

	if(!$mail->send()) {  
		echo "<span class='email_response error'>There was an error. Please send an email to coopergoeke@gmail.com to get in touch.</span>";
	} else {
		echo "<span class='email_response success'>Your message has been sent!</span>";
	}