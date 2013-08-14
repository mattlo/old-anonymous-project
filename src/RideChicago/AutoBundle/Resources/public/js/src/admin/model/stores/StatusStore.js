Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.StatusStore = Ext.create('Ext.data.Store', {
    fields: ['text', 'value'],
    data : [
		{
			text: 'Active',
			value: 1
		},
		{
			text: 'Non-Active',
			value: 0
		}
    ]
});