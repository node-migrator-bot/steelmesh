(function() {
    
    function init() {
        $.ajax({
            url: '/_dash/status',
            dataType: 'json',
            success: function(data) {
                var systems = $('.system');
                
                systems.parent().show();
                weld(systems[0], data.connectors, {
                    map: function(parent, el, k, v) {
                        if (k === 'status') {
                            $(el).addClass(v);
                        }
                    }
                });
            }
        });
        
        $.ajax({
            url: '/_dash/datasets',
            dataType: 'json',
            success: function(data) {
                var datasets = $('.dataset');
                datasets.parent().show();
                
                weld(datasets[0], data.datasets);
            }
        });
    } // init
    
    $(document).ready(init);
})();