<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Course;
use App\Models\Page;
use App\Models\Post;
use App\Models\Topic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomepageController extends Controller
{
	public function __invoke()
	{
		$page = Page::slug('home')->firstOrNew();

		$topics = Topic::with(['activeTags.mentors' => function ($q) {
			$q->status()->whereNotNull('activated_at');
		}, 'activeTags.mentors.profilePicture'])->active()->orderBy('title', 'ASC')->get();

		$posts = Post::with('categories')->latest()->published()->limit(5)->get();

		return Inertia::render('Homepage', ['page' => $page, 'topics' => $topics, 'latestPosts' => PostResource::collection($posts)]);
	}
}
