Ext.namespace('Ridechicago.admin.model');

Ridechicago.admin.model.LESSONRATE_PROXY_URL = '/api/lessonrate';

Ext.regModel('Ridechicago.admin.model.LessonRate', {
    fields: [
		'id',
		'duration',
		'price',
		'rate',
		'pickupfee'
	],
 
    proxy: {
        type: 'rest',
        url : Ridechicago.admin.model.LESSONRATE_PROXY_URL,
		appendId: true,
		
        reader: {
			type: 'json',
			root: 'data'
		}
    }
});