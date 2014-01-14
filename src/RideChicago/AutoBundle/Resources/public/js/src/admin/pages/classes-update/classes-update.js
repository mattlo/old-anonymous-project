Ridechicago.admin.common.view.RegionCenter.setTitle('Classes - Update Classroom');

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	frame: true,
	autoScroll: true,
	bodyPadding: 5,
	bodyStyle: 'overflow-x: scroll',
	waitMsgTarget: true,
	fieldDefaults: {labelAlign: 'left', labelWidth: 150},
	items: Ridechicago.admin.forms.Classroom,
	id: 'classroomUpdateForm',
	buttons: [{
		cls: 'btnAlignment',
		text: 'Update Classroom',
		formBind: true,
		handler: function() {
			this.up('form').getForm().submit({
				url: '/api/classes/update',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'Classroom Management',
						msg: 'Classroom was successfully updated!',
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

Ext.onReady(function () {
	// get onpage JSON data
	var rawData = Ext.get('pageContentData').dom.innerHTML;
	
	// convert to JSON
	var data = Ext.JSON.decode(rawData);
	
	// get model
	var classes = Ridechicago.admin.model.Classes;

	// preload form
	classes.load(data.id, {
		success: function(data) {
			var i,
				days = Ridechicago.admin.forms.Days,
				timeCmp,
				timeCmpEnd,
				fieldName = 'class_day_config_n',
				cbk,
				currentDay,
				daysData = JSON.parse(data.get('classDays'));
			
			Ext.getCmp('classroomUpdateForm').loadRecord(data);
			Ext.getCmp('classtypeId').setValue(parseInt(data.get('classtypeId'), 10));
			Ext.getCmp('onlineRegistrationStatus').setValue(parseInt(data.get('onlineRegistrationStatus'), 10));
			Ext.getCmp('status').setValue(parseInt(data.get('status'), 10));
			
			// cross reference known days with set ones
			for (i = 0; i < days.length; ++i) {
				if (typeof daysData[days[i]] !== 'undefined') {
					timeCmp = Ext.getCmp(fieldName + i + '_start'),
					timeCmpEnd = Ext.getCmp(fieldName + i + '_end');
					currentDay = daysData[days[i]];
					
					cbk = Ext.getCmp('dayCbk_' + i);
					
					cbk.setValue(true);
					
					timeCmp.setValue(currentDay.start);
					timeCmpEnd.setValue(currentDay.end);
				}
			}
		}
	});
});