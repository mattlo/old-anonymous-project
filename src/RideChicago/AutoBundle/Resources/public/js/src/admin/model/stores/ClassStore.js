Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.ClassStore = Ext.create('Ext.data.Store', {
	model: Ridechicago.admin.model.Classes,
	autoLoad: true
});