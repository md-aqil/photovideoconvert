<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\B2BMentorshipQuery;
use App\Http\Resources\B2BMentorshipQueryResource;
use Illuminate\Http\Request;

class B2BMentorshipQueryController extends Controller
{
	public function index(Request $request)
	{
		$b2BMentorshipQueries = B2BMentorshipQuery::with('user', 'mentorProfile')->latest()->paginate($request->get('limit', config('app.pagination_limit')))->withQueryString();
		return Inertia::render('Admin/B2BMentorshipQueries/B2BMentorshipQueries', ['b2BMentorshipQueries' => B2BMentorshipQueryResource::collection($b2BMentorshipQueries)]);
	}

	public function edit($id)
	{
		$b2BMentorshipQuery = B2BMentorshipQuery::findOrFail($id);
		$b2BMentorshipQueryResource = new B2BMentorshipQueryResource($b2BMentorshipQuery);
		$b2BMentorshipQueryResource->wrap(null);
		return Inertia::render('Admin/B2BMentorshipQueries/B2BMentorshipQuery', ['b2BMentorshipQuery' => $b2BMentorshipQueryResource]);
	}
}
