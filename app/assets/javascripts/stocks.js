var init_stock_lookup;
init_stock_lookup = function(){
    //show spinner while looking up stock
    $('#stock-lookup-form').on('ajax:before', function(event,data,status){
        show_spinner();
    });
    //hide spinner after looking up stock
    $('#stock-lookup-form').on('ajax:after', function(event,data,status){
        hide_spinner();
    });

    //found stock and show the result
    $('#stock-lookup-form').on('ajax:success', function(event, data, status, xhr){
        $('#stock-lookup').replaceWith(event.detail[2].responseText);
        init_stock_lookup();
    });
    //handle error not found stock
    $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
        hide_spinner();
        $('#stock-lookup-results').replaceWith(' ');
        $('#stock-lookup-errors').replaceWith('Stock was not found');
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