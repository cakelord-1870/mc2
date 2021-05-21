jQuery(document).ready(function($) {

		$(".flexnav").flexNav({});
		
		if ($(window).width() > 1024) {
			$(".sticky-nav").sticky({topSpacing:0});
		}

});