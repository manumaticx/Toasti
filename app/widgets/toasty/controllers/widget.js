var args = arguments[0] || {};

var colors = [
    '#44b700', // green
    '#d10d00', // red
    '#005bd1' // blue
];

var types = [
	'confirm',
	'alert',
	'info'
];

exports.TYPE_CONFIRM = 0;
exports.TYPE_ALERT = 1;
exports.TYPE_INFO = 2;

$.title.text = args.title || '';
$.message.text = args.message || '';

if ('undefined' !== typeof args.type){
	
	if('string' === typeof args.type){
		$.toasty.setBackgroundColor(colors[_.indexOf(types, args.type)]);
	}
	
	if('number' === typeof args.type){
		$.toasty.setBackgroundColor(colors[args.type]);	
	}
}

var show = Ti.UI.createAnimation({
    duration: 200,
    opacity: 0.8
});

var hide = Ti.UI.createAnimation({
    duration: 200,
    opacity: 0
});
hide.addEventListener('complete', function () {
    $.toasty.close();
});

exports.show = function () {
    $.toasty.open();
    $.toasty.animate(show);
    setTimeout(function(){
        $.toasty.animate(hide);
    }, args.duration || 2000);
};

$.toasty.addEventListener('click', function () {
    $.toasty.animate(hide);
});