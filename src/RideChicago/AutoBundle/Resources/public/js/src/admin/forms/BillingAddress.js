Ext.namespace('Ridechicago.admin.forms');

Ridechicago.admin.forms.BillingAddress = [{
	xtype: 'textfield',
	fieldLabel: 'First Name',
	name: 'billing_firstName',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Last Name',
	name: 'billing_lastName',
	msgTarget: 'under',
	validateOnChange: false,
	allowBlank: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Middle Initial',
	name: 'billing_middleInitial',
	msgTarget: 'qtip',
	validateOnChange: false,
	width: 200,
	id: 'billing_middleInitial',
	maxLength: 1
}, {
	xtype: 'textfield',
	fieldLabel: 'Address Line 1',
	name: 'billing_addressLine1',
	msgTarget: 'under',
	validateOnChange: false,
	width: 400
}, {
	xtype: 'textfield',
	fieldLabel: 'Address Line 2',
	name: 'billing_addressLine2',
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
	name: 'billing_postalCode',
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
	name: 'billing_phoneAlt',
	msgTarget: 'under',
	validateOnChange: false,
	width: 400
}, {
	xtype: 'hiddenfield',
	name: 'billing_customerIdx',
	id: 'billing_customerIdx'
}];