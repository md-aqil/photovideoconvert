<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseResource;
use App\Models\Course;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
	function __invoke(Request $request)
	{
		$page = Page::published()->firstOrCreate(['slug' => 'search'], ['title' => 'Search', 'body' => '', 'status' => 1, 'user_id' => 1]);
		$page->increment('views');
		$keyword = $request->input('keyword');

		$courses = Course::whereLike(['title', 'description'], $keyword)->latest()->get();

		return Inertia::render('Search', ['courses' => CourseResource::collection($courses), 'keyword' => $keyword, 'page' => $page]);
	}
}
