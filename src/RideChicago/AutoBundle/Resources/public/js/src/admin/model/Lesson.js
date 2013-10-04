Ext.namespace('Ridechicago.admin.model');

Ridechicago.admin.model.LESSON_PROXY_URL = '/api/lesson';

Ext.regModel('Ridechicago.admin.model.Lesson', {
    fields: [
		'id',
		'status',
		'promotionCode',
		'customerId',
		'customer',
		'notes',
		'lessonRate',
		'lessonRateId',
		{name: 'date', type: Ext.data.Types.DATEONLY},
		{name: 'time', type: Ext.data.Types.TIMEONLY},
		{name: 'datetime', type: Ext.data.Types.DATE2},
		{name: 'dateCreated', type: Ext.data.Types.DATE2}
	],
 
    proxy: {
        type: 'rest',
        url : Ridechicago.admin.model.LESSON_PROXY_URL,
		appendId: true,
		
        reader: {
			type: 'json',
			root: 'data'
		}
    }
});