$(document).ready(function(){
	var drawer = $('.header-drawer')
	, offset = drawer.offset().top - (parseInt(drawer.css('top'), 10) || 0);
	
	$(window).scroll(function() {
		drawer.toggleClass('sticky', ($(this).scrollTop() >= offset));
	});
	
	$('.gadget-menu, .gadget-title').click(function(){
		var $this = $(this)
		, $parent = $this.parents('.gadget-item')
		
		if($parent.hasClass('gadget-selected'))
			return;
		console.log($parent)		
		$parent.addClass('gadget-selected');
	})
		
});