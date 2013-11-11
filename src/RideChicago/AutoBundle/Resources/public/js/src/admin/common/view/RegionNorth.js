Ext.namespace('Ridechicago.admin.common.view');

Ridechicago.admin.common.view.RegionNorth = Ext.create('Ext.panel.Panel', {
	region: 'north',
	split: false,
	defaultType: 'container',
	collapsible: false,
	margin: '0',
	cls: 'main-header',
	html: 'AutoRideChicago.com Administration<span class="account"><a href="/admin/logout">Logout</a></span>'
});
