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
	fieldLabel: 'First Name',
	name: 'first_name',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Last Name',
	name: 'last_name',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Middle Initial',
	name: 'middle_initial',
	msgTarget: 'qtip',
	validateOnChange: false,
	width: 200,
	maxLength: 1
}, {
	xtype: 'textfield',
	fieldLabel: 'Driver License',
	name: 'drivers_license',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 300
}, {
	xtype: 'datefield',
	fieldLabel: 'Date of Birth',
	name: 'date_of_birth',
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
	name: 'address_line_1',
	msgTarget: 'under',
	validateOnChange: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Address Line 2',
	name: 'address_line_2',
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
	name: 'postal_code',
	msgTarget: 'under',
	validateOnChange: false,
	width: 300
}, {
	xtype: 'textfield',
	fieldLabel: 'Phone Number',
	name: 'phone',
	msgTarget: 'under',
	validateOnChange: false,
	width: 300
}, {
	xtype: 'textfield',
	fieldLabel: 'Alternative Phone Number',
	name: 'phone_alt',
	msgTarget: 'under',
	validateOnChange: false,
	width: 400
}];