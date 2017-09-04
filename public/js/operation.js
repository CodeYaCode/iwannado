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

var addListDB = function addListDB(data, newName) {
	var PREFIX = '<div class="list" data-id="' + data.id + '">';
	var FIX = '</div>';
	$('.list-title').after(PREFIX + newName + FIX);
	$('.list').off('click').on('click', btnListClick);
}

var addEventDB = function addEventDB(data, newName) {
	var PREFIX = '<div class="event" data-id="' + data.ID + '"> <div class="event-content event-pink left">';
	var SUFFIX = '</div>';
	var STATUSFIX = '<div class="btn-op btn-green event-yes right">x</div>';
	var event = PREFIX + newName + SUFFIX + STATUSFIX + SUFFIX;
	$('.event-title').after(event);
	$('.event-yes').off('click').on('click', eventOpClick);
	$('.event-no').off('click').on('click', eventOpClick);
}

_btn_add.on('click', function() {
	var me = $(this);
	var list = $('.list-active');
	var listId = list.attr('data-id');
	var type = me.attr('data-type');
	if (type) {
		var newName = prompt('New ' + type);
		if (newName) {
			var url = '/' + type + '/add';
			$.post(
				{
					url: url,
					data: {
						name : newName,
						listId : listId,
					},
				}, function(data) {
					switch(type) {
						case 'list' :
							addListDB(data, newName, list);
							break;
						case 'event' :
							addEventDB(data, newName, list);
							break;
					}
			});
		} else {
			alert('name can no be null.');
		}
	}
});

var addListAnimation = function addListAnimation() {
	var lists = $('.list');
	var animation = 'to-be-del';
	if (lists.hasClass(animation)) {
		lists.removeClass(animation);
		lists.off('click').on('click', btnListClick);
	} else {
		lists.addClass(animation);
		lists.off().on('click', delListDB);
	}
}

var delListDB = function delListDB() {
	var me = $(this);
	var name = me.html();
	var id = me.attr('data-id');
	if (confirm('Confirm delete [' + name + '] ?')) {
		$.post(
			{
				url : '/list/del',
				data : {
					id : id,
				}
			}, function(data) {
				me.remove();
			}
		)
	}
}

var addEventAnimation = function addEventAnimation() {
	var lists = $('.event');
	var animation = 'to-be-del';
	if (lists.hasClass(animation)) {
		lists.removeClass(animation);
		lists.off('click');
	} else {
		lists.addClass(animation);
		lists.off().on('click', delEventDB);
	}
}

var delEventDB = function delEventDB() {
	var me = $(this);
	var name = me.children('.event-content').html();
	var id = me.attr('data-id');
	if (confirm('Confirm delete [' + name + '] ?')) {
		$.post(
			{
				url : '/event/del',
				data : {
					eventId : id,
				}
			}, function(data) {
				me.remove();
			}
		)
	}
}

_btn_del.on('click', function() {
	var me = $(this);
	var type = me.attr('data-type');
	if (type) {
		switch(type) {
			case 'list' :
				addListAnimation();
				break;
			case 'event' :
				addEventAnimation();
				break;
		}		
	}
});