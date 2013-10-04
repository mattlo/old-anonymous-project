Ext.namespace('Ridechicago.admin.model.stores');

Ridechicago.admin.model.stores.LessonStore = Ext.create('Ext.data.Store', {
	model: Ridechicago.admin.model.Lesson,
	autoLoad: true,
	listeners: {
		load: function (store, records) {
			store.each(function (record) {
				record.set('email', record.get('customer').email);
				record.set('name', record.get('customer').profile.firstName + ' ' + record.get('customer').profile.lastName);
				record.set('phone', record.get('customer').profile.phone);
			});
		}
	}
});