Ext.regModel('Ridechicago.admin.model.ClassTypes', {
    fields: [
		'id',
		'title',
		'enrollment',
		'status',
		'last_modified'
	],
 
    proxy: {
        type: 'rest',
        url : '/api/class-types',
        reader: {
			type: 'json',
			root: 'data'
		}
    }
});