<?php

$link = mysql_connect("internal-db.s16804.gridserver.com", "db16804", "n3334s1arSTA!!");
mysql_select_db("db16804_toastUploaded", $link);

$result = mysql_query("SELECT * FROM uploadTest", $link);
$num_rows = mysql_num_rows($result);

echo $num_rows;

?>