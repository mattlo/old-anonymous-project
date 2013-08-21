Ridechicago.admin.common.view.RegionCenter.setTitle('Classes - Add Class');

var classTypeStore = Ext.create('Ext.data.Store', {
	model: Ridechicago.admin.model.ClassTypes,
	autoLoad: true
});

function dayChkBoxConfigGenerator(name) {
	var output = [],
			days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			i;

	for (i = 0; i < days.length; ++i) {
		var onchange = (function (_i) {
			return function () {
				var timeCmp= Ext.getCmp('dayConfig' + _i);
				
				if (this.checked === true) {
					timeCmp.enable();
				} else {
					timeCmp.disable();
				}
			};
		}(i));
		
		output.push({
			boxLabel: days[i],
			name: name,
			inputValue: i,
			listeners: {
				change: onchange
			}
		});
		
		output.push({
			fieldLabel: 'Time',
			xtype: 'timefield',
			name: 'dayConfig' + i,
			id: 'dayConfig' + i,
			disabled: true,
			labelWidth: 45,
			minValue: Ext.Date.parse('05:00:00 AM', 'h:i:s A'),
			maxValue: Ext.Date.parse('08:00:00 PM', 'h:i:s A'),
			editable: false
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
			displayField: 'title',
			valueField: 'id',
			editable: false,
			name: 'classType',
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
			name: 'enrollment_seats',
			msgTarget: 'under',
			fieldLabel: 'Enrollment Seats',
			maxValue: 99,
			minValue: 1,
			width: 300
		}, {
			xtype: 'numberfield',
			name: 'enrollment_wait_list',
			msgTarget: 'under',
			fieldLabel: 'Enrollment Wait List',
			maxValue: 99,
			minValue: 0,
			width: 300
		}, {
			xtype: 'numberfield',
			name: 'promotion_limit',
			msgTarget: 'under',
			fieldLabel: 'Promo Limit',
			maxValue: 999,
			minValue: 1,
			width: 320
		}, {
			xtype: 'datefield',
			fieldLabel: 'Registration Opens',
			name: 'class_registration_start_date',
			msgTarget: 'under',
			minValue: new Date(), // limited to the current date or prior
			width: 350
		}, {
			xtype: 'datefield',
			fieldLabel: 'Class Start Date',
			name: 'class_start_date',
			msgTarget: 'under',
			minValue: new Date(), // limited to the current date or prior
			width: 350
		}, {
			xtype: 'datefield',
			fieldLabel: 'Registration Opens',
			name: 'class_end_date',
			msgTarget: 'under',
			minValue: new Date(), // limited to the current date or prior
			width: 350
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
					name: 'online_registration_status',
					inputValue: '1',
					id: 'online_registration_status_enabled'
				}, {
					boxLabel: 'Disabled',
					name: 'online_registration_status',
					inputValue: '0',
					id: 'online_registration_status_disabled'
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
					name: 'status',
					inputValue: '1',
					id: 'status_enabled'
				}, {
					boxLabel: 'Disabled',
					name: 'status',
					inputValue: '0',
					id: 'status_disabled'
				}
			]
		},
		{
			xtype: 'textareafield',
			grow: true,
			name: 'notes',
			fieldLabel: 'Additional Notes',
			width: 500
		}
	],
	buttons: [{
			cls: 'btnAlignment',
			text: 'Add New Class',
			formBind: true,
			handler: function() {

			}
		}]
}));