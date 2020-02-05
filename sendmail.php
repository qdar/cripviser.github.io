<?php
	header('Content-Type: text/html; charset=utf-8', true);
	if($_POST['user_company'] != '' || $_POST['user_mail'] != '') {
		$headers = "Content-type: text/html; charset=utf-8\r\n";
		$subject = "Order from Apelsin logistic";
		$name = "Name: ".$_POST['user_company'];
		$email = "Email: ".$_POST['user_mail'];
		$msg = "Message: ".$_POST['user_message'];

		mail("webraduke@gmail.com", $subject, $name."\n\r<br/>".$email."\n\r<br/>".$msg, $headers);
	}
	else {
		$msg_error = "Sorry, something went wrong. Please try again later.";
	}
	echo $msg_error;
?>
