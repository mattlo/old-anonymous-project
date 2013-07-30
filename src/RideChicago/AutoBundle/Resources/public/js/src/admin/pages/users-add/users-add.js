Ridechicago.admin.common.view.RegionCenter.setTitle('User Management - Add User');

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
	frame: true,
	bodyPadding: 5,
	waitMsgTarget: true,
	fieldDefaults: {labelAlign:'left', labelWidth: 150},
	
	items: [{
		xtype: 'textfield',
		fieldLabel: 'Email Address',
		emptyText: 'Email Address',
		name: 'username',
		msgTarget: 'under',
		//vtype: 'email',
		validateOnChange: false,
		allowBlank: false,
		width: 500,
		id: 'usernameInput'
	}, {
		xtype: 'textfield',
		fieldLabel: 'Password',
		emptyText: 'Password',
		name: 'password',
		msgTarget: 'under',
		inputType: 'password',
		allowBlank: false,
		width: 500,
		minLength: 6,
		maxLength: 100,
		id: 'passwordInput'
	}, {
		xtype: 'textfield',
		fieldLabel: 'Password Confirmation',
		emptyText: 'Password Confirmation',
		name: 'password',
		msgTarget: 'under',
		inputType: 'password',
		allowBlank: false,
		width: 500,
		id: 'passwordConfirmInput',
		validator: function (value) {
			return RideChicago.pages.useradd.Validation.PasswordConfirm(value, 'passwordInput');
		}
	}, {
		xtype: 'combobox',
		fieldLabel: 'Choose Security Role',
		store: securityStore,
		queryMode: 'local',
		displayField: 'roleDisplay',
		valueField: 'roleValue',
		editable: false,
		name: 'role'
	}],
	
	buttons: [{
		id: 'usersAddSubmit',
		text: 'Create User',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/users/create',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'User Management',
						msg: Ext.getCmp('usernameInput').getValue() + ' was successfully created!',
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