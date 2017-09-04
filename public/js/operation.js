// operation.js

/** html element */
var _btn_add = $('.btn-add');
var _btn_del  = $('.btn-del');

/** html class */
var to_be_del_animation = 'to-be-del';
var cYes = 'op-yes';
var cNo  = 'op-no';
var cAdd = 'btn-add';
var cDel = 'btn-del';

/** html html */
var yes = '√';
var no  = 'x';
var add = '+';
var del = '-';

_btn_add.on('click', function() {
	var me = $(this);
	var type = me.attr('data-type');
	if (type) {
		var newName = prompt('New ' + type);
		if (newName) {
			$.post('/' + type + '/add/' + newName, function(data) {
				// add element
				var id = data.id;
				var PREFIX = '<div class="' + list + '" data-id="' + id + '">';
				var FIX = '</div>';
				$('.list-title').after(PREFIX + newName + FIX);
			});
		} else {
			alert('name can no be null.');
		}
	}
});

_btn_del.on('click', function() {
	var restaurant = $('.restaurant');

	if (restaurant.hasClass(rest_animation)) {
		restaurant.removeClass(rest_animation);
		restaurant.off('click', restaurantAnimationClick);
		// restaurantClick is defined in index.js
		restaurant.on('click', restaurantClick);
	} else {
		restaurant.addClass(rest_animation);
		restaurant.off();
		restaurant.on('click', restaurantAnimationClick);
	}
});