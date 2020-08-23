<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\UserForm;
use App\Models\UserFavoriteRestaurant;


class LoginController extends Controller
{
    public function index($user_name, $user_password) {

        $name = UserForm::where('name', $user_name)
            ->where('password', $user_password)
            ->first();

        return response() -> json($name);
    }
}
