Ridechicago.admin.common.view.RegionCenter.setTitle('Class Management - View Classes');


var classStore = Ext.create('Ext.data.Store', {
    model: Ridechicago.admin.model.Classes,
	autoLoad: true
});

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.grid.Panel', {
    store: classStore,
	border: false,
	cls: 'enable-multirow',
    columns: [
		new Ext.grid.RowNumberer(),
		{text: 'Code', dataIndex: 'code', width: 120},
		{text: 'Days', dataIndex: 'days', width: 160},
		{text: 'Opens', dataIndex: 'opens', width: 60},
		{text: 'Start', dataIndex: 'start', width: 65},
		{text: 'End', dataIndex: 'end', width: 65},
		{text: 'Class', dataIndex: 'class', width: 150},
		{text: 'Price', dataIndex: 'price', width: 60},
		{text: 'Special', dataIndex: 'special', width: 50},
		{text: 'Status', dataIndex: 'status', width: 70, renderer: function (value, col, store, rowIndex, colIndex, record, table) {
			// @TODO temporary
			if (value === 0) {
				setTimeout(function () {

					var row = Ext.get(table.all.elements[rowIndex].id);
					row.addCls('is-inactive');
				}, 10);
			}
			
			return (value === 0 ? 'Inactive' : 'Active');
		}},
		{text: 'Seats', dataIndex: 'seats', width: 40},
		{text: 'Waiting', dataIndex: 'waiting', width: 50},
		{text: 'Instructor', dataIndex: 'instructor', width: 80},
		{text: 'Notes', dataIndex: 'notes', width: 120, sortable: false},
		{text: '', sortable: false, dataIndex: 'utilities', width: 130, renderer: function (value, col, store) {
			return '<a href="/admin/class-types/edit/' + store.get('id') + '">Edit</a> | <a class="removeAction" href="">Delete</a> | <a class="removeAction" href="">Duplicate</a>';
		}}
    ]
}));

//usersStore.load({params: {
//	id: 1
//}});