(function($) {

  var fb = 'http://graph.facebook.com/';

  var productList = new Vue({
    el: '#productList',
    data: {
      photos: '',
      message: 'hello'
    }
  });

  function getPhotos(albumId) {
    var graphURL = fb + albumId + '/photos?callback=?';
    $.getJSON(graphURL, function(response) {
      productList.$data.photos = response.data;
    });
  };

  getPhotos($('#productList').data('album'));

})(jQuery);