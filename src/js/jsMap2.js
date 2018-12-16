/*! jsMap v2.0.0 | (c) ZhaoGang | MIT license */
!function (b, e) {
    "function" === typeof define && define.amd ? define("jsmap", ["jquery"], e) : "undefined" !== typeof module && "object" === typeof exports ? module.exports = e(require("jquery")) : b.jsMap = e(b.jQuery)
}("undefined" !== typeof window ? window : this, function (b) {
    var e = b(document), l = b("");
    if (navigator.userAgent.toLowerCase().match(/msie (6|7|8)\.0/)) throw Error("jsMap \u4e0d\u652f\u6301 ie8- \u7684\u6d4f\u89c8\u5668\uff01");
    var n = {
        version: "2.0.0", json: function (e, d) {
            return b.getJSON(e + (d ? "?callback\x3d?" : ""))
        }, config: function (m, d, n) {
            var p = [1, "#fff"], f = ["#3f99f9", "#fff11c", "#dd2d01"], h = [!1, 12, "#000", "#000"], a = b.extend({}, {
                name: "china",
                width: 1000,
                height: 700,
                stroke: {width: p[0], color: p[1]},
                fill: {basicColor: f[0], hoverColor: f[1], clickColor: f[2]},
                areaName: {show: h[0], size: h[1], basicColor: h[2], clickColor: h[3]},
                disabled: [],
                multiple: !1,
                tip: !0,
                hoverCallback: b.noop,
                clickCallback: b.noop
            }, n), u = b("body");
            !function () {
                var q = "", k = "", t = [];
                b.each(d[a.name], function (a, b) {
                    t.push(a);
                    q += '\r\n\t\t\t\t\t\t\x3cpath \r\n\t\t\t\t\t\t\td\x3d"' + b.svg + '" \r\n\t\t\t\t\t\t\tclass\x3d"jsmap-' + a + '" \r\n\t\t\t\t\t\t\tdata-name\x3d"' + b.name + '" \r\n\t\t\t\t\t\t\tdata-id\x3d"' + a + '" \r\n\t\t\t\t\t\t\tstyle\x3d"cursor:pointer;"\x3e\r\n\t\t\t\t\t\t\x3c/path\x3e\r\n\t\t\t\t\t';
                    k += '\r\n\t\t\t\t\t\t\x3ctext \r\n\t\t\t\t\t\t\tx\x3d"' + b.textPosition[0] + '" \r\n\t\t\t\t\t\t\ty\x3d"' + b.textPosition[1] + '" \r\n\t\t\t\t\t\t\tclass\x3d"jsmap-' + a + '" \r\n\t\t\t\t\t\t\tdata-name\x3d"' + b.name + '" \r\n\t\t\t\t\t\t\tdata-id\x3d"' + a + '" \r\n\t\t\t\t\t\t\tstyle\x3d"-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;"\x3e\r\n\t\t\t\t\t\t\t' + b.name + "\r\n\t\t\t\t\t\t\x3c/text\x3e\r\n\t\t\t\t\t"
                });
                a.areaName.show || (k = "");
                q = '\r\n\t\t\t\t\t\x3csvg \r\n\t\t\t\t\t\tversion\x3d"1.1" \r\n\t\t\t\t\t\txmlns\x3d"http://www.w3.org/2000/svg" \r\n\t\t\t\t\t\tstyle\x3d"position:relative;overflow:hidden;" \r\n\t\t\t\t\t\twidth\x3d"' + a.width + '" height\x3d"' + a.height + '" \r\n\t\t\t\t\t\tviewBox\x3d"0 0 575 470"\x3e\r\n\t\t\t\t\t\t' + q + k + "\r\n\t\t\t\t\t\x3c/svg\x3e\r\n\t\t\t\t";
                b(m).each(function () {
                    var g = b(this);
                    g.data({cache_resource: d, cache_options: n});
                    g.empty().width(a.width).height(a.height).html('\r\n\t\t\t\t\t\t\x3csection class\x3d"jsmap-container" style\x3d"position:relative;width:' + a.width + "px;height:" + a.height + 'px;"\x3e\r\n\t\t\t\t\t\t\t' + q + "\r\n\t\t\t\t\t\t\x3c/section\x3e\r\n\t\t\t\t\t");
                    var m = g.find("svg"), k = m.find("path"), v = m.find("text"), r = [];
                    m.find("path").each(function () {
                        r.push(b(this).attr("data-id"))
                    });
                    "string" === b.type(a.fill.basicColor) && k.attr({
                        fill: a.fill.basicColor || f[0],
                        "data-fill": a.fill.basicColor || f[0]
                    });
                    b.isPlainObject(a.fill.basicColor) && !b.isEmptyObject(a.fill.basicColor) && b.each(a.fill.basicColor, function (a, b) {
                        k.filter(".jsmap-" + a).attr({fill: b || f[0], "data-fill": b || f[0]})
                    });
                    g.find("path").each(function () {
                        b(this).attr("fill") || b(this).attr({fill: f[0], "data-fill": f[0]})
                    });
                    k.attr({stroke: a.stroke.color || p[1], "stroke-width": a.stroke.width || p[0]});
                    a.areaName.show && v.attr({
                        fill: a.areaName.basicColor || h[2],
                        "font-size": a.areaName.size || h[1]
                    });
                    Array.isArray(a.disabled) && a.disabled.length && a.disabled.forEach(function (a) {
                        g.find(".jsmap-" + a).addClass("jsmap-disabled").css("cursor", "not-allowed")
                    });
                    a.tip && !b("#jsmap-tip").length && (u.append('\x3csection id\x3d"jsmap-tip" style\x3d"-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:0;left:0;z-index:99;display:inline-block;width:auto;height:auto;overflow:hidden;display:none;"\x3e\x3c/section\x3e'), l = b("#jsmap-tip"));
                    var w = g.find("path, text");
                    t.forEach(function (d) {
                        g.find(".jsmap-" + d).each(function () {
                            b(this).on({
                                mouseenter: function () {
                                    if (!b(this).hasClass("jsmap-disabled")) {
                                        var d = b(this).attr("data-id");
                                        g.find(".jsmap-" + d).each(function () {
                                            var c = b(this);
                                            if (!c.hasClass("jsmap-clicked")) {
                                                var d = b.extend(!0, [], r);
                                                a.fill.hoverColor || (a.fill.hoverColor = f[1]);
                                                "string" === b.type(a.fill.hoverColor) && c.filter("path").attr("fill", a.fill.hoverColor);
                                                b.isPlainObject(a.fill.hoverColor) && !b.isEmptyObject(a.fill.hoverColor) && (b.each(a.fill.hoverColor, function (a, b) {
                                                    c.filter(".jsmap-" + a).attr("fill", b);
                                                    d.splice(d.indexOf(a), 1)
                                                }), -1 < d.indexOf(c.attr("data-id")) && c.attr("fill", f[1]))
                                            }
                                            a.hoverCallback(c.attr("data-id"), c.attr("data-name"));
                                            a.tip && (!0 === a.tip && l.html('\x3cdiv style\x3d"padding:12px;color:#fff;font-size:14px;text-align:center;border-radius:4px;border:#ccc solid 1px;background:rgba(0,0,0,.8);"\x3e' + c.attr("data-name") + "\x3c/div\x3e"), b.isFunction(a.tip) && l.html(a.tip(c.attr("data-id"), c.attr("data-name"))), e.on("mousemove", function (a) {
                                                l.css("transform", "translate(" + (a.pageX + 12 + "px") + ", " + (a.pageY + 12 + "px") + ")");
                                                l.show()
                                            }))
                                        })
                                    }
                                }, mouseleave: function () {
                                    var d = b(this).attr("data-id");
                                    g.find(".jsmap-" + d).each(function () {
                                        var c = b(this);
                                        c.hasClass("jsmap-clicked") || c.filter("path").attr("fill", c.attr("data-fill"));
                                        a.tip && (l.empty().hide().css("transform", "translate(0, 0)"), e.off("mousemove"))
                                    })
                                }, click: function () {
                                    if (!b(this).hasClass("jsmap-disabled")) {
                                        var d = b(this).attr("data-id");
                                        g.find(".jsmap-" + d).each(function () {
                                            var c = b(this);
                                            c.addClass("jsmap-clicked");
                                            a.multiple || w.not(".jsmap-" + d).removeClass("jsmap-clicked").each(function () {
                                                b(this).attr("fill", b(this).attr("data-fill"))
                                            });
                                            a.clickCallback(c.attr("data-id"), c.attr("data-name"));
                                            if (!1 !== a.fill.clickColor) {
                                                var e = b.extend(!0, [], r);
                                                a.fill.clickColor || (a.fill.clickColor = f[2]);
                                                "string" === b.type(a.fill.clickColor) && c.filter("path").attr("fill", a.fill.clickColor);
                                                b.isPlainObject(a.fill.clickColor) && !b.isEmptyObject(a.fill.clickColor) && (b.each(a.fill.clickColor, function (a, b) {
                                                    c.filter(".jsmap-" + a).attr("fill", b);
                                                    e.splice(e.indexOf(a), 1)
                                                }), -1 < e.indexOf(c.attr("data-id")) && c.attr("fill", f[2]));
                                                !1 !== a.areaName.clickColor && (a.areaName.clickColor || (a.areaName.clickColor = h[3]), a.areaName.show && g.find("text.jsmap-" + c.attr("data-id")).attr("fill", a.areaName.clickColor).siblings("text").attr("fill", a.areaName.basicColor || h[2]))
                                            }
                                        })
                                    }
                                }
                            })
                        })
                    })
                })
            }()
        }, refresh: function (e) {
            b(e).each(function () {
                var d = b(this);
                d.data("cache_resource") && n.config(d, d.data("cache_resource"), d.data("cache_options"))
            })
        }
    };
    return n
});