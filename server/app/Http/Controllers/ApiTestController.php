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
}
