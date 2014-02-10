$(document).ready(function () {
	$('.mailer-client').submit(function (e) {
		var data = {
			name: e.target[0].value,
			email: e.target[1].value,
			subject: e.target[2].value,
			message: e.target[3].value
		};
		
		// send request
		// @TODO add validation constraints and error UI
		$.post('/mail/send', data).success(function () {
			alert('Contact Form submitted successfully!');
		});
		
		return false;
	});
});