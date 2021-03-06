<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PublishedPostMail extends Mailable
{
    use Queueable, SerializesModels;

    private $post;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($post)
    {
        $this->post = $post;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $url = url('/admin/posts/' . $this->post->id);
        return $this->markdown('mails.posts.published', ['post' => $this->post, 'url' => $url]);
    }
}
