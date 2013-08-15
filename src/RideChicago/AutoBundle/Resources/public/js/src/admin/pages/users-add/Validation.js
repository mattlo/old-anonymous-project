Ext.namespace('RideChicago.pages.useradd.Validation');

RideChicago.pages.useradd.Validation = {
	/**
	 * Password confirmation validation callback for users
	 * @param {type} value
	 * @param {type} counterId
	 * @param {Boolean} ignoreEmpty
	 * @returns {Boolean|Ridechicago.admin.common.Constants.IoErrMsgs.PASSWORD_MISMATCH}
	 */
	PasswordConfirm: function (value, counterId, ignoreEmpty) {
		var confirm = Ext.getCmp(counterId),
			confirmValue = confirm.getValue();
	
		// ignore empty?
		if (confirmValue.length === 0 && value.length ===0 && typeof ignoreEmpty === 'boolean' && ignoreEmpty === true) {
			return true;
		}
	
		// validate
		if (confirmValue.length > 0 && confirmValue !== value) {
			return Ridechicago.admin.common.Constants.IoErrMsgs.PASSWORD_MISMATCH;
		} else {
			return true;
		}
	}
};