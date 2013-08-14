Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.EnrollmentStore = Ext.create('Ext.data.Store', {
    fields: ['text', 'value'],
    data : [
		{
			text: 'Active Enrollment',
			value: 1
		},
		{
			text: 'Information Only',
			value: 0
		}
    ]
});