var main = function(todosObjects){
	"user strict";

	var todoTags = [];
	var todoByTags = [];

	todosObjects.map(function(todoObject){
		todoObject.tags.forEach(function(tag){
			if(todoTags.indexOf(tag) === -1){
				todoTags.push(tag);
			}
		});
	});

	todoTags.map(function(tag){
		var descriptions = [];
		todosObjects.forEach(function(todoObject){
			if(todoObject.tags.indexOf(tag) !== -1){
				descriptions.push(todoObject.description);
			}
		});
		todoByTags.push({ "tag":tag, "descriptions":descriptions });
	});

	$('.tabs a span').toArray().forEach(function(element) {
		$(element).on('click', function(){
			var $element = $(element);

			$('.tabs a span').removeClass('active');
			$element.addClass('active');
			$('main .content').empty();

			if($element.parent().is(':nth-child(1)')){

			} else if($element.parent().is(':nth-child(2)')) {

			} else if($element.parent().is(':nth-child(3)')){

			} else if($element.parent().is(':nth-child(4)')){

				todoByTags.forEach(function(todoByTag){
					var $tagLabel = $('<label>').text(todoByTag.tag);
					var $decriptions = $('<ul>');
					todoByTag.descriptions.forEach(function(description){
						$decriptions.append($('<li>').text(description));
					});
					$('.content').append($tagLabel);
					$('.content').append($decriptions);
				});
			}

			return false;
		});
	});
}

$(document).ready(function(){

	$.getJSON('todos.json', function(todosObjects){
		main(todosObjects);
	});
});