Ridechicago.admin.common.view.RegionCenter.setTitle('Update Scheduled Lesson');

Ridechicago.admin.forms.Lesson.unshift({
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
	id: 'lessonUpdateForm',
	fieldDefaults: {labelAlign:'left', labelWidth: 150},
	
	items: [
		{
			title: 'Lesson Update',
			items: Ridechicago.admin.forms.Lesson,
			xtype: 'panel',
			bodyPadding: 5
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

	// preload form
	lesson.load(data.id, {
		success: function(data) {
			Ext.getCmp('lessonUpdateForm').loadRecord(data);
			Ext.getCmp('customerId').setValue(parseInt(data.get('customerId'), 10));
			Ext.getCmp('lessonRateId').setValue(parseInt(data.get('lessonRateId'), 10));
			Ext.getCmp('lessonType').setValue(parseInt(data.get('lessonType'), 10));
		}
	});
});