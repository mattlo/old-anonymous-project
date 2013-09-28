Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.CustomerStore = Ext.create('Ext.data.Store', {
	model: Ridechicago.admin.model.Customer,
	autoLoad: true,
	listeners: {
		load: function (store, records) {
			store.each(function (record) {
				record.set('firstAndLastName', record.get('profile').lastName + ', ' + record.get('profile').firstName);
			});
		}
	}
});