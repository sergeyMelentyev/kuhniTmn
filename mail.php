<meta http-equiv='refresh' content='1; url=http://kuhni-eva.ru'>
<meta charset="UTF-8" />

<?php
if (isset($_POST['body'])) {
	$body = $_POST['body']; 
	if ($body == '') {
		unset($body);
	}
}
 
if (isset($body)) {
	$address = "sergey.melentyev@gmail.com";
	$mes = "Новый Клиент: $body";
	$send = mail ($address,$mes,"Позвоните новому клиенту");
}
else {
	echo "Вы заполнили не все поля, вернитесь назад и заполните необходимые поля!";
}
?>