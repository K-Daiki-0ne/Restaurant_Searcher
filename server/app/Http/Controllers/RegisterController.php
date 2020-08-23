<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\UserForm;

class RegisterController extends Controller
{
    public function index($user_name, $user_password) {

        $user = new UserForm();

        try {
            $user->name = $user_name;
            $user->password = $user_password;

            $user->save();
        
            $success = 'ユーザーの作成に成功しました';
            return response() -> json($success);
        } catch (Exception $err) {
            $error = 'ユーザーの作成に失敗しました。';
            return response() -> json($error);
        }
    }
}
