<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function(){
    Route::get('hello', function() {
       return 'Hello world'; 
    });    
}); 



Route::get('hello/{slug}-{id}', ['as' => 'slug', function($slug, $id) {
    return 'Link '.route('slug', ['slug' => 'slug', 'id' => 'id']);
}])->where('slug', '[a-z0-9\-]+')->where('id', '[0-9]+');

Route::get('/', function () {
    return view('welcome');
});
