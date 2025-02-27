<?php

namespace App\Http\Controllers\Mentor;

use App\Enums\BookingStatusEnum;
use App\Enums\MentorProfileStatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateMentorProfileRequest;
use App\Http\Resources\MentorProfileResource;
use App\Models\Booking;
use App\Models\Course;
use App\Models\MentorProfile;
use App\Models\Rating;
use App\Repositories\MentorProfileRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MentorProfileController extends Controller
{
    public function __construct(protected UserRepository $userRepository, protected MentorProfileRepository $mentorProfileRepository) {}

    public function dashboard(Request $request)
    {
        $user = $request->user()->load('mentorProfile');
        $mentorProfile = $user->mentorProfile;

        $totalCourse = Course::where('mentor_profile_id', $mentorProfile->id)->count();
        $totalBooking = Booking::where('mentor_profile_id', $mentorProfile->id)->status(BookingStatusEnum::PAID->value)->count();
        $totalRevenue = Booking::where('mentor_profile_id', $mentorProfile->id)->status(BookingStatusEnum::PAID->value)->sum('grand_total_amount');
        $totalMentorRating = Rating::where('rateable_id', $mentorProfile->id)->where('rateable_type', MentorProfile::class)->count();
        $allCoursesIds = $mentorProfile->courses->pluck('id');
        $totalCourseRating = Rating::whereIn('rateable_id', $allCoursesIds)->where('rateable_type', Course::class)->count();

        return Inertia::render('Mentor/Dashboard', [
            'stats' => [
                'totalCourse' => $totalCourse,
                'totalBooking' => $totalBooking,
                'totalRevenue' => $totalRevenue,
                'totalMentorRating' => $totalMentorRating,
                'totalCourseRating' => $totalCourseRating
            ]
        ]);
    }

    public function edit(Request $request)
    {
        $user = $request->user()->load('mentorProfile.profilePicture', 'mentorProfile.courses');

        $mentorProfile = $user->mentorProfile->load('topics', 'topicTags');
        $mentorProfileResource = new MentorProfileResource($mentorProfile);
        $mentorProfileResource->wrap(null);

        $mentorProfileStatusEnums = enumLabelArray(MentorProfileStatusEnum::cases());

        return Inertia::render('Mentor/Profile', ['user' => $user, 'mentorProfile' => $mentorProfileResource, 'mentorProfileStatusEnums' => $mentorProfileStatusEnums]);
    }

    public function update(UpdateMentorProfileRequest $updateMentorProfileRequest)
    {
        $user = $updateMentorProfileRequest->user()->load('mentorProfile');
        $mentorProfile = $this->mentorProfileRepository->saveAndUpdate($updateMentorProfileRequest, $user->mentorProfile->id);

        return redirect()->back()->with(['flash_type' => 'success', 'flash_message' => 'Profile updated successfully']);
    }
}
