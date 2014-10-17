'use strict';


var flickrUrl = 'https://api.flickr.com/services/rest/?'+
    'method=flickr.photos.search'+
		'&api_key='+ token +
		'&text=sashimi'+
		'&license=1%2C2%2C3%2C4%2C5%2C6'+
		'&format=json'+
		'&nojsoncallback=1'
		;


var menuUrl = 'http://private-anon-6e99440bf-restaurantapi.apiary-mock.com/menu';

var newsUrl ='http://private-anon-6e99440bf-restaurantapi.apiary-mock.com/news/latest';

var specialsUrl = 'http://private-anon-6e99440bf-restaurantapi.apiary-mock.com/menu/special';


var $flickrUl = $('.food_pics')
var flickrTemplate = $('#foodpic').html();
var appear =_.template(flickrTemplate);
var bar = _.template(
  'https://farm<%=farm%>.staticflickr.com/<%=server%>/<%=id%>_<%=secret%>_m.jpg'
);
$.getJSON(flickrUrl).done(function(flickr_data) {
var foo = flickr_data.photos.photo;
var bee = _.first(foo,4);
bee.forEach(function(photo_info){
  var ade = bar(photo_info);
  var cee = appear({"img_url":ade});
  $flickrUl.append(cee);
});
})


var newsTemplate = $('#news_box').html();
var show = _.template(newsTemplate);
$.getJSON(newsUrl).done(function (pulling) {
    $('.header-box-one').append(show(pulling));
});


var menuTemplate = $('#menu_box').html();
var renderer = _.template(menuTemplate);

$.getJSON(menuUrl).done(function(pull) {
  pull.appetizers.forEach(function(y) {
    $('.app-menu_1').append(renderer(y));
  });
});

$.getJSON(menuUrl).done(function(yank){
  yank.entrees.forEach(function(z) {
    $('.app-menu_2').append(renderer(z));
  });
});

$.getJSON(menuUrl).done(function(puller){
  puller.sides.forEach(function(x) {
    $('.app-menu_3').append(renderer(x));
  });
});





/*
https://farm4.staticflickr.com/3930/15529390101_6e0e99f746_m.jpg

$getJSON=
only the farm and the _m matter in getting the photos. as the _m is the size,
and the farm number is where it lives on the server. Make sure ispublic = 1,
that means it is public.
https://api.flickr.com/services/rest/?method=flickr.photos.search
&api_key=
&text=sashimi
&license=1%2C2%2C3%2C4%2C5%2C6
&format=json
&nojsoncallback=1
*/
