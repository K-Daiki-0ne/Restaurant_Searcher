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
    Route::get('adress/{adress}', 'RestaurantController@index')->name('restaurant.adress');
});

Route::group(['prefix' => 'login'], function () {
    Route::get('user/{name}/pass/{password}', 'LoginController@index')->name('login.index');
    Route::get('user/favorite', 'LoginController@favorite')->name('login.favorite');
});

Route::group(['prefix' => 'register'], function () {
    Route::post('user/{name}/{password}', 'RegisterController@index')->name('register.index');
    Route::post('user/restaurant/{id}', 'RegisterController@favorite')->name('register.favorite');
});