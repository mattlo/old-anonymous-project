Ext.regModel('Ridechicago.admin.model.Users', {
    fields: [
		'username',
		'status',
		'security'
	],
 
    proxy: {
        type: 'rest',
        url : '/api/users',
        reader: {
			type: 'json',
			root: 'data'
		}
    }
});