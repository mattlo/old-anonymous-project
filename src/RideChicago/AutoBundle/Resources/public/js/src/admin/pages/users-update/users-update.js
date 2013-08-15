Ridechicago.admin.common.view.RegionCenter.setTitle('User Management - Update User');

var securityStore = Ext.create('Ext.data.Store', {
    fields: ['roleDisplay', 'roleValue'],
    data : [
		{
			roleDisplay: 'Admin',
			roleValue: 'ROLE_ADMIN'
		},
		{
			roleDisplay: 'Super Admin',
			roleValue: 'ROLE_SUPER_ADMIN'
		},
		{
			roleDisplay: 'Inactive User',
			roleValue: 'ROLE_USER'
		},
    ]
});

var PASSWORD_CONFIRM_ERR_MSG = '';

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	bodyPadding: 5,
	waitMsgTarget: true,
	autoScroll: true,
	id: 'usersUpdateForm',
	fieldDefaults: {labelAlign:'left', labelWidth: 150},

	items: [{
		xtype: 'textfield',
		fieldLabel: 'Username',
		emptyText: 'Use email only',
		name: 'username',
		msgTarget: 'under',
		vtype: 'email',
		validateOnChange: false,
		allowBlank: false,
		width: 500,
		id: 'usernameInput'
	}, {
        xtype: 'hiddenfield',
        name: 'id'
    }, {
		xtype: 'textfield',
		fieldLabel: 'Password',
		emptyText: 'Password',
		name: 'password',
		msgTarget: 'under',
		inputType: 'password',
		width: 500,
		minLength: 6,
		maxLength: 100,
		id: 'passwordInput'

	}, {
		xtype: 'label',
		forId: 'passwordInput',
		cls: 'fieldDescription',
		text: 'Leave blank to leave unchanged'
	}, {
		xtype: 'textfield',
		fieldLabel: 'Password Confirmation',
		emptyText: 'Password Confirmation',
		name: 'password',
		msgTarget: 'under',
		inputType: 'password',
		width: 500,
		id: 'passwordConfirmInput',
		margin: '10 0 5 0',
		validator: function (value) {
			return RideChicago.pages.useradd.Validation.PasswordConfirm(value, 'passwordInput', true);
		}
	}, {
		xtype: 'label',
		cls: 'fieldDescription',
		forId: 'passwordConfirmInput',
		text: 'Leave blank to leave unchanged'
	}, {
		xtype: 'combobox',
		fieldLabel: 'Choose Security Role',
		store: securityStore,
		queryMode: 'local',
		displayField: 'roleDisplay',
		valueField: 'roleValue',
		editable: false,
		name: 'role',
		margin: '10 0 5 0'
	}],

	buttons: [{
		id: 'usersAddSubmit',
		text: 'Update User',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/users/update',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'User Management',
						msg: Ext.getCmp('usernameInput').getValue() + ' was successfully updated!',
						icon: Ext.MessageBox.INFO,
						buttons: Ext.MessageBox.OK,
						fn: function() {
							window.location = '/admin/users';
						}
					});
				}
			});
		}
	}]
}));

Ext.onReady(function () {
	// get onpage JSON data
	var rawData = Ext.get('pageContentData').dom.innerHTML;
	
	// convert to JSON
	var data = Ext.JSON.decode(rawData);
	
	// get model
	var user = Ridechicago.admin.model.Users;

	// preload form
	user.load(data.id, {
		success: function(user) {
			Ext.getCmp('usersUpdateForm').loadRecord(user);
		}
	});
});