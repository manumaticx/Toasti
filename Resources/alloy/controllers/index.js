function Controller() {
    function simple() {
        Alloy.createWidget("toasty", {
            title: "Simple",
            message: "This is a simple toasty."
        }).show();
    }
    function confirm() {
        Alloy.createWidget("toasty", {
            title: "Confirm",
            message: "This is a confirmation.",
            type: "confirm"
        }).show();
    }
    function alert() {
        Alloy.createWidget("toasty", {
            title: "Alert",
            message: "This is an alert.",
            type: "alert"
        }).show();
    }
    function info() {
        Alloy.createWidget("toasty", {
            title: "Info",
            message: "This is an information.",
            type: "info"
        }).show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId1 = Ti.UI.createButton({
        top: "10dp",
        title: "Simple",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    simple ? $.__views.__alloyId1.addEventListener("click", simple) : __defers["$.__views.__alloyId1!click!simple"] = true;
    $.__views.__alloyId2 = Ti.UI.createButton({
        top: "10dp",
        title: "Confirm",
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    confirm ? $.__views.__alloyId2.addEventListener("click", confirm) : __defers["$.__views.__alloyId2!click!confirm"] = true;
    $.__views.__alloyId3 = Ti.UI.createButton({
        top: "10dp",
        title: "Alert",
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    alert ? $.__views.__alloyId3.addEventListener("click", alert) : __defers["$.__views.__alloyId3!click!alert"] = true;
    $.__views.__alloyId4 = Ti.UI.createButton({
        top: "10dp",
        title: "Info",
        id: "__alloyId4"
    });
    $.__views.index.add($.__views.__alloyId4);
    info ? $.__views.__alloyId4.addEventListener("click", info) : __defers["$.__views.__alloyId4!click!info"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId1!click!simple"] && $.__views.__alloyId1.addEventListener("click", simple);
    __defers["$.__views.__alloyId2!click!confirm"] && $.__views.__alloyId2.addEventListener("click", confirm);
    __defers["$.__views.__alloyId3!click!alert"] && $.__views.__alloyId3.addEventListener("click", alert);
    __defers["$.__views.__alloyId4!click!info"] && $.__views.__alloyId4.addEventListener("click", info);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;