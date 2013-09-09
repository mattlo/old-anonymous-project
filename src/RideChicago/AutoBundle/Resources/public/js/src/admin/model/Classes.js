Ext.regModel('Ridechicago.admin.model.Classes', {
    fields: [
		'id',
		'lastModified',
		'classDays',
		'price',
		'deposit',
		'enrollmentSeats',
		'enrollmentWaitList',
		'promotionLimit',
		{name: 'classRegistrationStartDate', type: Ext.data.Types.DATEONLY},
		{name: 'classStartDate', type: Ext.data.Types.DATEONLY},
		{name: 'classEndDate', type: Ext.data.Types.DATEONLY},
		'instructorId',
		'onlineRegistrationStatus',
		'status',
		'notes',
		'classtypeId',
		'classtype',
		'code'
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