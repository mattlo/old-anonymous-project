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
			var deleteBtn = '';
			
			deleteBtn = ' | <a class="users-delete" data-id="' + store.get('id') + '" data-username="' + store.get('username') + '" href="">Delete</a>';
		
			return '<a class="users-edit" href="/admin/users/edit/' + store.get('id') + '">Edit</a>' + deleteBtn;
		}}
    ]
}));

Ext.onReady(function () {
	Ext.getBody().on('click', function(event, target){
		event.preventDefault();
		
		// element clicked
		var a = Ext.get(target),
			username = a.getAttribute('data-username'),
			id = a.getAttribute('data-id');
		
		Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete <strong>' + username + '</strong>?', function (btn) {
			if (btn === 'yes') {
				Ext.Ajax.request({
					url: '/api/users/delete',
					method: 'POST',
					params: {
						id: id
					},
					success: function(){
						Ext.MessageBox.show({
							title: 'User Management',
							msg: username + ' was successfully removed from the system.',
							icon: Ext.MessageBox.INFO,
							buttons: Ext.MessageBox.OK,
							fn: function() {
								window.location = '/admin/users';
							}
						});
					}
				});
			}
		});
	}, null, {
		delegate: '.users-delete'
	});
});