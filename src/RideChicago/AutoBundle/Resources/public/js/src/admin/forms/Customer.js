Ext.namespace('Ridechicago.admin.forms');

Ridechicago.admin.forms.Customer = [{
	xtype: 'textfield',
	fieldLabel: 'Email',
	name: 'email',
	vtype: 'email',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Cell Number',
	name: 'phone',
	msgTarget: 'under',
	validateOnChange: false,
	width: 300
}, {
	xtype: 'textfield',
	fieldLabel: 'First Name',
	name: 'firstName',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Last Name',
	name: 'lastName',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 400
}/*, {
	xtype: 'textfield',
	fieldLabel: 'Middle Initial',
	name: 'middleInitial',
	msgTarget: 'qtip',
	validateOnChange: false,
	width: 200,
	maxLength: 1
}*/, {
	xtype: 'datefield',
	fieldLabel: 'Date of Birth',
	name: 'dateOfBirth',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 350
}, {
	xtype: 'combobox',
	fieldLabel: 'Gender',
	store: Ridechicago.admin.model.stores.GenderStore,
	queryMode: 'local',
	displayField: 'text',
	valueField: 'value',
	editable: false,
	name: 'gender',
	width: 250
}, {
	xtype: 'textfield',
	fieldLabel: 'Address Line 1',
	name: 'addressLine1',
	msgTarget: 'under',
	validateOnChange: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Address Line 2',
	name: 'addressLine2',
	msgTarget: 'under',
	validateOnChange: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'City',
	name: 'city',
	msgTarget: 'under',
	validateOnChange: false,
	width: 400
}, {
	xtype: 'combobox',
	fieldLabel: 'State',
	store: Ridechicago.admin.model.stores.UsStatesStore,
	queryMode: 'local',
	displayField: 'text',
	valueField: 'value',
	editable: false,
	name: 'state',
	width: 300
}, {
	xtype: 'textfield',
	fieldLabel: 'Zip Code',
	name: 'postalCode',
	msgTarget: 'under',
	validateOnChange: false,
	width: 300
}, {
	xtype: 'textfield',
	fieldLabel: 'Permit ID / Drivers License',
	name: 'driversLicense',
	msgTarget: 'under',
	validateOnChange: false,
	width: 300
}];