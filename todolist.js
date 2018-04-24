var main = function(){
	"user strict";

	$('.tabs a span').toArray().forEach(function(element) {
		$(element).on('click', function(){
			var $element = $(element);

			$('.tabs a span').removeClass('active');
			$element.addClass('active');
			$('main .content').empty();

			if($element.parent().is(':nth-child(1)')){

			} else if($element.parent().is(':nth-child(2)')) {

			} else if($element.parent().is(':neth-child(3)')){

			}

			return false;
		});
	});
}