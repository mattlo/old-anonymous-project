Ext.namespace('Ridechicago.admin.model');

Ridechicago.admin.model.CUSTOMER_PROXY_URL = '/api/customer';

Ext.regModel('Ridechicago.admin.model.Customer', {
    fields: [
		'id',
		'email',
		'drivers_license',
		'driversLicense',
		'date_of_birth',
		{name: 'dateOfBirth', type: Ext.data.Types.DATEONLY},
		'driversLicense',
		'gender',
		'profile',
		'billing_profile',
		'billingProfile',
		'notes',
		'date_created',
		'dateCreated',
		'profile_id',
		'profileId',
		'billing_profile_id',
		'billingProfileId'
	],
 
    proxy: {
        type: 'rest',
        url : Ridechicago.admin.model.CUSTOMER_PROXY_URL,
		appendId: true,
		
        reader: {
			type: 'json',
			root: 'data'
		}
    }
});


Ext.regModel('Ridechicago.admin.model.Profile', {
    fields: [
		'firstName',
		'lastName',
		'id',
		'middleInitials',
		'phone',
		'phoneAlt',
		'address'
	]
});

Ext.regModel('Ridechicago.admin.model.Address', {
    fields: [
		'addressLine1',
		'addressLine2',
		'city',
		'postalCode',
		'state'
	]
});

Ext.regModel('Ridechicago.admin.model.BillingProfile', {
    fields: [
		'billing_firstName',
		'billing_lastName',
		'billing_id',
		'billing_middleInitials',
		'billing_phone',
		'billing_phoneAlt',
		'billing_address'
	]
});

Ext.regModel('Ridechicago.admin.model.BillingAddress', {
    fields: [
		'billing_addressLine1',
		'billing_addressLine2',
		'billing_city',
		'billing_postalCode',
		'billing_state'
	]
});