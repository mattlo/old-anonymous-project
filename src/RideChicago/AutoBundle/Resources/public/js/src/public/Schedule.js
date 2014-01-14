Handlebars.registerHelper("formatDate", function(timestamp) {
	var date = moment(timestamp);
	
    return date.format("MM/DD/YYYY");
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
			return 'Ravenswood';
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

(function(){
    var D= new Date('2011-06-02T09:34:29+02:00');
    if(!D || +D!== 1307000069000){
        Date.fromISO= function(s){
            var day, tz,
            rx=/^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
            p= rx.exec(s) || [];
            if(p[1]){
                day= p[1].split(/\D/);
                for(var i= 0, L= day.length; i<L; i++){
                    day[i]= parseInt(day[i], 10) || 0;
                };
                day[1]-= 1;
                day= new Date(Date.UTC.apply(Date, day));
                if(!day.getDate()) return NaN;
                if(p[5]){
                    tz= (parseInt(p[5], 10)*60);
                    if(p[6]) tz+= parseInt(p[6], 10);
                    if(p[4]== '+') tz*= -1;
                    if(tz) day.setUTCMinutes(day.getUTCMinutes()+ tz);
                }
                return day;
            }
            return NaN;
        }
    }
    else{
        Date.fromISO= function(s){
            return new Date(s);
        }
    }
})();