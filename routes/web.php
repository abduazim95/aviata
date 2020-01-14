<?php

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

use Illuminate\Support\Facades\Storage;

Route::get('file/{file}', function($file) {
    return response()->file(Storage::disk('public')->path($file));
})->where('file', '^\w+\.(ico|png)$');

Route::get('{path}', function () {
    return file_get_contents(public_path('index.html'));
})->where('path', '(.*)');
