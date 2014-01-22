Ridechicago.admin.common.view.RegionCenter.setTitle('Update Scheduled Lesson');

Ridechicago.admin.forms.Lesson.unshift({
	xtype: 'combobox',
	fieldLabel: 'Student',
	store: Ridechicago.admin.model.stores.CustomerStore,
	queryMode: 'local',
	displayField: 'firstAndLastName',
	valueField: 'id',
	editable: false,
	name: 'customerId',
	id: 'customerId',
	allowBlank: false,
	disabled: true,
	width: 400
});

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	bodyPadding: 10,
	waitMsgTarget: true,
	autoScroll: true,
	id: 'lessonUpdateForm',
	fieldDefaults: {labelAlign:'left', labelWidth: 150},
	
	items: [
		{
			title: 'Lesson Update',
			items: Ridechicago.admin.forms.Lesson,
			xtype: 'panel',
			bodyPadding: 5
		},
		{
			xtype: 'form',
			waitMsgTarget: true,
			id: 'customerInfo',
			items: [{
				title: 'Customer Info',
				items: Ridechicago.admin.forms.Customer,
				xtype: 'panel',
				bodyPadding: 5,
				margin: '10 0 0 0'
			}]
		}
	],
	
	buttons: [{
		cls: 'btnAlignment',
		text: 'Update Scheduled Lesson',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/lesson/update',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'Lesson Scheduler',
						msg: 'Lesson updated!',
						icon: Ext.MessageBox.INFO,
						buttons: Ext.MessageBox.OK,
						fn: function() {
							window.location = '/admin/lesson';
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
	var lesson = Ridechicago.admin.model.Lesson;
	var customer = Ridechicago.admin.model.Customer;

	// preload form
	lesson.load(data.id, {
		success: function(data) {
			Ext.getCmp('lessonUpdateForm').loadRecord(data);
			Ext.getCmp('customerId').setValue(parseInt(data.get('customerId'), 10));
			Ext.getCmp('lessonRateId').setValue(parseInt(data.get('lessonRateId'), 10));
			Ext.getCmp('lessonType').setValue(parseInt(data.get('lessonType'), 10));
			
			customer.load(parseInt(data.get('customerId'), 10), {
				success: function(customer) {
					var profile = Ext.create('Ridechicago.admin.model.Profile', customer.get('profile')),
						address = Ext.create('Ridechicago.admin.model.Address', profile.get('address'));
					
					Ext.getCmp('customerInfo').loadRecord(customer);
					Ext.getCmp('customerInfo').loadRecord(profile);
					Ext.getCmp('customerInfo').loadRecord(address);
				}
			});
		}
	});
	
	Ext.getCmp('customerInfo').query('.field').forEach(function (c){
		if (c.id !== 'billingFormTrigger') {
			c.setDisabled(true);
		}
	});
});