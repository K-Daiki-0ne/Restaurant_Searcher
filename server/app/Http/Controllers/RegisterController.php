<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserForm;

class RegisterController extends Controller
{
    public function index($name, $password) {
        $request = new UserForm();
        // $request->$name = $name;
        // $request->password = $password;

        // $request->save();
        try {
            $request->$name = $name;
            $request->password = $password;

            $request->save();
        
            $success = 'ユーザーの作成に成功しました';
            return response() -> json($success);
        } catch (Exception $err) {
            $error = $err;
            return response() -> json($error);
        }

    }
}
