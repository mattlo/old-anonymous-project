Ext.namespace('Ridechicago.admin.common');

Ext.define('Ridechicago.admin.common.Navigation', {
	extend: Ext.tree.Panel,
	rootVisible: false,
	border: false,
	animate: false,
	root: {
		expanded: true,
		children: []
	},
	initComponent: function() {
		var _this = this;

		this.callParent(arguments);

		Ext.Ajax.request({
			url: '/api/navigation',
			success: function(response) {
				var root = _this.getRootNode();
				
				root.appendChild(Ext.decode(response.responseText).data);
			},
			failure: function() {
				console.log('Navigation request API failed');
			}
		});
	}
});