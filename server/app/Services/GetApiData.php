<?php
namespace App\Services;
class GetApiData
{
	public static function getRestaurant($lat, $lon) {

		$grnavi_url = 'https://api.gnavi.co.jp/RestSearchAPI/v3/';
		$api_key = config('api.api_key');
		$url = "{$grnavi_url}?keyid={$api_key}&latitude={$lat}&longitude={$lon}";

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
			return response() -> json($result);
		}
	}
}
?>