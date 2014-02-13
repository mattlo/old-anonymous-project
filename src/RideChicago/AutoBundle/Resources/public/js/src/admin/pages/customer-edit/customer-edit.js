Ridechicago.admin.common.view.RegionCenter.setTitle('Manage Student Profile');

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
	id: 'customerInfo',
	fieldDefaults: {labelAlign:'left', labelWidth: 150},
	
	items: [
		{
			title: 'Student Information',
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
		text: 'Update Student Profile',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/customer/update',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'Customer Update',
						msg: 'Student profile was successfully created!',
						icon: Ext.MessageBox.INFO,
						buttons: Ext.MessageBox.OK,
						fn: function() {
							window.location = '/admin/customers';
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
	var customer = Ridechicago.admin.model.Customer;
	
	customer.load(data.id, {
		success: function(customer) {
			var profile = Ext.create('Ridechicago.admin.model.Profile', customer.get('profile')),
				address = Ext.create('Ridechicago.admin.model.Address', profile.get('address')),
				billingProfileRaw = customer.get('billingProfile'),
				billingProfileFiltered = {},
				billingAddressFiltered = {},
				billingAddress,
				billingProfile,
				prop;

			Ext.getCmp('customerInfo').loadRecord(customer);
			Ext.getCmp('customerInfo').loadRecord(profile);
			Ext.getCmp('customerInfo').loadRecord(address);
			Ext.getCmp('customerIdx').setValue(customer.get('id'));
			
			if (billingProfileRaw !== null) {
				for (prop in billingProfileRaw) {
					billingProfileFiltered['billing_' + prop] = billingProfileRaw[prop];
				}
				
				for (prop in billingProfileRaw.address) {
					billingAddressFiltered['billing_' + prop] = billingProfileRaw.address[prop];
				}
				
				billingProfile = Ext.create('Ridechicago.admin.model.BillingProfile', billingProfileFiltered);
				billingAddress = Ext.create('Ridechicago.admin.model.BillingAddress', billingAddressFiltered);
				
				console.log(billingProfile, billingAddress);
				
				Ext.getCmp('customerInfo').loadRecord(billingProfile);
				Ext.getCmp('customerInfo').loadRecord(billingAddress);
				Ext.getCmp('billing_middleInitial').setValue(billingProfileRaw.middleInitial);
				Ext.getCmp('billing_customerIdx').setValue(billingProfileRaw.id);
				
				console.log(billingProfileFiltered, billingAddressFiltered);
			} else {
				Ext.getCmp('billingFormTrigger').setValue(true);
			}
		}
	});
});