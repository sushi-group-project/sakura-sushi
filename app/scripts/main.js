console.log('The Iron Yard Rocks');
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g


var flickr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search'+
		'?method=flickr.people.getPublicPhotos'+
		'&api_key='+ token +
		'&text=sashimi'+
		'&license=1%2C2%2C3%2C4%2C5%2C6'+
		'&user_id=' + user_id +
		'&format=json'+
		'&nojsoncallback=1'
		;

var menu = 'http://restaurantapi.apiary-mock.com/menu';

var news ='http://restaurantapi.apiary-mock.com/news/latest';

var specials = 'http://restaurantapi.apiary-mock.com/menu/special';


// var menuTemplate =$('#tab-2').html(),
//     renders = _.template(menuTemplate);
//
//     $.getJSON(menu).done(function (menu_data){
//
//       _.each(menu_data, function(x){
//
//         var output = renders(x);
//         $('#tab-2').append(output);
//
//   })
//   });

	// var specialsTemplate =$('.header-boxes').html(),
	// 		render = _.template(specialsTemplate);
	//
	// 		$.getJSON(specials).done(function(specials_data){
	//
	// 			_.each(specials_data,function(y){
	//
	// 				var output = render(y);
	// 				$('.header-boxes').append(output);
	// 			})
	// 		});



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
