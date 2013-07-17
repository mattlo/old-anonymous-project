Ext.regModel('Ridechicago.admin.model.Classes', {
    fields: [
		'id',
		'code',
		'days',
		'opens',
		'start',
		'end',
		'class',
		'price',
		'special',
		'status',
		'seats',
		'waiting',
		'instructor',
		'notes'
	],
 
    proxy: {
        type: 'rest',
        url : '/api/classes',
        reader: {
			type: 'json',
			root: 'data'
		}
    }
});