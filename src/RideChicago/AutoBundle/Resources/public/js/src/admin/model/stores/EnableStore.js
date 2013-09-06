Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.EnableStore = Ext.create('Ext.data.Store', {
    fields: ['text', 'value'],
    data : [
		{
			text: 'Enable',
			value: 1
		},
		{
			text: 'Disable',
			value: 0
		}
    ]
});