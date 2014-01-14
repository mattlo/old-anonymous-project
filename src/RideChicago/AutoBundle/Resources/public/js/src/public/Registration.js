$(document).ready(function () {
	if ($('.registration-form').length > 0) {
		if (getParameterByName('rate') !== null) {
			$('[name="lessonRateId"]').val(getParameterByName('rate'));
		}		
		
		if (getParameterByName('lessontype') !== null) {
			$('[name="lessonType"]').val(getParameterByName('lessontype'));
		}
	}
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}