// index.js
var updateEvent = function updateEvent(me, sibling, data) {
	if (data) {
		var eventName = data.eventName;
		if (me.hasClass('event-yes')) {
			me.removeClass('event-yes btn-green').addClass('event-no btn-pink');
			me.html('x');
			sibling.removeClass('event-pink').addClass('event-green');
		} else if (me.hasClass('event-no')) {
			me.removeClass('event-no btn-pink').addClass('event-yes btn-green');
			me.html('√');
			sibling.removeClass('event-green').addClass('event-pink');
		}
		sibling.html(eventName);
	}
}

var eventOpClick = function eventOpClick() {
	var me = $(this);
	var sibling = me.siblings('.event-content');
	var eventId = me.parent().attr('data-id');
	var eventName = sibling.html();
	var status = 0;
	if (me.hasClass('btn-green')) {
		status = 1;
	}
	$.post(
		{
			url : 'event/update',
			data : {
				eventId : eventId,
				status : status,
				eventName : eventName,
			},
		}, function(data) {
			updateEvent(me, sibling, data);
		}
	);
}

var eventOpEditClick = function eventOpEditClick() {
	var me = $(this);
	var sibling = me.siblings('.event-content');
	var eventId = me.parent().attr('data-id');
	var eventName = sibling.html();
	var status = 0;
	if (sibling.hasClass('event-green')) {
		status = 1;
	}
	var newEventName = prompt('New content: ', eventName);
	if (newEventName) {
		$.post(
			{
				url : 'event/update',
				data : {
					eventId : eventId,
					status : status,
					eventName : newEventName,
				},
			}, function(data) {
				updateEvent(me, sibling, data);
			}
		);
	} else {
		alert('New content cannot be empty.');
	}
}

var addEventNode = function addEventNode(value) {
	var id = value.ID;
	var name = value.EVENT_NAME;
	var status = value.STATUS;
	var PREFIX = '';
	var STATUSFIX = '';
	var EDITBTN = '<div class="btn-op btn-yellow event-edit right">~</div>';
	if (status === 1) {
		PREFIX = '<div class="event" data-id="' + id + '"> <div class="event-content event-green left">';
		STATUSFIX = '<div class="btn-op btn-pink event-no right">x</div>';
	} else {
		PREFIX = '<div class="event" data-id="' + id + '"> <div class="event-content event-pink left">';
		STATUSFIX = '<div class="btn-op btn-green event-yes right">√</div>';
	}
	var SUFFIX = '</div>';
	var event = PREFIX + name + SUFFIX + STATUSFIX + EDITBTN + SUFFIX;
	$('.event-title').after(event);
	$('.event-yes').off('click').on('click', eventOpClick);
	$('.event-no').off('click').on('click', eventOpClick);
	$('.event-edit').off('click').on('click', eventOpEditClick);
}

var btnListClick = function btnListClick() {
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
			$('.event-title').html(me.html());
			$('.event').remove();
			data.forEach(function(value) {
				addEventNode(value);
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
			$('.list').off('click').on('click', btnListClick);
		})
	});
});