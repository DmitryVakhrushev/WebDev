<?php

$result = mail("test@test.com","Анкета с Сайта","С сайта была получена анкета с такими данными: \nИмя $_POST[name] \nПароль: $_POST[password]");

if ($result)
{
    echo "<p>Message was sent</p>";
}
else
{
    echo "<p>Message was NOT sent!</p>";
}

?>