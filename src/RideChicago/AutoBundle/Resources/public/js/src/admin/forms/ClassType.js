Ext.namespace('Ridechicago.admin.forms');

Ridechicago.admin.forms.ClassType = [{
	xtype: 'textfield',
	fieldLabel: 'Title',
	name: 'title',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 400,
	id: 'titleInput'
}, {
	xtype: 'combobox',
	fieldLabel: 'Enrollment',
	store: Ridechicago.admin.model.stores.EnrollmentStore,
	queryMode: 'local',
	displayField: 'text',
	valueField: 'value',
	editable: false,
	name: 'enrollment',
	allowBlank: false,
	width: 400
}, {
	xtype: 'combobox',
	fieldLabel: 'Select Status',
	store: Ridechicago.admin.model.stores.StatusStore,
	queryMode: 'local',
	displayField: 'text',
	valueField: 'value',
	editable: false,
	allowBlank: false,
	name: 'status'
}, {
	xtype: 'htmleditor',
	fontFamilies: [],
	enableFontSize: false,
	name: 'description',
	fieldLabel: 'Description',
	width: 700,
	height: 300,
	allowBlank: false,
	id: 'description'
}, {
	xtype: 'hiddenfield',
	name: 'id'
}];