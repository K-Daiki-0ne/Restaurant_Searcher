<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiTestController extends Controller
{
    public function testApi() {
        $testResponse = 'これはテストです';

        return response() -> json($testResponse);
    }

    public function testRequest($test) {
        $data = $test;
        return $data;
    }
}