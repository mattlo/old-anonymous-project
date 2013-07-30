Ext.namespace('RideChicago.pages.useradd.Validation');

RideChicago.pages.useradd.Validation = {
	/**
	 * Password confirmation validation callback for users
	 * @param {type} value
	 * @param {type} counterId
	 * @returns {Boolean|Ridechicago.admin.common.Constants.IoErrMsgs.PASSWORD_MISMATCH}
	 */
	PasswordConfirm: function (value, counterId) {
		var confirm = Ext.getCmp(counterId),
			confirmValue = confirm.getValue();
	
		// validate
		if (confirmValue.length > 0 && confirmValue !== value) {
			return Ridechicago.admin.common.Constants.IoErrMsgs.PASSWORD_MISMATCH;
		} else {
			return true;
		}
	}
};