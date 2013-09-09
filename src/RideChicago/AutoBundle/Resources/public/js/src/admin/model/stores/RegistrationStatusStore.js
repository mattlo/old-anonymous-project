Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.RegistrationStatusStore = Ext.create('Ext.data.Store', {
    fields: ['text', 'value'],
    data : [
		{text: 'Booked', value: 0},
		{text: 'Completed', value: 1},
		{text: 'Checked In', value: 2},
		{text: 'Incomplete', value: 3},
		{text: 'Cancelled', value: 4},
		{text: 'No Show', value: 5},		
		{text: 'Pulled', value: 6},
		{text: 'Fraud', value: 7},
		{text: 'Refund', value: 8},
		{text: 'Waiting', value: 9},
		{text: 'Refreshser', value: 10},
		{text: 'Hold', value: 11}
    ]
});