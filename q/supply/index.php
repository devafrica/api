<?php 
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, 'https://blocks.cryptopay.org.za/info');
$result = curl_exec($ch);
$obj = json_decode($result, TRUE);

curl_close($ch);

$supplyRaw = $obj['already_generated_coins'];

$supply = number_format($supplyRaw , 2, ".", "");

print_r($supply);

?>
