module.exports = [ {
    isId: true,
    priority: 100000.0002,
    key: "toasty",
    style: {
        backgroundColor: "#000000",
        borderRadius: 10,
        navBarHidden: true,
        opacity: 0,
        width: "70%",
        height: "30%"
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "centerWrapper",
    style: {
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "title",
    style: {
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
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "message",
    style: {
        color: "#ffffff",
        font: {
            fontSize: "16sp"
        },
        textAlign: "center",
        top: "5dp",
        left: "2dp",
        right: "2dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL
    }
} ];