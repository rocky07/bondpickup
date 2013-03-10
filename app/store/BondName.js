Ext.define('BondPickUp.store.BondName', {
	extend:'Ext.data.Store',
    config:{
    	id:'BondName',
	    model: 'BondPickUp.model.BondName',
	    autoLoad: true,
	    proxy: {
	        type: 'ajax',
	        url : 'data1.json',
	        reader: {
	            type: 'json'
	          //  rootProperty: 'data'
	        }
	    }
	    }
});