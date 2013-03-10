Ext.define('BondPickUp.store.Pickup', {
	extend:'Ext.data.Store',
    config:{
    	id:'Pickup',
	    model: 'BondPickUp.model.Pickup',
	    autoLoad: true,
	    proxy: {
	        type: 'ajax',
	        url : 'data.json',
	        reader: {
	            type: 'json'
	          //  rootProperty: 'data'
	        }
	    }
	    }
});