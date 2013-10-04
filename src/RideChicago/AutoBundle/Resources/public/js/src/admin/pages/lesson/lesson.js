Ridechicago.admin.common.view.RegionCenter.setTitle('Lessons');


Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.grid.Panel', {
    store: Ridechicago.admin.model.stores.LessonStore,
	border: false,
    columns: [
		new Ext.grid.RowNumberer(),
		
		{text: 'When', dataIndex: 'datetime', width: 150},
		{text: 'Customer', dataIndex: 'name', width: 125},
		{text: 'Rate', dataIndex: 'lessonRate', width: 160, renderer: function (lessonrate, col, store) {
			return lessonrate.rate;
		}},
		{text: 'Status', dataIndex: 'status', width: 100, renderer: function (value) {
			return Ridechicago.admin.model.stores.RegistrationStatusStore.findRecord('value', value).get('text');
		}},
		{text: 'Email', dataIndex: 'email', width: 150},
		{text: 'Phone', dataIndex: 'phone'},
		{text: 'Notes', dataIndex: 'notes', width: 150}
    ]
}));
