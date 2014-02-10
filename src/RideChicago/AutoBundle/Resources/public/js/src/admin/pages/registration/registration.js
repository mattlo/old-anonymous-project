Ridechicago.admin.common.view.RegionCenter.setTitle('Student Management - View');

// determine query type
var queryParams = Ext.Object.fromQueryString(window.location.href.substr(window.location.href.indexOf('?') + 1));
if (typeof queryParams.getfromclassroom !== 'undefined') {
	Ridechicago.admin.model.stores.RegistrationStore.proxy.url = '/api/registration/getfromclassroom/' + queryParams.getfromclassroom;
}

Ridechicago.admin.model.stores.RegistrationStore.load();


Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.grid.Panel', {
    store: Ridechicago.admin.model.stores.RegistrationStore,
	border: false,
    columns: [
		new Ext.grid.RowNumberer(),
		{text: 'Start Date', dataIndex: 'startDateDisplay', width: 150},
		{text: 'Classroom', dataIndex: 'classroom', width: 150, renderer: function (value) {
			return value.longName;
		}},
		{text: 'Name', dataIndex: 'customer', width: 120, renderer: function (customer) {
			return customer.profile.firstName + ' ' + customer.profile.lastName;
		}},
		{text: 'Status', dataIndex: 'status', width: 100, renderer: function (value) {
			return Ridechicago.admin.model.stores.RegistrationStatusStore.findRecord('value', value).get('text');
		}},
		{text: 'Promo', dataIndex: 'promotionCode', width: 80},
		{text: 'Classwork', dataIndex: 'classStatus', width: 80, renderer: function (value) {
			return Ridechicago.admin.model.stores.PassIncompleteStore.findRecord('value', value).get('text');
		}},
		{text: 'Riding (Lab)', dataIndex: 'labStatus', width: 80, renderer: function (value) {
			return Ridechicago.admin.model.stores.PassIncompleteStore.findRecord('value', value).get('text');
		}},
		{text: 'Exam', width: 50, dataIndex: 'exam'},
		{text: 'Phone', dataIndex: 'phone', renderer: function (v, c, store) {
			return store.get('customer').profile.phone;
		}},
		{text: 'Notes', dataIndex: 'notes', width: 150},
		{text: '', sortable: false, dataIndex: 'utilities', width: 80, renderer: function (value, col, store) {
			return '<a href="/admin/registration/update/' + store.get('id') + '">Edit</a> | ' +
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
					url: '/api/registration/delete',
					method: 'POST',
					params: {
						id: id
					},
					success: function(){
						Ext.MessageBox.show({
							title: 'Registration',
							msg: username + ' was successfully removed from the system.',
							icon: Ext.MessageBox.INFO,
							buttons: Ext.MessageBox.OK,
							fn: function() {
								window.location = '/admin/registration';
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