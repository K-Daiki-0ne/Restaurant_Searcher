<?php
namespace App\Config;

class Url
{
    public static function baseUrl() {
        $grnavi_url = 'https://api.gnavi.co.jp/RestSearchAPI/v3/';
        $api_key = config('api.api_key');
        $base_url = "{$grnavi_url}?keyid={$api_key}";
        return $base_url;
    }
}
?>