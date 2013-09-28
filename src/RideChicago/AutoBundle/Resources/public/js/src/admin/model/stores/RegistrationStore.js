Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.RegistrationStore = Ext.create('Ext.data.Store', {
	model: Ridechicago.admin.model.Registration,
	autoLoad: true,
	listeners: {
		load: function (store, records) {
			store.each(function (record) {
				var date = new Date(record.get('classroom').classStartDate);
				record.set('startDateDisplay', Ext.Date.format(date, 'F m, Y'));
			});
		}
	}
});