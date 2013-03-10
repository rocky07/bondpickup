Ext.define("BondPickUp.view.PickupDetails", {
    extend: 'Ext.Panel',
    xtype:'pickupdetails',  
    config:{
    	items:[{
    		xtype:'toolbar',
    		items:[{
    			text:'more from the movie',
    			action:'more'
    		}]
    		
    	}],
    	//store:'Pickup'
    	scrollable: 'vertical',
        	 tpl: [
                   '{title}<br/>{bond}<br/>{movie}<br><img width="200" src="images/{img}"/></br>{description}'
               ]
    }
});	
    		
    	