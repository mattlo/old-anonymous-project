Ridechicago.admin.common.view.RegionCenter.setTitle('Class Management - Add Type');

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	bodyPadding: 5,
	waitMsgTarget: true,
	autoScroll: true,
	fieldDefaults: {labelAlign:'left', labelWidth: 150},
	
	items: [{
		xtype: 'textfield',
		fieldLabel: 'Title',
		name: 'title',
		msgTarget: 'under',
		validateOnChange: false,
		allowBlank: false,
		width: 400,
		id: 'titleInput'
	}, {
		xtype: 'combobox',
		fieldLabel: 'Enrollment',
		store: Ridechicago.admin.model.stores.EnrollmentStore,
		queryMode: 'local',
		displayField: 'text',
		valueField: 'value',
		editable: false,
		name: 'enrollment',
		allowBlank: false,
		width: 400
	}, {
		xtype: 'combobox',
		fieldLabel: 'Select Status',
		store: Ridechicago.admin.model.stores.StatusStore,
		queryMode: 'local',
		displayField: 'text',
		valueField: 'value',
		editable: false,
		allowBlank: false,
		name: 'status'
	},{
		xtype: 'htmleditor',
		fontFamilies: [],
		enableFontSize: false,
		name: 'description',
		fieldLabel: 'Description',
		width: 700,
		height: 300,
		allowBlank: false
	}],
	
	buttons: [{
		cls: 'btnAlignment',
		text: 'Create Class Type',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/api/class-types/create',
				submitEmptyText: false,
				waitMsg: 'Loading...',
				success: function (ins, response) {
					Ext.MessageBox.show({
						title: 'Class Type Management',
						msg: Ext.getCmp('titleInput').getValue() + ' was successfully created!',
						icon: Ext.MessageBox.INFO,
						buttons: Ext.MessageBox.OK,
						fn: function() {
							window.location = '/admin/class-types';
						}
					});
				}
			});
		}
	}]
}));