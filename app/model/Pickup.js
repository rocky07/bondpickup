Ext.define('BondPickUp.model.Pickup', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'title', type: 'auto'},
            {name: 'description', type: 'auto'},
            {name: 'bond', type: 'auto'},
            {name: 'movie', type: 'auto'},
            {name: 'img', type: 'auto'}
        ]
    }
});
