Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.GenderStore = Ext.create('Ext.data.Store', {
    fields: ['text', 'value'],
    data : [
		{
			text: 'Male',
			value: 0
		},
		{
			text: 'Female',
			value: 1
		}
    ]
});