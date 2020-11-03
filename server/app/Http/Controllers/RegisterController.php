<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\UserForm;
use App\Models\UserFavoriteRestaurant;

class RegisterController extends Controller
{
    public function index($user_name, $user_password) {

        // 新規ユーザーの登録を行う

        $user = new UserForm();

        try {
            $user->name = $user_name;
            $user->password = $user_password;

            $result = $user::where("name", $user_name)->get();

            if (result < 1) {
                $user->save();
                return response() 
                -> json($user);
            }

        } catch (Exception $err) {
            $error = 'ユーザーの作成に失敗しました。';
            return response() -> json($error);
        }
    }

    public function favorite($user_id, $rest_id) {
        // ログインをしている場合、お気に入りレストランに登録することができる。
        $restaurant = new UserFavoriteRestaurant();

        try {
            $restaurant->restaurant_id = $user_id;
            $restaurant->favorite_restaurant = $rest_id;
            
            $restaurant->save();
            $success = 'お店をお気に入りに登録することができました。';
            return response() -> json($success);
        } catch (Exception $err) {
            $error = 'お店をお気に入りに登録することに失敗しました。';
            return response() -> json($error);
        }
    }
}
