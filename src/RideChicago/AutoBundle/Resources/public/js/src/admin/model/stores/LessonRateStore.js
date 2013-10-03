Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.LessonRateStore = Ext.create('Ext.data.Store', {
	model: Ridechicago.admin.model.LessonRate,
	autoLoad: true
});