Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.PassIncompleteStore = Ext.create('Ext.data.Store', {
    fields: ['text', 'value'],
    data : [
		{
			text: 'Pass',
			value: 1
		},
		{
			text: 'Incomplete',
			value: 0
		}
    ]
});