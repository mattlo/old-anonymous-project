Ext.namespace('Ridechicago.admin.model');

Ridechicago.admin.model.CLASSTYPES_PROXY_URL = '/api/class-types';

Ext.regModel('Ridechicago.admin.model.ClassTypes', {
    fields: [
		'id',
		'title',
		'enrollment',
		'status',
		{name: 'lastModified', type: Ext.data.Types.DATE2},
		'indexOrder',
		'description'
	],
 
    proxy: {
        type: 'rest',
        url : Ridechicago.admin.model.CLASSTYPES_PROXY_URL,
		appendId: true,
        reader: {
			type: 'json',
			root: 'data'
		}
    }
});
