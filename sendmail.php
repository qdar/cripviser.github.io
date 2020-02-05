<?php
	header('Content-Type: text/html; charset=utf-8', true);
	if($_POST['user_company'] != '' || $_POST['user_phone'] != '') {
		$headers = "Content-type: text/html; charset=utf-8\r\n";
		$subject = "Order from Apelsin logistic";
		$name = "Name: ".$_POST['user_company'];
		$phone = "Contact: ".$_POST['user_phone'];

		mail("webraduke@gmail.com", $subject, $name."\n\r<br/>".$phone, $headers);
	}
	else {
		$msg_error = "Sorry, something went wrong. Please try again later.";
	}
	echo $msg_error;
?>
