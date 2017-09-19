// test.js

var hoverOp = function hoverOp() {
	console.log('hi');
}

$('.btn-parent').hover(function() {
	hoverOp();
});


$('.btn-children').hover(function() {
	console.log('heroo');
})