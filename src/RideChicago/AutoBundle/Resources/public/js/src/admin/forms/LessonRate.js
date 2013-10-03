Ext.namespace('Ridechicago.admin.forms');

Ridechicago.admin.forms.LessonRate = [{
	xtype: 'numberfield',
	name: 'duration',
	msgTarget: 'under',
	fieldLabel: 'Duration (Hours)',
	maxValue: 24,
	minValue: 0.25,
	step: 0.25,
	width: 300,
	allowBlank: false
}, {
	xtype: 'numberfield',
	name: 'price',
	msgTarget: 'under',
	fieldLabel: 'Price',
	maxValue: 9999.99,
	minValue: 0.01,
	width: 300,
	hideTrigger: true,
	keyNavEnabled: false,
	allowBlank: false,
	mouseWheelEnabled: false
}];