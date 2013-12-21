Ridechicago.admin.common.view.RegionCenter.setTitle('Class Management - View Classrooms');


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
		{text: 'Days', dataIndex: 'classDays', width: 160, renderer: function (value) {
			var days = Ext.decode(value),
				data = [];
		
			for (var day in days) {
				data.push(day + '@' + days[day].start + '-' + days[day].end);
			}
			
			return data.join(', ');
		}},
		{text: 'Opens', dataIndex: 'classRegistrationStartDate', width: 73},
		{text: 'Start', dataIndex: 'classStartDate', width: 73},
		{text: 'End', dataIndex: 'classEndDate', width: 73},
		{text: 'Class', dataIndex: 'classtype', width: 150, renderer: function (value) {
			return value.title;
		}},
		{text: 'Price', dataIndex: 'price', width: 60},
		{text: 'Status', dataIndex: 'status', width: 70, renderer: function (value) {
			return Ridechicago.admin.model.stores.StatusStore.findRecord('value', value).get('text');
		}},
		{text: 'Seats', dataIndex: 'enrollmentSeats', width: 40, renderer: function (value, col, store) {
			return '<a href="/admin/registration?getfromclassroom=' + store.get('id') + '">' + store.get('enrollmentSeatsUsed') + ' /' + value + '</a>';
		}},
		{text: 'Waiting', dataIndex: 'enrollmentWaitList', width: 50, renderer: function (value, col, store) {
			return store.get('enrollmentWaitListUsed') + ' /' + value;
		}},
		{text: 'Instructor', dataIndex: 'instructorId', width: 80},
		{text: 'Notes', dataIndex: 'notes', width: 120, sortable: false},
		{text: '', sortable: false, dataIndex: 'utilities', width: 130, renderer: function (value, col, store) {
			return '<a href="/admin/class-types/edit/' + store.get('id') + '">Edit</a> | <a class="removeAction" href="">Delete</a> | <a class="removeAction" href="">Duplicate</a>';
		}}
    ]
}));

//usersStore.load({params: {
//	id: 1
//}});