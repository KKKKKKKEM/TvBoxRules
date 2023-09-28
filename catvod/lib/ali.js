!function(t, n) {
    const e = _0x8314, o = t();
    while (1) {
        try {
            const t = -parseInt(e(501)) / 1 * (-parseInt(e(502)) / 2) + parseInt(e(512)) / 3 + -parseInt(e(491)) / 4 * (parseInt(e(490)) / 5) + parseInt(e(493)) / 6 * (-parseInt(e(482)) / 7) + -parseInt(e(508)) / 8 * (-parseInt(e(499)) / 9) + -parseInt(e(492)) / 10 * (parseInt(e(484)) / 11) + -parseInt(e(488)) / 12;
            if (t === n) {
                break;
            }
            o.push(o.shift());
        } catch (t) {
            o.push(o.shift());
        }
    }
}(_0x3662, 806681);

const _0x5403fe = function() {
    let t = !0;
    return function(n, e) {
        const o = t ? function() {
            const t = _0x8314;
            if (e) {
                const o = e[t(494)](n, arguments);
                return e = null, o;
            }
        } : function() {};
        return t = !1, o;
    };
}(), _0x1a5007 = _0x5403fe(this, function() {
    const t = _0x8314;
    let n;
    try {
        const e = Function(t(483) + t(496) + ");");
        n = e();
    } catch (t) {
        n = window;
    }
    const e = n[t(486)] = n.console || {}, o = [ t(498), t(497), t(510), "error", t(503), "table", "trace" ];
    for (let n = 0; n < o[t(506)]; n++) {
        const r = _0x5403fe.constructor[t(505)].bind(_0x5403fe), i = o[n], a = e[i] || r;
        r.__proto__ = _0x5403fe.bind(_0x5403fe), r.toString = a[t(495)][t(504)](a), e[i] = r;
    }
});

_0x1a5007();

import { _ } from "./cat.js";

import { initSome, setToken, setShareId, getVod, playerContent, playerContentByFlag } from "./ali_api.js";

async function initAli(t) {
    await initSome(), await setToken(t);
}

function _0x3662() {
    const t = [ "match", "info", "debug", "4684176HcWJTq", "1211idbeaQ", "return (function() ", "99lEeIGW", "-----playContent-------", "console", "split", "19834608jNlQAs", "isEmpty", "100qLvEjd", "123404oxGYjD", "132210InTKLS", "1722UonmUS", "apply", "toString", '{}.constructor("return this")( )', "warn", "log", "261ILDdxF", "stringify", "3049bfdvKa", "206pnNeHh", "exception", "bind", "prototype", "length", "trim", "377872dYbZkZ" ];
    _0x3662 = function() {
        return t;
    };
    return _0x3662();
}

async function detailContent(t) {
    const n = _0x8314, e = /www.aliyundrive.com\/s\/([^\/]+)(\/folder\/([^\/]+))?/;
    let o = t[n(507)](), r = o[n(509)](e);
    if (_[n(489)](r)) {
        return "";
    }
    let i = r[1], a = 3 == r.length ? r[3] : "";
    await setShareId(i);
    let s = await getVod(o, a), c = JSON[n(500)]({
        list: [ s ]
    });
    return console[n(511)](c), c;
}

function _0x8314(t, n) {
    const e = _0x3662();
    return _0x8314 = function(t, n) {
        t -= 482;
        let o = e[t];
        return o;
    }, _0x8314(t, n);
}

async function playContent(t, n, e) {
    const o = _0x8314;
    let r = n[o(487)]("+"), i = "原画" == t ? await playerContent(r) : await playerContentByFlag(r, t);
    return console[o(511)](o(485)), console[o(511)](i), i;
}

export { initAli, detailContent, playContent };