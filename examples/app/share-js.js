function(a) {
    var b, c, d, e, f, g, h, i, j, k;
    if (h = NTES.localParam().search,
        navigator.userAgent.match(/yixin/i) && NTES.isIos &&
        (window.location.href = h.docid ? "newsapp://doc/" + h.docid : "newsapp://video/" + h.videoid),
        h.videoid || h.docid || (h.docid = window.location.href.match(/([A-Z0-9]{16})\.html/)[1]),
        k = "http://m.163.com/newsapp/applinks.html",
        j = k + "?docid=" + h.docid,
        c = "b" === window.type ? "&s=wechat" : "&s=sps",
        h.videoid && (j = k + "?vid=" + h.videoid),
        j += c, h.videoid && NTES.isAndroid && (j = k + "?startup=1&s=sps"),
        i = navigator.userAgent, setTimeout(function() {
            return i.match(/IOS/gi)
            && i.match(/safari/gi) &&
            i.match(/safari/gi) &&
            !i.match(/baidu/gi) &&
            !i.match(/yixin/gi) &&
            1 !== +h.no &&
            (document.getElementById("iframe").src = j),
            1 === +h.o ? document.getElementById("iframe").src = j : void 0
        }, 1e3),
        b = h.docid || "",
        g = "",
        e = i.match(/yixin/gi),
        d = i.match(/qq/gi) && !i.match(/qqbrowser/gi),
        NTES.isNewsapp ?
        g = "NewsApp" : NTES.isWeixin ?
        g = "wx" : NTES.isWeibo ?
        g = "wb" : e ?
        g = "yx" : d && (g = "qq"),
        navigator.userAgent.match(/iPhone OS 9/i)
        && document.querySelector(".m-share").classList.add("ios9"),
        NTES.isAndroid && h.docid &&
        (f = NTES.getCookieValue("_ntes_nuid"),
            f && (f = f.slice(-1, f.length), +f % 2 === 0 ? (window.type = "a", k = "http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.newsreader.activity&ckey=CK1331205846719&android_schema=newsapp://", j = k + ("doc/" + h.docid + "?s=wxz"), h.videoid && (j = k + ("video/" + h.videoid + "?s=wxz")), a(".m-body-wrap").on("click", ".open-newsapp", function(a) {
            a.target.classList.contains("open-tie") ? window.location.href = k + ("comment/" + window.board + "/" + h.docid + "/" + encodeURIComponent(document.title) + "?s=wxz") : a.target.classList.contains("open-more") ? window.location.href = k + "startup?s=wxz" : window.location.href = j
        })) : window.type = "b", a(".m-body-wrap").on("click", "[data-stat]", function(a) {
            "function" == typeof neteaseTracker && neteaseTracker(!1, "http://sps.163.com/func/?func=clickStat&spst=0&docid=" + h.docid + "&spsf=" + g + "&type=" + window.type + "&target=" + this.dataset.stat, "", "sps")
        }))), "a" !== window.type) {
        if ("b" === window.type ? (a(".m-body-wrap").on("click", ".open-newsapp", function(a) {
                a.target.classList.contains("open-tie") ? window.location.href = "http://m.163.com/newsapp/applinks.html?docid=" + h.docid + "&boardid=" + window.board + "&title=" + encodeURIComponent(document.title) + "&s=wechat" : a.target.classList.contains("open-more") ? window.location.href = "http://m.163.com/newsapp/applinks.html?s=wechat" : window.location.href = "http://m.163.com/newsapp/applinks.html?docid=" + h.docid + "&s=wechat"
            }), a(".m-body-wrap").on("click", ".more-newsapp", function(a) {
                window.location.href = "http://m.163.com/newsapp/applinks.html?s=wechat"
            })) : (a(".m-body-wrap").on("click", ".open-newsapp", function(a) {
                a.target.classList.contains("open-tie") ? window.location.href = j + ("&boardid=" + window.board + "&title=" + encodeURIComponent(document.title)) : a.target.classList.contains("open-more") ? window.location.href = "" + k + "?s=sps" : window.location.href = j
            }), a(".m-body-wrap").on("click", ".more-newsapp", function(a) {
                window.location.href = "" + k + "?s=sps"
            })), !b) return;
        a(".m-body-wrap").on("click", "[data-stat]", function(a) {
            "function" == typeof neteaseTracker && neteaseTracker(!1, "http://sps.163.com/func/?func=clickStat&spst=0&docid=" + b + "&spsf=" + g + "&target=" + this.dataset.stat, "", "sps")
        })
    }
}($);