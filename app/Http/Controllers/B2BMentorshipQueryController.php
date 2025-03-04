<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class B2BMentorshipQueryController extends Controller
{
	public function page()
	{
		$page = Page::slug('b2b-mentorship')->published()->firstOrFail();
		return Inertia::render('B2BMentorship', [
			'page' => $page,
			'b2BMentorshipFormData' => [
				'isInterested' => [['label' => 'Yes', 'value' => true], ['label' => 'No', 'value' => false]],
				'preferred_modes' => ['Virual', 'In-Person'],
				'interested_institutions' => ['Start-ups', 'Corporate', 'Universities/Colleges'],
				'minimum_hourly_rate' => ['Virual', 'In-Person'],
				'open_to_long_duration_mentorship' => [['label' => 'Yes', 'value' => true], ['label' => 'No', 'value' => false]]
			],
		]);
	}
}
