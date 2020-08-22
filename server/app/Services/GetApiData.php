<?php
namespace App\Services;

use App\Config\Url;
use App\API\ApiRequest;

class GetApiData
{
	public static function getRestaurant($lat, $lon) {
        $base_url = Url::baseUrl();
        $url = "{$base_url}&latitude={$lat}&longitude={$lon}";
        $result = ApiRequest::request($url);
        return $result;
    }
    
    public static function getDetailRestaurant($id) {
        $base_url = Url::baseUrl();
        $url = "{$base_url}&id={$id}";
        $result = ApiRequest::request($url);
        return $result;
    }
}
?>