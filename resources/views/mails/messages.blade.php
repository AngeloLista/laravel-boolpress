@component('mail::message')
# New Message

<p><strong>Email: </strong>{{ $contact['email'] }}</p>
<p><strong>Message: </strong>{{ $contact['message'] }}</p>

@endcomponent
