Ridechicago.admin.common.view.RegionCenter.setTitle('User Management - View Users');


var usersStore = Ext.create('Ext.data.Store', {
    model: Ridechicago.admin.model.Users,
	autoLoad: true
});

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.grid.Panel', {
    store: usersStore,
	border: false,
    columns: [
		new Ext.grid.RowNumberer(),
		{text: 'User Name', dataIndex: 'username', flex: 1},
		{text: 'Status', dataIndex: 'status', renderer: function (value) {
			return (value === 0 ? 'Inactive' : 'Active')
		}},
		{text: 'Security', dataIndex: 'roles', renderer: function (value) {
			return value.join(', ').replace(/^role_/i, '');
		}},
		{text: '', dataIndex: 'utilities', width: 100, renderer: function (value, col, store) {
			return '<a href="/admin/users/edit/' + store.get('id') + '">Edit</a> | <a class="removeAction" href="">Delete</a>';
		}}
    ]
}));

//usersStore.load({params: {
//	id: 1
//}});