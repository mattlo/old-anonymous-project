Handlebars.registerHelper("formatDate", function(timestamp) {
	var date = new Date(timestamp);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
});

// @TODO pull from central model
function instructorIdMap(value) {
	switch(value) {
		case 1:
			return 'Toyota';
		break;
		case 2:
			return 'Sears Centre';
		break;
		case 3:
			return 'United';
		break;
		case 4:
			return 'Ravenwood';
		break;
	}
}

function populateSchedules() {
	// get template
	var template = Handlebars.compile($('.schedule-template').html());
	
	// using AJAX instead of calling within view will be more versatile for manipulation
	$.ajax({
		url: '/api/classes'
	}).success(function (response) {
		var i;
		
		// string to json on time data
		for (i = 0; i < response.data.length; ++i) {
			response.data[i].classDays = JSON.parse(response.data[i].classDays);
			response.data[i].location = instructorIdMap(response.data[i].instructorId);
			
			// append template
			$('.schedule-putput').append(template(response.data[i]));
		}
		
		console.log(response);
	});
}

$(document).ready(function () {
	
	if ($('.schedule-viewer').length > 0) {
		populateSchedules();
	}
});