function getQueryString() {
    var qs = window.location.search.substr(1), // 获取url中"?"符后的字串  
        args = {}, // 保存参数数据的对象
        items = qs.length ? qs.split("&") : [], // 取得每一个参数项,
        item = null,
        len = items.length;

    for (var i = 0; i < len; i++) {
        item = items[i].split("=");
        var name = decodeURIComponent(item[0]),
            value = decodeURIComponent(item[1]);
        if (name) {
            args[name] = value;
        }
    }
    return args;
}

var querys;

var query = {
    get: function (key, force) {
        if (!!force || !querys)
            querys = getQueryString();
        return querys[key];
    },
    getAll: function (force) {
        console.log("更新了2")
        if (!!force || !querys)
            querys = getQueryString();
        return Object.assign({}, querys);
    }
}

query.query = query;
module.exports = query;