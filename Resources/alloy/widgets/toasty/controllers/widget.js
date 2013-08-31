function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "toasty/" + s : s.substring(0, index) + "/toasty/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    new (require("alloy/widget"))("toasty");
    this.__widgetId = "toasty";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.toasty = Ti.UI.createWindow({
        backgroundColor: "#000000",
        borderRadius: 10,
        navBarHidden: true,
        opacity: 0,
        width: "70%",
        height: "30%",
        id: "toasty"
    });
    $.__views.toasty && $.addTopLevelView($.__views.toasty);
    $.__views.centerWrapper = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "centerWrapper"
    });
    $.__views.toasty.add($.__views.centerWrapper);
    $.__views.title = Ti.UI.createLabel({
        color: "#ffffff",
        font: {
            fontSize: "18sp",
            fontWeight: "bold"
        },
        textAlign: "center",
        top: "5dp",
        left: "2dp",
        right: "2dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "title"
    });
    $.__views.centerWrapper.add($.__views.title);
    $.__views.message = Ti.UI.createLabel({
        color: "#ffffff",
        font: {
            fontSize: "16sp"
        },
        textAlign: "center",
        top: "5dp",
        left: "2dp",
        right: "2dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "message"
    });
    $.__views.centerWrapper.add($.__views.message);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var colors = [ "#44b700", "#d10d00", "#005bd1" ];
    var types = [ "confirm", "alert", "info" ];
    exports.TYPE_CONFIRM = 0;
    exports.TYPE_ALERT = 1;
    exports.TYPE_INFO = 2;
    $.title.text = args.title || "";
    $.message.text = args.message || "";
    if ("undefined" != typeof args.type) {
        "string" == typeof args.type && $.toasty.setBackgroundColor(colors[_.indexOf(types, args.type)]);
        "number" == typeof args.type && $.toasty.setBackgroundColor(colors[args.type]);
    }
    var show = Ti.UI.createAnimation({
        duration: 200,
        opacity: .8
    });
    var hide = Ti.UI.createAnimation({
        duration: 200,
        opacity: 0
    });
    hide.addEventListener("complete", function() {
        $.toasty.close();
    });
    exports.show = function() {
        $.toasty.open();
        $.toasty.animate(show);
        setTimeout(function() {
            $.toasty.animate(hide);
        }, args.duration || 2e3);
    };
    $.toasty.addEventListener("click", function() {
        $.toasty.animate(hide);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;