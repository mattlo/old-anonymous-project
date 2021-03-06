Ridechicago.admin.common.view.RegionCenter.setTitle('Class Management - Add Type');

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	bodyPadding: 5,
	waitMsgTarget: true,
	autoScroll: true,
	fieldDefaults: {labelAlign:'left', labelWidth: 150},
	
	items: Ridechicago.admin.forms.ClassType,
	
	buttons: [{
		cls: 'btnAlignment',
		text: 'Create Class Type',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/class-types/create',
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