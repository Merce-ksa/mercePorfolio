$('.hero').mousemove(function(event){
	var moveX = (event.pageX * -1/40);
	var moveY = (event.pageY * -1/40);

	$(this).css('background-position', moveX + 'px ' + moveY + 'px');
})
