// add date converter  data type
Ext.apply(Ext.data.Types, {
	DATE2: {
		convert: function (value) {
			var date = new Date(value);
			return Ext.Date.format(date, 'm-d-Y h:i A');
		},
		sortType: Ext.data.SortTypes.asDate,
		type: 'date2'
	},
	DATEONLY: {
		convert: function (value) {
			var date = new Date(value);
			return Ext.Date.format(date, 'm-d-Y');
		},
		sortType: Ext.data.SortTypes.asDate,
		type: 'dateonly'
	},
	TIMEONLY: {
		convert: function (value) {
			var date = new Date('1/1/1 ' + value);
			return Ext.Date.format(date, 'h:i A');
		},
		sortType: Ext.data.SortTypes.asDate,
		type: 'timeonly'
	}
});