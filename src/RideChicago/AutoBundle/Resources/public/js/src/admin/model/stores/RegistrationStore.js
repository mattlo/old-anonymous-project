Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.RegistrationStore = Ext.create('Ext.data.Store', {
	model: Ridechicago.admin.model.Registration,
	autoLoad: true
});