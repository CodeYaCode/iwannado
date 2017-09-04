// index.js

var btnAddClick = function btnAddClick() {
	var me = $(this);
	$('.list').removeClass('list-active');
	var id = me.attr('data-id');
	me.addClass('list-active');
	$.post(
		{
			url:'/event/get',
			data: {
				listId : id,
			},
		}, function(data) {
			$('.event').remove();
			data.forEach(function(value) {
				var id = value.ID;
				var name = value.EVENT_NAME;
				var status = value.STATUS;
				var PREFIX = '<div class="event" data-id="' + id + '"> <div class="event-content left">';
				var SUFFIX = '</div>';
				var STATUSFIX = '';
				if (status === 1) {
					STATUSFIX = '<div class="btn-op btn-green event-yes right">√</div>';
				} else {
					STATUSFIX = '<div class="btn-op btn-pink event-no right">x</div>';
				}
				var event = PREFIX + name + SUFFIX + STATUSFIX + SUFFIX;
				$('.event-title').after(event);
				$('.event-yes').off('click').on('click', );
				$('.event-no').off('click').on('click', );
			});
	});
}

/** execute when page ready **/
$(document).ready(function() {
	$.post('/list/get', function(data) {
		data.forEach(function(value) {
			var id = value.ID;
			var name = value.LIST_NAME;
			var list = '<div class="list" data-id="' + id + '">'
						+ name + '</div>';
			$('.list-title').after(list);
			$('.list').off('click').on('click', btnAddClick);
		})
	});
});