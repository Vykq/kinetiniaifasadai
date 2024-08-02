<?php

require_once($_SERVER['DOCUMENT_ROOT'] . "/wp-load.php");

$postData = [];
$postData['toTop'] = true;

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$to = get_field('email_to','main-settings');

$subject = 'Kinetiniai fasadai: Nauja užklausa';

$message = '
<html>
<head>
    <title>' . $subject . '</title>
</head>
<body>
<p><b>Vardas Pavardė:</b> ' . $name . '</p>
<p><b>Tel. nr:</b> ' . $phone . '</p>
<p><b>Telefonas:</b> ' . $phone . '</p>
</body>
</html>
';

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Kinetiniai fasadai <info@kinetiniaifasadai.lt>';

$mail = wp_mail($to, $subject, $message, implode("\r\n", $headers));

print_r($mail);
