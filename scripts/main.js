console.log('The Iron Yard Rocks');


var flickr = 'https://api.flickr.com/services/rest/'+
		'?method=flickr.people.getPublicPhotos'+
		'&api_key='+ token +
		'&user_id=' + user_id +
		'&format=json'
		;

var menu = 'http://restaurantapi.apiary-mock.com/menu';

var news ='http://restaurantapi.apiary-mock.com/news/latest';

var specials = 'http://restaurantapi.apiary-mock.com/menu/special';

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
