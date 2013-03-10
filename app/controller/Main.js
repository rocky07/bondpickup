Ext.define('BondPickUp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            mainPanel:'mainpanel',
            moreButton:'button[action=more]',
        },
        control: {
        	'pickup':{
            	disclose:'showDescription'
            },
            'moreButton':{
            	tap:'showMore'
            }
            
        }    
    },
    
    showDescription:function(list,record){
    	console.log("show desc");
    	this.getMainPanel().push(
    			{
    				xtype:'pickupdetails',
    				title: record.get('title'),
    		        data: record.getData()		
    					}
    			);
    },
    showMore:function(btn,event){
    	var obj=this;
    	var data=btn.up('panel').getData();
    	console.log(data);
    	Ext.Ajax.request({
    	    url: data.movie,
    	    success: function(response){
    	        var text = response.responseText;
    	        obj.getMainPanel().push({
    	    		xtype:'panel',
    	    		title:data.title,
    	    		scrollable: 'vertical',
    	    		html:text
    	    	});
    	        
    	    }
    	});
    	
    }

});