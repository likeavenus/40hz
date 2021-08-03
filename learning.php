<?php
	$name = $_POST['name'];
    $phone = $_POST['phone'];
    $mail = $_POST['mail'];
    $to = 'mrbur333@gmail.com';

    if (mail($to, '40hz заявка от ' . $name, 'Контактный телефон: ' . $phone . '<br/>' . '<h2>Почта: </h2>' . $mail, "Content-type: text/html; charset=utf-8")) {
        echo true;
    } else {
        echo false;
    }
?>