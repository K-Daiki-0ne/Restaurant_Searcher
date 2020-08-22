<?php
class ApiRequest
{
	public static function request($url) {
		try {
			$ch = curl_init();

			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 

		  	$response = curl_exec($ch);

		  	$result = json_decode($response, true);

		  	return $result;
		} catch(Exception $ex) {
			$result = $ex;
			return $result;
		}
	}
}

?>