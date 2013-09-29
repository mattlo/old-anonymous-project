Ridechicago.admin.common.view.RegionCenter.setTitle('Student Management - Register an existing Student');

Ridechicago.admin.forms.Registration.unshift({
	xtype: 'combobox',
	fieldLabel: 'Customer',
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
	id: 'registrationUpdateForm',
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
		text: 'Update Student Registration',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/registration/update',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'Registration Management',
						msg: 'Registration was successfully updated!',
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

Ext.onReady(function () {
	// get onpage JSON data
	var rawData = Ext.get('pageContentData').dom.innerHTML;
	
	// convert to JSON
	var data = Ext.JSON.decode(rawData);
	
	// get model
	var registration = Ridechicago.admin.model.Registration;

	// preload form
	registration.load(data.id, {
		success: function(registration) {
			Ext.getCmp('registrationUpdateForm').loadRecord(registration);
			Ext.getCmp('customerId').setValue(parseInt(registration.get('customerId'), 10));
			Ext.getCmp('classroomId').setValue(parseInt(registration.get('classroomId'), 10));
		}
	});
});