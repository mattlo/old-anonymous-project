Ext.namespace('Ridechicago.admin.model');

Ridechicago.admin.model.CUSTOMER_PROXY_URL = '/api/customer';

Ext.regModel('Ridechicago.admin.model.Customer', {
    fields: [
		'id',
		'email',
		'drivers_license',
		'date_of_birth',
		'gender',
		'profile',
		'billing_profile',
		'notes',
		'date_created',
		'profile_id',
		'billing_profile_id'
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