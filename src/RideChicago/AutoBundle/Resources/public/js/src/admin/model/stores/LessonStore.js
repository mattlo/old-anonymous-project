Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.LessonStore = Ext.create('Ext.data.Store', {
	model: Ridechicago.admin.model.Lesson,
	autoLoad: true
});