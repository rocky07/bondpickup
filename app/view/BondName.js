Ext.define("BondPickUp.view.BondName", {
    extend: 'Ext.field.Select',
    xtype:'BondName',
    config:{
    	xtype: 'selectfield',    			
    	/*store:'BondName',    			
    	displayField:'bonda',
    	valueField:'ida',*/
    	autoComplete:true,
    	options:[
    	        {text:'All',value:'all'},
    	        {text:'Daniel Craig',value:'Daniel Craig'},
    	        {text:'Sean Connery',value:'Sean Connery'}
    	        ],
    	listeners:{
    		'change':function(obj,newVal,oldVal){
    			
    			sto=Ext.getStore('Pickup');
    			sto.clearFilter();
    			if(newVal.getData().value=='all'){    			
        			return;
    			}
    			sto.filter('bond',newVal.getData().value);	    			
    		},
    		'click':function(){
    			console.log('asas');
    		}
    	}
    		
    }
});	
    		
    	