<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Services\GetApiData;

class RestaurantController extends Controller
{
    public function index($lat, $lon) {
        $result = GetApiData::getRestaurant($lat, $lon);
        return response() -> json($result);
    }

   public function detail($id) {
       $result = GetApiData::getDetailRestaurant($id);
       return response() -> json($result); 
   }
}