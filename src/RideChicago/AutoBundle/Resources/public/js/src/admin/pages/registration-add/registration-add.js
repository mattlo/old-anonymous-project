Ridechicago.admin.common.view.RegionCenter.setTitle('Student Management - Register a New Student');

Ridechicago.admin.forms.BillingAddress.unshift({
	xtype: 'fieldcontainer',
	fieldLabel: 'Billing Information',
	defaultType: 'checkboxfield',
	items: [{
		boxLabel: 'Use same information as above',
		inputValue: '1',
		id: 'billingFormTrigger',
		name: 'billingFormTrigger',
		listeners: {
			change: function () {
				var checkbox = this;
				
				Ext.getCmp('customerBillingForm').query('.field').forEach(function (c){
					if (c.id !== 'billingFormTrigger') {
						if (checkbox.checked === true) {
							c.setDisabled(true);
						} else {
							c.setDisabled(false);
						}
					}
				});
			}
		}
	}]
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
		},
		{
			title: 'Customer Billing',
			items: Ridechicago.admin.forms.BillingAddress,
			xtype: 'panel',
			bodyPadding: 5,
			margin: '10 0 0 0',
			id: 'customerBillingForm'
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