Ext.namespace('Ridechicago.admin.common.view');

Ext.onReady(function () {
	// initializer
	Ridechicago.admin.common.view.Viewport = Ext.create('Ext.Viewport', {
		layout: 'border',
		items: function  () { // create item frames
			var o = [],
				panes = ['North', 'West', 'Center', 'East', 'South'];
			
			Ext.each(panes, function (pane) {
				var prop = 'Region' + pane;
				
				if (typeof Ridechicago.admin.common.view[prop] !== 'undefined') {
					o.push(Ridechicago.admin.common.view[prop])
				}
			});
			
			return o;
		}()
	});
});