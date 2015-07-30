$(document).ready(function() {
	$(".carrusel").owlCarousel({
	  navigation : false, 
	  items : 4,
	  itemsDesktop : [1199,3],
	  itemsDesktopSmall : [979,3],
	  lazyLoad: true,
	  autoPlay: 3000
});
	$(".carrusel-singleItem").owlCarousel({
      navigation: false,
	  singleItem: true,
	  slideSpeed : 300,
	  paginationSpeed : 400,
	  lazyLoad : true,
      autoPlay: 3000
  });
  $(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
    $('img[usemap]').width("100%");
    $('img[usemap]').height("auto");
  });
});
