
var tags = "吉娃娃";
var dataUrl = "https://api.flickr.com/services/feeds/photos_public.gne?tags=" + tags+"&tagmode=any&format=json&per_page=400&jsoncallback=?"; 
var data = $.getJSON(dataUrl); 
data.done( function(msg) {
    console.log(msg.items);
    $.each(msg.items,function(key,val){
        $('#contain').append($("<img/>").attr("src",val.media.m)); 
    });
}); 
data.fail( function(msg) { 
    $('#contain').html('Failed');
});