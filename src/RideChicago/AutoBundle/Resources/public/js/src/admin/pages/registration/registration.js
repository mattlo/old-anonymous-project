Ridechicago.admin.common.view.RegionCenter.setTitle('Student Management - View');


var usersStore = Ext.create('Ext.data.Store', {
    model: Ridechicago.admin.model.Registration,
	autoLoad: true
});

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.grid.Panel', {
    store: usersStore,
	border: false,
    columns: [
		new Ext.grid.RowNumberer(),
		
		{text: 'Classroom', dataIndex: 'classroom', width: 150, renderer: function (value) {
			return value.longName;
		}},
		{text: 'Name', dataIndex: 'customer', width: 120, renderer: function (customer) {
			return customer.profile.firstName + ' ' + customer.profile.lastName;
		}},
		{text: 'Status', dataIndex: 'status', width: 100, renderer: function (value) {
			return Ridechicago.admin.model.stores.RegistrationStatusStore.findRecord('value', value).get('text');
		}},
		{text: 'Promo', dataIndex: 'promotionCode', width: 80},
		{text: 'Classwork', dataIndex: 'classStatus', width: 80, renderer: function (value) {
			return Ridechicago.admin.model.stores.PassIncompleteStore.findRecord('value', value).get('text');
		}},
		{text: 'Riding (Lab)', dataIndex: 'labStatus', width: 80, renderer: function (value) {
			return Ridechicago.admin.model.stores.PassIncompleteStore.findRecord('value', value).get('text');
		}},
		{text: 'Exam', width: 50, dataIndex: 'exam'},
		{text: 'Phone', dataIndex: 'phone', renderer: function (v, c, store) {
			return store.get('customer').profile.phone;
		}},
		{text: 'Notes', dataIndex: 'notes', width: 150}
    ]
}));
