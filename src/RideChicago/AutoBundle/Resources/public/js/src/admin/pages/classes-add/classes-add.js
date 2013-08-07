Ridechicago.admin.common.view.RegionCenter.setTitle('Classes - Add Class');

var classTypeStore = Ext.create('Ext.data.Store', {
	fields: ['roleDisplay', 'roleValue'],
	data: [
		{
			roleDisplay: 'Basic Licensing Class',
			roleValue: '0'
		},
		{
			roleDisplay: 'Motorcycle Instructor Training',
			roleValue: '1'
		},
		{
			roleDisplay: 'Refresher Class - $95',
			roleValue: '2'
		},
		{
			roleDisplay: 'Winter Storage',
			roleValue: '3'
		}
	]
});

function dayChkBoxConfigGenerator(name) {
	var output = [],
			days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			i;

	for (i = 0; i < days.length; ++i) {
		output.push({
			boxLabel: days[i],
			name: name,
			inputValue: i
		});
	}

	return output;
}

Ridechicago.admin.common.view.RegionCenter.add(Ext.create('Ext.form.Panel', {
	frame: true,
	autoScroll: true,
	bodyPadding: 5,
	bodyStyle: 'overflow-x: scroll',
	waitMsgTarget: true,
	fieldDefaults: {labelAlign: 'left', labelWidth: 150},
	items: [
		{
			xtype: 'combobox',
			fieldLabel: 'Class Association',
			store: classTypeStore,
			queryMode: 'local',
			displayField: 'roleDisplay',
			valueField: 'roleValue',
			editable: false,
			name: 'role',
			msgTarget: 'under',
			width: 500
		}, {
			xtype: 'displayfield',
			fieldLabel: 'Class Code',
			value: 'Automatically Generated',
			width: 500,
		}, {
			xtype: 'fieldcontainer',
			fieldLabel: 'Class Days',
			msgTarget: 'under',
			defaultType: 'checkboxfield',
			items: dayChkBoxConfigGenerator('classDays')
		}, {
			xtype: 'numberfield',
			name: 'price',
			msgTarget: 'under',
			fieldLabel: 'Price',
			maxValue: 9999.99,
			minValue: 0.01,
			width: 300,
			hideTrigger: true,
			keyNavEnabled: false,
			mouseWheelEnabled: false
		}, {
			xtype: 'numberfield',
			name: 'deposit',
			msgTarget: 'under',
			fieldLabel: 'Deposit',
			maxValue: 9999.99,
			minValue: 0.01,
			width: 300,
			hideTrigger: true,
			keyNavEnabled: false,
			mouseWheelEnabled: false
		}, {
			xtype: 'numberfield',
			name: 'enrollmentSeats',
			msgTarget: 'under',
			fieldLabel: 'Enrollment Seats',
			maxValue: 99,
			minValue: 1,
			width: 300
		}, {
			xtype: 'numberfield',
			name: 'enrollmentWaitList',
			msgTarget: 'under',
			fieldLabel: 'Enrollment Wait List',
			maxValue: 99,
			minValue: 0,
			width: 300
		}, {
			xtype: 'numberfield',
			name: 'promoLimit',
			msgTarget: 'under',
			fieldLabel: 'Promo Limit',
			maxValue: 999,
			minValue: 1,
			width: 320
		}, {
			xtype: 'datefield',
			fieldLabel: 'Registration Opens',
			name: 'registrationOpenDate',
			msgTarget: 'under',
			minValue: new Date(), // limited to the current date or prior
			width: 350
		}, {
			xtype: 'displayfield',
			fieldLabel: 'Class Start Date',
			value: 'Automatically Generated',
			width: 500,
		}, {
			xtype: 'displayfield',
			fieldLabel: 'Class End Date',
			value: 'Automatically Generated',
			width: 500,
		}, {
			xtype: 'fieldcontainer',
			fieldLabel: 'Lead Instructor',
			defaultType: 'radiofield',
			defaults: {
				flex: 1
			},
			width: 500,
			layout: 'hbox',
			items: [
				{
					boxLabel: 'Toyota',
					name: 'size',
					inputValue: 'm',
					id: 'radio1'
				}, {
					boxLabel: 'Sears Centre',
					name: 'size',
					inputValue: 'l',
					id: 'radio2'
				}, {
					boxLabel: 'United',
					name: 'size',
					inputValue: 'xl',
					id: 'radio3'
				}
			]
		}, {
			xtype: 'fieldcontainer',
			fieldLabel: 'Online Registration',
			defaultType: 'radiofield',
			defaults: {
				flex: 1
			},
			width: 300,
			layout: 'hbox',
			items: [
				{
					boxLabel: 'Enabled',
					name: 'size2',
					inputValue: 'm',
					id: 'radio12'
				}, {
					boxLabel: 'Disabled',
					name: 'size2',
					inputValue: 'l',
					id: 'radio22'
				}
			]
		}, {
			xtype: 'fieldcontainer',
			fieldLabel: 'Status',
			defaultType: 'radiofield',
			defaults: {
				flex: 1
			},
			width: 300,
			layout: 'hbox',
			items: [
				{
					boxLabel: 'Enabled',
					name: 'size23',
					inputValue: 'm',
					id: 'radio1233'
				}, {
					boxLabel: 'Disabled',
					name: 'size23',
					inputValue: 'l',
					id: 'radio223'
				}
			]
		},
		{
			xtype: 'textareafield',
			grow: true,
			name: 'message',
			fieldLabel: 'Additional Notes',
			width: 500
		}
	],
	buttons: [{
			id: 'usersAddSubmit',
			text: 'Add New Class',
			formBind: true,
			handler: function() {

			}
		}]
}));