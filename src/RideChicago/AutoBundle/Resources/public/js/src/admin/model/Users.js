Ext.regModel('Ridechicago.admin.model.Users', {
    fields: [
		'id',
		'username',
		'status',
		'roles',
		'role'
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