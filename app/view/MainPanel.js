Ext.define('BondPickUp.view.MainPanel', {
    extend: 'Ext.navigation.View',
    requires:['BondPickUp.view.Main'],
    xtype:'mainpanel',
    config: {    	
    	items:[
    	       {
    	    	xtype:'main'   
    	       }
    	       ]
    	}
    });