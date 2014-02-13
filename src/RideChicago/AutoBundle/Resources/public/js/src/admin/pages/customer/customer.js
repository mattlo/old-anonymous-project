Ridechicago.admin.common.view.RegionCenter.setTitle('Manage Student Profiles');


Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.grid.Panel', {
    store: Ridechicago.admin.model.stores.CustomerStore,
	border: false,
    columns: [
		new Ext.grid.RowNumberer(),
		{text: 'Name', dataIndex: 'firstAndLastName', width: 200},
		{text: 'Email', dataIndex: 'email', width: 200},
		{text: 'Phone', dataIndex: 'phone', renderer: function (v, c, store) {
			return store.get('profile').phone;
		}},
		{text: '', dataIndex: 'utilities', flex: 1, renderer: function (value, col, store) {
			return '<a class="users-edit" href="/admin/customers/' + store.get('id') + '">Edit</a>';
		}}
    ]
}));
