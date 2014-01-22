Ext.namespace('Ridechicago.admin.forms');

var classTypeStore = Ext.create('Ext.data.Store', {
	model: Ridechicago.admin.model.ClassTypes,
	autoLoad: true
});

Ridechicago.admin.forms.Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function dayChkBoxConfigGenerator(name) {
	var output = [],
		days = Ridechicago.admin.forms.Days,
		i,
		fieldName = 'class_day_config_n';

	for (i = 0; i < days.length; ++i) {
		var onchange = (function (_i) {
			return function () {
				var timeCmp= Ext.getCmp(fieldName + _i + '_start'),
					timeCmpEnd = Ext.getCmp(fieldName + _i + '_end');
				
				if (this.checked === true) {
					timeCmp.enable();
					timeCmpEnd.enable();
				} else {
					timeCmp.disable();
					timeCmpEnd.disable();
				}
			};
		}(i));
		
		output.push({
			boxLabel: days[i],
			name: name,
			id: 'dayCbk_' + i,
			inputValue: i,
			listeners: {
				change: onchange
			}
		});
		
		output.push({
			fieldLabel: 'Start Time',
			xtype: 'timefield',
			name: fieldName + i + '_start',
			id: fieldName + i + '_start',
			disabled: true,
			labelWidth: 90,
			minValue: Ext.Date.parse('05:00:00 AM', 'h:i:s A'),
			maxValue: Ext.Date.parse('09:00:00 PM', 'h:i:s A'),
			editable: false
		});
		
		output.push({
			fieldLabel: 'End Time',
			xtype: 'timefield',
			name: fieldName + i + '_end',
			id: fieldName + i + '_end',
			disabled: true,
			labelWidth: 90,
			minValue: Ext.Date.parse('05:00:00 AM', 'h:i:s A'),
			maxValue: Ext.Date.parse('09:00:00 PM', 'h:i:s A'),
			editable: false
		});
	}

	return output;
}

Ridechicago.admin.forms.Classroom = [{
	xtype: 'combobox',
	fieldLabel: 'Class Association',
	store: classTypeStore,
	displayField: 'title',
	valueField: 'id',
	editable: false,
	name: 'classtypeId',
	id: 'classtypeId',
	msgTarget: 'under',
	allowBlank: false,
	width: 500
}, {
	xtype: 'displayfield',
	fieldLabel: 'Class Code',
	value: 'Automatically Generated',
	width: 500
}, {
	xtype: 'fieldcontainer',
	fieldLabel: 'Class Days',
	id: 'class_day_fieldcontainer',
	msgTarget: 'under',
	defaultType: 'checkboxfield',
	allowBlank: false,
	items: dayChkBoxConfigGenerator('class_day_keys[]')
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
	allowBlank: false,
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
	allowBlank: false,
	mouseWheelEnabled: false
}, {
	xtype: 'numberfield',
	name: 'enrollmentSeats',
	msgTarget: 'under',
	fieldLabel: 'Enrollment Seats',
	maxValue: 99,
	minValue: 1,
	allowBlank: false,
	width: 300
}, {
	xtype: 'numberfield',
	name: 'enrollmentWaitList',
	msgTarget: 'under',
	fieldLabel: 'Enrollment Wait List',
	maxValue: 99,
	minValue: 0,
	allowBlank: false,
	width: 300
}, {
	xtype: 'numberfield',
	name: 'promotionLimit',
	msgTarget: 'under',
	fieldLabel: 'Promo Limit',
	maxValue: 999,
	minValue: 1,
	allowBlank: false,
	width: 320
}, {
	xtype: 'datefield',
	fieldLabel: 'Registration Opens',
	name: 'classRegistrationStartDate',
	msgTarget: 'under',
	allowBlank: false,
	width: 350
}, {
	xtype: 'datefield',
	fieldLabel: 'Class Start Date',
	name: 'classStartDate',
	msgTarget: 'under',
	allowBlank: false,
	width: 350
}, {
	xtype: 'datefield',
	fieldLabel: 'Class End Date',
	name: 'classEndDate',
	msgTarget: 'under',
	allowBlank: false,
	width: 350
}, {
	xtype: 'fieldcontainer',
	fieldLabel: 'Location',
	defaultType: 'radiofield',
	defaults: {
		flex: 1
	},
	width: 600,
	layout: 'hbox',
	items: [
		{
			boxLabel: 'Toyota',
			name: 'instructorId',
			inputValue: '1',
			id: 'radio1',
		}, {
			boxLabel: 'Sears Centre',
			name: 'instructorId',
			inputValue: '2',
			id: 'radio2'
		}, {
			boxLabel: 'United',
			name: 'instructorId',
			inputValue: '3',
			id: 'radio3'
		}, {
			boxLabel: 'Ravenswood',
			name: 'instructorId',
			inputValue: '4',
			id: 'radio4'
		}
	]
}, 	{
	xtype: 'combobox',
	fieldLabel: 'Online Registration',
	store: Ridechicago.admin.model.stores.EnableStore,
	displayField: 'text',
	valueField: 'value',
	editable: false,
	name: 'onlineRegistrationStatus',
	id: 'onlineRegistrationStatus',
	msgTarget: 'under',
	allowBlank: false,
	width: 300
}, {
	xtype: 'combobox',
	fieldLabel: 'Status',
	store: Ridechicago.admin.model.stores.StatusStore,
	displayField: 'text',
	valueField: 'value',
	editable: false,
	name: 'status',
	id: 'status',
	msgTarget: 'under',
	allowBlank: false,
	width: 300
}, {
	xtype: 'textareafield',
	grow: true,
	name: 'notes',
	fieldLabel: 'Additional Notes',
	width: 500
}, {
	xtype: 'hiddenfield',
	name: 'id'
}];