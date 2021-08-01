<?
    $contacts = $_POST['contacts'];
    $contact__message = $_POST['contact__message'];
    $name = $_POST['name'];
    $to = '40hz.school@gmail.com';
    if (mail($to, '40hz сообщение от ' . $name, 'Контакт: ' . $contacts . '<br/>' . '<h2>Сообщение: </h2>' . $contact__message, "Content-type: text/html; charset=utf-8")) {
        echo true;
    } else {
        echo false;
    }
?>