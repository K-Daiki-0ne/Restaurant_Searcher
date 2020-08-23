<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserForm;

class RegisterController extends Controller
{
    public function index($name, $password) {
        // $request = new UserForm();
        // try {
        //     $request->$name = $name;
        //     $request->password = $password;

        //     $request->save();
        
        //     $success = 'ユーザーの作成に成功しました';
        //     var_dump($success);
        //     return response() -> json($success);
        // } catch (Exception $err) {
        //     $error = $err;
        //     var_dump($error);
        //     return response() -> json($error);
        // }
        header("Access-Control-Allow-Origin: *");  //CORS
        header("Access-Control-Allow-Headers: Origin, X-Requested-With");
        var_dump($name);
    }
}
