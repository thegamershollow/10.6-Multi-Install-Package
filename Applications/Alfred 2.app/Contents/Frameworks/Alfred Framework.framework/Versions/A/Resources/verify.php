<?php
	
	// the data
	$data = sha1_file($argv[1], false);
 	$signature = $argv[2];

	// fetch public key from certificate and ready it
	$fp = fopen(dirname(__FILE__) . '/verify.pem', "r");
	$cert = fread($fp, 8192);
	fclose($fp);
	$pubkeyid = openssl_get_publickey($cert);

	// state whether signature is okay or not
	$ok = openssl_verify($data, base64_decode($signature), $pubkeyid, OPENSSL_ALGO_SHA1);

	// free the key from memory
	openssl_free_key($pubkeyid);
	
	echo $ok;
	
?>