Ext.namespace('Ridechicago.admin.common.view');

Ext.onReady(function () {
	// initializer
	Ridechicago.admin.common.view.Viewport = Ext.create('Ext.Viewport', {
		layout: 'border',
		items: [
			Ridechicago.admin.common.view.RegionNorth,
			Ridechicago.admin.common.view.RegionWest,
			Ridechicago.admin.common.view.RegionCenter
		]
	});

	// load in navigation
	Ridechicago.admin.common.view.RegionWest.add(Ext.create('Ridechicago.admin.common.Navigation'));
	Ridechicago.admin.common.view.RegionWest.doLayout();
});