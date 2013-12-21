Ridechicago.admin.common.view.RegionCenter.setTitle('Create a new Lesson Rate');

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	bodyPadding: 10,
	waitMsgTarget: true,
	autoScroll: true,
	id: 'lessonRateUpdateForm',
	fieldDefaults: {labelAlign:'left', labelWidth: 150},
	
	items: Ridechicago.admin.forms.LessonRate,
	
	buttons: [{
		cls: 'btnAlignment',
		text: 'Update Lesson Rate',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/lessonrate/update',
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

Ext.onReady(function () {
	// get onpage JSON data
	var rawData = Ext.get('pageContentData').dom.innerHTML;
	
	// convert to JSON
	var data = Ext.JSON.decode(rawData);
	
	// get model
	var lessonRate = Ridechicago.admin.model.LessonRate;

	// preload form
	lessonRate.load(data.id, {
		success: function(registration) {
			Ext.getCmp('lessonRateUpdateForm').loadRecord(registration);
		}
	});
});