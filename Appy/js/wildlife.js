function getYoutubeUrl(e, t) {
    var i = {
        html5: !1,
        autoplay: !1,
        wmode: !1
    };
    t = $.extend(i, t);
    var n = ["http://www.youtube.com/embed/", e,
        "?rel=0&amp;showinfo=0&amp;theme=light&amp;color=white"
    ];
    return t.html5 && n.push("&amp;html5=1"), t.autoplay && n.push(
            "&amp;autoplay=1"), t.wmode && n.push("&amp;wmode=" + t.wmode),
        n.join("")
}

function getYoutubeEmbed(e, t) {
    var i = {
        width: 960,
        height: 540,
        attrs: {}
    };
    t = $.extend(i, t);
    var n = t.attrs;
    n.id = n.id || "youtube-iframe-" + e.hashCode(), n.width = t.width, n.height =
        t.height, n.src = getYoutubeUrl(e, t), n.allowfullscreen = !0;
    var o = $("<iframe>", n);
    return isIE || YT_ready(function() {
        var e = new YT.Player(n.id);
        o.data("youtube-api", e)
    }), o
}

function onYouTubePlayerAPIReady() {
    YT_ready(!0)
}

function FunctionSwitch(e) {
    function t(e, t) {
        return "string" == typeof e && e.length > 0 && $.isFunction(t) ?
            (o[e] = t, !0) : !1
    }

    function i(e, t) {
        return t = jQuery.extend({
            deferred: $.Deferred()
        }, t), n(e).call(this, t), t.deferred
    }

    function n(e) {
        return ("string" != typeof e || "undefined" == typeof o[e]) &&
            (e = "defaultFunction"), o[e]
    }
    var o = {};
    return "undefined" == typeof e && (e = function(e) {
        return e.deferred.resolve(), e.deferred
    }), t("defaultFunction", e), {
        call: i,
        add: t
    }
}

function animateScrollToTop() {
    TweenLite.to(window, .3, {
        scrollTo: 0
    }), $(window).trigger("scroll-to-top")
}
String.prototype.hashCode = function() {
    var e = 0,
        t, i;
    if (0 == this.length) return e;
    for (t = 0, l = this.length; l > t; t++) i = this.charCodeAt(t), e = (e <<
        5) - e + i, e |= 0;
    return e
};
var isIE = document.createElement("b");
isIE.innerHTML = "<!--[if IE X]><i></i><![endif]-->", isIE = 1 == isIE.getElementsByTagName(
    "i").length;
var isMobile = function(e, t) {
        return
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i
            .test(e) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
            .test(e.substr(0, 4)) ? !0 : !1
    }(navigator.userAgent || navigator.vendor || window.opera),
    isInIframe = self !== top,
    canWindowBeWider = !isMobile && !isInIframe && window.screen.availWidth >
    window.outerWidth;
Number.prototype.addThousandsSeparators = function(e) {
        return "undefined" == typeof e && (e = ","), this.toString().replace(
            /\B(?=(\d{3})+(?!\d))/g, e)
    }, Number.prototype.toNewScale = function(e, t) {
        return (this - e) / t
    }, Number.prototype.toNewOrigin = function(e) {
        return this - e
    }, $.support.scrollbarWidth = function() {
        var e = document.documentElement,
            t =
            "width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;",
            i = document.createElement("div");
        i.setAttribute("style", t), e.appendChild(i);
        var n = i.offsetWidth - i.clientWidth;
        return 0 === n && (e.className += " hidden-scrollbar "), e.removeChild(
            i), n > 1
    }(),
    function() {
        "use strict";
        var e = {
            atanh: Math.atanh || function(e) {
                return .5 * Math.log((1 + e) / (1 - e))
            },
            tanh: Math.tanh || function(e) {
                return (Math.exp(e) - Math.exp(-e)) / (Math.exp(e) +
                    Math.exp(-e))
            },
            contain: function(e, t, i) {
                return Math.max(t, Math.min(i, e))
            },
            concentrateLow: function(t) {
                return t = e.contain(t, 0, 1), t * t
            },
            concentrateCenterAtanh: function(t, i) {
                return i = "undefined" != typeof i ? i : 2, t = e.contain(
                    t, 0, 1), .5 * (1 + 1 / i * e.atanh((2 * t - 1) *
                    e.tanh(i)))
            },
            concentrateCenter: function(t) {
                return t = e.contain(t, 0, 1), Math.tan(2.78 * t - 1.38) /
                    Math.pow(Math.PI, 2) + .5
            },
            random: function(e, t, i) {
                if (e.length) {
                    var n = e;
                    return n[Math.floor(Math.random() * n.length)]
                }
                var o = e;
                return i ? (o = Math.ceil(o), t = Math.floor(t), Math.floor(
                        Math.random() * (t - o + 1)) + o) : Math.random() *
                    (t - o) + o
            },
            addThousandsSeparators: function(e, t) {
                return "undefined" == typeof t && (t = ","), e.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, t)
            },
            toNewOrigin: function(e, t) {
                return e - t
            },
            getPercentageScale: function(e, t, i) {
                return t = t || 0, i = i || 100, (e - t) / (i - t)
            },
            changePercentageScale: function(t, i, n, o, a) {
                return o = o || 0, a = a || 1, e.getPercentageScale(t,
                    i, n) * (a - o) + o
            },
            toDegrees: function(e) {
                return e * (180 / Math.PI)
            },
            toRadians: function(e) {
                return e * (Math.PI / 180)
            }
        };
        window.bfrMath = e
    }(),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], t) : "object" ==
            typeof exports ? module.exports = t() : e.bfrUtils = t()
    }(this, function() {
        var e = {},
            t = {};
        return e.setTimer = function(e, i, n) {
            var o, a, r = function() {
                    t[a] = o()
                },
                s = function() {
                    var i;
                    t[a] && (i = e(), n && (i && i.then && i.then.call ?
                        i.then(r) : r()))
                };
            return o = setTimeout.bind(window, requestAnimationFrame.bind(
                window, s), i), a = o(), t[a] = !0, a
        }, e.clearTimer = function(e) {
            clearTimeout("boolean" == typeof t[e] ? e : t[e]), t[e] = !
                1
        }, e.shuffle = function(e) {
            for (var t, i, n = e.length; n; t = Math.floor(Math.random() *
                n), i = e[--n], e[n] = e[t], e[t] = i);
            return e
        }, e.loadUrlInHiddenIframe = function(e, t) {
            t = t || document.querySelector(".content") || document.body;
            var i = document.createElement("iframe");
            return i.src = e, i.style.display = "none", t.appendChild(i),
                function n() {
                    try {
                        return t.removeChild(i), !0
                    } catch (e) {
                        return !1
                    }
                }
        }, e.isInIframe = self !== top, e.canWindowBeWider = function(t) {
            return "undefined" == typeof t && (t = "ontouchstart" in
                    window), !t && !e.isInIframe && window.screen.availWidth >
                window.outerWidth
        }, e.canItScroll = function(e, t, i) {
            if (e = e || "width", e = e.charAt(0).toUpperCase() + e.slice(
                    1), !t || t === window || t === document.documentElement ||
                t === document.body) {
                try {
                    return top.document.documentElement["scroll" + e] >
                        window["inner" + e]
                } catch (n) {}
                return i
            }
            return t["scroll" + e] && t["offset" + e] ? t["scroll" + e] >
                t["offset" + e] : i
        }, e
    }),
    function(e) {
        "object" == typeof exports ? module.exports = e() : "function" ==
            typeof window.define && window.define.amd ? window.define([], e) :
            window.BezierEasing = e()
    }(function() {
        function e(e, t, c, d) {
            function u(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function h(e, t) {
                return 3 * t - 6 * e
            }

            function p(e) {
                return 3 * e
            }

            function f(e, t, i) {
                return ((u(t, i) * e + h(t, i)) * e + p(t)) * e
            }

            function m(e, t, i) {
                return 3 * u(t, i) * e * e + 2 * h(t, i) * e + p(t)
            }

            function g(t, n) {
                for (var o = 0; i > o; ++o) {
                    var a = m(n, e, c);
                    if (0 === a) return n;
                    var r = f(n, e, c) - t;
                    n -= r / a
                }
                return n
            }

            function v() {
                for (var t = 0; r > t; ++t) S[t] = f(t * s, e, c)
            }

            function y(t, i, n) {
                var r, s, l = 0;
                do s = i + (n - i) / 2, r = f(s, e, c) - t, r > 0 ?
                    n = s : i = s; while (Math.abs(r) > o && ++l <
                    a);
                return s
            }

            function w(t) {
                for (var i = 0, o = 1, a = r - 1; o != a && S[o] <=
                    t; ++o) i += s;
                --o;
                var l = (t - S[o]) / (S[o + 1] - S[o]),
                    d = i + l * s,
                    u = m(d, e, c);
                return u >= n ? g(t, d) : 0 == u ? d : y(t, i, i +
                    s)
            }

            function b() {
                T = !0, (e != t || c != d) && v()
            }
            if (4 !== arguments.length) throw new Error(
                "BezierEasing requires 4 arguments.");
            for (var x = 0; 4 > x; ++x)
                if ("number" != typeof arguments[x] || isNaN(arguments[
                    x]) || !isFinite(arguments[x])) throw new Error(
                    "BezierEasing arguments should be integers.");
            if (0 > e || e > 1 || 0 > c || c > 1) throw new Error(
                "BezierEasing x values must be in [0, 1] range.");
            var S = l ? new Float32Array(r) : new Array(r),
                T = !1,
                _ = function(i) {
                    return T || b(), e === t && c === d ? i : 0 === i ?
                        0 : 1 === i ? 1 : f(w(i), t, d)
                };
            _.getControlPoints = function() {
                return [{
                    x: e,
                    y: t
                }, {
                    x: c,
                    y: d
                }]
            };
            var k = "BezierEasing(" + [e, t, c, d] + ")";
            return _.toString = function() {
                return k
            }, _
        }
        var t = this,
            i = 4,
            n = .001,
            o = 1e-7,
            a = 10,
            r = 11,
            s = 1 / (r - 1),
            l = "Float32Array" in t;
        return e.css = {
            ease: e(.25, .1, .25, 1),
            linear: e(0, 0, 1, 1),
            "ease-in": e(.42, 0, 1, 1),
            "ease-out": e(0, 0, .58, 1),
            "ease-in-out": e(.42, 0, .58, 1)
        }, e
    }), TimelineLite.prototype.addDelay = function(e, t) {
        var i;
        if ("undefined" == typeof e || isNaN(e)) return this;
        if ("undefined" == typeof t) i = "+=" + e;
        else if ("string" == typeof t) i = t + "+=" + e;
        else {
            if (isNaN(t)) return this;
            i = e + t
        }
        return this.set({}, {}, i)
    },
    function(e, t) {
        "function" == typeof define && define.amd ? define(["TweenLite",
            "jQuery"
        ], t) : "object" == typeof exports ? module.exports = t(require(
            "TweenLite"), require("jQuery")) : e.createNumericTween = t(e.TweenLite,
            e.jQuery)
    }(this, function(e, $) {
        function t(t, i, n, o, a) {
            return isNaN(t) || isNaN(i) ? (console && console.error(
                "from and to must be numeric"), !1) : (a && delete a
                .onUpdate, t = {
                    n: t
                }, i = {
                    n: i
                }, i = $.extend({}, a, i), o && (i.onUpdate =
                    function() {
                        o(t.n)
                    }), e.to(t, n, i))
        }
        return t
    }),
    function() {
        function e() {
            if ("ontouchstart" in window) return !1;
            var e = document.createElement("div").style;
            return "" !== e.webkitBackgroundClip ? !1 : (e.webkitBackgroundClip =
                "text", "text" === e.webkitBackgroundClip)
        }
        if (e()) {
            var t = document.documentElement;
            t.className = t.className + "background-clip-text"
        }
    }(),
    function($, e) {
        function t(e) {
            $.isFunction(e) ? (r.push(e), l && setTimeout(function() {
                e(a(document))
            }, 0)) : e instanceof jQuery ? o(e) : (l = !0, o(document))
        }

        function i(e) {
            $.isFunction(e) ? s.push(e) : (console.log(
                "UNLOAD: call functions, remove events"), n(), c.off(
                ".remove-on-unload"))
        }

        function n() {
            for (var e = 0, t = s.length; t > e; e++) s[e]();
            s = []
        }

        function o(e) {
            for (var t = a(e), i = 0, n = r.length; n > i; i++) r[i](t)
        }

        function a(e) {
            return $.proxy($.fn.find, $(e))
        }
        var r = [],
            s = [],
            l = !1,
            c = $([document.documentElement, document.body]);
        e.$pl = t, e.$pu = i
    }(jQuery, window), $.fn.extend({
        closestChild: function(e) {
            return this.map(function(t, i) {
                if ($(i).is(e)) return i;
                var n = $(i).find(e).eq(0);
                return 1 === n.length ? n[0] : void 0
            })
        },
        findAll: function(e) {
            return this.find(e).addBack(e)
        }
    }),
    function($) {
        function e(e, i) {
            var n = "width" === i ? "scrollLeft" : "scrollTop",
                o = "width" === i ? "innerWidth" : "innerHeight",
                a = t[n](),
                r = t[o]();
            return (e - a) / r
        }
        var t = $(window);
        $.extend({
            adjustCoordinates: function(t) {
                var i = {};
                return $.isFunction || console.error(
                        "RelativeMouse: you didn't supply a function"
                    ),
                    function(n) {
                        i.viewportX = e(n.pageX, "width"), i.viewportY =
                            e(n.pageY, "height"), i.originalX = n.pageX,
                            i.originalY = n.pageY, t(i, n)
                    }
            }
        })
    }(jQuery),
    function() {
        function e() {
            i = !1, o = !1
        }

        function t() {
            a = !1, n = !1
        }
        var i = !1,
            n = !1,
            o = !1,
            a = !1,
            r = 0,
            s = 0,
            l = 1280,
            c = 500,
            d = $.fn.scrollTop,
            u = $.fn.scrollLeft,
            h = $.fn.innerWidth,
            p = $.fn.innerHeight;
        $.fn.scrollTop = function(e) {
            return this[0] !== window ? d.call(this, e) : "undefined" ==
                typeof e ? (i || (r = d.call(this), i = !0), r) : (r = e, d
                    .call(this, e))
        }, $.fn.scrollLeft = function(e) {
            return this[0] !== window ? u.call(this, e) : "undefined" ==
                typeof e ? (o || (s = u.call(this), o = !0), s) : (s = e, u
                    .call(this, e))
        }, $.fn.innerWidth = function() {
            return this[0] !== window ? h.call(this) : (a || (l = h.call(
                this), a = !0), l)
        }, $.fn.innerHeight = function() {
            return this[0] !== window ? p.call(this) : (n || (c = p.call(
                this), n = !0), c)
        }, $(window).on("scroll.coordinates-cache", e), $(window).on(
            "resize.coordinates-cache", t)
    }(),
    function() {
        function e(e) {
            return $(e).offset().top
        }

        function t(t) {
            TweenLite.set(t, {
                transform: "none"
            });
            var i = e(t);
            return TweenLite.set(t, {
                clearProps: "all"
            }), i
        }

        function i() {
            cancelAnimationFrame(u), u = requestAnimationFrame(n)
        }

        function n() {
            for (var e = d.scrollTop(), t, i, n, o, a, s = c.length - 1; s >=
                0; s--) i = c[s], n = i.position || i.getOffset(i.$), t = e +
                windowHeight * (i.activationPercent / 100), i.height && (n +=
                    i.height), o = ">" === i.operator && n > t, a = "<" ===
                i.operator && t > n, !o && !a || i.isActive || (i.$.trigger(
                        "viewport" + i.operator + i.activationPercent), i.times--,
                    0 === i.times && c.splice(s, 1)), i.isActive = o || a;
            0 === c.length && r()
        }

        function o() {
            windowHeight = d.innerHeight(), i()
        }

        function a() {
            r(), d.on("scroll.watch-viewport", i), d.on(
                "resize.watch-viewport", o)
        }

        function r() {
            d.off(".watch-viewport")
        }

        function s() {
            c.length = 0, r()
        }

        function l(e) {
            $("<div>").css({
                position: "absolute",
                width: "100%",
                height: 1,
                color: "white",
                background: "black",
                top: e
            }).appendTo("body")
        }
        jQuery.fn.watchViewport = function(n) {
            if (n === !1) return s();
            var r = {
                condition: "<100",
                isElementPositionStatic: !0,
                times: 1,
                getOffset: "standard"
            };
            "string" == typeof n && (n = {
                condition: n
            }), n = $.extend(r, n);
            var l = 0 === c.length,
                d = n.condition.match(/[<>]/);
            if ("undefined" == typeof d.length || d.length > 1) return void console
                .error("Wrong condition");
            d = d[0];
            var u = n.condition.split(d);
            n.activationPercent = +u[1], n.considerBottomPosition =
                "bottom" === u[0];
            var h = this;
            return h.each(function() {
                var i = {
                    $: $(this),
                    times: n.times,
                    activationPercent: n.activationPercent,
                    operator: d,
                    isActive: !1
                };
                i.getOffset = $.isFunction(n.getOffset) ? n.getOffset :
                    "untransformed" === n.getOffset ? t : e, n.isElementPositionStatic &&
                    (i.position = i.getOffset(i.$)), n.considerBottomPosition &&
                    (i.height = i.$.height()), c.push(i)
            }), l ? (a(), o()) : i(), h
        };
        var c = [],
            d = $(window),
            u
    }(),
    function() {
        function e(e, t, i) {
            return Math.max(t, Math.min(i, e))
        }

        function t() {
            for (var t = s.scrollTop(), i = t + d, n, o, a, l, c, u = r.length -
                1; u >= 0; u--) n = r[u], o = n.position || n.$.offset().top,
                a = n.height || n.$.height(), l = (i - o) / (d + a), c = e(
                    l, n.bottomLimit, n.topLimit),
                relativeConstrainedViewportPosition = 1 - (c - n.topLimit) /
                n.distance, n.lastViewportPosition !== c && (n.functionToCall
                    .call(n.$[0], relativeConstrainedViewportPosition, c),
                    n.lastViewportPosition = c)
        }

        function i() {
            s.on("scroll.viewport-position", function() {
                cancelAnimationFrame(c), c = requestAnimationFrame(
                    t)
            }), s.on("resize.viewport-position", o), $pu(n)
        }

        function n() {
            r.length = 0, s.off(".viewport-position")
        }

        function o() {
            d = s.innerHeight(), t()
        }

        function a(e) {
            $("<div>").css({
                position: "absolute",
                width: "100%",
                height: 1,
                color: "white",
                background: "black",
                top: e
            }).appendTo("body")
        }
        jQuery.fn.viewportPosition = function(e, t, n, a) {
            if (!$.isFunction(e)) return console.error(
                "ViewportPosition: function not supplied"), s;
            $.isNumeric(t) || (t = 0), $.isNumeric(n) || (n = 1), "boolean" !=
                typeof a && (a = !0), 0 === r.length && i();
            var s = this;
            return s.each(function() {
                var i = {
                    $: $(this),
                    bottomLimit: t,
                    topLimit: n,
                    distance: t - n,
                    lastViewportPosition: null,
                    functionToCall: e
                };
                a && (i.position = i.$.offset().top, i.height = i.$
                    .height()), r.push(i)
            }), o(), s
        };
        var r = [],
            s = $(window),
            l, c, d
    }(),
    function() {
        function e() {
            n(), s.on("scroll.position-callback resize.position-callback",
                n), $pu(t)
        }

        function t() {
            r.length = 0, s.off(".position-callback")
        }

        function i() {
            return r.length > 0
        }

        function n() {
            cancelAnimationFrame(l), l = requestAnimationFrame(o)
        }

        function o() {
            function e(e) {
                return i + n * (e / 100)
            }
            for (var i = s.scrollTop(), n = s.innerHeight(), o, a, l, c = r
                .length - 1; c >= 0; c--) o = r[c], a = o.position || o.getOffset(
                    o.$), l = {
                    top: a,
                    bottom: a + o.height
                }, o.isActive = o.callback(l, e), o.isActive !== o.wasActive &&
                (o.$.triggerHandler(o.eventName + (o.isActive ? "-on" :
                    "-off")), o.times--, 0 === o.times && r.splice(c, 1)),
                o.wasActive = o.isActive;
            0 === r.length && t()
        }
        var a = jQuery._positionCallback = {};
        jQuery.fn.extend({
            positionCallback: function(n) {
                if (n === !1) return t(), this;
                var o = {
                    eventName: "position-callback",
                    isElementPositionStatic: !0,
                    times: -1,
                    getOffset: "standard"
                };
                if (n = $.extend(o, n), !$.isFunction(n.callback))
                    return void console.error(
                        "No callback provided");
                i() || e();
                var s = this;
                return s.each(function() {
                    var e = $(this),
                        t = {
                            $: e,
                            times: n.times,
                            isActive: !1,
                            wasActive: !1,
                            height: e.height(),
                            callback: n.callback,
                            eventName: n.eventName
                        };
                    t.getOffset = $.isFunction(n.getOffset) ?
                        n.getOffset : "untransformed" === n
                        .getOffset ? a.getUntransformedOffset :
                        a.getStandardOffset, n.isElementPositionStatic &&
                        (t.position = t.getOffset(t.$), t.$
                            .data("_position-callback", t)),
                        r.push(t)
                }), s
            }
        });
        var r = [],
            s = $(window),
            l;
        a.getStandardOffset = function(e) {
            return $(e).offset().top
        }, a.getUntransformedOffset = function(e) {
            TweenLite.set(e, {
                transform: "none"
            });
            var t = a.getStandardOffset(e);
            return TweenLite.set(e, {
                clearProps: "all"
            }), t
        }, a.debugPosition = function(e, t) {
            return $("<div>").css({
                position: "absolute",
                width: "100%",
                height: t || 1,
                color: "white",
                background: "rgba(0,0,0,0.1)",
                top: e
            }).appendTo("body")
        }
    }(),
    function($) {
        function e() {
            this.removeEventListener("touchmove", t), this.removeEventListener(
                "touchend", e), s = !1
        }

        function t(t) {
            if ($.detectSwipe.preventDefault && t.preventDefault(), s) {
                var i = t.touches[0].pageX,
                    n = t.touches[0].pageY,
                    o = a - i,
                    l = r - n,
                    c;
                Math.abs(o) >= $.detectSwipe.threshold ? c = o > 0 ? "left" :
                    "right" : Math.abs(l) >= $.detectSwipe.threshold && (c =
                        l > 0 ? "down" : "up"), c && (e.call(this), $(this)
                        .trigger("swipe", c).trigger("swipe" + c))
            }
        }

        function i(i) {
            1 == i.touches.length && (a = i.touches[0].pageX, r = i.touches[
                0].pageY, s = !0, this.addEventListener("touchmove",
                t, !1), this.addEventListener("touchend", e, !1))
        }

        function n() {
            this.addEventListener && this.addEventListener("touchstart", i, !
                1)
        }

        function o() {
            this.removeEventListener("touchstart", i)
        }
        $.detectSwipe = {
            version: "2.1.1",
            enabled: "ontouchstart" in document.documentElement,
            preventDefault: !0,
            threshold: 20
        };
        var a, r, s = !1;
        $.event.special.swipe = {
            setup: n
        }, $.each(["left", "up", "down", "right"], function() {
            $.event.special["swipe" + this] = {
                setup: function() {
                    $(this).on("swipe", $.noop)
                }
            }
        })
    }(jQuery), $(document).on("mouseup", "a", function() {
        this.blur()
    }), $("#ie8").length && $(function() {
        $(".nav li:last-child").addClass("ie-last-child")
    }), "undefined" == typeof console && (console = {}, console.log = console.error =
        console.info = console.debug = console.warn = console.trace = console.dir =
        console.dirxml = console.group = console.groupEnd = console.time =
        console.timeEnd = console.assert = console.profile = function() {}),
    console.log("Hello there, fellow developer!"), Array.prototype.filter || (
        Array.prototype.filter = function e(t) {
            var i = toObject(this),
                n = splitString && "[object String]" == _toString(this) ? this.split(
                    "") : i,
                o = n.length >>> 0,
                a = [],
                r, s = arguments[1];
            if ("[object Function]" != _toString(t)) throw new TypeError(t +
                " is not a function");
            for (var l = 0; o > l; l++) l in n && (r = n[l], t.call(s, r, l, i) &&
                a.push(r));
            return a
        }),
    function() {
        var e = "somethingtester";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !
                0
        } catch (t) {
            console.warn("No sessionStorage available");
            var i = function() {};
            return sessionStorage = {
                setItem: i,
                removeItem: i,
                getItem: i
            }, !1
        }
    }(),
    function() {
        "use strict";

        function e(e) {
            var t = o;
            return o++, a[t] = e, c++, null === s && (s = window.setTimeout(
                n, Math.max(0, 16 - ((new Date).getTime() - l)))), t
        }

        function t(e) {
            e >= d && a.hasOwnProperty(e) ? i(a, e) : r.hasOwnProperty(e) &&
                i(r, e)
        }

        function i(e, t) {
            delete e[t], c--, 1 > c && null !== s && (window.clearTimeout(s),
                s = null)
        }

        function n() {
            var e, t;
            s = null, l = (new Date).getTime(), r = a, a = {}, d = o;
            for (e in r)
                if (r.hasOwnProperty(e)) {
                    t = r[e], delete r[e], c--;
                    try {
                        t(l)
                    } catch (i) {}
                }
        }
        var o = 0,
            a = {},
            r = {},
            s = null,
            l = 0,
            c = 0,
            d = 0,
            u = window,
            h, p = "AnimationFrame",
            f = "cancel" + p,
            m = "request" + p,
            g = ["webkitCancel", "webkitCancelRequest", "mozCancel"],
            v = ["webkitRequest", "webkitRequest", "mozRequest"];
        for (h = 0; !u[f] && h < g.length; h++) u[f] = u[g[h] + p], u[m] = u[v[
            h] + p];
        u[f] || (u[f] = t, u[m] = e)
    }(), jQuery.fn.extend({
        videoFromPlaceholder: function(e) {
            var t = {
                width: 959,
                height: 540,
                html5: !0,
                wmode: isIE ? "opaque" : !1,
                onload: !1
            };
            return e = $.extend(t, e), this.each(function() {
                var t = $(this),
                    i = t.data("youtube-id");
                if (i) {
                    var n = getYoutubeEmbed(i, e);
                    t.empty().append(n), t.is(":hidden") && (t.css({
                        left: -1e4
                    }).show(), n.on("load", function() {
                        t.css({
                            left: ""
                        }).hide()
                    })), $.isFunction(e.onload) && n.on(
                        "load", e.onload)
                }
            }), this
        }
    });
var YT_ready = function() {
    var e = [],
        t = !1;
    return function(i, n) {
        if (i === !0)
            for (t = !0; e.length;) e.shift()();
        else "function" == typeof i && (t ? setTimeout(i, 0) : e[n ?
            "unshift" : "push"](i))
    }
}();
! function() {
    var e = document.createElement("script");
    e.src = ("https:" == location.protocol ? "https" : "http") +
        "://www.youtube.com/player_api";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
}(),
function() {
    function e() {
        var e = document.body.offsetHeight;
        switch (document.location.pathname) {
            case "/hall-of-famers":
                e += 300
        }
        self.parent.postMessage('{ "contentHeight": ' + e + " }", "*")
    }
    self !== top && self.parent && self.parent.postMessage && ($pl(e), $(window)
        .on("scroll-to-top", e))
}(),
function() {
    function e(e) {
        try {
            var i = JSON.parse(e.data);
            "undefined" != typeof i.scrollPosition ? (t = i.scrollPosition -
                    o, $(window).triggerHandler("scroll")) : "undefined" !=
                typeof i.height && (n = i.height, $(window).triggerHandler(
                    "resize"))
        } catch (a) {
            console.warn("Invalid message from container:", e.data)
        }
    }
    var t = 0,
        i = 0,
        n = 700,
        o = 275;
    if (self !== top) {
        window.addEventListener("message", e, !1);
        var a = $.fn.scrollTop;
        $.fn.scrollTop = function() {
            return 0 === arguments.length ? this[0] === window ? t : a.call(
                this) : this
        };
        var r = $.fn.scrollLeft;
        $.fn.scrollLeft = function() {
            return 0 === arguments.length ? this[0] === window ? i : r.call(
                this) : this
        };
        var s = $.fn.innerHeight;
        $.fn.innerHeight = function() {
            return 0 === arguments.length ? this[0] === window ? n : s.call(
                this) : this
        }
    }
}(),
function(e, t) {
    var i =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    e.fn.imagesLoaded = function(n) {
        function o() {
            var t = e(h),
                i = e(p);
            l && (p.length ? l.reject(d, t, i) : l.resolve(d)), e.isFunction(
                n) && n.call(s, d, t, i)
        }

        function a(e) {
            r(e.target, "error" === e.type)
        }

        function r(t, n) {
            t.src === i || -1 !== e.inArray(t, u) || (u.push(t), n ? p.push(
                    t) : h.push(t), e.data(t, "imagesLoaded", {
                    isBroken: n,
                    src: t.src
                }), c && l.notifyWith(e(t), [n, d, e(h), e(p)]), d.length ===
                u.length && (setTimeout(o), d.unbind(
                    ".imagesLoaded", a)))
        }
        var s = this,
            l = e.isFunction(e.Deferred) ? e.Deferred() : 0,
            c = e.isFunction(l.notify),
            d = s.find("img").add(s.filter("img")),
            u = [],
            h = [],
            p = [];
        return e.isPlainObject(n) && e.each(n, function(e, t) {
                "callback" === e ? n = t : l && l[e](t)
            }), d.length ? d.bind("load.imagesLoaded error.imagesLoaded", a)
            .each(function(n, o) {
                var a = o.src,
                    s = e.data(o, "imagesLoaded");
                s && s.src === a ? r(o, s.isBroken) : o.complete && o.naturalWidth !==
                    t ? r(o, 0 === o.naturalWidth || 0 === o.naturalHeight) :
                    (o.readyState || o.complete) && (o.src = i, o.src =
                        a)
            }) : o(), l ? l.promise(s) : s
    }
}(jQuery),
function() {
    function e(e, i) {
        function n(e, n) {
            t("showing slide");
            var o = $(n),
                a = $(e),
                r = $.Deferred();
            a.trigger("carousel-hiding-slide"), o.trigger(
                "carousel-showing-slide"), i.displayFunction(u, a,
                o, h, r), r.done(function() {
                a.trigger("carousel-slide-hidden"), o.trigger(
                    "carousel-slide-shown"), t(
                    "slide shown")
            })
        }

        function o(e, t) {
            m && (p.eq(e).removeClass("current"), p.eq(t).addClass(
                "current"))
        }

        function a(e) {
            w && (g.add(v).css({
                visibility: ""
            }), e >= S - 1 ? g.css({
                visibility: "hidden"
            }) : 0 >= e && v.css({
                visibility: "hidden"
            }))
        }

        function r(e) {
            var i = s(x + 1);
            t("automatically changing to slide", i), c.setSlide(i)
        }

        function s(e) {
            return (S + e % S) % S
        }
        var l = {
            slidesContainer: !0,
            slides: ".slide",
            controlsContainer: "",
            controlElement: '<button type="button">%n</button>',
            navContainer: "",
            navPrevElement: '<button type="button">&lt;</button>',
            navNextElement: '<button type="button">&gt;</button>',
            displayFunction: function(e, t, i, n, o) {
                $(t).hide(), $(i).show(), o.resolve()
            },
            displayTime: 0
        };
        i = $.extend(l, i);
        var c = this,
            d = $(e),
            u = d.find(i.slides),
            h;
        h = i.slidesContainer === !0 ? d : d.find(i.slidesContainer);
        var p, f, m = i.controlsContainer.length > 0;
        m && (f = d.find(i.controlsContainer));
        var g, v, y, w = i.navContainer.length > 0;
        w && (y = d.find(i.navContainer));
        var b, x, S = u.length,
            T, _ = !1;
        if (!(u.length <= 1)) {
            if (d.on(
                "carousel-hiding-slide carousel-showing-slide carousel-slide-hidden carousel-slide-shown",
                function(e) {
                    e.stopPropagation()
                }), c.setSlide = function(e) {
                if (e !== x) {
                    o(x, e), a(e);
                    var t = u.eq(e),
                        i = b;
                    n(i, t), x = e, b = t
                }
            }, c.prevSlide = function() {
                var e = x - 1;
                e >= 0 && c.setSlide(e)
            }, c.nextSlide = function() {
                var e = x + 1;
                S - 1 >= e && c.setSlide(e)
            }, c.startCycle = function(e) {
                e > 0 ? (T = setInterval(r, e, e), t("cycle enabled"),
                    _ = !0) : (_ = !1, t("cycle not enabled"))
            }, c.stopCycle = function(e) {
                clearInterval(T), _ && t("cycle disabled")
            }, d.on("carousel-next-slide", c.nextSlide), d.on(
                "carousel-prev-slide", c.prevSlide), m) {
                for (var k = "", P = u.length - 1; P >= 0; P--) k = i.controlElement
                    .replace(/%n/g, P + 1) + k;
                p = $($.parseHTML(k)), p.each(function(e) {
                    $(this).on("click", function() {
                        c.stopCycle(), c.setSlide(e)
                    })
                }), p.appendTo(f)
            }
            w && (v = $($.parseHTML(i.navPrevElement)), g = $($.parseHTML(i
                    .navNextElement)), v.on("click.carousel", function() {
                    c.stopCycle(), c.prevSlide()
                }), g.on("click.carousel", function() {
                    c.stopCycle(), c.nextSlide()
                }), y.append(v, g)), u.hide(), d.addClass("carousel--ready"),
                c.startCycle(i.displayTime), c.setSlide(0), d.on(
                    "carousel-stop-cycle", c.stopCycle), d.on(
                    "carousel-start-cycle", c.startCycle)
        }
    }
    var t = function() {},
        i = !1;
    i && (t = Function.prototype.bind.call(console.log, console, "Carousel:")),
        jQuery.fn.extend({
            carousel: function(t) {
                return this.each(function() {
                    new e(this, t)
                }), this
            }
        })
}(),
function() {
    function e(e, t, i, n, o) {
        var a = $(e),
            r = $(i),
            s = $(t),
            l = s.find("iframe").data("youtube-api"),
            c = r.find("iframe").data("youtube-api"),
            d = r.data("title"),
            u = $();
        d && (d = $(
            '<p id="homepage-status-message" class="inline padded--half">'
        ).text(d), u = $("#homepage-status-message"), u.css({
            position: "absolute",
            top: u.position().top,
            left: u.position().left
        }), u.removeAttr("id"), d.insertAfter(u));
        var h = new TimelineLite;
        h.call(function() {
            r.data("timeline", h);
            var e = s.data("timeline");
            e && e.progress(1), s.css({
                zIndex: 1
            }), r.css({
                display: "block",
                left: "",
                zIndex: 2
            })
        }).set(n, {
            perspective: 300
        }).set(r, {
            transformOrigin: "50% -100%"
        }).from(r, 1, {
            autoAlpha: 0,
            rotationX: 3,
            ease: Quint.easeOut
        }).to(u, 1, {
            autoAlpha: 0,
            y: 20
        }, 0).from(d, 1, {
            autoAlpha: 0
        }, 0).call(function() {
            u.remove(), s.hide(), l && $.isFunction(l.pauseVideo) ?
                l.pauseVideo() : s.videoFromPlaceholder(), o.resolve()
        }), 0 === s.length && h.progress(1)
    }
    $pl(function(t) {
        var i = t(".carousel").carousel({
            slidesContainer: ".carousel__slides",
            slides: ".carousel__slide",
            controlsContainer: ".carousel__controls",
            controlElement: '<button type="button" class="carousel__button" title="Slide %n"></button>',
            displayFunction: e,
            displayTime: 9e3
        });
        i.find(".carousel__controls").on("click.slide-change", function() {
            omni.sendId("homeHeroSlideIndicator")
        }), $pu(function() {
            i.trigger("carousel-stop-cycle")
        }), console.log(1), $.detectSwipe.preventDefault = !1, i.on(
            "swipeleft", function() {
                bfrUtils.canItScroll("width", window, !0) || $(this)
                    .trigger("carousel-next-slide")
            }), i.on("swiperight", function() {
            bfrUtils.canItScroll("width", window, !0) || $(this)
                .trigger("carousel-prev-slide")
        })
    })
}(),
function($) {
    $.fn.imageLens = function(e) {
        var t = {
                lensSize: 134,
                borderSize: 14,
                borderColor: "#494f55",
                backgroundColor: "#f5efd8",
                rotate: -45
            },
            e = $.extend(t, e),
            i = "background-position: 0px 0px;width: " + 2 * String(e.lensSize) +
            "px;height: " + 2 * String(e.lensSize) +
            "px;float: left;display: none; margin-top:" + -(e.lensSize / 2) +
            "px; margin-left:" + -(String(e.lensSize) / 2) +
            "px;;background-repeat: no-repeat;";
        return this.each(function() {
            function t() {
                TweenLite.killTweensOf(c), TweenLite.killTweensOf(
                    l), TweenLite.fromTo(c, 2, {
                    backgroundPosition: "-262px -66px",
                    ease: Expo.easeOut
                }, {
                    backgroundPosition: "-572px -66px",
                    ease: Expo.easeOut
                }), TweenLite.fromTo(l, 2, {
                    x: 20,
                    y: 75,
                    ease: Expo.easeOut
                }, {
                    x: 330,
                    y: 75,
                    ease: Expo.easeOut
                })
            }

            function n() {
                c.hide(), l.hide()
            }

            function o(e) {
                TweenLite.killTweensOf(c), TweenLite.killTweensOf(
                    l), TweenLite.to(c, .25, {
                    backgroundPosition: "-572px -66px",
                    ease: Expo.easeOut
                }), TweenLite.to(l, .25, {
                    x: 330,
                    y: 75,
                    ease: Expo.easeOut,
                    onComplete: function() {
                        b = !1
                    }
                })
            }

            function a(e) {
                var t = r.offset(),
                    i = parseInt(e.pageX - t.left),
                    n = parseInt(e.pageY - t.top);
                0 > i || 0 > n || i > y || n > w || (i = String(-
                    1 * ((e.pageX - t.left) * h - f / 2)
                ), n = String(-1 * ((e.pageY - t.top) *
                    p - m / 2)), TweenLite.to(c, b ? 0 :
                    .15, {
                        backgroundPosition: i + "px " +
                            n + "px"
                    }), i = String(e.pageX - t.left -
                    15 - g / 2), n = String(e.pageY - t
                    .top - 15 - v / 2), TweenLite.to(l,
                    b ? 0 : .15, {
                        x: i,
                        y: n,
                        onComplete: function() {
                            b = !0
                        }
                    }))
            }
            var r = $(this),
                s = "<div style='background:" + String(e.backgroundColor) +
                ";overflow:hidden;position:absolute;top:0;border: " +
                String(e.borderSize) + "px solid " + e.borderColor +
                ";width: " + String(e.lensSize) + "px;height: " +
                String(e.lensSize) + "px;'></div>",
                l = $(s).prependTo($(this).parent()),
                c = $("<div style='" + i + "' class='" + e.lensCss +
                    "'></div>").appendTo(l);
            TweenLite.set(l, {
                rotation: e.rotate
            }), TweenLite.set(c, {
                rotation: -e.rotate
            });
            var d = e.imageSrc ? e.imageSrc : $(this).attr("src"),
                u = new Image;
            u.src = d;
            var h = 0,
                p = 0,
                f = c.width(),
                m = c.height(),
                g = l.width(),
                v = l.height(),
                y = r.width(),
                w = r.height(),
                b = !1;
            $(u).imagesLoaded(function() {
                    var e = $(this)[0];
                    h = e.width / r.width(), p = e.height / r.height()
                }), c.css({
                    backgroundImage: "url('" + d + "')"
                }), c.mousemove(a), $(this).mousemove(a), c.show(),
                l.show(), o(), r.closest(".tl__event").one(
                    "viewport<75", t), TweenLite.set(c, {
                    backgroundPosition: "-262px -66px"
                }), TweenLite.set(l, {
                    x: 20,
                    y: 75
                })
        })
    }
}(jQuery);
var timelineIn = new FunctionSwitch;
! function() {
    function e(e, t) {
        var i = e.$el,
            n = +e.condition.substr(1),
            o = i.find(".tl__mark");
        if (1 === o.length) var a = jQuery._positionCallback.getStandardOffset(
            o);
        i.positionCallback({
            eventName: "inside",
            getOffset: e.getOffset,
            callback: function(e, t) {
                var i = this;
                a && (e.top = a);
                var o = e.bottom > t(20) && e.top < t(n);
                return o
            }
        }), i.on("inside-on", function() {
            t.play()
        }), i.positionCallback({
            eventName: "outside",
            getOffset: e.getOffset,
            callback: function(e, t) {
                var i = this;
                a && (e.top = a);
                var n = e.bottom < t(-20) || e.top > t(120);
                return n
            }
        }), i.on("outside-on", function() {
            t.pause(0)
        })
    }

    function t(t, i) {
        "undefined" != typeof wildlifeRepeat && wildlifeRepeat === !0 && t.$el
            .click(function(e) {
                (2 === e.which || e.altKey) && (t.originalSpeed && i.timeScale(
                    t.originalSpeed), e.shiftKey && (t.originalSpeed =
                    t.originalSpeed || i.timeScale(), i.timeScale(t
                        .originalSpeed / 3)), i.restart(), e.preventDefault())
            });
        var n = t.$el.find(".js-omni-track-visibility");
        e(t, i), i.eventCallback("onComplete", function() {
            t.deferred.resolve(), n.length && "undefined" != typeof omniCustom &&
                omniCustom.trackElement(n)
        }), $pu(function() {
            i.kill()
        })
    }

    function i(e, t) {
        var n = e.children();
        switch (n.length) {
            case 0:
                return e;
            case 1:
                return t-- ? i(n, t) : !1
        }
        return n
    }

    function n(e, t) {
        function i() {
            h && (d.render(c), requestAnimationFrame(i))
        }

        function n() {
            u = !0, e.append(d.view);
            for (var i = [], n = [], a = PIXI.Texture.fromImage(
                "/assets/timeline/ani-data/dualthreat_runningback.png"
            ), r = PIXI.Texture.fromImage(
                "/assets/timeline/ani-data/dualthreat_quarterback.png"
            ), s, l = 0; 3 > l; l++) s = new PIXI.Sprite(a), s.position
                .x = 520 - 100 * l, s.position.y = 20, s.alpha = .5, c.addChild(
                    s), i.push(s), s = new PIXI.Sprite(r), s.position.x =
                60 + 100 * l, s.position.y = 10, s.alpha = .3, c.addChild(
                    s), n.push(s);
            var h = new PIXI.Spine(
                "/assets/timeline/ani-data/dualthreat_rb_ani.json");
            h.position.x = 370, h.position.y = 395, h.state.setAnimationByName(
                "idle", !0), c.addChild(h);
            var p = new PIXI.Spine(
                "/assets/timeline/ani-data/dualthreat_qb_ani.json");
            p.position.x = 500, p.position.y = 390, p.state.setAnimationByName(
                "idle", !0), c.addChild(p), t.call(o.play), t.addLabel(
                "qb", 0), t.from(p, .1, {
                alpha: 0,
                ease: Quad.easeOut
            }, "qb"), t.from(p.position, 2, {
                x: 150,
                ease: Quint.easeOut
            }, "qb"), t.staggerFrom(n, .5, {
                alpha: 0,
                ease: Quint.easeOut
            }, .1, "qb+=0.2"), t.staggerTo(n, .5, {
                alpha: 0,
                ease: Quint.easeIn
            }, .1, "qb+=1.2"), t.addLabel("rb", 1.6), t.from(h, .1, {
                alpha: 0,
                ease: Quad.easeOut
            }, "rb"), t.from(h.position, 1.4, {
                x: 700,
                ease: Quad.easeOut
            }, "rb"), t.staggerFrom(i, .5, {
                alpha: 0,
                ease: Quint.easeOut
            }, .2, "rb+=0.2"), t.staggerTo(i, .5, {
                alpha: 0,
                ease: Quint.easeIn
            }, .2, "rb+=1.2"), t.from(e.siblings(
                ".tl__event-diamond--video"), .4, {
                scale: 0,
                ease: Back.easeOut
            }, "-=0.5"), $pu(o.kill)
        }
        var o = this,
            a = 800,
            r = 430,
            s = ["/assets/timeline/ani-data/dualthreat_qb.json",
                "/assets/timeline/ani-data/dualthreat_qb_ani.json",
                "/assets/timeline/ani-data/dualthreat_rb.json",
                "/assets/timeline/ani-data/dualthreat_rb_ani.json",
                "/assets/timeline/ani-data/dualthreat_runningback.png",
                "/assets/timeline/ani-data/dualthreat_qb.png"
            ],
            l = new PIXI.AssetLoader(s);
        l.onComplete = n, l.load();
        var c = new PIXI.Stage(0, !1),
            d = new PIXI.CanvasRenderer(a, r, null, !0),
            u = !1,
            h = !1;
        e.empty(), o.play = function() {
            h || (h = !0, i())
        }, o.pause = function(e) {
            "string" != typeof e && "int" != typeof e && (e = null), h = !
                1, t.pause(e)
        }, o.kill = function() {
            o.pause();
            for (var t = c.children.length - 1; t >= 0; t--) {
                var i = c.children[t];
                c.removeChild(i)
            }
            e.empty()
        }
    }

    function o(e) {
        function t() {
            --I ? (g.globalAlpha = 1, g.setTransform(1, 0, 0, 1, 0, 0),
                g.clearRect(0, 0, m.width, m.height), v.update(), v
                .draw(), requestAnimationFrame(t)) : isPlaying = !1
        }

        function i(e, t) {
            var i = document.createElement("canvas"),
                n = i.getContext("2d");
            return e && (i.width = e), t && (i.height = t), {
                el: i,
                ctx: n
            }
        }

        function n(e) {
            var t = i(e.width, e.height);
            return t.ctx.drawImage(e, 0, 0, e.width, e.height), t
        }
        var o = 4,
            a = 10,
            r = 0,
            s = !1,
            l = !1,
            c = 100,
            d = !0,
            u = 20,
            h = Math.ceil(226 / u),
            p = Math.ceil(410 / u),
            f = 6e3,
            m, g, v, y, w, b, x, S, T = function(e, t) {
                this.x = e, this.y = t, this.px = e, this.py = t, this.vx =
                    0, this.vy = 0, this.pin_x = null, this.pin_y = null,
                    this.constraints = []
            };
        T.prototype.update = function(e) {
            this.add_force(0, c), e *= e, nx = this.x + .99 * (this.x -
                    this.px) + this.vx / 2 * e, ny = this.y + .99 * (
                    this.y - this.py) + this.vy / 2 * e, this.px = this
                .x, this.py = this.y, this.x = nx, this.y = ny, this.vy =
                this.vx = 0
        }, T.prototype.draw = function() {
            if (!(this.constraints.length <= 0))
                for (var e = this.constraints.length; e--;) this.constraints[
                    e].draw()
        }, T.prototype.resolve_constraints = function() {
            if (null != this.pin_x && null != this.pin_y) return this.x =
                this.pin_x, void(this.y = this.pin_y);
            for (var e = this.constraints.length; e--;) this.constraints[
                e].resolve();
            this.x > x ? this.x = 2 * x - this.x : this.x < 1 && (this.x =
                    2 - this.x), this.y > S ? this.y = 2 * S - this.y :
                this.y < 1 && (this.y = 2 - this.y)
        }, T.prototype.attach = function(e) {
            this.constraints.push(new _(this, e))
        }, T.prototype.remove_constraint = function(e) {
            for (var t = this.constraints.length; t--;) this.constraints[
                t] == e && this.constraints.splice(t, 1)
        }, T.prototype.add_force = function(e, t) {
            this.vx += e, this.vy += t
        }, T.prototype.pin = function(e, t) {
            this.pin_x = e, this.pin_y = t
        };
        var _ = function(e, t) {
            this.p1 = e, this.p2 = t, this.length = u
        };
        _.prototype.resolve = function() {
            var e = this.p1.x - this.p2.x,
                t = this.p1.y - this.p2.y,
                i = Math.sqrt(e * e + t * t),
                n = (this.length - i) / i;
            i > f && this.p1.remove_constraint(this);
            var o = e * n * .5,
                a = t * n * .5;
            this.p1.x += o, this.p1.y += a, this.p2.x -= o, this.p2.y -=
                a
        }, _.prototype.draw = function() {
            g.moveTo(this.p1.x, this.p1.y), g.lineTo(this.p2.x, this.p2
                .y)
        };
        var k = function() {
            this.points = [], this.patches = [];
            for (var e = m.width / 2 - h * u / 2, t = 0; p >= t; t++)
                for (var i = 0; h >= i; i++) {
                    var n = new T(e + i * u, r + t * u);
                    0 !== i && n.attach(this.points[this.points.length -
                            1]), 0 === t && n.pin(n.x, n.y), 0 !== t &&
                        n.attach(this.points[i + (t - 1) * (h + 1)]),
                        this.points.push(n), i !== h && t !== p && (
                            this.patches[i] = this.patches[i] || [],
                            this.patches[i][t] = {}, this.patches[i][t]
                            .tl = n), i > 0 && t !== p && (this.patches[
                            i - 1][t].tr = n), t > 0 && i !== h && (
                            this.patches[i][t - 1].bl = n), i > 0 && t >
                        0 && (this.patches[i - 1][t - 1].br = n)
                }
            for (var o = 0; o < this.points.length; o++) this.points[o]
                .py -= Math.pow(this.points[o].py / 190, 6), this.points[
                    o].y -= Math.pow(this.points[o].y / 190, 6), this.points[
                    o].px -= Math.pow(this.points[o].py / 150, 6), this
                .points[o].x -= Math.pow(this.points[o].y / 150, 6);
            console.log(this.patches)
        };
        k.prototype.update = function() {
            for (var e = o; e--;)
                for (var t = this.points.length; t--;) this.points[t].resolve_constraints();
            for (e = this.points.length; e--;) this.points[e].update(a /
                100)
        }, k.prototype.draw = function() {
            for (var e, t, i, n, o = 0; p > o; o++)
                for (var a = 0; h > a; a++) e = v.patches[a][o], (e.tl.constraints
                        .length || !(a > 0 || o > 0)) && e.bl.constraints
                    .length && e.tr.constraints.length && e.br.constraints
                    .length && (g.setTransform(1, 0, 0, 1, 0, 0), t = [
                            (e.tr.x - e.tl.x) / u, (e.tr.y - e.tl.y) /
                            u, (e.br.x - e.tr.x) / u, (e.bl.y - e.tl.y) /
                            u, e.tl.x, e.tl.y
                        ], g.setTransform.apply(g, t), i = Math.max(
                            Math.abs(e.tr.x - e.tl.x), Math.abs(e.br.x -
                                e.bl.x), u), n = Math.max(Math.abs(e.bl
                                .y - e.tl.y), Math.abs(e.br.y - e.tr.y),
                            u), g.globalAlpha = 1, d ? g.drawImage(y, a *
                            u, o * u, u + 1, u + 1, 0, 0, i + 2, n + 2) :
                        (g.fillStyle = "hsl(200," + (30 + a / h * 50) +
                            "%, " + (30 + o / p * 50) + "%)", g.fillRect(
                                0, 0, i, n)), l && (g.fillStyle =
                            "hsl(200," + (30 + a / h * 50) + "%, " + (
                                30 + o / p * 50) + "%)", g.setTransform(
                                1, 0, 0, 1, 0, 0), g.fillRect(e.tl.x -
                                5, e.tl.y - 1, 10, 2), g.fillRect(e.tr.x -
                                5, e.tr.y - 1, 10, 2), g.fillRect(e.bl.x -
                                1, e.bl.y - 5, 2, 10), g.fillRect(e.br.x -
                                1, e.br.y - 5, 2, 10), g.fillStyle =
                            "hsl(0," + (30 + a / h * 50) + "%, " + (30 +
                                o / p * 50) + "%)", g.fillRect(e.tl.px -
                                5, e.tl.py - 1, 10, 2), g.fillRect(e.tr
                                .px - 5, e.tr.py - 1, 10, 2), g.fillRect(
                                e.bl.px - 1, e.bl.py - 5, 2, 10), g.fillRect(
                                e.br.px - 1, e.br.py - 5, 2, 10)));
            if (s) {
                g.setTransform(1, 0, 0, 1, 0, 0), g.beginPath();
                for (var r = v.points.length; r--;) v.points[r].draw();
                g.stroke()
            }
        };
        var P, I = 0;
        m = document.getElementById("most-wins-canvas"), g = m.getContext(
                "2d"), m.width = 480, m.height = 470, x = m.width - 1, S =
            m.height - 1, b = $(m).data("wins"), y = new Image, y.src =
            "/assets/timeline/user/most-wins/cloth.png", w = new Image, w.src =
            "/assets/timeline/user/most-wins/" + b + ".png";
        var O = this;
        O.play = function() {
            v = new k, P = Date.now(), I || t(), I = 878
        }, O.stop = function() {
            g.clearRect(0, 0, m.width, m.height), I = 0
        }, e.call(O.play, null, O), e.from(m, 1, {
            opacity: 0
        }), e._pause = e.pause, e.pause = function(t, i, n, o, a) {
            O.stop(), e._pause(t, i, n, o, a)
        }, $([y, w]).imagesLoaded(function() {
            var e = n(y);
            e.ctx.drawImage(w, 60, 70), y.src = e.el.toDataURL()
        })
    }
    timelineIn.add("defaultFunction", function(e) {
        e.deferred.resolve()
    }), timelineIn.add("from-bottom", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n), n.from(i, 1, {
            y: 400,
            autoAlpha: 0,
            ease: Quint.easeOut
        }), n.from(i, 1.2, {
            scale: 0,
            ease: Back.easeOut
        }, 0), n.set(i, {
            clearProps: "all"
        })
    }), timelineIn.add("rotate-in", function(e) {
        var i = e.$el,
            n = e.tl || new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.find(".tl__mark"),
            a;
        1 === o.length && (a = i.css("transform-origin").split(" "), a[
            1] = o.position().top + "px", n.set(i, {
            transformOrigin: a.join(" ")
        })), n.from(i, 1, {
            rotationY: 30 * (e.isHingeOnLeft ? 1 : -1),
            autoAlpha: 0,
            ease: Quint.easeOut
        }), n.from(i, 1, {
            rotationX: -80,
            ease: Back.easeOut
        }, 0), n.from(i, 1, {
            y: 300,
            ease: Quint.easeOut
        }, 0), n.set(i, {
            clearProps: "all"
        })
    }), timelineIn.add("scale-in", function(e) {
        var i = e.$el,
            n = e.tl || new TimelineLite({
                paused: !0
            });
        t(e, n), n.from(i, 1, {
            scale: 0,
            ease: Quint.easeOut
        }), n.from($(".Scoreboard-diamonds-right"), 1, {
            scale: .8,
            autoAlpha: 0,
            rotation: 20,
            ease: Quint.easeOut
        }, "diamonds"), n.from($(".Scoreboard-diamonds-left"), 1, {
            scale: .8,
            autoAlpha: 0,
            rotation: -20,
            ease: Quint.easeOut
        }, "diamonds"), n.set(i, {
            clearProps: "all"
        })
    }), timelineIn.add("rotate-in--centered", function(e) {
        var i = e.$el,
            n = e.tl || new TimelineLite({
                paused: !0
            });
        t(e, n), n.from(i, .8, {
            scale: .1,
            ease: Quint.easeOut
        }, 0), n.from(i, 1, {
            rotationY: 90,
            ease: Back.easeOut
        }, 0), n.set(i, {
            clearProps: "all"
        });
        var o = i.find(".tl__event-diamond__year");
        if (o.length) {
            n.from(o, 1.5, {
                x: 100,
                ease: Back.easeOut
            }, 0), n.from(o, 1.5, {
                rotationY: 50,
                ease: Quint.easeOut
            }, 0), n.from(o, 1.5, {
                z: 100,
                ease: Bounce.easeOut,
                clearProps: "x,z,rotationY"
            }, 0);
            var a = o.find(".tl__year-line");
            n.from(a, .7, {
                width: 0,
                ease: Quint.easeIn,
                clearProps: "width"
            }, .8)
        }
        var r = i.find(".tl__event-diamond__button");
        r.length && (n.from(r, 1, {
            x: -224.5,
            y: -224.5,
            scale: 0,
            ease: Quint.easeOut
        }, 1), n.set(r, {
            clearProps: "scale, x, y"
        }))
    }), timelineIn.add("bump-in", function(e) {
        var i = e.$el,
            n = e.tl || new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.find(".tl__event-mega__content");
        n.from(o, 1, {
            scale: 1.4,
            rotationX: 30,
            autoAlpha: 0,
            ease: Back.easeOut
        }, 0), n.set(o, {
            clearProps: "all"
        })
    }), timelineIn.add("hinge-in", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n), n.delay(1), n.set(i, {
            transformOrigin: "50% 0",
            transformPerspective: 600
        }), n.from(i, 1, {
            rotationX: 90,
            ease: Bounce.easeOut
        })
    }), timelineIn.add("children-pop-in", function(e) {
        var n = e.$el,
            o = new TimelineLite({
                paused: !0
            });
        t(e, o);
        var a = i(n, 3);
        o.staggerFrom(a, 1, {
            scale: "+=0.4",
            rotationZ: "+=10",
            autoAlpha: 0,
            ease: Back.easeOut,
            clearProps: "transform,opacity,visibility"
        }, .2)
    }), timelineIn.add("diamond-rotate-z", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.children(),
            a = o.children();
        n.from(o, 1, {
            x: -250,
            scale: 0,
            ease: Quint.easeOut
        }, 0), n.from(o, 3, {
            rotationZ: "-=180",
            clearProps: "transform",
            ease: Quint.easeOut
        }, 0), n.from(a, 3, {
            rotationZ: "+=180",
            clearProps: "transform",
            ease: Quint.easeOut
        }, 0)
    }), timelineIn.add("from-left-screen", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = $(window).width(),
            a = 959;
        n.from(i, 1, {
            x: -(o - a) / 2,
            ease: Quint.easeOut
        })
    }), timelineIn.add("from-right-screen", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = $(window).width(),
            a = 959,
            r = parseInt(e.$el.css("left"), 10);
        n.from(i, 1, {
            x: a - r + (o - a) / 2,
            ease: Quint.easeOut
        })
    }), timelineIn.add("slide-from-left", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n), n.from(i, 1, {
            x: -100,
            autoAlpha: 0,
            ease: Quint.easeOut
        });
        var o = i.find(".tl__mark-line"),
            a = i.find(".tl__mark-diamond");
        n.from(o, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(a, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("slide-from-bottom", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n), n.from(i, 1, {
            y: 200,
            autoAlpha: 0,
            ease: Quint.easeOut
        })
    }), timelineIn.add("slide-in-rotating", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n), n.from(i, 1, {
            rotation: -50,
            y: 200,
            x: -50,
            autoAlpha: 0,
            ease: Quint.easeOut
        });
        var o = i.find(".tl__mark-line"),
            a = i.find(".tl__mark-diamond");
        n.from(o, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(a, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("redzone", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n), n.from(".ani_redzone", 2, {
            scale: .5,
            ease: Back.easeOut
        }, 0), n.from(".ani_redzone_greenends", .3, {
            autoAlpha: 0
        }, 0), n.from(".ani_redzone_greencenter", .3, {
            autoAlpha: 0
        }, 0), n.from(".ani_redzone_numbers", .5, {
            y: -10,
            scale: 1.5,
            autoAlpha: 0,
            ease: Back.easeOut
        }, .2), n.from(".ani_redzone_fieldgoal", .5, {
            y: 60,
            autoAlpha: 0,
            ease: Back.easeOut
        }, .3), n.from(".ani_redzone_bg", 1, {
            scale: .5,
            autoAlpha: 0,
            ease: Back.easeOut
        }, .7), n.from(".ani_redzone_redzone", 1.5, {
            height: 115,
            ease: Quad.easeOut
        }, 1), n.from(".ani_redzone_greencenter", 1.5, {
            backgroundPosition: "0 -115px",
            top: 115,
            ease: Quad.easeOut
        }, 1);
        var o = i.find(".tl__mark-line"),
            a = i.find(".tl__mark-diamond");
        n.from(o, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(a, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("offense-chart", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n), n.from(".ani_chart", 1, {
            scale: .5,
            ease: Back.easeOut
        }, 0), n.from(".ani_chart_base", 1, {
            autoAlpha: 0,
            ease: Back.easeOut
        }, 0), n.from(".ani_chart_arrowF", .3, {
            y: 20,
            x: -20,
            autoAlpha: 0,
            ease: Back.easeOut
        }, .9), n.from(".ani_chart_arrowH", .3, {
            y: 20,
            x: 10,
            autoAlpha: 0,
            ease: Back.easeOut
        }, .7), n.from(".ani_chart_arrowX", .3, {
            y: 20,
            x: -20,
            autoAlpha: 0,
            ease: Back.easeOut
        }, 1.1), n.from(".ani_chart_arrowY", .3, {
            y: 20,
            x: 20,
            autoAlpha: 0,
            ease: Back.easeOut
        }, 1.5), n.from(".ani_chart_arrowZ", .3, {
            y: 20,
            autoAlpha: 0,
            ease: Back.easeOut
        }, 1.3), n.staggerFrom(
            ".ani_chart_letterF,.ani_chart_letterH,.ani_chart_letterX,.ani_chart_letterZ,.ani_chart_letterY",
            .3, {
                scale: 1.2,
                y: 0,
                x: 0,
                autoAlpha: 0,
                ease: Back.easeOut
            }, .2, .2), n.add("follow", 1.5), n.to(
            ".ani_chart_letterF", 1, {
                delay: .4,
                bezier: {
                    type: "soft",
                    values: [{
                        x: 24,
                        y: -27
                    }, {
                        x: 60,
                        y: -18
                    }, {
                        x: 125,
                        y: -19
                    }],
                    autoRotate: !1
                },
                ease: Linear.easeNone
            }, "follow"), n.to(".ani_chart_letterH", .8, {
            delay: .2,
            bezier: {
                type: "soft",
                values: [{
                    x: -20,
                    y: -35
                }, {
                    x: -32,
                    y: -63
                }, {
                    x: -45,
                    y: -80
                }, {
                    x: -84,
                    y: -103
                }, {
                    x: -108,
                    y: -109
                }],
                autoRotate: !1
            },
            ease: Quad.easeOut
        }, "follow"), n.to(".ani_chart_letterX", 1.3, {
            delay: .6,
            bezier: {
                type: "soft",
                values: [{
                    x: 15,
                    y: -39
                }, {
                    x: 58,
                    y: -65
                }, {
                    x: 125,
                    y: -84
                }, {
                    x: 205,
                    y: -94
                }, {
                    x: 255,
                    y: -98
                }],
                autoRotate: !1
            },
            ease: Quad.easeOut
        }, "follow"), n.to(".ani_chart_letterY", 1.3, {
            delay: 1,
            bezier: {
                type: "soft",
                values: [{
                    x: -27,
                    y: -54
                }, {
                    x: -80,
                    y: -75
                }, {
                    x: -158,
                    y: -96
                }, {
                    x: -251,
                    y: -104
                }],
                autoRotate: !1
            },
            ease: Quad.easeOut
        }, "follow"), n.to(".ani_chart_letterZ", .5, {
            delay: .8,
            y: -140,
            x: 0,
            ease: Linear.easeNone
        }, "follow"), n.to(".ani_chart_letterZ", .2, {
            delay: 1.3,
            y: -168,
            x: 17,
            ease: Linear.easeNone
        }, "follow");
        var o = i.find(".tl__mark-line"),
            a = i.find(".tl__mark-diamond");
        n.from(o, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(a, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("dual-threat", function(e) {
        var i = e.$el,
            o, a = new TimelineLite({
                paused: !0
            });
        yepnope({
            load: "/js/libs/pixi.js",
            callback: function() {
                console.count && console.count(
                        "YepNope log chrome bug buster"), o =
                    new n(i.find(".ani-dual-threat"), a), i
                    .positionCallback({
                        eventName: "visible",
                        callback: function(e, t) {
                            var i = e.bottom > t(-
                                    10) && e.top <
                                t(110);
                            return i
                        }
                    }), i.on("visible-on", function() {
                        o.play()
                    }), i.on("visible-off", function() {
                        o.pause()
                    })
            }
        }), t(e, a)
    }), timelineIn.add("map-slide-up", function(e) {
        var t = e.$el,
            i = new TimelineLite({
                paused: !0
            });
        timelineIn.call("rotate-in", {
            $el: t,
            tl: i,
            condition: "<75",
            getOffset: "untransformed",
            isHingeOnLeft: t.is(".tl__event--right")
        });
        var n = $("#washington-spokane-map"),
            o = $("#washington-spokane-map__icon"),
            a = $("#washington-spokane-map__name");
        i.from(n, 1, {
            y: "100%",
            autoAlpha: 0,
            clearProps: "y",
            ease: Quint.easeOut
        }, "-=0.3"), i.addLabel("showing-icon", "-=0.3"), i.from(o,
            .4, {
                scale: 0,
                autoAlpha: 0,
                clearProps: "scale",
                ease: Back.easeOut
            }, "showing-icon"), i.set(a, {
            transformOrigin: "110% 110%"
        }, "showing-icon"), i.from(a, .4, {
            rotation: 30,
            autoAlpha: 0,
            clearProps: "rotation, transformOrigin",
            ease: Quint.easeOut
        }, "showing-icon")
    }), timelineIn.add("diamond-with-children", function(e) {
        var t = e.$el,
            i = new TimelineLite({
                paused: !0
            });
        timelineIn.call("rotate-in--centered", {
            $el: t,
            tl: i,
            condition: e.condition,
            getOffset: "untransformed"
        });
        var n = t.find(".tl__event-diamond__child");
        i.set(n, {
            transformOrigin: "50% 0"
        }, .2), i.staggerFrom(n, 1, {
            rotationX: -90,
            autoAlpha: 0,
            ease: Back.easeOut.config(3),
            clearProps: "scale"
        }, .2, .2)
    }), timelineIn.add("rotate-in-plus-flag", function(e) {
        var t = e.$el,
            i = new TimelineLite({
                paused: !0
            });
        timelineIn.call("rotate-in", {
            $el: t,
            tl: i,
            condition: e.condition,
            getOffset: "untransformed"
        });
        var n = $("#tl-pass-flag");
        i.addLabel("flag-start", "-=0.4"), i.set(n, {
            transformOrigin: "200% 100%"
        }), i.from(n, 1, {
            rotation: 90,
            autoAlpha: 0,
            clearProps: "rotation, opacity",
            ease: Quint.easeOut
        })
    }), timelineIn.add("rotate-in-plus-diamonds", function(e) {
        var t = e.$el,
            i = new TimelineLite({
                paused: !0
            });
        timelineIn.call("rotate-in", {
            $el: t,
            tl: i,
            condition: e.condition,
            getOffset: "untransformed"
        });
        var n = t.next(".tl__deco--diamonds").children();
        n.each(function(e) {
            $(this).css({
                opacity: -Math.abs((e - 4) / 5) + 1
            })
        }), i.addLabel("diamonds-start", "-=0.4"), i.staggerFrom(n.slice(
            0, 5), .5, {
            scale: 1.3,
            autoAlpha: 0,
            ease: Back.easeOut
        }, .1, "diamonds-start"), i.staggerFrom(n.slice(5), .5, {
            scale: 1.3,
            autoAlpha: 0,
            ease: Back.easeOut
        }, -.1, "diamonds-start")
    }), timelineIn.add("rotate-in--centered-plus-counter", function(e) {
        var t = e.$el,
            i = new TimelineLite({
                paused: !0
            });
        timelineIn.call("rotate-in--centered", {
            $el: t,
            tl: i,
            condition: e.condition,
            getOffset: "untransformed"
        }), i.call(function() {
            t.find(".js-counter").trigger("activation")
        }, null, null, .1)
    }), timelineIn.add("rotate-in--centered-plus-monitors", function(e) {
        var t = e.$el,
            i = new TimelineLite({
                paused: !0
            });
        timelineIn.call("rotate-in--centered", {
            $el: t,
            tl: i,
            condition: e.condition,
            getOffset: "untransformed"
        }), i.addLabel("showing-monitors");
        var n = t.find(".tl__event-monitor--left");
        i.from(n, .8, {
            x: 200,
            scale: 0,
            autoAlpha: 0,
            ease: Quint.easeOut
        }, "showing-monitors");
        var o = t.find(".tl__event-monitor--right");
        i.from(o, .8, {
            x: -200,
            scale: 0,
            autoAlpha: 0,
            ease: Quint.easeOut
        }, "showing-monitors")
    }), timelineIn.add("bump-in-with-hofers", function(e) {
        var t = e.$el,
            i = new TimelineLite({
                paused: !0
            });
        timelineIn.call("bump-in", {
            $el: t,
            tl: i,
            condition: e.condition,
            getOffset: "untransformed"
        });
        var n = t.find(".tl__inductee");
        i.addLabel("hofers-start", "-=0.8"), i.staggerFrom(n.slice(0, 3),
            .8, {
                scale: 1.3,
                autoAlpha: 0,
                ease: Back.easeOut
            }, -.1, "hofers-start"), i.staggerFrom(n.slice(3), .8, {
            scale: 1.3,
            autoAlpha: 0,
            ease: Back.easeOut
        }, .1, "hofers-start+=0.1"), i.set(n, {
            clearProps: "all"
        })
    }), timelineIn.add("timeline-snippet", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        n.timeScale(.8), n.delay(1), t(e, n);
        var o = i.find(".Tls-diamonds");
        n.from(o, .1, {
            opacity: 0,
            ease: Quint.easeOut
        }, 0), n.from(o, .8, {
            scale: .1,
            ease: Quint.easeOut
        }, 0), n.from(o, 1, {
            rotationY: 90,
            ease: Back.easeOut
        }, 0);
        var a = i.find(".Tls-diamond-small");
        n.staggerFrom(a.slice(0, 2), 1, {
            rotationY: 90,
            autoAlpha: 0,
            ease: Back.easeOut.config(3)
        }, .2, .2), n.staggerFrom(a.slice(2), 1, {
            rotationX: -90,
            autoAlpha: 0,
            ease: Back.easeOut.config(3)
        }, .2, .2), n.addLabel("line", "-=1");
        var r = i.find(".Tls-line");
        r.length && n.from(r, 1, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "line"), i.find(".Tls-title").each(function(e, t) {
            n.from(t, 1, {
                x: e % 2 ? -50 : 50,
                z: 10,
                rotationX: 60,
                autoAlpha: 0,
                ease: Quint.easeOut
            }, "line")
        }), i.find(".Tls-btn").each(function(e, t) {
            n.from(t, 1, {
                x: e % 2 ? -50 : 50,
                rotationX: -60,
                autoAlpha: 0,
                ease: Quint.easeOut
            }, "line+=0.2")
        });
        var s = i.find(".deco-diamond--109");
        s.length && n.staggerFrom(s, 1, {
            x: -40,
            scale: 0,
            ease: Quint.easeOut
        }, .3, "line")
    }), timelineIn.add("first-draft", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n), n.timeScale(.5);
        var o = i.find(".FirstDraft-player-2a"),
            a = i.find(".FirstDraft-player-2b"),
            r = i.find(".FirstDraft-player-3a"),
            s = i.find(".FirstDraft-player-3b"),
            l = i.find(".FirstDraft-hand");
        n.from(i.find(".FirstDraft-player-1"), .5, {
            scale: 1.1,
            ease: Power4.easeOut
        }), n.addLabel("line2", .2), n.from(o, .5, {
            x: 45,
            ease: Power4.easeOut
        }, "line2"), n.from(a, .5, {
            x: -45,
            ease: Power4.easeOut
        }, "line2"), n.from(o.add(a), .5, {
            scale: 1.1
        }, "line2"), n.from(o.add(a), .1, {
            autoAlpha: 0
        }, "line2"), n.addLabel("line3", "-=0.8"), n.from(r, 1, {
            x: 90,
            ease: Power4.easeInOut
        }, "line3"), n.from(s, 1, {
            x: -90,
            ease: Power4.easeInOut
        }, "line3"), n.from(r.add(s), .3, {
            scale: 1.1
        }, "line3+=0.5"), n.from(r.add(s), .1, {
            autoAlpha: 0
        }, "line3+=0.5"), n.from(i.find(".FirstDraft-shadow"), n.duration(), {
            autoAlpha: 0,
            scaleX: .7
        }, 0);
        var c = new TimelineLite;
        c.set(l, {
            transformOrigin: "70% 90%"
        }), c.timeScale(1.7), c.set(l, {
            zIndex: -1
        }), c.to(l, .3, {
            x: 130,
            rotation: 10,
            ease: Sine.easeOut
        }), c.set(l, {
            zIndex: "auto"
        }), c.to(l, .7, {
            x: 0,
            rotation: 0,
            ease: Sine.easeInOut
        }), c.from(l, .2, {
            autoAlpha: 0
        }, 0), c.from(l, 1, {
            scale: .6,
            y: -90
        }, 0), c.addLabel("clicks"), c.set(l, {
            rotationX: 5
        }, "+=1"), c.set(l, {
            rotationX: 0
        }, "+=0.08"), c.set(l, {
            rotationX: 5
        }, "+=0.15"), c.set(l, {
            rotationX: 0
        }, "+=0.08"), n.add(c, "-=0.5");
        var d = i.find(".tl__mark-line"),
            u = i.find(".tl__mark-diamond");
        n.from(d, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(u, .3, {
            scale: 0,
            ease: Back.easeOut
        }), n.add(function() {
            i.trigger("disable-interactivity")
        }, .001), n.add(function() {
            i.trigger("enable-interactivity")
        }, "clicks")
    }), timelineIn.add("best-season", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.find("img"),
            a = [
                []
            ],
            r, s, l, c = 0,
            d = 0;
        for (r = 0; r < o.length; r++) d >= c ? c += 1 : (c = 1, d += 1,
            a[d] = []), a[d].push(o[r]);
        for (a.reverse(), r = 0; r < a.length; r++)
            for (a[r].sort(function() {
                return .5 - Math.random()
            }), n.addLabel("line" + r, r / 3), s = 0; s < a[r].length; s++)
                l = "line" + r + "+=" + s / 10, n.from(a[r][s], .8, {
                    autoAlpha: 0
                }, l), n.from(a[r][s], .8, {
                    y: -30,
                    x: 10 * Math.random() - 5,
                    rotation: 10 * Math.random() - 5,
                    ease: Bounce.easeOut
                }, l);
        var u = i.find(".tl__mark-line"),
            h = i.find(".tl__mark-diamond");
        n.from(u, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(h, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("same-player-win", function(e) {
        function i(e, t, i, n) {
            e.from(t, i || .3, {
                scale: 1.5,
                autoAlpha: 0,
                ease: Power4.easeIn
            }, n)
        }

        function n(e, t, i, n) {
            e.set(t, {
                rotation: bfrMath.random(-10, 10),
                rotationY: bfrMath.random(-20, 20),
                rotationX: bfrMath.random(-20, 20)
            }, n), e.to(t, i || .5, {
                rotation: 0,
                rotationY: 0,
                rotationX: 0,
                ease: Elastic.easeOut.config(1, .01)
            })
        }
        var o = e.$el,
            a = new TimelineLite({
                paused: !0
            });
        t(e, a);
        var r = o.find(".SamePlayerWin-shield"),
            s = o.find(".SamePlayerWin-helmet"),
            l = o.find('[class^="SamePlayerWin-line-"]'),
            c = o.find('[class^="SamePlayerWin-star-"]');
        i(a, r), n(a, r), i(a, s, .2, "+=0.2"), n(a, r), a.addLabel(
            "marks"), l.each(function(e, t) {
            TweenLite.set(t, {
                clip: "rect(0px," + t.width + "px," + t
                    .height + "px,0px)"
            })
        }), a.staggerFrom(l.slice(0, 4), .2, {
            clip: "rect(0px,40px,0px,0px)"
        }, .1), a.from(l.slice(4, 5), 1, {
            clip: "rect(0px,0px,0px,0px)",
            ease: Power4.easeOut
        }, "+=0.2"), a.staggerFrom(c, .3, {
            scale: 2,
            autoAlpha: 0,
            ease: Power4.easeIn
        }, .05, "marks+=0.2"), a.staggerFrom(c, 2, {
            rotation: -270,
            ease: Power4.easeOut
        }, .05, "marks+=0.2");
        var d = o.find(".tl__mark-line"),
            u = o.find(".tl__mark-diamond");
        a.from(d, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), a.from(u, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("most-wins", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n), animation = new o(n);
        var a = i.find(".tl__mark-line"),
            r = i.find(".tl__mark-diamond");
        n.from(a, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(r, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("same-player-win", function(e) {
        function i(e, t, i, n) {
            e.from(t, i || .3, {
                scale: 1.5,
                autoAlpha: 0,
                ease: Power4.easeIn
            }, n)
        }

        function n(e, t, i, n) {
            e.set(t, {
                rotation: bfrMath.random(-10, 10),
                rotationY: bfrMath.random(-20, 20),
                rotationX: bfrMath.random(-20, 20)
            }, n), e.to(t, i || .5, {
                rotation: 0,
                rotationY: 0,
                rotationX: 0,
                ease: Elastic.easeOut.config(1, .01)
            })
        }
        var o = e.$el,
            a = new TimelineLite({
                paused: !0
            });
        t(e, a);
        var r = o.find(".SamePlayerWin-shield"),
            s = o.find(".SamePlayerWin-helmet"),
            l = o.find('[class^="SamePlayerWin-line-"]'),
            c = o.find('[class^="SamePlayerWin-star-"]');
        i(a, r), n(a, r), i(a, s, .2, "+=0.2"), n(a, r), a.addLabel(
            "marks"), l.each(function(e, t) {
            TweenLite.set(t, {
                clip: "rect(0px," + t.width + "px," + t
                    .height + "px,0px)"
            })
        }), a.staggerFrom(l.slice(0, 4), .2, {
            clip: "rect(0px,40px,0px,0px)"
        }, .1), a.from(l.slice(4, 5), 1, {
            clip: "rect(0px,0px,0px,0px)",
            ease: Power4.easeOut
        }, "+=0.2"), a.staggerFrom(c, .3, {
            scale: 2,
            autoAlpha: 0,
            ease: Power4.easeIn
        }, .05, "marks+=0.2"), a.staggerFrom(c, 2, {
            rotation: -270,
            ease: Power4.easeOut
        }, .05, "marks+=0.2");
        var d = o.find(".tl__mark-line"),
            u = o.find(".tl__mark-diamond");
        a.from(d, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), a.from(u, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("same-player-revenge", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.find(".SamePlayerRevenge"),
            a = i.find(".SamePlayerRevenge-ball"),
            r = i.find(".SamePlayerRevenge-line-back"),
            s = i.find(".SamePlayerRevenge-line-front"),
            l = r.add(s),
            c = new Ease(BezierEasing(.16, 0, 0, 1)),
            d = 4,
            u = .7 * d;
        n.from(a, 4, {
            x: -130,
            y: -63,
            scale: 1.2,
            ease: c
        }, 0), n.from(r, 4, {
            scaleX: .5,
            scaleY: 1.5,
            ease: c
        }, 0), n.from(s, 4, {
            scaleX: .15,
            scaleY: 1.5,
            ease: c
        }, 0), n.fromTo(a, u, {
            rotation: 3
        }, {
            rotation: 6,
            ease: Elastic.easeIn.config(1, .01)
        }, 0), n.from(l.add(o), u, {
            rotation: "+=0.2",
            ease: Elastic.easeIn.config(1, .01)
        }, 0);
        var h = new TimelineLite({
            paused: !0
        });
        h.call(console.log, ["rumble"], console), h.to(a, .05, {
                rotation: "-=1",
                ease: Sine.easeInOut
            }, 0), h.to(a, .05, {
                rotation: "+=1",
                ease: Sine.easeInOut
            }, "mid"), h.to(l.add(o), .05, {
                rotation: "-=0.2",
                ease: Sine.easeInOut
            }, 0), h.to(l.add(o), .05, {
                rotation: "+=0.2",
                ease: Sine.easeInOut
            }, "mid"), h.call(h.play, [0], h), n.call(h.play, [0], h, u),
            n._pause = n.pause, n.pause = function(e, t, i, o, a) {
                h.pause(), n._pause(e, t, i, o, a)
            };
        var p = i.find(".tl__mark-line"),
            f = i.find(".tl__mark-diamond");
        n.from(p, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(f, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("first-win", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.find(".FirstWin-one"),
            a = i.find(".FirstWin-ordinal"),
            r = i.find('[class^="FirstWin-ball-l"]').get().reverse(),
            s = $(r).filter(":odd").get(),
            l = $(r).filter(":even").get(),
            c = i.find('[class^="FirstWin-ball-r"]').get().reverse(),
            d = $(c).filter(":odd").get(),
            u = $(c).filter(":even").get(),
            h = new Ease(BezierEasing(.16, 0, 0, 1)),
            p = .08;
        n.staggerFrom(r, .8, {
            scale: 0,
            y: 50,
            ease: h
        }, p, 0), n.staggerFrom(c, .8, {
            scale: 0,
            y: 50,
            ease: h
        }, p, .5 * p), n.staggerFrom(u, .8, {
            rotation: 100,
            ease: h
        }, 2 * p, 0), n.staggerFrom(s, .8, {
            rotation: 100,
            ease: h
        }, 2 * p, .5 * p), n.staggerFrom(d, .8, {
            rotation: -100,
            ease: h
        }, 2 * p, p), n.staggerFrom(l, .8, {
            rotation: -100,
            ease: h
        }, 2 * p, 1.5 * p), n.from(o, n.duration() / 2, {
            autoAlpha: 0
        }, 0), n.from(o, n.duration(), {
            scale: 5,
            force3D: !0,
            ease: h
        }, 0), n.from(a, .3, {
            x: -25,
            ease: h
        }, "ordinal"), n.from(a, .1, {
            scaleX: .8,
            autoAlpha: 0
        }, "ordinal");
        var f = i.find(".tl__mark-line"),
            m = i.find(".tl__mark-diamond");
        n.from(f, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(m, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("first-league-win", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.find(".FirstLeagueWin-one"),
            a = i.find(".FirstLeagueWin-ordinal"),
            r = i.find('[class^="FirstLeagueWin-leaf-l"]'),
            s = i.find('[class^="FirstLeagueWin-leaf-r"]'),
            l = new Ease(BezierEasing(.16, 0, 0, 1));
        n.staggerFrom(r.slice(1), 1, {
            rotation: -15,
            ease: Back.easeOut.config(2)
        }, .1, 0), n.from(r.slice(0, 1), n.duration(), {
            rotation: 60
        }, 0), n.staggerFrom(s.slice(1), 1, {
            rotation: 15,
            ease: Back.easeOut.config(2)
        }, .1, 0), n.from(s.slice(0, 1), n.duration(), {
            rotation: -60
        }, 0);
        var c = 1.4 * n.duration();
        n.from(o, c, {
            scale: .3,
            x: 30,
            autoAlpha: 0,
            ease: l
        }, 0), n.from(a, c, {
            x: -50,
            scaleX: .6,
            autoAlpha: 0,
            ease: l
        }, 0);
        var d = i.find(".tl__mark-line"),
            u = i.find(".tl__mark-diamond");
        n.from(d, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(u, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("most-medals", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.find(".MostMedals-head"),
            a = i.find('[class^="MostMedals-m"]').get().reverse(),
            r = new Ease(BezierEasing(.16, 0, 0, 1)),
            s = .08;
        $(a).each(function(e) {
            n.from(this, 1, {
                rotation: bfrMath.random(-5, 5),
                y: -10,
                autoAlpha: 0,
                ease: r
            }, e / 10)
        });
        var l = new TimelineLite({
            paused: !0
        });
        l.to(o, 1, {
                rotationX: -10,
                ease: Sine.easeInOut
            }), l.to(o, 1, {
                rotationX: 0,
                ease: Sine.easeInOut
            }), l.call(l.play, [0], l), n.call(l.play, [0], l, 0), n._pause =
            n.pause, n.pause = function(e, t, i, o, a) {
                l.pause(), n._pause(e, t, i, o, a)
            };
        var c = i.find(".tl__mark-line"),
            d = i.find(".tl__mark-diamond");
        n.from(c, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(d, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("most-points", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.find(".MostPoints"),
            a = i.find(".MostPoints-helmet"),
            r = i.find(".MostPoints-guard"),
            s = i.find(".MostPoints-back-antlers"),
            l = i.find(".MostPoints-front-antlers"),
            c = new Ease(BezierEasing(.16, 0, 0, 1)),
            d = new Ease(BezierEasing(.25, .1, 0, 1)),
            u = .08,
            h = 2;
        n.from(o, h, {
                rotation: 3,
                ease: Elastic.easeIn.config(1, .01)
            }, 0), n.from(r, h, {
                rotation: 6,
                ease: Elastic.easeIn.config(1, .01)
            }, 0), n.fromTo(o, h, {
                scale: .9
            }, {
                scale: .8,
                ease: c
            }, 0), n.add("implosion"), n.to(o, .1, {
                scale: 1,
                ease: Power4.easeIn
            }, "implosion"),
            function m(e, t, i, n) {
                e.set(t, {
                    rotation: bfrMath.random(-10, 10),
                    rotationY: bfrMath.random(-10, 10),
                    rotationX: bfrMath.random(-10, 10)
                }, n), e.to(t, i || .5, {
                    rotation: 0,
                    rotationY: 0,
                    rotationX: 0,
                    ease: Elastic.easeOut.config(1, .01)
                })
            }(n, o), n.from(s.add(l), .2, {
                scale: 0,
                ease: Back.easeOut
            }, "implosion"), n.from(l, 1, {
                rotation: bfrMath.random(25, 40),
                ease: Elastic.easeOut.config(1, .1)
            }, "implosion"), n.from(s, 1, {
                rotation: bfrMath.random(25, 40),
                ease: Elastic.easeOut.config(1, .1)
            }, "implosion");
        var p = i.find(".tl__mark-line"),
            f = i.find(".tl__mark-diamond");
        n.from(p, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(f, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("highest-loss", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = new TimelineLite({
                paused: !0
            }),
            a = i.find(".HighestLoss-body"),
            r = i.find(".HighestLoss-guy"),
            s = i.find(".HighestLoss-guy-shadow"),
            l = new Ease(BezierEasing(.16, 0, 0, 1)),
            c = new Ease(BezierEasing(.25, .1, 0, 1));
        o.from(a, 1, {
            scale: .4,
            ease: Back.easeOut
        }, 0), o.from(r, 1, {
            scale: 2,
            ease: Back.easeOut
        }, 0), o.from(s, 1, {
            scaleY: 1,
            scaleX: .6,
            opacity: 0,
            ease: Back.easeOut
        }, 0), n.to(o, .8, {
            time: .1,
            ease: Back.easeOut
        }), n.to(o, .8, {
            time: .2,
            ease: Back.easeOut
        }, "+=0.5"), n.to(o, 1.4, {
            time: 1,
            ease: Linear.easeNone
        }, "+=0.5");
        var d = i.find(".tl__mark-line"),
            u = i.find(".tl__mark-diamond");
        n.from(d, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(u, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("fiftieth-victory", function(e) {
        function i(e) {
            10 > e && (e = "0" + e), u.innerText = e
        }
        var n = e.$el,
            o = new TimelineLite({
                paused: !0
            });
        t(e, o);
        var a = new TimelineLite({
                paused: !0
            }),
            r = n.find(".FiftiethVictory"),
            s = n.find(".FiftiethVictory-boom").get(),
            l = n.find(".FiftiethVictory-boom-outline").get(0),
            c = n.find(".FiftiethVictory-left-helmet").get(0),
            d = n.find(".FiftiethVictory-right-helmet").get(0),
            u = n.find(".FiftiethVictory-count").get(0),
            h = new Ease(BezierEasing(0, 0, 1, .4)),
            p = 50,
            f = s.length,
            m, g;
        a.set(s, {
            opacity: 0
        }, 0);
        for (var v = 0; p >= v; v++) m = s[v % f], a.set(m, {
            scale: bfrMath.random(.5, .9),
            rotation: bfrMath.random(-30, 30),
            x: bfrMath.random(-20, 20),
            y: bfrMath.random(-20, 20),
            opacity: 1
        }, v), a.to(m, f, {
            scale: 1,
            rotation: p > v ? bfrMath.random(-30, 30) : 0,
            x: p > v ? bfrMath.random(-5, 5) : 0,
            y: p > v ? bfrMath.random(-5, 5) : 0,
            opacity: p > v ? 0 : 1,
            ease: Power4.easeOut
        }, v), a.set(d, {
            scale: p > v ? bfrMath.random(.6, 1) : 1,
            rotation: p > v ? bfrMath.random(-10, 10) : 0,
            x: p > v ? bfrMath.random(-5, 5) : 0,
            y: p > v ? bfrMath.random(-5, 5) : 0
        }, v), a.set([u, l], {
            rotation: p > v ? bfrMath.random(-5, 5) : 0,
            x: p > v ? bfrMath.random(-5, 5) : 0,
            y: p > v ? bfrMath.random(-5, 5) : 0
        }, v), a.set(r, {
            rotation: p > v ? bfrMath.random(-2, 2) : 0
        }, v), a.call(i, [v], null, v);
        o.to(a, 2, {
            progress: 1,
            ease: h
        });
        var y = n.find(".tl__mark-line"),
            w = n.find(".tl__mark-diamond");
        o.from(y, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), o.from(w, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("highest-score", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.find(".HighestScore"),
            a = i.find(".HighestScore-mountains"),
            r = i.find(".HighestScore-banner"),
            s = new Ease(BezierEasing(.16, 0, 0, 1));
        n.from(o, 3, {
            rotation: 40,
            scale: .05,
            ease: s
        }, 0), n.from(a, 3, {
            rotation: -60,
            scale: Math.tan(Math.PI / 2 * .73),
            ease: s
        }, 0), n.from(o, 3, {
            y: -100,
            ease: Power4.easeOut
        }, 0), n.from(a, 3, {
            y: 100,
            ease: Power2.easeOut
        }, 0), n.from(r, 3, {
            y: -60,
            ease: s
        }, 0);
        var l = i.find(".tl__mark-line"),
            c = i.find(".tl__mark-diamond");
        n.from(l, .3, {
            scaleX: 0,
            ease: Quint.easeOut
        }, "-=0.3"), n.from(c, .3, {
            scale: 0,
            ease: Back.easeOut
        })
    }), timelineIn.add("share-rotate-in", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.find(".Utl-share-diamond"),
            a = i.find(".Utl-share-diamond-content"),
            r = i.find(".Utl-share-sheet"),
            s = r.children(),
            l = new Ease(BezierEasing(.36, 0, 0, 1));
        n.from(o, .6, {
            rotation: "+=180",
            ease: l
        }, 0), n.from(a, .6, {
            rotation: "-=180",
            opacity: 0,
            ease: l
        }, 0), n.from(o, .6, {
            scale: .1,
            ease: Back.easeOut.config(2)
        }, 0), n.from(a, .6, {
            scale: .7,
            ease: Back.easeOut.config(2)
        }, 0), n.addLabel("sheet", "-=0.4"), n.from(r, .1, {
            opacity: 0
        }, "sheet"), n.from(r, .6, {
            rotation: "+=20",
            scaleX: .3,
            scaleY: 1.1,
            ease: Back.easeOut.config(2)
        }, "sheet"), n.staggerFrom(s, .6, {
            scaleX: .8,
            scaleY: 1.1,
            x: 15,
            ease: Back.easeOut
        }, .1, "sheet+=0.2"), n.set(s, {
            clearProps: "transform"
        })
    }), timelineIn.add("not-enough", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        n.timeScale(1.1), t(e, n);
        var o = i.find(".NotEnough"),
            a = i.find(".NotEnough-icon"),
            r = i.find(".NotEnough-copy"),
            s = new Ease(BezierEasing(.16, 0, 0, 1));
        n.from(o, 2, {
            scale: 0,
            force3D: !0,
            ease: s
        }), n.from(r, 1.2, {
            scale: 0,
            force3D: !0,
            ease: Back.easeOut.config(1)
        }, "-=0.6")
    }), timelineIn.add("season-statistics", function(e) {
        var i = e.$el,
            n = new TimelineLite({
                paused: !0
            });
        t(e, n);
        var o = i.find(".Scoreboard-season"),
            a = new Ease(BezierEasing(.16, 0, 0, 1));
        timelineIn.call("rotate-in--centered", {
            $el: i,
            tl: n,
            condition: e.condition,
            getOffset: "untransformed"
        }), n.addLabel("board", "-=0.7"), n.from(o, 2, {
            y: -250,
            scale: .2,
            ease: a
        }, "board")
    })
}(),
function() {
    function e(e, i) {
        var n = this,
            o = $(e);
        n.$link = o, n.tl = {}, n.opts = $.extend({
                onActivation: $.noop,
                onReady: $.noop,
                onOpened: $.noop,
                onClosing: $.noop,
                onClosed: $.noop
            }, i), t || (t = $("#diamond-zoom-clipper").detach()), n.width =
            o.width(), n.height = o.height(), n.container = {}, n.container
            .$ = $(document), n.window = {}, n.window.$ = $(window), n.window
            .center = {}, n.$svg = t.clone(), n.$svg.css({
                display: "block"
            }), n.clip = {}, n.clip.el = n.$svg[0].getElementById(
                "svg-diamond"), n.media = {}, n.media.url = o.attr("href"),
            n.media.size = o.data("diamond-zoom-size"), n.media.size ? (n.media
                .size = n.media.size.split("x"), n.media.width = n.media.size[
                    0], n.media.height = n.media.size[1], n.media.type =
                "youtube") : n.media.type = "image", n.media.$ = n.$svg.find(
                "#svg-diamond-media-placeholder"), n.media.$image = n.$svg.find(
                "#svg-diamond-image"), "image" === n.media.type ? (n.media.$
                .remove(), n.media.$ = n.media.$image, n.media.$[0].setAttributeNS(
                    "http://www.w3.org/1999/xlink", "href", n.media.url)) :
            n.media.$image.remove();
        var a = n.isImageLoaded();
        $.when(n.opts.onActivation.call(n)).then(function() {
            return a
        }).then(n.opts.onReady.bind(n)).then(n.setupSVGmask.bind(n)).then(
            n.toHTML.bind(n)).then(n.opts.onOpened.bind(n))
    }
    var t = !1;
    jQuery.fn.extend({
        diamondZoom: function(t) {
            var i = this;
            i.each(function() {
                new e(this, t)
            })
        }
    }), e.prototype.isImageLoaded = function() {
        var e = this;
        if ("image" === e.media.type) {
            var t = $.Deferred(),
                i = new Image;
            return i.src = e.media.url, $(i).imagesLoaded(function(i) {
                e.media.width = i[0].width, e.media.height = i[0].height,
                    t.resolve()
            }), t
        }
    }, e.prototype.setupSVGmask = function() {
        var e = this,
            t = $.Deferred();
        return e.$svg.appendTo(document.body || document.documentElement),
            e.defineCoordinates(), e.setMediaCoordinates(), e.setClipCoordinates(),
            e.tl = new TimelineLite({
                onComplete: t.resolve
            }), e.tl.from(e.$svg, .2, {
                autoAlpha: 0
            }), e.tl.set(e.$link.find("img"), {
                autoAlpha: 0
            }), e.tl.add(e.scaleClip(), 0), e.tl.add(e.scaleMedia(), 0), t
    }, e.prototype.toHTML = function() {
        var e = this;
        switch (e.$svg.detach(), e.$cover = $(
            '<div class="diamond-zoom__cover">'), e.$cover.height(e.container
            .height), e.media.type) {
            case "image":
                e.$content = $('<img src="' + e.media.url +
                    '" class="diamond-zoom__content">');
                break;
            case "iframe":
                e.$content = $('<iframe src="' + e.media.url +
                    '" class="diamond-zoom__content">');
                break;
            case "youtube":
                var t = e.$link.attr("href").split("/").pop();
                e.$content = getYoutubeEmbed(t, {
                    width: e.media.width,
                    height: e.media.height,
                    autoplay: !0,
                    attrs: {
                        "class": "diamond-zoom__content"
                    }
                })
        }
        e.$content.appendTo(e.$cover), e.$content.css({
            top: e.window.center.y,
            marginLeft: -e.media.width / 2,
            marginTop: -e.media.height / 2,
            width: e.media.width,
            height: e.media.height
        }), e.$close = $(
            '<button type="button" class="diamond-zoom__close"><span class="icon-i_cross"></span>'
        ), e.$close.appendTo(e.$cover);
        var i = -e.media.width / 2,
            n = e.window.center.y - Math.min(e.media.height / 2, e.window.height /
                2);
        isMobile && (n -= 59), e.$close.css({
                top: n,
                marginRight: Math.max(i, -e.window.width / 2)
            }), e.$cover.one("click.diamond-zoom", e.teardown.bind(e)), e.$cover
            .appendTo(document.body);
        var o = $.Deferred();
        return TweenLite.from(e.$close, .3, {
            scale: 0,
            ease: Back.easeOut,
            onComplete: o.resolve
        }), o
    }, e.prototype.teardown = function() {
        var e = this;
        $.when(e.opts.onClosing).then(function() {
            var t = $.Deferred();
            return TweenLite.to(e.$close, .15, {
                scale: 0,
                ease: Quint.easeOut,
                onComplete: t.resolve
            }), t
        }).then(function() {
            var t = $.Deferred();
            return e.$cover.remove(), e.$svg.appendTo(document.body ||
                    document.documentElement), e.defineCoordinates(),
                e.tl.totalTime(-.01), e.tl.eventCallback(
                    "onReverseComplete", t.resolve),
                requestAnimationFrame(function() {
                    e.tl.reverse()
                }), t
        }).then(function() {
            e.$svg.remove()
        }).then(e.opts.onClosed)
    }, e.prototype.setMediaCoordinates = function(e) {
        var t = this;
        e = e || t.media.start, t.media.$.attr(e)
    }, e.prototype.defineMediaEnd = function() {
        var e = this,
            t = e.media,
            i = t.end && t.end.y ? t.end.y : !1;
        return t.end = {
            x: e.container.centerX - t.width / 2,
            y: i || e.window.center.y - t.height / 2,
            width: t.width,
            height: t.height
        }, t.end
    }, e.prototype.defineMediaStart = function() {
        var e = this,
            t = e.media.width / e.media.height,
            i, n;
        return t > 0 ? (n = e.height, i = e.height * t) : (i = e.width, n =
            e.width / t), coordinates = {
            width: i,
            height: n,
            x: e.x[1] - i / 2,
            y: e.y[1] - n / 2
        }, e.media.start = coordinates, coordinates
    }, e.prototype.scaleMedia = function() {
        var e = this,
            t = {
                n: 0
            },
            i = e.media;
        return TweenLite.to(t, .6, {
            n: 1,
            ease: Quint.easeInOut,
            onUpdate: function() {
                var n = {
                    width: i.start.width + t.n * (i.end.width -
                        i.start.width),
                    height: i.start.height + t.n * (i.end.height -
                        i.start.height),
                    x: i.start.x + t.n * (i.end.x - i.start
                        .x),
                    y: i.start.y + t.n * (i.end.y - i.start
                        .y)
                };
                e.setMediaCoordinates(n)
            }
        })
    }, e.prototype.defineCoordinates = function() {
        var e = this;
        e.container.width = e.container.$.width(), e.container.height = e.container
            .$.height(), e.container.centerX = e.container.width / 2, e.window
            .width = e.window.$.innerWidth(), e.window.height = e.window.$.innerHeight(),
            window.getRealScroll = !0, e.window.scrollTop = e.window.$.scrollTop(),
            e.window.scrollLeft = e.window.$.scrollLeft(), delete window.getRealScroll,
            e.window.center.x = e.window.scrollLeft + e.window.width / 2, e
            .window.center.y = e.window.scrollTop + e.window.height / 2, e.$svg
            .attr({
                width: e.container.width,
                height: e.container.height
            }), e.defineThumbnailCoordinates(), e.defineClipStart(), e.defineClipEnd(),
            e.defineMediaStart(), e.defineMediaEnd()
    }, e.prototype.setClipCoordinates = function(e) {
        var t = this;
        e = e || [
            [t.x[1], t.y[0]],
            [t.x[2], t.y[1]],
            [t.x[1], t.y[2]],
            [t.x[0], t.y[1]]
        ];
        for (var i = [], n = 0; n < e.length; n++) i.push(e[n][0] + "," + e[
            n][1]);
        t.clip.el.setAttribute("points", i.join(" "))
    }, e.prototype.defineThumbnailCoordinates = function() {
        var e = this;
        e.offset = e.$link.offset(), e.x = [e.offset.left, e.offset.left +
            e.width / 2, e.offset.left + e.width
        ], e.y = [e.offset.top, e.offset.top + e.height / 2, e.offset.top +
            e.height
        ]
    }, e.prototype.defineClipStart = function() {
        var e = this,
            t = {
                x: e.x,
                y: e.y
            };
        return e.clip.start = t, t
    }, e.prototype.defineClipEnd = function() {
        var e = this,
            t = {
                top: -e.window.scrollTop + e.y[1],
                right: +e.window.scrollLeft - e.x[1] + e.window.width,
                bottom: +e.window.scrollTop - e.y[1] + e.window.height,
                left: -e.window.scrollLeft + e.x[1]
            },
            i = Math.max(t.top + t.right, t.right + t.bottom, t.bottom + t.left,
                t.left + t.top);
        i -= Math.ceil(e.width / 2);
        var n = {};
        return n.x = [-i, 0, +i], n.y = [-i, 0, +i], e.clip.end = n, n
    }, e.prototype.scaleClip = function() {
        var e = this,
            t = {
                n: 0
            };
        return TweenLite.to(t, .6, {
            n: 1,
            ease: Quint.easeInOut,
            onUpdate: function() {
                var i = [
                    [e.x[1] + t.n * e.clip.end.x[1], e.y[0] +
                        t.n * e.clip.end.y[0]
                    ],
                    [e.x[2] + t.n * e.clip.end.x[2], e.y[1] +
                        t.n * e.clip.end.y[1]
                    ],
                    [e.x[1] + t.n * e.clip.end.x[1], e.y[2] +
                        t.n * e.clip.end.y[2]
                    ],
                    [e.x[0] + t.n * e.clip.end.x[0], e.y[1] +
                        t.n * e.clip.end.y[1]
                    ]
                ];
                e.setClipCoordinates(i)
            }
        })
    }
}(),
function(e, t, $, i) {
    "use strict";
    var n = $("html"),
        o = $(e),
        a = $(t),
        r = $.fancybox = function() {
            r.open.apply(this, arguments)
        },
        s = navigator.userAgent.match(/msie/i),
        l = null,
        c = t.createTouch !== i,
        d = function(e) {
            return e && e.hasOwnProperty && e instanceof $
        },
        u = function(e) {
            return e && "string" === $.type(e)
        },
        h = function(e) {
            return u(e) && e.indexOf("%") > 0
        },
        p = function(e) {
            return e && !(e.style.overflow && "hidden" === e.style.overflow) &&
                (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight &&
                    e.scrollHeight > e.clientHeight)
        },
        f = function(e, t) {
            var i = parseInt(e, 10) || 0;
            return t && h(e) && (i = r.getViewport()[t] / 100 * i), Math.ceil(i)
        },
        m = function(e, t) {
            return f(e, t) + "px"
        };
    $.extend(r, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !c,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (s ? ' allowtransparency="true"' : "") +
                    "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<button type="button" class="diamond-zoom__close" style="top:0;right:0"><span class="icon-i_cross"></span></button>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: $.noop,
            beforeLoad: $.noop,
            afterLoad: $.noop,
            beforeShow: $.noop,
            afterShow: $.noop,
            beforeChange: $.noop,
            beforeClose: $.noop,
            afterClose: $.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(e, t) {
            return e && ($.isPlainObject(t) || (t = {}), !1 !== r.close(!
                0)) ? ($.isArray(e) || (e = d(e) ? $(e).get() : [
                    e
                ]), $.each(e, function(n, o) {
                    var a = {},
                        s, l, c, h, p, f, m;
                    "object" === $.type(o) && (o.nodeType &&
                            (o = $(o)), d(o) ? (a = {
                                href: o.data(
                                    "fancybox-href"
                                ) || o.attr("href"),
                                title: o.data(
                                    "fancybox-title"
                                ) || o.attr("title"),
                                isDom: !0,
                                element: o
                            }, $.metadata && $.extend(!
                                0, a, o.metadata())) : a =
                            o), s = t.href || a.href || (u(
                            o) ? o : null), l = t.title !==
                        i ? t.title : a.title || "", c = t.content ||
                        a.content, h = c ? "html" : t.type ||
                        a.type, !h && a.isDom && (h = o.data(
                            "fancybox-type"), h || (p =
                            o.prop("class").match(
                                /fancybox\.(\w+)/), h =
                            p ? p[1] : null)), u(s) && (h ||
                            (r.isImage(s) ? h = "image" : r
                                .isSWF(s) ? h = "swf" : "#" ===
                                s.charAt(0) ? h = "inline" :
                                u(o) && (h = "html", c = o)
                            ), "ajax" === h && (f = s.split(
                                    /\s+/, 2), s = f.shift(),
                                m = f.shift())), c || (
                            "inline" === h ? s ? c = $(u(s) ?
                                s.replace(/.*(?=#[^\s]+$)/,
                                    "") : s) : a.isDom && (
                                c = o) : "html" === h ? c =
                            s : h || s || !a.isDom || (h =
                                "inline", c = o)), $.extend(
                            a, {
                                href: s,
                                type: h,
                                content: c,
                                title: l,
                                selector: m
                            }), e[n] = a
                }), r.opts = $.extend(!0, {}, r.defaults, t), t
                .keys !== i && (r.opts.keys = t.keys ? $.extend({},
                    r.defaults.keys, t.keys) : !1), r.group = e,
                r._start(r.opts.index)) : void 0
        },
        cancel: function() {
            var e = r.coming;
            e && !1 !== r.trigger("onCancel") && (r.hideLoading(),
                r.ajaxLoad && r.ajaxLoad.abort(), r.ajaxLoad =
                null, r.imgPreload && (r.imgPreload.onload = r.imgPreload
                    .onerror = null), e.wrap && e.wrap.stop(!0, !
                    0).trigger("onReset").remove(), r.coming =
                null, r.current || r._afterZoomOut(e))
        },
        close: function(e) {
            r.cancel(), !1 !== r.trigger("beforeClose") && (r.unbindEvents(),
                r.isActive && (r.isOpen && e !== !0 ? (r.isOpen =
                    r.isOpened = !1, r.isClosing = !0, $(
                        ".fancybox-item, .fancybox-nav").remove(),
                    r.wrap.stop(!0, !0).removeClass(
                        "fancybox-opened"), r.transitions[r
                        .current.closeMethod]()) : ($(
                    ".fancybox-wrap").stop(!0).trigger(
                    "onReset").remove(), r._afterZoomOut())))
        },
        play: function(e) {
            var t = function() {
                    clearTimeout(r.player.timer)
                },
                i = function() {
                    t(), r.current && r.player.isActive && (r.player
                        .timer = setTimeout(r.next, r.current.playSpeed)
                    )
                },
                n = function() {
                    t(), a.unbind(".player"), r.player.isActive = !
                        1, r.trigger("onPlayEnd")
                },
                o = function() {
                    r.current && (r.current.loop || r.current.index <
                        r.group.length - 1) && (r.player.isActive = !
                        0, a.bind({
                            "onCancel.player beforeClose.player": n,
                            "onUpdate.player": i,
                            "beforeLoad.player": t
                        }), i(), r.trigger("onPlayStart"))
                };
            e === !0 || !r.player.isActive && e !== !1 ? o() : n()
        },
        next: function(e) {
            var t = r.current;
            t && (u(e) || (e = t.direction.next), r.jumpto(t.index +
                1, e, "next"))
        },
        prev: function(e) {
            var t = r.current;
            t && (u(e) || (e = t.direction.prev), r.jumpto(t.index -
                1, e, "prev"))
        },
        jumpto: function(e, t, n) {
            var o = r.current;
            o && (e = f(e), r.direction = t || o.direction[e >= o.index ?
                    "next" : "prev"], r.router = n || "jumpto",
                o.loop && (0 > e && (e = o.group.length + e % o
                    .group.length), e %= o.group.length), o.group[
                    e] !== i && (r.cancel(), r._start(e)))
        },
        reposition: function(e, t) {
            var i = r.current,
                n = i ? i.wrap : null,
                o;
            n && (o = r._getPosition(t), e && "scroll" === e.type ?
                (delete o.position, n.stop(!0, !0).animate(o,
                    200)) : (n.css(o), i.pos = $.extend({}, i.dim,
                    o)))
        },
        update: function(e) {
            var t = e && e.type,
                i = !t || "orientationchange" === t;
            i && (clearTimeout(l), l = null), r.isOpen && !l && (l =
                setTimeout(function() {
                    var n = r.current;
                    n && !r.isClosing && (r.wrap.removeClass(
                            "fancybox-tmp"), (i ||
                            "load" === t || "resize" ===
                            t && n.autoResize) && r._setDimension(),
                        "scroll" === t && n.canShrink ||
                        r.reposition(e), r.trigger(
                            "onUpdate"), l = null)
                }, i && !c ? 0 : 300))
        },
        toggle: function(e) {
            r.isOpen && (r.current.fitToView = "boolean" === $.type(
                    e) ? e : !r.current.fitToView, c && (r.wrap
                    .removeAttr("style").addClass(
                        "fancybox-tmp"), r.trigger("onUpdate")),
                r.update())
        },
        hideLoading: function() {
            a.unbind(".loading"), $(".loader--fancybox").remove()
        },
        showLoading: function() {
            var e, t;
            r.hideLoading(), e = $(
                '<div class="loader loader--centered loader--fancybox"></div>'
            ).click(r.cancel).appendTo(r.coming.element), a.bind(
                "keydown.loading", function(e) {
                    27 === (e.which || e.keyCode) && (e.preventDefault(),
                        r.cancel())
                }), r.defaults.fixed || (t = r.getViewport(), e
                .css({
                    position: "absolute",
                    top: .5 * t.h + t.y,
                    left: .5 * t.w + t.x
                }))
        },
        getViewport: function() {
            var t = r.current && r.current.locked || !1,
                i = {
                    x: o.scrollLeft(),
                    y: o.scrollTop()
                };
            return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) :
                (i.w = c && e.innerWidth ? e.innerWidth : o.width(),
                    i.h = c && e.innerHeight ? e.innerHeight : o.height()
                ), i
        },
        unbindEvents: function() {
            r.wrap && d(r.wrap) && r.wrap.unbind(".fb"), a.unbind(
                ".fb"), o.unbind(".fb")
        },
        bindEvents: function() {
            var e = r.current,
                t;
            e && (o.bind("orientationchange.fb" + (c ? "" :
                    " resize.fb") + (e.autoCenter && !e.locked ?
                    " scroll.fb" : ""), r.update), t = e.keys,
                t && a.bind("keydown.fb", function(n) {
                    var o = n.which || n.keyCode,
                        a = n.target || n.srcElement;
                    return 27 === o && r.coming ? !1 : void(
                        n.ctrlKey || n.altKey || n.shiftKey ||
                        n.metaKey || a && (a.type || $(
                            a).is(
                            "[contenteditable]")) || $.each(
                            t, function(t, a) {
                                return e.group.length >
                                    1 && a[o] !== i ? (
                                        r[t](a[o]), n.preventDefault(), !
                                        1) : $.inArray(
                                        o, a) > -1 ? (r[
                                            t](), n.preventDefault(), !
                                        1) : void 0
                            }))
                }), $.fn.mousewheel && e.mouseWheel && r.wrap.bind(
                    "mousewheel.fb", function(t, i, n, o) {
                        for (var a = t.target || null, s = $(a),
                            l = !1; s.length && !(l || s.is(
                            ".fancybox-skin") || s.is(
                            ".fancybox-wrap"));) l = p(s[0]), s =
                            $(s).parent();
                        0 === i || l || r.group.length > 1 && !
                            e.canShrink && (o > 0 || n > 0 ? r.prev(
                                    o > 0 ? "down" : "left") :
                                (0 > o || 0 > n) && r.next(0 >
                                    o ? "up" : "right"), t.preventDefault()
                            )
                    }))
        },
        trigger: function(e, t) {
            var i, n = t || r.coming || r.current;
            if (n) {
                if ($.isFunction(n[e]) && (i = n[e].apply(n, Array.prototype
                    .slice.call(arguments, 1))), i === !1) return !
                    1;
                n.helpers && $.each(n.helpers, function(t, i) {
                    i && r.helpers[t] && $.isFunction(r.helpers[
                        t][e]) && r.helpers[t][e]($.extend(!
                        0, {}, r.helpers[t].defaults,
                        i), n)
                }), a.trigger(e)
            }
        },
        isImage: function(e) {
            return u(e) && e.match(
                /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i
            )
        },
        isSWF: function(e) {
            return u(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(e) {
            var t = {},
                i, n, o, a, s;
            if (e = f(e), i = r.group[e] || null, !i) return !1;
            if (t = $.extend(!0, {}, r.opts, i), a = t.margin, s =
                t.padding, "number" === $.type(a) && (t.margin = [a,
                    a, a, a
                ]), "number" === $.type(s) && (t.padding = [s, s, s,
                    s
                ]), t.modal && $.extend(!0, t, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                }), t.autoSize && (t.autoWidth = t.autoHeight = !0),
                "auto" === t.width && (t.autoWidth = !0), "auto" ===
                t.height && (t.autoHeight = !0), t.group = r.group,
                t.index = e, r.coming = t, !1 === r.trigger(
                    "beforeLoad")) return void(r.coming = null);
            if (o = t.type, n = t.href, !o) return r.coming = null,
                r.current && r.router && "jumpto" !== r.router ?
                (r.current.index = e, r[r.router](r.direction)) :
                !1;
            if (r.isActive = !0, ("image" === o || "swf" === o) &&
                (t.autoHeight = t.autoWidth = !1, t.scrolling =
                    "visible"), "image" === o && (t.aspectRatio = !
                    0), "iframe" === o && c && (t.scrolling =
                    "scroll"), t.wrap = $(t.tpl.wrap).addClass(
                    "fancybox-" + (c ? "mobile" : "desktop") +
                    " fancybox-type-" + o + " fancybox-tmp " + t.wrapCSS
                ).appendTo(t.parent || "body"), $.extend(t, {
                    skin: $(".fancybox-skin", t.wrap),
                    outer: $(".fancybox-outer", t.wrap),
                    inner: $(".fancybox-inner", t.wrap)
                }), $.each(["Top", "Right", "Bottom", "Left"],
                    function(e, i) {
                        t.skin.css("padding" + i, m(t.padding[e]))
                    }), r.trigger("onReady"), "inline" === o ||
                "html" === o) {
                if (!t.content || !t.content.length) return r._error(
                    "content")
            } else if (!n) return r._error("href");
            "image" === o ? r._loadImage() : "ajax" === o ? r._loadAjax() :
                "iframe" === o ? r._loadIframe() : r._afterLoad()
        },
        _error: function(e) {
            $.extend(r.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: r.coming.tpl.error
            }), r._afterLoad()
        },
        _loadImage: function() {
            var e = r.imgPreload = new Image;
            e.onload = function() {
                this.onload = this.onerror = null, r.coming.width =
                    this.width / r.opts.pixelRatio, r.coming.height =
                    this.height / r.opts.pixelRatio, r._afterLoad()
            }, e.onerror = function() {
                this.onload = this.onerror = null, r._error(
                    "image")
            }, e.src = r.coming.href, e.complete !== !0 && r.showLoading()
        },
        _loadAjax: function() {
            var e = r.coming;
            r.showLoading(), r.ajaxLoad = $.ajax($.extend({}, e.ajax, {
                url: e.href,
                error: function(e, t) {
                    r.coming && "abort" !== t ? r._error(
                        "ajax", e) : r.hideLoading()
                },
                success: function(t, i) {
                    "success" === i && (e.content =
                        t, r._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var e = r.coming,
                t = $(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime()))
                .attr("scrolling", c ? "auto" : e.iframe.scrolling)
                .attr("src", e.href);
            $(e.wrap).bind("onReset", function() {
                    try {
                        $(this).find("iframe").hide().attr(
                            "src", "//about:blank").end().empty()
                    } catch (e) {}
                }), e.iframe.preload && (r.showLoading(), t.one(
                    "load", function() {
                        $(this).data("ready", 1), c || $(this).bind(
                                "load.fb", r.update), $(this).parents(
                                ".fancybox-wrap").width("100%")
                            .removeClass("fancybox-tmp").show(),
                            r._afterLoad()
                    })), e.content = t.appendTo(e.inner), e.iframe.preload ||
                r._afterLoad()
        },
        _preloadImages: function() {
            var e = r.group,
                t = r.current,
                i = e.length,
                n = t.preload ? Math.min(t.preload, i - 1) : 0,
                o, a;
            for (a = 1; n >= a; a += 1) o = e[(t.index + a) % i],
                "image" === o.type && o.href && ((new Image).src =
                    o.href)
        },
        _afterLoad: function() {
            var e = r.coming,
                t = r.current,
                i = "fancybox-placeholder",
                n, o, a, s, l, c;
            if (r.hideLoading(), e && r.isActive !== !1) {
                if (!1 === r.trigger("afterLoad", e, t)) return e.wrap
                    .stop(!0).trigger("onReset").remove(), void(
                        r.coming = null);
                switch (t && (r.trigger("beforeChange", t), t.wrap.stop(!
                        0).removeClass("fancybox-opened").find(
                        ".fancybox-item, .fancybox-nav").remove()),
                    r.unbindEvents(), n = e, o = e.content, a = e.type,
                    s = e.scrolling, $.extend(r, {
                        wrap: n.wrap,
                        skin: n.skin,
                        outer: n.outer,
                        inner: n.inner,
                        current: n,
                        previous: t
                    }), l = n.href, a) {
                    case "inline":
                    case "ajax":
                    case "html":
                        n.selector ? o = $("<div>").html(o).find(n.selector) :
                            d(o) && (o.data(i) || o.data(i, $(
                                    '<div class="' + i +
                                    '"></div>').insertAfter(o).hide()),
                                o = o.show().detach(), n.wrap.bind(
                                    "onReset", function() {
                                        $(this).find(o).length && o
                                            .hide().replaceAll(o.data(
                                                i)).data(i, !1)
                                    }));
                        break;
                    case "image":
                        o = n.tpl.image.replace("{href}", l);
                        break;
                    case "swf":
                        o =
                            '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                            l + '"></param>', c = "", $.each(n.swf,
                                function(e, t) {
                                    o += '<param name="' + e +
                                        '" value="' + t +
                                        '"></param>', c += " " + e +
                                        '="' + t + '"'
                                }), o += '<embed src="' + l +
                            '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                            c + "></embed></object>"
                }
                d(o) && o.parent().is(n.inner) || n.inner.append(o),
                    r.trigger("beforeShow"), n.inner.css("overflow",
                        "yes" === s ? "scroll" : "no" === s ?
                        "hidden" : s), r._setDimension(), r.reposition(),
                    r.isOpen = !1, r.coming = null, r.bindEvents(),
                    r.isOpened ? t.prevMethod && r.transitions[t.prevMethod]
                    () : $(".fancybox-wrap").not(n.wrap).stop(!0).trigger(
                        "onReset").remove(), r.transitions[r.isOpened ?
                        n.nextMethod : n.openMethod](), r._preloadImages()
            }
        },
        _setDimension: function() {
            var e = r.getViewport(),
                t = 0,
                i = !1,
                n = !1,
                o = r.wrap,
                a = r.skin,
                s = r.inner,
                l = r.current,
                c = l.width,
                d = l.height,
                u = l.minWidth,
                p = l.minHeight,
                g = l.maxWidth,
                v = l.maxHeight,
                y = l.scrolling,
                w = l.scrollOutside ? l.scrollbarWidth : 0,
                b = l.margin,
                x = f(b[1] + b[3]),
                S = f(b[0] + b[2]),
                T, _, k, P, I, O, C, E, A, L, B, M, z, X, H;
            if (o.add(a).add(s).width("auto").height("auto").removeClass(
                    "fancybox-tmp"), T = f(a.outerWidth(!0) - a.width()),
                _ = f(a.outerHeight(!0) - a.height()), k = x + T, P =
                S + _, I = h(c) ? (e.w - k) * f(c) / 100 : c, O = h(
                    d) ? (e.h - P) * f(d) / 100 : d, "iframe" === l
                .type) {
                if (X = l.content, l.autoHeight && 1 === X.data(
                    "ready")) try {
                    X[0].contentWindow.document.location && (s.width(
                            I).height(9999), H = X.contents()
                        .find("body"), w && H.css(
                            "overflow-x", "hidden"), O = H.outerHeight(!
                            0))
                } catch (Y) {}
            } else(l.autoWidth || l.autoHeight) && (s.addClass(
                    "fancybox-tmp"), l.autoWidth || s.width(I),
                l.autoHeight || s.height(O), l.autoWidth && (I =
                    s.width()), l.autoHeight && (O = s.height()),
                s.removeClass("fancybox-tmp")); if (c = f(I), d = f(
                    O), A = I / O, u = f(h(u) ? f(u, "w") - k : u),
                g = f(h(g) ? f(g, "w") - k : g), p = f(h(p) ? f(p,
                    "h") - P : p), v = f(h(v) ? f(v, "h") - P : v),
                C = g, E = v, l.fitToView && (g = Math.min(e.w - k,
                    g), v = Math.min(e.h - P, v)), M = e.w - x, z =
                e.h - S, l.aspectRatio ? (c > g && (c = g, d = f(c /
                        A)), d > v && (d = v, c = f(d * A)), u > c &&
                    (c = u, d = f(c / A)), p > d && (d = p, c = f(d *
                        A))) : (c = Math.max(u, Math.min(c, g)), l.autoHeight &&
                    "iframe" !== l.type && (s.width(c), d = s.height()),
                    d = Math.max(p, Math.min(d, v))), l.fitToView)
                if (s.width(c).height(d), o.width(c + T), L = o.width(),
                    B = o.height(), l.aspectRatio)
                    for (;
                        (L > M || B > z) && c > u && d > p && !(t++
                            > 19);) d = Math.max(p, Math.min(v, d -
                            10)), c = f(d * A), u > c && (c = u, d =
                            f(c / A)), c > g && (c = g, d = f(c / A)),
                        s.width(c).height(d), o.width(c + T), L = o
                        .width(), B = o.height();
                else c = Math.max(u, Math.min(c, c - (L - M))), d =
                    Math.max(p, Math.min(d, d - (B - z)));
            w && "auto" === y && O > d && M > c + T + w && (c += w),
                s.width(c).height(d), o.width(c + T), L = o.width(),
                B = o.height(), i = (L > M || B > z) && c > u && d >
                p, n = l.aspectRatio ? C > c && E > d && I > c && O >
                d : (C > c || E > d) && (I > c || O > d), $.extend(
                    l, {
                        dim: {
                            width: m(L),
                            height: m(B)
                        },
                        origWidth: I,
                        origHeight: O,
                        canShrink: i,
                        canExpand: n,
                        wPadding: T,
                        hPadding: _,
                        wrapSpace: B - a.outerHeight(!0),
                        skinSpace: a.height() - d
                    }), !X && l.autoHeight && d > p && v > d && !n &&
                s.height("auto")
        },
        _getPosition: function(e) {
            var t = r.current,
                i = r.getViewport(),
                n = t.margin,
                a = r.wrap.width() + n[1] + n[3],
                s = r.wrap.height() + n[0] + n[2],
                l = {
                    position: "absolute",
                    top: n[0],
                    left: n[3]
                };
            return t.autoCenter && t.fixed && !e && s <= i.h && a <=
                i.w ? l.position = "fixed" : t.locked || (l.top +=
                    i.y, l.left += i.x), self === top ? (l.top = m(
                    Math.max(l.top, l.top + (i.h - s) * t.topRatio)
                ), l.left = m(Math.max(l.left, l.left + (i.w -
                    a) * t.leftRatio))) : l.top = m(l.top + o.scrollTop()),
                l
        },
        _afterZoomIn: function() {
            var e = r.current;
            e && (r.isOpen = r.isOpened = !0, r.wrap.css("overflow",
                    "visible").addClass("fancybox-opened"), r.update(), (
                    e.closeClick || e.nextClick && r.group.length >
                    1) && r.inner.css("cursor", "pointer").bind(
                    "click.fb", function(t) {
                        $(t.target).is("a") || $(t.target).parent()
                            .is("a") || (t.preventDefault(), r[
                                e.closeClick ? "close" :
                                "next"]())
                    }), e.closeBtn && $(e.tpl.closeBtn).appendTo(
                    r.skin).bind("click.fb", function(e) {
                    e.preventDefault(), r.close()
                }), e.arrows && r.group.length > 1 && ((e.loop ||
                    e.index > 0) && $(e.tpl.prev).appendTo(
                    r.outer).bind("click.fb", r.prev), (e.loop ||
                    e.index < r.group.length - 1) && $(e.tpl
                    .next).appendTo(r.outer).bind(
                    "click.fb", r.next)), r.trigger("afterShow"),
                e.loop || e.index !== e.group.length - 1 ? r.opts
                .autoPlay && !r.player.isActive && (r.opts.autoPlay = !
                    1, r.play()) : r.play(!1))
        },
        _afterZoomOut: function(e) {
            e = e || r.current, $(".fancybox-wrap").trigger(
                "onReset").remove(), $.extend(r, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), r.trigger("afterClose", e)
        }
    }), r.transitions = {
        getOrigPosition: function() {
            var e = r.current,
                t = e.element,
                i = e.orig,
                n = {},
                o = 50,
                a = 50,
                s = e.hPadding,
                l = e.wPadding,
                c = r.getViewport();
            return !i && e.isDom && t.is(":visible") && (i = t.find(
                "img:first"), i.length || (i = t)), d(i) ? (n = i.offset(),
                i.is("img") && (o = i.outerWidth(), a = i.outerHeight())
            ) : (n.top = c.y + (c.h - a) * e.topRatio, n.left = c.x +
                (c.w - o) * e.leftRatio), ("fixed" === r.wrap.css(
                "position") || e.locked) && (n.top -= c.y, n.left -=
                c.x), n = {
                top: m(n.top - s * e.topRatio),
                left: m(n.left - l * e.leftRatio),
                width: m(o + l),
                height: m(a + s)
            }
        },
        step: function(e, t) {
            var i, n, o, a = t.prop,
                s = r.current,
                l = s.wrapSpace,
                c = s.skinSpace;
            ("width" === a || "height" === a) && (i = t.end === t.start ?
                1 : (e - t.start) / (t.end - t.start), r.isClosing && (
                    i = 1 - i), n = "width" === a ? s.wPadding : s.hPadding,
                o = e - n, r.skin[a](f("width" === a ? o : o - l * i)),
                r.inner[a](f("width" === a ? o : o - l * i - c * i)))
        },
        zoomIn: function() {
            var e = r.current,
                t = e.pos,
                i = e.openEffect,
                n = "elastic" === i,
                o = $.extend({
                    opacity: 1
                }, t);
            delete o.position, n ? (t = this.getOrigPosition(), e.openOpacity &&
                    (t.opacity = .1)) : "fade" === i && (t.opacity = .1),
                r.wrap.css(t).animate(o, {
                    duration: "none" === i ? 0 : e.openSpeed,
                    easing: e.openEasing,
                    step: n ? this.step : null,
                    complete: r._afterZoomIn
                })
        },
        zoomOut: function() {
            var e = r.current,
                t = e.closeEffect,
                i = "elastic" === t,
                n = {
                    opacity: .1
                };
            i && (n = this.getOrigPosition(), e.closeOpacity && (n.opacity =
                .1)), r.wrap.animate(n, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: i ? this.step : null,
                complete: r._afterZoomOut
            })
        },
        changeIn: function() {
            var e = r.current,
                t = e.nextEffect,
                i = e.pos,
                n = {
                    opacity: 1
                },
                o = r.direction,
                a = 200,
                s;
            i.opacity = .1, "elastic" === t && (s = "down" === o ||
                    "up" === o ? "top" : "left", "down" === o ||
                    "right" === o ? (i[s] = m(f(i[s]) - a), n[s] = "+=" +
                        a + "px") : (i[s] = m(f(i[s]) + a), n[s] = "-=" +
                        a + "px")), "none" === t ? r._afterZoomIn() : r
                .wrap.css(i).animate(n, {
                    duration: e.nextSpeed,
                    easing: e.nextEasing,
                    complete: r._afterZoomIn
                })
        },
        changeOut: function() {
            var e = r.previous,
                t = e.prevEffect,
                i = {
                    opacity: .1
                },
                n = r.direction,
                o = 200;
            "elastic" === t && (i["down" === n || "up" === n ? "top" :
                "left"] = ("up" === n || "left" === n ? "-" :
                "+") + "=" + o + "px"), e.wrap.animate(i, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function() {
                    $(this).trigger("onReset").remove()
                }
            })
        }
    }, r.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !1,
            css: {},
            locked: !c,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: $("html"),
        create: function(e) {
            e = $.extend({}, this.defaults, e), this.overlay && this.close(),
                this.overlay = $(
                    '<div class="modal__cover modal__cover--fancybox"></div>'
                ).appendTo(r.coming ? r.coming.parent : e.parent), this
                .fixed = !1, e.fixed && r.defaults.fixed && (this.overlay
                    .addClass("modal__cover-fixed"), this.fixed = !0)
        },
        open: function(e) {
            var t = this;
            e = $.extend({}, this.defaults, e), this.overlay ? this.overlay
                .unbind(".overlay").width("auto").height("auto") : this
                .create(e), this.fixed || (o.bind("resize.overlay", $.proxy(
                    this.update, this)), this.update()), e.closeClick &&
                this.overlay.bind("click.overlay", function(e) {
                    return $(e.target).hasClass("modal__cover") ? (
                            r.isActive ? r.close() : t.close(), !1) :
                        void 0
                }), this.overlay.css(e.css).show()
        },
        close: function() {
            var e, t;
            o.unbind("resize.overlay"), this.el.hasClass(
                    "fancybox-lock") && ($(".fancybox-margin").removeClass(
                        "fancybox-margin"), e = o.scrollTop(), t = o.scrollLeft(),
                    this.el.removeClass("fancybox-lock"), o.scrollTop(e)
                    .scrollLeft(t)), $(".modal__cover").remove().hide(),
                $.extend(this, {
                    overlay: null,
                    fixed: !1
                })
        },
        update: function() {
            var e = "100%",
                i;
            this.overlay.width(e).height("100%"), s ? (i = Math.max(t.documentElement
                    .offsetWidth, t.body.offsetWidth), a.width() >
                i && (e = a.width())) : a.width() > o.width() && (e =
                a.width()), this.overlay.width(e).height(a.height())
        },
        onReady: function(e, t) {
            var i = this.overlay;
            $(".modal__cover").stop(!0, !0), i || this.create(e), e.locked &&
                this.fixed && t.fixed && (i || (this.margin = a.height() >
                    o.height() ? $("html").css("margin-right").replace(
                        "px", "") : !1), t.locked = this.overlay.append(
                    t.wrap), t.fixed = !1), e.showEarly === !0 ? this.beforeShow
                .apply(this, arguments) : this.overlay.hide()
        },
        beforeShow: function(e, t) {
            var i, n;
            t.locked && (this.margin !== !1 && ($("*").filter(function() {
                    return "fixed" === $(this).css(
                        "position") && !$(this).hasClass(
                        "modal__cover") && !$(this).hasClass(
                        "fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass(
                    "fancybox-margin")), i = o.scrollTop(), n = o.scrollLeft(),
                this.el.addClass("fancybox-lock"), o.scrollTop(i).scrollLeft(
                    n)), this.open(e)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(e) {
            this.overlay && !r.coming && this.overlay.fadeOut(e.speedOut,
                $.proxy(this.close, this))
        }
    }, r.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(e) {
            var t = r.current,
                i = t.title,
                n = e.type,
                o, a;
            if ($.isFunction(i) && (i = i.call(t.element, t)), u(i) &&
                "" !== $.trim(i)) {
                switch (o = $(
                    '<div class="fancybox-title fancybox-title-' +
                    n + '-wrap">' + i + "</div>"), n) {
                    case "inside":
                        a = r.skin;
                        break;
                    case "outside":
                        a = r.wrap;
                        break;
                    case "over":
                        a = r.inner;
                        break;
                    default:
                        a = r.skin, o.appendTo("body"), s && o.width(o.width()),
                            o.wrapInner('<span class="child"></span>'),
                            r.current.margin[2] += Math.abs(f(o.css(
                                "margin-bottom")))
                }
                o["top" === e.position ? "prependTo" : "appendTo"](a)
            }
        }
    }, $.fn.fancybox = function(e) {
        var t, i = $(this),
            n = this.selector || "",
            o = function(o) {
                var a = $(this).blur(),
                    s = t,
                    l, c;
                o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || a.is(
                    ".fancybox-wrap") || (l = e.groupAttr ||
                    "data-fancybox-group", c = a.attr(l), c || (l =
                        "rel", c = a.get(0)[l]), c && "" !== c &&
                    "nofollow" !== c && (a = n.length ? $(n) : i, a = a
                        .filter("[" + l + '="' + c + '"]'), s = a.index(
                            this)), e.index = s, r.open(a, e) !== !1 &&
                    o.preventDefault())
            };
        return e = e || {}, t = e.index || 0, n && e.live !== !1 ? a.undelegate(
                n, "click.fb-start").delegate(n +
                ":not('.fancybox-item, .fancybox-nav')", "click.fb-start",
                o) : i.unbind("click.fb-start").bind("click.fb-start", o),
            this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, a.ready(function() {
        var t, o;
        $.scrollbarWidth === i && ($.scrollbarWidth = function() {
                var e = $(
                        '<div style="width:50px;height:50px;overflow:auto"><div/></div>'
                    ).appendTo("body"),
                    t = e.children(),
                    i = t.innerWidth() - t.height(99).innerWidth();
                return e.remove(), i
            }), $.support.fixedPosition === i && ($.support.fixedPosition =
                function() {
                    var e = $(
                            '<div style="position:fixed;top:20px;"></div>'
                        ).appendTo("body"),
                        t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                    return e.remove(), t
                }()), $.extend(r.defaults, {
                scrollbarWidth: $.scrollbarWidth(),
                fixed: $.support.fixedPosition,
                parent: $("body")
            }), t = $(e).width(), n.addClass("fancybox-lock-test"), o =
            $(e).width(), n.removeClass("fancybox-lock-test"), $(
                "<style type='text/css'>.fancybox-margin{margin-right:" +
                (o - t) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery),
function(e, t, i) {
    function n(e, i) {
        this.wrapper = "string" == typeof e ? t.querySelector(e) : e, this.scroller =
            this.wrapper.children[0], this.scrollerStyle = this.scroller.style,
            this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: .334,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0
            };
        for (var n in i) this.options[n] = i[n];
        this.translateZ = this.options.HWCompositing && s.hasPerspective ?
            " translateZ(0)" : "", this.options.useTransition = s.hasTransition &&
            this.options.useTransition, this.options.useTransform = s.hasTransform &&
            this.options.useTransform, this.options.eventPassthrough = this
            .options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough,
            this.options.preventDefault = !this.options.eventPassthrough &&
            this.options.preventDefault, this.options.scrollY = "vertical" ==
            this.options.eventPassthrough ? !1 : this.options.scrollY, this
            .options.scrollX = "horizontal" == this.options.eventPassthrough ?
            !1 : this.options.scrollX, this.options.freeScroll = this.options
            .freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold =
            this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
            this.options.bounceEasing = "string" == typeof this.options.bounceEasing ?
            s.ease[this.options.bounceEasing] || s.ease.circular : this.options
            .bounceEasing, this.options.resizePolling = void 0 === this.options
            .resizePolling ? 60 : this.options.resizePolling, this.options.tap ===
            !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars &&
            (this.options.useTransition = !1), this.options.invertWheelDirection =
            this.options.invertWheelDirection ? -1 : 1, 3 == this.options.probeType &&
            (this.options.useTransition = !1), this.x = 0, this.y = 0, this
            .directionX = 0, this.directionY = 0, this._events = {}, this._init(),
            this.refresh(), this.scrollTo(this.options.startX, this.options
                .startY), this.enable()
    }

    function o(e, i, n) {
        var o = t.createElement("div"),
            a = t.createElement("div");
        return n === !0 && (o.style.cssText =
                "position:absolute;z-index:9999", a.style.cssText =
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"
            ), a.className = "iScrollIndicator", "h" == e ? (n === !0 && (o
                .style.cssText +=
                ";height:7px;left:2px;right:2px;bottom:0", a.style.height =
                "100%"), o.className = "iScrollHorizontalScrollbar") : (n ===
                !0 && (o.style.cssText +=
                    ";width:7px;bottom:2px;top:2px;right:1px", a.style.width =
                    "100%"), o.className = "iScrollVerticalScrollbar"), o.style
            .cssText += ";overflow:hidden", i || (o.style.pointerEvents =
                "none"), o.appendChild(a), o
    }

    function a(i, n) {
        this.wrapper = "string" == typeof n.el ? t.querySelector(n.el) : n.el,
            this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper
            .children[0], this.indicatorStyle = this.indicator.style, this.scroller =
            i, this.options = {
                listenX: !0,
                listenY: !0,
                interactive: !1,
                resize: !0,
                defaultScrollbars: !1,
                shrink: !1,
                fade: !1,
                speedRatioX: 0,
                speedRatioY: 0
            };
        for (var o in n) this.options[o] = n[o];
        this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY =
            0, this.options.interactive && (this.options.disableTouch || (s
                    .addEvent(this.indicator, "touchstart", this), s.addEvent(
                        e, "touchend", this)), this.options.disablePointer ||
                (s.addEvent(this.indicator, s.prefixPointerEvent(
                    "pointerdown"), this), s.addEvent(e, s.prefixPointerEvent(
                    "pointerup"), this)), this.options.disableMouse || (s.addEvent(
                    this.indicator, "mousedown", this), s.addEvent(e,
                    "mouseup", this))), this.options.fade && (this.wrapperStyle[
                    s.style.transform] = this.scroller.translateZ, this.wrapperStyle[
                    s.style.transitionDuration] = s.isBadAndroid ? "0.001s" :
                "0ms", this.wrapperStyle.opacity = "0")
    }
    var r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame ||
        e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
            e.setTimeout(t, 1e3 / 60)
        },
        s = function() {
            function n(e) {
                return r === !1 ? !1 : "" === r ? e : r + e.charAt(0).toUpperCase() +
                    e.substr(1)
            }
            var o = {},
                a = t.createElement("div").style,
                r = function() {
                    for (var e = ["t", "webkitT", "MozT", "msT", "OT"], t, i =
                        0, n = e.length; n > i; i++)
                        if (t = e[i] + "ransform", t in a) return e[i].substr(0,
                            e[i].length - 1);
                    return !1
                }();
            o.getTime = Date.now || function l() {
                return (new Date).getTime()
            }, o.extend = function(e, t) {
                for (var i in t) e[i] = t[i]
            }, o.addEvent = function(e, t, i, n) {
                e.addEventListener(t, i, !!n)
            }, o.removeEvent = function(e, t, i, n) {
                e.removeEventListener(t, i, !!n)
            }, o.prefixPointerEvent = function(t) {
                return e.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() +
                    t.substr(10) : t
            }, o.momentum = function(e, t, n, o, a, r) {
                var s = e - t,
                    l = i.abs(s) / n,
                    c, d;
                return r = void 0 === r ? 6e-4 : r, c = e + l * l / (2 * r) *
                    (0 > s ? -1 : 1), d = l / r, o > c ? (c = a ? o - a / 2
                        .5 * (l / 8) : o, s = i.abs(c - e), d = s / l) : c >
                    0 && (c = a ? a / 2.5 * (l / 8) : 0, s = i.abs(e) + c,
                        d = s / l), {
                        destination: i.round(c),
                        duration: d
                    }
            };
            var s = n("transform");
            return o.extend(o, {
                    hasTransform: s !== !1,
                    hasPerspective: n("perspective") in a,
                    hasTouch: "ontouchstart" in e,
                    hasPointer: e.PointerEvent || e.MSPointerEvent,
                    hasTransition: n("transition") in a
                }), o.isBadAndroid = /Android /.test(e.navigator.appVersion) &&
                !/Chrome\/\d/.test(e.navigator.appVersion), o.extend(o.style = {}, {
                    transform: s,
                    transitionTimingFunction: n("transitionTimingFunction"),
                    transitionDuration: n("transitionDuration"),
                    transitionDelay: n("transitionDelay"),
                    transformOrigin: n("transformOrigin")
                }), o.hasClass = function(e, t) {
                    var i = new RegExp("(^|\\s)" + t + "(\\s|$)");
                    return i.test(e.className)
                }, o.addClass = function(e, t) {
                    if (!o.hasClass(e, t)) {
                        var i = e.className.split(" ");
                        i.push(t), e.className = i.join(" ")
                    }
                }, o.removeClass = function(e, t) {
                    if (o.hasClass(e, t)) {
                        var i = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
                        e.className = e.className.replace(i, " ")
                    }
                }, o.offset = function(e) {
                    for (var t = -e.offsetLeft, i = -e.offsetTop; e = e.offsetParent;)
                        t -= e.offsetLeft, i -= e.offsetTop;
                    return {
                        left: t,
                        top: i
                    }
                }, o.preventDefaultException = function(e, t) {
                    for (var i in t)
                        if (t[i].test(e[i])) return !0;
                    return !1
                }, o.extend(o.eventType = {}, {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3
                }), o.extend(o.ease = {}, {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function(e) {
                            return e * (2 - e)
                        }
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function(e) {
                            return i.sqrt(1 - --e * e)
                        }
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function(e) {
                            var t = 4;
                            return (e -= 1) * e * ((t + 1) * e + t) + 1
                        }
                    },
                    bounce: {
                        style: "",
                        fn: function(e) {
                            return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e :
                                2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) *
                                e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -=
                                    2.25 / 2.75) * e + .9375 : 7.5625 *
                                (e -= 2.625 / 2.75) * e + .984375
                        }
                    },
                    elastic: {
                        style: "",
                        fn: function(e) {
                            var t = .22,
                                n = .4;
                            return 0 === e ? 0 : 1 == e ? 1 : n * i.pow(
                                2, -10 * e) * i.sin(2 * (e - t / 4) *
                                i.PI / t) + 1
                        }
                    }
                }), o.tap = function(e, i) {
                    var n = t.createEvent("Event");
                    n.initEvent(i, !0, !0), n.pageX = e.pageX, n.pageY = e.pageY,
                        e.target.dispatchEvent(n)
                }, o.click = function(e) {
                    var i = e.target,
                        n;
                    /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (n = t.createEvent(
                        "MouseEvents"), n.initMouseEvent("click", !0, !
                        0, e.view, 1, i.screenX, i.screenY, i.clientX,
                        i.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
                        0, null), n._constructed = !0, i.dispatchEvent(
                        n))
                }, o
        }();
    n.prototype = {
            version: "5.1.2",
            _init: function() {
                this._initEvents(), (this.options.scrollbars || this.options
                        .indicators) && this._initIndicators(), this.options
                    .mouseWheel && this._initWheel(), this.options.snap &&
                    this._initSnap(), this.options.keyBindings && this._initKeys()
            },
            destroy: function() {
                this._initEvents(!0), this._execEvent("destroy")
            },
            _transitionEnd: function(e) {
                e.target == this.scroller && this.isInTransition && (this._transitionTime(),
                    this.resetPosition(this.options.bounceTime) || (
                        this.isInTransition = !1, this._execEvent(
                            "scrollEnd")))
            },
            _start: function(e) {
                if (!(1 != s.eventType[e.type] && 0 !== e.button || !this.enabled ||
                    this.initiated && s.eventType[e.type] !== this.initiated
                )) {
                    !this.options.preventDefault || s.isBadAndroid || s.preventDefaultException(
                            e.target, this.options.preventDefaultException) ||
                        e.preventDefault();
                    var t = e.touches ? e.touches[0] : e,
                        n;
                    this.initiated = s.eventType[e.type], this.moved = !1,
                        this.distX = 0, this.distY = 0, this.directionX = 0,
                        this.directionY = 0, this.directionLocked = 0, this
                        ._transitionTime(), this.startTime = s.getTime(),
                        this.options.useTransition && this.isInTransition ?
                        (this.isInTransition = !1, n = this.getComputedPosition(),
                            this._translate(i.round(n.x), i.round(n.y)),
                            this._execEvent("scrollEnd")) : !this.options.useTransition &&
                        this.isAnimating && (this.isAnimating = !1, this._execEvent(
                            "scrollEnd")), this.startX = this.x, this.startY =
                        this.y, this.absStartX = this.x, this.absStartY =
                        this.y, this.pointX = t.pageX, this.pointY = t.pageY,
                        this._execEvent("beforeScrollStart")
                }
            },
            _move: function(e) {
                if (this.enabled && s.eventType[e.type] === this.initiated) {
                    this.options.preventDefault && e.preventDefault();
                    var t = e.touches ? e.touches[0] : e,
                        n = t.pageX - this.pointX,
                        o = t.pageY - this.pointY,
                        a = s.getTime(),
                        r, l, c, d;
                    if (this.pointX = t.pageX, this.pointY = t.pageY, this.distX +=
                        n, this.distY += o, c = i.abs(this.distX), d = i.abs(
                            this.distY), !(a - this.endTime > 300 && 10 > c &&
                            10 > d)) {
                        if (this.directionLocked || this.options.freeScroll ||
                            (this.directionLocked = c > d + this.options.directionLockThreshold ?
                                "h" : d >= c + this.options.directionLockThreshold ?
                                "v" : "n"), "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough)
                                e.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough)
                                return void(this.initiated = !1);
                            o = 0
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough)
                                e.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough)
                                return void(this.initiated = !1);
                            n = 0
                        }
                        n = this.hasHorizontalScroll ? n : 0, o = this.hasVerticalScroll ?
                            o : 0, r = this.x + n, l = this.y + o, (r > 0 ||
                                r < this.maxScrollX) && (r = this.options.bounce ?
                                this.x + n / 3 : r > 0 ? 0 : this.maxScrollX
                            ), (l > 0 || l < this.maxScrollY) && (l = this.options
                                .bounce ? this.y + o / 3 : l > 0 ? 0 : this
                                .maxScrollY), this.directionX = n > 0 ? -1 :
                            0 > n ? 1 : 0, this.directionY = o > 0 ? -1 : 0 >
                            o ? 1 : 0, this.moved || this._execEvent(
                                "scrollStart"), this.moved = !0, this._translate(
                                r, l), a - this.startTime > 300 && (this.startTime =
                                a, this.startX = this.x, this.startY = this
                                .y, 1 == this.options.probeType && this._execEvent(
                                    "scroll")), this.options.probeType > 1 &&
                            this._execEvent("scroll")
                    }
                }
            },
            _end: function(e) {
                if (this.enabled && s.eventType[e.type] === this.initiated) {
                    this.options.preventDefault && !s.preventDefaultException(
                            e.target, this.options.preventDefaultException) &&
                        e.preventDefault();
                    var t = e.changedTouches ? e.changedTouches[0] : e,
                        n, o, a = s.getTime() - this.startTime,
                        r = i.round(this.x),
                        l = i.round(this.y),
                        c = i.abs(r - this.startX),
                        d = i.abs(l - this.startY),
                        u = 0,
                        h = "";
                    if (this.isInTransition = 0, this.initiated = 0, this.endTime =
                        s.getTime(), !this.resetPosition(this.options.bounceTime)
                    ) {
                        if (this.scrollTo(r, l), !this.moved) return this.options
                            .tap && s.tap(e, this.options.tap), this.options
                            .click && s.click(e), void this._execEvent(
                                "scrollCancel");
                        if (this._events.flick && 200 > a && 100 > c && 100 >
                            d) return void this._execEvent("flick");
                        if (this.options.momentum && 300 > a && (n = this.hasHorizontalScroll ?
                            s.momentum(this.x, this.startX, a, this.maxScrollX,
                                this.options.bounce ? this.wrapperWidth :
                                0, this.options.deceleration) : {
                                destination: r,
                                duration: 0
                            }, o = this.hasVerticalScroll ? s.momentum(
                                this.y, this.startY, a, this.maxScrollY,
                                this.options.bounce ? this.wrapperHeight :
                                0, this.options.deceleration) : {
                                destination: l,
                                duration: 0
                            }, r = n.destination, l = o.destination, u =
                            i.max(n.duration, o.duration), this.isInTransition =
                            1), this.options.snap) {
                            var p = this._nearestSnap(r, l);
                            this.currentPage = p, u = this.options.snapSpeed ||
                                i.max(i.max(i.min(i.abs(r - p.x), 1e3), i.min(
                                    i.abs(l - p.y), 1e3)), 300), r = p.x, l =
                                p.y, this.directionX = 0, this.directionY =
                                0, h = this.options.bounceEasing
                        }
                        return r != this.x || l != this.y ? ((r > 0 || r <
                            this.maxScrollX || l > 0 || l < this.maxScrollY
                        ) && (h = s.ease.quadratic), void this.scrollTo(
                            r, l, u, h)) : void this._execEvent(
                            "scrollEnd")
                    }
                }
            },
            _resize: function() {
                var e = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout =
                    setTimeout(function() {
                        e.refresh()
                    }, this.options.resizePolling)
            },
            resetPosition: function(e) {
                var t = this.x,
                    i = this.y;
                return e = e || 0, !this.hasHorizontalScroll || this.x > 0 ?
                    t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !
                    this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y <
                    this.maxScrollY && (i = this.maxScrollY), t == this.x &&
                    i == this.y ? !1 : (this.scrollTo(t, i, e, this.options
                        .bounceEasing), !0)
            },
            disable: function() {
                this.enabled = !1
            },
            enable: function() {
                this.enabled = !0
            },
            refresh: function() {
                var e = this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight =
                    this.wrapper.clientHeight, this.scrollerWidth = this.scroller
                    .offsetWidth, this.scrollerHeight = this.scroller.offsetHeight,
                    this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
                    this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
                    this.hasHorizontalScroll = this.options.scrollX && this
                    .maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY &&
                    this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX =
                        0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll ||
                    (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
                    this.endTime = 0, this.directionX = 0, this.directionY =
                    0, this.wrapperOffset = s.offset(this.wrapper), this._execEvent(
                        "refresh"), this.resetPosition()
            },
            on: function(e, t) {
                this._events[e] || (this._events[e] = []), this._events[e].push(
                    t)
            },
            off: function(e, t) {
                if (this._events[e]) {
                    var i = this._events[e].indexOf(t);
                    i > -1 && this._events[e].splice(i, 1)
                }
            },
            _execEvent: function(e) {
                if (this._events[e]) {
                    var t = 0,
                        i = this._events[e].length;
                    if (i)
                        for (; i > t; t++) this._events[e][t].apply(this, []
                            .slice.call(arguments, 1))
                }
            },
            scrollBy: function(e, t, i, n) {
                e = this.x + e, t = this.y + t, i = i || 0, this.scrollTo(e,
                    t, i, n)
            },
            scrollTo: function(e, t, i, n) {
                n = n || s.ease.circular, this.isInTransition = this.options
                    .useTransition && i > 0, !i || this.options.useTransition &&
                    n.style ? (this._transitionTimingFunction(n.style),
                        this._transitionTime(i), this._translate(e, t)) :
                    this._animate(e, t, i, n.fn)
            },
            scrollToElement: function(e, t, n, o, a) {
                if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
                    var r = s.offset(e);
                    r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset
                        .top, n === !0 && (n = i.round(e.offsetWidth / 2 -
                            this.wrapper.offsetWidth / 2)), o === !0 && (o =
                            i.round(e.offsetHeight / 2 - this.wrapper.offsetHeight /
                                2)), r.left -= n || 0, r.top -= o || 0, r.left =
                        r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX :
                        r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ?
                        this.maxScrollY : r.top, t = void 0 === t || null ===
                        t || "auto" === t ? i.max(i.abs(this.x - r.left), i
                            .abs(this.y - r.top)) : t, this.scrollTo(r.left,
                            r.top, t, a)
                }
            },
            _transitionTime: function(e) {
                if (e = e || 0, this.scrollerStyle[s.style.transitionDuration] =
                    e + "ms", !e && s.isBadAndroid && (this.scrollerStyle[s
                        .style.transitionDuration] = "0.001s"), this.indicators
                )
                    for (var t = this.indicators.length; t--;) this.indicators[
                        t].transitionTime(e)
            },
            _transitionTimingFunction: function(e) {
                if (this.scrollerStyle[s.style.transitionTimingFunction] =
                    e, this.indicators)
                    for (var t = this.indicators.length; t--;) this.indicators[
                        t].transitionTimingFunction(e)
            },
            _translate: function(e, t) {
                if (this.options.useTransform ? this.scrollerStyle[s.style.transform] =
                    "translate(" + e + "px," + t + "px)" + this.translateZ :
                    (e = i.round(e), t = i.round(t), this.scrollerStyle.left =
                        e + "px", this.scrollerStyle.top = t + "px"), this.x =
                    e, this.y = t, this.indicators)
                    for (var n = this.indicators.length; n--;) this.indicators[
                        n].updatePosition()
            },
            _initEvents: function(t) {
                var i = t ? s.removeEvent : s.addEvent,
                    n = this.options.bindToWrapper ? this.wrapper : e;
                i(e, "orientationchange", this), i(e, "resize", this), this
                    .options.click && i(this.wrapper, "click", this, !0),
                    this.options.disableMouse || (i(this.wrapper,
                        "mousedown", this), i(n, "mousemove", this), i(
                        n, "mousecancel", this), i(n, "mouseup", this)), s.hasPointer &&
                    !this.options.disablePointer && (i(this.wrapper, s.prefixPointerEvent(
                        "pointerdown"), this), i(n, s.prefixPointerEvent(
                        "pointermove"), this), i(n, s.prefixPointerEvent(
                        "pointercancel"), this), i(n, s.prefixPointerEvent(
                        "pointerup"), this)), s.hasTouch && !this.options.disableTouch &&
                    (i(this.wrapper, "touchstart", this), i(n, "touchmove",
                        this), i(n, "touchcancel", this), i(n,
                        "touchend", this)), i(this.scroller,
                        "transitionend", this), i(this.scroller,
                        "webkitTransitionEnd", this), i(this.scroller,
                        "oTransitionEnd", this), i(this.scroller,
                        "MSTransitionEnd", this)
            },
            getComputedPosition: function() {
                var t = e.getComputedStyle(this.scroller, null),
                    i, n;
                return this.options.useTransform ? (t = t[s.style.transform]
                    .split(")")[0].split(", "), i = +(t[12] || t[4]), n = +
                    (t[13] || t[5])) : (i = +t.left.replace(/[^-\d.]/g,
                    ""), n = +t.top.replace(/[^-\d.]/g, "")), {
                    x: i,
                    y: n
                }
            },
            _initIndicators: function() {
                function e(e) {
                    for (var t = s.indicators.length; t--;) e.call(s.indicators[
                        t])
                }
                var t = this.options.interactiveScrollbars,
                    i = "string" != typeof this.options.scrollbars,
                    n = [],
                    r, s = this;
                this.indicators = [], this.options.scrollbars && (this.options
                        .scrollY && (r = {
                            el: o("v", t, this.options.scrollbars),
                            interactive: t,
                            defaultScrollbars: !0,
                            customStyle: i,
                            resize: this.options.resizeScrollbars,
                            shrink: this.options.shrinkScrollbars,
                            fade: this.options.fadeScrollbars,
                            listenX: !1
                        }, this.wrapper.appendChild(r.el), n.push(r)), this
                        .options.scrollX && (r = {
                            el: o("h", t, this.options.scrollbars),
                            interactive: t,
                            defaultScrollbars: !0,
                            customStyle: i,
                            resize: this.options.resizeScrollbars,
                            shrink: this.options.shrinkScrollbars,
                            fade: this.options.fadeScrollbars,
                            listenY: !1
                        }, this.wrapper.appendChild(r.el), n.push(r))),
                    this.options.indicators && (n = n.concat(this.options.indicators));
                for (var l = n.length; l--;) this.indicators.push(new a(
                    this, n[l]));
                this.options.fadeScrollbars && (this.on("scrollEnd",
                    function() {
                        e(function() {
                            this.fade()
                        })
                    }), this.on("scrollCancel", function() {
                    e(function() {
                        this.fade()
                    })
                }), this.on("scrollStart", function() {
                    e(function() {
                        this.fade(1)
                    })
                }), this.on("beforeScrollStart", function() {
                    e(function() {
                        this.fade(1, !0)
                    })
                })), this.on("refresh", function() {
                    e(function() {
                        this.refresh()
                    })
                }), this.on("destroy", function() {
                    e(function() {
                        this.destroy()
                    }), delete this.indicators
                })
            },
            _initWheel: function() {
                s.addEvent(this.wrapper, "wheel", this), s.addEvent(this.wrapper,
                    "mousewheel", this), s.addEvent(this.wrapper,
                    "DOMMouseScroll", this), this.on("destroy",
                    function() {
                        s.removeEvent(this.wrapper, "wheel", this), s.removeEvent(
                            this.wrapper, "mousewheel", this), s.removeEvent(
                            this.wrapper, "DOMMouseScroll", this)
                    })
            },
            _wheel: function(e) {
                if (this.enabled) {
                    e.preventDefault(), e.stopPropagation();
                    var t, n, o, a, r = this;
                    if (void 0 === this.wheelTimeout && r._execEvent(
                            "scrollStart"), clearTimeout(this.wheelTimeout),
                        this.wheelTimeout = setTimeout(function() {
                            r._execEvent("scrollEnd"), r.wheelTimeout =
                                void 0
                        }, 400), "deltaX" in e) t = -e.deltaX, n = -e.deltaY;
                    else if ("wheelDeltaX" in e) t = e.wheelDeltaX / 120 *
                        this.options.mouseWheelSpeed, n = e.wheelDeltaY /
                        120 * this.options.mouseWheelSpeed;
                    else if ("wheelDelta" in e) t = n = e.wheelDelta / 120 *
                        this.options.mouseWheelSpeed;
                    else {
                        if (!("detail" in e)) return;
                        t = n = -e.detail / 3 * this.options.mouseWheelSpeed
                    } if (t *= this.options.invertWheelDirection, n *= this
                        .options.invertWheelDirection, this.hasVerticalScroll ||
                        (t = n, n = 0), this.options.snap) return o = this.currentPage
                        .pageX, a = this.currentPage.pageY, t > 0 ? o--
                        : 0 > t && o++, n > 0 ? a-- : 0 > n && a++,
                        void this.goToPage(o, a);
                    o = this.x + i.round(this.hasHorizontalScroll ? t : 0),
                        a = this.y + i.round(this.hasVerticalScroll ? n : 0),
                        o > 0 ? o = 0 : o < this.maxScrollX && (o = this.maxScrollX),
                        a > 0 ? a = 0 : a < this.maxScrollY && (a = this.maxScrollY),
                        this.scrollTo(o, a, 0), this.options.probeType > 1 &&
                        this._execEvent("scroll")
                }
            },
            _initSnap: function() {
                this.currentPage = {}, "string" == typeof this.options.snap &&
                    (this.options.snap = this.scroller.querySelectorAll(
                        this.options.snap)), this.on("refresh", function() {
                        var e = 0,
                            t, n = 0,
                            o, a, r, s = 0,
                            l, c = this.options.snapStepX || this.wrapperWidth,
                            d = this.options.snapStepY || this.wrapperHeight,
                            u;
                        if (this.pages = [], this.wrapperWidth && this.wrapperHeight &&
                            this.scrollerWidth && this.scrollerHeight) {
                            if (this.options.snap === !0)
                                for (a = i.round(c / 2), r = i.round(d /
                                    2); s > -this.scrollerWidth;) {
                                    for (this.pages[e] = [], t = 0, l =
                                        0; l > -this.scrollerHeight;)
                                        this.pages[e][t] = {
                                            x: i.max(s, this.maxScrollX),
                                            y: i.max(l, this.maxScrollY),
                                            width: c,
                                            height: d,
                                            cx: s - a,
                                            cy: l - r
                                        }, l -= d, t++;
                                    s -= c, e++
                                } else
                                    for (u = this.options.snap, t = u.length,
                                        o = -1; t > e; e++)(0 === e ||
                                            u[e].offsetLeft <= u[e - 1]
                                            .offsetLeft) && (n = 0, o++),
                                        this.pages[n] || (this.pages[n] = []),
                                        s = i.max(-u[e].offsetLeft,
                                            this.maxScrollX), l = i.max(-
                                            u[e].offsetTop, this.maxScrollY
                                        ), a = s - i.round(u[e].offsetWidth /
                                            2), r = l - i.round(u[e].offsetHeight /
                                            2), this.pages[n][o] = {
                                            x: s,
                                            y: l,
                                            width: u[e].offsetWidth,
                                            height: u[e].offsetHeight,
                                            cx: a,
                                            cy: r
                                        }, s > this.maxScrollX && n++;
                            this.goToPage(this.currentPage.pageX || 0,
                                    this.currentPage.pageY || 0, 0),
                                this.options.snapThreshold % 1 === 0 ?
                                (this.snapThresholdX = this.options.snapThreshold,
                                    this.snapThresholdY = this.options.snapThreshold
                                ) : (this.snapThresholdX = i.round(this
                                    .pages[this.currentPage.pageX][
                                        this.currentPage.pageY
                                    ].width * this.options.snapThreshold
                                ), this.snapThresholdY = i.round(
                                    this.pages[this.currentPage.pageX]
                                    [this.currentPage.pageY].height *
                                    this.options.snapThreshold))
                        }
                    }), this.on("flick", function() {
                        var e = this.options.snapSpeed || i.max(i.max(i
                            .min(i.abs(this.x - this.startX),
                                1e3), i.min(i.abs(this.y - this
                                .startY), 1e3)), 300);
                        this.goToPage(this.currentPage.pageX + this.directionX,
                            this.currentPage.pageY + this.directionY,
                            e)
                    })
            },
            _nearestSnap: function(e, t) {
                if (!this.pages.length) return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
                var n = 0,
                    o = this.pages.length,
                    a = 0;
                if (i.abs(e - this.absStartX) < this.snapThresholdX && i.abs(
                    t - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX),
                    t > 0 ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY); o >
                    n; n++)
                    if (e >= this.pages[n][0].cx) {
                        e = this.pages[n][0].x;
                        break
                    }
                for (o = this.pages[n].length; o > a; a++)
                    if (t >= this.pages[0][a].cy) {
                        t = this.pages[0][a].y;
                        break
                    }
                return n == this.currentPage.pageX && (n += this.directionX,
                        0 > n ? n = 0 : n >= this.pages.length && (n = this
                            .pages.length - 1), e = this.pages[n][0].x), a ==
                    this.currentPage.pageY && (a += this.directionY, 0 > a ?
                        a = 0 : a >= this.pages[0].length && (a = this.pages[
                            0].length - 1), t = this.pages[0][a].y), {
                        x: e,
                        y: t,
                        pageX: n,
                        pageY: a
                    }
            },
            goToPage: function(e, t, n, o) {
                o = o || this.options.bounceEasing, e >= this.pages.length ?
                    e = this.pages.length - 1 : 0 > e && (e = 0), t >= this
                    .pages[e].length ? t = this.pages[e].length - 1 : 0 > t &&
                    (t = 0);
                var a = this.pages[e][t].x,
                    r = this.pages[e][t].y;
                n = void 0 === n ? this.options.snapSpeed || i.max(i.max(i.min(
                    i.abs(a - this.x), 1e3), i.min(i.abs(r -
                    this.y), 1e3)), 300) : n, this.currentPage = {
                    x: a,
                    y: r,
                    pageX: e,
                    pageY: t
                }, this.scrollTo(a, r, n, o)
            },
            next: function(e, t) {
                var i = this.currentPage.pageX,
                    n = this.currentPage.pageY;
                i++, i >= this.pages.length && this.hasVerticalScroll && (i =
                    0, n++), this.goToPage(i, n, e, t)
            },
            prev: function(e, t) {
                var i = this.currentPage.pageX,
                    n = this.currentPage.pageY;
                i--, 0 > i && this.hasVerticalScroll && (i = 0, n--), this.goToPage(
                    i, n, e, t)
            },
            _initKeys: function(t) {
                var i = {
                        pageUp: 33,
                        pageDown: 34,
                        end: 35,
                        home: 36,
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40
                    },
                    n;
                if ("object" == typeof this.options.keyBindings)
                    for (n in this.options.keyBindings) "string" == typeof this
                        .options.keyBindings[n] && (this.options.keyBindings[
                                n] = this.options.keyBindings[n].toUpperCase()
                            .charCodeAt(0));
                else this.options.keyBindings = {};
                for (n in i) this.options.keyBindings[n] = this.options.keyBindings[
                    n] || i[n];
                s.addEvent(e, "keydown", this), this.on("destroy", function() {
                    s.removeEvent(e, "keydown", this)
                })
            },
            _key: function(e) {
                if (this.enabled) {
                    var t = this.options.snap,
                        n = t ? this.currentPage.pageX : this.x,
                        o = t ? this.currentPage.pageY : this.y,
                        a = s.getTime(),
                        r = this.keyTime || 0,
                        l = .25,
                        c;
                    switch (this.options.useTransition && this.isInTransition &&
                        (c = this.getComputedPosition(), this._translate(i.round(
                                c.x), i.round(c.y)), this.isInTransition = !
                            1), this.keyAcceleration = 200 > a - r ? i.min(
                            this.keyAcceleration + l, 50) : 0, e.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ?
                                n += t ? 1 : this.wrapperWidth : o += t ? 1 :
                                this.wrapperHeight;
                            break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ?
                                n -= t ? 1 : this.wrapperWidth : o -= t ? 1 :
                                this.wrapperHeight;
                            break;
                        case this.options.keyBindings.end:
                            n = t ? this.pages.length - 1 : this.maxScrollX,
                                o = t ? this.pages[0].length - 1 : this.maxScrollY;
                            break;
                        case this.options.keyBindings.home:
                            n = 0, o = 0;
                            break;
                        case this.options.keyBindings.left:
                            n += t ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.up:
                            o += t ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.right:
                            n -= t ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.down:
                            o -= t ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        default:
                            return
                    }
                    if (t) return void this.goToPage(n, o);
                    n > 0 ? (n = 0, this.keyAcceleration = 0) : n < this.maxScrollX &&
                        (n = this.maxScrollX, this.keyAcceleration = 0), o >
                        0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollY &&
                        (o = this.maxScrollY, this.keyAcceleration = 0),
                        this.scrollTo(n, o, 0), this.keyTime = a
                }
            },
            _animate: function(e, t, i, n) {
                function o() {
                    var h = s.getTime(),
                        p, f, m;
                    return h >= u ? (a.isAnimating = !1, a._translate(e,
                        t), void(a.resetPosition(a.options.bounceTime) ||
                        a._execEvent("scrollEnd"))) : (h = (h - d) /
                        i, m = n(h), p = (e - l) * m + l, f = (t -
                            c) * m + c, a._translate(p, f), a.isAnimating &&
                        r(o), void(3 == a.options.probeType && a._execEvent(
                            "scroll")))
                }
                var a = this,
                    l = this.x,
                    c = this.y,
                    d = s.getTime(),
                    u = d + i;
                this.isAnimating = !0, o()
            },
            handleEvent: function(e) {
                switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(e);
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(e);
                        break;
                    case "keydown":
                        this._key(e);
                        break;
                    case "click":
                        e._constructed || (e.preventDefault(), e.stopPropagation())
                }
            }
        }, a.prototype = {
            handleEvent: function(e) {
                switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e)
                }
            },
            destroy: function() {
                this.options.interactive && (s.removeEvent(this.indicator,
                        "touchstart", this), s.removeEvent(this.indicator,
                        s.prefixPointerEvent("pointerdown"), this), s.removeEvent(
                        this.indicator, "mousedown", this), s.removeEvent(
                        e, "touchmove", this), s.removeEvent(e, s.prefixPointerEvent(
                        "pointermove"), this), s.removeEvent(e,
                        "mousemove", this), s.removeEvent(e, "touchend",
                        this), s.removeEvent(e, s.prefixPointerEvent(
                        "pointerup"), this), s.removeEvent(e, "mouseup",
                        this)), this.options.defaultScrollbars && this.wrapper
                    .parentNode.removeChild(this.wrapper)
            },
            _start: function(t) {
                var i = t.touches ? t.touches[0] : t;
                t.preventDefault(), t.stopPropagation(), this.transitionTime(),
                    this.initiated = !0, this.moved = !1, this.lastPointX =
                    i.pageX, this.lastPointY = i.pageY, this.startTime = s.getTime(),
                    this.options.disableTouch || s.addEvent(e, "touchmove",
                        this), this.options.disablePointer || s.addEvent(e,
                        s.prefixPointerEvent("pointermove"), this), this.options
                    .disableMouse || s.addEvent(e, "mousemove", this), this
                    .scroller._execEvent("beforeScrollStart")
            },
            _move: function(e) {
                var t = e.touches ? e.touches[0] : e,
                    i, n, o, a, r = s.getTime();
                this.moved || this.scroller._execEvent("scrollStart"), this
                    .moved = !0, i = t.pageX - this.lastPointX, this.lastPointX =
                    t.pageX, n = t.pageY - this.lastPointY, this.lastPointY =
                    t.pageY, o = this.x + i, a = this.y + n, this._pos(o, a),
                    1 == this.scroller.options.probeType && r - this.startTime >
                    300 ? (this.startTime = r, this.scroller._execEvent(
                        "scroll")) : this.scroller.options.probeType > 1 &&
                    this.scroller._execEvent("scroll"), e.preventDefault(),
                    e.stopPropagation()
            },
            _end: function(t) {
                if (this.initiated) {
                    if (this.initiated = !1, t.preventDefault(), t.stopPropagation(),
                        s.removeEvent(e, "touchmove", this), s.removeEvent(
                            e, s.prefixPointerEvent("pointermove"), this),
                        s.removeEvent(e, "mousemove", this), this.scroller.options
                        .snap) {
                        var n = this.scroller._nearestSnap(this.scroller.x,
                                this.scroller.y),
                            o = this.options.snapSpeed || i.max(i.max(i.min(
                                    i.abs(this.scroller.x - n.x), 1e3),
                                i.min(i.abs(this.scroller.y - n.y), 1e3)
                            ), 300);
                        (this.scroller.x != n.x || this.scroller.y != n.y) &&
                        (this.scroller.directionX = 0, this.scroller.directionY =
                            0, this.scroller.currentPage = n, this.scroller
                            .scrollTo(n.x, n.y, o, this.scroller.options.bounceEasing)
                        )
                    }
                    this.moved && this.scroller._execEvent("scrollEnd")
                }
            },
            transitionTime: function(e) {
                e = e || 0, this.indicatorStyle[s.style.transitionDuration] =
                    e + "ms", !e && s.isBadAndroid && (this.indicatorStyle[
                        s.style.transitionDuration] = "0.001s")
            },
            transitionTimingFunction: function(e) {
                this.indicatorStyle[s.style.transitionTimingFunction] = e
            },
            refresh: function() {
                this.transitionTime(), this.indicatorStyle.display = this.options
                    .listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ?
                    "block" : "none" : this.options.listenY && !this.options
                    .listenX ? this.scroller.hasVerticalScroll ? "block" :
                    "none" : this.scroller.hasHorizontalScroll || this.scroller
                    .hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll &&
                    this.scroller.hasVerticalScroll ? (s.addClass(this.wrapper,
                            "iScrollBothScrollbars"), s.removeClass(this.wrapper,
                            "iScrollLoneScrollbar"), this.options.defaultScrollbars &&
                        this.options.customStyle && (this.options.listenX ?
                            this.wrapper.style.right = "8px" : this.wrapper
                            .style.bottom = "8px")) : (s.removeClass(this.wrapper,
                            "iScrollBothScrollbars"), s.addClass(this.wrapper,
                            "iScrollLoneScrollbar"), this.options.defaultScrollbars &&
                        this.options.customStyle && (this.options.listenX ?
                            this.wrapper.style.right = "2px" : this.wrapper
                            .style.bottom = "2px"));
                var e = this.wrapper.offsetHeight;
                this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth,
                        this.options.resize ? (this.indicatorWidth = i.max(
                                i.round(this.wrapperWidth * this.wrapperWidth /
                                    (this.scroller.scrollerWidth || this.wrapperWidth ||
                                        1)), 8), this.indicatorStyle.width =
                            this.indicatorWidth + "px") : this.indicatorWidth =
                        this.indicator.clientWidth, this.maxPosX = this.wrapperWidth -
                        this.indicatorWidth, "clip" == this.options.shrink ?
                        (this.minBoundaryX = -this.indicatorWidth + 8, this
                            .maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX =
                            0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX =
                        this.options.speedRatioX || this.scroller.maxScrollX &&
                        this.maxPosX / this.scroller.maxScrollX), this.options
                    .listenY && (this.wrapperHeight = this.wrapper.clientHeight,
                        this.options.resize ? (this.indicatorHeight = i.max(
                                i.round(this.wrapperHeight * this.wrapperHeight /
                                    (this.scroller.scrollerHeight || this.wrapperHeight ||
                                        1)), 8), this.indicatorStyle.height =
                            this.indicatorHeight + "px") : this.indicatorHeight =
                        this.indicator.clientHeight, this.maxPosY = this.wrapperHeight -
                        this.indicatorHeight, "clip" == this.options.shrink ?
                        (this.minBoundaryY = -this.indicatorHeight + 8,
                            this.maxBoundaryY = this.wrapperHeight - 8) : (
                            this.minBoundaryY = 0, this.maxBoundaryY = this
                            .maxPosY), this.maxPosY = this.wrapperHeight -
                        this.indicatorHeight, this.sizeRatioY = this.options
                        .speedRatioY || this.scroller.maxScrollY && this.maxPosY /
                        this.scroller.maxScrollY), this.updatePosition()
            },
            updatePosition: function() {
                var e = this.options.listenX && i.round(this.sizeRatioX *
                        this.scroller.x) || 0,
                    t = this.options.listenY && i.round(this.sizeRatioY *
                        this.scroller.y) || 0;
                this.options.ignoreBoundaries || (e < this.minBoundaryX ? (
                            "scale" == this.options.shrink && (this.width =
                                i.max(this.indicatorWidth + e, 8), this.indicatorStyle
                                .width = this.width + "px"), e = this.minBoundaryX
                        ) : e > this.maxBoundaryX ? "scale" == this.options
                        .shrink ? (this.width = i.max(this.indicatorWidth -
                                (e - this.maxPosX), 8), this.indicatorStyle
                            .width = this.width + "px", e = this.maxPosX +
                            this.indicatorWidth - this.width) : e = this.maxBoundaryX :
                        "scale" == this.options.shrink && this.width !=
                        this.indicatorWidth && (this.width = this.indicatorWidth,
                            this.indicatorStyle.width = this.width + "px"),
                        t < this.minBoundaryY ? ("scale" == this.options.shrink &&
                            (this.height = i.max(this.indicatorHeight + 3 *
                                    t, 8), this.indicatorStyle.height =
                                this.height + "px"), t = this.minBoundaryY) :
                        t > this.maxBoundaryY ? "scale" == this.options.shrink ?
                        (this.height = i.max(this.indicatorHeight - 3 * (t -
                                this.maxPosY), 8), this.indicatorStyle.height =
                            this.height + "px", t = this.maxPosY + this.indicatorHeight -
                            this.height) : t = this.maxBoundaryY : "scale" ==
                        this.options.shrink && this.height != this.indicatorHeight &&
                        (this.height = this.indicatorHeight, this.indicatorStyle
                            .height = this.height + "px")), this.x = e,
                    this.y = t, this.scroller.options.useTransform ? this.indicatorStyle[
                        s.style.transform] = "translate(" + e + "px," + t +
                    "px)" + this.scroller.translateZ : (this.indicatorStyle
                        .left = e + "px", this.indicatorStyle.top = t +
                        "px")
            },
            _pos: function(e, t) {
                0 > e ? e = 0 : e > this.maxPosX && (e = this.maxPosX), 0 >
                    t ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e =
                    this.options.listenX ? i.round(e / this.sizeRatioX) :
                    this.scroller.x, t = this.options.listenY ? i.round(t /
                        this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(
                        e, t)
            },
            fade: function(e, t) {
                if (!t || this.visible) {
                    clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                    var i = e ? 250 : 500,
                        n = e ? 0 : 300;
                    e = e ? "1" : "0", this.wrapperStyle[s.style.transitionDuration] =
                        i + "ms", this.fadeTimeout = setTimeout(function(e) {
                            this.wrapperStyle.opacity = e, this.visible = +
                                e
                        }.bind(this, e), n)
                }
            }
        }, n.utils = s, "undefined" != typeof module && module.exports ? module
        .exports = n : e.IScroll = n
}(window, document, Math), $(function() {
        function e() {
            $(document.body).height($(window).innerHeight())
        }

        function t() {
            var e = this;
            o = -e.y, $(window).triggerHandler("scroll")
        }
        var i = $(".tl");
        if (i.length) {
            var n = function() {
                return "ontouchstart" in window ? /Android.+Chrome/.test(
                        navigator.userAgent) ? !0 :
                    /^((?!chrome).)*safari/i.test(navigator.userAgent) &&
                    window.indexedDB ? !0 : !1 : !0
            }();
            if (!n) {
                $(window).scrollTop(0);
                var o = 0,
                    a = 0,
                    r, s = $.fn.scrollTop;
                $.fn.scrollTop = function(e) {
                    return 0 === arguments.length ? this[0] !== window ||
                        window.getRealScroll ? s.call(this) : o : this
                };
                var l = $.fn.scrollLeft;
                $.fn.scrollLeft = function(e) {
                        return 0 === arguments.length ? this[0] === window ?
                            a : l.call(this) : this
                    }, (window._gsQueue || (window._gsQueue = [])).push(
                        function() {
                            "use strict";
                            var e = document.documentElement,
                                t = window,
                                i = window._gsDefine.plugin({
                                    propName: "scrollTo",
                                    API: 2,
                                    init: function(e, t, i) {
                                        var n = 1;
                                        return r.scrollTo($(e).scrollLeft(), -
                                            t, n), setTimeout(
                                            function() {
                                                r.scrollTo($(e)
                                                    .scrollLeft(), -
                                                    t, n)
                                            }, 1e3), !0
                                    }
                                })
                        }), window._gsDefine && window._gsQueue.pop()(), $(
                        ".tl__triangle,[class*=deco]").remove(), $(document
                        .body).wrapInner('<div class="iscroll-scroller">'),
                    $(".TlNav-container").appendTo(document.body), e(), r =
                    new IScroll(document.body, {
                        HWCompositing: !1,
                        probeType: 3,
                        deceleration: .005,
                        click: !0
                    }), r.on("scroll", t), $(window).on(
                        "resize.mobile-scroll", e)
            }
        }
    }),
    function() {
        function e(e, t, i, n) {
            var o = this,
                a = {};
            a.$ = $(e), a.pos = a.$.position(), a.width = a.$.width(), a.height =
                a.$.height(), a.offset = {}, a.offset.x = i || 0, a.offset.y =
                n || 0;
            var r = {};
            r.$ = a.$.closest(t), r.width = r.$.width(), r.height = r.$.height(),
                o.container = r, o.el = a, r.$.off(".follow-mouse"), r.$.on(
                    "mousemove.follow-mouse", o.followMouse.bind(o)), r.$.on(
                    "mouseenter.follow-mouse", o.updateContainerOffset.bind(
                        o)), r.$.on("mouseleave.follow-mouse", o.resetPosition
                    .bind(o)), o.updateContainerOffset()
        }
        jQuery.fn.extend({
            followMouse: function(t, i, n) {
                var o = this;
                o.each(function() {
                    new e(this, t, i, n)
                })
            }
        });
        var t = e.prototype;
        t.followMouse = function(e) {
            var t = this;
            t.animateToCoordinates({
                x: e.pageX - t.container.offset.left - t.el.pos.left,
                y: e.pageY - t.container.offset.top - t.el.pos.top
            })
        }, t.animateToCoordinates = function(e, t) {
            var i = this;
            TweenLite.to(i.el.$, t || .1, {
                x: e.x - i.el.offset.x,
                y: e.y - i.el.offset.y
            })
        }, t.resetPosition = function(e) {
            var t = this;
            t.animateToCoordinates({
                x: 0,
                y: 0
            }, .5)
        }, t.updateContainerOffset = function(e) {
            var t = this;
            t.container.offset = t.container.$.offset()
        }
    }(),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], t) : "object" ==
            typeof exports ? module.exports = t() : e.bfrUtils = t()
    }(this, function() {
        var e = {},
            t = {};
        return e.setTimer = function(e, i, n) {
            var o, a, r = function() {
                    t[a] = o()
                },
                s = function() {
                    var i;
                    t[a] && (i = e(), n && (i && i.then && i.then.call ?
                        i.then(r) : r()))
                };
            return o = setTimeout.bind(window, requestAnimationFrame.bind(
                window, s), i), a = o(), t[a] = !0, a
        }, e.clearTimer = function(e) {
            clearTimeout("boolean" == typeof t[e] ? e : t[e]), t[e] = !
                1
        }, e.shuffle = function(e) {
            for (var t, i, n = e.length; n; t = Math.floor(Math.random() *
                n), i = e[--n], e[n] = e[t], e[t] = i);
            return e
        }, e.loadUrlInHiddenIframe = function(e, t) {
            t = t || document.querySelector(".content") || document.body;
            var i = document.createElement("iframe");
            return i.src = e, i.style.display = "none", t.appendChild(i),
                function n() {
                    try {
                        return t.removeChild(i), !0
                    } catch (e) {
                        return !1
                    }
                }
        }, e.isInIframe = self !== top, e.canWindowBeWider = function(t) {
            return "undefined" == typeof t && (t = "ontouchstart" in
                    window), !t && !e.isInIframe && window.screen.availWidth >
                window.outerWidth
        }, e.canItScroll = function(e, t, i) {
            if (e = e || "width", e = e.charAt(0).toUpperCase() + e.slice(
                    1), !t || t === window || t === document.documentElement ||
                t === document.body) {
                try {
                    return top.document.documentElement["scroll" + e] >
                        window["inner" + e]
                } catch (n) {}
                return i
            }
            return t["scroll" + e] && t["offset" + e] ? t["scroll" + e] >
                t["offset" + e] : i
        }, e
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jQuery"], t) :
            "object" == typeof exports ? module.exports = t(require("jQuery")) :
            e.videoPlayer = t(e.jQuery)
    }(this, function($) {
        function e(e) {
            e ? (n = Function.prototype.bind.call(console.log, console,
                "Player :"), 2 === e && (o = n)) : (n = i, o = i)
        }

        function t() {
            var e = Object.create(a);
            return e.init.apply(e, arguments), e
        }
        var i = function() {},
            n = i,
            o = i,
            a = {
                _defs: {},
                _playlist: [],
                _current: null,
                init: function(e, t, i) {
                    var n = this;
                    if ("string" == typeof e && (e = document.querySelector(
                        e)), !e || !e.canPlayType) return !1;
                    if (e.canPlayType('video/webm;codecs="vp8, vorbis"'))
                        n._ext = ".webm";
                    else {
                        if (!e.canPlayType(
                            'video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                        )) return !1;
                        n._ext = ".mp4"
                    }
                    return n.el = e, n.poster = i, n._basePath = t, n
                },
                add: function(e) {
                    var t = this;
                    return _.extend(t._defs, e), t
                },
                play: function(e) {
                    var t = this;
                    if (!e) return t;
                    t._forgetPlaylist();
                    var i = Array.prototype.slice.call(arguments),
                        n = i.length > 1,
                        o = t._defs[e] && !n;
                    if (t._current === e) return n && (t.el.paused && t
                        .el.play(), t.el.loop = !1, t._setupPlaylist(
                            i)), t;
                    t.showPoster(e);
                    var a = $.Deferred();
                    return requestAnimationFrame(function() {
                        t.el.src = t._basePath + e + t._ext, t.el
                            .loop = o, t.el.play(), t.waitForPlayback(
                                e).then(function() {
                                t.hidePoster(), a.resolve()
                            }), n && t._setupPlaylist(i)
                    }), t._current = e, a
                },
                _setupPlaylist: function(e) {
                    var t = this;
                    $(t.el).one("ended.player-playlist", function() {
                        e.shift(), t.play.apply(t, e)
                    })
                },
                _forgetPlaylist: function() {
                    var e = this;
                    $(e.el).off(".player-playlist")
                },
                getCurrentTime: function() {
                    var e = this;
                    try {
                        return e.el.currentTime
                    } catch (t) {
                        return 0
                    }
                },
                pause: function() {
                    var e = this;
                    e.el.pause()
                },
                getPosterUrl: function(e) {
                    var t = this;
                    return t._basePath + e + ".jpg"
                },
                showPoster: function(e) {
                    var t = this;
                    if (t.poster) {
                        var i = t.getPosterUrl(e);
                        t.poster.style.backgroundImage = "url(" + i +
                            ")", t.poster.style.visibility = "visible"
                    }
                },
                hidePoster: function() {
                    var e = this;
                    e.poster && (e.poster.style.visibility = "hidden")
                },
                waitForPlayback: function(e) {
                    var t = this;
                    n("Player :", e, ": Waiting for playback"), t._isWaiting &&
                        (cancelAnimationFrame(t._isWaiting), t._isWaiting =
                            null);
                    var i = $.Deferred();
                    i.then(function(t, i, o) {
                        n("Player :", e,
                            ": Playing (progressCount", t,
                            ", changesCount", i,
                            ", changesFromRestart", o, ")")
                    });
                    var a = 0,
                        r = 0,
                        s = 0,
                        l = -1;
                    return function c() {
                        var n = t.el.currentTime;
                        o("Player :", e, ": Checking playback :", n),
                            a > n && n > t.el.duration && (l = 0, r =
                                0, a = n = 0), n !== a && (s++, l >
                                -1 && l++), n > a && r++, (r > 2 ||
                                s > 5 || l > 0) && (i.resolveWith(t, [
                                r, s, l
                            ]), s > 30) || (a = n, t._isWaiting =
                                requestAnimationFrame(c))
                    }(), i
                }
            };
        return {
            create: t,
            setLogging: e
        }
    }),
    function() {
        var e = {};
        e.get = function() {
            var e = [];
            return $(".tl__event--clear").each(function(t, i) {
                var n = $(i).nextAll().slice(0, 2).filter(
                    ".tl__event--right,.tl__event--left");
                2 === n.length && e.push(n)
            }), e
        }, e.alternate = function(e) {
            if (e % 2) {
                var t = this;
                t.eq(0).removeClass("tl__event--left").addClass(
                    "tl__event--right"), t.eq(1).removeClass(
                    "tl__event--right").addClass("tl__event--left")
            }
        }, e.align = function() {
            var e = $(this).find(".tl__mark");
            if (2 === e.length) {
                var t = $.map(e, function(e) {
                        return {
                            el: e,
                            offset: $(e).offset().top,
                            top: parseInt($(e).css("margin-top"), 10)
                        }
                    }).sort(function(e, t) {
                        return e.offset > t.offset ? -1 : 1
                    }),
                    i = Math.abs(Math.floor(t[0].offset) - Math.floor(t[1].offset)) /
                    2;
                $(t[0].el).css({
                    marginTop: Math.floor(t[0].top - i)
                }), $(t[1].el).css({
                    marginTop: Math.ceil(t[1].top + i)
                }), $(t[1].el).find(".tl__mark-diamond").css({
                    opacity: 0
                })
            }
        }, $pl(function(t) {
            var i = $(".Utl");
            if (0 !== i.length) {
                var n = e.get();
                $.each(n, e.align), $.each(n, e.alternate)
            }
        })
    }(), $pl(function() {
        $(".js-cycle-images").each(function() {
            var e = this,
                t = $(e),
                i = t.children(),
                n = i.length;
            if (0 === n) return void console.warn(
                "CYCLER: No slides found in", e);
            var o = 0,
                a = 4 + 4 * Math.random(),
                r = new TimelineLite({
                    paused: !0
                });
            r.staggerFrom(i.slice(1), 2, {
                autoAlpha: 0,
                scale: 2,
                ease: Power4.easeOut
            }, a), r.call(r.play, [0], r, "+=" + a), setTimeout(
                function() {
                    r.play()
                }, a)
        })
    }),
    function() {
        var e = {};
        e.data = null, e.init = function() {
            top === self ? e.setState("unknown") : (window.addEventListener(
                "message", e.handleMessage, !1), e.request()), $pl(e.setHTML)
        }, e.requestTimer = null, e.request = function() {
            e.data || (self.parent.postMessage(
                    '{ "dataRequest": "timeline" }', "*"), e.requestTimer =
                setTimeout(e.request, 1e3))
        }, e.handleMessage = function(t) {
            var i = JSON.parse(t.data);
            i && i.user_data && (e.data = i.user_data, clearInterval(e.requestTimer),
                "nodata" === i.user_data.error ? e.setState("cannot") :
                "notlogged" === i.user_data.error ? e.setState(
                    "unknown") : (e.setState("can"), e.setForm()))
        }, e.state = "unknown", e.setState = function(t) {
            t && (e.log("Setting state:", t), e.state = t), e.state && ($(
                'a[href*="history/save"]').each(function() {
                switch (e.state) {
                    case "can":
                        this.target = "_self";
                        break;
                    case "cannot":
                    case "unknown":
                        this.href = window.loginAndSaveUrl,
                            this.target = "_top"
                }
            }), $(".Switch--utl").children().hide().filter(
                '[data-switch="' + e.state + '"]').show())
        }, e.setForm = function() {
            var t = document.getElementById("user_data");
            t && e.data && (t.value = JSON.stringify(e.data))
        }, e.log = jQuery.noop, e.setHTML = function() {
            e.log("Updating HTML"), e.setForm(), e.setState()
        }, e.init()
    }(), $pl(function() {
        $(".FirstDraft").each(function() {
            var e = $(this),
                t = e.closest(".js-timeline-in"),
                i = e.find(".FirstDraft-hand");
            t.on("enable-interactivity", function() {
                i.followMouse(e, 28, 24), e.on("mousedown",
                    function() {
                        TweenLite.set(i, {
                            rotationX: 5
                        })
                    }), e.on("mouseup", function() {
                    TweenLite.set(i, {
                        rotationX: 0
                    })
                })
            }), t.on("disable-interactivity", function() {
                i.off(".follow-mouse")
            })
        })
    }), /iphone/i.test(navigator.userAgent) || $pl(function() {
        var e = $(".Scoreboard");
        if (e.length) {
            var t = videoPlayer.create(document.querySelector(
                    ".Scoreboard-led"), "/assets/timeline/user/led/"),
                i = ["bull-charge", "clapping", "defense", "its-good",
                    "make-noize"
                ],
                n = -1,
                o = function() {
                    var e;
                    do e = Math.random() * i.length | 0; while (e === n);
                    n = e, t.play(i[e]), $(t.el).on("ended", o)
                },
                a = !1;
            "ontouchstart" in window ? ($(document.documentElement).on(
                "touchstart.remove-on-unload touchend.remove-on-unload",
                function() {
                    a && t.el.paused && o()
                }), e.on("inside-on", function() {
                a = !0
            })) : e.on("inside-on", o), e.on("outside-on", function() {
                a = !1, t.el.pause(), t.el.src = ""
            })
        }
    }), $pl(function(e) {
        function t() {
            var e = n.innerHeight(),
                t = n.scrollTop(),
                o = t + e / 2;
            i.css({
                perspectiveOrigin: "50% " + o + "px"
            })
        }
        var i = $(".tl");
        if (0 !== i.length) {
            i.css({
                visibility: "visible"
            });
            var n = $(window);
            $(".js-fancybox").fancybox({
                openEffect: "elastic",
                closeEffect: "elastic",
                openOpacity: !1,
                closeOpacity: !1,
                padding: 0,
                beforeLoad: function() {
                    window.getRealScroll = !0
                },
                afterClose: function() {
                    delete window.getRealScroll
                },
                beforeClose: function() {
                    return TweenLite.to(".diamond-zoom__close",
                        .15, {
                            scale: 0,
                            ease: Quint.easeOut,
                            onComplete: $.fancybox.close
                        }), this.beforeClose = $.noop, !1
                },
                helpers: {
                    overlay: {
                        locked: !1
                    }
                }
            });
            var o = $(".js-diamond-zoom");
            o.on("click.light-box", function(e) {
                    if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
                        e.preventDefault();
                        var t = $(this);
                        if ("undefined" == typeof t.data(
                            "diamond-zoom-is-open")) {
                            t.data("diamond-zoom-is-open", !1);
                            var i = new TimelineLite({
                                    paused: !0
                                }),
                                n = t.data("diamond-zoom-overlays") ||
                                "";
                            n = n.split(",");
                            for (var o = 0; o < n.length; o++) switch (
                                n[o]) {
                                case "year":
                                    var a = t.parents(".tl__event")
                                        .find(
                                            ".tl__event-diamond__year"
                                        );
                                    i.to(a, .3, {
                                        scale: 0,
                                        ease: Quint.easeInOut
                                    }, 0);
                                    break;
                                case "title":
                                    var r = $(".tl__title");
                                    i.to(r, .3, {
                                        rotationX: 90,
                                        autoAlpha: 0,
                                        ease: Quint.easeOut
                                    }, 0);
                                    break;
                                case "label":
                                    var s = t.parent().find(
                                        ".tl__event-label");
                                    i.to(s, .3, {
                                        rotationY: 40,
                                        x: "100%",
                                        autoAlpha: 0,
                                        ease: Quint.easeOut
                                    }, 0);
                                    break;
                                case "corner":
                                    var l = t.find(".alive-corner");
                                    i.to(l, .3, {
                                        scaleX: 0,
                                        scaleY: 0,
                                        ease: Back.easeInOut
                                    }, 0);
                                    break;
                                case "play":
                                    var c = t.find(
                                        ".tl__event-diamond__button"
                                    );
                                    i.to(c, .3, {
                                        scale: 0,
                                        x: -224.5,
                                        y: -224.5,
                                        ease: Back.easeIn
                                    }, 0);
                                    break;
                                case "monitors":
                                    var d = t.closest(
                                            ".tl__event--center"),
                                        u = d.find(
                                            ".tl__event-monitor--left"
                                        ),
                                        h = d.find(
                                            ".tl__event-monitor--right"
                                        );
                                    i.to(u, .3, {
                                        x: -130,
                                        ease: Back.easeIn
                                    }, 0), i.to(h, .3, {
                                        x: 130,
                                        ease: Back.easeIn
                                    }, 0);
                                    break;
                                case "inductee":
                                    i.set(t, {
                                        className: "+=tl__inductee--off"
                                    }, 0), i.addDelay(.3, 0)
                            }
                            var p = t.data("title");
                            $(this).diamondZoom({
                                onActivation: function() {
                                    var e = this;
                                    "youtube" === e.media.type &&
                                        omniCustom.trackId(
                                            "historyVideoClickToPlay", [
                                                p
                                            ])
                                },
                                onReady: function() {
                                    var e = this;
                                    if (i.getChildren().length) {
                                        var t = $.Deferred();
                                        return i.eventCallback(
                                                "onComplete",
                                                t.resolve),
                                            i.play(), t
                                    }
                                },
                                onOpened: function() {
                                    var e = this;
                                    t.data(
                                            "diamond-zoom-is-open", !
                                            0), "youtube" ===
                                        e.media.type &&
                                        YT_ready(function() {
                                            var t = e.$content
                                                .data(
                                                    "youtube-api"
                                                );
                                            if (t) {
                                                var i = !
                                                    1;
                                                t.addEventListener(
                                                    "onStateChange",
                                                    function(
                                                        e
                                                    ) {
                                                        switch (
                                                            e
                                                            .data
                                                        ) {
                                                            case YT
                                                            .PlayerState
                                                            .ENDED:
                                                                omniCustom
                                                                    .trackId(
                                                                        "historyVideoEnd", [
                                                                            p
                                                                        ]
                                                                    )
                                                        }
                                                    }
                                                )
                                            }
                                        })
                                },
                                onClosed: function() {
                                    var e = $.Deferred();
                                    return i.eventCallback(
                                            "onReverseComplete",
                                            e.resolve), i.reverse(),
                                        t.removeData(
                                            "diamond-zoom-is-open"
                                        ), e
                                }
                            })
                        }
                    }
                }),
                function() {
                    function e() {
                        $(
                            ".tl__partial-line-1,.tl__partial-line-2,.tl__partial-line-3"
                        ).each(function(e, t) {
                            var i = {
                                lineLength: $(t).data(
                                        "line-length") ||
                                    224.5,
                                $: $(t),
                                lastPercentage: !1
                            };
                            i.startPos = i.$.offset().top, a.push(
                                i)
                        })
                    }

                    function t() {
                        var e = n.innerHeight(),
                            t = n.scrollTop(),
                            r = t + e / 2;
                        TweenLite.set(i, {
                            y: r - o
                        }), $.each(a, function(e, t) {
                            var i = (r - t.startPos) / t.lineLength;
                            i = Math.min(1, Math.max(0, i)), t.lastPercentage !==
                                i && (t.$.height(100 * i + "%"),
                                    t.lastPercentage = i)
                        })
                    }
                    var i = $(".tl__line--follow"),
                        o = i.offset().top + 1500,
                        a = [];
                    e(), n.on("scroll.line-updater.remove-on-unload", t), t()
                }(), n.on("scroll.perspective-updater.remove-on-unload", t),
                t(), isMobile || $(".js-image-lens").imageLens(), $(
                    ".js-number-scroller").each(function() {
                    var e = $(this),
                        t = +e.text().replace(/,/g, ""),
                        i = {
                            num: 0
                        },
                        n = t / 2,
                        o = t;
                    e.viewportPosition(function(t) {
                        TweenLite.to(i, .1, {
                            num: t,
                            ease: "linear",
                            onUpdate: function() {
                                var t = Math.ceil(n +
                                    i.num * o);
                                e.text(t.addThousandsSeparators())
                            }
                        })
                    })
                }),
                function() {
                    var e = $(".ani-westbrook");
                    if (0 !== e.length) {
                        var t = new TimelineLite({
                                paused: !0
                            }),
                            i = {
                                num: 0
                            },
                            n = $(".ani-westbrook__cross");
                        t.from(
                                ".ani-westbrook__yards,.ani-westbrook__last-yard",
                                .2, {
                                    scaleX: 0,
                                    transformOrigin: "left top",
                                    ease: Back.easeOut
                                }, "-=0.1"), t.staggerFrom(n.add(
                                ".ani-westbrook__diamond"), .2, {
                                scale: 0,
                                ease: Back.easeOut
                            }, -.1, "-=0.1"), t.addLabel("run", "-=0.2"), t
                            .from(".ani-westbrook__run", .4, {
                                height: 0,
                                ease: Linear.easeNone
                            }, "run"), t.from(n, .4, {
                                y: -117,
                                ease: Linear.easeNone
                            }, "run");
                        var o = t.duration();
                        e.viewportPosition(function(e) {
                            TweenLite.to(i, .3, {
                                num: 1,
                                ease: Quint.easeOut,
                                onUpdate: function() {
                                    t.seek(e * o)
                                }
                            })
                        }, .3, .6)
                    }
                }(),
                function() {
                    function e() {
                        o.parent().each(function() {
                            var e = $(this)
                        }), o.each(function() {
                            var e = $(this),
                                o = e.parent(),
                                a = o.parent().width(),
                                r = Math.max(n.innerWidth(), a);
                            o.css({
                                width: r,
                                left: (a - r) / 2
                            });
                            var s = r / Math.min(t, i),
                                l = o.height() / Math.min(t, i);
                            $(this).css({
                                width: s,
                                height: l,
                                marginLeft: -s / 2
                            })
                        })
                    }
                    var t = 1,
                        i = 5,
                        o = $(".scale-scroller");
                    0 !== o.length && (n.on(
                        "resize.scale-scroller.remove-on-unload", e
                    ), e(), o.each(function() {
                        var e = $(this),
                            n = e.parent(),
                            o = {
                                num: 0
                            };
                        TweenLite.set(e, {
                            top: 0,
                            left: "50%",
                            transformOrigin: "50% 0"
                        });
                        var a = new TimelineLite({
                                paused: !0
                            }),
                            r = 10;
                        a.fromTo(e, r, {
                            scale: t
                        }, {
                            scale: i,
                            ease: Sine.easeIn
                        }), n.viewportPosition(function(e) {
                            TweenLite.to(o, .3, {
                                num: 1,
                                ease: Quint.easeOut,
                                onUpdate: function() {
                                    a.seek(
                                        r -
                                        e *
                                        r
                                    )
                                }
                            })
                        }, 0, .5)
                    }))
                }(), $(".js-counter").each(function() {
                    function e() {
                        o.restart()
                    }
                    var t = $(this),
                        i = t.text().replace(/,/g, ""),
                        n = {
                            num: +i
                        },
                        o = new TimelineLite({
                            paused: !0
                        });
                    o.from(n, 2, {
                        num: i / 2,
                        ease: Quint.easeOut,
                        onUpdate: function() {
                            var e = Math.ceil(n.num);
                            t.text(e.addThousandsSeparators())
                        }
                    }), t.on("activation", e)
                }), $(".js-timeline-in").each(function() {
                    var e = {};
                    e.$el = $(this);
                    var t = e.$el.data("timeline-in");
                    "string" == typeof t && (t = t.split(";"), e.condition =
                        t[0], e.animationName = t[1]), timelineIn.call(
                        e.animationName, e)
                }), $(".tl__title").each(function() {
                    timelineIn.call("hinge-in", {
                        $el: $(this),
                        condition: "<75"
                    })
                }), $("li.tl__year").not(".js-timeline-in").each(function() {
                    timelineIn.call("from-bottom", {
                        $el: $(this),
                        condition: "<75"
                    })
                }), $(".tl__event--center").not(".js-timeline-in").each(
                    function() {
                        timelineIn.call("rotate-in--centered", {
                            $el: $(this),
                            condition: "<75"
                        })
                    }), $(".tl__event-mega").not(".js-timeline-in").each(
                    function() {
                        timelineIn.call("bump-in", {
                            $el: $(this),
                            condition: "<75",
                            getOffset: "untransformed"
                        })
                    }), $(".tl__event--left, .tl__event--right").not(
                    ".js-timeline-in").each(function() {
                    var e = $(this);
                    timelineIn.call("rotate-in", {
                        $el: e,
                        condition: "<75",
                        getOffset: "untransformed",
                        isHingeOnLeft: e.is(".tl__event--right")
                    })
                }), $(".deco--line--left").each(function() {
                    var e = $(this);
                    timelineIn.call("from-left-screen", {
                        $el: e,
                        condition: "<75",
                        getOffset: "untransformed"
                    })
                }), $(".deco--line--right").each(function() {
                    var e = $(this);
                    timelineIn.call("from-right-screen", {
                        $el: e,
                        condition: "<75",
                        getOffset: "untransformed"
                    })
                }), $(".Autoscroller").each(function(e, t) {
                    var i = $(t);
                    i.parent().watchViewport({
                        condition: "bottom<-10",
                        times: -1
                    }).on("viewport<-10", function() {
                        i.css({
                            animation: "none"
                        })
                    }).watchViewport({
                        condition: "bottom>-5",
                        times: -1
                    }).on("viewport>-5", function() {
                        i.css({
                            animation: ""
                        })
                    })
                })
        }
    }), $pl(function() {
        function e() {
            var e = $(".tl__year");
            h = e.map(r), h.appendTo(u), u.on("click.scroll-to-piece",
                "button", s), a()
        }

        function t() {
            y = $(window).innerWidth() < 1080, y || i(!0, !0)
        }

        function i(e, t) {
            (y || t) && TweenLite.to(u, e ? 1 : .2, {
                autoAlpha: e ? 1 : 0,
                scale: e ? 1 : .9
            })
        }

        function n() {
            i(!0)
        }

        function o() {
            i(!1)
        }

        function a() {
            t(), $(window).resize(t), b.watchViewport({
                condition: ">0",
                times: -1
            }), b.watchViewport({
                condition: "<0",
                times: -1
            }), w.watchViewport({
                condition: "<100",
                times: -1
            }), w.watchViewport({
                condition: ">100",
                times: -1
            }), b.on("viewport>0", o), b.on("viewport<0", n), w.on(
                "viewport<100", o), w.on("viewport>100", n), $pu(
                function() {
                    $(window).watchViewport(!1)
                })
        }

        function r() {
            var e, t = $(this),
                i = t.text();
            e = $(/62|74|84|89|99|06|10|13/.test(i) ? v.replace("%%%",
                i) : g);
            try {
                var n = t.attr("class").match(/tl__year\-\-(\d+)px/)[1];
                n && e.children().addClass("TlNav-btn-ct--" + n)
            } catch (o) {}
            var a = t.data("_position-callback");
            return a || (t = t.closest(".tl__event"), a = t.data(
                "_position-callback")) ? (t.on("inside-on", {
                $button: e
            }, l), t.on("outside-on", {
                $button: e
            }, c), e.data("piece-pc-data", a), m++, e[0]) : void 0
        }

        function s(e) {
            var t = $(this),
                i = t.data("piece-pc-data"),
                n = $(window).innerHeight(),
                o = i.position - n / 2 + i.height / 2;
            TweenLite.to(window, 1, {
                scrollTo: o
            })
        }

        function l(e) {
            e.data.$button.addClass("TlNav-btn--current")
        }

        function c(e) {
            e.data.$button.removeClass("TlNav-btn--current")
        }

        function d() {
            f > p ? h.slice(f).removeClass("TlNav-btn--lit") : h.slice(
                0, p + 1).addClass("TlNav-btn--lit")
        }
        var u = $(".TlNav");
        if (0 !== u.length) {
            var h, p = -1,
                f = -1,
                m = 0,
                g =
                '<button class="TlNav-btn"><span class="TlNav-btn-ct TlNav-btn-ct--bubble"></span></button>',
                v =
                '<button class="TlNav-btn"><span class="TlNav-btn-ct TlNav-btn-ct--year">%%%</span></button>';
            $(document).one(
                "page-idle.setup-timeline-navigator.remove-on-unload",
                e);
            var y = !1,
                w = $(".footer"),
                b = $(".MonoNav")
        }
    }), $pl(function(e) {
        function t(e) {
            e && e.preventDefault(), d = $(this), u = d.find(
                ".alive-corner__text");
            var t = c.attr("action");
            h = d.attr("value"), $.ajax({
                url: t,
                type: "post",
                data: {
                    "finalist-name": h
                },
                dataType: "html"
            }).then(o, s).then(i).then(n, s), a()
        }

        function i(e) {
            function t(e) {
                e.preventDefault(), i.resolveWith({
                    $modal: n,
                    $modalCover: o
                })
            }
            var i = $.Deferred(),
                n = $(e).filter(".modal");
            if (0 === n.length) return i.reject(), i;
            var o = $('<div class="modal__cover">');
            o.appendTo("body"), o.on("click", function(e) {
                e.target === this && t(e)
            }), n.appendTo(o);
            var a = n.width(),
                r = n.height(),
                s = new TimelineLite;
            s.set(o, {
                perspective: 600
            }, 0), s.from(o, .4, {
                scale: 0,
                autoAlpha: 0,
                ease: Quint.easeOut
            }, 0), s.set(n, {
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: -r / 2,
                marginLeft: -a / 2
            }, 0), s.from(n, .6, {
                rotationX: -60,
                ease: Back.easeOut
            }, 0), s.from(n, .6, {
                z: 300,
                ease: Quint.easeOut
            }, 0), s.set(n, {
                clearProps: "z, transform"
            });
            var l = n.find(".BtnSlide");
            return l = n.find(".BtnSlide"), l.attr("href", "#close"), l
                .on("click", t), omniCustom.trackId(
                    "voteConfirmationLoad", [h]), i
        }

        function n() {
            var e = this.$modalCover,
                t = this.$modal;
            return TweenLite.to(e, .4, {
                autoAlpha: 0,
                ease: Quint.easeOut,
                onComplete: function() {
                    e.remove()
                }
            }), TweenLite.to(t, .4, {
                rotationX: 20,
                z: -60,
                autoAlpha: 0
            }), this
        }

        function o(e) {
            return d.addClass("alive-corner--on"), u.text("Voted"), l.not(
                d).remove(), $(window).trigger("progress/end"), e
        }

        function a(e) {
            return $(".inductee__card--on").removeClass(
                "inductee__card--on"), u.text("Voting"), $(window).trigger(
                "progress/start"), e
        }

        function r(e) {
            return l.prop("disabled", !1), u.text("Vote"), $(window).trigger(
                "progress/end"), e
        }

        function s(e) {
            confirm(
                "The vote might not have gone through. Either your Internet connection or the website is not working. Try again?"
            ) ? t.call(d) : r(e)
        }
        if ("vote" === pageLoaded) {
            var l = $(".js-vote-button"),
                c = $(".js-ajax-form"),
                d, u;
            l.on("click.ajax-submit", t), l.hover(function() {
                $(this).parent().addClass("inductee__card--on")
            }, function() {
                $(this).parent().removeClass("inductee__card--on")
            });
            var h
        }
    }),
    function(e, t) {
        "use strict";
        var i = e.console || t,
            n = e.document,
            o = e.navigator,
            a = e.sessionStorage || !1,
            r = e.setTimeout,
            s = e.clearTimeout,
            l = e.setInterval,
            c = e.clearInterval,
            d = e.JSON,
            u = e.alert,
            h = e.History = e.History || {},
            p = e.history;
        try {
            a.setItem("TEST", "1"), a.removeItem("TEST")
        } catch (f) {
            a = !1
        }
        if (d.stringify = d.stringify || d.encode, d.parse = d.parse || d.decode,
            "undefined" != typeof h.init) throw new Error(
            "History.js Core has already been loaded...");
        h.init = function(e) {
            return "undefined" == typeof h.Adapter ? !1 : ("undefined" !=
                typeof h.initCore && h.initCore(), "undefined" !=
                typeof h.initHtml4 && h.initHtml4(), !0)
        }, h.initCore = function(f) {
            if ("undefined" != typeof h.initCore.initialized) return !1;
            if (h.initCore.initialized = !0, h.options = h.options || {}, h
                .options.hashChangeInterval = h.options.hashChangeInterval ||
                100, h.options.safariPollInterval = h.options.safariPollInterval ||
                500, h.options.doubleCheckInterval = h.options.doubleCheckInterval ||
                500, h.options.disableSuid = h.options.disableSuid || !1, h
                .options.storeInterval = h.options.storeInterval || 1e3, h.options
                .busyDelay = h.options.busyDelay || 250, h.options.debug =
                h.options.debug || !1, h.options.initialTitle = h.options.initialTitle ||
                n.title, h.options.html4Mode = h.options.html4Mode || !1, h
                .options.delayInit = h.options.delayInit || !1, h.intervalList = [],
                h.clearAllIntervals = function() {
                    var e, t = h.intervalList;
                    if ("undefined" != typeof t && null !== t) {
                        for (e = 0; e < t.length; e++) c(t[e]);
                        h.intervalList = null
                    }
                }, h.debug = function() {
                    h.options.debug && h.log.apply(h, arguments)
                }, h.log = function() {
                    var e = !("undefined" == typeof i || "undefined" ==
                            typeof i.log || "undefined" == typeof i.log.apply
                        ),
                        t = n.getElementById("log"),
                        o, a, r, s, l;
                    for (e ? (s = Array.prototype.slice.call(arguments), o =
                            s.shift(), "undefined" != typeof i.debug ? i.debug
                            .apply(i, [o, s]) : i.log.apply(i, [o, s])) : o =
                        "\n" + arguments[0] + "\n", a = 1, r = arguments.length; r >
                        a; ++a) {
                        if (l = arguments[a], "object" == typeof l &&
                            "undefined" != typeof d) try {
                            l = d.stringify(l)
                        } catch (c) {}
                        o += "\n" + l + "\n"
                    }
                    return t ? (t.value += o + "\n-----\n", t.scrollTop = t
                        .scrollHeight - t.clientHeight) : e || u(o), !0
                }, h.getInternetExplorerMajorVersion = function() {
                    var e = h.getInternetExplorerMajorVersion.cached =
                        "undefined" != typeof h.getInternetExplorerMajorVersion
                        .cached ? h.getInternetExplorerMajorVersion.cached :
                        function() {
                            for (var e = 3, t = n.createElement("div"), i =
                                    t.getElementsByTagName("i");
                                (t.innerHTML = "<!--[if gt IE " + ++e +
                                    "]><i></i><![endif]-->") && i[0];);
                            return e > 4 ? e : !1
                        }();
                    return e
                }, h.isInternetExplorer = function() {
                    var e = h.isInternetExplorer.cached = "undefined" !=
                        typeof h.isInternetExplorer.cached ? h.isInternetExplorer
                        .cached : Boolean(h.getInternetExplorerMajorVersion());
                    return e
                }, h.emulated = h.options.html4Mode ? {
                    pushState: !0,
                    hashChange: !0
                } : {
                    pushState: !Boolean(e.history && e.history.pushState &&
                        e.history.replaceState && !(
                            / Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i
                            .test(o.userAgent) ||
                            /AppleWebKit\/5([0-2]|3[0-2])/i.test(o.userAgent)
                        )),
                    hashChange: Boolean(!("onhashchange" in e ||
                            "onhashchange" in n) || h.isInternetExplorer() &&
                        h.getInternetExplorerMajorVersion() < 8)
                }, h.enabled = !h.emulated.pushState, h.bugs = {
                    setHash: Boolean(!h.emulated.pushState &&
                        "Apple Computer, Inc." === o.vendor &&
                        /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)
                    ),
                    safariPoll: Boolean(!h.emulated.pushState &&
                        "Apple Computer, Inc." === o.vendor &&
                        /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)
                    ),
                    ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() <
                        8),
                    hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() <
                        7)
                }, h.isEmptyObject = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }, h.cloneObject = function(e) {
                    var t, i;
                    return e ? (t = d.stringify(e), i = d.parse(t)) : i = {},
                        i
                }, h.getRootUrl = function() {
                    var e = n.location.protocol + "//" + (n.location.hostname ||
                        n.location.host);
                    return n.location.port && (e += ":" + n.location.port),
                        e += "/"
                }, h.getBaseHref = function() {
                    var e = n.getElementsByTagName("base"),
                        t = null,
                        i = "";
                    return 1 === e.length && (t = e[0], i = t.href.replace(
                            /[^\/]+$/, "")), i = i.replace(/\/+$/, ""), i &&
                        (i += "/"), i
                }, h.getBaseUrl = function() {
                    var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
                    return e
                }, h.getPageUrl = function() {
                    var e = h.getState(!1, !1),
                        t = (e || {}).url || h.getLocationHref(),
                        i;
                    return i = t.replace(/\/+$/, "").replace(/[^\/]+$/,
                        function(e, t, i) {
                            return /\./.test(e) ? e : e + "/"
                        })
                }, h.getBasePageUrl = function() {
                    var e = h.getLocationHref().replace(/[#\?].*/, "").replace(
                        /[^\/]+$/, function(e, t, i) {
                            return /[^\/]$/.test(e) ? "" : e
                        }).replace(/\/+$/, "") + "/";
                    return e
                }, h.getFullUrl = function(e, t) {
                    var i = e,
                        n = e.substring(0, 1);
                    return t = "undefined" == typeof t ? !0 : t,
                        /[a-z]+\:\/\//.test(e) || (i = "/" === n ? h.getRootUrl() +
                            e.replace(/^\/+/, "") : "#" === n ? h.getPageUrl()
                            .replace(/#.*/, "") + e : "?" === n ? h.getPageUrl()
                            .replace(/[\?#].*/, "") + e : t ? h.getBaseUrl() +
                            e.replace(/^(\.\/)+/, "") : h.getBasePageUrl() +
                            e.replace(/^(\.\/)+/, "")), i.replace(/\#$/, "")
                }, h.getShortUrl = function(e) {
                    var t = e,
                        i = h.getBaseUrl(),
                        n = h.getRootUrl();
                    return h.emulated.pushState && (t = t.replace(i, "")),
                        t = t.replace(n, "/"), h.isTraditionalAnchor(t) &&
                        (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(
                            /\#$/, "")
                }, h.getLocationHref = function(e) {
                    return e = e || n, e.URL === e.location.href ? e.location
                        .href : e.location.href === decodeURIComponent(e.URL) ?
                        e.URL : e.location.hash && decodeURIComponent(e.location
                            .href.replace(/^[^#]+/, "")) === e.location.hash ?
                        e.location.href : -1 == e.URL.indexOf("#") && -1 !=
                        e.location.href.indexOf("#") ? e.location.href : e.URL ||
                        e.location.href
                }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId =
                h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates =
                h.storedStates || [], h.savedStates = h.savedStates || [],
                h.normalizeStore = function() {
                    h.store.idToState = h.store.idToState || {}, h.store.urlToId =
                        h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
                }, h.getState = function(e, t) {
                    "undefined" == typeof e && (e = !0), "undefined" ==
                        typeof t && (t = !0);
                    var i = h.getLastSavedState();
                    return !i && t && (i = h.createStateObject()), e && (i =
                            h.cloneObject(i), i.url = i.cleanUrl || i.url),
                        i
                }, h.getIdByState = function(e) {
                    var t = h.extractId(e.url),
                        i;
                    if (!t)
                        if (i = h.getStateString(e), "undefined" != typeof h
                            .stateToId[i]) t = h.stateToId[i];
                        else if ("undefined" != typeof h.store.stateToId[i])
                        t = h.store.stateToId[i];
                    else {
                        for (;;)
                            if (t = (new Date).getTime() + String(Math.random())
                                .replace(/\D/g, ""), "undefined" == typeof h
                                .idToState[t] && "undefined" == typeof h.store
                                .idToState[t]) break;
                        h.stateToId[i] = t, h.idToState[t] = e
                    }
                    return t
                }, h.normalizeState = function(e) {
                    var t, i;
                    return e && "object" == typeof e || (e = {}),
                        "undefined" != typeof e.normalized ? e : (e.data &&
                            "object" == typeof e.data || (e.data = {}), t = {},
                            t.normalized = !0, t.title = e.title || "", t.url =
                            h.getFullUrl(e.url ? decodeURIComponent(e.url) :
                                h.getLocationHref()), t.hash = h.getShortUrl(
                                t.url), t.data = h.cloneObject(e.data), t.id =
                            h.getIdByState(t), t.cleanUrl = t.url.replace(
                                /\??\&_suid.*/, ""), t.url = t.cleanUrl, i = !
                            h.isEmptyObject(t.data), (t.title || i) && h.options
                            .disableSuid !== !0 && (t.hash = h.getShortUrl(
                                    t.url).replace(/\??\&_suid.*/, ""),
                                /\?/.test(t.hash) || (t.hash += "?"), t.hash +=
                                "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(
                                t.hash), (h.emulated.pushState || h.bugs.safariPoll) &&
                            h.hasUrlDuplicate(t) && (t.url = t.hashedUrl),
                            t)
                }, h.createStateObject = function(e, t, i) {
                    var n = {
                        data: e,
                        title: t,
                        url: i
                    };
                    return n = h.normalizeState(n)
                }, h.getStateById = function(e) {
                    e = String(e);
                    var i = h.idToState[e] || h.store.idToState[e] || t;
                    return i
                }, h.getStateString = function(e) {
                    var t, i, n;
                    return t = h.normalizeState(e), i = {
                        data: t.data,
                        title: e.title,
                        url: e.url
                    }, n = d.stringify(i)
                }, h.getStateId = function(e) {
                    var t, i;
                    return t = h.normalizeState(e), i = t.id
                }, h.getHashByState = function(e) {
                    var t, i;
                    return t = h.normalizeState(e), i = t.hash
                }, h.extractId = function(e) {
                    var t, i, n, o;
                    return o = -1 != e.indexOf("#") ? e.split("#")[0] : e,
                        i = /(.*)\&_suid=([0-9]+)$/.exec(o), n = i ? i[1] ||
                        e : e, t = i ? String(i[2] || "") : "", t || !1
                }, h.isTraditionalAnchor = function(e) {
                    var t = !/[\/\?\.]/.test(e);
                    return t
                }, h.extractState = function(e, t) {
                    var i = null,
                        n, o;
                    return t = t || !1, n = h.extractId(e), n && (i = h.getStateById(
                        n)), i || (o = h.getFullUrl(e), n = h.getIdByUrl(
                            o) || !1, n && (i = h.getStateById(n)), i ||
                        !t || h.isTraditionalAnchor(e) || (i = h.createStateObject(
                            null, null, o))), i
                }, h.getIdByUrl = function(e) {
                    var i = h.urlToId[e] || h.store.urlToId[e] || t;
                    return i
                }, h.getLastSavedState = function() {
                    return h.savedStates[h.savedStates.length - 1] || t
                }, h.getLastStoredState = function() {
                    return h.storedStates[h.storedStates.length - 1] || t
                }, h.hasUrlDuplicate = function(e) {
                    var t = !1,
                        i;
                    return i = h.extractState(e.url), t = i && i.id !== e.id
                }, h.storeState = function(e) {
                    return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(
                        e)), e
                }, h.isLastSavedState = function(e) {
                    var t = !1,
                        i, n, o;
                    return h.savedStates.length && (i = e.id, n = h.getLastSavedState(),
                        o = n.id, t = i === o), t
                }, h.saveState = function(e) {
                    return h.isLastSavedState(e) ? !1 : (h.savedStates.push(
                        h.cloneObject(e)), !0)
                }, h.getStateByIndex = function(e) {
                    var t = null;
                    return t = "undefined" == typeof e ? h.savedStates[h.savedStates
                        .length - 1] : 0 > e ? h.savedStates[h.savedStates
                        .length + e] : h.savedStates[e]
                }, h.getCurrentIndex = function() {
                    var e = null;
                    return e = h.savedStates.length < 1 ? 0 : h.savedStates
                        .length - 1
                }, h.getHash = function(e) {
                    var t = h.getLocationHref(e),
                        i;
                    return i = h.getHashByUrl(t)
                }, h.unescapeHash = function(e) {
                    var t = h.normalizeHash(e);
                    return t = decodeURIComponent(t)
                }, h.normalizeHash = function(e) {
                    var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
                    return t
                }, h.setHash = function(e, t) {
                    var i, o;
                    return t !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.setHash,
                        args: arguments,
                        queue: t
                    }), !1) : (h.busy(!0), i = h.extractState(e, !0), i &&
                        !h.emulated.pushState ? h.pushState(i.data, i.title,
                            i.url, !1) : h.getHash() !== e && (h.bugs.setHash ?
                            (o = h.getPageUrl(), h.pushState(null, null,
                                o + "#" + e, !1)) : n.location.hash = e
                        ), h)
                }, h.escapeHash = function(t) {
                    var i = h.normalizeHash(t);
                    return i = e.encodeURIComponent(i), h.bugs.hashEscape ||
                        (i = i.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(
                            /\%3D/g, "=").replace(/\%3F/g, "?")), i
                }, h.getHashByUrl = function(e) {
                    var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,
                        "$2");
                    return t = h.unescapeHash(t)
                }, h.setTitle = function(e) {
                    var t = e.title,
                        i;
                    t || (i = h.getStateByIndex(0), i && i.url === e.url &&
                        (t = i.title || h.options.initialTitle));
                    try {
                        n.getElementsByTagName("title")[0].innerHTML = t.replace(
                            "<", "&lt;").replace(">", "&gt;").replace(
                            " & ", " &amp; ")
                    } catch (o) {}
                    return n.title = t, h
                }, h.queues = [], h.busy = function(e) {
                    if ("undefined" != typeof e ? h.busy.flag = e :
                        "undefined" == typeof h.busy.flag && (h.busy.flag = !
                            1), !h.busy.flag) {
                        s(h.busy.timeout);
                        var t = function() {
                            var e, i, n;
                            if (!h.busy.flag)
                                for (e = h.queues.length - 1; e >= 0; --
                                    e) i = h.queues[e], 0 !== i.length &&
                                    (n = i.shift(), h.fireQueueItem(n),
                                        h.busy.timeout = r(t, h.options
                                            .busyDelay))
                        };
                        h.busy.timeout = r(t, h.options.busyDelay)
                    }
                    return h.busy.flag
                }, h.busy.flag = !1, h.fireQueueItem = function(e) {
                    return e.callback.apply(e.scope || h, e.args || [])
                }, h.pushQueue = function(e) {
                    return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [],
                        h.queues[e.queue || 0].push(e), h
                }, h.queue = function(e, t) {
                    return "function" == typeof e && (e = {
                            callback: e
                        }), "undefined" != typeof t && (e.queue = t), h.busy() ?
                        h.pushQueue(e) : h.fireQueueItem(e), h
                }, h.clearQueue = function() {
                    return h.busy.flag = !1, h.queues = [], h
                }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete =
                function() {
                    return h.stateChanged = !0, h.doubleCheckClear(), h
                }, h.doubleCheckClear = function() {
                    return h.doubleChecker && (s(h.doubleChecker), h.doubleChecker = !
                        1), h
                }, h.doubleCheck = function(e) {
                    return h.stateChanged = !1, h.doubleCheckClear(), h.bugs
                        .ieDoubleCheck && (h.doubleChecker = r(function() {
                            return h.doubleCheckClear(), h.stateChanged ||
                                e(), !0
                        }, h.options.doubleCheckInterval)), h
                }, h.safariStatePoll = function() {
                    var t = h.extractState(h.getLocationHref()),
                        i;
                    if (!h.isLastSavedState(t)) return i = t, i || (i = h.createStateObject()),
                        h.Adapter.trigger(e, "popstate"), h
                }, h.back = function(e) {
                    return e !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.back,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.back(!1)
                    }), p.go(-1), !0)
                }, h.forward = function(e) {
                    return e !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.forward,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.forward(!1)
                    }), p.go(1), !0)
                }, h.go = function(e, t) {
                    var i;
                    if (e > 0)
                        for (i = 1; e >= i; ++i) h.forward(t);
                    else {
                        if (!(0 > e)) throw new Error(
                            "History.go: History.go requires a positive or negative integer passed."
                        );
                        for (i = -1; i >= e; --i) h.back(t)
                    }
                    return h
                }, h.emulated.pushState) {
                var m = function() {};
                h.pushState = h.pushState || m, h.replaceState = h.replaceState ||
                    m
            } else h.onPopState = function(t, i) {
                    var n = !1,
                        o = !1,
                        a, r;
                    return h.doubleCheckComplete(), (a = h.getHash()) ? (r =
                        h.extractState(a || h.getLocationHref(), !0), r ?
                        h.replaceState(r.data, r.title, r.url, !1) : (h
                            .Adapter.trigger(e, "anchorchange"), h.busy(!
                                1)), h.expectedStateId = !1, !1) : (n =
                        h.Adapter.extractEventData("state", t, i) || !1,
                        o = n ? h.getStateById(n) : h.expectedStateId ?
                        h.getStateById(h.expectedStateId) : h.extractState(
                            h.getLocationHref()), o || (o = h.createStateObject(
                            null, null, h.getLocationHref())), h.expectedStateId = !
                        1, h.isLastSavedState(o) ? (h.busy(!1), !1) : (
                            h.storeState(o), h.saveState(o), h.setTitle(
                                o), h.Adapter.trigger(e, "statechange"),
                            h.busy(!1), !0))
                }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState =
                function(t, i, n, o) {
                    if (h.getHashByUrl(n) && h.emulated.pushState) throw new Error(
                        "History.js does not support states with fragement-identifiers (hashes/anchors)."
                    );
                    if (o !== !1 && h.busy()) return h.pushQueue({
                        scope: h,
                        callback: h.pushState,
                        args: arguments,
                        queue: o
                    }), !1;
                    h.busy(!0);
                    var a = h.createStateObject(t, i, n);
                    return h.isLastSavedState(a) ? h.busy(!1) : (h.storeState(
                        a), h.expectedStateId = a.id, p.pushState(a
                        .id, a.title, a.url), h.Adapter.trigger(e,
                        "popstate")), !0
                }, h.replaceState = function(t, i, n, o) {
                    if (h.getHashByUrl(n) && h.emulated.pushState) throw new Error(
                        "History.js does not support states with fragement-identifiers (hashes/anchors)."
                    );
                    if (o !== !1 && h.busy()) return h.pushQueue({
                        scope: h,
                        callback: h.replaceState,
                        args: arguments,
                        queue: o
                    }), !1;
                    h.busy(!0);
                    var a = h.createStateObject(t, i, n);
                    return h.isLastSavedState(a) ? h.busy(!1) : (h.storeState(
                        a), h.expectedStateId = a.id, p.replaceState(
                        a.id, a.title, a.url), h.Adapter.trigger(e,
                        "popstate")), !0
                }; if (a) {
                try {
                    h.store = d.parse(a.getItem("History.store")) || {}
                } catch (g) {
                    h.store = {}
                }
                h.normalizeStore()
            } else h.store = {}, h.normalizeStore();
            h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h
                    .storeState(h.extractState(h.getLocationHref(), !0))),
                a && (h.onUnload = function() {
                        var e, t, i;
                        try {
                            e = d.parse(a.getItem("History.store")) || {}
                        } catch (n) {
                            e = {}
                        }
                        e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {},
                            e.stateToId = e.stateToId || {};
                        for (t in h.idToState) h.idToState.hasOwnProperty(t) &&
                            (e.idToState[t] = h.idToState[t]);
                        for (t in h.urlToId) h.urlToId.hasOwnProperty(t) &&
                            (e.urlToId[t] = h.urlToId[t]);
                        for (t in h.stateToId) h.stateToId.hasOwnProperty(t) &&
                            (e.stateToId[t] = h.stateToId[t]);
                        h.store = e, h.normalizeStore(), i = d.stringify(e);
                        try {
                            a.setItem("History.store", i)
                        } catch (o) {
                            if (!/QUOTA_EXCEEDED_ERR/.test(o.message)) throw o;
                            a.removeItem("History.store"), a.setItem(
                                "History.store", i)
                        }
                    }, h.intervalList.push(l(h.onUnload, h.options.storeInterval)),
                    h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter
                    .bind(e, "unload", h.onUnload)), h.emulated.pushState ||
                (h.bugs.safariPoll && h.intervalList.push(l(h.safariStatePoll,
                    h.options.safariPollInterval)), (
                    "Apple Computer, Inc." === o.vendor || "Mozilla" ===
                    (o.appCodeName || "")) && (h.Adapter.bind(e,
                    "hashchange", function() {
                        h.Adapter.trigger(e, "popstate")
                    }), h.getHash() && h.Adapter.onDomLoad(function() {
                    h.Adapter.trigger(e, "hashchange")
                })))
        }, h.options && h.options.delayInit || h.init()
    }(window),
    function(e, t) {
        "use strict";
        var i = e.History = e.History || {};
        if ("undefined" != typeof i.Adapter) throw new Error(
            "History.js Adapter has already been loaded...");
        i.Adapter = {
            handlers: {},
            _uid: 1,
            uid: function(e) {
                return e._uid || (e._uid = i.Adapter._uid++)
            },
            bind: function(e, t, n) {
                var o = i.Adapter.uid(e);
                i.Adapter.handlers[o] = i.Adapter.handlers[o] || {}, i.Adapter
                    .handlers[o][t] = i.Adapter.handlers[o][t] || [], i
                    .Adapter.handlers[o][t].push(n), e["on" + t] =
                    function(e, t) {
                        return function(n) {
                            i.Adapter.trigger(e, t, n)
                        }
                    }(e, t)
            },
            trigger: function(e, t, n) {
                n = n || {};
                var o = i.Adapter.uid(e),
                    a, r;
                for (i.Adapter.handlers[o] = i.Adapter.handlers[o] || {},
                    i.Adapter.handlers[o][t] = i.Adapter.handlers[o][t] || [],
                    a = 0, r = i.Adapter.handlers[o][t].length; r > a; ++
                    a) i.Adapter.handlers[o][t][a].apply(this, [n])
            },
            extractEventData: function(e, i) {
                var n = i && i[e] || t;
                return n
            },
            onDomLoad: function(t) {
                var i = e.setTimeout(function() {
                    t()
                }, 2e3);
                e.onload = function() {
                    clearTimeout(i), t()
                }
            }
        }, "undefined" != typeof i.init && i.init()
    }(window),
    function() {
        function e() {
            function e(e, t) {
                function n(e, i) {
                    if ("timeout" === i) {
                        var n = sessionStorage.getItem("xhr-tries") ||
                            1;
                        sessionStorage.setItem("xhr-tries", n + 1)
                    }
                    t.autoReloadOnFail && o.reload()
                }
                var o = this,
                    a, r, s = {
                        url: e,
                        dataType: "html",
                        timeout: 1e4
                    };
                t = $.extend({
                    autoReloadOnFail: !0
                }, t), o.isLoaded = !1;
                var l = $.ajax(s);
                o._hxr = l, l.fail(n), l.done(function(e) {
                    o.isLoaded = !0;
                    var t = $(e);
                    a = t.filter("#container").children(
                            ".content"), r = t.filter("title").text(),
                        0 === a.length && (console.error(
                            "Loaded page is not conformant"
                        ), n(this))
                }), o.ready = function(t, n) {
                    return l.done(function() {
                        i === e ? (n = $.extend({
                            $content: a.clone(),
                            title: r,
                            url: e
                        }, n), t.call(o, n)) : console.log(
                            "Page loaded but user clicked elsewhere",
                            e)
                    }), o
                }, o.reload = function() {
                    return console.error("Reloading page"),
                        document.location.href = e, o
                }, o.fail = function(e) {
                    return l.fail(e), o
                }
            }
            var t = {},
                i = !1;
            this.load = function(n, o) {
                return i = n, t[n] = t[n] || new e(n, o), t[n]
            }
        }
        window.XHRloader = new e
    }();
var loadActions = new FunctionSwitch,
    unloadActions = new FunctionSwitch;
unloadActions.add("defaultFunction", function(e) {
        var t = e.$content,
            i = new TimelineLite;
        return i.to(t, .3, {
                autoAlpha: 0
            }), $("#container").append(
                '<div class="loader loader--centered loader--page"></div>'),
            i.call(function() {
                t.remove()
            }), i.call(e.deferred.resolve), $pu(function() {
                i.kill()
            }), e.deferred
    }), loadActions.add("defaultFunction", function(e) {
        TweenLite.to($(".loader--page"), .5, {
            autoAlpha: 0,
            onComplete: function() {
                $(this.target).remove()
            }
        });
        var t = e.$content,
            i = new TimelineLite;
        return i.from(t, .5, {
            autoAlpha: 0
        }), i.call(e.deferred.resolve), $pu(function() {
            i.kill()
        }), e.deferred
    }), loadActions.add("menubar", function(e) {
        var t = new TimelineLite,
            i = $(".branding");
        return t.from(i, .2, {
            autoAlpha: 0,
            ease: Power4.easeOut
        }), t.staggerFrom(i.find("li"), .6, {
            x: -10,
            autoAlpha: 0,
            ease: Power4.easeOut
        }, -.1), e.deferred.resolve(), e.deferred
    }), loadActions.add("home", function(e) {
        TweenLite.to($(".loader--page"), .5, {
            autoAlpha: 0,
            onComplete: function() {
                $(this.target).remove()
            }
        });
        var t = e.$content,
            i = $(".article-nav,.footer,.footer-two,.Tls--container"),
            n = $(".article .padded--half"),
            o = $(".full-width-background"),
            a = new TimelineLite;
        return a.set(i, {
            autoAlpha: 0
        }), a.set(n, {
            overflow: "hidden"
        }), a.from(o, .6, {
            autoAlpha: 0,
            height: 0,
            ease: Power1.easeInOut
        }, "-=0.08"), a.set(o, {
            overflow: "visible"
        }), a.addLabel("after-carousel"), a.staggerFrom($(
            ".carousel__button"), .4, {
            autoAlpha: 0,
            scale: 2,
            ease: Power4.easeOut
        }, .05, "after-carousel"), a.from($(".wrapper.bg-beige"), .05, {
            autoAlpha: 0,
            ease: Power4.easeIn
        }, "after-carousel"), a.staggerFrom($(".article"), .5, {
            autoAlpha: 0,
            scale: .5,
            ease: Power4.easeOut
        }, .15, "after-carousel"), a.staggerFrom(n, .5, {
            autoAlpha: 0,
            height: .1,
            ease: Power4.easeIn
        }, .1, "-=0.7"), a.from($(".pub-fascia"), .5, {
            autoAlpha: 0,
            ease: Power4.easeIn
        }, "-=0.3"), a.set(i.add(n), {
            clearProps: "all"
        }), a.call(e.deferred.resolve), $pu(function() {
            a.kill()
        }), e.deferred
    }), loadActions.add("hof", function(e) {
        TweenLite.to($(".loader--page"), .5, {
            autoAlpha: 0,
            onComplete: function() {
                $(this.target).remove()
            }
        });
        var t = e.$content,
            i = new TimelineLite;
        return i.from($(".full-width-background"), .8, {
            autoAlpha: 0,
            height: 0,
            ease: Power4.easeOut
        }, "-=.05"), i.from($(".bg-radial-gradient"), .5, {
            autoAlpha: 0,
            ease: Power4.easeIn
        }, "-=0.8"), $(".inductee__grid").each(function() {
            var e = $(this).children();
            i.staggerFrom(e, .6, {
                autoAlpha: 0,
                x: 20,
                rotationY: 45,
                rotationX: 10,
                ease: Power4.easeOut
            }, .1, "inductees"), i.set(e, {
                clearProps: "all"
            })
        }), i.call(e.deferred.resolve), $pu(function() {
            i.kill()
        }), e.deferred
    }), loadActions.add("article-list", function(e) {
        TweenLite.to($(".loader--page"), .5, {
            autoAlpha: 0,
            onComplete: function() {
                $(this.target).remove()
            }
        });
        var t = e.$content,
            i = $(".article-nav,.footer,.footer-two"),
            n = $(".bg-radial-gradient"),
            o = new TimelineLite;
        return o.timeScale(1.2), o.set(i, {
                autoAlpha: 0
            }), o.set(n, {
                overflow: "hidden"
            }), o.set($(".article--medium__hero"), {
                position: "relative",
                zIndex: "2"
            }), o.from($(".full-width-background"), 1, {
                autoAlpha: 0,
                height: 0,
                ease: Power4.easeOut
            }), o.addLabel("after-top-bar", "-=0.6"), o.from(n.eq(0), 1, {
                autoAlpha: 0,
                height: 0,
                ease: Power4.easeOut
            }, "after-top-bar"), o.addLabel("article-hero-ready", "-=0.5"),
            o.staggerFrom($(".author-face").slice(0, 6), .6, {
                autoAlpha: 0,
                x: 20,
                rotationY: 45,
                rotationX: 10,
                ease: Power4.easeOut
            }, .1, "after-top-bar"), o.from($(".sly__right"), .6, {
                autoAlpha: 0,
                x: -10,
                ease: Power4.easeOut
            }), o.from($(".article--medium__content"), 1, {
                autoAlpha: 0,
                x: "-100%",
                ease: Power4.easeOut
            }, "article-hero-ready"), o.from(n.slice(1), .2, {
                autoAlpha: 0,
                ease: Power4.easeOut
            }, "article-hero-ready"), o.staggerFrom($(".grid__item").slice(
                0, 3), 1, {
                autoAlpha: 0,
                y: 50,
                ease: Power4.easeOut
            }, .15, "article-hero-ready"), o.set(n, {
                clearProps: "all"
            }), o.to(i, .5, {
                autoAlpha: 1,
                ease: Power4.easeIn
            }, "-=0.8"), o.call(e.deferred.resolve), $pu(function() {
                o.kill()
            }), e.deferred
    }), loadActions.add("article-single", function(e) {
        TweenLite.to($(".loader--page"), .5, {
            autoAlpha: 0,
            onComplete: function() {
                $(this.target).remove()
            }
        });
        var t = e.$content,
            i = $(".article-nav,.footer,.footer-two"),
            n = new TimelineLite;
        n.timeScale(1.35);
        var o = $(".bg-radial-gradient");
        return n.set(i, {
                autoAlpha: 0
            }), n.set(o, {
                overflow: "hidden"
            }), n.from($(".full-width-background"), 1, {
                autoAlpha: 0,
                height: 0,
                ease: Power4.easeOut
            }), n.addLabel("after-top-bar", "-=0.6"), n.from(o.eq(0), 1, {
                autoAlpha: 0,
                ease: Power4.easeOut
            }, "after-top-bar"), n.addLabel("article-hero-ready", "-=0.5"),
            n.staggerFrom($(".author-face").slice(0, 6), .6, {
                autoAlpha: 0,
                x: 20,
                rotationY: 45,
                rotationX: 10,
                ease: Power4.easeOut
            }, .1, "after-top-bar"), n.from($(".sly__right"), .6, {
                autoAlpha: 0,
                x: -10,
                ease: Power4.easeOut
            }), n.staggerFrom($(".article__header--small").slice(0, 8), 1, {
                autoAlpha: 0,
                y: 50,
                ease: Power4.easeOut
            }, .15, "after-top-bar"), n.set(i, {
                clearProps: "all"
            }), n.call(e.deferred.resolve), $pu(function() {
                n.kill()
            }), e.deferred
    }), loadActions.add("videos", function(e) {
        TweenLite.to($(".loader--page"), .5, {
            autoAlpha: 0,
            onComplete: function() {
                $(this.target).remove()
            }
        });
        var t = e.$content,
            i = new TimelineLite;
        return i.call(function() {
                $(".youtube-lazy-load").css({
                    position: "relative"
                }).append(
                    '<div class="loader loader--centered"></div>')
            }), i.from($(".full-width-background"), .6, {
                autoAlpha: 0,
                height: 0,
                ease: Power1.easeInOut
            }), i.from($(".bg-radial-gradient"), .3, {
                autoAlpha: 0,
                ease: Power4.easeOut
            }, "after-top-bar"), i.addLabel("main-content-container",
                "-=0.1"), i.staggerFrom($(".video").slice(0, 4), .3, {
                autoAlpha: 0,
                y: 50,
                ease: Power4.easeOut
            }, .1, "main-content-container"), i.call(e.deferred.resolve),
            $pu(function() {
                i.kill()
            }), e.deferred
    }), isBeingCleaned = !1, isPageClean = !1,
    function() {
        function e(e) {
            if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.isDefaultPrevented())) {
                var n = this,
                    o = $(n),
                    a, r = n.href,
                    s = r.match(/^[^?#]+/)[0],
                    l = document.location.href.match(/^[^?#]+/)[0],
                    c = s === l,
                    d = c && /#/.test(r),
                    u = /png|jpe?g|gif$/.test(s),
                    h = r.indexOf(document.location.protocol + "//" +
                        document.location.host) >= 0,
                    p = "" === n.target;
                o.off("click.xhr-load"), h && !u && p && !d && (a =
                    XHRloader.load(r, {
                        autoReloadOnFail: !1
                    }), o.on("click.xhr-load", function(e) {
                        e.isDefaultPrevented() || o.attr("target") ||
                            (a.fail(a.reload), e.preventDefault(),
                                t(), a.ready(c ? i : function(e) {
                                    History.pushState({}, e.title,
                                        r)
                                }))
                    }))
            }
        }

        function t() {
            $(window).queue([]), $(window).queue(function(e) {
                if (isPageClean) e();
                else if (isBeingCleaned) console.log(
                    "♫ %cUNLOAD: still unloading",
                    "background: papayawhip");
                else {
                    isBeingCleaned = !0, console.log(
                        "⬇ %cUNLOAD: start",
                        "background: orange"), $pu();
                    var t = $(".content"),
                        i = t.data("page-type");
                    unloadActions.call(i, {
                        $content: t
                    }).done(function() {
                        console.log("⬆ %cUNLOAD: done",
                                "background: orange"), $(
                                window).scrollTop(0),
                            isBeingCleaned = !1,
                            isPageClean = !0
                    }).done(e)
                }
            })
        }

        function i(e) {
            var t = e.$content;
            console.log("LOAD: queued"), $(window).queue(function(i) {
                console.log("⬇ %cLOAD: start",
                        "background: yellowgreen", e.url), t.parent()
                    .length ? $pl() : (o.append(t), $pl(t)),
                    isPageClean = !1;
                var n = t.data("page-type");
                loadActions.call(n, {
                    $content: t
                }).done(function() {
                    console.log("⬆ %cLOAD: done",
                        "background: yellowgreen"), $(
                        document).trigger("page-idle")
                }).done(i)
            })
        }
        if (plainWebsite = !History.enabled, isMobile && (plainWebsite = !0),
            sessionStorage.getItem("xhr-tries") >= 1 && (plainWebsite = !0,
                console.warn("xhr loading failed " + sessionStorage.getItem(
                        "xhr-tries") +
                    " times. Disabling xhr loading for this session.")),
            plainWebsite) return void $(function() {
            $pl(), $(document).trigger("page-idle")
        });
        var n = document.documentElement;
        n.className += " js-not-ready ", History.Adapter.bind(window,
            "statechange", function() {
                var e = History.getState(),
                    n = !1;
                XHRloader.load(e.url).ready(t).ready(n ? function(e) {
                    setTimeout(i, 3e3, e)
                } : i)
            }), window.loadPage = i, window.unloadCurrentPage = t;
        var o;
        $(function a() {
            o = $("#container");
            var e = $(".content");
            $(".js-not-ready").removeClass("js-not-ready"), loadActions
                .call("menubar").done(function() {
                    i({
                        $content: e
                    })
                })
        }), $(document).on("mousedown.xhr-load", "a", e)
    }(), jQuery.fn.extend({
        groupByRow: function(e, t) {
            e = e || 0, t = t || !1;
            var i = {},
                n = this;
            return n.each(function() {
                var n = this,
                    o = $(n);
                if (!t || (o = o.find(t), 0 !== o.length)) {
                    var a = Math.floor(o.offset().top),
                        r;
                    for (r in i)
                        if (i.hasOwnProperty(r) && r >= a - e &&
                            a + e >= r) {
                            a = r;
                            break
                        }
                    a = "" + a, i[a] = i[a] || [], i[a].push(n)
                }
            }), i
        },
        getGroup: function(e) {
            var t = this;
            return t.map(function(t, i) {
                var n;
                return $.each(e, function(e, t) {
                    return $(t).index(i) > 0 ? (n = t, !
                        1) : void 0
                }), n
            })
        }
    }), jQuery.fn.equalHeight = function() {
        function e(e) {
            var t = 0,
                i = !0,
                n = $(e);
            n.each(function() {
                var e = $(this).height();
                t !== e && (i = !1), t = Math.max(t, e)
            }), i || n.css({
                minHeight: t
            })
        }
        var t = this,
            i = t.groupByRow();
        $.each(i, function(t, i) {
            e(i)
        })
    }, "function" != typeof Object.create && (Object.create = function() {
        function e() {}
        return function(t) {
            return e.prototype = t, new e
        }
    }()),
    function($) {
        var e = {
            _open: function(e, t) {
                var i = this,
                    n = i.$items.not(e),
                    o = e.prevAll(),
                    a = e.nextAll(),
                    r = i.$description.find("iframe");
                if (i.$cover = $('<div class="inductee__cover">').appendTo(
                    document.body).click(function() {
                    i.toggle.call(i, !1, !1)
                }), e.addClass("inductee--highlighted"), e[0] == t[
                    0]) e.find(".alive-corner__icon").removeClass(
                    "icon-i_plus").addClass("icon-i_cross");
                else {
                    var s = e.find(".BtnSlide__ct"),
                        l = s.data("toggle-open") || "Close";
                    s.text(l), e.find(".BtnSlide__icon").removeClass(
                        "icon-i_play--small").addClass(
                        "icon-i_cross--small")
                }
                var c = t.attr("href").substr(1);
                i.$description = $(i.descriptions[c]).clone(), i.$description
                    .appendTo(i.$container);
                var d = i.animation = new TimelineLite;
                d.timeScale(.8), d.to(window, 1, {
                    scrollTo: {
                        y: e.offset().top - 30,
                        autoKill: !1
                    },
                    ease: Quint.easeOut
                }, 0), d.from(i.$cover, 1, {
                    autoAlpha: 0,
                    ease: Quint.easeOut
                }, 0), d.call(function() {
                    i.$description.find(
                        ".inductee__media-placeholder").css({
                        position: "relative"
                    }).append(
                        '<div class="loader loader--centered"></div>'
                    )
                }, null, null, 0), d.from(i.$description, 1, {
                    autoAlpha: 0,
                    ease: Quint.easeOut
                }, 0), d.from(i.$description, .7, {
                    height: 431,
                    ease: Quint.easeInOut
                }, 0), d.call(function() {
                    var t = i.$description.find(
                            ".inductee__media-placeholder"),
                        n = t.data("youtube-id"),
                        o = t.data("image");
                    i.isAnimating = !1, n ? (t.videoFromPlaceholder({
                        width: 766,
                        height: 431
                    }), YT_ready(function() {
                        t.find("iframe").each(
                            function() {
                                var t = $(this)
                                    .data(
                                        "youtube-api"
                                    );
                                if (t) {
                                    var i = !1;
                                    t.addEventListener(
                                        "onStateChange",
                                        function(
                                            t
                                        ) {
                                            switch (
                                                t
                                                .data
                                            ) {
                                                case YT
                                                .PlayerState
                                                .PLAYING:
                                                    i
                                                        ||
                                                        (
                                                            i = !
                                                            0,
                                                            e
                                                            .find(
                                                                ".js-omni-track-play"
                                                            )
                                                            .each(
                                                                omniCustom
                                                                .trackThis
                                                            )
                                                        );
                                                    break;
                                                case YT
                                                .PlayerState
                                                .ENDED:
                                                    i
                                                        = !
                                                        1,
                                                        e
                                                        .find(
                                                            ".js-omni-track-end"
                                                        )
                                                        .each(
                                                            omniCustom
                                                            .trackThis
                                                        );
                                                    break;
                                                case YT
                                                .PlayerState
                                                .PAUSED:
                                                    i
                                                        = !
                                                        1
                                            }
                                        })
                                }
                            })
                    })) : o && t.empty().append(
                        '<img src="' + o + '">')
                }), i.$items.each(function(e, t) {
                    d.to(t, 1, {
                        left: -$(t).position().left,
                        ease: Quint.easeOut
                    }, 0)
                }), e.find(".js-omni-track-opening").each(
                    omniCustom.trackThis)
            },
            _close: function(e, t) {
                var i = this,
                    n = i.$items.not(e);
                if (e.removeClass("inductee--highlighted"), e[0] == t[0])
                    e.find(".alive-corner__icon").removeClass(
                        "icon-i_cross").addClass("icon-i_plus");
                else {
                    var o = e.find(".BtnSlide__ct"),
                        a = o.data("toggle-closed") || "Open";
                    o.text(a), e.find(".BtnSlide__icon").removeClass(
                        "icon-i_cross--small").addClass(
                        "icon-i_play--small")
                }
                i.$description.find("iframe").remove();
                var r = i.animation = new TimelineLite;
                r.timeScale(1.3), r.set(i.$description, {
                    position: "absolute"
                }), r.to(i.$items, 1, {
                    left: 0,
                    ease: Quint.easeOut
                }, 0), r.to(i.$cover, 1, {
                    autoAlpha: 0,
                    ease: Quint.easeOut
                }, 0), r.to(i.$description, 1, {
                    height: 431,
                    autoAlpha: 0,
                    ease: Quint.easeOut
                }, 0), r.call(function() {
                    i.$cover.remove(), i.$description.remove(),
                        i.isAnimating = !1
                }), r.staggerTo(n, .5, {
                    autoAlpha: 1,
                    ease: Quint.easeOut
                }, .5, 0), e.find(".js-omni-track-closing").each(
                    omniCustom.trackThis)
            },
            toggle: function(e, t, i) {
                var n = this;
                return n.isAnimating === !0 ? !1 : void(i === !0 || n.$currentItem ===
                    !1 ? (n.isAnimating = !0, n.$currentItem = $(e),
                        n._open(n.$currentItem, t)) : (i === !1 ||
                        n.$currentItem !== !1) && (n.isAnimating = !
                        0, n._close(n.$currentItem, t), n.$currentItem = !
                        1))
            },
            init: function(e) {
                var t = this;
                t.$container = $(e), t.$items = t.$container.find(
                    ".inductee__card"), t.$items.each(function() {
                    var e = this,
                        i = $(e).findAll(".js-inductee__open");
                    i.on("click.slide-modal", function(n) {
                        n.preventDefault(), t.toggle.call(
                            t, e, i)
                    })
                }), t.$container.css({
                    position: "relative"
                });
                var i = t.$container.find(".inductee__description").detach();
                i.css({
                    display: "block"
                }), t.descriptions = {}, i.each(function(e, i) {
                    t.descriptions[i.id] = i
                })
            },
            $container: $,
            $items: $,
            $currentItem: !1,
            $cover: $,
            $description: $,
            isAnimating: !1
        };
        $.fn.extend({
            slideModal: function(t) {
                this.each(function(t, i) {
                    group = Object.create(e), group.init(i)
                })
            }
        })
    }(jQuery),
    function($, e, t) {
        "use strict";

        function i(e, d, u) {
            function _() {
                var t = 0,
                    i = 0,
                    n = yt.length;
                if (dt.old = $.extend({}, dt), lt = at ? 0 : rt[nt.horizontal ?
                        "width" : "height"](), pt = ut[nt.horizontal ?
                        "width" : "height"](), ct = at ? e : st[nt.horizontal ?
                        "outerWidth" : "outerHeight"](), yt.length = 0,
                    dt.start = 0, dt.end = Math.max(ct - lt, 0), _t) {
                    i = bt.length, wt = st.children(nt.itemSelector),
                        bt.length = 0;
                    var o = l(st, nt.horizontal ? "paddingLeft" :
                            "paddingTop"),
                        a = l(st, nt.horizontal ? "paddingRight" :
                            "paddingBottom"),
                        r = l(wt, nt.horizontal ? "marginLeft" :
                            "marginTop"),
                        s = l(wt.slice(-1), nt.horizontal ?
                            "marginRight" : "marginBottom"),
                        d = 0,
                        u = "none" !== wt.css("float");
                    t = r ? 0 : s, ct = 0, wt.each(function(e, t) {
                            var i = $(t),
                                n = i[nt.horizontal ? "outerWidth" :
                                    "outerHeight"](!0),
                                s = l(i, nt.horizontal ?
                                    "marginLeft" : "marginTop"),
                                c = l(i, nt.horizontal ?
                                    "marginRight" : "marginBottom"),
                                h = {
                                    el: t,
                                    size: n,
                                    half: n / 2,
                                    start: ct - (!e || nt.horizontal ?
                                        0 : s),
                                    center: ct - Math.round(lt / 2 -
                                        n / 2),
                                    end: ct - lt + n - (r ? 0 : c)
                                };
                            e || (d = -(Tt ? Math.round(lt / 2 - n /
                                    2) : 0) + o, ct += o), ct += n,
                                nt.horizontal || u || c && s && e >
                                0 && (ct -= Math.min(s, c)), e ===
                                wt.length - 1 && (ct += a), bt.push(
                                    h)
                        }), st[0].style[nt.horizontal ? "width" :
                            "height"] = ct + "px", ct -= t, dt.start =
                        d, dt.end = Tt ? bt.length ? bt[bt.length - 1].center :
                        d : Math.max(ct - lt, 0)
                }
                if (dt.center = Math.round(dt.end / 2 + dt.start / 2),
                    z(), ht.length && pt > 0 && (nt.dynamicHandle ? (ft =
                            Tt ? bt.length ? pt * lt / (lt + bt[bt.length -
                                1].center - bt[0].center) : pt : pt *
                            lt / ct, ft = c(Math.round(ft), nt.minHandleSize,
                                pt), ht[0].style[nt.horizontal ?
                                "width" : "height"] = ft + "px") : ft =
                        ht[nt.horizontal ? "outerWidth" : "outerHeight"]
                        (), mt.end = pt - ft, Yt || I()), !at && lt > 0
                ) {
                    var h = dt.start,
                        p = "";
                    if (_t) $.each(bt, function(e, t) {
                        (Tt || t.start + t.size > h) && (h = t[
                            Tt ? "center" : "start"], yt.push(
                            h), h += lt)
                    });
                    else
                        for (; h - lt < dt.end;) yt.push(h), h += lt; if (
                        gt[0] && n !== yt.length) {
                        for (var f = 0; f < yt.length; f++) p += nt.pageBuilder
                            .call(ot, f);
                        vt = gt.html(p).children(), vt.eq(xt.activePage)
                            .addClass(nt.activeClass)
                    }
                }
                xt.slideeSize = ct, xt.frameSize = lt, xt.sbSize = pt,
                    xt.handleSize = ft, _t ? (ot.initialized ? (xt.activeItem >=
                        bt.length || 0 === i && bt.length > 0) && B(
                        bt.length > 0 ? bt.length - 1 : 0) : (B(nt.startAt),
                        ot[$t ? "toCenter" : "toStart"](nt.startAt)
                    ), k(c(dt.dest, dt.start, dt.end))) : ot.initialized ?
                    k(c(dt.dest, dt.start, dt.end)) : k(nt.startAt, 1),
                    it("load")
            }

            function k(e, t, i) {
                if (_t && Ht.released && !i) {
                    var n = M(e),
                        o = e > dt.start && e < dt.end;
                    $t ? (o && (e = bt[n.centerItem].center), Tt && nt.activateMiddle &&
                        B(n.centerItem)) : o && (e = bt[n.firstItem]
                        .start)
                }
                Ht.init && Ht.slidee && nt.elasticBounds ? e > dt.end ?
                    e = dt.end + (e - dt.end) / 6 : e < dt.start && (e =
                        dt.start + (e - dt.start) / 6) : e = c(e, dt.start,
                        dt.end), zt.start = +new Date, zt.time = 0, zt.from =
                    dt.cur, zt.to = e, zt.delta = e - dt.cur, zt.tweesing =
                    Ht.tweese || Ht.init && !Ht.slidee, zt.immediate = !
                    zt.tweesing && (t || Ht.init && Ht.slidee || !nt.speed),
                    Ht.tweese = 0, e !== dt.dest && (dt.dest = e, it(
                        "change"), Yt || P()), D(), z(), X(), O()
            }

            function P() {
                return Yt ? (zt.immediate ? dt.cur = zt.to : zt.tweesing ?
                    (zt.tweeseDelta = zt.to - dt.cur, Math.abs(zt.tweeseDelta) <
                        .1 ? dt.cur = zt.to : dt.cur += zt.tweeseDelta *
                        (Ht.released ? nt.swingSpeed : nt.syncSpeed)
                    ) : (zt.time = Math.min(+new Date - zt.start,
                            nt.speed), dt.cur = zt.from + zt.delta *
                        jQuery.easing[nt.easing](zt.time / nt.speed,
                            zt.time, 0, 1, nt.speed)), zt.to === dt
                    .cur ? (dt.cur = zt.to, Ht.tweese = Yt = 0) :
                    Yt = f(P), it("move"), at || (m ? st[0].style[m] =
                        g + (nt.horizontal ? "translateX" :
                            "translateY") + "(" + -dt.cur + "px)" :
                        st[0].style[nt.horizontal ? "left" : "top"] = -
                        Math.round(dt.cur) + "px"), !Yt && Ht.released &&
                    it("moveEnd"), void I()) : (Yt = f(P), void(Ht.released &&
                    it("moveStart")))
            }

            function I() {
                ht.length && (mt.cur = dt.start === dt.end ? 0 : ((Ht.init &&
                        !Ht.slidee ? dt.dest : dt.cur) - dt.start) /
                    (dt.end - dt.start) * mt.end, mt.cur = c(Math.round(
                        mt.cur), mt.start, mt.end), Mt.hPos !== mt.cur &&
                    (Mt.hPos = mt.cur, m ? ht[0].style[m] = g + (nt
                            .horizontal ? "translateX" :
                            "translateY") + "(" + mt.cur + "px)" :
                        ht[0].style[nt.horizontal ? "left" : "top"] =
                        mt.cur + "px"))
            }

            function O() {
                vt[0] && Mt.page !== xt.activePage && (Mt.page = xt.activePage,
                    vt.removeClass(nt.activeClass).eq(xt.activePage)
                    .addClass(nt.activeClass), it("activePage", Mt.page)
                )
            }

            function C() {
                Xt.speed && dt.cur !== (Xt.speed > 0 ? dt.end : dt.start) ||
                    ot.stop(), jt = Ht.init ? f(C) : 0, Xt.now = +new Date,
                    Xt.pos = dt.cur + (Xt.now - Xt.lastTime) / 1e3 * Xt
                    .speed, k(Ht.init ? Xt.pos : Math.round(Xt.pos)),
                    Ht.init || dt.cur !== dt.dest || it("moveEnd"), Xt.lastTime =
                    Xt.now
            }

            function E(e, i, o) {
                if ("boolean" === n(i) && (o = i, i = t), i === t) k(dt[
                    e], o);
                else {
                    if ($t && "center" !== e) return;
                    var a = ot.getPos(i);
                    a && k(a[e], o, !$t)
                }
            }

            function A(e) {
                return "undefined" !== n(e) ? s(e) ? e >= 0 && e < bt.length ?
                    e : -1 : wt.index(e) : -1
            }

            function L(e) {
                return A(s(e) && 0 > e ? e + bt.length : e)
            }

            function B(e) {
                var t = A(e);
                return !_t || 0 > t ? !1 : (Mt.active !== t && (wt.eq(
                        xt.activeItem).removeClass(nt.activeClass),
                    wt.eq(t).addClass(nt.activeClass), Mt.active =
                    xt.activeItem = t, X(), it("active", t)), t)
            }

            function M(e) {
                e = c(s(e) ? e : dt.dest, dt.start, dt.end);
                var t = {},
                    i = Tt ? 0 : lt / 2;
                if (!at)
                    for (var n = 0, o = yt.length; o > n; n++) {
                        if (e >= dt.end || n === yt.length - 1) {
                            t.activePage = yt.length - 1;
                            break
                        }
                        if (e <= yt[n] + i) {
                            t.activePage = n;
                            break
                        }
                    }
                if (_t) {
                    for (var a = !1, r = !1, l = !1, d = 0, u = bt.length; u >
                        d; d++)
                        if (a === !1 && e <= bt[d].start + bt[d].half &&
                            (a = d), l === !1 && e <= bt[d].center + bt[
                                d].half && (l = d), d === u - 1 || e <=
                            bt[d].end + bt[d].half) {
                            r = d;
                            break
                        }
                    t.firstItem = s(a) ? a : 0, t.centerItem = s(l) ? l :
                        t.firstItem, t.lastItem = s(r) ? r : t.centerItem
                }
                return t
            }

            function z(e) {
                $.extend(xt, M(e))
            }

            function X() {
                var e = dt.dest <= dt.start,
                    t = dt.dest >= dt.end,
                    i = e ? 1 : t ? 2 : 3;
                if (Mt.slideePosState !== i && (Mt.slideePosState = i,
                    At.is("button,input") && At.prop("disabled", e),
                    Lt.is("button,input") && Lt.prop("disabled", t),
                    At.add(Ot)[e ? "addClass" : "removeClass"](nt.disabledClass),
                    Lt.add(It)[t ? "addClass" : "removeClass"](nt.disabledClass)
                ), Mt.fwdbwdState !== i && Ht.released && (Mt.fwdbwdState =
                    i, Ot.is("button,input") && Ot.prop("disabled",
                        e), It.is("button,input") && It.prop(
                        "disabled", t)), _t) {
                    var n = 0 === xt.activeItem,
                        o = xt.activeItem >= bt.length - 1,
                        a = n ? 1 : o ? 2 : 3;
                    Mt.itemsButtonState !== a && (Mt.itemsButtonState =
                        a, Ct.is("button,input") && Ct.prop(
                            "disabled", n), Et.is("button,input") &&
                        Et.prop("disabled", o), Ct[n ? "addClass" :
                            "removeClass"](nt.disabledClass), Et[o ?
                            "addClass" : "removeClass"](nt.disabledClass)
                    )
                }
            }

            function H(e, t, i) {
                if (e = L(e), t = L(t), e > -1 && t > -1 && e !== t &&
                    (!i || t !== e - 1) && (i || t !== e + 1)) {
                    wt.eq(e)[i ? "insertAfter" : "insertBefore"](bt[t].el);
                    var n = t > e ? e : i ? t : t - 1,
                        o = e > t ? e : i ? t + 1 : t,
                        a = e > t;
                    e === xt.activeItem ? Mt.active = xt.activeItem = i ?
                        a ? t + 1 : t : a ? t : t - 1 : xt.activeItem >
                        n && xt.activeItem < o && (Mt.active = xt.activeItem +=
                            a ? 1 : -1), _()
                }
            }

            function Y(e, t) {
                for (var i = 0, n = Bt[e].length; n > i; i++)
                    if (Bt[e][i] === t) return i;
                return -1
            }

            function D() {
                Ht.released && !ot.isPaused && ot.resume()
            }

            function F(e) {
                return Math.round(c(e, mt.start, mt.end) / mt.end * (dt
                    .end - dt.start)) + dt.start
            }

            function j() {
                Ht.history[0] = Ht.history[1], Ht.history[1] = Ht.history[
                        2], Ht.history[2] = Ht.history[3], Ht.history[3] =
                    Ht.delta
            }

            function W(e) {
                Ht.released = 0, Ht.source = e, Ht.slidee = "slidee" ===
                    e
            }

            function Q(e) {
                if (!Ht.init) {
                    var t = "touchstart" === e.type,
                        i = e.data.source,
                        n = "slidee" === i;
                    ("handle" !== i || nt.dragHandle && mt.start !== mt
                        .end) && (!n || (t ? nt.touchDragging : nt.mouseDragging &&
                        e.which < 2)) && (t || o(e, 1), W(i), Ht.$source =
                        $(e.target), Ht.init = 0, Ht.touch = t, Ht.pointer =
                        t ? e.originalEvent.touches[0] : e, Ht.initX =
                        Ht.pointer.pageX, Ht.initY = Ht.pointer.pageY,
                        Ht.initPos = n ? dt.cur : mt.cur, Ht.start = +
                        new Date, Ht.time = 0, Ht.path = 0, Ht.pathToInit =
                        n ? t ? 50 : 10 : 0, Ht.history = [0, 0, 0, 0],
                        Ht.initLoc = Ht[nt.horizontal ? "initX" :
                            "initY"], Ht.deltaMin = n ? -Ht.initLoc : -
                        mt.cur, Ht.deltaMax = n ? document[nt.horizontal ?
                            "width" : "height"] - Ht.initLoc : mt.end -
                        mt.cur, (n ? st : ht).addClass(nt.draggedClass),
                        v.on(t ? b : w, R), n && (Dt = setInterval(j,
                            10)))
                }
            }

            function R(e) {
                if (Ht.released = "mouseup" === e.type || "touchend" ===
                    e.type, Ht.pointer = Ht.touch ? e.originalEvent[Ht.released ?
                        "changedTouches" : "touches"][0] : e, Ht.pathX =
                    Ht.pointer.pageX - Ht.initX, Ht.pathY = Ht.pointer.pageY -
                    Ht.initY, Ht.pathTotal = Math.sqrt(Math.pow(Ht.pathX,
                        2) + Math.pow(Ht.pathY, 2)), Ht.delta = c(nt.horizontal ?
                        Ht.pathX : Ht.pathY, Ht.deltaMin, Ht.deltaMax), !
                    Ht.init && Ht.pathTotal > Ht.pathToInit) {
                    if (Ht.slidee) {
                        if (nt.horizontal ? Math.abs(Ht.pathX) < Math.abs(
                            Ht.pathY) : Math.abs(Ht.pathX) > Math.abs(
                            Ht.pathY)) return void N();
                        Ht.$source.on(x, a)
                    }
                    Ht.init = 1, ot.pause(1), it("moveStart")
                }
                Ht.init ? (Ht.released ? (Ht.touch || o(e), N(), nt.releaseSwing &&
                            Ht.slidee && (Ht.swing = (Ht.delta - Ht.history[
                                    0]) / 40 * 300, Ht.delta += Ht.swing,
                                Ht.tweese = Math.abs(Ht.swing) > 10)) :
                        o(e), k(Ht.slidee ? Math.round(Ht.initPos - Ht.delta) :
                            F(Ht.initPos + Ht.delta))) : Ht.released &&
                    N()
            }

            function N() {
                clearInterval(Dt), v.off(Ht.touch ? b : w, R), (Ht.slidee ?
                    st : ht).removeClass(nt.draggedClass), ot.resume(
                    1), dt.cur === dt.dest && Ht.init && it(
                    "moveEnd"), Ht.init = 0
            }

            function q() {
                ot.stop(), v.off("mouseup", q)
            }

            function U(e) {
                switch (o(e), this) {
                    case It[0]:
                    case Ot[0]:
                        ot.moveBy(It.is(this) ? nt.moveBy : -nt.moveBy),
                            v.on("mouseup", q);
                        break;
                    case Ct[0]:
                        ot.prev();
                        break;
                    case Et[0]:
                        ot.next();
                        break;
                    case At[0]:
                        ot.prevPage();
                        break;
                    case Lt[0]:
                        ot.nextPage()
                }
            }

            function V(e) {
                return c(-e.wheelDelta || e.detail || e.deltaY, -1, 1)
            }

            function K(e) {
                nt.scrollBy && dt.start !== dt.end && (o(e, 1), ot.slideBy(
                    nt.scrollBy * V(e.originalEvent)))
            }

            function Z(e) {
                nt.clickBar && e.target === ut[0] && (o(e), k(F((nt.horizontal ?
                    e.pageX - ut.offset().left : e.pageY -
                    ut.offset().top) - ft / 2)))
            }

            function G(e) {
                if (nt.keyboardNavBy) switch (e.which) {
                    case nt.horizontal ? 37:
                        38: o(e), ot["pages" === nt.keyboardNavBy ?
                            "prevPage" : "prev"]();
                        break;
                    case nt.horizontal ? 39:
                        40: o(e), ot["pages" === nt.keyboardNavBy ?
                            "nextPage" : "next"]()
                }
            }

            function J() {
                this.parentNode === st[0] && ot.activate(this)
            }

            function et() {
                this.parentNode === gt[0] && ot.activatePage(vt.index(
                    this))
            }

            function tt(e) {
                nt.pauseOnHover && ot["mouseenter" === e.type ? "pause" :
                    "resume"](2)
            }

            function it(e, t) {
                if (Bt[e]) {
                    for (Qt = Bt[e].length, T.length = 0, Wt = 0; Qt >
                        Wt; Wt++) T.push(Bt[e][Wt]);
                    for (Wt = 0; Qt > Wt; Wt++) T[Wt].call(ot, e, t)
                }
            }
            var nt = $.extend({}, i.defaults, d),
                ot = this,
                at = s(e),
                rt = $(e),
                st = rt.children().eq(0),
                lt = 0,
                ct = 0,
                dt = {
                    start: 0,
                    center: 0,
                    end: 0,
                    cur: 0,
                    dest: 0
                },
                ut = $(nt.scrollBar).eq(0),
                ht = ut.children().eq(0),
                pt = 0,
                ft = 0,
                mt = {
                    start: 0,
                    end: 0,
                    cur: 0
                },
                gt = $(nt.pagesBar),
                vt = 0,
                yt = [],
                wt = 0,
                bt = [],
                xt = {
                    firstItem: 0,
                    lastItem: 0,
                    centerItem: 0,
                    activeItem: -1,
                    activePage: 0
                },
                St = "basic" === nt.itemNav,
                Tt = "forceCentered" === nt.itemNav,
                $t = "centered" === nt.itemNav || Tt,
                _t = !at && (St || $t || Tt),
                kt = nt.scrollSource ? $(nt.scrollSource) : rt,
                Pt = nt.dragSource ? $(nt.dragSource) : rt,
                It = $(nt.forward),
                Ot = $(nt.backward),
                Ct = $(nt.prev),
                Et = $(nt.next),
                At = $(nt.prevPage),
                Lt = $(nt.nextPage),
                Bt = {},
                Mt = {},
                zt = {},
                Xt = {},
                Ht = {
                    released: 1
                },
                Yt = 0,
                Dt = 0,
                Ft = 0,
                jt = 0,
                Wt, Qt;
            at || (e = rt[0]), ot.initialized = 0, ot.frame = e, ot.slidee =
                st[0], ot.pos = dt, ot.rel = xt, ot.items = bt, ot.pages =
                yt, ot.isPaused = 0, ot.options = nt, ot.reload = _, ot.getPos =
                function(e) {
                    if (_t) {
                        var t = A(e);
                        return -1 !== t ? bt[t] : !1
                    }
                    var i = st.find(e).eq(0);
                    if (i[0]) {
                        var n = nt.horizontal ? i.offset().left - st.offset()
                            .left : i.offset().top - st.offset().top,
                            o = i[nt.horizontal ? "outerWidth" :
                                "outerHeight"]();
                        return {
                            start: n,
                            center: n - lt / 2 + o / 2,
                            end: n - lt + o,
                            size: o
                        }
                    }
                    return !1
                }, ot.moveBy = function(e) {
                    Xt.speed = e, !Ht.init && Xt.speed && dt.cur !== (Xt.speed >
                        0 ? dt.end : dt.start) && (Xt.lastTime = +new Date,
                        Xt.startPos = dt.cur, W("button"), Ht.init = 1,
                        it("moveStart"), p(jt), C())
                }, ot.stop = function() {
                    "button" === Ht.source && (Ht.init = 0, Ht.released = 1)
                }, ot.prev = function() {
                    ot.activate(xt.activeItem - 1)
                }, ot.next = function() {
                    ot.activate(xt.activeItem + 1)
                }, ot.prevPage = function() {
                    ot.activatePage(xt.activePage - 1)
                }, ot.nextPage = function() {
                    ot.activatePage(xt.activePage + 1)
                }, ot.slideBy = function(e, t) {
                    _t ? ot[$t ? "toCenter" : "toStart"](c(($t ? xt.centerItem :
                            xt.firstItem) + nt.scrollBy * e, 0, bt.length)) :
                        k(dt.dest + e, t)
                }, ot.slideTo = function(e, t) {
                    k(e, t)
                }, ot.toStart = function(e, t) {
                    E("start", e, t)
                }, ot.toEnd = function(e, t) {
                    E("end", e, t)
                }, ot.toCenter = function(e, t) {
                    E("center", e, t)
                }, ot.getIndex = A, ot.activate = function(e, t) {
                    var i = B(e);
                    nt.smart && i !== !1 && ($t ? ot.toCenter(i, t) : i >=
                        xt.lastItem ? ot.toStart(i, t) : i <= xt.firstItem ?
                        ot.toEnd(i, t) : D())
                }, ot.activatePage = function(e, t) {
                    s(e) && k(yt[c(e, 0, yt.length - 1)], t)
                }, ot.resume = function(e) {
                    !nt.cycleBy || !nt.cycleInterval || "items" === nt.cycleBy &&
                        !bt[0] || e < ot.isPaused || (ot.isPaused = 0, Ft ?
                            Ft = clearTimeout(Ft) : it("resume"), Ft =
                            setTimeout(function() {
                                switch (it("cycle"), nt.cycleBy) {
                                    case "items":
                                        ot.activate(xt.activeItem >= bt
                                            .length - 1 ? 0 : xt.activeItem +
                                            1);
                                        break;
                                    case "pages":
                                        ot.activatePage(xt.activePage >=
                                            yt.length - 1 ? 0 : xt.activePage +
                                            1)
                                }
                            }, nt.cycleInterval))
                }, ot.pause = function(e) {
                    e < ot.isPaused || (ot.isPaused = e || 100, Ft && (Ft =
                        clearTimeout(Ft), it("pause")))
                }, ot.toggle = function() {
                    ot[Ft ? "pause" : "resume"]()
                }, ot.set = function(e, t) {
                    $.isPlainObject(e) ? $.extend(nt, e) : nt.hasOwnProperty(
                        e) && (nt[e] = t)
                }, ot.add = function(e, t) {
                    var i = $(e);
                    _t ? ("undefined" !== n(t) && bt[0] ? bt.length && i.insertBefore(
                            bt[t].el) : i.appendTo(st), t <= xt.activeItem &&
                        (Mt.active = xt.activeItem += i.length)) : st.append(
                        i), _()
                }, ot.remove = function(e) {
                    if (_t) {
                        var t = L(e);
                        if (t > -1) {
                            wt.eq(t).remove();
                            var i = t === xt.activeItem && !(Tt && nt.activateMiddle);
                            t < xt.activeItem && (Mt.active = --xt.activeItem),
                                _(), i && (Mt.active = null, ot.activate(xt
                                    .activeItem))
                        }
                    } else $(e).remove(), _()
                }, ot.moveAfter = function(e, t) {
                    H(e, t, 1)
                }, ot.moveBefore = function(e, t) {
                    H(e, t)
                }, ot.on = function(e, t) {
                    if ("object" === n(e))
                        for (var i in e) e.hasOwnProperty(i) && ot.on(i, e[
                            i]);
                    else if ("function" === n(t))
                        for (var o = e.split(" "), a = 0, r = o.length; r >
                            a; a++) Bt[o[a]] = Bt[o[a]] || [], -1 === Y(o[a],
                            t) && Bt[o[a]].push(t);
                    else if ("array" === n(t))
                        for (var s = 0, l = t.length; l > s; s++) ot.on(e,
                            t[s])
                }, ot.one = function(e, t) {
                    function i() {
                        t.apply(ot, arguments), ot.off(e, i)
                    }
                    ot.on(e, i)
                }, ot.off = function(e, t) {
                    if (t instanceof Array)
                        for (var i = 0, o = t.length; o > i; i++) ot.off(e,
                            t[i]);
                    else
                        for (var a = e.split(" "), r = 0, s = a.length; s >
                            r; r++)
                            if (Bt[a[r]] = Bt[a[r]] || [], "undefined" ===
                                n(t)) Bt[a[r]].length = 0;
                            else {
                                var l = Y(a[r], t); - 1 !== l && Bt[a[r]].splice(
                                    l, 1)
                            }
                }, ot.destroy = function() {
                    return v.add(kt).add(ht).add(ut).add(gt).add(It).add(Ot)
                        .add(Ct).add(Et).add(At).add(Lt).unbind("." + h),
                        Ct.add(Et).add(At).add(Lt).removeClass(nt.disabledClass),
                        wt && wt.eq(xt.activeItem).removeClass(nt.activeClass),
                        gt.empty(), at || (rt.unbind("." + h), st.add(ht).css(
                            m || (nt.horizontal ? "left" : "top"), m ?
                            "none" : 0), $.removeData(e, h)), ot.initialized =
                        0, ot
                }, ot.init = function() {
                    if (!ot.initialized) {
                        ot.on(u);
                        var e = ht;
                        return at || (e = e.add(st), rt.css("overflow",
                                "hidden"), m || "static" !== rt.css(
                                "position") || rt.css("position",
                                "relative")), m ? g && e.css(m, g) : (
                                "static" === ut.css("position") && ut.css(
                                    "position", "relative"), e.css({
                                    position: "absolute"
                                })), nt.forward && It.on(S, U), nt.backward &&
                            Ot.on(S, U), nt.prev && Ct.on(x, U), nt.next &&
                            Et.on(x, U), nt.prevPage && At.on(x, U), nt.nextPage &&
                            Lt.on(x, U), kt.on("DOMMouseScroll." + h +
                                " mousewheel." + h, K), ut[0] && ut.on(x, Z),
                            _t && nt.activateOn && rt.on(nt.activateOn +
                                "." + h, "*", J), gt[0] && nt.activatePageOn &&
                            gt.on(nt.activatePageOn + "." + h, "*", et), Pt
                            .on(y, {
                                source: "slidee"
                            }, Q), ht && ht.on(y, {
                                source: "handle"
                            }, Q), v.bind("keydown." + h, G), at || (rt.on(
                                "mouseenter." + h + " mouseleave." + h,
                                tt), rt.on("scroll." + h, r)), _(), nt.cycleBy &&
                            !at && ot[nt.startPaused ? "pause" : "resume"](),
                            ot.initialized = 1, ot
                    }
                }
        }

        function n(e) {
            return null == e ? String(e) : "object" == typeof e ||
                "function" == typeof e ? Object.prototype.toString.call(e).match(
                    /\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof e
        }

        function o(e, t) {
            e.preventDefault(), t && e.stopPropagation()
        }

        function a(e) {
            o(e, 1), $(this).off(e.type, a)
        }

        function r() {
            this.scrollLeft = 0, this.scrollTop = 0
        }

        function s(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }

        function l(e, t) {
            return parseInt(e.css(t), 10) || 0
        }

        function c(e, t, i) {
            return t > e ? t : e > i ? i : e
        }
        var d = "sly",
            u = "Sly",
            h = d,
            p = e.cancelAnimationFrame || e.cancelRequestAnimationFrame,
            f = e.requestAnimationFrame,
            m, g, v = $(document),
            y = "touchstart." + h + " mousedown." + h,
            w = "mousemove." + h + " mouseup." + h,
            b = "touchmove." + h + " touchend." + h,
            x = "click." + h,
            S = "mousedown." + h,
            T = [];
        ! function(e) {
            for (var t = ["moz", "webkit", "o"], i = 0, n = 0, o = t.length; o >
                n && !p; ++n) p = e[t[n] + "CancelAnimationFrame"] || e[t[n] +
                "CancelRequestAnimationFrame"], f = p && e[t[n] +
                "RequestAnimationFrame"];
            p || (f = function(t) {
                var n = +new Date,
                    o = Math.max(0, 16 - (n - i));
                return i = n + o, e.setTimeout(function() {
                    t(n + o)
                }, o)
            }, p = function(e) {
                clearTimeout(e)
            })
        }(window),
        function() {
            function e(e) {
                for (var o = 0, a = i.length; a > o; o++) {
                    var r = i[o] ? i[o] + e.charAt(0).toUpperCase() + e.slice(
                        1) : e;
                    if (n.style[r] !== t) return r
                }
            }
            var i = ["", "webkit", "moz", "ms", "o"],
                n = document.createElement("div");
            m = e("transform"), g = e("perspective") ? "translateZ(0) " : ""
        }(), e[u] = i, $.fn[d] = function(e, t) {
            var o, a;
            return $.isPlainObject(e) || (("string" === n(e) || e === !1) &&
                (o = e === !1 ? "destroy" : e, a = Array.prototype.slice
                    .call(arguments, 1)), e = {}), this.each(function(n,
                r) {
                var s = $.data(r, h);
                s || o ? s && o && s[o] && s[o].apply(s, a) : s = $
                    .data(r, h, new i(r, e, t).init())
            })
        }, i.defaults = {
            horizontal: 0,
            itemNav: null,
            itemSelector: null,
            smart: 0,
            activateOn: null,
            activateMiddle: 0,
            scrollSource: null,
            scrollBy: 0,
            dragSource: null,
            mouseDragging: 0,
            touchDragging: 0,
            releaseSwing: 0,
            swingSpeed: .2,
            elasticBounds: 0,
            scrollBar: null,
            dragHandle: 0,
            dynamicHandle: 0,
            minHandleSize: 50,
            clickBar: 0,
            syncSpeed: .5,
            pagesBar: null,
            activatePageOn: null,
            pageBuilder: function(e) {
                return "<li>" + (e + 1) + "</li>"
            },
            forward: null,
            backward: null,
            prev: null,
            next: null,
            prevPage: null,
            nextPage: null,
            cycleBy: null,
            cycleInterval: 5e3,
            pauseOnHover: 0,
            startPaused: 0,
            moveBy: 300,
            speed: 0,
            easing: "swing",
            startAt: 0,
            keyboardNavBy: null,
            draggedClass: "dragged",
            activeClass: "active",
            disabledClass: "disabled"
        }
    }(jQuery, window);
var omni = omni || {
    sendId: function() {
        console.warn("Omniture missing")
    }
};
$pl(function(e) {
        e('a[href="#top"]').on("click.scroll-to-top", function(e) {
            e.preventDefault(), animateScrollToTop()
        })
    }), $(function() {
        function e() {
            if (c) var t = TweenLite.fromTo(r, .5, {
                y: 0
            }, {
                y: -122,
                ease: Linear.easeNone,
                onComplete: e
            })
        }

        function t(t) {
            c = !0, d && d._active || (e(), TweenLite.to(a, .3, {
                scale: .9
            }))
        }

        function i(e) {
            c = !1, TweenLite.to(a, .3, {
                scale: 1
            })
        }
        if (1) {
            var n = new TimelineLite({
                    paused: !0
                }),
                o = new Ease(BezierEasing(.16, 0, 0, 1)),
                a = $("#ball"),
                r = $("#ball-surface"),
                s = $("#stand"),
                l = createNumericTween(0, 488, 3, function(e) {
                    TweenLite.set(r, {
                        y: -e % 122
                    })
                }, {
                    ease: o
                });
            n.add(l), n.set(a, {
                transformOrigin: "50% 0"
            }, 0), n.from(a, 2, {
                scale: 0,
                ease: o
            }, 0), n.from(a, 2, {
                y: -40,
                ease: Back.easeOut.config(4)
            }, 0), n.set(s, {
                transformOrigin: "50% 100%"
            }, 0), n.from(s, 1, {
                scaleY: 0
            }, 1), $(window).load(function() {
                n.play()
            });
            var c = !1,
                d;
            $(".site-title").hover(t, i), $(window).on("progress/start", t),
                $(window).on("progress/end", i)
        }
    }),
    function() {
        var e = function() {
            $(".js-equalize-height").equalHeight(), $(
                ".js-equalize-height-2").equalHeight(), $(
                ".js-match-sibling-height").prev().addBack().equalHeight()
        };
        $pl(e), $(window).load(e)
    }(), $pl(function() {
        $(".inductee__grid").slideModal()
    }), $pl(function() {
        if (!isMobile && $(".author-face").length > 6) {
            var e = $(".sly"),
                t = $(
                    '<button type="button" class="sly__left disabled"></button>'
                ),
                i = $(
                    '<button type="button" class="sly__right disabled"></button>'
                );
            e.parent().append(t).append(i), e.addClass("sly--enabled"), e.sly({
                horizontal: 1,
                itemSelector: ".author-face",
                itemNav: "basic",
                startAt: 0,
                speed: 300,
                prevPage: t,
                nextPage: i
            })
        }
    }), $pl(function(e) {
        var t = e(".carousel__slide");
        0 !== t.length && (t.filter(".youtube-lazy-load").append(
            '<div class="loader loader--centered"></div>'), $(
            document).one(
            "page-idle.enable-carousel-videos.remove-on-unload",
            function() {
                t.videoFromPlaceholder(), YT_ready(function() {
                    t.find("iframe").each(function() {
                        var e = $(this),
                            t = e.parent().data(
                                "title"),
                            i = e.data(
                                "youtube-api");
                        if (i) {
                            var n = !1;
                            i.addEventListener(
                                "onStateChange",
                                function(e) {
                                    var i;
                                    switch (e.data) {
                                        case YT
                                        .PlayerState
                                        .PLAYING:
                                            n ||
                                                (
                                                    n = !
                                                    0,
                                                    omniCustom
                                                    .trackId(
                                                        "homeHeroClickToPlay", [
                                                            t
                                                        ]
                                                    )
                                                );
                                            break;
                                        case YT
                                        .PlayerState
                                        .ENDED:
                                            n = !
                                                1,
                                                omniCustom
                                                .trackId(
                                                    "homeHeroVideoEnd", [
                                                        t
                                                    ]
                                                );
                                            break;
                                        case YT
                                        .PlayerState
                                        .PAUSED:
                                            n = !
                                                1
                                    }
                                })
                        }
                    })
                })
            }))
    }), $pl(function(e) {
        function t() {
            var t = i.find("iframe"),
                n = e('a[href*="youtu.be"]');
            t.length && (n.on("click.play-video", function(e) {
                if (!(e.which > 1 || e.shiftKey || e.altKey ||
                    e.metaKey)) {
                    var i = $(this),
                        n = i.attr("href") ||
                        "http://youtu.be/333333333",
                        o = n.match(/[^/]*$/, o);
                    if (null === o) return;
                    o = o[0], e.preventDefault();
                    var a = t.data("youtube-api");
                    a && $.isFunction(a.loadVideoById) && !
                        isMobile ? a.loadVideoById(o) : (n =
                            getYoutubeUrl(o, {
                                autoplay: !0
                            }), t.attr("src", n)), $(
                            ".video--current").each(
                            function() {
                                $(this).removeClass(
                                        "video--current"),
                                    $(this).find(
                                        ".alive-corner__text"
                                    ).text("Watch")
                            }), i.addClass("video--current"),
                        i.find(".alive-corner__text").text(
                            "Watching")
                }
            }), n.on("click.scroll-to-top", animateScrollToTop))
        }
        var i = e("#youtube-player");
        0 !== i.length && $(document).off(".setup-youtube-player").one(
            "page-idle.setup-youtube-player.remove-on-unload", function() {
                i.videoFromPlaceholder({
                    onload: t
                }), YT_ready(function() {
                    i.find("iframe").each(function() {
                        var e = $(this).data(
                            "youtube-api");
                        if (e) {
                            var t = !1;
                            e.addEventListener(
                                "onStateChange",
                                function(e) {
                                    var i;
                                    switch (e.data) {
                                        case YT.PlayerState
                                        .PLAYING:
                                            t || (t = !
                                                0,
                                                i =
                                                "videosVideoStart"
                                            );
                                            break;
                                        case YT.PlayerState
                                        .ENDED:
                                            t = !1,
                                                i =
                                                "videosVideoEnd";
                                            break;
                                        case YT.PlayerState
                                        .PAUSED:
                                            t = !1
                                    }
                                    if (i) {
                                        var n = $(
                                                ".video--current"
                                            ),
                                            o = n.attr(
                                                "omni-property"
                                            );
                                        omniCustom.trackId(
                                            i, [
                                                o
                                            ])
                                    }
                                })
                        }
                    })
                })
            })
    }), $pl(function(e) {
        isMobile || e(".js-popup").on("click.open-popup", function(e) {
            e.preventDefault();
            var t = $(this),
                i = t.attr("href"),
                n = t.data("pop-w") || 640,
                o = t.data("pop-h") || 362,
                a = function() {
                    window.open(i, "sharer",
                        "toolbar=0,status=0,resizable=1,width=" +
                        n + ",height=" + o) || (document.location
                        .href = shareUrl)
                };
            /Firefox/.test(navigator.userAgent) ? setTimeout(a, 0) :
                a()
        })
    }), $pl(function(e) {
        var t = e(".footer .nav .current").attr("href"),
            i = $(".branding .nav a");
        i.removeClass("current"), i.filter('[href="' + t + '"]').addClass(
            "current")
    }), $pl(function($) {
        $(".Tls").each(function() {
            timelineIn.call("timeline-snippet", {
                $el: $(this),
                condition: "<90"
            })
        })
    }), $pl(function() {
        ga("send", "pageview")
    });
$pl(function() {
    $('.article--medium__hero img').on('error', function() {
        this.src =
            "http://toyotahalloffame.com/images/articles/article639x429.jpg";
        $(this).off('error')
    })
    $('.article--teaser img').on('error', function() {
        this.src =
            "http://toyotahalloffame.com/images/articles/article319x185.jpg";
        $(this).off('error')
    })
})