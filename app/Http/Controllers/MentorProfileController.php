<?php

namespace App\Http\Controllers;

use App\Enums\CourseTypeEnum;
use App\Models\Topic;
use App\Repositories\MentorProfileRepository;
use Inertia\Inertia;

class MentorProfileController extends Controller
{
    public function __construct(protected MentorProfileRepository $mentorProfileRepository) {}

    public function allMentors()
    {
        $topics = Topic::with(['activeTags.mentors' => function ($q) {
            $q->status();
        }, 'activeTags.mentors.profilePicture'])->active()->orderBy('title', 'ASC')->get();

        return Inertia::render('MentorProfiles/MentorProfiles', ['topics' => $topics]);
    }

    public function findById(string $id)
    {
        $courseTypeEnum = enumLabelArray(CourseTypeEnum::cases());
        $mentorProfile = $this->mentorProfileRepository->model()->with(['courses.price', 'courses.topics', 'courses.tags', 'courses.timings', 'profilePicture', 'courses.featuredImage'])->where('unique_id', $id)->firstOrFail();

        return Inertia::render('MentorProfiles/MentorProfile', ['mentorProfile' => $mentorProfile, 'courseTypeEnum' => $courseTypeEnum]);
    }

	public function allMentorsByTag(string $tag)
	{
		$mentors = MentorProfile::with(['profilePicture', 'courses.price', 'courses.topics', 'courses.tags', 'courses.timings', 'courses.featuredImage'])->whereHas('topicTags', function ($q) use ($tag) {
			$q->where('slug', $tag);
		})->status()->orderBy('name', 'ASC')->get();

		$topics = Topic::with(['activeTags.mentors' => function ($q) {
            $q->status();
        }, 'activeTags.mentors.profilePicture'])->active()->orderBy('title', 'ASC')->get();

		return Inertia::render('MentorProfiles/MentorProfiles', ['mentors' => $mentors]);
	}
}
