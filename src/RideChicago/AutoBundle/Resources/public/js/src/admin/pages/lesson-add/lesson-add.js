Ridechicago.admin.common.view.RegionCenter.setTitle('Schedule a Lesson');

Ridechicago.admin.forms.BillingAddress.unshift({
	xtype: 'fieldcontainer',
	fieldLabel: 'Billing Information',
	defaultType: 'checkboxfield',
	items: [{
		boxLabel: 'Use same information as above',
		inputValue: '1',
		id: 'billingFormTrigger',
		name: 'billingFormTrigger',
		listeners: {
			change: function () {
				var checkbox = this;
				
				Ext.getCmp('customerBillingForm').query('.field').forEach(function (c){
					if (c.id !== 'billingFormTrigger') {
						if (checkbox.checked === true) {
							c.setDisabled(true);
						} else {
							c.setDisabled(false);
						}
					}
				});
				
				// after disable, revalidate so disabled validtions don't bottleneck submit button
				Ext.getCmp('lessonAddForm').isValid();
			}
		}
	}]
});

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	id: 'lessonAddForm',
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
		},
		{
			title: 'Student Information',
			items: Ridechicago.admin.forms.Customer,
			xtype: 'panel',
			bodyPadding: 5,
			margin: '10 0 0 0'
		},
		{
			title: 'Customer Billing',
			items: Ridechicago.admin.forms.BillingAddress,
			xtype: 'panel',
			bodyPadding: 5,
			margin: '10 0 0 0',
			id: 'customerBillingForm'
		}
	],
	
	buttons: [{
		cls: 'btnAlignment',
		text: 'Schedule Lesson',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/lesson/create',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'Lesson Scheduler',
						msg: 'Lesson and customer created!',
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