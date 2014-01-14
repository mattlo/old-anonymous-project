Ridechicago.admin.common.view.RegionCenter.setTitle('Classes - Add Classroom');

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	frame: true,
	autoScroll: true,
	bodyPadding: 5,
	bodyStyle: 'overflow-x: scroll',
	waitMsgTarget: true,
	fieldDefaults: {labelAlign: 'left', labelWidth: 150},
	items: Ridechicago.admin.forms.Classroom,
	buttons: [{
		cls: 'btnAlignment',
		text: 'Add New Classroom',
		formBind: true,
		handler: function() {
			this.up('form').getForm().submit({
				url: '/api/classes/create',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'Classroom Management',
						msg: 'Classroom was successfully created!',
						icon: Ext.MessageBox.INFO,
						buttons: Ext.MessageBox.OK,
						fn: function() {
							window.location = '/admin/classes';
						}
					});
				}
			});
		}
	}]
}));