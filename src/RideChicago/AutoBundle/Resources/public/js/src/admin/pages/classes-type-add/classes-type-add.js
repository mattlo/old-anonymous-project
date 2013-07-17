Ridechicago.admin.common.view.RegionCenter.setTitle('Class Management - View Types');


var classTypeStore = Ext.create('Ext.data.Store', {
    model: Ridechicago.admin.model.ClassTypes,
	autoLoad: true
});

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.grid.Panel', {
    store: classTypeStore,
	border: false,
	viewConfig: {
		plugins: {
			ptype: 'gridviewdragdrop',
			dragText: 'Reorder Rows',
			dragGroup: 'gridViewGroupDD',
			dropGroup: 'gridViewGroupDD'
		}
	},
    columns: [
		new Ext.grid.RowNumberer(),
		{text: 'Title', dataIndex: 'title', flex: 1},
		{text: 'Enrollment', dataIndex: 'enrollment', width: 150},
		{text: 'Status', dataIndex: 'status'},
		{text: 'Modified', dataIndex: 'last_modified', width: 150},
		{text: '', sortable: false, dataIndex: 'utilities', width: 100, renderer: function (value, col, store) {
			return '<a href="/admin/class-types/edit/' + store.get('id') + '">Edit</a> | <a class="removeAction" href="">Delete</a>';
		}}
    ]
}));

//usersStore.load({params: {
//	id: 1
//}});