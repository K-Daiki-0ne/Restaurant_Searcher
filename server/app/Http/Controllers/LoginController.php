<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\UserForm;
use App\Models\UserFavoriteRestaurant;


class LoginController extends Controller
{
    public function index($user_name, $user_password) {

        // 登録されているユーザーを検索し、ユーザー情報をレスポンスする

        $name = UserForm::where('name', $user_name)
            ->where('password', $user_password)
            ->first();

        return response() -> json($name);
    }

    public function favorite($id) {
        var_dump($id);

        $favorite = UserFavoriteRestaurant::where('restaurant_id', $id)->get();

        return response() -> json($favorite);
    }
}
