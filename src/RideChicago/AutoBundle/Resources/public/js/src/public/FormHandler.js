$.fn.formHandler = (function (config) {
	'use strict';
	
	var FORM_ELEMENTS_SELECTOR = '.serialize';
	
	function FormHandler(parent) {
		this.parent = parent;
	}
	
	FormHandler.prototype = {
		validate: function () {
			this.serializeData();
			return true;
		},
		showError: function (errorMsg) {
			$('html, body').animate({scrollTop: 150}, 600);
			$('.error-message').show().html(errorMsg.join('<br />'));
		},
		submit: function () {
			var _this = this;
			
			$.ajax({
				type: 'post',
				url: '/api/lesson/create',
				data: _this.data,
				dataType: 'json'
			})
				.success(function (data) {
					var p,
						errorOutput = [];
			
					if (data.success === false) {
						for (p in data.errors) {
							errorOutput.push('<span>' + _this.serverResponseCleanup(p) + '</span>: ' + data.errors[p]);
						}
						
						_this.showError(errorOutput);
					} else {
						$('.success-message').show();
						$('.hide-on-success, .error-message').hide();
						$(window).scrollTop(0);
					}
				})
				.fail(function (data) {
					console.log(data);
				});
		},
		serializeData: function () {
			this.data = $(FORM_ELEMENTS_SELECTOR, this.parent).serializeObject();
			
			if (this.data.notes !== '') {
				this.data.notes += '<br />';
			}
			
			if (this.data.permitId) {
				this.data.notes += 'Permit ID: ' + this.data.permitId + ' <br />';
			}
			
			if (this.data.highschool) {
				this.data.notes += 'Highschool: ' + this.data.highschool + ' <br />';
			}
		},
		serverResponseCleanup: function (str) {
			str = str.replace('_', ' ');
			
			return str;
		}
	};
	
	$(this).each(function () {
		var parent = $(this),
			form = new FormHandler(parent);
		
		$('.submit-serializer', parent).click(function () {
			if (form.validate() === true) {
				form.submit();
			}
		});
	});
});

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(document).ready(function () {
	$('.form-instance').formHandler();
});