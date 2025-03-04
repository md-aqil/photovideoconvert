<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('b2b_mentorship_query_topic_tags', function (Blueprint $table) {
			$table->id();
			$table->foreignId('b2b_mentorship_query_id')->constrained('b2b_mentorship_queries');
			$table->foreignId('topic_tag_id')->constrained('topic_tags');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('b2b_mentorship_query_topic_tags');
	}
};
