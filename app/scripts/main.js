console.log('The Iron Yard Rocks');


/*var flickr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search'+
		'&api_key='+ token +
		'&text=sashimi'+
		'&license=1%2C2%2C3%2C4%2C5%2C6'+
		'&user_id=' + user_id +
		'&format=json'+
		'&nojsoncallback=1'
		;*/

// var menu = 'http://restaurantapi.apiary-mock.com/menu';

// var news ='http://restaurantapi.apiary-mock.com/news/latest';

// var specials = 'http://restaurantapi.apiary-mock.com/menu/special';



var newsTemplate = $('#news_box').html();
     var show = _.template(newsTemplate);


      $.getJSON('http://restaurantapi.apiary-mock.com/news/latest').done(function (pulling) {
          $('.header-box-one').append(show(pulling));
      });


var menuTemplate = $('#menu_box').html();
    var render = _.template(menuTemplate);

    $.getJSON('http://restaurantapi.apiary-mock.com/menu').done(function(pull) {
      pull.appetizers.forEach(function(y) {
        $('.app-menu_1').append(render(y));
      });
    });

    var menuTemplate = $('#menu_box').html();
        var render1 =_.template(menuTemplate);

        $.getJSON('http://restaurantapi.apiary-mock.com/menu').done(function(yank){
          yank.entrees.forEach(function(x) {
            $('.app-menu_2').append(render1(x));

          });
        });


    var menuTemplate = $('#menu_box').html();
        var renders =_.template(menuTemplate);

        $.getJSON('http://restaurantapi.apiary-mock.com/menu').done(function(puller){
          puller.sides.forEach(function(x) {
            $('.app-menu_3').append(renders(x));

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
