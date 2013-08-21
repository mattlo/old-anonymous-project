Ridechicago.admin.common.view.RegionCenter.setTitle('Class Management - Edit Type');

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	bodyPadding: 5,
	waitMsgTarget: true,
	autoScroll: true,
	fieldDefaults: {labelAlign:'left', labelWidth: 150},
	
	id: 'classTypesEditForm',
	items: Ridechicago.admin.forms.ClassType,
	
	buttons: [{
		cls: 'btnAlignment',
		text: 'Update Class Type',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/class-types/update',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'Class Type Management',
						msg: Ext.getCmp('titleInput').getValue() + ' was successfully created!',
						icon: Ext.MessageBox.INFO,
						buttons: Ext.MessageBox.OK,
						fn: function() {
							window.location = '/admin/class-types';
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
	var classType = Ridechicago.admin.model.classtypes.ClassTypesModel;

	// preload form
	classType.load(data.id, {
		success: function(classType) {
			Ext.getCmp('classTypesEditForm').loadRecord(classType);
		}
	});
});