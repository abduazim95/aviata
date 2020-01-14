<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class FlightsController extends Controller
{
    public function getFlights(Request $request) {

        $inputs = $request->all();

        $validator = Validator::make($inputs, [
            'options' => 'array',
            'options.*' => 'string',
            'airlines' => 'array',
            'airlines.*' => 'string'
        ]);

        if($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 422);
        }

        $json = Storage::disk('public')->get('results.json');
        $flights = collect(json_decode($json)->flights);

        if(isset($inputs['options'])) {
            if(in_array('onlyDirectFlight', $inputs['options'])) {
                $flights = $flights->filter(function($flight) {
                    return $flight->itineraries[0][0]->stops === 0;
                });
            }
            if(in_array('onlyWithLuggage', $inputs['options'])) {
                $flights = $flights->filter(function($flight) {
                    return collect($flight->itineraries[0][0]->segments)->every(function($segment) {
                        return $segment->baggage_options[0]->value > 0;
                    });
                });
            }
            if(in_array('onlyReturnable', $inputs['options'])) {
                $flights = $flights->where('refundable', '=', true);
            }
        }

        if(isset($inputs['airlines'])) {
            $flights = $flights->filter(function($flight) use ($inputs) {
                return in_array($flight->validating_carrier, $inputs['airlines']);
            });
        }

        return response()->json($flights);
    }
}
