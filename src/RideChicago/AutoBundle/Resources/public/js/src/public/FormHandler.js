$.fn.formHandler = (function (config) {
	'use strict';
	
	var FORM_ELEMENTS_SELECTOR = '.serialize';
	
	function FormHandler(parent) {
		this.parent = parent;
	}
	
	FormHandler.prototype = {
		validate: function () {
			var output = true;
			
			this.serializeData();
			
			try {
				if (/^\d{1,2}[\/-]\d{1,2}[\/-]\d{4}$/.test(this.data.dateOfBirth) === false) {
					throw new Error('Date of birth must be in MM/DD/YYYY format.');
				}
			} catch (e) {
				this.showError([e.message]);
				output = false;
			}
		
			return output;
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
			
			if (this.data.promotionCode !== '' && this.data.highschool !== '') {
				this.data.promotionCode += ', ';
			}
			
			if (this.data.highschool !== '') {
				this.data.promotionCode += 'Highschool: ' + this.data.highschool + ' <br />';
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