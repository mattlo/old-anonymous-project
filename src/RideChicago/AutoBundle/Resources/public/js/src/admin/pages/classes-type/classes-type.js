Ridechicago.admin.common.view.RegionCenter.setTitle('Class Management - View Types');

var classTypeStore = Ext.create('Ext.data.Store', {
    model: Ridechicago.admin.model.classtypes.ClassTypesModel,
	autoLoad: true,
	autoSync: true
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
		},
		listeners: {
			drop: function(node, data, dropRec, dropPosition) {
				var id = data.records[0].get('id'),
					newIndex = dropRec.store.findExact('id', id),
					box = Ext.MessageBox.wait('Resorting...'),
					_this = this;
				
				// Ext model isn't sending the correct data on resort, so we're gonna do this call manually
				Ext.Ajax.request({
					url: Ridechicago.admin.model.classtypes.CLASSTYPES_PROXY_URL + '/reorder',
					method: 'POST',
					params: {
						id: id,
						newIndex: newIndex
					},
					success: function(response){
						// process server response here
						_this.store.reload({callback: function () {
							box.hide();
						}});
					},
					failure: function () {
						_this.store.reload({callback: function () {
							box.hide();
						}});
					}
				});
				
				this.refresh();
			}
		}
	},
    columns: [
		new Ext.grid.RowNumberer(),
		{text: 'Title', dataIndex: 'title', flex: 1, sortable: false},
		{text: 'Enrollment', dataIndex: 'enrollment', width: 150, renderer: function (value, col, store) {
			return Ridechicago.admin.model.stores.EnrollmentStore.findRecord('value', value).get('text');
		}, sortable: false},
		{text: 'Status', dataIndex: 'status', renderer: function (value, col, store) {
			return Ridechicago.admin.model.stores.StatusStore.findRecord('value', value).get('text');
		}, sortable: false},
		{text: 'Modified', dataIndex: 'lastModified', width: 150, sortable: false},
		{text: '', sortable: false, dataIndex: 'utilities', width: 100, renderer: function (value, col, store) {
			return '<a href="/admin/class-types/edit/' + store.get('id') + '">Edit</a> | <a class="removeAction" href="">Delete</a>';
		}}
    ]
}));