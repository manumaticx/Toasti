var args = arguments[0] || {};

// define toasty colors
var colors = [
    '#44b700', // green
    '#d10d00', // red
    '#005bd1'  // blue
];

// define toasty types
var types = ['confirm', 'alert', 'info'];

// check if a custom view was passed
if (_.has(args, "view")){
    // replace our view with the custom view
    $.toasty.remove($.centerWrapper);
    $.toasty.add(args.view);
}else{
    // assign passed values
    _.has(args, "title") ? $.title.setText(args.title) : $.centerWrapper.remove($.title);
    $.message.text = args.message;    
}

// adjust dimensions...
$.toasty.width  = args.width;
$.toasty.height = args.height;

// ..and other options
$.toasty.borderRadius = args.borderRadius;

// optional positioning options
_.has(args, "top")    && $.toasty.setTop(args.top);
_.has(args, "bottom") && $.toasty.setBottom(args.bottom);
_.has(args, "left")   && $.toasty.setLeft(args.left);
_.has(args, "right")  && $.toasty.setRight(args.right);

// set backgroundColor according to type
if ('undefined' !== typeof args.type) {

	if ('string' === typeof args.type && types.indexOf(args.type) > -1) {
		$.toasty.setBackgroundColor(colors[_.indexOf(types, args.type)]);
	}

	if ('number' === typeof args.type && args.type in colors) {
		$.toasty.setBackgroundColor(colors[args.type]);
	}
}

// show animation
var show = (function(animation){
	var opts;

	if (OS_ANDROID){
		opts = {
			duration : 200,
			opacity : args.opacity
		};
		return Ti.UI.createAnimation(opts);
	}

	switch (animation){
		case 'fade': // fade in
			opts = {
				duration : 200,
				opacity : args.opacity
			};
			break;
		case 'top': // slide from top
			$.toasty.top = negate($.toasty.height, Ti.Platform.displayCaps.platformHeight);
			$.toasty.opacity = args.opacity;
			opts = {
				duration : 200,
				top: 0
			};
			break;
		case 'left': // slide from left
			$.toasty.left = negate($.toasty.width, Ti.Platform.displayCaps.platformWidth);
			$.toasty.opacity = args.opacity;
			opts = {
				duration : 200,
				left : 'auto'
			};
			break;
		case 'zoom': // zoom in
			$.toasty.transform = Ti.UI.create2DMatrix({
				scale: 0
			});
			opts = {
		        opacity: args.opacity,
		        transform: Ti.UI.create2DMatrix(),
		        duration: 200
		    };
			break;
		default:
			opts: {};
	}
	return Ti.UI.createAnimation(opts);
})(args.animation);

// hide animation
var hide = (function(animation){
	var opts;

	if (OS_ANDROID){
		opts = {
			duration : 200,
			opacity : 0
		};
		return Ti.UI.createAnimation(opts);
	}

	switch (animation){
		case 'fade': // fade out
			opts = {
				duration : 200,
				opacity : 0
			};
			break;
		case 'top': // slide to top
			opts = {
				duration : 200,
				top : negate($.toasty.height, Ti.Platform.displayCaps.platformHeight)
			};
			break;
		case 'left': // slide to right
			opts = {
				duration : 200,
				left : '100%'
			};
			break;
		case 'zoom': // zoom out
			opts = {
				duration : 200,
				transform: Ti.UI.create2DMatrix({
					scale: 0
				}),
				opacity : 0,
			};
			break;
		default:
			opts: {};
	}
	return Ti.UI.createAnimation(opts);
})(args.animation);

// close toasty window when hide animation has finished
hide.addEventListener('complete', onHideComplete);
function onHideComplete(){
	$.toasty.close();
	hide.removeEventListener('complete', onHideComplete);
};

// helper function to negate non-integer values 
function negate(value, platformValue){
	
	if ('string' === typeof value){
		if (value.match(/\%$/)){
			// negate %-ages
			return '-'+value;
		}else if (value == 'FILL' || value == 'SIZE' || value == 'auto'){
			// negate titanium keywords with platform values
			var p = platformValue;
			OS_ANDROID && (p /= Ti.Platform.displayCaps.logicalDensityFactor);
			return 0 - p;
		}else{
			return 0;
		}
	}else if('number' === typeof value){
		return 0 - value;
	}else{
		return 0;
	}
};

// show
exports.show = function() {
	// open window
	$.toasty.open();
	$.toasty.animate(show);
	
	// wait and hide
	setTimeout(function() {
		$.toasty.animate(hide);
	}, args.duration);
}; 