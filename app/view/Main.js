Ext.define("BondPickUp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar','BondPickUp.view.Pickup','BondPickUp.view.PickupDetails'],
    xtype:'main',
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                /*title: 'Home',
                iconCls: 'home',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },
                
                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")*/
            	xtype:'pickup'
            }
        ]
    }
});