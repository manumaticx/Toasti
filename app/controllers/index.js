function simple() {  
    Alloy.createWidget('toasty', {
    	title: 'Simple',
    	message: 'This is a simple toasty.'
    }).show();
}

function confirm() {  
    Alloy.createWidget('toasty', {
    	title: 'Confirm',
    	message: 'This is a confirmation.',
    	type: 'confirm'
    }).show();
}

function alert() {  
    Alloy.createWidget('toasty', {
    	title: 'Alert',
    	message: 'This is an alert.',
    	type: 'alert'
    }).show();
}

function info() {  
    Alloy.createWidget('toasty', {
    	title: 'Info',
    	message: 'This is an information.',
    	type: 'info'
    }).show();
}

$.index.open();
