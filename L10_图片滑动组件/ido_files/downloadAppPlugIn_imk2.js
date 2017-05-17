(function () {
    var b = function (c) {
        return new a(c)
    };

    function a(c) {
        this.init(c)
    }

    a.prototype = {
        init: function (d) {
            var c = d || {};
            this.mainPicSrc = c.mainPicSrc || "//commonst.360buyimg.com/common/indexLayer/main-pic.png";
            this.btnPicSrc = c.btnPicSrc || "//commonst.360buyimg.com/common/indexLayer/img-btn.png";
            this.picBtnCallBack = c.picBtnCallBack;
            this.closeBtnCallBack = c.closeBtnCallBack || this.closeBtndefault;
            this.container = c.container || "body";
            this.mycontainer = document.querySelector(this.container);
            this.head = document.getElementsByTagName("head")[0];
            this.windowWidth = document.documentElement.clientWidth;
            this.appendCss();
            this.appendHtml();
            this.bind()
        }, closeBtndefault: function () {
            var c = document.getElementsByClassName("my-indexlayer-layout-tongyong")[0];
            c.style.display = "none"
        }, appendCss: function () {
            var c = document.createElement("STYLE");
            c.innerHTML = '*{margin:0;padding:0;-webkit-box-sizing:border-box;-ms-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:0}html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;color:green!important}body{-webkit-text-size-adjust:100%;background:#fff;min-width:320px;margin:0;padding:0;height:100%;width:100%;overflow-x:hidden;-webkit-overflow-scrolling:touch;font-family:PingFangSC-Regular,Helvetica,"Droid Sans",Arial,sans-serif}img{border:0;vertical-align:middle}.my-indexlayer-layout-tongyong{position:fixed;z-index:9999;height:100%;top:0;left:0;background-color:rgba(0,0,0,.7);display:box;display:-webkit-box;display:-moz-box;display:-ms-box;display:-o-box;box-align:center;-webkit-box-align:center;-moz-box-align:center;-ms-box-align:center;-o-box-align:center}.my-indexlayer-layout-tongyong .img-block-tongy{width:375px;height:375px;position:relative}.my-indexlayer-layout-tongyong .img-block-tongy .layer-pic-tongy{display:block;height:292px;max-width:100%;margin:0 auto}.my-indexlayer-layout-tongyong .img-block-tongy .btn-pic-tongy{display:block;margin:0 auto;margin-top:22px;width:168px;height:60px}.my-indexlayer-layout-tongyong .img-block-tongy .close-btn-tongy{position:absolute;top:0;right:25px;background:url(//commonst.360buyimg.com/common/indexLayer/1/close-btn.png) no-repeat;background-size:25px 25px;width:25px;height:25px}';
            this.head.appendChild(c)
        }, appendHtml: function () {
            var d = document.createElement("div");
            d.classList.add("my-indexlayer-layout-tongyong");
            d.id = "outermostIndexlayerLayoutTongyong";
            var c = "";
            c += '<div class="img-block-tongy" style="width:' + this.windowWidth + "px;height:" + this.windowWidth + 'px">';
            c += '<img class="layer-pic-tongy" style="height:' + parseInt(this.windowWidth * 0.78) + 'px" src=' + this.mainPicSrc + ">";
            c += '<img class="btn-pic-tongy" id="myLayoutPicBtnTongy" src=' + this.btnPicSrc + ">";
            c += '<span class="close-btn-tongy" id="myLayoutCloseBtnTongy"></span>';
            c += "</div>";
            d.innerHTML = c;
            this.mycontainer.appendChild(d)
        }, bind: function () {
            var e = this;
            var d = document.getElementById("myLayoutCloseBtnTongy");
            var c = document.getElementById("myLayoutPicBtnTongy");
            d.addEventListener("click", function () {
                e.closeBtnCallBack()
            });
            c.addEventListener("click", function () {
                if (typeof e.picBtnCallBack == "function") {
                    e.picBtnCallBack()
                }
            })
        }
    };
    window.indexLayer = b
})();
(function () {
    var ab = navigator.userAgent;
    var al = ab.match(/Chrome/i) != null && ab.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i) == null ? true : false;
    var am = (ab.match(/(Android);?[\s\/]+([\d.]+)?/)) ? true : false;
    var a = (ab.match(/(iPad).*OS\s([\d_]+)/)) ? true : false;
    var ae = (ab.match(/(Mac\sOS)\sX\s([\d_]+)/)) ? true : false;
    var z = (!a && ab.match(/(iPhone\sOS)\s([\d_]+)/)) ? true : false;
    var k = (z || a) && ab.match(/Safari/);
    var aj = 0;
    var B = ab.match(/(iPhone\sOS)\s([\d_]+)/);
    var E = (B && B.length > 2) ? (B[2].split("_").length > 0 ? B[2].split("_")[0] : "") : "";
    k && (aj = ab.match(/Version\/([\d\.]+)/));
    try {
        aj = parseFloat(aj[1], 10)
    } catch (an) {
    }
    var ab = window.navigator.userAgent, ag = false;
    var ag = ab.toUpperCase().indexOf("SAMSUNG-SM-N7508V") != -1;
    var A = "plugIn_downloadAppPlugIn_loadIframe";
    var C = false;
    var r = 0;
    var W = {};
    var K = {};
    var n = null;
    var ai = {};
    var H = window.Zepto || window.jQuery ? true : false;
    var p = [];
    var I = window.localStorage ? true : false;
    var f = Math.floor(Math.random() * 100) + 1;
    var b = false;
    var w = false;
    var s = false;
    var R = {closeUaAjax: false, keplerAjax: false, configCenterAjax: false};
    var g = {
        AROUSAL_APP: true,
        DOWNLOAD_LAYER: true,
        GENERAL_HEAD: true,
        msf_type: "auto",
        cooldown_time: 0,
        scheme_prame: "",
        use_universallinks: true
    };
    var c = {keplerID: null, keplerFrom: 1, keplerParamJson: null};
    var aa = {isUniversalLinksUa: false, isUniversalLinksOs: false, isUseUniversalLinks: false};
    var ap = {login_State: false, pcScan_Layer: null, newPeople_Layer: null};
    var v = {
        url: "https://mapi.m.jd.com/config/display.action?_format_=json&domain=" + encodeURI(document.referrer),
        method: "POST",
        async: true,
        timeout: 1000,
        withCredentials: true,
        hasAjax: "configCenterAjax",
        hasAjaxSend: false,
        error: function () {
            R.configCenterAjax = true
        },
        success: function (e) {
            R.configCenterAjax = true;
            e = JSON.parse(e);
            S(e)
        }
    };
    var Q = {
        url: "https://so.m.jd.com/downLoad/closeUa.action?_format_=json",
        method: "POST",
        async: true,
        timeout: 1000,
        hasAjax: "closeUaAjax",
        hasAjaxSend: false,
        error: function () {
            R.closeUaAjax = true
        },
        success: function (e) {
            R.closeUaAjax = true;
            e = JSON.parse(e);
            ao(e)
        }
    };

    function u() {
        var aq = new Date();
        var ar = aq.getFullYear();
        var at = aq.getMonth() + 1;
        var e = aq.getDate();
        strDate = ar + "-" + at + "-" + e;
        return strDate
    }

    function l(ar, aq, e) {
        if (H) {
            n("#" + ar).bind(aq, e)
        } else {
            n("#" + ar).addEventListener(aq, e, !1)
        }
    }

    function T(e) {
        var aq = (e || "mGen") + (++r);
        return aq
    }

    if (H) {
        n = window.$;
        ai = window.$
    } else {
        n = function (e) {
            if (typeof e == "object") {
                return e
            }
            return document.querySelector(e)
        };
        if (!window.$) {
            window.$ = ai = n
        } else {
            ai = window.$
        }
    }
    window.onblur = function () {
        for (var e = 0; e < p.length; e++) {
            clearTimeout(p[e])
        }
    };
    function m(ar) {
        var aq = document.cookie.indexOf(ar + "=");
        if (aq == -1) {
            return ""
        }
        aq = aq + ar.length + 1;
        var e = document.cookie.indexOf(";", aq);
        if (e == -1) {
            e = document.cookie.length
        }
        return document.cookie.substring(aq, e)
    }

    function t(ar, au, e, av, at) {
        var aw = ar + "=" + escape(au);
        if (e != "") {
            var aq = new Date();
            aq.setTime(aq.getTime() + e * 24 * 3600 * 1000);
            aw += ";expires=" + aq.toGMTString()
        }
        if (av != "") {
            aw += ";path=" + av
        }
        if (at != "") {
            aw += ";domain=" + at
        }
        document.cookie = aw
    }

    function ac(ar, av) {
        var au = null;
        if (av) {
            au = {
                downAppURl: "//h5.m.jd.com/active/download/download.html?channel=jd-m",
                downAppIos: "https://itunes.apple.com/us/app/jing-dong-wang-gou-shou-dan/id414245413",
                downWeixin: "http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",
                downIpad: "https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8",
                inteneUrl: "openapp.jdmobile://virtual?",
                inteneUrlParams: null,
                sourceType: "JSHOP_SOURCE_TYPE",
                sourceValue: "JSHOP_SOURCE_VALUE",
                M_sourceFrom: "mxz",
                NoJumpDownLoadPage: false,
                kepler_param: null,
                autoOpenAppEventId: "MDownLoadFloat_AppArouse",
                autoOpenAppEventParam: "",
                autoOpenIntervalTime: 0,
                autoOpenAppCallback: null,
                autoOpenAppCallbackSource: null,
                cookieFlag: null,
                noJdApp: false,
                universalLinksUrl: "https://linkst.m.jd.com"
            }
        } else {
            au = {
                downAppURl: "//h5.m.jd.com/active/download/download.html?channel=jd-m",
                downAppIos: "https://itunes.apple.com/us/app/jing-dong-wang-gou-shou-dan/id414245413",
                downWeixin: "http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",
                downIpad: "https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8",
                inteneUrl: "openapp.jdmobile://virtual?",
                inteneUrlParams: null,
                openAppBtnId: "",
                closePanelBtnId: "",
                closePanelId: "",
                openAppCallback: null,
                openAppCallbackSource: null,
                closeCallblack: null,
                closeCallblackSource: null,
                cookieFlag: null,
                sourceType: "JSHOP_SOURCE_TYPE",
                sourceValue: "JSHOP_SOURCE_VALUE",
                openAppEventId: "MDownLoadFloat_OpenNow",
                openAppEventParam: "",
                closePanelEventId: "MDownLoadFloat_Close",
                closePanelEventParam: "",
                appDownCloseIntervalTime: 86400000,
                appDownOpenIntervalTime: 0,
                noRecord: false,
                isnotWriteOpenAppCookie: false,
                M_sourceFrom: "mxz",
                msf_type: "click",
                NoJumpDownLoadPage: false,
                kepler_param: null,
                noJdApp: false,
                universalLinksUrl: "https://linkst.m.jd.com"
            }
        }
        if (ar) {
            for (var at in ar) {
                if ((at && ar[at]) || (at == "appDownCloseIntervalTime" && ar[at] == 0) || (at == "appDownOpenIntervalTime" && ar[at] == 0) || (at == "autoOpenIntervalTime" && ar[at] == 0)) {
                    if (at == "appDownCloseIntervalTime" || at == "appDownOpenIntervalTime" || at == "autoOpenIntervalTime") {
                        var ax = /^(-     |\+)?\d+$/;
                        if (ax.test(ar[at]) && ar[at] >= 0) {
                            try {
                                var aq = parseInt(ar[at], 10);
                                au[at] = aq
                            } catch (aw) {
                            }
                        }
                    } else {
                        au[at] = ar[at]
                    }
                }
            }
        }
        return au
    }

    function d(ar) {
        var av = o(ar, true);
        var at = ar.universalLinksUrl + "/ul/ul.action?" + av;
        if (navigator.userAgent.indexOf("baidubrowser") >= 0) {
            window.location.href = at
        } else {
            var aq = document.createElement("a");
            aq.setAttribute("href", at);
            aq.style.display = "none";
            document.body.appendChild(aq);
            var au = document.createEvent("HTMLEvents");
            au.initEvent("click", !1, !1);
            aq.dispatchEvent(au)
        }
    }

    function J(e, at) {
        var av = o(e);
        var aq = null;
        if (a) {
            aq = e.downIpad
        } else {
            if (z) {
                aq = e.downAppIos
            } else {
                aq = e.downAppURl
            }
        }
        if (al) {
            if (am) {
                var au = av;
                av = P(au);
                setTimeout(function () {
                    window.location.href = av
                }, 50)
            }
        }
        if ((k && aj >= 9) || ae || ag) {
            setTimeout(function () {
                var ax = document.createElement("a");
                ax.setAttribute("href", av);
                ax.style.display = "none";
                document.body.appendChild(ax);
                var ay = document.createEvent("HTMLEvents");
                ay.initEvent("click", !1, !1);
                ax.dispatchEvent(ay)
            }, 0)
        } else {
            document.querySelector("#" + A).src = av
        }
        var aw = K.outermostIndexlayerLayoutTongyong;
        if (at && aw) {
            var ar = Date.now();
            setTimeout(function () {
                var ax = setTimeout(function () {
                    V(ar, aw)
                }, 1400);
                p.push(ax)
            }, 100)
        } else {
            if (!e.NoJumpDownLoadPage) {
                var ar = Date.now();
                setTimeout(function () {
                    var ax = setTimeout(function () {
                        N(ar, aq)
                    }, 1500);
                    p.push(ax)
                }, 100)
            }
        }
    }

    function N(ar, aq) {
        var e = Date.now();
        if (ar && (e - ar) < (1500 + 200)) {
            window.location.href = aq
        }
    }

    function V(aq, ar) {
        var e = Date.now();
        if (aq && (e - aq) < 2000) {
            G(ar)
        }
    }

    function o(au, aq) {
        var aE = [];
        var ax = au.inteneUrlParams;
        var aC = {category: "jump", des: "HomePage"};
        if (au.sourceType && au.sourceValue) {
            aC.sourceType = au.sourceType;
            aC.sourceValue = au.sourceValue;
            if (ax && !ax.sourceType && !ax.sourceValue) {
                ax.sourceType = au.sourceType;
                ax.sourceValue = au.sourceValue
            }
        }
        if (au && au.M_sourceFrom) {
            if (aq) {
                au.M_sourceFrom = au.M_sourceFrom + "_UL"
            }
            aC.M_sourceFrom = au.M_sourceFrom;
            if (ax) {
                ax.M_sourceFrom = au.M_sourceFrom
            }
        }
        if (ax) {
            for (var aD in ax) {
                if (aD && ax[aD]) {
                    aE.push('"' + aD + '":"' + ax[aD] + '"')
                }
            }
        } else {
            for (var aD in aC) {
                if (aD && aC[aD]) {
                    aE.push('"' + aD + '":"' + aC[aD] + '"')
                }
            }
        }
        if (au && au.msf_type) {
            aE.push('"msf_type":"' + au.msf_type + '"')
        }
        if (c.keplerID) {
            aE.push('"keplerID":"' + c.keplerID + '"');
            aE.push('"keplerFrom":"' + c.keplerFrom + '"')
        }
        if (c.keplerParamJson) {
            aE.push('"kepler_param":' + c.keplerParamJson)
        }
        if (aq) {
            aE.push('"NoJumpDownLoadPage":' + au.NoJumpDownLoadPage);
            aE.push('"downAppIos":"' + encodeURIComponent(au.downAppIos) + '"');
            aE.push('"locationHref":"' + encodeURIComponent(window.location.href) + '"')
        }
        try {
            var ay = MPing.EventSeries.getSeries();
            if (ay) {
                var aF = JSON.parse(ay);
                aF.jdv = encodeURIComponent(m("__jdv"));
                aF.unpl = encodeURIComponent(m("unpl"));
                aF.mt_xid = encodeURIComponent(m("mt_xid"));
                aF.mt_subsite = encodeURIComponent(m("mt_subsite"))
            }
            var aB = {
                mt_subsite: encodeURIComponent(m("mt_subsite")),
                __jdv: encodeURIComponent(m("__jdv")),
                unpl: encodeURIComponent(m("unpl")),
                __jda: encodeURIComponent(m("__jda"))
            };
            ay = JSON.stringify(aF);
            aE.push('"m_param":' + ay);
            aE.push('"SE":' + JSON.stringify(aB))
        } catch (aA) {
            aE.push('"m_param":null')
        }
        var at = "{" + aE.join(",") + "}";
        var aw = au.inteneUrl.split("?");
        var ar = null;
        var az = "";
        if (g.scheme_prame) {
            az = "/" + g.scheme_prame
        }
        if (aw.length == 2 && aw[1]) {
            ar = aw[0] + az + "?" + aw[1] + "&params=" + at
        } else {
            ar = aw[0] + az + "?params=" + at
        }
        if (s) {
            var av = {
                url: "//ccc-x.jd.com/dsp/op?openapp_url=" + encodeURI(at) + "&openapp_source_type=100",
                method: "POST",
                async: true,
                timeout: 1000,
                error: function () {
                },
                success: function (e) {
                }
            };
            O(av)
        }
        return ar
    }

    function P(e) {
        return "intent://m.jd.com/#Intent;scheme=" + e + ";package=com.jingdong.app.mall;end"
    }

    function x(e) {
        if (e.openAppBtnId && document.querySelector("#" + e.openAppBtnId)) {
            W[e.openAppBtnId] = e;
            af(e.openAppBtnId, e.openAppEventId, e.openAppEventParam);
            l(e.openAppBtnId, "click", function () {
                var av = this.getAttribute("id");
                var aq = W[av];
                if (!C) {
                    var at = document.createElement("iframe");
                    at.id = A;
                    document.body.appendChild(at);
                    document.getElementById(A).style.display = "none";
                    document.getElementById(A).style.width = "0px";
                    document.getElementById(A).style.height = "0px";
                    C = true
                }
                if (aq.openAppCallback) {
                    var ar = aq.openAppCallbackSource ? aq.openAppCallbackSource : null;
                    aq.openAppCallback.call(this, ar)
                }
                if (!aq.isnotWriteOpenAppCookie && aq.appDownOpenIntervalTime) {
                    var au = aq.cookieFlag ? "downloadAppPlugIn_downCloseDate_" + aq.cookieFlag : "downloadAppPlugIn_downCloseDate";
                    t(au, Date.now() + "_" + aq.appDownOpenIntervalTime, 60, "/", ".m.jd.com");
                    t(au, Date.now() + "_" + aq.appDownOpenIntervalTime, 60, "/", "m.jd.hk")
                }
                ad(aq);
                if (aa.isUseUniversalLinks && !aq.noJdApp) {
                    d(aq)
                } else {
                    J(aq)
                }
            })
        }
    }

    function Z(aq, e) {
        if (aq.closePanelBtnId && aq.closePanelId && document.querySelector("#" + aq.closePanelId) && document.querySelector("#" + aq.closePanelBtnId)) {
            W[aq.closePanelBtnId] = aq;
            af(aq.closePanelBtnId, aq.closePanelEventId, aq.closePanelEventParam);
            if (!e) {
                if (U(aq)) {
                    document.querySelector("#" + aq.closePanelId).style.display = "none";
                    if (aq.closeCallblack) {
                        var at = event || window.event;
                        var ar = aq.closeCallblackSource ? aq.closeCallblackSource : null;
                        aq.closeCallblack.call(this, ar, at)
                    }
                    return
                } else {
                    document.querySelector("#" + aq.closePanelId).style.display = "block"
                }
            }
            l(aq.closePanelBtnId, "click", function () {
                var ay = this.getAttribute("id");
                var au = W[ay];
                var ax = au.cookieFlag ? "downloadAppPlugIn_downCloseDate_" + au.cookieFlag : "downloadAppPlugIn_downCloseDate";
                if (!au.noRecord && au.appDownCloseIntervalTime && au.appDownCloseIntervalTime != 0) {
                    t(ax, Date.now() + "_" + au.appDownCloseIntervalTime, 60, "/", "m.jd.com");
                    t(ax, Date.now() + "_" + au.appDownCloseIntervalTime, 60, "/", "m.jd.hk")
                }
                document.querySelector("#" + au.closePanelId).style.display = "none";
                if (au.closeCallblack) {
                    var aw = event || window.event;
                    var av = au.closeCallblackSource ? au.closeCallblackSource : null;
                    au.closeCallblack.call(this, av, aw)
                }
            })
        }
    }

    function U(ar, ay) {
        var at = false;
        var ax = null;
        if (ay) {
            if (g.msf_type && g.msf_type == "auto") {
                ax = (ar.cookieFlag && ar.autoOpenIntervalTime) ? "autoOpenApp_downCloseDate_" + ar.cookieFlag : "autoOpenApp_downCloseDate_" + g.msf_type
            } else {
                ax = "autoOpenApp_downCloseDate_" + g.msf_type
            }
            if (w || !g.AROUSAL_APP) {
                at = true
            }
        } else {
            var aq = ab.indexOf("jdmsxh");
            var au = ab.indexOf("jdmsxh2");
            if (ab.indexOf("Html5Plus") >= 0 || (aq >= 0 && aq != au) || b || !g.DOWNLOAD_LAYER) {
                at = true
            }
            ax = ar.cookieFlag ? "downloadAppPlugIn_downCloseDate_" + ar.cookieFlag : "downloadAppPlugIn_downCloseDate"
        }
        var av = m(ax);
        var aw = null;
        if (av) {
            aw = av.split("_");
            if (aw.length == 2) {
                aw[0] = parseInt(aw[0], 10);
                aw[1] = parseInt(aw[1], 10)
            } else {
                aw = null
            }
        }
        var e = Date.now();
        if (!at && !ar.noRecord && aw && aw.length == 2 && (e - aw[0]) < aw[1] && (ar.closePanelBtnId || ay)) {
            at = true
        }
        return at
    }

    function O(ar) {
        var aq;
        try {
            aq = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (au) {
            try {
                aq = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (au) {
                aq = new XMLHttpRequest()
            }
        }
        aq.ajaxRunError = true;
        if (ar.withCredentials) {
            try {
                aq.withCredentials = true
            } catch (au) {
            }
        }
        try {
            aq.open(ar.method, ar.url, ar.async);
            if (ar.timeout) {
                var at = ar.source ? ar.source : null;
                setTimeout(function () {
                    if (aq.ajaxRunError) {
                        aq.onreadystatechange = function () {
                        };
                        aq.abort();
                        ar.error.call(at)
                    }
                }, ar.timeout)
            }
            aq.onreadystatechange = function () {
                var av = ar.source ? ar.source : null;
                if (aq.readyState == 4) {
                    if (aq.status == 200) {
                        aq.ajaxRunError = false;
                        var e = aq.responseText;
                        ar.success.call(av, e)
                    } else {
                        ar.error.call(av)
                    }
                }
            };
            aq.send(null)
        } catch (au) {
        }
    }

    function af(aw, at, aq) {
        try {
            var av = document.getElementById(aw);
            var ar = av.className;
            if (ar) {
                ar = ar + " J_ping"
            } else {
                ar = "J_ping"
            }
            av.className = ar;
            av.setAttribute("report-eventid", at);
            if (aq) {
                av.setAttribute("report-eventparam", aq)
            }
        } catch (au) {
        }
    }

    function j(at, aq) {
        try {
            var au = new MPing.inputs.Click(at);
            if (aq) {
                au.event_param = aq
            }
            var ar = new MPing();
            ar.send(au)
        } catch (av) {
        }
    }

    function y(aq, ax, aD) {
        var ar = ax ? ax : 1;
        var ay = aD ? true : false;
        if (!U(aq) && aq.closePanelId) {
            var aE = document.getElementById(aq.closePanelId);
            if (aE) {
                var aB = aE.getBoundingClientRect();
                var aC = aB.height || aB.bottom - aB.top;
                var aw = Y(aE, "opacity");
                var aA = Y(aE, "display");
                if (aA && aC && aA != "none" && aC == 0) {
                    ay = true
                } else {
                    if (aC && aw && aC == 50 && aw == 0) {
                        ay = true
                    }
                }
            } else {
                ay = true
            }
            if (ar < 3 && ay == false) {
                ar++;
                setTimeout(function () {
                    y(aq, ar, ay)
                }, 2000)
            }
        }
        if (ay) {
            try {
                var au = new MPing.inputs.Click("MDownLoadFloat_FloatShield");
                var av = new MPing();
                au.event_param = aq.openAppEventId;
                av.send(au);
                var at = {
                    url: "//so.m.jd.com/downLoad/checkShield.action?_format_=json",
                    method: "POST",
                    async: true,
                    timeout: 1000,
                    error: function () {
                    },
                    success: function (e) {
                    }
                };
                O(at)
            } catch (az) {
            }
        }
    }

    function Y(aq, e) {
        if (aq.currentStyle) {
            return aq.currentStyle[e]
        } else {
            return document.defaultView.getComputedStyle(aq, false)[e]
        }
    }

    function F(au, ar) {
        var at = ar ? false : U(au.funcPrame);
        var e = true;
        if (!at && au && Object.prototype.toString.apply(au.ajaxPrame) === "[object Array]" && au.ajaxPrame.length > 0) {
            au.ajaxPrameIsArray = true;
            for (var aq = 0; aq < au.ajaxPrame.length; aq++) {
                if (!R[au.ajaxPrame[aq].hasAjax]) {
                    e = false;
                    if (!au.ajaxPrame[aq].hasAjaxSend) {
                        O(au.ajaxPrame[aq]);
                        au.ajaxPrame[aq].hasAjaxSend = true
                    }
                }
            }
        } else {
            if (!at && !R[au.ajaxPrame.hasAjax]) {
                e = false;
                if (!au.ajaxPrame.hasAjaxSend) {
                    O(au.ajaxPrame);
                    au.ajaxPrame.hasAjaxSend = true
                }
            }
        }
        if (e) {
            q(au.funcList, au.funcPrame)
        } else {
            ak(au)
        }
    }

    function ak(au, aq) {
        var at = aq ? aq : 0;
        var e = true;
        if (au.ajaxPrameIsArray) {
            for (var ar = 0; ar < au.ajaxPrame.length; ar++) {
                if (!R[au.ajaxPrame[ar].hasAjax]) {
                    e = false;
                    break
                }
            }
        } else {
            e = R[au.ajaxPrame.hasAjax]
        }
        if (au.funcList && au.funcList.length > 0) {
            if (e) {
                q(au.funcList, au.funcPrame)
            } else {
                setTimeout(function () {
                    at++;
                    if (at < 20) {
                        ak(au, at)
                    } else {
                        q(au.funcList, au.funcPrame)
                    }
                }, 50)
            }
        }
    }

    function q(e, ar) {
        if (e.length == 1 && Object.prototype.toString.apply(e) === "[object Function]") {
            e(ar)
        } else {
            for (var aq = 0; aq < e.length; aq++) {
                e[aq](ar)
            }
        }
    }

    function ao(au) {
        if (au && au.ua) {
            au = JSON.parse(au.ua);
            if (au && au.clickCloseUa) {
                var av = au.clickCloseUa.split("|");
                for (var ar = 0; ar < av.length; ar++) {
                    var aq = av[ar];
                    if (aq && ab.indexOf(aq) >= 0) {
                        b = true;
                        break
                    }
                }
            }
            if (au && au.autoCloseBrowser) {
                for (var ar = 0; ar < au.autoCloseBrowser.length; ar++) {
                    var e = au.autoCloseBrowser[ar];
                    if (e.browser && e.abtest && ab.indexOf(e.browser) >= 0) {
                        ah(e.abtest);
                        break
                    }
                }
            }
            if (!w && au && au.autoCloseOs) {
                for (var ar = 0; ar < au.autoCloseOs.length; ar++) {
                    var e = au.autoCloseOs[ar];
                    if (e.os == "IOS" && e.abtest && (a || z)) {
                        ah(e.abtest);
                        break
                    } else {
                        if (e.os == "Android" && e.abtest && am) {
                            ah(e.abtest);
                            break
                        }
                    }
                }
            }
            if (!w && au && au.autoCloseOsAndBrowser) {
                for (var ar = 0; ar < au.autoCloseOsAndBrowser.length; ar++) {
                    var e = au.autoCloseOsAndBrowser[ar];
                    if (e.os && e.browser && e.abtest && e.os == "IOS" && (a || z) && ab.indexOf(e.browser) >= 0) {
                        ah(e.abtest);
                        break
                    }
                    if (e.os && e.browser && e.abtest && e.os == "Android" && am && ab.indexOf(e.browser) >= 0) {
                        ah(e.abtest);
                        break
                    }
                }
            }
            if (au && au.universalLinksUa) {
                var at = au.universalLinksUa.split("|");
                for (var ar = 0; ar < at.length; ar++) {
                    var aq = at[ar];
                    if (aq && ab.indexOf(aq) >= 0 && !am) {
                        aa.isUniversalLinksUa = true;
                        break
                    }
                }
            }
            if (au && au.universalLinksOs) {
                var aw = au.universalLinksOs.split("|");
                for (var ar = 0; ar < aw.length; ar++) {
                    var aq = aw[ar];
                    if (aq && E && aq == E && E > 8) {
                        aa.isUniversalLinksOs = true;
                        break
                    }
                }
            }
        }
    }

    function S(e) {
        if (e) {
            if (e.data) {
                for (var ar = 0; ar < e.data.length; ar++) {
                    var aq = e.data[ar];
                    if (aq.compent && g.hasOwnProperty(aq.compent)) {
                        g[aq.compent] = aq.display;
                        if (aq.compent == "AROUSAL_APP" && aq.msf_type) {
                            g.msf_type = aq.msf_type;
                            if (e.cooldown && e.cooldown[aq.msf_type]) {
                                g.cooldown_time = e.cooldown[aq.msf_type]
                            }
                            if (aq.openAppParam) {
                                g.scheme_prame = aq.openAppParam
                            }
                            if (aq.hasOwnProperty("isSpportUL") && !aq.isSpportUL) {
                                g.use_universallinks = false
                            }
                        }
                    }
                }
            }
            if (e.kepler) {
                if (e.kepler.kepler_data && e.kepler.kepler_data.keplerID && e.kepler.kepler_data.keplerFrom) {
                    c.keplerID = e.kepler.kepler_data.keplerID;
                    c.keplerFrom = e.kepler.kepler_data.keplerFrom
                }
                if (e.kepler.kepler_param) {
                    c.keplerParamJson = JSON.stringify(e.kepler.kepler_param)
                }
            }
            if (e.loginState) {
                ap.login_State = e.loginState
            }
            if (e.shieldingLayer) {
                ap.pcScan_Layer = e.shieldingLayer.pcScan_Layer || "";
                ap.newPeople_Layer = e.shieldingLayer.newPeople_Layer || ""
            }
            if (e.openSendOutUrl) {
                s = e.openSendOutUrl
            }
        }
    }

    function i(e) {
        if (!U(e, true)) {
            if (g.msf_type && g.msf_type == "auto") {
                if (e.cookieFlag && e.autoOpenIntervalTime) {
                    cookieName = "autoOpenApp_downCloseDate_" + e.cookieFlag
                } else {
                    cookieName = "autoOpenApp_downCloseDate_" + g.msf_type;
                    e.autoOpenIntervalTime = g.cooldown_time
                }
            } else {
                cookieName = "autoOpenApp_downCloseDate_" + g.msf_type;
                e.autoOpenIntervalTime = g.cooldown_time
            }
            if (e.autoOpenIntervalTime) {
                t(cookieName, Date.now() + "_" + e.autoOpenIntervalTime, 60, "/", ".m.jd.com");
                t(cookieName, Date.now() + "_" + e.autoOpenIntervalTime, 60, "/", "m.jd.hk")
            }
            ad(e);
            j(e.autoOpenAppEventId, e.autoOpenAppEventParam);
            e.msf_type = g.msf_type;
            if (e.autoOpenAppCallback) {
                var aq = e.autoOpenAppCallbackSource ? e.autoOpenAppCallbackSource : null;
                e.autoOpenAppCallback.call(this, aq)
            }
            J(e, true)
        }
    }

    function ah(e) {
        if (e && f <= e) {
            w = true
        }
    }

    function ad(e) {
        if (e && e.kepler_param) {
            c.keplerParamJson = e.kepler_param
        }
        if (c.keplerParamJson) {
            j("MDownLoadFloat_ArouseParam", c.keplerParamJson)
        }
    }

    function L(e) {
        if (aa.isUniversalLinksOs && aa.isUniversalLinksUa && !e.noJdApp && e.universalLinksUrl && g.use_universallinks) {
            aa.isUseUniversalLinks = true
        }
    }

    function G(e) {
        v.url = "https://mapi.m.jd.com/config/display.action?_format_=json&domain=" + encodeURI(document.referrer) + (e.newPeople_Layer ? "&newPeopleLayer=true" : "&newPeopleLayer=false") + (e.pcScan_Layer ? "&pcScanLayer=true" : "&pcScanLayer=false");
        var aq = {ajaxPrame: v, funcList: h, funcPrame: e};
        F(aq, true)
    }

    function h(e) {
        if (e.newPeople_Layer && ap.login_State) {
            if (ap.newPeople_Layer) {
                D(e)
            } else {
                v.url = "https://mapi.m.jd.com/config/display.action?_format_=json&domain=" + encodeURI(document.referrer) + (e.newPeople_Layer ? "&newPeopleLayer=true" : "&newPeopleLayer=false") + (e.pcScan_Layer ? "&pcScanLayer=true" : "&pcScanLayer=false");
                R.configCenterAjax = false;
                v.hasAjaxSend = false;
                var aq = {ajaxPrame: v, funcList: D, funcPrame: e};
                F(aq, true)
            }
        } else {
            if (e.pcScan_Layer) {
                D(e)
            }
        }
    }

    function D(e) {
        var aq = null;
        if (e.newPeople_Layer && ap.login_State && ap.newPeople_Layer && ap.newPeople_Layer.layerShowOrNo) {
            aq = {
                M_sourceFrom: e.M_sourceFrom || "mxz",
                msf_type: e.newPeople_Layer_param.msf_type || "xinrenzzc",
                downAppURl: e.newPeople_Layer_param.downAppURl || ((e.M_sourceFrom && e.newPeople_Layer_param.msf_type) ? "//h5.m.jd.com/active/download/download.html?channel=jd-m" + e.M_sourceFrom + e.newPeople_Layer_param.msf_type : ""),
                downAppIos: e.newPeople_Layer_param.downAppIos,
                inteneUrl: e.newPeople_Layer_param.inteneUrl,
                inteneUrlParams: e.newPeople_Layer_param.inteneUrlParams,
                openAppCallback: e.newPeople_Layer_param.openAppCallback,
                closeCallblack: e.newPeople_Layer_param.closeCallblack,
                openAppEventId: e.newPeople_Layer_param.openAppEventId || "MDownLoadFloat_MaskOpen",
                openAppEventParam: e.newPeople_Layer_param.openAppEventParam || ((e.M_sourceFrom && e.newPeople_Layer_param.msf_type) ? e.M_sourceFrom + e.newPeople_Layer_param.msf_type : "mxz"),
                closePanelEventId: e.newPeople_Layer_param.closePanelEventId || "MDownLoadFloat_MaskClose",
                closePanelEventParam: e.newPeople_Layer_param.closePanelEventParam || ((e.M_sourceFrom && e.newPeople_Layer_param.msf_type) ? e.M_sourceFrom + e.newPeople_Layer_param.msf_type : "mxz"),
                cookieFlag: "newPeople_Layer",
                appDownCloseIntervalTime: ap.newPeople_Layer.layerCloseCoolDownTime || 0,
                appDownOpenIntervalTime: ap.newPeople_Layer.layerOpenCoolDownTime || 0,
                layerMainPicSrc: e.newPeople_Layer_param.layerMainPicSrc || ap.newPeople_Layer.layerMainPicSrc,
                layerOpenPicSrc: e.newPeople_Layer_param.layerOpenPicSrc || ap.newPeople_Layer.layerOpenPicSrc
            };
            M(aq)
        } else {
            if (e.pcScan_Layer && ap.pcScan_Layer && ap.pcScan_Layer.layerShowOrNo && g.msf_type == "pcauto") {
                aq = {
                    M_sourceFrom: e.M_sourceFrom || "mxz",
                    msf_type: e.pcScan_Layer_param.msf_type || "pczzc",
                    downAppURl: e.pcScan_Layer_param.downAppURl || ((e.M_sourceFrom && e.pcScan_Layer_param.msf_type) ? "//h5.m.jd.com/active/download/download.html?channel=jd-m" + e.M_sourceFrom + e.pcScan_Layer_param.msf_type : ""),
                    downAppIos: e.pcScan_Layer_param.downAppIos,
                    inteneUrl: e.pcScan_Layer_param.inteneUrl,
                    inteneUrlParams: e.pcScan_Layer_param.inteneUrlParams,
                    openAppCallback: e.pcScan_Layer_param.openAppCallback,
                    closeCallblack: e.pcScan_Layer_param.closeCallblack,
                    openAppEventId: e.pcScan_Layer_param.openAppEventId || "MDownLoadFloat_MaskOpen",
                    openAppEventParam: e.pcScan_Layer_param.openAppEventParam || ((e.M_sourceFrom && e.pcScan_Layer_param.msf_type) ? e.M_sourceFrom + e.pcScan_Layer_param.msf_type : "mxz"),
                    closePanelEventId: e.pcScan_Layer_param.closePanelEventId || "MDownLoadFloat_MaskClose",
                    closePanelEventParam: e.pcScan_Layer_param.closePanelEventParam || ((e.M_sourceFrom && e.pcScan_Layer_param.msf_type) ? e.M_sourceFrom + e.pcScan_Layer_param.msf_type : "mxz"),
                    cookieFlag: "pcScan_Layer",
                    appDownCloseIntervalTime: ap.pcScan_Layer.layerCloseCoolDownTime || 0,
                    appDownOpenIntervalTime: ap.pcScan_Layer.layerOpenCoolDownTime || 0,
                    layerMainPicSrc: e.pcScan_Layer_param.layerMainPicSrc || ap.pcScan_Layer.layerMainPicSrc,
                    layerOpenPicSrc: e.pcScan_Layer_param.layerOpenPicSrc || ap.pcScan_Layer.layerOpenPicSrc
                };
                M(aq)
            }
        }
    }

    function M(e) {
        e.openAppBtnId = "myLayoutPicBtnTongy";
        e.closePanelBtnId = "myLayoutCloseBtnTongy";
        e.closePanelId = "outermostIndexlayerLayoutTongyong";
        if (!U(e)) {
            setTimeout(function () {
                indexLayer({mainPicSrc: e.layerMainPicSrc, btnPicSrc: e.layerOpenPicSrc,});
                var aq = ac(e);
                L(aq);
                x(aq);
                Z(aq, true)
            }, 10)
        }
    }

    function X(e) {
        var aq = ac(e);
        x(aq);
        var ar = {ajaxPrame: [Q, v], funcList: [L, Z, y], funcPrame: aq};
        F(ar)
    }

    ai.downloadAppPlugIn = X;
    ai.downloadAppPlugInOpenApp = function (e) {
        var aq = ac(e, true);
        if (!C) {
            var ar = document.createElement("iframe");
            ar.id = A;
            document.body.appendChild(ar);
            document.getElementById(A).style.display = "none";
            document.getElementById(A).style.width = "0px";
            document.getElementById(A).style.height = "0px";
            C = true
        }
        var at = {ajaxPrame: [Q, v], funcList: i, funcPrame: aq};
        F(at, true)
    };
    ai.downloadAppShowLayer = function (e) {
        K.outermostIndexlayerLayoutTongyong = e
    }
})();