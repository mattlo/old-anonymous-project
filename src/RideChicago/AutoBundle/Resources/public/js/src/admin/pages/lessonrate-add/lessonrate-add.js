Ridechicago.admin.common.view.RegionCenter.setTitle('Create a new Lesson Rate');

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	bodyPadding: 10,
	waitMsgTarget: true,
	autoScroll: true,
	fieldDefaults: {labelAlign:'left', labelWidth: 150},
	
	items: Ridechicago.admin.forms.LessonRate,
	
	buttons: [{
		cls: 'btnAlignment',
		text: 'Create Lesson Rate',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/lessonrate/create',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'Lesson Rates',
						msg: 'Lesson rate created!',
						icon: Ext.MessageBox.INFO,
						buttons: Ext.MessageBox.OK,
						fn: function() {
							window.location = '/admin/lessonrate';
						}
					});
				}
			});
		}
	}]
}));