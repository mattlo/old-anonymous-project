Ext.namespace('Ridechicago.admin.model');

Ridechicago.admin.model.REGISTRATION_PROXY_URL = '/api/registration';

Ext.regModel('Ridechicago.admin.model.Registration', {
    fields: [
		'id',
		'status',
		'classroom_id',
		'classroom',
		'lab_status',
		'class_status',
		'promotion_code',
		'customer_id',
		'customer',
		{name: 'date_created', type: Ext.data.Types.DATE2}
	],
 
    proxy: {
        type: 'rest',
        url : Ridechicago.admin.model.REGISTRATION_PROXY_URL,
		appendId: true,
		
        reader: {
			type: 'json',
			root: 'data'
		}
    }
});