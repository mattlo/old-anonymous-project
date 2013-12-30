Ext.namespace('Ridechicago.admin.forms');

Ridechicago.admin.forms.Lesson = [{
	xtype: 'combobox',
	fieldLabel: 'Select Status',
	store: Ridechicago.admin.model.stores.RegistrationStatusStore,
	queryMode: 'local',
	displayField: 'text',
	valueField: 'value',
	editable: false,
	allowBlank: false,
	msgTarget: 'under',
	name: 'status',
	width: 300
}, {
	xtype: 'combobox',
	fieldLabel: 'Lesson Type',
	store: Ridechicago.admin.model.stores.LessonTypeStore,
	queryMode: 'local',
	displayField: 'text',
	valueField: 'value',
	editable: false,
	allowBlank: false,
	msgTarget: 'under',
	name: 'lessonType',
	id: 'lessonType',
	width: 400
}, {
	xtype: 'combobox',
	fieldLabel: 'Select Rate',
	store: Ridechicago.admin.model.stores.LessonRateStore,
	queryMode: 'local',
	displayField: 'rate',
	valueField: 'id',
	editable: false,
	allowBlank: false,
	msgTarget: 'under',
	name: 'lessonRateId',
	id: 'lessonRateId',
	width: 400
}, {
	width: 300,
	fieldLabel: 'Time',
	xtype: 'timefield',
	name: 'time',
	id: 'timeId',
	minValue: Ext.Date.parse('05:00:00 AM', 'h:i:s A'),
	maxValue: Ext.Date.parse('09:00:00 PM', 'h:i:s A'),
	editable: false,
	allowBlank: false
}, {
	xtype: 'datefield',
	fieldLabel: 'Date',
	name: 'date',
	msgTarget: 'under',
	allowBlank: false,
	width: 350
}, {
	xtype: 'textfield',
	fieldLabel: 'Referral or School',
	name: 'promotionCode',
	msgTarget: 'under'
}, {
	xtype: 'htmleditor',
	fontFamilies: [],
	enableFontSize: false,
	name: 'notes',
	fieldLabel: 'Lesson Notes',
	width: 500,
	height: 200,
	allowBlank: false,
	id: 'notes'
}, {
	xtype: 'hiddenfield',
	name: 'id'
}];