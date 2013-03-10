Ext.define("BondPickUp.view.Pickup", {
    extend: 'Ext.List',
    xtype:'pickup',
    config:{
    	items:[{
    		xtype:'titlebar',
    		items:[{
    			xtype:'BondName'
    		}]
    		
    	}],
    	store:'Pickup',
    	title:'Pick up',
        iconCls:'home',
        onItemDisclosure:true,
        itemTpl:'{title}',
    		
    }
});	