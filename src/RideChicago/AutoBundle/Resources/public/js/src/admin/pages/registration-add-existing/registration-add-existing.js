Ridechicago.admin.common.view.RegionCenter.setTitle('Student Management - Register an existing Student');

Ridechicago.admin.forms.Registration.unshift({
	xtype: 'combobox',
	fieldLabel: 'Customer',
	store: Ridechicago.admin.model.stores.CustomerStore,
	queryMode: 'local',
	displayField: 'firstAndLastName',
	valueField: 'id',
	editable: false,
	name: 'customer_id',
	allowBlank: false,
	width: 250
});

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	bodyPadding: 10,
	waitMsgTarget: true,
	autoScroll: true,
	fieldDefaults: {labelAlign:'left', labelWidth: 150},
	
	items: [
		{
			title: 'Registration Form',
			items: Ridechicago.admin.forms.Registration,
			xtype: 'panel',
			bodyPadding: 5
		}
	],
	
	buttons: [{
		cls: 'btnAlignment',
		text: 'Submit Student Application',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/registration/createFromExistingStudent',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'Registration Management',
						msg: 'Registration was successfully created!',
						icon: Ext.MessageBox.INFO,
						buttons: Ext.MessageBox.OK,
						fn: function() {
							window.location = '/admin/registration';
						}
					});
				}
			});
		}
	}]
}));