Ext.namespace('Ridechicago.admin.view');



Ridechicago.admin.view.Login = Ext.create('Ext.form.Panel', {
	title: 'Login',
	frame: true,
	style: 'margin: 100px auto 0 auto;',
	width: 400,
	bodyPadding: 5,
	waitMsgTarget: true,
	
	items: [{
		xtype: 'textfield',
		fieldLabel: 'Email Address',
		emptyText: 'Email Address',
		name: '_username',
		msgTarget: 'under',
		vtype: 'email',
		validateOnChange: false,
		allowBlank: false,
		width: 300
	}, {
		xtype: 'textfield',
		fieldLabel: 'Password',
		emptyText: 'Password',
		name: '_password',
		msgTarget: 'under',
		inputType: 'password',
		allowBlank: false,
		width: 300
	}],

	listeners: {
		afterRender: function(formRef){
			this.keyNav = Ext.create('Ext.util.KeyNav', this.el, {                    
				enter: function () {
					Ext.getCmp('loginSubmit').handler();
				},
				scope: this
			});
		}
	},

	
	buttons: [{
		id: 'loginSubmit',
		text: 'Login',
		formBind: true,
		handler: function(){
			this.up('form').getForm().submit({
				url: '/admin/login_check',
				submitEmptyText: false,
				waitMsg: 'Authenticating...',
				success: function (ins, response) {
					try {
						var data = Ext.JSON.decode(response.responseText);
						window.location = data.location;
					} catch (e) {
						// assume
						window.location = '/admin';
					}
				}
			});
		}
	}]
});