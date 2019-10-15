<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    // Refresh the JWT Token
    Route::get('refresh', 'AuthController@refresh');
    Route::middleware('auth:api')->group(function () {
        // Get user info
        Route::get('user', 'AuthController@user');
        // Logout user from application
        Route::post('logout', 'AuthController@logout');
    });
});

#Item
Route::post('/item/create', 'ItemController@store');
Route::get('/item/edit/{id}', 'ItemController@edit');
Route::post('/item/update/{id}', 'ItemController@update');
Route::delete('/item/delete/{id}', 'ItemController@delete');
Route::get('/item/get/{user_id}', 'ItemController@getByUserId');
Route::get('/item/get/all', 'ItemController@getAll');
