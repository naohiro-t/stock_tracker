var init_stock_lookup;
init_stock_lookup = function(){
    $('#stock-lookup-form').on('ajax:success', function(event, data, status, xhr){
        $('#stock-lookup').replaceWith(event.detail[2].responseText);
        init_stock_lookup();
    });
    //handle error
    $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
        $('#stock-lookup-results').replaceWith('');
        $('stock-lookup-errors').replaceWith('Stock was not found');
    });
};
$(document).ready(function(){
    init_stock_lookup();
});

// These are previous code which doesn't work as I expect.
// var init_stock_lookup;
//
// init_stock_lookup = function(){
//     $('#stock-lookup-form').on('ajax:success', function(event, data, status){
//         $('#stock-lookup').replaceWith(data);
//         init_stock_lookup();
//     });
//     //handle error
//     $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
//         $('#stock-lookup-results').replaceWith('');
//         $('stock-lookup-errors').replaceWith('Stock was not found');
//     });
// }
//
//
// $(document).ready(function(){
//     init_stock_lookup();
// })