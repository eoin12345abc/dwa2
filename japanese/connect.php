<?php
session_start();
	
	$server = 'localhost';
	$db_username = 'root';
	$db_password = '';
	$database = 'dictionary';
	$error_message = 'Could not connect to the mySQL database';
	@mysql_connect($server,$db_username,$db_password) or die("Could not connect to the server.");
	@mysql_select_db($database) or die("Could not connect to the database");

$q="select english,kana from edit where kanji like 'Â%'";
/*$result = mysql_query("select english,kana from edict where kanji like 'Â%'");
if (!$result) {
    die('Could not query:' . mysql_error());
}

echo mysql_result($result,2);
@mysql_close();*/

$sql="SELECT * FROM edict";
$query = mysql_query($sql) or die ("Could not match data because ".mysql_error());
$num_rows = mysql_num_rows($query);

$result = mysql_query($q);
while ($row = mysql_fetch_assoc($result)) {
    echo $row["userid"];
    echo $row["fullname"];
    echo $row["userstatus"];
}

mysql_free_result($result);
?>