var init_friend_lookup;
init_friend_lookup = function(){
    //show spinner while looking up friend
    $('#friend-lookup-form').on('ajax:before', function(event,data,status){
        show_spinner();
    });
    //hide spinner after looking up friend
    $('#friend-lookup-form').on('ajax:after', function(event,data,status){
        hide_spinner();
    });

    //found friend and show the result
    $('#friend-lookup-form').on('ajax:success', function(event, data, status, xhr){
        $('#friend-lookup').replaceWith(event.detail[2].responseText);
        init_friend_lookup();
    });
    //handle error not found friend
    $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error){
        hide_spinner();
        $('#friend-lookup-results').replaceWith(' ');
        $('#friend-lookup-errors').replaceWith('person was not found');
    });
};
$(document).ready(function(){
    init_friend_lookup();
});