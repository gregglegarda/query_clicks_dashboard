<?php
ini_set('display_errors', 1);//This is for debugging
date_default_timezone_set("UTC");//This is needed
$start_time = microtime(true); 

$dbport = '5433';
$dbhost = '192.168.233.10';
$dbname = 'qpf';
$dbuser = 'qpf';
$db_connect =  @pg_connect("host=$dbhost port=$dbport dbname=$dbname user=$dbuser");
if(!$db_connect) {
	//echo "Failed, trying second";
	$dbhost = '192.168.233.12';
	$db_connect =  @pg_connect("host=$dbhost port=$dbport dbname=$dbname user=$dbuser");
	if(!$db_connect) {
		//echo "Failed again, trying last";
		$dbhost = '192.168.233.10';
		$db_connect =  @pg_connect("host=$dbhost port=$dbport dbname=$dbname user=$dbuser");
		if(!$db_connect) {
			echo "Failed -- all 3 databases are down";
			exit(1);
		}
	}
}


//Setting the posted variables
$csvDataContent = $_POST["csvDataContent"];
$csvDataContentPath = $_POST["csvDataContentPath"];

$logJSON = json_encode($csvDataContent);
//echo getcwd();

file_put_contents($csvDataContentPath, $logJSON."\n", FILE_APPEND);

?>