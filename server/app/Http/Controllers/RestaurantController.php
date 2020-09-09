<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Services\GetApiData;

class RestaurantController extends Controller
{
    public function index($lat, $lon) {
        $result = GetApiData::getRestaurant($lat, $lon);
        $data = $result;
        return response() -> json($data);
    }

   public function detail($id) {
       $result = GetApiData::getDetailRestaurant($id);
       $data = $result;
       return response() -> json($data); 
   }
}
