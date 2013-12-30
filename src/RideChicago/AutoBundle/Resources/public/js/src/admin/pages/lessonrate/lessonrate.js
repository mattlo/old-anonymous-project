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
		{text: 'Pick Up Fee', dataIndex: 'pickupfee', renderer: function (value) {
			return '$' + value;
		}},
		{text: '', dataIndex: 'utilities', flex: 1, renderer: function (value, col, store) {
			return '<a class="users-edit" href="/admin/lessonrate/update/' + store.get('id') + '">Edit</a> | ' + 
				'<a class="lesson-rate-delete" data-display="' + store.get('duration') + '@' + store.get('price') + '" data-id="' + store.get('id') + '" href="#/">Delete</a>';
		}}
    ]
}));


Ext.onReady(function () {
	Ext.getBody().on('click', function(event, target){
		event.preventDefault();
		
		// element clicked
		var a = Ext.get(target),
			display = a.getAttribute('data-display'),
			id = a.getAttribute('data-id');
		
		Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete rate: <strong>' + display + '</strong>?<br /><br /><strong>This will delete all associated lessons</strong>', function (btn) {
			if (btn === 'yes') {
				Ext.Ajax.request({
					url: '/api/lessonrate/delete',
					method: 'POST',
					params: {
						id: id
					},
					success: function(){
						Ext.MessageBox.show({
							title: 'Lesson Rates',
							msg: display + ' was successfully removed from the system.',
							icon: Ext.MessageBox.INFO,
							buttons: Ext.MessageBox.OK,
							fn: function() {
								window.location = '/admin/lessonrate';
							}
						});
					}
				});
			}
		});
	}, null, {
		delegate: '.lesson-rate-delete'
	});
});