Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.LessonTypeStore = Ext.create('Ext.data.Store', {
    fields: ['text', 'value'],
    data : [
		{text: 'Adult', value: 0},
		{text: 'Teen', value: 1},
		{text: 'Extended', value: 2}
    ]
});