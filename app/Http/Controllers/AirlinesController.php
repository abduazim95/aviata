<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AirlinesController extends Controller
{
    //
    public function getAirlines() {
        $json = Storage::disk('public')->get('results.json');
        $airlines = collect(json_decode($json)->airlines);
        return response()->json($airlines);
    }
}
