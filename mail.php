<meta http-equiv='refresh' content='2; url=http://kuhni-eva.ru'>
<meta charset="UTF-8" />
<?php
if (isset($_POST['body'])) {$body = $_POST['body']; if ($body == '') {unset($body);}}
 
if (isset($body)) {
	$address = "sergey.melentyev@gmail.com";
	$mes = "Текст: $body";
	$send = mail ($address,$mes,"Content-type:text/plain; charset = UTF-8");
	if ($send == 'true'){
		echo "Сообщение отправлено успешно, через 6 секунд Вы будете направлены на главную страницу";
	}
	else {
		echo "Ошибка, сообщение не отправлено!";
	}
}
else
	{
	echo "Вы заполнили не все поля, вернитесь назад и заполните необходимые поля!";
	}
?>
