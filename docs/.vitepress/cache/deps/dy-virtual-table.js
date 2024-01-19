import {
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-VQ6C7ZYK.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-CEQRFMJQ.js";

// node_modules/dy-virtual-table/dist/dy-virtual-table.umd.js
var require_dy_virtual_table_umd = __commonJS({
  "node_modules/dy-virtual-table/dist/dy-virtual-table.umd.js"(exports, module) {
    (function(h, it) {
      typeof exports == "object" && typeof module < "u" ? module.exports = it((init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports))) : typeof define == "function" && define.amd ? define(["vue"], it) : (h = typeof globalThis < "u" ? globalThis : h || self, h.DyVirtualTable = it(h.Vue));
    })(exports, function(h) {
      "use strict";
      const it = { data: { type: Array, default: () => [] }, width: [String, Number], height: [String, Number], maxHeight: [String, Number], fit: { type: Boolean, default: true }, stripe: Boolean, border: Boolean, rowKey: [String, Function], showHeader: { type: Boolean, default: true }, showSummary: Boolean, sumText: String, summaryMethod: Function, rowClassName: [String, Function], rowStyle: [Object, Function], cellClassName: [String, Function], cellStyle: [Object, Function], headerRowClassName: [String, Function], headerRowStyle: [Object, Function], headerCellClassName: [String, Function], headerCellStyle: [Object, Function], highlightCurrentRow: Boolean, currentRowKey: [String, Number], emptyText: String, expandRowKeys: Array, defaultExpandAll: Boolean, defaultSort: Object, tooltipEffect: String, tooltipOptions: Object, spanMethod: Function, selectOnIndeterminate: { type: Boolean, default: true }, indent: { type: Number, default: 16 }, treeProps: { type: Object, default: () => ({ hasChildren: "hasChildren", children: "children" }) }, lazy: Boolean, load: Function, style: { type: Object, default: () => ({}) }, className: { type: String, default: "" }, tableLayout: { type: String, default: "fixed" }, scrollbarAlwaysOn: { type: Boolean, default: false }, flexible: Boolean, showOverflowTooltip: [Boolean, Object] }, Cf = { class: "cell" }, Wf = h.defineComponent({ name: "dyTableColumn" }), Rf = h.defineComponent({ ...Wf, props: { data: { type: [Object, String], default() {
        return {};
      } }, column: { type: Object || Function, default() {
        return {};
      } }, keyProp: { type: String, default: "" }, height: { type: String, default: "30px" }, minHeight: { type: String, default: "" }, width: { type: String, default: "" }, minWidth: { type: String, default: "" }, index: { type: Number, default: 0 } }, setup(w) {
        h.onMounted(() => {
        });
        const V = w;
        let f = V.data[V.keyProp];
        return (C, O) => (h.openBlock(), h.createElementBlock("div", Cf, h.toDisplayString(w.keyProp ? h.unref(f) : w.data), 1));
      } }), Ip = "", ut = (w, V) => {
        const f = w.__vccOpts || w;
        for (const [C, O] of V)
          f[C] = O;
        return f;
      }, qi = ut(Rf, [["__scopeId", "data-v-53b914f8"]]), Tr = (w) => (w === "" || w !== void 0 && (w = Number.parseInt(w, 10), Number.isNaN(w) && (w = "")), w), Yi = (w) => (w === "" || w !== void 0 && (w = Tr(w), Number.isNaN(w) && (w = 80)), w), Bf = (w) => (w === "" || w !== void 0 && (w = Number.parseInt(w, 10), Number.isNaN(w) && (w = "")), w), If = (w, V, f) => {
        let C = {}, O = V, de = 0;
        for (let M = 0; M < w; M++)
          f[M].width ? O = O - f[M].width : de++;
        let $ = Math.floor(O / de);
        for (let M = 0; M < w; M++)
          f[M].width ? C[M] = f[M].width : C[M] = $;
        return C;
      }, Of = (w, V, f, C, O, de = 20) => {
        let $ = {};
        for (let M = 0; M < f.length; M++) {
          let m = de;
          for (let k = 0; k < V; k++)
            if (C[k]) {
              let ie = Nf(w, f[M][C[k].prop], O[k], de);
              ie.needsWrap && (m = ie.totalHeight);
            }
          $[M] = m;
        }
        return $;
      }, Nf = (w, V, f, C) => {
        let O = V ? V.split("") : [], de = "", $ = 1, M = C;
        for (let m = 0; m < O.length; m++) {
          let k = de + O[m] + " ";
          w.measureText(k).width > f && m > 0 ? (de = O[m] + " ", M += C, $++) : de = k;
        }
        return { needsWrap: $ > 1, totalHeight: M };
      }, Zi = (w, V, f, C, O, de) => {
        for (var $ = V.split(""), M = "", m = 0; m < $.length; m++) {
          var k = M + $[m] + "", ie = w.measureText(k), X = ie.width;
          X > O && m > 0 ? (w.fillText(M, f, C), M = $[m] + "", C += de) : M = k;
        }
        w.fillText(M, f, C);
      };
      var lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ct = { exports: {} };
      Ct.exports, function(w, V) {
        (function() {
          var f, C = "4.17.21", O = 200, de = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", $ = "Expected a function", M = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", k = 500, ie = "__lodash_placeholder__", X = 1, Ge = 2, N = 4, L = 1, ee = 2, ue = 1, xe = 2, tn = 4, S = 8, j = 16, K = 32, ae = 64, ne = 128, pe = 256, be = 512, A = 30, W = "...", E = 800, F = 16, te = 1, ye = 2, se = 3, ve = 1 / 0, Le = 9007199254740991, ft = 17976931348623157e292, gn = 0 / 0, Ce = 4294967295, Wt = Ce - 1, Rt = Ce >>> 1, Ar = [["ary", ne], ["bind", ue], ["bindKey", xe], ["curry", S], ["curryRight", j], ["flip", be], ["partial", K], ["partialRight", ae], ["rearg", pe]], x = "[object Arguments]", D = "[object Array]", P = "[object AsyncFunction]", Y = "[object Boolean]", Oe = "[object Date]", Sr = "[object DOMException]", Bt = "[object Error]", It = "[object Function]", Ji = "[object GeneratorFunction]", rn = "[object Map]", at = "[object Number]", Zf = "[object Null]", pn = "[object Object]", Qi = "[object Promise]", Xf = "[object Proxy]", ot = "[object RegExp]", un = "[object Set]", st = "[object String]", Ot = "[object Symbol]", Jf = "[object Undefined]", ct = "[object WeakMap]", Qf = "[object WeakSet]", ht = "[object ArrayBuffer]", zn = "[object DataView]", br = "[object Float32Array]", Lr = "[object Float64Array]", Er = "[object Int8Array]", Cr = "[object Int16Array]", Wr = "[object Int32Array]", Rr = "[object Uint8Array]", Br = "[object Uint8ClampedArray]", Ir = "[object Uint16Array]", Or = "[object Uint32Array]", Vf = /\b__p \+= '';/g, jf = /\b(__p \+=) '' \+/g, ea = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Vi = /&(?:amp|lt|gt|quot|#39);/g, ji = /[&<>"']/g, na = RegExp(Vi.source), ta = RegExp(ji.source), ra = /<%-([\s\S]+?)%>/g, ia = /<%([\s\S]+?)%>/g, eu = /<%=([\s\S]+?)%>/g, ua = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, la = /^\w*$/, fa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nr = /[\\^$.*+?()[\]{}|]/g, aa = RegExp(Nr.source), Fr = /^\s+/, oa = /\s/, sa = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ca = /\{\n\/\* \[wrapped with (.+)\] \*/, ha = /,? & /, da = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ga = /[()=,{}\[\]\/\s]/, pa = /\\(\\)?/g, _a = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, nu = /\w*$/, va = /^[-+]0x[0-9a-f]+$/i, wa = /^0b[01]+$/i, xa = /^\[object .+?Constructor\]$/, ya = /^0o[0-7]+$/i, ma = /^(?:0|[1-9]\d*)$/, Ta = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Nt = /($^)/, Aa = /['\n\r\u2028\u2029\\]/g, Ft = "\\ud800-\\udfff", Sa = "\\u0300-\\u036f", ba = "\\ufe20-\\ufe2f", La = "\\u20d0-\\u20ff", tu = Sa + ba + La, ru = "\\u2700-\\u27bf", iu = "a-z\\xdf-\\xf6\\xf8-\\xff", Ea = "\\xac\\xb1\\xd7\\xf7", Ca = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Wa = "\\u2000-\\u206f", Ra = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", uu = "A-Z\\xc0-\\xd6\\xd8-\\xde", lu = "\\ufe0e\\ufe0f", fu = Ea + Ca + Wa + Ra, Mr = "['’]", Ba = "[" + Ft + "]", au = "[" + fu + "]", Mt = "[" + tu + "]", ou = "\\d+", Ia = "[" + ru + "]", su = "[" + iu + "]", cu = "[^" + Ft + fu + ou + ru + iu + uu + "]", Dr = "\\ud83c[\\udffb-\\udfff]", Oa = "(?:" + Mt + "|" + Dr + ")", hu = "[^" + Ft + "]", Pr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Hr = "[\\ud800-\\udbff][\\udc00-\\udfff]", kn = "[" + uu + "]", du = "\\u200d", gu = "(?:" + su + "|" + cu + ")", Na = "(?:" + kn + "|" + cu + ")", pu = "(?:" + Mr + "(?:d|ll|m|re|s|t|ve))?", _u = "(?:" + Mr + "(?:D|LL|M|RE|S|T|VE))?", vu = Oa + "?", wu = "[" + lu + "]?", Fa = "(?:" + du + "(?:" + [hu, Pr, Hr].join("|") + ")" + wu + vu + ")*", Ma = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Da = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", xu = wu + vu + Fa, Pa = "(?:" + [Ia, Pr, Hr].join("|") + ")" + xu, Ha = "(?:" + [hu + Mt + "?", Mt, Pr, Hr, Ba].join("|") + ")", Ua = RegExp(Mr, "g"), Ga = RegExp(Mt, "g"), Ur = RegExp(Dr + "(?=" + Dr + ")|" + Ha + xu, "g"), $a = RegExp([kn + "?" + su + "+" + pu + "(?=" + [au, kn, "$"].join("|") + ")", Na + "+" + _u + "(?=" + [au, kn + gu, "$"].join("|") + ")", kn + "?" + gu + "+" + pu, kn + "+" + _u, Da, Ma, ou, Pa].join("|"), "g"), za = RegExp("[" + du + Ft + tu + lu + "]"), ka = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ka = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], qa = -1, he = {};
          he[br] = he[Lr] = he[Er] = he[Cr] = he[Wr] = he[Rr] = he[Br] = he[Ir] = he[Or] = true, he[x] = he[D] = he[ht] = he[Y] = he[zn] = he[Oe] = he[Bt] = he[It] = he[rn] = he[at] = he[pn] = he[ot] = he[un] = he[st] = he[ct] = false;
          var ce = {};
          ce[x] = ce[D] = ce[ht] = ce[zn] = ce[Y] = ce[Oe] = ce[br] = ce[Lr] = ce[Er] = ce[Cr] = ce[Wr] = ce[rn] = ce[at] = ce[pn] = ce[ot] = ce[un] = ce[st] = ce[Ot] = ce[Rr] = ce[Br] = ce[Ir] = ce[Or] = true, ce[Bt] = ce[It] = ce[ct] = false;
          var Ya = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, Za = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Xa = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Ja = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Qa = parseFloat, Va = parseInt, yu = typeof lt == "object" && lt && lt.Object === Object && lt, ja = typeof self == "object" && self && self.Object === Object && self, We = yu || ja || Function("return this")(), Gr = V && !V.nodeType && V, Nn = Gr && true && w && !w.nodeType && w, mu = Nn && Nn.exports === Gr, $r = mu && yu.process, Ze = function() {
            try {
              var s = Nn && Nn.require && Nn.require("util").types;
              return s || $r && $r.binding && $r.binding("util");
            } catch {
            }
          }(), Tu = Ze && Ze.isArrayBuffer, Au = Ze && Ze.isDate, Su = Ze && Ze.isMap, bu = Ze && Ze.isRegExp, Lu = Ze && Ze.isSet, Eu = Ze && Ze.isTypedArray;
          function $e(s, g, d) {
            switch (d.length) {
              case 0:
                return s.call(g);
              case 1:
                return s.call(g, d[0]);
              case 2:
                return s.call(g, d[0], d[1]);
              case 3:
                return s.call(g, d[0], d[1], d[2]);
            }
            return s.apply(g, d);
          }
          function eo(s, g, d, T) {
            for (var H = -1, re = s == null ? 0 : s.length; ++H < re; ) {
              var Ae = s[H];
              g(T, Ae, d(Ae), s);
            }
            return T;
          }
          function Xe(s, g) {
            for (var d = -1, T = s == null ? 0 : s.length; ++d < T && g(s[d], d, s) !== false; )
              ;
            return s;
          }
          function no(s, g) {
            for (var d = s == null ? 0 : s.length; d-- && g(s[d], d, s) !== false; )
              ;
            return s;
          }
          function Cu(s, g) {
            for (var d = -1, T = s == null ? 0 : s.length; ++d < T; )
              if (!g(s[d], d, s))
                return false;
            return true;
          }
          function bn(s, g) {
            for (var d = -1, T = s == null ? 0 : s.length, H = 0, re = []; ++d < T; ) {
              var Ae = s[d];
              g(Ae, d, s) && (re[H++] = Ae);
            }
            return re;
          }
          function Dt(s, g) {
            var d = s == null ? 0 : s.length;
            return !!d && Kn(s, g, 0) > -1;
          }
          function zr(s, g, d) {
            for (var T = -1, H = s == null ? 0 : s.length; ++T < H; )
              if (d(g, s[T]))
                return true;
            return false;
          }
          function ge(s, g) {
            for (var d = -1, T = s == null ? 0 : s.length, H = Array(T); ++d < T; )
              H[d] = g(s[d], d, s);
            return H;
          }
          function Ln(s, g) {
            for (var d = -1, T = g.length, H = s.length; ++d < T; )
              s[H + d] = g[d];
            return s;
          }
          function kr(s, g, d, T) {
            var H = -1, re = s == null ? 0 : s.length;
            for (T && re && (d = s[++H]); ++H < re; )
              d = g(d, s[H], H, s);
            return d;
          }
          function to(s, g, d, T) {
            var H = s == null ? 0 : s.length;
            for (T && H && (d = s[--H]); H--; )
              d = g(d, s[H], H, s);
            return d;
          }
          function Kr(s, g) {
            for (var d = -1, T = s == null ? 0 : s.length; ++d < T; )
              if (g(s[d], d, s))
                return true;
            return false;
          }
          var ro = qr("length");
          function io(s) {
            return s.split("");
          }
          function uo(s) {
            return s.match(da) || [];
          }
          function Wu(s, g, d) {
            var T;
            return d(s, function(H, re, Ae) {
              if (g(H, re, Ae))
                return T = re, false;
            }), T;
          }
          function Pt(s, g, d, T) {
            for (var H = s.length, re = d + (T ? 1 : -1); T ? re-- : ++re < H; )
              if (g(s[re], re, s))
                return re;
            return -1;
          }
          function Kn(s, g, d) {
            return g === g ? wo(s, g, d) : Pt(s, Ru, d);
          }
          function lo(s, g, d, T) {
            for (var H = d - 1, re = s.length; ++H < re; )
              if (T(s[H], g))
                return H;
            return -1;
          }
          function Ru(s) {
            return s !== s;
          }
          function Bu(s, g) {
            var d = s == null ? 0 : s.length;
            return d ? Zr(s, g) / d : gn;
          }
          function qr(s) {
            return function(g) {
              return g == null ? f : g[s];
            };
          }
          function Yr(s) {
            return function(g) {
              return s == null ? f : s[g];
            };
          }
          function Iu(s, g, d, T, H) {
            return H(s, function(re, Ae, oe) {
              d = T ? (T = false, re) : g(d, re, Ae, oe);
            }), d;
          }
          function fo(s, g) {
            var d = s.length;
            for (s.sort(g); d--; )
              s[d] = s[d].value;
            return s;
          }
          function Zr(s, g) {
            for (var d, T = -1, H = s.length; ++T < H; ) {
              var re = g(s[T]);
              re !== f && (d = d === f ? re : d + re);
            }
            return d;
          }
          function Xr(s, g) {
            for (var d = -1, T = Array(s); ++d < s; )
              T[d] = g(d);
            return T;
          }
          function ao(s, g) {
            return ge(g, function(d) {
              return [d, s[d]];
            });
          }
          function Ou(s) {
            return s && s.slice(0, Du(s) + 1).replace(Fr, "");
          }
          function ze(s) {
            return function(g) {
              return s(g);
            };
          }
          function Jr(s, g) {
            return ge(g, function(d) {
              return s[d];
            });
          }
          function dt(s, g) {
            return s.has(g);
          }
          function Nu(s, g) {
            for (var d = -1, T = s.length; ++d < T && Kn(g, s[d], 0) > -1; )
              ;
            return d;
          }
          function Fu(s, g) {
            for (var d = s.length; d-- && Kn(g, s[d], 0) > -1; )
              ;
            return d;
          }
          function oo(s, g) {
            for (var d = s.length, T = 0; d--; )
              s[d] === g && ++T;
            return T;
          }
          var so = Yr(Ya), co = Yr(Za);
          function ho(s) {
            return "\\" + Ja[s];
          }
          function go(s, g) {
            return s == null ? f : s[g];
          }
          function qn(s) {
            return za.test(s);
          }
          function po(s) {
            return ka.test(s);
          }
          function _o(s) {
            for (var g, d = []; !(g = s.next()).done; )
              d.push(g.value);
            return d;
          }
          function Qr(s) {
            var g = -1, d = Array(s.size);
            return s.forEach(function(T, H) {
              d[++g] = [H, T];
            }), d;
          }
          function Mu(s, g) {
            return function(d) {
              return s(g(d));
            };
          }
          function En(s, g) {
            for (var d = -1, T = s.length, H = 0, re = []; ++d < T; ) {
              var Ae = s[d];
              (Ae === g || Ae === ie) && (s[d] = ie, re[H++] = d);
            }
            return re;
          }
          function Ht(s) {
            var g = -1, d = Array(s.size);
            return s.forEach(function(T) {
              d[++g] = T;
            }), d;
          }
          function vo(s) {
            var g = -1, d = Array(s.size);
            return s.forEach(function(T) {
              d[++g] = [T, T];
            }), d;
          }
          function wo(s, g, d) {
            for (var T = d - 1, H = s.length; ++T < H; )
              if (s[T] === g)
                return T;
            return -1;
          }
          function xo(s, g, d) {
            for (var T = d + 1; T--; )
              if (s[T] === g)
                return T;
            return T;
          }
          function Yn(s) {
            return qn(s) ? mo(s) : ro(s);
          }
          function ln(s) {
            return qn(s) ? To(s) : io(s);
          }
          function Du(s) {
            for (var g = s.length; g-- && oa.test(s.charAt(g)); )
              ;
            return g;
          }
          var yo = Yr(Xa);
          function mo(s) {
            for (var g = Ur.lastIndex = 0; Ur.test(s); )
              ++g;
            return g;
          }
          function To(s) {
            return s.match(Ur) || [];
          }
          function Ao(s) {
            return s.match($a) || [];
          }
          var So = function s(g) {
            g = g == null ? We : Zn.defaults(We.Object(), g, Zn.pick(We, Ka));
            var d = g.Array, T = g.Date, H = g.Error, re = g.Function, Ae = g.Math, oe = g.Object, Vr = g.RegExp, bo = g.String, Je = g.TypeError, Ut = d.prototype, Lo = re.prototype, Xn = oe.prototype, Gt = g["__core-js_shared__"], $t = Lo.toString, fe = Xn.hasOwnProperty, Eo = 0, Pu = function() {
              var e = /[^.]+$/.exec(Gt && Gt.keys && Gt.keys.IE_PROTO || "");
              return e ? "Symbol(src)_1." + e : "";
            }(), zt = Xn.toString, Co = $t.call(oe), Wo = We._, Ro = Vr("^" + $t.call(fe).replace(Nr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), kt = mu ? g.Buffer : f, Cn = g.Symbol, Kt = g.Uint8Array, Hu = kt ? kt.allocUnsafe : f, qt = Mu(oe.getPrototypeOf, oe), Uu = oe.create, Gu = Xn.propertyIsEnumerable, Yt = Ut.splice, $u = Cn ? Cn.isConcatSpreadable : f, gt = Cn ? Cn.iterator : f, Fn = Cn ? Cn.toStringTag : f, Zt = function() {
              try {
                var e = Un(oe, "defineProperty");
                return e({}, "", {}), e;
              } catch {
              }
            }(), Bo = g.clearTimeout !== We.clearTimeout && g.clearTimeout, Io = T && T.now !== We.Date.now && T.now, Oo = g.setTimeout !== We.setTimeout && g.setTimeout, Xt = Ae.ceil, Jt = Ae.floor, jr = oe.getOwnPropertySymbols, No = kt ? kt.isBuffer : f, zu = g.isFinite, Fo = Ut.join, Mo = Mu(oe.keys, oe), Se = Ae.max, Be = Ae.min, Do = T.now, Po = g.parseInt, ku = Ae.random, Ho = Ut.reverse, ei = Un(g, "DataView"), pt = Un(g, "Map"), ni = Un(g, "Promise"), Jn = Un(g, "Set"), _t = Un(g, "WeakMap"), vt = Un(oe, "create"), Qt = _t && new _t(), Qn = {}, Uo = Gn(ei), Go = Gn(pt), $o = Gn(ni), zo = Gn(Jn), ko = Gn(_t), Vt = Cn ? Cn.prototype : f, wt = Vt ? Vt.valueOf : f, Ku = Vt ? Vt.toString : f;
            function u(e) {
              if (we(e) && !U(e) && !(e instanceof J)) {
                if (e instanceof Qe)
                  return e;
                if (fe.call(e, "__wrapped__"))
                  return ql(e);
              }
              return new Qe(e);
            }
            var Vn = /* @__PURE__ */ function() {
              function e() {
              }
              return function(n) {
                if (!_e(n))
                  return {};
                if (Uu)
                  return Uu(n);
                e.prototype = n;
                var t = new e();
                return e.prototype = f, t;
              };
            }();
            function jt() {
            }
            function Qe(e, n) {
              this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = f;
            }
            u.templateSettings = { escape: ra, evaluate: ia, interpolate: eu, variable: "", imports: { _: u } }, u.prototype = jt.prototype, u.prototype.constructor = u, Qe.prototype = Vn(jt.prototype), Qe.prototype.constructor = Qe;
            function J(e) {
              this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Ce, this.__views__ = [];
            }
            function Ko() {
              var e = new J(this.__wrapped__);
              return e.__actions__ = De(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = De(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = De(this.__views__), e;
            }
            function qo() {
              if (this.__filtered__) {
                var e = new J(this);
                e.__dir__ = -1, e.__filtered__ = true;
              } else
                e = this.clone(), e.__dir__ *= -1;
              return e;
            }
            function Yo() {
              var e = this.__wrapped__.value(), n = this.__dir__, t = U(e), r = n < 0, i = t ? e.length : 0, l = uc(0, i, this.__views__), a = l.start, o = l.end, c = o - a, p = r ? o : a - 1, _ = this.__iteratees__, v = _.length, y = 0, b = Be(c, this.__takeCount__);
              if (!t || !r && i == c && b == c)
                return pl(e, this.__actions__);
              var B = [];
              e:
                for (; c-- && y < b; ) {
                  p += n;
                  for (var z = -1, I = e[p]; ++z < v; ) {
                    var Z = _[z], Q = Z.iteratee, qe = Z.type, Me = Q(I);
                    if (qe == ye)
                      I = Me;
                    else if (!Me) {
                      if (qe == te)
                        continue e;
                      break e;
                    }
                  }
                  B[y++] = I;
                }
              return B;
            }
            J.prototype = Vn(jt.prototype), J.prototype.constructor = J;
            function Mn(e) {
              var n = -1, t = e == null ? 0 : e.length;
              for (this.clear(); ++n < t; ) {
                var r = e[n];
                this.set(r[0], r[1]);
              }
            }
            function Zo() {
              this.__data__ = vt ? vt(null) : {}, this.size = 0;
            }
            function Xo(e) {
              var n = this.has(e) && delete this.__data__[e];
              return this.size -= n ? 1 : 0, n;
            }
            function Jo(e) {
              var n = this.__data__;
              if (vt) {
                var t = n[e];
                return t === m ? f : t;
              }
              return fe.call(n, e) ? n[e] : f;
            }
            function Qo(e) {
              var n = this.__data__;
              return vt ? n[e] !== f : fe.call(n, e);
            }
            function Vo(e, n) {
              var t = this.__data__;
              return this.size += this.has(e) ? 0 : 1, t[e] = vt && n === f ? m : n, this;
            }
            Mn.prototype.clear = Zo, Mn.prototype.delete = Xo, Mn.prototype.get = Jo, Mn.prototype.has = Qo, Mn.prototype.set = Vo;
            function _n(e) {
              var n = -1, t = e == null ? 0 : e.length;
              for (this.clear(); ++n < t; ) {
                var r = e[n];
                this.set(r[0], r[1]);
              }
            }
            function jo() {
              this.__data__ = [], this.size = 0;
            }
            function es(e) {
              var n = this.__data__, t = er(n, e);
              if (t < 0)
                return false;
              var r = n.length - 1;
              return t == r ? n.pop() : Yt.call(n, t, 1), --this.size, true;
            }
            function ns(e) {
              var n = this.__data__, t = er(n, e);
              return t < 0 ? f : n[t][1];
            }
            function ts(e) {
              return er(this.__data__, e) > -1;
            }
            function rs(e, n) {
              var t = this.__data__, r = er(t, e);
              return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
            }
            _n.prototype.clear = jo, _n.prototype.delete = es, _n.prototype.get = ns, _n.prototype.has = ts, _n.prototype.set = rs;
            function vn(e) {
              var n = -1, t = e == null ? 0 : e.length;
              for (this.clear(); ++n < t; ) {
                var r = e[n];
                this.set(r[0], r[1]);
              }
            }
            function is() {
              this.size = 0, this.__data__ = { hash: new Mn(), map: new (pt || _n)(), string: new Mn() };
            }
            function us(e) {
              var n = hr(this, e).delete(e);
              return this.size -= n ? 1 : 0, n;
            }
            function ls(e) {
              return hr(this, e).get(e);
            }
            function fs(e) {
              return hr(this, e).has(e);
            }
            function as(e, n) {
              var t = hr(this, e), r = t.size;
              return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
            }
            vn.prototype.clear = is, vn.prototype.delete = us, vn.prototype.get = ls, vn.prototype.has = fs, vn.prototype.set = as;
            function Dn(e) {
              var n = -1, t = e == null ? 0 : e.length;
              for (this.__data__ = new vn(); ++n < t; )
                this.add(e[n]);
            }
            function os(e) {
              return this.__data__.set(e, m), this;
            }
            function ss(e) {
              return this.__data__.has(e);
            }
            Dn.prototype.add = Dn.prototype.push = os, Dn.prototype.has = ss;
            function fn(e) {
              var n = this.__data__ = new _n(e);
              this.size = n.size;
            }
            function cs() {
              this.__data__ = new _n(), this.size = 0;
            }
            function hs(e) {
              var n = this.__data__, t = n.delete(e);
              return this.size = n.size, t;
            }
            function ds(e) {
              return this.__data__.get(e);
            }
            function gs(e) {
              return this.__data__.has(e);
            }
            function ps(e, n) {
              var t = this.__data__;
              if (t instanceof _n) {
                var r = t.__data__;
                if (!pt || r.length < O - 1)
                  return r.push([e, n]), this.size = ++t.size, this;
                t = this.__data__ = new vn(r);
              }
              return t.set(e, n), this.size = t.size, this;
            }
            fn.prototype.clear = cs, fn.prototype.delete = hs, fn.prototype.get = ds, fn.prototype.has = gs, fn.prototype.set = ps;
            function qu(e, n) {
              var t = U(e), r = !t && $n(e), i = !t && !r && On(e), l = !t && !r && !i && tt(e), a = t || r || i || l, o = a ? Xr(e.length, bo) : [], c = o.length;
              for (var p in e)
                (n || fe.call(e, p)) && !(a && (p == "length" || i && (p == "offset" || p == "parent") || l && (p == "buffer" || p == "byteLength" || p == "byteOffset") || mn(p, c))) && o.push(p);
              return o;
            }
            function Yu(e) {
              var n = e.length;
              return n ? e[hi(0, n - 1)] : f;
            }
            function _s(e, n) {
              return dr(De(e), Pn(n, 0, e.length));
            }
            function vs(e) {
              return dr(De(e));
            }
            function ti(e, n, t) {
              (t !== f && !an(e[n], t) || t === f && !(n in e)) && wn(e, n, t);
            }
            function xt(e, n, t) {
              var r = e[n];
              (!(fe.call(e, n) && an(r, t)) || t === f && !(n in e)) && wn(e, n, t);
            }
            function er(e, n) {
              for (var t = e.length; t--; )
                if (an(e[t][0], n))
                  return t;
              return -1;
            }
            function ws(e, n, t, r) {
              return Wn(e, function(i, l, a) {
                n(r, i, t(i), a);
              }), r;
            }
            function Zu(e, n) {
              return e && hn(n, Ee(n), e);
            }
            function xs(e, n) {
              return e && hn(n, He(n), e);
            }
            function wn(e, n, t) {
              n == "__proto__" && Zt ? Zt(e, n, { configurable: true, enumerable: true, value: t, writable: true }) : e[n] = t;
            }
            function ri(e, n) {
              for (var t = -1, r = n.length, i = d(r), l = e == null; ++t < r; )
                i[t] = l ? f : Di(e, n[t]);
              return i;
            }
            function Pn(e, n, t) {
              return e === e && (t !== f && (e = e <= t ? e : t), n !== f && (e = e >= n ? e : n)), e;
            }
            function Ve(e, n, t, r, i, l) {
              var a, o = n & X, c = n & Ge, p = n & N;
              if (t && (a = i ? t(e, r, i, l) : t(e)), a !== f)
                return a;
              if (!_e(e))
                return e;
              var _ = U(e);
              if (_) {
                if (a = fc(e), !o)
                  return De(e, a);
              } else {
                var v = Ie(e), y = v == It || v == Ji;
                if (On(e))
                  return wl(e, o);
                if (v == pn || v == x || y && !i) {
                  if (a = c || y ? {} : Dl(e), !o)
                    return c ? Js(e, xs(a, e)) : Xs(e, Zu(a, e));
                } else {
                  if (!ce[v])
                    return i ? e : {};
                  a = ac(e, v, o);
                }
              }
              l || (l = new fn());
              var b = l.get(e);
              if (b)
                return b;
              l.set(e, a), df(e) ? e.forEach(function(I) {
                a.add(Ve(I, n, t, I, e, l));
              }) : cf(e) && e.forEach(function(I, Z) {
                a.set(Z, Ve(I, n, t, Z, e, l));
              });
              var B = p ? c ? Ai : Ti : c ? He : Ee, z = _ ? f : B(e);
              return Xe(z || e, function(I, Z) {
                z && (Z = I, I = e[Z]), xt(a, Z, Ve(I, n, t, Z, e, l));
              }), a;
            }
            function ys(e) {
              var n = Ee(e);
              return function(t) {
                return Xu(t, e, n);
              };
            }
            function Xu(e, n, t) {
              var r = t.length;
              if (e == null)
                return !r;
              for (e = oe(e); r--; ) {
                var i = t[r], l = n[i], a = e[i];
                if (a === f && !(i in e) || !l(a))
                  return false;
              }
              return true;
            }
            function Ju(e, n, t) {
              if (typeof e != "function")
                throw new Je($);
              return Lt(function() {
                e.apply(f, t);
              }, n);
            }
            function yt(e, n, t, r) {
              var i = -1, l = Dt, a = true, o = e.length, c = [], p = n.length;
              if (!o)
                return c;
              t && (n = ge(n, ze(t))), r ? (l = zr, a = false) : n.length >= O && (l = dt, a = false, n = new Dn(n));
              e:
                for (; ++i < o; ) {
                  var _ = e[i], v = t == null ? _ : t(_);
                  if (_ = r || _ !== 0 ? _ : 0, a && v === v) {
                    for (var y = p; y--; )
                      if (n[y] === v)
                        continue e;
                    c.push(_);
                  } else
                    l(n, v, r) || c.push(_);
                }
              return c;
            }
            var Wn = Al(cn), Qu = Al(ui, true);
            function ms(e, n) {
              var t = true;
              return Wn(e, function(r, i, l) {
                return t = !!n(r, i, l), t;
              }), t;
            }
            function nr(e, n, t) {
              for (var r = -1, i = e.length; ++r < i; ) {
                var l = e[r], a = n(l);
                if (a != null && (o === f ? a === a && !Ke(a) : t(a, o)))
                  var o = a, c = l;
              }
              return c;
            }
            function Ts(e, n, t, r) {
              var i = e.length;
              for (t = G(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === f || r > i ? i : G(r), r < 0 && (r += i), r = t > r ? 0 : pf(r); t < r; )
                e[t++] = n;
              return e;
            }
            function Vu(e, n) {
              var t = [];
              return Wn(e, function(r, i, l) {
                n(r, i, l) && t.push(r);
              }), t;
            }
            function Re(e, n, t, r, i) {
              var l = -1, a = e.length;
              for (t || (t = sc), i || (i = []); ++l < a; ) {
                var o = e[l];
                n > 0 && t(o) ? n > 1 ? Re(o, n - 1, t, r, i) : Ln(i, o) : r || (i[i.length] = o);
              }
              return i;
            }
            var ii = Sl(), ju = Sl(true);
            function cn(e, n) {
              return e && ii(e, n, Ee);
            }
            function ui(e, n) {
              return e && ju(e, n, Ee);
            }
            function tr(e, n) {
              return bn(n, function(t) {
                return Tn(e[t]);
              });
            }
            function Hn(e, n) {
              n = Bn(n, e);
              for (var t = 0, r = n.length; e != null && t < r; )
                e = e[dn(n[t++])];
              return t && t == r ? e : f;
            }
            function el(e, n, t) {
              var r = n(e);
              return U(e) ? r : Ln(r, t(e));
            }
            function Ne(e) {
              return e == null ? e === f ? Jf : Zf : Fn && Fn in oe(e) ? ic(e) : vc(e);
            }
            function li(e, n) {
              return e > n;
            }
            function As(e, n) {
              return e != null && fe.call(e, n);
            }
            function Ss(e, n) {
              return e != null && n in oe(e);
            }
            function bs(e, n, t) {
              return e >= Be(n, t) && e < Se(n, t);
            }
            function fi(e, n, t) {
              for (var r = t ? zr : Dt, i = e[0].length, l = e.length, a = l, o = d(l), c = 1 / 0, p = []; a--; ) {
                var _ = e[a];
                a && n && (_ = ge(_, ze(n))), c = Be(_.length, c), o[a] = !t && (n || i >= 120 && _.length >= 120) ? new Dn(a && _) : f;
              }
              _ = e[0];
              var v = -1, y = o[0];
              e:
                for (; ++v < i && p.length < c; ) {
                  var b = _[v], B = n ? n(b) : b;
                  if (b = t || b !== 0 ? b : 0, !(y ? dt(y, B) : r(p, B, t))) {
                    for (a = l; --a; ) {
                      var z = o[a];
                      if (!(z ? dt(z, B) : r(e[a], B, t)))
                        continue e;
                    }
                    y && y.push(B), p.push(b);
                  }
                }
              return p;
            }
            function Ls(e, n, t, r) {
              return cn(e, function(i, l, a) {
                n(r, t(i), l, a);
              }), r;
            }
            function mt(e, n, t) {
              n = Bn(n, e), e = Gl(e, n);
              var r = e == null ? e : e[dn(en(n))];
              return r == null ? f : $e(r, e, t);
            }
            function nl(e) {
              return we(e) && Ne(e) == x;
            }
            function Es(e) {
              return we(e) && Ne(e) == ht;
            }
            function Cs(e) {
              return we(e) && Ne(e) == Oe;
            }
            function Tt(e, n, t, r, i) {
              return e === n ? true : e == null || n == null || !we(e) && !we(n) ? e !== e && n !== n : Ws(e, n, t, r, Tt, i);
            }
            function Ws(e, n, t, r, i, l) {
              var a = U(e), o = U(n), c = a ? D : Ie(e), p = o ? D : Ie(n);
              c = c == x ? pn : c, p = p == x ? pn : p;
              var _ = c == pn, v = p == pn, y = c == p;
              if (y && On(e)) {
                if (!On(n))
                  return false;
                a = true, _ = false;
              }
              if (y && !_)
                return l || (l = new fn()), a || tt(e) ? Nl(e, n, t, r, i, l) : tc(e, n, c, t, r, i, l);
              if (!(t & L)) {
                var b = _ && fe.call(e, "__wrapped__"), B = v && fe.call(n, "__wrapped__");
                if (b || B) {
                  var z = b ? e.value() : e, I = B ? n.value() : n;
                  return l || (l = new fn()), i(z, I, t, r, l);
                }
              }
              return y ? (l || (l = new fn()), rc(e, n, t, r, i, l)) : false;
            }
            function Rs(e) {
              return we(e) && Ie(e) == rn;
            }
            function ai(e, n, t, r) {
              var i = t.length, l = i, a = !r;
              if (e == null)
                return !l;
              for (e = oe(e); i--; ) {
                var o = t[i];
                if (a && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
                  return false;
              }
              for (; ++i < l; ) {
                o = t[i];
                var c = o[0], p = e[c], _ = o[1];
                if (a && o[2]) {
                  if (p === f && !(c in e))
                    return false;
                } else {
                  var v = new fn();
                  if (r)
                    var y = r(p, _, c, e, n, v);
                  if (!(y === f ? Tt(_, p, L | ee, r, v) : y))
                    return false;
                }
              }
              return true;
            }
            function tl(e) {
              if (!_e(e) || hc(e))
                return false;
              var n = Tn(e) ? Ro : xa;
              return n.test(Gn(e));
            }
            function Bs(e) {
              return we(e) && Ne(e) == ot;
            }
            function Is(e) {
              return we(e) && Ie(e) == un;
            }
            function Os(e) {
              return we(e) && xr(e.length) && !!he[Ne(e)];
            }
            function rl(e) {
              return typeof e == "function" ? e : e == null ? Ue : typeof e == "object" ? U(e) ? ll(e[0], e[1]) : ul(e) : Lf(e);
            }
            function oi(e) {
              if (!bt(e))
                return Mo(e);
              var n = [];
              for (var t in oe(e))
                fe.call(e, t) && t != "constructor" && n.push(t);
              return n;
            }
            function Ns(e) {
              if (!_e(e))
                return _c(e);
              var n = bt(e), t = [];
              for (var r in e)
                r == "constructor" && (n || !fe.call(e, r)) || t.push(r);
              return t;
            }
            function si(e, n) {
              return e < n;
            }
            function il(e, n) {
              var t = -1, r = Pe(e) ? d(e.length) : [];
              return Wn(e, function(i, l, a) {
                r[++t] = n(i, l, a);
              }), r;
            }
            function ul(e) {
              var n = bi(e);
              return n.length == 1 && n[0][2] ? Hl(n[0][0], n[0][1]) : function(t) {
                return t === e || ai(t, e, n);
              };
            }
            function ll(e, n) {
              return Ei(e) && Pl(n) ? Hl(dn(e), n) : function(t) {
                var r = Di(t, e);
                return r === f && r === n ? Pi(t, e) : Tt(n, r, L | ee);
              };
            }
            function rr(e, n, t, r, i) {
              e !== n && ii(n, function(l, a) {
                if (i || (i = new fn()), _e(l))
                  Fs(e, n, a, t, rr, r, i);
                else {
                  var o = r ? r(Wi(e, a), l, a + "", e, n, i) : f;
                  o === f && (o = l), ti(e, a, o);
                }
              }, He);
            }
            function Fs(e, n, t, r, i, l, a) {
              var o = Wi(e, t), c = Wi(n, t), p = a.get(c);
              if (p) {
                ti(e, t, p);
                return;
              }
              var _ = l ? l(o, c, t + "", e, n, a) : f, v = _ === f;
              if (v) {
                var y = U(c), b = !y && On(c), B = !y && !b && tt(c);
                _ = c, y || b || B ? U(o) ? _ = o : me(o) ? _ = De(o) : b ? (v = false, _ = wl(c, true)) : B ? (v = false, _ = xl(c, true)) : _ = [] : Et(c) || $n(c) ? (_ = o, $n(o) ? _ = _f(o) : (!_e(o) || Tn(o)) && (_ = Dl(c))) : v = false;
              }
              v && (a.set(c, _), i(_, c, r, l, a), a.delete(c)), ti(e, t, _);
            }
            function fl(e, n) {
              var t = e.length;
              if (t)
                return n += n < 0 ? t : 0, mn(n, t) ? e[n] : f;
            }
            function al(e, n, t) {
              n.length ? n = ge(n, function(l) {
                return U(l) ? function(a) {
                  return Hn(a, l.length === 1 ? l[0] : l);
                } : l;
              }) : n = [Ue];
              var r = -1;
              n = ge(n, ze(R()));
              var i = il(e, function(l, a, o) {
                var c = ge(n, function(p) {
                  return p(l);
                });
                return { criteria: c, index: ++r, value: l };
              });
              return fo(i, function(l, a) {
                return Zs(l, a, t);
              });
            }
            function Ms(e, n) {
              return ol(e, n, function(t, r) {
                return Pi(e, r);
              });
            }
            function ol(e, n, t) {
              for (var r = -1, i = n.length, l = {}; ++r < i; ) {
                var a = n[r], o = Hn(e, a);
                t(o, a) && At(l, Bn(a, e), o);
              }
              return l;
            }
            function Ds(e) {
              return function(n) {
                return Hn(n, e);
              };
            }
            function ci(e, n, t, r) {
              var i = r ? lo : Kn, l = -1, a = n.length, o = e;
              for (e === n && (n = De(n)), t && (o = ge(e, ze(t))); ++l < a; )
                for (var c = 0, p = n[l], _ = t ? t(p) : p; (c = i(o, _, c, r)) > -1; )
                  o !== e && Yt.call(o, c, 1), Yt.call(e, c, 1);
              return e;
            }
            function sl(e, n) {
              for (var t = e ? n.length : 0, r = t - 1; t--; ) {
                var i = n[t];
                if (t == r || i !== l) {
                  var l = i;
                  mn(i) ? Yt.call(e, i, 1) : pi(e, i);
                }
              }
              return e;
            }
            function hi(e, n) {
              return e + Jt(ku() * (n - e + 1));
            }
            function Ps(e, n, t, r) {
              for (var i = -1, l = Se(Xt((n - e) / (t || 1)), 0), a = d(l); l--; )
                a[r ? l : ++i] = e, e += t;
              return a;
            }
            function di(e, n) {
              var t = "";
              if (!e || n < 1 || n > Le)
                return t;
              do
                n % 2 && (t += e), n = Jt(n / 2), n && (e += e);
              while (n);
              return t;
            }
            function q(e, n) {
              return Ri(Ul(e, n, Ue), e + "");
            }
            function Hs(e) {
              return Yu(rt(e));
            }
            function Us(e, n) {
              var t = rt(e);
              return dr(t, Pn(n, 0, t.length));
            }
            function At(e, n, t, r) {
              if (!_e(e))
                return e;
              n = Bn(n, e);
              for (var i = -1, l = n.length, a = l - 1, o = e; o != null && ++i < l; ) {
                var c = dn(n[i]), p = t;
                if (c === "__proto__" || c === "constructor" || c === "prototype")
                  return e;
                if (i != a) {
                  var _ = o[c];
                  p = r ? r(_, c, o) : f, p === f && (p = _e(_) ? _ : mn(n[i + 1]) ? [] : {});
                }
                xt(o, c, p), o = o[c];
              }
              return e;
            }
            var cl = Qt ? function(e, n) {
              return Qt.set(e, n), e;
            } : Ue, Gs = Zt ? function(e, n) {
              return Zt(e, "toString", { configurable: true, enumerable: false, value: Ui(n), writable: true });
            } : Ue;
            function $s(e) {
              return dr(rt(e));
            }
            function je(e, n, t) {
              var r = -1, i = e.length;
              n < 0 && (n = -n > i ? 0 : i + n), t = t > i ? i : t, t < 0 && (t += i), i = n > t ? 0 : t - n >>> 0, n >>>= 0;
              for (var l = d(i); ++r < i; )
                l[r] = e[r + n];
              return l;
            }
            function zs(e, n) {
              var t;
              return Wn(e, function(r, i, l) {
                return t = n(r, i, l), !t;
              }), !!t;
            }
            function ir(e, n, t) {
              var r = 0, i = e == null ? r : e.length;
              if (typeof n == "number" && n === n && i <= Rt) {
                for (; r < i; ) {
                  var l = r + i >>> 1, a = e[l];
                  a !== null && !Ke(a) && (t ? a <= n : a < n) ? r = l + 1 : i = l;
                }
                return i;
              }
              return gi(e, n, Ue, t);
            }
            function gi(e, n, t, r) {
              var i = 0, l = e == null ? 0 : e.length;
              if (l === 0)
                return 0;
              n = t(n);
              for (var a = n !== n, o = n === null, c = Ke(n), p = n === f; i < l; ) {
                var _ = Jt((i + l) / 2), v = t(e[_]), y = v !== f, b = v === null, B = v === v, z = Ke(v);
                if (a)
                  var I = r || B;
                else
                  p ? I = B && (r || y) : o ? I = B && y && (r || !b) : c ? I = B && y && !b && (r || !z) : b || z ? I = false : I = r ? v <= n : v < n;
                I ? i = _ + 1 : l = _;
              }
              return Be(l, Wt);
            }
            function hl(e, n) {
              for (var t = -1, r = e.length, i = 0, l = []; ++t < r; ) {
                var a = e[t], o = n ? n(a) : a;
                if (!t || !an(o, c)) {
                  var c = o;
                  l[i++] = a === 0 ? 0 : a;
                }
              }
              return l;
            }
            function dl(e) {
              return typeof e == "number" ? e : Ke(e) ? gn : +e;
            }
            function ke(e) {
              if (typeof e == "string")
                return e;
              if (U(e))
                return ge(e, ke) + "";
              if (Ke(e))
                return Ku ? Ku.call(e) : "";
              var n = e + "";
              return n == "0" && 1 / e == -ve ? "-0" : n;
            }
            function Rn(e, n, t) {
              var r = -1, i = Dt, l = e.length, a = true, o = [], c = o;
              if (t)
                a = false, i = zr;
              else if (l >= O) {
                var p = n ? null : ec(e);
                if (p)
                  return Ht(p);
                a = false, i = dt, c = new Dn();
              } else
                c = n ? [] : o;
              e:
                for (; ++r < l; ) {
                  var _ = e[r], v = n ? n(_) : _;
                  if (_ = t || _ !== 0 ? _ : 0, a && v === v) {
                    for (var y = c.length; y--; )
                      if (c[y] === v)
                        continue e;
                    n && c.push(v), o.push(_);
                  } else
                    i(c, v, t) || (c !== o && c.push(v), o.push(_));
                }
              return o;
            }
            function pi(e, n) {
              return n = Bn(n, e), e = Gl(e, n), e == null || delete e[dn(en(n))];
            }
            function gl(e, n, t, r) {
              return At(e, n, t(Hn(e, n)), r);
            }
            function ur(e, n, t, r) {
              for (var i = e.length, l = r ? i : -1; (r ? l-- : ++l < i) && n(e[l], l, e); )
                ;
              return t ? je(e, r ? 0 : l, r ? l + 1 : i) : je(e, r ? l + 1 : 0, r ? i : l);
            }
            function pl(e, n) {
              var t = e;
              return t instanceof J && (t = t.value()), kr(n, function(r, i) {
                return i.func.apply(i.thisArg, Ln([r], i.args));
              }, t);
            }
            function _i(e, n, t) {
              var r = e.length;
              if (r < 2)
                return r ? Rn(e[0]) : [];
              for (var i = -1, l = d(r); ++i < r; )
                for (var a = e[i], o = -1; ++o < r; )
                  o != i && (l[i] = yt(l[i] || a, e[o], n, t));
              return Rn(Re(l, 1), n, t);
            }
            function _l(e, n, t) {
              for (var r = -1, i = e.length, l = n.length, a = {}; ++r < i; ) {
                var o = r < l ? n[r] : f;
                t(a, e[r], o);
              }
              return a;
            }
            function vi(e) {
              return me(e) ? e : [];
            }
            function wi(e) {
              return typeof e == "function" ? e : Ue;
            }
            function Bn(e, n) {
              return U(e) ? e : Ei(e, n) ? [e] : Kl(le(e));
            }
            var ks = q;
            function In(e, n, t) {
              var r = e.length;
              return t = t === f ? r : t, !n && t >= r ? e : je(e, n, t);
            }
            var vl = Bo || function(e) {
              return We.clearTimeout(e);
            };
            function wl(e, n) {
              if (n)
                return e.slice();
              var t = e.length, r = Hu ? Hu(t) : new e.constructor(t);
              return e.copy(r), r;
            }
            function xi(e) {
              var n = new e.constructor(e.byteLength);
              return new Kt(n).set(new Kt(e)), n;
            }
            function Ks(e, n) {
              var t = n ? xi(e.buffer) : e.buffer;
              return new e.constructor(t, e.byteOffset, e.byteLength);
            }
            function qs(e) {
              var n = new e.constructor(e.source, nu.exec(e));
              return n.lastIndex = e.lastIndex, n;
            }
            function Ys(e) {
              return wt ? oe(wt.call(e)) : {};
            }
            function xl(e, n) {
              var t = n ? xi(e.buffer) : e.buffer;
              return new e.constructor(t, e.byteOffset, e.length);
            }
            function yl(e, n) {
              if (e !== n) {
                var t = e !== f, r = e === null, i = e === e, l = Ke(e), a = n !== f, o = n === null, c = n === n, p = Ke(n);
                if (!o && !p && !l && e > n || l && a && c && !o && !p || r && a && c || !t && c || !i)
                  return 1;
                if (!r && !l && !p && e < n || p && t && i && !r && !l || o && t && i || !a && i || !c)
                  return -1;
              }
              return 0;
            }
            function Zs(e, n, t) {
              for (var r = -1, i = e.criteria, l = n.criteria, a = i.length, o = t.length; ++r < a; ) {
                var c = yl(i[r], l[r]);
                if (c) {
                  if (r >= o)
                    return c;
                  var p = t[r];
                  return c * (p == "desc" ? -1 : 1);
                }
              }
              return e.index - n.index;
            }
            function ml(e, n, t, r) {
              for (var i = -1, l = e.length, a = t.length, o = -1, c = n.length, p = Se(l - a, 0), _ = d(c + p), v = !r; ++o < c; )
                _[o] = n[o];
              for (; ++i < a; )
                (v || i < l) && (_[t[i]] = e[i]);
              for (; p--; )
                _[o++] = e[i++];
              return _;
            }
            function Tl(e, n, t, r) {
              for (var i = -1, l = e.length, a = -1, o = t.length, c = -1, p = n.length, _ = Se(l - o, 0), v = d(_ + p), y = !r; ++i < _; )
                v[i] = e[i];
              for (var b = i; ++c < p; )
                v[b + c] = n[c];
              for (; ++a < o; )
                (y || i < l) && (v[b + t[a]] = e[i++]);
              return v;
            }
            function De(e, n) {
              var t = -1, r = e.length;
              for (n || (n = d(r)); ++t < r; )
                n[t] = e[t];
              return n;
            }
            function hn(e, n, t, r) {
              var i = !t;
              t || (t = {});
              for (var l = -1, a = n.length; ++l < a; ) {
                var o = n[l], c = r ? r(t[o], e[o], o, t, e) : f;
                c === f && (c = e[o]), i ? wn(t, o, c) : xt(t, o, c);
              }
              return t;
            }
            function Xs(e, n) {
              return hn(e, Li(e), n);
            }
            function Js(e, n) {
              return hn(e, Fl(e), n);
            }
            function lr(e, n) {
              return function(t, r) {
                var i = U(t) ? eo : ws, l = n ? n() : {};
                return i(t, e, R(r, 2), l);
              };
            }
            function jn(e) {
              return q(function(n, t) {
                var r = -1, i = t.length, l = i > 1 ? t[i - 1] : f, a = i > 2 ? t[2] : f;
                for (l = e.length > 3 && typeof l == "function" ? (i--, l) : f, a && Fe(t[0], t[1], a) && (l = i < 3 ? f : l, i = 1), n = oe(n); ++r < i; ) {
                  var o = t[r];
                  o && e(n, o, r, l);
                }
                return n;
              });
            }
            function Al(e, n) {
              return function(t, r) {
                if (t == null)
                  return t;
                if (!Pe(t))
                  return e(t, r);
                for (var i = t.length, l = n ? i : -1, a = oe(t); (n ? l-- : ++l < i) && r(a[l], l, a) !== false; )
                  ;
                return t;
              };
            }
            function Sl(e) {
              return function(n, t, r) {
                for (var i = -1, l = oe(n), a = r(n), o = a.length; o--; ) {
                  var c = a[e ? o : ++i];
                  if (t(l[c], c, l) === false)
                    break;
                }
                return n;
              };
            }
            function Qs(e, n, t) {
              var r = n & ue, i = St(e);
              function l() {
                var a = this && this !== We && this instanceof l ? i : e;
                return a.apply(r ? t : this, arguments);
              }
              return l;
            }
            function bl(e) {
              return function(n) {
                n = le(n);
                var t = qn(n) ? ln(n) : f, r = t ? t[0] : n.charAt(0), i = t ? In(t, 1).join("") : n.slice(1);
                return r[e]() + i;
              };
            }
            function et(e) {
              return function(n) {
                return kr(Sf(Af(n).replace(Ua, "")), e, "");
              };
            }
            function St(e) {
              return function() {
                var n = arguments;
                switch (n.length) {
                  case 0:
                    return new e();
                  case 1:
                    return new e(n[0]);
                  case 2:
                    return new e(n[0], n[1]);
                  case 3:
                    return new e(n[0], n[1], n[2]);
                  case 4:
                    return new e(n[0], n[1], n[2], n[3]);
                  case 5:
                    return new e(n[0], n[1], n[2], n[3], n[4]);
                  case 6:
                    return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
                  case 7:
                    return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
                }
                var t = Vn(e.prototype), r = e.apply(t, n);
                return _e(r) ? r : t;
              };
            }
            function Vs(e, n, t) {
              var r = St(e);
              function i() {
                for (var l = arguments.length, a = d(l), o = l, c = nt(i); o--; )
                  a[o] = arguments[o];
                var p = l < 3 && a[0] !== c && a[l - 1] !== c ? [] : En(a, c);
                if (l -= p.length, l < t)
                  return Rl(e, n, fr, i.placeholder, f, a, p, f, f, t - l);
                var _ = this && this !== We && this instanceof i ? r : e;
                return $e(_, this, a);
              }
              return i;
            }
            function Ll(e) {
              return function(n, t, r) {
                var i = oe(n);
                if (!Pe(n)) {
                  var l = R(t, 3);
                  n = Ee(n), t = function(o) {
                    return l(i[o], o, i);
                  };
                }
                var a = e(n, t, r);
                return a > -1 ? i[l ? n[a] : a] : f;
              };
            }
            function El(e) {
              return yn(function(n) {
                var t = n.length, r = t, i = Qe.prototype.thru;
                for (e && n.reverse(); r--; ) {
                  var l = n[r];
                  if (typeof l != "function")
                    throw new Je($);
                  if (i && !a && cr(l) == "wrapper")
                    var a = new Qe([], true);
                }
                for (r = a ? r : t; ++r < t; ) {
                  l = n[r];
                  var o = cr(l), c = o == "wrapper" ? Si(l) : f;
                  c && Ci(c[0]) && c[1] == (ne | S | K | pe) && !c[4].length && c[9] == 1 ? a = a[cr(c[0])].apply(a, c[3]) : a = l.length == 1 && Ci(l) ? a[o]() : a.thru(l);
                }
                return function() {
                  var p = arguments, _ = p[0];
                  if (a && p.length == 1 && U(_))
                    return a.plant(_).value();
                  for (var v = 0, y = t ? n[v].apply(this, p) : _; ++v < t; )
                    y = n[v].call(this, y);
                  return y;
                };
              });
            }
            function fr(e, n, t, r, i, l, a, o, c, p) {
              var _ = n & ne, v = n & ue, y = n & xe, b = n & (S | j), B = n & be, z = y ? f : St(e);
              function I() {
                for (var Z = arguments.length, Q = d(Z), qe = Z; qe--; )
                  Q[qe] = arguments[qe];
                if (b)
                  var Me = nt(I), Ye = oo(Q, Me);
                if (r && (Q = ml(Q, r, i, b)), l && (Q = Tl(Q, l, a, b)), Z -= Ye, b && Z < p) {
                  var Te = En(Q, Me);
                  return Rl(e, n, fr, I.placeholder, t, Q, Te, o, c, p - Z);
                }
                var on = v ? t : this, Sn = y ? on[e] : e;
                return Z = Q.length, o ? Q = wc(Q, o) : B && Z > 1 && Q.reverse(), _ && c < Z && (Q.length = c), this && this !== We && this instanceof I && (Sn = z || St(Sn)), Sn.apply(on, Q);
              }
              return I;
            }
            function Cl(e, n) {
              return function(t, r) {
                return Ls(t, e, n(r), {});
              };
            }
            function ar(e, n) {
              return function(t, r) {
                var i;
                if (t === f && r === f)
                  return n;
                if (t !== f && (i = t), r !== f) {
                  if (i === f)
                    return r;
                  typeof t == "string" || typeof r == "string" ? (t = ke(t), r = ke(r)) : (t = dl(t), r = dl(r)), i = e(t, r);
                }
                return i;
              };
            }
            function yi(e) {
              return yn(function(n) {
                return n = ge(n, ze(R())), q(function(t) {
                  var r = this;
                  return e(n, function(i) {
                    return $e(i, r, t);
                  });
                });
              });
            }
            function or(e, n) {
              n = n === f ? " " : ke(n);
              var t = n.length;
              if (t < 2)
                return t ? di(n, e) : n;
              var r = di(n, Xt(e / Yn(n)));
              return qn(n) ? In(ln(r), 0, e).join("") : r.slice(0, e);
            }
            function js(e, n, t, r) {
              var i = n & ue, l = St(e);
              function a() {
                for (var o = -1, c = arguments.length, p = -1, _ = r.length, v = d(_ + c), y = this && this !== We && this instanceof a ? l : e; ++p < _; )
                  v[p] = r[p];
                for (; c--; )
                  v[p++] = arguments[++o];
                return $e(y, i ? t : this, v);
              }
              return a;
            }
            function Wl(e) {
              return function(n, t, r) {
                return r && typeof r != "number" && Fe(n, t, r) && (t = r = f), n = An(n), t === f ? (t = n, n = 0) : t = An(t), r = r === f ? n < t ? 1 : -1 : An(r), Ps(n, t, r, e);
              };
            }
            function sr(e) {
              return function(n, t) {
                return typeof n == "string" && typeof t == "string" || (n = nn(n), t = nn(t)), e(n, t);
              };
            }
            function Rl(e, n, t, r, i, l, a, o, c, p) {
              var _ = n & S, v = _ ? a : f, y = _ ? f : a, b = _ ? l : f, B = _ ? f : l;
              n |= _ ? K : ae, n &= ~(_ ? ae : K), n & tn || (n &= ~(ue | xe));
              var z = [e, n, i, b, v, B, y, o, c, p], I = t.apply(f, z);
              return Ci(e) && $l(I, z), I.placeholder = r, zl(I, e, n);
            }
            function mi(e) {
              var n = Ae[e];
              return function(t, r) {
                if (t = nn(t), r = r == null ? 0 : Be(G(r), 292), r && zu(t)) {
                  var i = (le(t) + "e").split("e"), l = n(i[0] + "e" + (+i[1] + r));
                  return i = (le(l) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
                }
                return n(t);
              };
            }
            var ec = Jn && 1 / Ht(new Jn([, -0]))[1] == ve ? function(e) {
              return new Jn(e);
            } : zi;
            function Bl(e) {
              return function(n) {
                var t = Ie(n);
                return t == rn ? Qr(n) : t == un ? vo(n) : ao(n, e(n));
              };
            }
            function xn(e, n, t, r, i, l, a, o) {
              var c = n & xe;
              if (!c && typeof e != "function")
                throw new Je($);
              var p = r ? r.length : 0;
              if (p || (n &= ~(K | ae), r = i = f), a = a === f ? a : Se(G(a), 0), o = o === f ? o : G(o), p -= i ? i.length : 0, n & ae) {
                var _ = r, v = i;
                r = i = f;
              }
              var y = c ? f : Si(e), b = [e, n, t, r, i, _, v, l, a, o];
              if (y && pc(b, y), e = b[0], n = b[1], t = b[2], r = b[3], i = b[4], o = b[9] = b[9] === f ? c ? 0 : e.length : Se(b[9] - p, 0), !o && n & (S | j) && (n &= ~(S | j)), !n || n == ue)
                var B = Qs(e, n, t);
              else
                n == S || n == j ? B = Vs(e, n, o) : (n == K || n == (ue | K)) && !i.length ? B = js(e, n, t, r) : B = fr.apply(f, b);
              var z = y ? cl : $l;
              return zl(z(B, b), e, n);
            }
            function Il(e, n, t, r) {
              return e === f || an(e, Xn[t]) && !fe.call(r, t) ? n : e;
            }
            function Ol(e, n, t, r, i, l) {
              return _e(e) && _e(n) && (l.set(n, e), rr(e, n, f, Ol, l), l.delete(n)), e;
            }
            function nc(e) {
              return Et(e) ? f : e;
            }
            function Nl(e, n, t, r, i, l) {
              var a = t & L, o = e.length, c = n.length;
              if (o != c && !(a && c > o))
                return false;
              var p = l.get(e), _ = l.get(n);
              if (p && _)
                return p == n && _ == e;
              var v = -1, y = true, b = t & ee ? new Dn() : f;
              for (l.set(e, n), l.set(n, e); ++v < o; ) {
                var B = e[v], z = n[v];
                if (r)
                  var I = a ? r(z, B, v, n, e, l) : r(B, z, v, e, n, l);
                if (I !== f) {
                  if (I)
                    continue;
                  y = false;
                  break;
                }
                if (b) {
                  if (!Kr(n, function(Z, Q) {
                    if (!dt(b, Q) && (B === Z || i(B, Z, t, r, l)))
                      return b.push(Q);
                  })) {
                    y = false;
                    break;
                  }
                } else if (!(B === z || i(B, z, t, r, l))) {
                  y = false;
                  break;
                }
              }
              return l.delete(e), l.delete(n), y;
            }
            function tc(e, n, t, r, i, l, a) {
              switch (t) {
                case zn:
                  if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
                    return false;
                  e = e.buffer, n = n.buffer;
                case ht:
                  return !(e.byteLength != n.byteLength || !l(new Kt(e), new Kt(n)));
                case Y:
                case Oe:
                case at:
                  return an(+e, +n);
                case Bt:
                  return e.name == n.name && e.message == n.message;
                case ot:
                case st:
                  return e == n + "";
                case rn:
                  var o = Qr;
                case un:
                  var c = r & L;
                  if (o || (o = Ht), e.size != n.size && !c)
                    return false;
                  var p = a.get(e);
                  if (p)
                    return p == n;
                  r |= ee, a.set(e, n);
                  var _ = Nl(o(e), o(n), r, i, l, a);
                  return a.delete(e), _;
                case Ot:
                  if (wt)
                    return wt.call(e) == wt.call(n);
              }
              return false;
            }
            function rc(e, n, t, r, i, l) {
              var a = t & L, o = Ti(e), c = o.length, p = Ti(n), _ = p.length;
              if (c != _ && !a)
                return false;
              for (var v = c; v--; ) {
                var y = o[v];
                if (!(a ? y in n : fe.call(n, y)))
                  return false;
              }
              var b = l.get(e), B = l.get(n);
              if (b && B)
                return b == n && B == e;
              var z = true;
              l.set(e, n), l.set(n, e);
              for (var I = a; ++v < c; ) {
                y = o[v];
                var Z = e[y], Q = n[y];
                if (r)
                  var qe = a ? r(Q, Z, y, n, e, l) : r(Z, Q, y, e, n, l);
                if (!(qe === f ? Z === Q || i(Z, Q, t, r, l) : qe)) {
                  z = false;
                  break;
                }
                I || (I = y == "constructor");
              }
              if (z && !I) {
                var Me = e.constructor, Ye = n.constructor;
                Me != Ye && "constructor" in e && "constructor" in n && !(typeof Me == "function" && Me instanceof Me && typeof Ye == "function" && Ye instanceof Ye) && (z = false);
              }
              return l.delete(e), l.delete(n), z;
            }
            function yn(e) {
              return Ri(Ul(e, f, Xl), e + "");
            }
            function Ti(e) {
              return el(e, Ee, Li);
            }
            function Ai(e) {
              return el(e, He, Fl);
            }
            var Si = Qt ? function(e) {
              return Qt.get(e);
            } : zi;
            function cr(e) {
              for (var n = e.name + "", t = Qn[n], r = fe.call(Qn, n) ? t.length : 0; r--; ) {
                var i = t[r], l = i.func;
                if (l == null || l == e)
                  return i.name;
              }
              return n;
            }
            function nt(e) {
              var n = fe.call(u, "placeholder") ? u : e;
              return n.placeholder;
            }
            function R() {
              var e = u.iteratee || Gi;
              return e = e === Gi ? rl : e, arguments.length ? e(arguments[0], arguments[1]) : e;
            }
            function hr(e, n) {
              var t = e.__data__;
              return cc(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
            }
            function bi(e) {
              for (var n = Ee(e), t = n.length; t--; ) {
                var r = n[t], i = e[r];
                n[t] = [r, i, Pl(i)];
              }
              return n;
            }
            function Un(e, n) {
              var t = go(e, n);
              return tl(t) ? t : f;
            }
            function ic(e) {
              var n = fe.call(e, Fn), t = e[Fn];
              try {
                e[Fn] = f;
                var r = true;
              } catch {
              }
              var i = zt.call(e);
              return r && (n ? e[Fn] = t : delete e[Fn]), i;
            }
            var Li = jr ? function(e) {
              return e == null ? [] : (e = oe(e), bn(jr(e), function(n) {
                return Gu.call(e, n);
              }));
            } : ki, Fl = jr ? function(e) {
              for (var n = []; e; )
                Ln(n, Li(e)), e = qt(e);
              return n;
            } : ki, Ie = Ne;
            (ei && Ie(new ei(new ArrayBuffer(1))) != zn || pt && Ie(new pt()) != rn || ni && Ie(ni.resolve()) != Qi || Jn && Ie(new Jn()) != un || _t && Ie(new _t()) != ct) && (Ie = function(e) {
              var n = Ne(e), t = n == pn ? e.constructor : f, r = t ? Gn(t) : "";
              if (r)
                switch (r) {
                  case Uo:
                    return zn;
                  case Go:
                    return rn;
                  case $o:
                    return Qi;
                  case zo:
                    return un;
                  case ko:
                    return ct;
                }
              return n;
            });
            function uc(e, n, t) {
              for (var r = -1, i = t.length; ++r < i; ) {
                var l = t[r], a = l.size;
                switch (l.type) {
                  case "drop":
                    e += a;
                    break;
                  case "dropRight":
                    n -= a;
                    break;
                  case "take":
                    n = Be(n, e + a);
                    break;
                  case "takeRight":
                    e = Se(e, n - a);
                    break;
                }
              }
              return { start: e, end: n };
            }
            function lc(e) {
              var n = e.match(ca);
              return n ? n[1].split(ha) : [];
            }
            function Ml(e, n, t) {
              n = Bn(n, e);
              for (var r = -1, i = n.length, l = false; ++r < i; ) {
                var a = dn(n[r]);
                if (!(l = e != null && t(e, a)))
                  break;
                e = e[a];
              }
              return l || ++r != i ? l : (i = e == null ? 0 : e.length, !!i && xr(i) && mn(a, i) && (U(e) || $n(e)));
            }
            function fc(e) {
              var n = e.length, t = new e.constructor(n);
              return n && typeof e[0] == "string" && fe.call(e, "index") && (t.index = e.index, t.input = e.input), t;
            }
            function Dl(e) {
              return typeof e.constructor == "function" && !bt(e) ? Vn(qt(e)) : {};
            }
            function ac(e, n, t) {
              var r = e.constructor;
              switch (n) {
                case ht:
                  return xi(e);
                case Y:
                case Oe:
                  return new r(+e);
                case zn:
                  return Ks(e, t);
                case br:
                case Lr:
                case Er:
                case Cr:
                case Wr:
                case Rr:
                case Br:
                case Ir:
                case Or:
                  return xl(e, t);
                case rn:
                  return new r();
                case at:
                case st:
                  return new r(e);
                case ot:
                  return qs(e);
                case un:
                  return new r();
                case Ot:
                  return Ys(e);
              }
            }
            function oc(e, n) {
              var t = n.length;
              if (!t)
                return e;
              var r = t - 1;
              return n[r] = (t > 1 ? "& " : "") + n[r], n = n.join(t > 2 ? ", " : " "), e.replace(sa, `{
/* [wrapped with ` + n + `] */
`);
            }
            function sc(e) {
              return U(e) || $n(e) || !!($u && e && e[$u]);
            }
            function mn(e, n) {
              var t = typeof e;
              return n = n ?? Le, !!n && (t == "number" || t != "symbol" && ma.test(e)) && e > -1 && e % 1 == 0 && e < n;
            }
            function Fe(e, n, t) {
              if (!_e(t))
                return false;
              var r = typeof n;
              return (r == "number" ? Pe(t) && mn(n, t.length) : r == "string" && n in t) ? an(t[n], e) : false;
            }
            function Ei(e, n) {
              if (U(e))
                return false;
              var t = typeof e;
              return t == "number" || t == "symbol" || t == "boolean" || e == null || Ke(e) ? true : la.test(e) || !ua.test(e) || n != null && e in oe(n);
            }
            function cc(e) {
              var n = typeof e;
              return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
            }
            function Ci(e) {
              var n = cr(e), t = u[n];
              if (typeof t != "function" || !(n in J.prototype))
                return false;
              if (e === t)
                return true;
              var r = Si(t);
              return !!r && e === r[0];
            }
            function hc(e) {
              return !!Pu && Pu in e;
            }
            var dc = Gt ? Tn : Ki;
            function bt(e) {
              var n = e && e.constructor, t = typeof n == "function" && n.prototype || Xn;
              return e === t;
            }
            function Pl(e) {
              return e === e && !_e(e);
            }
            function Hl(e, n) {
              return function(t) {
                return t == null ? false : t[e] === n && (n !== f || e in oe(t));
              };
            }
            function gc(e) {
              var n = vr(e, function(r) {
                return t.size === k && t.clear(), r;
              }), t = n.cache;
              return n;
            }
            function pc(e, n) {
              var t = e[1], r = n[1], i = t | r, l = i < (ue | xe | ne), a = r == ne && t == S || r == ne && t == pe && e[7].length <= n[8] || r == (ne | pe) && n[7].length <= n[8] && t == S;
              if (!(l || a))
                return e;
              r & ue && (e[2] = n[2], i |= t & ue ? 0 : tn);
              var o = n[3];
              if (o) {
                var c = e[3];
                e[3] = c ? ml(c, o, n[4]) : o, e[4] = c ? En(e[3], ie) : n[4];
              }
              return o = n[5], o && (c = e[5], e[5] = c ? Tl(c, o, n[6]) : o, e[6] = c ? En(e[5], ie) : n[6]), o = n[7], o && (e[7] = o), r & ne && (e[8] = e[8] == null ? n[8] : Be(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = i, e;
            }
            function _c(e) {
              var n = [];
              if (e != null)
                for (var t in oe(e))
                  n.push(t);
              return n;
            }
            function vc(e) {
              return zt.call(e);
            }
            function Ul(e, n, t) {
              return n = Se(n === f ? e.length - 1 : n, 0), function() {
                for (var r = arguments, i = -1, l = Se(r.length - n, 0), a = d(l); ++i < l; )
                  a[i] = r[n + i];
                i = -1;
                for (var o = d(n + 1); ++i < n; )
                  o[i] = r[i];
                return o[n] = t(a), $e(e, this, o);
              };
            }
            function Gl(e, n) {
              return n.length < 2 ? e : Hn(e, je(n, 0, -1));
            }
            function wc(e, n) {
              for (var t = e.length, r = Be(n.length, t), i = De(e); r--; ) {
                var l = n[r];
                e[r] = mn(l, t) ? i[l] : f;
              }
              return e;
            }
            function Wi(e, n) {
              if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
                return e[n];
            }
            var $l = kl(cl), Lt = Oo || function(e, n) {
              return We.setTimeout(e, n);
            }, Ri = kl(Gs);
            function zl(e, n, t) {
              var r = n + "";
              return Ri(e, oc(r, xc(lc(r), t)));
            }
            function kl(e) {
              var n = 0, t = 0;
              return function() {
                var r = Do(), i = F - (r - t);
                if (t = r, i > 0) {
                  if (++n >= E)
                    return arguments[0];
                } else
                  n = 0;
                return e.apply(f, arguments);
              };
            }
            function dr(e, n) {
              var t = -1, r = e.length, i = r - 1;
              for (n = n === f ? r : n; ++t < n; ) {
                var l = hi(t, i), a = e[l];
                e[l] = e[t], e[t] = a;
              }
              return e.length = n, e;
            }
            var Kl = gc(function(e) {
              var n = [];
              return e.charCodeAt(0) === 46 && n.push(""), e.replace(fa, function(t, r, i, l) {
                n.push(i ? l.replace(pa, "$1") : r || t);
              }), n;
            });
            function dn(e) {
              if (typeof e == "string" || Ke(e))
                return e;
              var n = e + "";
              return n == "0" && 1 / e == -ve ? "-0" : n;
            }
            function Gn(e) {
              if (e != null) {
                try {
                  return $t.call(e);
                } catch {
                }
                try {
                  return e + "";
                } catch {
                }
              }
              return "";
            }
            function xc(e, n) {
              return Xe(Ar, function(t) {
                var r = "_." + t[0];
                n & t[1] && !Dt(e, r) && e.push(r);
              }), e.sort();
            }
            function ql(e) {
              if (e instanceof J)
                return e.clone();
              var n = new Qe(e.__wrapped__, e.__chain__);
              return n.__actions__ = De(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
            }
            function yc(e, n, t) {
              (t ? Fe(e, n, t) : n === f) ? n = 1 : n = Se(G(n), 0);
              var r = e == null ? 0 : e.length;
              if (!r || n < 1)
                return [];
              for (var i = 0, l = 0, a = d(Xt(r / n)); i < r; )
                a[l++] = je(e, i, i += n);
              return a;
            }
            function mc(e) {
              for (var n = -1, t = e == null ? 0 : e.length, r = 0, i = []; ++n < t; ) {
                var l = e[n];
                l && (i[r++] = l);
              }
              return i;
            }
            function Tc() {
              var e = arguments.length;
              if (!e)
                return [];
              for (var n = d(e - 1), t = arguments[0], r = e; r--; )
                n[r - 1] = arguments[r];
              return Ln(U(t) ? De(t) : [t], Re(n, 1));
            }
            var Ac = q(function(e, n) {
              return me(e) ? yt(e, Re(n, 1, me, true)) : [];
            }), Sc = q(function(e, n) {
              var t = en(n);
              return me(t) && (t = f), me(e) ? yt(e, Re(n, 1, me, true), R(t, 2)) : [];
            }), bc = q(function(e, n) {
              var t = en(n);
              return me(t) && (t = f), me(e) ? yt(e, Re(n, 1, me, true), f, t) : [];
            });
            function Lc(e, n, t) {
              var r = e == null ? 0 : e.length;
              return r ? (n = t || n === f ? 1 : G(n), je(e, n < 0 ? 0 : n, r)) : [];
            }
            function Ec(e, n, t) {
              var r = e == null ? 0 : e.length;
              return r ? (n = t || n === f ? 1 : G(n), n = r - n, je(e, 0, n < 0 ? 0 : n)) : [];
            }
            function Cc(e, n) {
              return e && e.length ? ur(e, R(n, 3), true, true) : [];
            }
            function Wc(e, n) {
              return e && e.length ? ur(e, R(n, 3), true) : [];
            }
            function Rc(e, n, t, r) {
              var i = e == null ? 0 : e.length;
              return i ? (t && typeof t != "number" && Fe(e, n, t) && (t = 0, r = i), Ts(e, n, t, r)) : [];
            }
            function Yl(e, n, t) {
              var r = e == null ? 0 : e.length;
              if (!r)
                return -1;
              var i = t == null ? 0 : G(t);
              return i < 0 && (i = Se(r + i, 0)), Pt(e, R(n, 3), i);
            }
            function Zl(e, n, t) {
              var r = e == null ? 0 : e.length;
              if (!r)
                return -1;
              var i = r - 1;
              return t !== f && (i = G(t), i = t < 0 ? Se(r + i, 0) : Be(i, r - 1)), Pt(e, R(n, 3), i, true);
            }
            function Xl(e) {
              var n = e == null ? 0 : e.length;
              return n ? Re(e, 1) : [];
            }
            function Bc(e) {
              var n = e == null ? 0 : e.length;
              return n ? Re(e, ve) : [];
            }
            function Ic(e, n) {
              var t = e == null ? 0 : e.length;
              return t ? (n = n === f ? 1 : G(n), Re(e, n)) : [];
            }
            function Oc(e) {
              for (var n = -1, t = e == null ? 0 : e.length, r = {}; ++n < t; ) {
                var i = e[n];
                r[i[0]] = i[1];
              }
              return r;
            }
            function Jl(e) {
              return e && e.length ? e[0] : f;
            }
            function Nc(e, n, t) {
              var r = e == null ? 0 : e.length;
              if (!r)
                return -1;
              var i = t == null ? 0 : G(t);
              return i < 0 && (i = Se(r + i, 0)), Kn(e, n, i);
            }
            function Fc(e) {
              var n = e == null ? 0 : e.length;
              return n ? je(e, 0, -1) : [];
            }
            var Mc = q(function(e) {
              var n = ge(e, vi);
              return n.length && n[0] === e[0] ? fi(n) : [];
            }), Dc = q(function(e) {
              var n = en(e), t = ge(e, vi);
              return n === en(t) ? n = f : t.pop(), t.length && t[0] === e[0] ? fi(t, R(n, 2)) : [];
            }), Pc = q(function(e) {
              var n = en(e), t = ge(e, vi);
              return n = typeof n == "function" ? n : f, n && t.pop(), t.length && t[0] === e[0] ? fi(t, f, n) : [];
            });
            function Hc(e, n) {
              return e == null ? "" : Fo.call(e, n);
            }
            function en(e) {
              var n = e == null ? 0 : e.length;
              return n ? e[n - 1] : f;
            }
            function Uc(e, n, t) {
              var r = e == null ? 0 : e.length;
              if (!r)
                return -1;
              var i = r;
              return t !== f && (i = G(t), i = i < 0 ? Se(r + i, 0) : Be(i, r - 1)), n === n ? xo(e, n, i) : Pt(e, Ru, i, true);
            }
            function Gc(e, n) {
              return e && e.length ? fl(e, G(n)) : f;
            }
            var $c = q(Ql);
            function Ql(e, n) {
              return e && e.length && n && n.length ? ci(e, n) : e;
            }
            function zc(e, n, t) {
              return e && e.length && n && n.length ? ci(e, n, R(t, 2)) : e;
            }
            function kc(e, n, t) {
              return e && e.length && n && n.length ? ci(e, n, f, t) : e;
            }
            var Kc = yn(function(e, n) {
              var t = e == null ? 0 : e.length, r = ri(e, n);
              return sl(e, ge(n, function(i) {
                return mn(i, t) ? +i : i;
              }).sort(yl)), r;
            });
            function qc(e, n) {
              var t = [];
              if (!(e && e.length))
                return t;
              var r = -1, i = [], l = e.length;
              for (n = R(n, 3); ++r < l; ) {
                var a = e[r];
                n(a, r, e) && (t.push(a), i.push(r));
              }
              return sl(e, i), t;
            }
            function Bi(e) {
              return e == null ? e : Ho.call(e);
            }
            function Yc(e, n, t) {
              var r = e == null ? 0 : e.length;
              return r ? (t && typeof t != "number" && Fe(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : G(n), t = t === f ? r : G(t)), je(e, n, t)) : [];
            }
            function Zc(e, n) {
              return ir(e, n);
            }
            function Xc(e, n, t) {
              return gi(e, n, R(t, 2));
            }
            function Jc(e, n) {
              var t = e == null ? 0 : e.length;
              if (t) {
                var r = ir(e, n);
                if (r < t && an(e[r], n))
                  return r;
              }
              return -1;
            }
            function Qc(e, n) {
              return ir(e, n, true);
            }
            function Vc(e, n, t) {
              return gi(e, n, R(t, 2), true);
            }
            function jc(e, n) {
              var t = e == null ? 0 : e.length;
              if (t) {
                var r = ir(e, n, true) - 1;
                if (an(e[r], n))
                  return r;
              }
              return -1;
            }
            function eh(e) {
              return e && e.length ? hl(e) : [];
            }
            function nh(e, n) {
              return e && e.length ? hl(e, R(n, 2)) : [];
            }
            function th(e) {
              var n = e == null ? 0 : e.length;
              return n ? je(e, 1, n) : [];
            }
            function rh(e, n, t) {
              return e && e.length ? (n = t || n === f ? 1 : G(n), je(e, 0, n < 0 ? 0 : n)) : [];
            }
            function ih(e, n, t) {
              var r = e == null ? 0 : e.length;
              return r ? (n = t || n === f ? 1 : G(n), n = r - n, je(e, n < 0 ? 0 : n, r)) : [];
            }
            function uh(e, n) {
              return e && e.length ? ur(e, R(n, 3), false, true) : [];
            }
            function lh(e, n) {
              return e && e.length ? ur(e, R(n, 3)) : [];
            }
            var fh = q(function(e) {
              return Rn(Re(e, 1, me, true));
            }), ah = q(function(e) {
              var n = en(e);
              return me(n) && (n = f), Rn(Re(e, 1, me, true), R(n, 2));
            }), oh = q(function(e) {
              var n = en(e);
              return n = typeof n == "function" ? n : f, Rn(Re(e, 1, me, true), f, n);
            });
            function sh(e) {
              return e && e.length ? Rn(e) : [];
            }
            function ch(e, n) {
              return e && e.length ? Rn(e, R(n, 2)) : [];
            }
            function hh(e, n) {
              return n = typeof n == "function" ? n : f, e && e.length ? Rn(e, f, n) : [];
            }
            function Ii(e) {
              if (!(e && e.length))
                return [];
              var n = 0;
              return e = bn(e, function(t) {
                if (me(t))
                  return n = Se(t.length, n), true;
              }), Xr(n, function(t) {
                return ge(e, qr(t));
              });
            }
            function Vl(e, n) {
              if (!(e && e.length))
                return [];
              var t = Ii(e);
              return n == null ? t : ge(t, function(r) {
                return $e(n, f, r);
              });
            }
            var dh = q(function(e, n) {
              return me(e) ? yt(e, n) : [];
            }), gh = q(function(e) {
              return _i(bn(e, me));
            }), ph = q(function(e) {
              var n = en(e);
              return me(n) && (n = f), _i(bn(e, me), R(n, 2));
            }), _h = q(function(e) {
              var n = en(e);
              return n = typeof n == "function" ? n : f, _i(bn(e, me), f, n);
            }), vh = q(Ii);
            function wh(e, n) {
              return _l(e || [], n || [], xt);
            }
            function xh(e, n) {
              return _l(e || [], n || [], At);
            }
            var yh = q(function(e) {
              var n = e.length, t = n > 1 ? e[n - 1] : f;
              return t = typeof t == "function" ? (e.pop(), t) : f, Vl(e, t);
            });
            function jl(e) {
              var n = u(e);
              return n.__chain__ = true, n;
            }
            function mh(e, n) {
              return n(e), e;
            }
            function gr(e, n) {
              return n(e);
            }
            var Th = yn(function(e) {
              var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, i = function(l) {
                return ri(l, e);
              };
              return n > 1 || this.__actions__.length || !(r instanceof J) || !mn(t) ? this.thru(i) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({ func: gr, args: [i], thisArg: f }), new Qe(r, this.__chain__).thru(function(l) {
                return n && !l.length && l.push(f), l;
              }));
            });
            function Ah() {
              return jl(this);
            }
            function Sh() {
              return new Qe(this.value(), this.__chain__);
            }
            function bh() {
              this.__values__ === f && (this.__values__ = gf(this.value()));
              var e = this.__index__ >= this.__values__.length, n = e ? f : this.__values__[this.__index__++];
              return { done: e, value: n };
            }
            function Lh() {
              return this;
            }
            function Eh(e) {
              for (var n, t = this; t instanceof jt; ) {
                var r = ql(t);
                r.__index__ = 0, r.__values__ = f, n ? i.__wrapped__ = r : n = r;
                var i = r;
                t = t.__wrapped__;
              }
              return i.__wrapped__ = e, n;
            }
            function Ch() {
              var e = this.__wrapped__;
              if (e instanceof J) {
                var n = e;
                return this.__actions__.length && (n = new J(this)), n = n.reverse(), n.__actions__.push({ func: gr, args: [Bi], thisArg: f }), new Qe(n, this.__chain__);
              }
              return this.thru(Bi);
            }
            function Wh() {
              return pl(this.__wrapped__, this.__actions__);
            }
            var Rh = lr(function(e, n, t) {
              fe.call(e, t) ? ++e[t] : wn(e, t, 1);
            });
            function Bh(e, n, t) {
              var r = U(e) ? Cu : ms;
              return t && Fe(e, n, t) && (n = f), r(e, R(n, 3));
            }
            function Ih(e, n) {
              var t = U(e) ? bn : Vu;
              return t(e, R(n, 3));
            }
            var Oh = Ll(Yl), Nh = Ll(Zl);
            function Fh(e, n) {
              return Re(pr(e, n), 1);
            }
            function Mh(e, n) {
              return Re(pr(e, n), ve);
            }
            function Dh(e, n, t) {
              return t = t === f ? 1 : G(t), Re(pr(e, n), t);
            }
            function ef(e, n) {
              var t = U(e) ? Xe : Wn;
              return t(e, R(n, 3));
            }
            function nf(e, n) {
              var t = U(e) ? no : Qu;
              return t(e, R(n, 3));
            }
            var Ph = lr(function(e, n, t) {
              fe.call(e, t) ? e[t].push(n) : wn(e, t, [n]);
            });
            function Hh(e, n, t, r) {
              e = Pe(e) ? e : rt(e), t = t && !r ? G(t) : 0;
              var i = e.length;
              return t < 0 && (t = Se(i + t, 0)), yr(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && Kn(e, n, t) > -1;
            }
            var Uh = q(function(e, n, t) {
              var r = -1, i = typeof n == "function", l = Pe(e) ? d(e.length) : [];
              return Wn(e, function(a) {
                l[++r] = i ? $e(n, a, t) : mt(a, n, t);
              }), l;
            }), Gh = lr(function(e, n, t) {
              wn(e, t, n);
            });
            function pr(e, n) {
              var t = U(e) ? ge : il;
              return t(e, R(n, 3));
            }
            function $h(e, n, t, r) {
              return e == null ? [] : (U(n) || (n = n == null ? [] : [n]), t = r ? f : t, U(t) || (t = t == null ? [] : [t]), al(e, n, t));
            }
            var zh = lr(function(e, n, t) {
              e[t ? 0 : 1].push(n);
            }, function() {
              return [[], []];
            });
            function kh(e, n, t) {
              var r = U(e) ? kr : Iu, i = arguments.length < 3;
              return r(e, R(n, 4), t, i, Wn);
            }
            function Kh(e, n, t) {
              var r = U(e) ? to : Iu, i = arguments.length < 3;
              return r(e, R(n, 4), t, i, Qu);
            }
            function qh(e, n) {
              var t = U(e) ? bn : Vu;
              return t(e, wr(R(n, 3)));
            }
            function Yh(e) {
              var n = U(e) ? Yu : Hs;
              return n(e);
            }
            function Zh(e, n, t) {
              (t ? Fe(e, n, t) : n === f) ? n = 1 : n = G(n);
              var r = U(e) ? _s : Us;
              return r(e, n);
            }
            function Xh(e) {
              var n = U(e) ? vs : $s;
              return n(e);
            }
            function Jh(e) {
              if (e == null)
                return 0;
              if (Pe(e))
                return yr(e) ? Yn(e) : e.length;
              var n = Ie(e);
              return n == rn || n == un ? e.size : oi(e).length;
            }
            function Qh(e, n, t) {
              var r = U(e) ? Kr : zs;
              return t && Fe(e, n, t) && (n = f), r(e, R(n, 3));
            }
            var Vh = q(function(e, n) {
              if (e == null)
                return [];
              var t = n.length;
              return t > 1 && Fe(e, n[0], n[1]) ? n = [] : t > 2 && Fe(n[0], n[1], n[2]) && (n = [n[0]]), al(e, Re(n, 1), []);
            }), _r = Io || function() {
              return We.Date.now();
            };
            function jh(e, n) {
              if (typeof n != "function")
                throw new Je($);
              return e = G(e), function() {
                if (--e < 1)
                  return n.apply(this, arguments);
              };
            }
            function tf(e, n, t) {
              return n = t ? f : n, n = e && n == null ? e.length : n, xn(e, ne, f, f, f, f, n);
            }
            function rf(e, n) {
              var t;
              if (typeof n != "function")
                throw new Je($);
              return e = G(e), function() {
                return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = f), t;
              };
            }
            var Oi = q(function(e, n, t) {
              var r = ue;
              if (t.length) {
                var i = En(t, nt(Oi));
                r |= K;
              }
              return xn(e, r, n, t, i);
            }), uf = q(function(e, n, t) {
              var r = ue | xe;
              if (t.length) {
                var i = En(t, nt(uf));
                r |= K;
              }
              return xn(n, r, e, t, i);
            });
            function lf(e, n, t) {
              n = t ? f : n;
              var r = xn(e, S, f, f, f, f, f, n);
              return r.placeholder = lf.placeholder, r;
            }
            function ff(e, n, t) {
              n = t ? f : n;
              var r = xn(e, j, f, f, f, f, f, n);
              return r.placeholder = ff.placeholder, r;
            }
            function af(e, n, t) {
              var r, i, l, a, o, c, p = 0, _ = false, v = false, y = true;
              if (typeof e != "function")
                throw new Je($);
              n = nn(n) || 0, _e(t) && (_ = !!t.leading, v = "maxWait" in t, l = v ? Se(nn(t.maxWait) || 0, n) : l, y = "trailing" in t ? !!t.trailing : y);
              function b(Te) {
                var on = r, Sn = i;
                return r = i = f, p = Te, a = e.apply(Sn, on), a;
              }
              function B(Te) {
                return p = Te, o = Lt(Z, n), _ ? b(Te) : a;
              }
              function z(Te) {
                var on = Te - c, Sn = Te - p, Ef = n - on;
                return v ? Be(Ef, l - Sn) : Ef;
              }
              function I(Te) {
                var on = Te - c, Sn = Te - p;
                return c === f || on >= n || on < 0 || v && Sn >= l;
              }
              function Z() {
                var Te = _r();
                if (I(Te))
                  return Q(Te);
                o = Lt(Z, z(Te));
              }
              function Q(Te) {
                return o = f, y && r ? b(Te) : (r = i = f, a);
              }
              function qe() {
                o !== f && vl(o), p = 0, r = c = i = o = f;
              }
              function Me() {
                return o === f ? a : Q(_r());
              }
              function Ye() {
                var Te = _r(), on = I(Te);
                if (r = arguments, i = this, c = Te, on) {
                  if (o === f)
                    return B(c);
                  if (v)
                    return vl(o), o = Lt(Z, n), b(c);
                }
                return o === f && (o = Lt(Z, n)), a;
              }
              return Ye.cancel = qe, Ye.flush = Me, Ye;
            }
            var ed = q(function(e, n) {
              return Ju(e, 1, n);
            }), nd = q(function(e, n, t) {
              return Ju(e, nn(n) || 0, t);
            });
            function td(e) {
              return xn(e, be);
            }
            function vr(e, n) {
              if (typeof e != "function" || n != null && typeof n != "function")
                throw new Je($);
              var t = function() {
                var r = arguments, i = n ? n.apply(this, r) : r[0], l = t.cache;
                if (l.has(i))
                  return l.get(i);
                var a = e.apply(this, r);
                return t.cache = l.set(i, a) || l, a;
              };
              return t.cache = new (vr.Cache || vn)(), t;
            }
            vr.Cache = vn;
            function wr(e) {
              if (typeof e != "function")
                throw new Je($);
              return function() {
                var n = arguments;
                switch (n.length) {
                  case 0:
                    return !e.call(this);
                  case 1:
                    return !e.call(this, n[0]);
                  case 2:
                    return !e.call(this, n[0], n[1]);
                  case 3:
                    return !e.call(this, n[0], n[1], n[2]);
                }
                return !e.apply(this, n);
              };
            }
            function rd(e) {
              return rf(2, e);
            }
            var id = ks(function(e, n) {
              n = n.length == 1 && U(n[0]) ? ge(n[0], ze(R())) : ge(Re(n, 1), ze(R()));
              var t = n.length;
              return q(function(r) {
                for (var i = -1, l = Be(r.length, t); ++i < l; )
                  r[i] = n[i].call(this, r[i]);
                return $e(e, this, r);
              });
            }), Ni = q(function(e, n) {
              var t = En(n, nt(Ni));
              return xn(e, K, f, n, t);
            }), of = q(function(e, n) {
              var t = En(n, nt(of));
              return xn(e, ae, f, n, t);
            }), ud = yn(function(e, n) {
              return xn(e, pe, f, f, f, n);
            });
            function ld(e, n) {
              if (typeof e != "function")
                throw new Je($);
              return n = n === f ? n : G(n), q(e, n);
            }
            function fd(e, n) {
              if (typeof e != "function")
                throw new Je($);
              return n = n == null ? 0 : Se(G(n), 0), q(function(t) {
                var r = t[n], i = In(t, 0, n);
                return r && Ln(i, r), $e(e, this, i);
              });
            }
            function ad(e, n, t) {
              var r = true, i = true;
              if (typeof e != "function")
                throw new Je($);
              return _e(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), af(e, n, { leading: r, maxWait: n, trailing: i });
            }
            function od(e) {
              return tf(e, 1);
            }
            function sd(e, n) {
              return Ni(wi(n), e);
            }
            function cd() {
              if (!arguments.length)
                return [];
              var e = arguments[0];
              return U(e) ? e : [e];
            }
            function hd(e) {
              return Ve(e, N);
            }
            function dd(e, n) {
              return n = typeof n == "function" ? n : f, Ve(e, N, n);
            }
            function gd(e) {
              return Ve(e, X | N);
            }
            function pd(e, n) {
              return n = typeof n == "function" ? n : f, Ve(e, X | N, n);
            }
            function _d(e, n) {
              return n == null || Xu(e, n, Ee(n));
            }
            function an(e, n) {
              return e === n || e !== e && n !== n;
            }
            var vd = sr(li), wd = sr(function(e, n) {
              return e >= n;
            }), $n = nl(/* @__PURE__ */ function() {
              return arguments;
            }()) ? nl : function(e) {
              return we(e) && fe.call(e, "callee") && !Gu.call(e, "callee");
            }, U = d.isArray, xd = Tu ? ze(Tu) : Es;
            function Pe(e) {
              return e != null && xr(e.length) && !Tn(e);
            }
            function me(e) {
              return we(e) && Pe(e);
            }
            function yd(e) {
              return e === true || e === false || we(e) && Ne(e) == Y;
            }
            var On = No || Ki, md = Au ? ze(Au) : Cs;
            function Td(e) {
              return we(e) && e.nodeType === 1 && !Et(e);
            }
            function Ad(e) {
              if (e == null)
                return true;
              if (Pe(e) && (U(e) || typeof e == "string" || typeof e.splice == "function" || On(e) || tt(e) || $n(e)))
                return !e.length;
              var n = Ie(e);
              if (n == rn || n == un)
                return !e.size;
              if (bt(e))
                return !oi(e).length;
              for (var t in e)
                if (fe.call(e, t))
                  return false;
              return true;
            }
            function Sd(e, n) {
              return Tt(e, n);
            }
            function bd(e, n, t) {
              t = typeof t == "function" ? t : f;
              var r = t ? t(e, n) : f;
              return r === f ? Tt(e, n, f, t) : !!r;
            }
            function Fi(e) {
              if (!we(e))
                return false;
              var n = Ne(e);
              return n == Bt || n == Sr || typeof e.message == "string" && typeof e.name == "string" && !Et(e);
            }
            function Ld(e) {
              return typeof e == "number" && zu(e);
            }
            function Tn(e) {
              if (!_e(e))
                return false;
              var n = Ne(e);
              return n == It || n == Ji || n == P || n == Xf;
            }
            function sf(e) {
              return typeof e == "number" && e == G(e);
            }
            function xr(e) {
              return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Le;
            }
            function _e(e) {
              var n = typeof e;
              return e != null && (n == "object" || n == "function");
            }
            function we(e) {
              return e != null && typeof e == "object";
            }
            var cf = Su ? ze(Su) : Rs;
            function Ed(e, n) {
              return e === n || ai(e, n, bi(n));
            }
            function Cd(e, n, t) {
              return t = typeof t == "function" ? t : f, ai(e, n, bi(n), t);
            }
            function Wd(e) {
              return hf(e) && e != +e;
            }
            function Rd(e) {
              if (dc(e))
                throw new H(de);
              return tl(e);
            }
            function Bd(e) {
              return e === null;
            }
            function Id(e) {
              return e == null;
            }
            function hf(e) {
              return typeof e == "number" || we(e) && Ne(e) == at;
            }
            function Et(e) {
              if (!we(e) || Ne(e) != pn)
                return false;
              var n = qt(e);
              if (n === null)
                return true;
              var t = fe.call(n, "constructor") && n.constructor;
              return typeof t == "function" && t instanceof t && $t.call(t) == Co;
            }
            var Mi = bu ? ze(bu) : Bs;
            function Od(e) {
              return sf(e) && e >= -Le && e <= Le;
            }
            var df = Lu ? ze(Lu) : Is;
            function yr(e) {
              return typeof e == "string" || !U(e) && we(e) && Ne(e) == st;
            }
            function Ke(e) {
              return typeof e == "symbol" || we(e) && Ne(e) == Ot;
            }
            var tt = Eu ? ze(Eu) : Os;
            function Nd(e) {
              return e === f;
            }
            function Fd(e) {
              return we(e) && Ie(e) == ct;
            }
            function Md(e) {
              return we(e) && Ne(e) == Qf;
            }
            var Dd = sr(si), Pd = sr(function(e, n) {
              return e <= n;
            });
            function gf(e) {
              if (!e)
                return [];
              if (Pe(e))
                return yr(e) ? ln(e) : De(e);
              if (gt && e[gt])
                return _o(e[gt]());
              var n = Ie(e), t = n == rn ? Qr : n == un ? Ht : rt;
              return t(e);
            }
            function An(e) {
              if (!e)
                return e === 0 ? e : 0;
              if (e = nn(e), e === ve || e === -ve) {
                var n = e < 0 ? -1 : 1;
                return n * ft;
              }
              return e === e ? e : 0;
            }
            function G(e) {
              var n = An(e), t = n % 1;
              return n === n ? t ? n - t : n : 0;
            }
            function pf(e) {
              return e ? Pn(G(e), 0, Ce) : 0;
            }
            function nn(e) {
              if (typeof e == "number")
                return e;
              if (Ke(e))
                return gn;
              if (_e(e)) {
                var n = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = _e(n) ? n + "" : n;
              }
              if (typeof e != "string")
                return e === 0 ? e : +e;
              e = Ou(e);
              var t = wa.test(e);
              return t || ya.test(e) ? Va(e.slice(2), t ? 2 : 8) : va.test(e) ? gn : +e;
            }
            function _f(e) {
              return hn(e, He(e));
            }
            function Hd(e) {
              return e ? Pn(G(e), -Le, Le) : e === 0 ? e : 0;
            }
            function le(e) {
              return e == null ? "" : ke(e);
            }
            var Ud = jn(function(e, n) {
              if (bt(n) || Pe(n)) {
                hn(n, Ee(n), e);
                return;
              }
              for (var t in n)
                fe.call(n, t) && xt(e, t, n[t]);
            }), vf = jn(function(e, n) {
              hn(n, He(n), e);
            }), mr = jn(function(e, n, t, r) {
              hn(n, He(n), e, r);
            }), Gd = jn(function(e, n, t, r) {
              hn(n, Ee(n), e, r);
            }), $d = yn(ri);
            function zd(e, n) {
              var t = Vn(e);
              return n == null ? t : Zu(t, n);
            }
            var kd = q(function(e, n) {
              e = oe(e);
              var t = -1, r = n.length, i = r > 2 ? n[2] : f;
              for (i && Fe(n[0], n[1], i) && (r = 1); ++t < r; )
                for (var l = n[t], a = He(l), o = -1, c = a.length; ++o < c; ) {
                  var p = a[o], _ = e[p];
                  (_ === f || an(_, Xn[p]) && !fe.call(e, p)) && (e[p] = l[p]);
                }
              return e;
            }), Kd = q(function(e) {
              return e.push(f, Ol), $e(wf, f, e);
            });
            function qd(e, n) {
              return Wu(e, R(n, 3), cn);
            }
            function Yd(e, n) {
              return Wu(e, R(n, 3), ui);
            }
            function Zd(e, n) {
              return e == null ? e : ii(e, R(n, 3), He);
            }
            function Xd(e, n) {
              return e == null ? e : ju(e, R(n, 3), He);
            }
            function Jd(e, n) {
              return e && cn(e, R(n, 3));
            }
            function Qd(e, n) {
              return e && ui(e, R(n, 3));
            }
            function Vd(e) {
              return e == null ? [] : tr(e, Ee(e));
            }
            function jd(e) {
              return e == null ? [] : tr(e, He(e));
            }
            function Di(e, n, t) {
              var r = e == null ? f : Hn(e, n);
              return r === f ? t : r;
            }
            function eg(e, n) {
              return e != null && Ml(e, n, As);
            }
            function Pi(e, n) {
              return e != null && Ml(e, n, Ss);
            }
            var ng = Cl(function(e, n, t) {
              n != null && typeof n.toString != "function" && (n = zt.call(n)), e[n] = t;
            }, Ui(Ue)), tg = Cl(function(e, n, t) {
              n != null && typeof n.toString != "function" && (n = zt.call(n)), fe.call(e, n) ? e[n].push(t) : e[n] = [t];
            }, R), rg = q(mt);
            function Ee(e) {
              return Pe(e) ? qu(e) : oi(e);
            }
            function He(e) {
              return Pe(e) ? qu(e, true) : Ns(e);
            }
            function ig(e, n) {
              var t = {};
              return n = R(n, 3), cn(e, function(r, i, l) {
                wn(t, n(r, i, l), r);
              }), t;
            }
            function ug(e, n) {
              var t = {};
              return n = R(n, 3), cn(e, function(r, i, l) {
                wn(t, i, n(r, i, l));
              }), t;
            }
            var lg = jn(function(e, n, t) {
              rr(e, n, t);
            }), wf = jn(function(e, n, t, r) {
              rr(e, n, t, r);
            }), fg = yn(function(e, n) {
              var t = {};
              if (e == null)
                return t;
              var r = false;
              n = ge(n, function(l) {
                return l = Bn(l, e), r || (r = l.length > 1), l;
              }), hn(e, Ai(e), t), r && (t = Ve(t, X | Ge | N, nc));
              for (var i = n.length; i--; )
                pi(t, n[i]);
              return t;
            });
            function ag(e, n) {
              return xf(e, wr(R(n)));
            }
            var og = yn(function(e, n) {
              return e == null ? {} : Ms(e, n);
            });
            function xf(e, n) {
              if (e == null)
                return {};
              var t = ge(Ai(e), function(r) {
                return [r];
              });
              return n = R(n), ol(e, t, function(r, i) {
                return n(r, i[0]);
              });
            }
            function sg(e, n, t) {
              n = Bn(n, e);
              var r = -1, i = n.length;
              for (i || (i = 1, e = f); ++r < i; ) {
                var l = e == null ? f : e[dn(n[r])];
                l === f && (r = i, l = t), e = Tn(l) ? l.call(e) : l;
              }
              return e;
            }
            function cg(e, n, t) {
              return e == null ? e : At(e, n, t);
            }
            function hg(e, n, t, r) {
              return r = typeof r == "function" ? r : f, e == null ? e : At(e, n, t, r);
            }
            var yf = Bl(Ee), mf = Bl(He);
            function dg(e, n, t) {
              var r = U(e), i = r || On(e) || tt(e);
              if (n = R(n, 4), t == null) {
                var l = e && e.constructor;
                i ? t = r ? new l() : [] : _e(e) ? t = Tn(l) ? Vn(qt(e)) : {} : t = {};
              }
              return (i ? Xe : cn)(e, function(a, o, c) {
                return n(t, a, o, c);
              }), t;
            }
            function gg(e, n) {
              return e == null ? true : pi(e, n);
            }
            function pg(e, n, t) {
              return e == null ? e : gl(e, n, wi(t));
            }
            function _g(e, n, t, r) {
              return r = typeof r == "function" ? r : f, e == null ? e : gl(e, n, wi(t), r);
            }
            function rt(e) {
              return e == null ? [] : Jr(e, Ee(e));
            }
            function vg(e) {
              return e == null ? [] : Jr(e, He(e));
            }
            function wg(e, n, t) {
              return t === f && (t = n, n = f), t !== f && (t = nn(t), t = t === t ? t : 0), n !== f && (n = nn(n), n = n === n ? n : 0), Pn(nn(e), n, t);
            }
            function xg(e, n, t) {
              return n = An(n), t === f ? (t = n, n = 0) : t = An(t), e = nn(e), bs(e, n, t);
            }
            function yg(e, n, t) {
              if (t && typeof t != "boolean" && Fe(e, n, t) && (n = t = f), t === f && (typeof n == "boolean" ? (t = n, n = f) : typeof e == "boolean" && (t = e, e = f)), e === f && n === f ? (e = 0, n = 1) : (e = An(e), n === f ? (n = e, e = 0) : n = An(n)), e > n) {
                var r = e;
                e = n, n = r;
              }
              if (t || e % 1 || n % 1) {
                var i = ku();
                return Be(e + i * (n - e + Qa("1e-" + ((i + "").length - 1))), n);
              }
              return hi(e, n);
            }
            var mg = et(function(e, n, t) {
              return n = n.toLowerCase(), e + (t ? Tf(n) : n);
            });
            function Tf(e) {
              return Hi(le(e).toLowerCase());
            }
            function Af(e) {
              return e = le(e), e && e.replace(Ta, so).replace(Ga, "");
            }
            function Tg(e, n, t) {
              e = le(e), n = ke(n);
              var r = e.length;
              t = t === f ? r : Pn(G(t), 0, r);
              var i = t;
              return t -= n.length, t >= 0 && e.slice(t, i) == n;
            }
            function Ag(e) {
              return e = le(e), e && ta.test(e) ? e.replace(ji, co) : e;
            }
            function Sg(e) {
              return e = le(e), e && aa.test(e) ? e.replace(Nr, "\\$&") : e;
            }
            var bg = et(function(e, n, t) {
              return e + (t ? "-" : "") + n.toLowerCase();
            }), Lg = et(function(e, n, t) {
              return e + (t ? " " : "") + n.toLowerCase();
            }), Eg = bl("toLowerCase");
            function Cg(e, n, t) {
              e = le(e), n = G(n);
              var r = n ? Yn(e) : 0;
              if (!n || r >= n)
                return e;
              var i = (n - r) / 2;
              return or(Jt(i), t) + e + or(Xt(i), t);
            }
            function Wg(e, n, t) {
              e = le(e), n = G(n);
              var r = n ? Yn(e) : 0;
              return n && r < n ? e + or(n - r, t) : e;
            }
            function Rg(e, n, t) {
              e = le(e), n = G(n);
              var r = n ? Yn(e) : 0;
              return n && r < n ? or(n - r, t) + e : e;
            }
            function Bg(e, n, t) {
              return t || n == null ? n = 0 : n && (n = +n), Po(le(e).replace(Fr, ""), n || 0);
            }
            function Ig(e, n, t) {
              return (t ? Fe(e, n, t) : n === f) ? n = 1 : n = G(n), di(le(e), n);
            }
            function Og() {
              var e = arguments, n = le(e[0]);
              return e.length < 3 ? n : n.replace(e[1], e[2]);
            }
            var Ng = et(function(e, n, t) {
              return e + (t ? "_" : "") + n.toLowerCase();
            });
            function Fg(e, n, t) {
              return t && typeof t != "number" && Fe(e, n, t) && (n = t = f), t = t === f ? Ce : t >>> 0, t ? (e = le(e), e && (typeof n == "string" || n != null && !Mi(n)) && (n = ke(n), !n && qn(e)) ? In(ln(e), 0, t) : e.split(n, t)) : [];
            }
            var Mg = et(function(e, n, t) {
              return e + (t ? " " : "") + Hi(n);
            });
            function Dg(e, n, t) {
              return e = le(e), t = t == null ? 0 : Pn(G(t), 0, e.length), n = ke(n), e.slice(t, t + n.length) == n;
            }
            function Pg(e, n, t) {
              var r = u.templateSettings;
              t && Fe(e, n, t) && (n = f), e = le(e), n = mr({}, n, r, Il);
              var i = mr({}, n.imports, r.imports, Il), l = Ee(i), a = Jr(i, l), o, c, p = 0, _ = n.interpolate || Nt, v = "__p += '", y = Vr((n.escape || Nt).source + "|" + _.source + "|" + (_ === eu ? _a : Nt).source + "|" + (n.evaluate || Nt).source + "|$", "g"), b = "//# sourceURL=" + (fe.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++qa + "]") + `
`;
              e.replace(y, function(I, Z, Q, qe, Me, Ye) {
                return Q || (Q = qe), v += e.slice(p, Ye).replace(Aa, ho), Z && (o = true, v += `' +
__e(` + Z + `) +
'`), Me && (c = true, v += `';
` + Me + `;
__p += '`), Q && (v += `' +
((__t = (` + Q + `)) == null ? '' : __t) +
'`), p = Ye + I.length, I;
              }), v += `';
`;
              var B = fe.call(n, "variable") && n.variable;
              if (!B)
                v = `with (obj) {
` + v + `
}
`;
              else if (ga.test(B))
                throw new H(M);
              v = (c ? v.replace(Vf, "") : v).replace(jf, "$1").replace(ea, "$1;"), v = "function(" + (B || "obj") + `) {
` + (B ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + v + `return __p
}`;
              var z = bf(function() {
                return re(l, b + "return " + v).apply(f, a);
              });
              if (z.source = v, Fi(z))
                throw z;
              return z;
            }
            function Hg(e) {
              return le(e).toLowerCase();
            }
            function Ug(e) {
              return le(e).toUpperCase();
            }
            function Gg(e, n, t) {
              if (e = le(e), e && (t || n === f))
                return Ou(e);
              if (!e || !(n = ke(n)))
                return e;
              var r = ln(e), i = ln(n), l = Nu(r, i), a = Fu(r, i) + 1;
              return In(r, l, a).join("");
            }
            function $g(e, n, t) {
              if (e = le(e), e && (t || n === f))
                return e.slice(0, Du(e) + 1);
              if (!e || !(n = ke(n)))
                return e;
              var r = ln(e), i = Fu(r, ln(n)) + 1;
              return In(r, 0, i).join("");
            }
            function zg(e, n, t) {
              if (e = le(e), e && (t || n === f))
                return e.replace(Fr, "");
              if (!e || !(n = ke(n)))
                return e;
              var r = ln(e), i = Nu(r, ln(n));
              return In(r, i).join("");
            }
            function kg(e, n) {
              var t = A, r = W;
              if (_e(n)) {
                var i = "separator" in n ? n.separator : i;
                t = "length" in n ? G(n.length) : t, r = "omission" in n ? ke(n.omission) : r;
              }
              e = le(e);
              var l = e.length;
              if (qn(e)) {
                var a = ln(e);
                l = a.length;
              }
              if (t >= l)
                return e;
              var o = t - Yn(r);
              if (o < 1)
                return r;
              var c = a ? In(a, 0, o).join("") : e.slice(0, o);
              if (i === f)
                return c + r;
              if (a && (o += c.length - o), Mi(i)) {
                if (e.slice(o).search(i)) {
                  var p, _ = c;
                  for (i.global || (i = Vr(i.source, le(nu.exec(i)) + "g")), i.lastIndex = 0; p = i.exec(_); )
                    var v = p.index;
                  c = c.slice(0, v === f ? o : v);
                }
              } else if (e.indexOf(ke(i), o) != o) {
                var y = c.lastIndexOf(i);
                y > -1 && (c = c.slice(0, y));
              }
              return c + r;
            }
            function Kg(e) {
              return e = le(e), e && na.test(e) ? e.replace(Vi, yo) : e;
            }
            var qg = et(function(e, n, t) {
              return e + (t ? " " : "") + n.toUpperCase();
            }), Hi = bl("toUpperCase");
            function Sf(e, n, t) {
              return e = le(e), n = t ? f : n, n === f ? po(e) ? Ao(e) : uo(e) : e.match(n) || [];
            }
            var bf = q(function(e, n) {
              try {
                return $e(e, f, n);
              } catch (t) {
                return Fi(t) ? t : new H(t);
              }
            }), Yg = yn(function(e, n) {
              return Xe(n, function(t) {
                t = dn(t), wn(e, t, Oi(e[t], e));
              }), e;
            });
            function Zg(e) {
              var n = e == null ? 0 : e.length, t = R();
              return e = n ? ge(e, function(r) {
                if (typeof r[1] != "function")
                  throw new Je($);
                return [t(r[0]), r[1]];
              }) : [], q(function(r) {
                for (var i = -1; ++i < n; ) {
                  var l = e[i];
                  if ($e(l[0], this, r))
                    return $e(l[1], this, r);
                }
              });
            }
            function Xg(e) {
              return ys(Ve(e, X));
            }
            function Ui(e) {
              return function() {
                return e;
              };
            }
            function Jg(e, n) {
              return e == null || e !== e ? n : e;
            }
            var Qg = El(), Vg = El(true);
            function Ue(e) {
              return e;
            }
            function Gi(e) {
              return rl(typeof e == "function" ? e : Ve(e, X));
            }
            function jg(e) {
              return ul(Ve(e, X));
            }
            function ep(e, n) {
              return ll(e, Ve(n, X));
            }
            var np = q(function(e, n) {
              return function(t) {
                return mt(t, e, n);
              };
            }), tp = q(function(e, n) {
              return function(t) {
                return mt(e, t, n);
              };
            });
            function $i(e, n, t) {
              var r = Ee(n), i = tr(n, r);
              t == null && !(_e(n) && (i.length || !r.length)) && (t = n, n = e, e = this, i = tr(n, Ee(n)));
              var l = !(_e(t) && "chain" in t) || !!t.chain, a = Tn(e);
              return Xe(i, function(o) {
                var c = n[o];
                e[o] = c, a && (e.prototype[o] = function() {
                  var p = this.__chain__;
                  if (l || p) {
                    var _ = e(this.__wrapped__), v = _.__actions__ = De(this.__actions__);
                    return v.push({ func: c, args: arguments, thisArg: e }), _.__chain__ = p, _;
                  }
                  return c.apply(e, Ln([this.value()], arguments));
                });
              }), e;
            }
            function rp() {
              return We._ === this && (We._ = Wo), this;
            }
            function zi() {
            }
            function ip(e) {
              return e = G(e), q(function(n) {
                return fl(n, e);
              });
            }
            var up = yi(ge), lp = yi(Cu), fp = yi(Kr);
            function Lf(e) {
              return Ei(e) ? qr(dn(e)) : Ds(e);
            }
            function ap(e) {
              return function(n) {
                return e == null ? f : Hn(e, n);
              };
            }
            var op = Wl(), sp = Wl(true);
            function ki() {
              return [];
            }
            function Ki() {
              return false;
            }
            function cp() {
              return {};
            }
            function hp() {
              return "";
            }
            function dp() {
              return true;
            }
            function gp(e, n) {
              if (e = G(e), e < 1 || e > Le)
                return [];
              var t = Ce, r = Be(e, Ce);
              n = R(n), e -= Ce;
              for (var i = Xr(r, n); ++t < e; )
                n(t);
              return i;
            }
            function pp(e) {
              return U(e) ? ge(e, dn) : Ke(e) ? [e] : De(Kl(le(e)));
            }
            function _p(e) {
              var n = ++Eo;
              return le(e) + n;
            }
            var vp = ar(function(e, n) {
              return e + n;
            }, 0), wp = mi("ceil"), xp = ar(function(e, n) {
              return e / n;
            }, 1), yp = mi("floor");
            function mp(e) {
              return e && e.length ? nr(e, Ue, li) : f;
            }
            function Tp(e, n) {
              return e && e.length ? nr(e, R(n, 2), li) : f;
            }
            function Ap(e) {
              return Bu(e, Ue);
            }
            function Sp(e, n) {
              return Bu(e, R(n, 2));
            }
            function bp(e) {
              return e && e.length ? nr(e, Ue, si) : f;
            }
            function Lp(e, n) {
              return e && e.length ? nr(e, R(n, 2), si) : f;
            }
            var Ep = ar(function(e, n) {
              return e * n;
            }, 1), Cp = mi("round"), Wp = ar(function(e, n) {
              return e - n;
            }, 0);
            function Rp(e) {
              return e && e.length ? Zr(e, Ue) : 0;
            }
            function Bp(e, n) {
              return e && e.length ? Zr(e, R(n, 2)) : 0;
            }
            return u.after = jh, u.ary = tf, u.assign = Ud, u.assignIn = vf, u.assignInWith = mr, u.assignWith = Gd, u.at = $d, u.before = rf, u.bind = Oi, u.bindAll = Yg, u.bindKey = uf, u.castArray = cd, u.chain = jl, u.chunk = yc, u.compact = mc, u.concat = Tc, u.cond = Zg, u.conforms = Xg, u.constant = Ui, u.countBy = Rh, u.create = zd, u.curry = lf, u.curryRight = ff, u.debounce = af, u.defaults = kd, u.defaultsDeep = Kd, u.defer = ed, u.delay = nd, u.difference = Ac, u.differenceBy = Sc, u.differenceWith = bc, u.drop = Lc, u.dropRight = Ec, u.dropRightWhile = Cc, u.dropWhile = Wc, u.fill = Rc, u.filter = Ih, u.flatMap = Fh, u.flatMapDeep = Mh, u.flatMapDepth = Dh, u.flatten = Xl, u.flattenDeep = Bc, u.flattenDepth = Ic, u.flip = td, u.flow = Qg, u.flowRight = Vg, u.fromPairs = Oc, u.functions = Vd, u.functionsIn = jd, u.groupBy = Ph, u.initial = Fc, u.intersection = Mc, u.intersectionBy = Dc, u.intersectionWith = Pc, u.invert = ng, u.invertBy = tg, u.invokeMap = Uh, u.iteratee = Gi, u.keyBy = Gh, u.keys = Ee, u.keysIn = He, u.map = pr, u.mapKeys = ig, u.mapValues = ug, u.matches = jg, u.matchesProperty = ep, u.memoize = vr, u.merge = lg, u.mergeWith = wf, u.method = np, u.methodOf = tp, u.mixin = $i, u.negate = wr, u.nthArg = ip, u.omit = fg, u.omitBy = ag, u.once = rd, u.orderBy = $h, u.over = up, u.overArgs = id, u.overEvery = lp, u.overSome = fp, u.partial = Ni, u.partialRight = of, u.partition = zh, u.pick = og, u.pickBy = xf, u.property = Lf, u.propertyOf = ap, u.pull = $c, u.pullAll = Ql, u.pullAllBy = zc, u.pullAllWith = kc, u.pullAt = Kc, u.range = op, u.rangeRight = sp, u.rearg = ud, u.reject = qh, u.remove = qc, u.rest = ld, u.reverse = Bi, u.sampleSize = Zh, u.set = cg, u.setWith = hg, u.shuffle = Xh, u.slice = Yc, u.sortBy = Vh, u.sortedUniq = eh, u.sortedUniqBy = nh, u.split = Fg, u.spread = fd, u.tail = th, u.take = rh, u.takeRight = ih, u.takeRightWhile = uh, u.takeWhile = lh, u.tap = mh, u.throttle = ad, u.thru = gr, u.toArray = gf, u.toPairs = yf, u.toPairsIn = mf, u.toPath = pp, u.toPlainObject = _f, u.transform = dg, u.unary = od, u.union = fh, u.unionBy = ah, u.unionWith = oh, u.uniq = sh, u.uniqBy = ch, u.uniqWith = hh, u.unset = gg, u.unzip = Ii, u.unzipWith = Vl, u.update = pg, u.updateWith = _g, u.values = rt, u.valuesIn = vg, u.without = dh, u.words = Sf, u.wrap = sd, u.xor = gh, u.xorBy = ph, u.xorWith = _h, u.zip = vh, u.zipObject = wh, u.zipObjectDeep = xh, u.zipWith = yh, u.entries = yf, u.entriesIn = mf, u.extend = vf, u.extendWith = mr, $i(u, u), u.add = vp, u.attempt = bf, u.camelCase = mg, u.capitalize = Tf, u.ceil = wp, u.clamp = wg, u.clone = hd, u.cloneDeep = gd, u.cloneDeepWith = pd, u.cloneWith = dd, u.conformsTo = _d, u.deburr = Af, u.defaultTo = Jg, u.divide = xp, u.endsWith = Tg, u.eq = an, u.escape = Ag, u.escapeRegExp = Sg, u.every = Bh, u.find = Oh, u.findIndex = Yl, u.findKey = qd, u.findLast = Nh, u.findLastIndex = Zl, u.findLastKey = Yd, u.floor = yp, u.forEach = ef, u.forEachRight = nf, u.forIn = Zd, u.forInRight = Xd, u.forOwn = Jd, u.forOwnRight = Qd, u.get = Di, u.gt = vd, u.gte = wd, u.has = eg, u.hasIn = Pi, u.head = Jl, u.identity = Ue, u.includes = Hh, u.indexOf = Nc, u.inRange = xg, u.invoke = rg, u.isArguments = $n, u.isArray = U, u.isArrayBuffer = xd, u.isArrayLike = Pe, u.isArrayLikeObject = me, u.isBoolean = yd, u.isBuffer = On, u.isDate = md, u.isElement = Td, u.isEmpty = Ad, u.isEqual = Sd, u.isEqualWith = bd, u.isError = Fi, u.isFinite = Ld, u.isFunction = Tn, u.isInteger = sf, u.isLength = xr, u.isMap = cf, u.isMatch = Ed, u.isMatchWith = Cd, u.isNaN = Wd, u.isNative = Rd, u.isNil = Id, u.isNull = Bd, u.isNumber = hf, u.isObject = _e, u.isObjectLike = we, u.isPlainObject = Et, u.isRegExp = Mi, u.isSafeInteger = Od, u.isSet = df, u.isString = yr, u.isSymbol = Ke, u.isTypedArray = tt, u.isUndefined = Nd, u.isWeakMap = Fd, u.isWeakSet = Md, u.join = Hc, u.kebabCase = bg, u.last = en, u.lastIndexOf = Uc, u.lowerCase = Lg, u.lowerFirst = Eg, u.lt = Dd, u.lte = Pd, u.max = mp, u.maxBy = Tp, u.mean = Ap, u.meanBy = Sp, u.min = bp, u.minBy = Lp, u.stubArray = ki, u.stubFalse = Ki, u.stubObject = cp, u.stubString = hp, u.stubTrue = dp, u.multiply = Ep, u.nth = Gc, u.noConflict = rp, u.noop = zi, u.now = _r, u.pad = Cg, u.padEnd = Wg, u.padStart = Rg, u.parseInt = Bg, u.random = yg, u.reduce = kh, u.reduceRight = Kh, u.repeat = Ig, u.replace = Og, u.result = sg, u.round = Cp, u.runInContext = s, u.sample = Yh, u.size = Jh, u.snakeCase = Ng, u.some = Qh, u.sortedIndex = Zc, u.sortedIndexBy = Xc, u.sortedIndexOf = Jc, u.sortedLastIndex = Qc, u.sortedLastIndexBy = Vc, u.sortedLastIndexOf = jc, u.startCase = Mg, u.startsWith = Dg, u.subtract = Wp, u.sum = Rp, u.sumBy = Bp, u.template = Pg, u.times = gp, u.toFinite = An, u.toInteger = G, u.toLength = pf, u.toLower = Hg, u.toNumber = nn, u.toSafeInteger = Hd, u.toString = le, u.toUpper = Ug, u.trim = Gg, u.trimEnd = $g, u.trimStart = zg, u.truncate = kg, u.unescape = Kg, u.uniqueId = _p, u.upperCase = qg, u.upperFirst = Hi, u.each = ef, u.eachRight = nf, u.first = Jl, $i(u, function() {
              var e = {};
              return cn(u, function(n, t) {
                fe.call(u.prototype, t) || (e[t] = n);
              }), e;
            }(), { chain: false }), u.VERSION = C, Xe(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
              u[e].placeholder = u;
            }), Xe(["drop", "take"], function(e, n) {
              J.prototype[e] = function(t) {
                t = t === f ? 1 : Se(G(t), 0);
                var r = this.__filtered__ && !n ? new J(this) : this.clone();
                return r.__filtered__ ? r.__takeCount__ = Be(t, r.__takeCount__) : r.__views__.push({ size: Be(t, Ce), type: e + (r.__dir__ < 0 ? "Right" : "") }), r;
              }, J.prototype[e + "Right"] = function(t) {
                return this.reverse()[e](t).reverse();
              };
            }), Xe(["filter", "map", "takeWhile"], function(e, n) {
              var t = n + 1, r = t == te || t == se;
              J.prototype[e] = function(i) {
                var l = this.clone();
                return l.__iteratees__.push({ iteratee: R(i, 3), type: t }), l.__filtered__ = l.__filtered__ || r, l;
              };
            }), Xe(["head", "last"], function(e, n) {
              var t = "take" + (n ? "Right" : "");
              J.prototype[e] = function() {
                return this[t](1).value()[0];
              };
            }), Xe(["initial", "tail"], function(e, n) {
              var t = "drop" + (n ? "" : "Right");
              J.prototype[e] = function() {
                return this.__filtered__ ? new J(this) : this[t](1);
              };
            }), J.prototype.compact = function() {
              return this.filter(Ue);
            }, J.prototype.find = function(e) {
              return this.filter(e).head();
            }, J.prototype.findLast = function(e) {
              return this.reverse().find(e);
            }, J.prototype.invokeMap = q(function(e, n) {
              return typeof e == "function" ? new J(this) : this.map(function(t) {
                return mt(t, e, n);
              });
            }), J.prototype.reject = function(e) {
              return this.filter(wr(R(e)));
            }, J.prototype.slice = function(e, n) {
              e = G(e);
              var t = this;
              return t.__filtered__ && (e > 0 || n < 0) ? new J(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== f && (n = G(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
            }, J.prototype.takeRightWhile = function(e) {
              return this.reverse().takeWhile(e).reverse();
            }, J.prototype.toArray = function() {
              return this.take(Ce);
            }, cn(J.prototype, function(e, n) {
              var t = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), i = u[r ? "take" + (n == "last" ? "Right" : "") : n], l = r || /^find/.test(n);
              i && (u.prototype[n] = function() {
                var a = this.__wrapped__, o = r ? [1] : arguments, c = a instanceof J, p = o[0], _ = c || U(a), v = function(Z) {
                  var Q = i.apply(u, Ln([Z], o));
                  return r && y ? Q[0] : Q;
                };
                _ && t && typeof p == "function" && p.length != 1 && (c = _ = false);
                var y = this.__chain__, b = !!this.__actions__.length, B = l && !y, z = c && !b;
                if (!l && _) {
                  a = z ? a : new J(this);
                  var I = e.apply(a, o);
                  return I.__actions__.push({ func: gr, args: [v], thisArg: f }), new Qe(I, y);
                }
                return B && z ? e.apply(this, o) : (I = this.thru(v), B ? r ? I.value()[0] : I.value() : I);
              });
            }), Xe(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
              var n = Ut[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
              u.prototype[e] = function() {
                var i = arguments;
                if (r && !this.__chain__) {
                  var l = this.value();
                  return n.apply(U(l) ? l : [], i);
                }
                return this[t](function(a) {
                  return n.apply(U(a) ? a : [], i);
                });
              };
            }), cn(J.prototype, function(e, n) {
              var t = u[n];
              if (t) {
                var r = t.name + "";
                fe.call(Qn, r) || (Qn[r] = []), Qn[r].push({ name: n, func: t });
              }
            }), Qn[fr(f, xe).name] = [{ name: "wrapper", func: f }], J.prototype.clone = Ko, J.prototype.reverse = qo, J.prototype.value = Yo, u.prototype.at = Th, u.prototype.chain = Ah, u.prototype.commit = Sh, u.prototype.next = bh, u.prototype.plant = Eh, u.prototype.reverse = Ch, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Wh, u.prototype.first = u.prototype.head, gt && (u.prototype[gt] = Lh), u;
          }, Zn = So();
          Nn ? ((Nn.exports = Zn)._ = Zn, Gr._ = Zn) : We._ = Zn;
        }).call(lt);
      }(Ct, Ct.exports);
      var sn = Ct.exports;
      const Ff = h.defineComponent({ __name: "index", props: { maxWidth: { type: Number, default: 0 }, columns: { type: Array, default() {
        return () => [];
      } }, getHeaderCellClass: { type: Function, default() {
        return () => {
        };
      } }, getHeaderCellStyle: { type: Function, default() {
        return () => {
        };
      } }, width: { type: Number, default: 600 }, keepScrollLeft: { type: Number, default: 0 }, border: { type: Boolean, default: true } }, emits: ["scrollLeft", "scrollTop", "maxScrollWidth"], setup(w, { expose: V, emit: f }) {
        const C = h.ref(), O = w, de = (A) => {
          $();
          const W = h.ref(Tr(A.width)), E = h.ref(Yi(A.minWidth));
          return W.value && (A.width = W.value), E.value && (A.minWidth = E.value), !W.value && E.value && (A.width = void 0), A.minWidth, A.realWidth = Number(A.width ? A.width : A.minWidth), A;
        }, $ = () => {
          let A = 0, W = 0;
          if (O.columns.forEach((E) => {
            A += E.width || 0, E.width || W++;
          }), A < O.width) {
            let E = O.width - A, F = Math.floor(E / W);
            O.columns.forEach((te) => {
              te.width || (te.width = F);
            });
          } else {
            let E = 0;
            O.columns.forEach((F) => {
              F.width || (F.width = 100), E += F.width;
            }), M.value = E;
          }
        };
        let M = h.ref(O.width), m = h.ref(2), k = h.ref(1), ie = h.ref(null), X = h.ref(null), Ge = h.ref(O.width), N = h.ref([]), L = h.ref({}), ee = h.computed(() => C.value.offsetWidth);
        const ue = h.ref(0), xe = (A = O.columns, W = N.value) => {
          let E = A.slice(m.value * (k.value - 1), m.value * k.value);
          E.length && W.push(...E), k.value++;
        }, tn = (A = O.columns) => {
          let W = A.slice(m.value * (k.value - 5), m.value * (k.value - 4));
          W.length && (N.value = W.concat(N.value)), k.value--;
        }, S = () => {
          xe(), h.nextTick(() => {
            let A = X.value.getElementsByTagName("th")[Number(m.value * (k.value - 1)) - 1];
            A && A.offsetLeft + A.offsetWidth < Ge.value ? S() : (m.value = N.value.length, k.value = 2, xe(), h.nextTick(() => {
              L.value[0] = 0;
              let W = X.value.getElementsByTagName("th")[m.value - 1];
              if (L.value[1] = W.offsetLeft + W.offsetWidth, N.value.length >= m.value * 2) {
                let E = X.value.getElementsByTagName("th")[m.value * 2 - 1];
                L.value[2] = E.offsetLeft + E.offsetWidth, xe(), h.nextTick(() => {
                  let F = X.value.getElementsByTagName("th")[N.value.length - 1];
                  L.value[3] = F.offsetLeft + F.offsetWidth, N.value.length < m.value * 3 && (M.value = F.offsetLeft + F.offsetWidth);
                });
              } else {
                let E = X.value.getElementsByTagName("th")[N.value.length - 1], F = E.offsetLeft + E.offsetWidth;
                M.value = F < O.width ? O.width : F, L.value[2] = E.offsetLeft + E.offsetWidth;
              }
              ie.value.addEventListener("scroll", (E) => ne(E));
            }));
          });
        };
        let j = h.ref(0);
        const K = (A) => {
          let W = X.value.getElementsByTagName("th")[m.value];
          h.nextTick(() => {
            if (W.offsetLeft < A) {
              if ((k.value - 1) * m.value > O.columns.length)
                return;
              xe();
              let E = sn.cloneDeep(N.value);
              j.value = L.value[k.value - 4], N.value = E.slice(Number(m.value), N.value.length), X.value.style.paddingLeft = j.value + "px", h.nextTick(() => {
                let F = X.value.getElementsByTagName("th")[N.value.length - 1];
                if (L.value[k.value - 1] = F.offsetLeft + F.offsetWidth, ue.value = A, N.value.length < m.value * 3) {
                  M.value = L.value[k.value - 1], pe("maxScrollWidth", M.value);
                  return;
                }
                K(A);
              });
            }
          });
        }, ae = (A) => {
          h.nextTick(() => {
            if (A - j.value < L.value[k.value - 5]) {
              if (k.value <= 3) {
                X.value.style.paddingLeft = "0px";
                return;
              }
              tn();
              let W = sn.cloneDeep(N.value);
              j.value = L.value[k.value - 4], N.value = W.slice(0, m.value * 3), X.value.style.paddingLeft = j.value + "px", h.nextTick(() => {
                ue.value = j.value, ae(A);
              });
            }
          });
        }, ne = (A) => {
          let W = A.target.scrollLeft;
          pe("scrollLeft", W), W > ue.value && K(W), W < ue.value && ae(W);
        }, pe = f;
        V({ headerHeight: ee }), h.onMounted(() => {
          M.value = O.width;
        }), h.nextTick(() => {
          S();
        }), h.watch(() => O.keepScrollLeft, (A, W) => {
          A && A !== W && (ie.value.scrollLeft = O.keepScrollLeft), A || (ie.value.scrollLeft = 0);
        }, { deep: true }), h.watch(() => O.maxWidth, (A, W) => {
          A && (M.value = A);
        }, { deep: true });
        let be = ["center", "left", "right"];
        return (A, W) => (h.openBlock(), h.createElementBlock("div", { ref_key: "tableHeaderWrapper", ref: ie, class: h.normalizeClass(["dy-vl-header", { "dy-vl-header-border": w.border }]), style: h.normalizeStyle({ width: w.width + "px" }) }, [h.createElementVNode("table", { ref_key: "tableHeader", ref: C, class: "dy-table-header dy-table--border-header", border: 0, cellspacing: "0", cellpadding: "0", style: h.normalizeStyle({ width: h.unref(M) + "px" }) }, [h.createElementVNode("thead", { ref_key: "scrollBody", ref: X }, [h.createElementVNode("tr", null, [(h.openBlock(true), h.createElementBlock(h.Fragment, null, h.renderList(h.unref(N), (E, F) => (h.openBlock(), h.createElementBlock("th", { key: `${E.prop}-thead`, class: h.normalizeClass(["dy-table__cell", [{ "dy-table__cell-border": w.border }, `dy-table_cell-text-${h.unref(be).includes(E.align) ? E.align : "center"}`]]), style: h.normalizeStyle({ width: de(E).realWidth + "px" }) }, [h.createVNode(qi, { data: E.label, index: F }, null, 8, ["data", "index"])], 6))), 128))])], 512)], 4)], 6));
      } }), Op = "", Mf = ut(Ff, [["__scopeId", "data-v-c703dba9"]]), Df = h.defineComponent({ __name: "index", props: { data: { type: Array, default() {
        return () => [];
      } }, height: { type: Number, default: 400 }, width: { type: Number, default: 600 }, columns: { type: Array, default() {
        return () => [];
      } }, getCellClass: { type: Function, default() {
        return () => {
        };
      } }, getCellStyle: { type: Function, default() {
        return () => {
        };
      } }, keepScrollLeft: { type: Number, default: 0 }, maxWidth: { type: Number, default: 0 }, border: { type: Boolean, default: true }, stripe: { type: Boolean, default: false } }, emits: ["scrollLeft", "scrollTop", "maxScrollWidth"], setup(w, { expose: V, emit: f }) {
        h.onMounted(() => {
        });
        const C = w, O = (x) => {
          de();
          const D = h.ref(Tr(x.width)), P = h.ref(Yi(x.minWidth));
          return D.value && (x.width = D.value), P.value && (x.minWidth = P.value), !D.value && P.value && (x.width = void 0), x.minWidth, x.realWidth = Number(x.width ? x.width : x.minWidth), x;
        }, de = () => {
          let x = 0, D = 0;
          if (C.columns.forEach((P) => {
            x += P.width || 0, P.width || D++;
          }), x < C.width) {
            let P = C.width - x, Y = Math.floor(P / D);
            C.columns.forEach((Oe) => {
              Oe.width || (Oe.width = Y);
            });
          } else {
            let P = 0;
            C.columns.forEach((Y) => {
              Y.width || (Y.width = 100), P += Y.width;
            }), ie.value = P;
          }
        };
        let $ = h.ref(null), M = h.ref(null), m = h.ref(null), k = h.ref(200 * C.data.length), ie = h.ref(200 * C.columns.length), X = h.ref(C.height), Ge = h.ref(C.width), N = h.ref([]), L = h.ref(2), ee = h.ref(1), ue = h.ref({});
        const xe = h.ref(0), tn = () => {
          let x = C.data.slice(L.value * (ee.value - 1), L.value * ee.value);
          x.length && N.value.push(...x), ee.value++;
        }, S = () => {
          let x = C.data.slice(L.value * (ee.value - 5), L.value * (ee.value - 4));
          x.length && (N.value = x.concat(N.value)), ee.value--;
        }, j = () => {
          tn(), h.nextTick(() => {
            let x = m.value.getElementsByTagName("tr")[Number(L.value * (ee.value - 1)) - 1];
            ie.value = C.width, x && x.offsetTop + x.offsetHeight < X.value ? j() : (L.value = N.value.length, ee.value = 2, tn(), h.nextTick(() => {
              ue.value[0] = 0;
              let D = m.value.getElementsByTagName("tr")[L.value - 1];
              if (ue.value[1] = D.offsetTop + D.offsetHeight, N.value.length >= 2 * L.value) {
                let P = m.value.getElementsByTagName("tr")[L.value * 2 - 1];
                ue.value[2] = P.offsetTop + P.offsetHeight, tn(), h.nextTick(() => {
                  let Y = m.value.getElementsByTagName("tr")[N.value.length - 1];
                  ue.value[3] = Y.offsetTop + Y.offsetHeight, N.value.length < 3 * L.value && (k.value = Y.offsetTop + Y.offsetHeight), E(0, N.value.length);
                });
              } else {
                let P = m.value.getElementsByTagName("tr")[N.value.length - 1];
                h.nextTick(() => {
                  ue.value[3] = P.offsetTop + P.offsetHeight, k.value = P.offsetTop + P.offsetHeight, E(0, N.value.length);
                });
              }
              $.value.addEventListener("scroll", (P) => pe(P));
            }));
          });
        };
        let K = h.ref(0);
        const ae = (x) => {
          let D = m.value.getElementsByTagName("tr")[L.value];
          xe.value = x, h.nextTick(() => {
            if (D.offsetTop < x) {
              if ((ee.value - 1) * L.value > C.data.length)
                return;
              tn();
              let P = sn.cloneDeep(N.value);
              K.value = ue.value[ee.value - 4], N.value = P.slice(Number(L.value), N.value.length), h.nextTick(() => {
                m.value.style.paddingTop = K.value + "px";
                let Y = m.value.getElementsByTagName("tr")[N.value.length - 1];
                if (ue.value[ee.value - 1] = Y.offsetTop + Y.offsetHeight, xe.value = x, E(L.value * (ee.value - 4) + N.value.length - L.value * 3, L.value * (ee.value - 4) + N.value.length), N.value.length < L.value * 3) {
                  k.value = ue.value[ee.value - 1];
                  return;
                }
                sn.debounce(() => ae(K.value), 500);
              });
            }
          });
        }, ne = (x) => {
          xe.value = x, h.nextTick(() => {
            if (x - K.value < ue.value[ee.value - 5]) {
              if (ee.value <= 3) {
                m.value.style.paddingTop = "0px";
                return;
              }
              S();
              let D = sn.cloneDeep(N.value);
              K.value = ue.value[ee.value - 4], N.value = D.slice(0, L.value * 3), m.value.style.paddingTop = K.value + "px", xe.value = K.value, sn.debounce(() => ne(K.value), 500);
            }
          });
        }, pe = (x) => {
          let D = x.target.scrollTop, P = x.target.scrollLeft;
          be(P, D);
        }, be = (x, D) => {
          A("scrollLeft", x), A("scrollTop", D), D > xe.value && ae(D), D < xe.value && ne(D), x > ve.value && Wt(x), x < ve.value && Rt(x);
        };
        h.nextTick(() => {
          gn(), j();
        });
        const A = f;
        V({}), h.watch(() => C.keepScrollLeft, (x, D) => {
          x !== D && ($.value.scrollLeft = C.keepScrollLeft), x || ($.value.scrollLeft = 0);
        }, { deep: true }), h.watch(() => C.maxWidth, (x, D) => {
          x && (ie.value = x);
        }, { deep: true });
        const W = h.ref({}), E = (x = 0, D) => {
          let P = m.value.getElementsByTagName("tr");
          h.nextTick(() => {
            for (let Y = 0; Y < D - x; Y++)
              W.value[x + Y] = P[Y].offsetHeight;
          });
        };
        let F = h.ref(2), te = h.ref(1), ye = h.ref({}), se = h.ref([]);
        const ve = h.ref(0), Le = (x = C.columns, D = se.value) => {
          let P = x.slice(F.value * (te.value - 1), F.value * te.value);
          P.length && D.push(...P), te.value++;
        }, ft = (x = C.columns) => {
          let D = x.slice(F.value * (te.value - 5), F.value * (te.value - 4));
          D.length && (se.value = D.concat(se.value)), te.value--;
        }, gn = () => {
          Le(), h.nextTick(() => {
            let x = m.value.getElementsByTagName("td")[Number(F.value * (te.value - 1)) - 1];
            x && x.offsetLeft + x.offsetWidth < Ge.value ? gn() : (F.value = se.value.length, te.value = 2, Le(), h.nextTick(() => {
              ye.value[0] = 0;
              let D = m.value.getElementsByTagName("td")[F.value - 1];
              if (ye.value[1] = D.offsetLeft + D.offsetWidth, se.value.length >= F.value * 2) {
                let P = m.value.getElementsByTagName("td")[F.value * 2 - 1];
                ye.value[2] = P.offsetLeft + P.offsetWidth, Le(), h.nextTick(() => {
                  let Y = m.value.getElementsByTagName("td")[se.value.length - 1];
                  ye.value[3] = Y.offsetLeft + Y.offsetWidth, se.value.length < F.value * 3 && (ie.value = Y.offsetLeft + Y.offsetWidth);
                });
              } else {
                let P = m.value.getElementsByTagName("td")[se.value.length - 1];
                ie.value = P.offsetLeft + P.offsetWidth, ye.value[2] = P.offsetLeft + P.offsetWidth;
              }
              console.log("铺满了三屏", se.value.length, F.value, ye.value, te.value);
            }));
          });
        };
        let Ce = h.ref(0);
        const Wt = (x) => {
          ve.value = x;
          let D = m.value.getElementsByTagName("td")[F.value];
          h.nextTick(() => {
            if (D && D.offsetLeft < x) {
              if ((te.value - 1) * F.value > C.columns.length)
                return;
              Le();
              let P = sn.cloneDeep(se.value);
              Ce.value = ye.value[te.value - 4], se.value = P.slice(Number(F.value), se.value.length), h.nextTick(() => {
                m.value.style.paddingLeft = Ce.value + "px";
                let Y = m.value.getElementsByTagName("td")[se.value.length - 1];
                if (ye.value[te.value - 1] = Y.offsetLeft + Y.offsetWidth, ve.value = x, se.value.length < F.value * 3) {
                  ie.value = ye.value[te.value - 1];
                  return;
                }
                sn.debounce(() => Wt(x), 500);
              });
            }
          });
        }, Rt = (x) => {
          ve.value = x, h.nextTick(() => {
            if (x - Ce.value < ye.value[te.value - 5]) {
              if (te.value <= 3) {
                m.value.style.paddingLeft = "0px";
                return;
              }
              ft();
              let D = sn.cloneDeep(se.value);
              Ce.value = ye.value[te.value - 4], se.value = D.slice(0, F.value * 3), m.value.style.paddingLeft = Ce.value + "px", h.nextTick(() => {
                ve.value = Ce.value, sn.debounce(() => Rt(x), 500);
              });
            }
          });
        };
        let Ar = ["center", "left", "right"];
        return (x, D) => (h.openBlock(), h.createElementBlock("div", { id: "dy-table-scroll-container", ref_key: "tableWrapper", ref: $, class: h.normalizeClass(["dy-vt__wrapper_body", { "dy-vt__wrapper_body-border": w.border }]), style: h.normalizeStyle({ height: w.height + "px", width: w.width + "px" }) }, [h.createElementVNode("table", { ref_key: "dyTableWrapper", ref: M, class: h.normalizeClass(["dy-table--border-wrapper", [{ "dy-table--striped": w.stripe }]]), border: 0, cellspacing: "0", cellpadding: "0", style: h.normalizeStyle({ height: h.unref(k) + "px", width: h.unref(ie) + "px" }) }, [h.createElementVNode("tbody", { ref_key: "scrollBody", ref: m, class: "scroll-container" }, [(h.openBlock(true), h.createElementBlock(h.Fragment, null, h.renderList(h.unref(N), (P, Y) => (h.openBlock(), h.createElementBlock("tr", { key: `tbody_${Math.random() * Y}`, class: "dy-vt-wrapper-tr" }, [(h.openBlock(true), h.createElementBlock(h.Fragment, null, h.renderList(h.unref(se), (Oe, Sr) => (h.openBlock(), h.createElementBlock("td", { key: `tcolumn_${Oe[Sr]}_${Math.random() * Y}`, class: h.normalizeClass(["dy-table__cell", [{ "dy-table__cell-border": w.border }, `dy-table_cell-text-${h.unref(Ar).includes(Oe.align) ? Oe.align : "center"}`]]), style: h.normalizeStyle({ width: O(Oe).realWidth + "px", height: W.value[h.unref(L) * (h.unref(ee) - 4) + Y] + "px" }) }, [h.createVNode(qi, { data: P, index: Y, column: Oe, "key-prop": Oe.prop }, null, 8, ["data", "index", "column", "key-prop"])], 6))), 128))]))), 128))], 512)], 6)], 6));
      } }), Np = "", Pf = ut(Df, [["__scopeId", "data-v-9e6c191d"]]), Hf = (w) => (h.pushScopeId("data-v-24149a87"), w = w(), h.popScopeId(), w), Uf = { class: "dy-vtable" }, Gf = Hf(() => h.createElementVNode("tfoot", null, null, -1)), $f = h.defineComponent({ name: "DyVirtualTable" }), zf = h.defineComponent({ ...$f, props: { columns: { type: Array, default() {
        return [];
      } }, ...it, border: { type: Boolean, default: true } }, setup(w) {
        const V = w, f = h.ref(null), C = h.ref(null), O = (L) => (L = Bf(L), L), de = h.ref(), $ = h.ref();
        h.onMounted(() => {
          let L = O(V.height), ee = O(f.value.headerHeight || 0);
          de.value = L - ee, $.value = V.width;
        }), h.watch(() => C.value, (L, ee) => {
        }, { deep: true });
        let M = h.ref(0), m = h.ref(0);
        const k = (L) => {
          m.value = L;
        }, ie = (L) => {
          m.value = L;
        }, X = h.ref(0), Ge = (L) => {
          X.value = L;
        }, N = (L) => {
          M.value = L;
        };
        return (L, ee) => (h.openBlock(), h.createElementBlock("div", Uf, [h.createElementVNode("table", { border: 0, class: h.normalizeClass(["dy-table", { "dy-table-border": w.border }]), cellspacing: "0", cellpadding: "0" }, [h.createVNode(Mf, { ref_key: "headerWrapper", ref: f, "keep-scroll-left": h.unref(m), width: $.value, columns: w.columns, border: w.border, "max-width": X.value, onScrollLeft: k, onMaxScrollWidth: Ge }, null, 8, ["keep-scroll-left", "width", "columns", "border", "max-width"]), h.createVNode(Pf, h.mergeProps({ ref_key: "bodyWrapper", ref: C, height: de.value, width: $.value, columns: w.columns, border: w.border, data: L.data, stripe: L.stripe }, L.$attrs, { "max-width": X.value, "keep-scroll-left": h.unref(m), onScrollLeft: ie, onScrollTop: N }), null, 16, ["height", "width", "columns", "border", "data", "stripe", "max-width", "keep-scroll-left"]), Gf], 2)]));
      } }), Fp = "", kf = ut(zf, [["__scopeId", "data-v-24149a87"]]), Kf = h.defineComponent({ name: "CanvasTable" }), qf = h.defineComponent({ ...Kf, props: { data: { type: Array, default() {
        return () => [];
      } }, height: { type: Number, default: 300 }, width: { type: Number, default: 600 }, columns: { type: Array, default() {
        return () => [];
      } }, getCellClass: { type: Function, default() {
        return () => {
        };
      } }, getCellStyle: { type: Function, default() {
        return () => {
        };
      } } }, setup(w) {
        const V = w, f = h.ref();
        let C = null, O = 30, de = 20, $ = 8, M = h.ref(V.data.length), m = h.ref(V.columns.length), k = h.ref(V.data), ie = h.ref(V.columns), X = h.computed(() => If(m.value, V.width, ie.value)), Ge = h.computed(() => Of(f.value.getContext("2d"), M.value, k.value, ie.value, X.value, de));
        h.onMounted(() => {
          C = f.value.getContext("2d");
          let S = () => {
            let ne = 0;
            for (const pe in X.value)
              ne += X.value[pe];
            return ne;
          }, j = () => {
            let ne = O;
            for (const pe in Ge.value)
              ne += Ge.value[pe];
            return ne;
          };
          C.canvas.width = S(), C.canvas.height = j();
          let K = S(), ae = j();
          N(C, K, ae), xe(C, K, ae, M.value, m.value, O), L(C, K, ae, M.value, m.value, 0, O), ee(C, K, ae, M.value, m.value, 0, O), ue(C, K, ae, M.value, m.value, 0, O);
        });
        const N = (S, j, K) => {
          S.beginPath(), S.moveTo(0, 0), S.lineTo(j, 0), S.lineTo(j, K), S.moveTo(0, 0), S.lineTo(0, K), S.lineTo(j, K), S.strokeStyle = "#cccccc", S.lineWidth = 1, S.stroke();
        }, L = (S, j, K, ae, ne, pe = 0, be = 0, A = Ge.value) => {
          let W = be;
          for (let E = 0; E < ae; E++) {
            let F = A[E];
            W += F, S.beginPath(), S.moveTo(0, W), S.lineTo(j, W), S.strokeStyle = "#cccccc", S.lineWidth = 0.5, S.stroke();
          }
        }, ee = (S, j, K, ae, ne, pe = 0, be = 0) => {
          let A = pe;
          for (let W = 0; W < ne; W++) {
            let E = X.value[W];
            A += E, S.beginPath(), S.moveTo(A, 0), S.lineTo(A, K), S.strokeStyle = "#cccccc", S.lineWidth = 0.5, S.stroke();
          }
        }, ue = (S, j, K, ae, ne, pe = 0, be = 0) => {
          let A = pe;
          for (let W = 0; W < ne; W++) {
            let E = X.value[W], F = be;
            for (let te = 0; te < ae; te++) {
              let ye = Ge.value[te], se = k.value[te][ie.value[W].prop];
              S.moveTo(A, F), S.font = "14px";
              let ve = S.measureText(se), Le = ve.width, ft = F + ve.actualBoundingBoxAscent - ve.actualBoundingBoxDescent, gn = (ve.actualBoundingBoxAscent + ve.actualBoundingBoxDescent) * 1.5;
              Le > E ? Zi(S, se, A + $ / 2, 2 * ft - F, E - $, de) : S.fillText(se, Math.floor(E / 2 - Le / 2) + A, F + gn), F += ye;
            }
            A += E;
          }
        }, xe = (S, j, K, ae, ne, pe = 0, be = 0) => {
          L(S, j, 20, 1, ne, 0, 0, { 0: O }), ee(S, j, O, ae, ne), tn(S, j, K, 1, ne);
        }, tn = (S, j, K, ae, ne, pe = O) => {
          let be = 0;
          for (let A = 0; A < ne; A++) {
            let W = X.value[A], E = 0;
            for (let F = 0; F < ae; F++) {
              let te = ie.value[A].label;
              S.moveTo(be, E), S.font = "18px";
              let ye = S.measureText(te), se = ye.width, ve = E + ye.actualBoundingBoxAscent - ye.actualBoundingBoxDescent, Le = (E + pe + ye.actualBoundingBoxAscent + ye.actualBoundingBoxDescent) / 2;
              se > W ? Zi(S, te, be + $ / 2, 2 * ve - E, W - $, de) : S.fillText(te, Math.floor(W / 2 - se / 2) + be, E + Le), E += pe;
            }
            be += W;
          }
        };
        return (S, j) => (h.openBlock(), h.createElementBlock("canvas", { ref_key: "dyCanvas", ref: f }, " 抱歉，你的浏览器不支持 canvas 元素 （这些内容将会在不支持<canvas%gt;元素的浏览器或是禁用了 JavaScript 的浏览器内渲染并展现） ", 512));
      } }), Mp = "";
      let Yf = [kf, ut(qf, [["__scopeId", "data-v-41a2a8e6"]])];
      const Xi = (w) => {
        Yf.forEach((V) => {
          w.component(V.name, V);
        });
      };
      return typeof window < "u" && window.Vue && Xi(window.Vue), { install: Xi };
    });
  }
});
export default require_dy_virtual_table_umd();
/*! Bundled license information:

dy-virtual-table/dist/dy-virtual-table.umd.js:
  (**
  * @license
  * Lodash <https://lodash.com/>
  * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
  * Released under MIT license <https://lodash.com/license>
  * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
  * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  *)
*/
//# sourceMappingURL=dy-virtual-table.js.map
