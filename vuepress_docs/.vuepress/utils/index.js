const utils = {
    genSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 3) {
        var arr = new Array();
        arr.push({
            title,
            collapsable,
            sidebarDepth,
            children
        })
        return arr;
    }
};

module.exports = utils;
