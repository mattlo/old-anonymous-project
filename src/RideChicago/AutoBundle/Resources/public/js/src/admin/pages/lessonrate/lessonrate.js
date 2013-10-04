Ridechicago.admin.common.view.RegionCenter.setTitle('Lesson Rates');


Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.grid.Panel', {
    store: Ridechicago.admin.model.stores.LessonRateStore,
	border: false,
    columns: [
		new Ext.grid.RowNumberer(),
		{text: 'Hours', dataIndex: 'duration'},
		{text: 'Price', dataIndex: 'price', renderer: function (value) {
			return '$' + value;
		}},
		{text: '', dataIndex: 'utilities', flex: 1, renderer: function (value, col, store) {
			return '<a class="users-edit" href="/admin/lessonrate/update/' + store.get('id') + '">Edit</a>';
		}}
    ]
}));
