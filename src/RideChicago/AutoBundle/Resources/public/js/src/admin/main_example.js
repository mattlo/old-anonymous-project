
    Ext.onReady(function(){

       // NOTE: This is an example showing simple state management. During development,
       // it is generally best to disable state management as dynamically-generated ids
       // can change across page loads, leading to unpredictable results.  The developer
       // should ensure that stable state ids are set for stateful components in real apps.

       var viewport = Ext.create('Ext.Viewport', {
            layout: 'border',
            items:[{
                region: 'west',
                title: 'West',
                split: true,
                width: 200,
                minWidth: 175,
                maxWidth: 400,
                collapsible: false,
                margin: '5 0 5 5',
                layout: {
                    type: 'accordion',
                    animate: false
                },
                items: [{
                    html: 'fffff',
                    title:'Navigation',
                    autoScroll:true,
                    border:false,
                    iconCls:'nav'
                },{
                    title:'Settings',
                    html: 'Ext.example.shortBogusMarkup',
                    border:false,
                    autoScroll:true,
                    iconCls:'settings'
                }]
            },{
                region: 'center',
                margin: '5 5 5 0',
                layout: 'column',
                autoScroll: true,
                defaultType: 'container',
                items: [{
                    columnWidth: 1/3,
                    padding: '5 0 5 5',
                    items:[{
                        title: 'A Panel',
                        html: 'testing1'
                    }]
                },{
                    columnWidth: 1/3,
                    padding: '5 0 5 5',
                    items:[{
                        title: 'A Panel',
                        html: 'testing1'
                    }]
                },{
                    columnWidth: 1/3,
                    padding: 5,
                    items:[{
                        title: 'A Panel',
                        html: 'testing1'
                    },{
                        margin: '5 0 0 0',
                        title: 'Another Panel',
                        html: 'testing1'
                    }]
                }]
            }]
        });
    });