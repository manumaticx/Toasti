// basic setup
var args = arguments[0] || {},
    defaults = _.defaults(args, {
    	duration: 2000,
    	opacity: 0.8,
    	borderRadius: 10,
    	animation: 'fade',
    	width: '70%',
    	height: '30%',
    	message: ''
    }),
    toasty,
    queue = [];

/**
 * show a new toasty message
 * @param {Object} _args
 * @return {Ti.UI.Window}
 */
function show(_args){
	var args = _args || {};
	
	// catch if a string is passed instead of an object
	if ('string' === typeof _args){
		args = {
			message: _args 
		};
	}
	
	// if there's an active toasty, put this one into the queue
	if (!!toasty){
		queue.push(args);
		return;
	}
	
	// create a toatsy instance
    toasty = Widget.createController('toasty', _.defaults(args, defaults));
    
    // listen to close event
    toasty.getView().addEventListener('close', function(){
    	
    	// nulling out this one
    	toasty = null;
    	
    	// check if other toasties waiting to show
    	if (queue.length > 0){
    		// show the next one
    		show(_.first(queue));
    		queue.shift();
    	}
    });
    
    // show it
	toasty.show();
	
	// return a reference to the toasty window
	return toasty.getView();
};

/**
 * configure the defaults
 * @param {Object} _args
 */
function configure(_args){
	defaults = _.defaults(_args, defaults);
};

// constants
exports.TYPE_CONFIRM = 0;
exports.TYPE_ALERT = 1;
exports.TYPE_INFO = 2;
exports.ANIMATION_FADE = 'fade';
exports.ANIMATION_SLIDE_FROM_TOP = 'top';
exports.ANIMATION_SLIDE_FROM_LEFT = 'left';
exports.ANIMATION_ZOOM = 'zoom';

// methods
exports.show = show;
exports.configure = configure;
