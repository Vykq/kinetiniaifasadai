<?php

require_once($_SERVER['DOCUMENT_ROOT'] . "/wp-load.php");
$email = $_POST['email'];

$to = get_field('email_to','main-settings');

$subject = 'Kinetiniai fasadai: Nauja el.pašto užklausa';

$message = '
<html>
<head>
    <title>' . $subject . '</title>
</head>
<body>
<p><b>Email:</b> ' . $email . '</p>
</body>
</html>
';

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Kinetiniai fasadai <info@kinetiniaifasadai.lt>';

$mail = wp_mail($to, $subject, $message, implode("\r\n", $headers));

print_r($mail);
