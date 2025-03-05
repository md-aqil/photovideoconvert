<?php

namespace App\Http\Controllers;

use App\Http\Resources\MentorProfileResource;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class B2BMentorshipQueryController extends Controller
{
	public function page(Request $request)
	{
		$page = Page::slug('b2b-mentorship')->published()->firstOrFail();
		$mentorProfile = null;
		$user = $request->user();
		if ($user) {
			$user->load('mentorProfile.topics', 'mentorProfile.topicTags');
			$mentorProfile = $user->mentorProfile;
		}

		return Inertia::render('B2BMentorship', [
			'page' => $page,
			'mentorProfile' => $mentorProfile,
			'b2BMentorshipFormData' => [
				'isInterested' => [['label' => 'Yes', 'value' => true], ['label' => 'No', 'value' => false]],
				'preferred_modes' => ['Virual', 'In-Person'],
				'interested_institutions' => ['Start-ups', 'Corporate', 'Universities/Colleges'],
				'minimum_hourly_rate' => [['label' => 'Virtual', 'rate' => ""], ['label' => 'In-Person', 'rate' => ""]],
				'open_to_long_duration_mentorship' => [['label' => 'Yes', 'value' => true], ['label' => 'No', 'value' => false]]
			],
		]);
	}
}
