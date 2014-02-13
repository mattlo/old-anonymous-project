Ridechicago.admin.common.view.RegionCenter.setTitle('Lessons');


Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.grid.Panel', {
    store: Ridechicago.admin.model.stores.LessonStore,
	border: false,
    columns: [
		new Ext.grid.RowNumberer(),
		{text: 'Customer', dataIndex: 'name', width: 125},
		{text: 'Type', dataIndex: 'lessonType', width: 125, renderer: function (value) {
			return Ridechicago.admin.model.stores.LessonTypeStore.findRecord('value', value).get('text');
		}},
		{text: 'Rate', dataIndex: 'lessonRate', width: 160, renderer: function (lessonrate, col, store) {
			return lessonrate.rate;
		}},
		{text: 'Status', dataIndex: 'status', width: 100, renderer: function (value) {
			return Ridechicago.admin.model.stores.RegistrationStatusStore.findRecord('value', value).get('text');
		}},
		{text: 'Phone', dataIndex: 'phone'},
		{text: '', dataIndex: 'utilities', flex: 1, renderer: function (value, col, store) {
			return '<a class="users-edit" href="/admin/lesson/update/' + store.get('id') + '">Edit</a> | ' +
				'<a href="/admin/customers/' + store.get('customer').id + '">Edit Student</a> | ' +
				'<a href="#/" class="reg-delete" data-id="' + store.get('id') + '" data-username="' + store.get('customer').profile.firstName + ' ' + store.get('customer').profile.lastName + '">Delete</a>';
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
		
		Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete <strong>' + username + '</strong>\'s registration?', function (btn) {
			if (btn === 'yes') {
				Ext.Ajax.request({
					url: '/api/lesson/delete',
					method: 'POST',
					params: {
						id: id
					},
					success: function(){
						Ext.MessageBox.show({
							title: 'Lesson',
							msg: username + ' was successfully removed from the system.',
							icon: Ext.MessageBox.INFO,
							buttons: Ext.MessageBox.OK,
							fn: function() {
								window.location = '/admin/lesson';
							}
						});
					}
				});
			}
		});
	}, null, {
		delegate: '.reg-delete'
	});
});