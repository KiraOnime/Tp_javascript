//initiate the plugin and pass the id of the div containing gallery images
$("#img_01").elevateZoom({gallery:'gal1', cursor: 'pointer', galleryActiveClass: 'active'}); 

//pass the images to Fancybox
$("#img_01").bind("click", function(e) {  
  var ez =   $('#img_01').data('elevateZoom');	
	$.fancybox(ez.getGalleryList());
  return false;
});