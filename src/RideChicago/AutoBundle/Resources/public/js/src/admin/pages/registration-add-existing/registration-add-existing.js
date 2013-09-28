Ridechicago.admin.common.view.RegionCenter.setTitle('Student Management - Register an existing Student');

Ridechicago.admin.forms.Registration.unshift({
	xtype: 'combobox',
	fieldLabel: 'Customer',
	//store: Ridechicago.admin.model.stores.GenderStore,
	queryMode: 'local',
	displayField: 'text',
	valueField: 'value',
	editable: false,
	name: 'customer_id',
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
		},
		{
			title: 'New Customer Form',
			items: Ridechicago.admin.forms.Customer,
			xtype: 'panel',
			bodyPadding: 5,
			margin: '10 0 0 0'
		}
	],
	
	buttons: [{
		cls: 'btnAlignment',
		text: 'Submit Student Application',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/registration/create',
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