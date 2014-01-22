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
			return '<a class="users-edit" href="/admin/lesson/update/' + store.get('id') + '">Edit</a>';
		}}
    ]
}));
