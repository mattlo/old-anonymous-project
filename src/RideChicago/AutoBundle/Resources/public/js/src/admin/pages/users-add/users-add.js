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
		vtype: 'email',
		validateOnChange: false,
		allowBlank: false,
		width: 500
	}, {
		xtype: 'textfield',
		fieldLabel: 'Password',
		emptyText: 'Password',
		name: 'password',
		msgTarget: 'under',
		inputType: 'password',
		allowBlank: false,
		width: 500
	}, {
		xtype: 'combobox',
		fieldLabel: 'Choose Security Role',
		store: securityStore,
		queryMode: 'local',
		displayField: 'roleDisplay',
		valueField: 'roleValue'
	}],
	
	buttons: [{
		id: 'usersAddSubmit',
		text: 'Create User',
		formBind: true,
		handler: function(){
//			this.up('form').getForm().submit({
//				url: '/api/users/add',
//				submitEmptyText: false,
//				waitMsg: 'Validating...',
//				success: function (ins, response) {
//					try {
//						var data = Ext.JSON.decode(response.responseText);
//						window.location = data.location;
//					} catch (e) {
//						// assume
//						window.location = '/admin';
//					}
//				}
//			});
		}
	}]
}));