<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiTestController extends Controller
{
    public function testApi() {
        $testResponse = 'これはテストです';

        return response() -> json($testResponse);
    }

    public function testRequest($test, $test2) {
        $data = $test;
        $data2 = $test2;
        $testData = [
            '1' => $data,
            '2' => $data2
        ];
        return $testData;
    }

    public function getApi() {
        $url = 'https://jsonplaceholder.typicode.com/posts';
        try {
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 

            $response = curl_exec($ch);

            $result = json_decode($response, true);

            return $result;
        } catch(Exception $ex) {
            return response() -> json($ex);
        }

    }
}
