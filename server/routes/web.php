<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'api/v1'], function () {
    Route::get('{lat}/{lon}', 'RestaurantController@index')->name('restaurant.index');
    Route::get('{id}', 'RestaurantController@detail')->name('restaurant.detail');
});

Route::group(['prefix' => 'login'], function () {
    Route::get('user/{name}/pass/{password}', 'LoginController@index')->name('login.index');
    Route::get('user/favorite', 'LoginController@favorite')->name('login.favorite');
});

Route::group(['prefix' => 'register'], function () {
    Route::post('user/{user_name}/{user_password}', 'RegisterController@index')->name('register.index');
    Route::post('favorite/user/{user_id}/{rest_id}', 'RegisterController@favorite')->name('register.favorite');
});