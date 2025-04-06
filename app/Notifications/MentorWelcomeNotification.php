<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class MentorWelcomeNotification extends Notification
{
	use Queueable;

	/**
	 * Create a new notification instance.
	 */
	public function __construct()
	{
		//
	}

	/**
	 * Get the notification's delivery channels.
	 *
	 * @return array<int, string>
	 */
	public function via(object $notifiable): array
	{
		return ['mail', WhatsAppChannel::class];
	}

	/**
	 * Get the mail representation of the notification.
	 */
	public function toMail(object $notifiable): MailMessage
	{
		return (new MailMessage)
			->subject('Welcome to Fomoedge Platform!')
			->view('mails.mentor-welcome', [
				'user' => $notifiable
			]);
	}

	public function toWhatsApp(object $notifiable): string
	{
		return [
			'template' => 'mentor_registered',
			'to' => [`{$notifiable->mentorProfile->phone_country_id}{$notifiable->phone}`],
			'components' => [
				"body_1" => [
					"type" => "text",
					"value" => $notifiable->full_name
				],
				"button_1" => [
					"subtype" => "url",
					"type" => "text",
					"value" => "https://fomoedge.com/how-it-works"
				]
			]
		];
	}

	/**
	 * Get the array representation of the notification.
	 *
	 * @return array<string, mixed>
	 */
	public function toArray(object $notifiable): array
	{
		return [
			//
		];
	}
}
