Ext.namespace('Ridechicago.admin.model');

Ridechicago.admin.model.CLASSES_PROXY_URL = '/api/classes';

Ext.regModel('Ridechicago.admin.model.Classes', {
    fields: [
		'id',
		'lastModified',
		'classDays',
		'price',
		'deposit',
		'enrollmentSeats',
		'enrollmentWaitList',
		'enrollmentSeatsUsed',
		'enrollmentWaitListUsed',
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
		'code',
		'longName'
	],
 
    proxy: {
        type: 'rest',
        url : Ridechicago.admin.model.CLASSES_PROXY_URL,
		appendId: true,
		
        reader: {
			type: 'json',
			root: 'data'
		}
    }
});