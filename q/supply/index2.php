<?php 
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, 'http://157.245.174.176:11778/getinfo');
$result = curl_exec($ch);
$obj = json_decode($result, TRUE);

curl_close($ch);

$supplyRaw = $obj['already_generated_coins'];

$supply = number_format($supplyRaw , 8, ".", "");

print_r($supply);

?>
