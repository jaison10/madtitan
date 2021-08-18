var blocks = document.getElementsByClassName('scroll-content-item');
var container = document.getElementsByClassName('scroll-content-container');
var hs = new HorizontalScroll.default({
	blocks : blocks,
	container: container,
    isAnimated: true,
    springEffect: .8,
    skewReducer:10
});