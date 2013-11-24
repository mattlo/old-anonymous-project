Ridechicago.admin.common.view.RegionCenter.setTitle('Add Lesson from existing Student');

Ridechicago.admin.forms.Lesson.unshift({
	xtype: 'combobox',
	fieldLabel: 'Student',
	store: Ridechicago.admin.model.stores.CustomerStore,
	queryMode: 'local',
	displayField: 'firstAndLastName',
	valueField: 'id',
	editable: false,
	name: 'customerId',
	allowBlank: false,
	width: 400
});

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	bodyPadding: 10,
	waitMsgTarget: true,
	autoScroll: true,
	fieldDefaults: {labelAlign:'left', labelWidth: 150},
	
	items: [
		{
			title: 'Lesson Form',
			items: Ridechicago.admin.forms.Lesson,
			xtype: 'panel',
			bodyPadding: 5
		}
	],
	
	buttons: [{
		cls: 'btnAlignment',
		text: 'Schedule Lesson',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/lesson/createFromExistingStudent',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'Lesson Scheduler',
						msg: 'Lesson created!',
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