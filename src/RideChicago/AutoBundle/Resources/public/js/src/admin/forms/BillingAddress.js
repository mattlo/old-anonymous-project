Ext.namespace('Ridechicago.admin.forms');

Ridechicago.admin.forms.BillingAddress = [{
	xtype: 'textfield',
	fieldLabel: 'First Name',
	name: 'billing_first_name',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Last Name',
	name: 'billing_last_name',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Middle Initial',
	name: 'billing_middle_initial',
	msgTarget: 'qtip',
	validateOnChange: false,
	width: 200,
	maxLength: 1
}, {
	xtype: 'textfield',
	fieldLabel: 'Address Line 1',
	name: 'billing_address_line_1',
	msgTarget: 'under',
	validateOnChange: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Address Line 2',
	name: 'billing_address_line_2',
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
	name: 'billing_state',
	width: 300
}, {
	xtype: 'textfield',
	fieldLabel: 'Zip Code',
	name: 'billing_postal_code',
	msgTarget: 'under',
	validateOnChange: false,
	width: 300
}, {
	xtype: 'textfield',
	fieldLabel: 'Phone Number',
	name: 'billing_phone',
	msgTarget: 'under',
	validateOnChange: false,
	width: 300
}, {
	xtype: 'textfield',
	fieldLabel: 'Alternative Phone Number',
	name: 'billing_phone_alt',
	msgTarget: 'under',
	validateOnChange: false,
	width: 400
}];