Ext.namespace('Ridechicago.admin.forms');

Ridechicago.admin.forms.Registration = [{
	xtype: 'combobox',
	fieldLabel: 'Select Status',
	store: Ridechicago.admin.model.stores.RegistrationStatusStore,
	queryMode: 'local',
	displayField: 'text',
	valueField: 'value',
	editable: false,
	allowBlank: false,
	msgTarget: 'under',
	name: 'status'
}, {
	xtype: 'combobox',
	fieldLabel: 'Select Classroom',
	store: Ridechicago.admin.model.stores.ClassStore,
	displayField: 'longName',
	valueField: 'id',
	editable: false,
	allowBlank: false,
	msgTarget: 'under',
	name: 'classroom_id',
	width: 500
}, {
	xtype: 'combobox',
	fieldLabel: 'Class Status',
	store: Ridechicago.admin.model.stores.PassIncompleteStore,
	queryMode: 'local',
	displayField: 'text',
	valueField: 'value',
	editable: false,
	allowBlank: false,
	msgTarget: 'under',
	name: 'class_status'
}, {
	xtype: 'combobox',
	fieldLabel: 'Lab Status',
	store: Ridechicago.admin.model.stores.PassIncompleteStore,
	queryMode: 'local',
	displayField: 'text',
	valueField: 'value',
	editable: false,
	allowBlank: false,
	msgTarget: 'under',
	name: 'lab_status'
}, {
	xtype: 'textfield',
	fieldLabel: 'Promo Code',
	name: 'promotion_code',
	msgTarget: 'under'
}, {
	xtype: 'htmleditor',
	fontFamilies: [],
	enableFontSize: false,
	name: 'notes',
	fieldLabel: 'Notes',
	width: 500,
	height: 200,
	allowBlank: false,
	id: 'notes'
}, {
	xtype: 'hiddenfield',
	name: 'id'
}];