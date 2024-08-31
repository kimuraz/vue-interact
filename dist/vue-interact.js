import { ref as Oe, watch as wt, computed as _n } from "vue";
var Yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lr(P) {
  return P && P.__esModule && Object.prototype.hasOwnProperty.call(P, "default") ? P.default : P;
}
var We = { exports: {} };
We.exports;
(function(P, R) {
  (function(C, I) {
    P.exports = I();
  })(Yr, function() {
    function C(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function(i) {
          return Object.getOwnPropertyDescriptor(t, i).enumerable;
        })), n.push.apply(n, r);
      }
      return n;
    }
    function I(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? C(Object(n), !0).forEach(function(r) {
          re(t, r, n[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach(function(r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
      }
      return t;
    }
    function M(t) {
      return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, M(t);
    }
    function k(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function W(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, ve(r.key), r);
      }
    }
    function O(t, e, n) {
      return e && W(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
    }
    function re(t, e, n) {
      return (e = ve(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    }
    function j(t, e) {
      if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && z(t, e);
    }
    function q(t) {
      return q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, q(t);
    }
    function z(t, e) {
      return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
        return n.__proto__ = r, n;
      }, z(t, e);
    }
    function ie(t) {
      if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function J(t) {
      var e = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }();
      return function() {
        var n, r = q(t);
        if (e) {
          var i = q(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return function(o, a) {
          if (a && (typeof a == "object" || typeof a == "function")) return a;
          if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return ie(o);
        }(this, n);
      };
    }
    function oe() {
      return oe = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
        var r = function(o, a) {
          for (; !Object.prototype.hasOwnProperty.call(o, a) && (o = q(o)) !== null; ) ;
          return o;
        }(t, e);
        if (r) {
          var i = Object.getOwnPropertyDescriptor(r, e);
          return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
        }
      }, oe.apply(this, arguments);
    }
    function ve(t) {
      var e = function(n, r) {
        if (typeof n != "object" || n === null) return n;
        var i = n[Symbol.toPrimitive];
        if (i !== void 0) {
          var o = i.call(n, r);
          if (typeof o != "object") return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(n);
      }(t, "string");
      return typeof e == "symbol" ? e : e + "";
    }
    var Et = function(t) {
      return !(!t || !t.Window) && t instanceof t.Window;
    }, Tt = void 0, ae = void 0;
    function St(t) {
      Tt = t;
      var e = t.document.createTextNode("");
      e.ownerDocument !== t.document && typeof t.wrap == "function" && t.wrap(e) === e && (t = t.wrap(t)), ae = t;
    }
    function $(t) {
      return Et(t) ? t : (t.ownerDocument || t).defaultView || ae.window;
    }
    typeof window < "u" && window && St(window);
    var ke = function(t) {
      return !!t && M(t) === "object";
    }, _t = function(t) {
      return typeof t == "function";
    }, d = { window: function(t) {
      return t === ae || Et(t);
    }, docFrag: function(t) {
      return ke(t) && t.nodeType === 11;
    }, object: ke, func: _t, number: function(t) {
      return typeof t == "number";
    }, bool: function(t) {
      return typeof t == "boolean";
    }, string: function(t) {
      return typeof t == "string";
    }, element: function(t) {
      if (!t || M(t) !== "object") return !1;
      var e = $(t) || ae;
      return /object|function/.test(typeof Element > "u" ? "undefined" : M(Element)) ? t instanceof Element || t instanceof e.Element : t.nodeType === 1 && typeof t.nodeName == "string";
    }, plainObject: function(t) {
      return ke(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString());
    }, array: function(t) {
      return ke(t) && t.length !== void 0 && _t(t.splice);
    } };
    function Ne(t) {
      var e = t.interaction;
      if (e.prepared.name === "drag") {
        var n = e.prepared.axis;
        n === "x" ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : n === "y" && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
      }
    }
    function Pt(t) {
      var e = t.iEvent, n = t.interaction;
      if (n.prepared.name === "drag") {
        var r = n.prepared.axis;
        if (r === "x" || r === "y") {
          var i = r === "x" ? "y" : "x";
          e.page[i] = n.coords.start.page[i], e.client[i] = n.coords.start.client[i], e.delta[i] = 0;
        }
      }
    }
    var De = { id: "actions/drag", install: function(t) {
      var e = t.actions, n = t.Interactable, r = t.defaults;
      n.prototype.draggable = De.draggable, e.map.drag = De, e.methodDict.drag = "draggable", r.actions.drag = De.defaults;
    }, listeners: { "interactions:before-action-move": Ne, "interactions:action-resume": Ne, "interactions:action-move": Pt, "auto-start:check": function(t) {
      var e = t.interaction, n = t.interactable, r = t.buttons, i = n.options.drag;
      if (i && i.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || r & n.options.drag.mouseButtons)) return t.action = { name: "drag", axis: i.lockAxis === "start" ? i.startAxis : i.lockAxis }, !1;
    } }, draggable: function(t) {
      return d.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : d.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
    }, beforeMove: Ne, move: Pt, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    }, filterEventType: function(t) {
      return t.search("drag") === 0;
    } }, Ot = De, L = { init: function(t) {
      var e = t;
      L.document = e.document, L.DocumentFragment = e.DocumentFragment || pe, L.SVGElement = e.SVGElement || pe, L.SVGSVGElement = e.SVGSVGElement || pe, L.SVGElementInstance = e.SVGElementInstance || pe, L.Element = e.Element || pe, L.HTMLElement = e.HTMLElement || L.Element, L.Event = e.Event, L.Touch = e.Touch || pe, L.PointerEvent = e.PointerEvent || e.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function pe() {
    }
    var A = L, V = { init: function(t) {
      var e = A.Element, n = t.navigator || {};
      V.supportsTouch = "ontouchstart" in t || d.func(t.DocumentTouch) && A.document instanceof t.DocumentTouch, V.supportsPointerEvent = n.pointerEnabled !== !1 && !!A.PointerEvent, V.isIOS = /iP(hone|od|ad)/.test(n.platform), V.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), V.isIe9 = /MSIE 9/.test(n.userAgent), V.isOperaMobile = n.appName === "Opera" && V.supportsTouch && /Presto/.test(n.userAgent), V.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", V.pEventTypes = V.supportsPointerEvent ? A.PointerEvent === t.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, V.wheelEvent = A.document && "onmousewheel" in A.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, B = V;
    function se(t, e) {
      if (t.contains) return t.contains(e);
      for (; e; ) {
        if (e === t) return !0;
        e = e.parentNode;
      }
      return !1;
    }
    function kt(t, e) {
      for (; d.element(t); ) {
        if (Q(t, e)) return t;
        t = N(t);
      }
      return null;
    }
    function N(t) {
      var e = t.parentNode;
      if (d.docFrag(e)) {
        for (; (e = e.host) && d.docFrag(e); ) ;
        return e;
      }
      return e;
    }
    function Q(t, e) {
      return ae !== Tt && (e = e.replace(/\/deep\//g, " ")), t[B.prefixedMatchesSelector](e);
    }
    var Ue = function(t) {
      return t.parentNode || t.host;
    };
    function Dt(t, e) {
      for (var n, r = [], i = t; (n = Ue(i)) && i !== e && n !== i.ownerDocument; ) r.unshift(i), i = n;
      return r;
    }
    function He(t, e, n) {
      for (; d.element(t); ) {
        if (Q(t, e)) return !0;
        if ((t = N(t)) === n) return Q(t, e);
      }
      return !1;
    }
    function It(t) {
      return t.correspondingUseElement || t;
    }
    function Ke(t) {
      var e = t instanceof A.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
      return e && { left: e.left, right: e.right, top: e.top, bottom: e.bottom, width: e.width || e.right - e.left, height: e.height || e.bottom - e.top };
    }
    function Je(t) {
      var e, n = Ke(t);
      if (!B.isIOS7 && n) {
        var r = { x: (e = (e = $(t)) || ae).scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };
        n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y;
      }
      return n;
    }
    function Mt(t) {
      for (var e = []; t; ) e.push(t), t = N(t);
      return e;
    }
    function zt(t) {
      return !!d.string(t) && (A.document.querySelector(t), !0);
    }
    function x(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function At(t, e, n) {
      return t === "parent" ? N(n) : t === "self" ? e.getRect(n) : kt(n, t);
    }
    function he(t, e, n, r) {
      var i = t;
      return d.string(i) ? i = At(i, e, n) : d.func(i) && (i = i.apply(void 0, r)), d.element(i) && (i = Je(i)), i;
    }
    function Ie(t) {
      return t && { x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top };
    }
    function Qe(t) {
      return !t || "x" in t && "y" in t || ((t = x({}, t)).x = t.left || 0, t.y = t.top || 0, t.width = t.width || (t.right || 0) - t.x, t.height = t.height || (t.bottom || 0) - t.y), t;
    }
    function Me(t, e, n) {
      t.left && (e.left += n.x), t.right && (e.right += n.x), t.top && (e.top += n.y), t.bottom && (e.bottom += n.y), e.width = e.right - e.left, e.height = e.bottom - e.top;
    }
    function ge(t, e, n) {
      var r = n && t.options[n];
      return Ie(he(r && r.origin || t.options.origin, t, e, [t && e])) || { x: 0, y: 0 };
    }
    function ce(t, e) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(c) {
        return !0;
      }, r = arguments.length > 3 ? arguments[3] : void 0;
      if (r = r || {}, d.string(t) && t.search(" ") !== -1 && (t = Rt(t)), d.array(t)) return t.forEach(function(c) {
        return ce(c, e, n, r);
      }), r;
      if (d.object(t) && (e = t, t = ""), d.func(e) && n(t)) r[t] = r[t] || [], r[t].push(e);
      else if (d.array(e)) for (var i = 0, o = e; i < o.length; i++) {
        var a = o[i];
        ce(t, a, n, r);
      }
      else if (d.object(e)) for (var s in e)
        ce(Rt(s).map(function(c) {
          return "".concat(t).concat(c);
        }), e[s], n, r);
      return r;
    }
    function Rt(t) {
      return t.trim().split(/ +/);
    }
    var me = function(t, e) {
      return Math.sqrt(t * t + e * e);
    }, Pn = ["webkit", "moz"];
    function ze(t, e) {
      t.__set || (t.__set = {});
      var n = function(i) {
        if (Pn.some(function(o) {
          return i.indexOf(o) === 0;
        })) return 1;
        typeof t[i] != "function" && i !== "__set" && Object.defineProperty(t, i, { get: function() {
          return i in t.__set ? t.__set[i] : t.__set[i] = e[i];
        }, set: function(o) {
          t.__set[i] = o;
        }, configurable: !0 });
      };
      for (var r in e) n(r);
      return t;
    }
    function Ae(t, e) {
      t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp;
    }
    function Ct(t) {
      t.page.x = 0, t.page.y = 0, t.client.x = 0, t.client.y = 0;
    }
    function jt(t) {
      return t instanceof A.Event || t instanceof A.Touch;
    }
    function Re(t, e, n) {
      return t = t || "page", (n = n || {}).x = e[t + "X"], n.y = e[t + "Y"], n;
    }
    function Ft(t, e) {
      return e = e || { x: 0, y: 0 }, B.isOperaMobile && jt(t) ? (Re("screen", t, e), e.x += window.scrollX, e.y += window.scrollY) : Re("page", t, e), e;
    }
    function ye(t) {
      return d.number(t.pointerId) ? t.pointerId : t.identifier;
    }
    function On(t, e, n) {
      var r = e.length > 1 ? Xt(e) : e[0];
      Ft(r, t.page), function(i, o) {
        o = o || {}, B.isOperaMobile && jt(i) ? Re("screen", i, o) : Re("client", i, o);
      }(r, t.client), t.timeStamp = n;
    }
    function Ze(t) {
      var e = [];
      return d.array(t) ? (e[0] = t[0], e[1] = t[1]) : t.type === "touchend" ? t.touches.length === 1 ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : t.touches.length === 0 && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e;
    }
    function Xt(t) {
      for (var e = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n = 0; n < t.length; n++) {
        var r = t[n];
        for (var i in e) e[i] += r[i];
      }
      for (var o in e) e[o] /= t.length;
      return e;
    }
    function et(t) {
      if (!t.length) return null;
      var e = Ze(t), n = Math.min(e[0].pageX, e[1].pageX), r = Math.min(e[0].pageY, e[1].pageY), i = Math.max(e[0].pageX, e[1].pageX), o = Math.max(e[0].pageY, e[1].pageY);
      return { x: n, y: r, left: n, top: r, right: i, bottom: o, width: i - n, height: o - r };
    }
    function tt(t, e) {
      var n = e + "X", r = e + "Y", i = Ze(t), o = i[0][n] - i[1][n], a = i[0][r] - i[1][r];
      return me(o, a);
    }
    function nt(t, e) {
      var n = e + "X", r = e + "Y", i = Ze(t), o = i[1][n] - i[0][n], a = i[1][r] - i[0][r];
      return 180 * Math.atan2(a, o) / Math.PI;
    }
    function Yt(t) {
      return d.string(t.pointerType) ? t.pointerType : d.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : /touch/.test(t.type || "") || t instanceof A.Touch ? "touch" : "mouse";
    }
    function Lt(t) {
      var e = d.func(t.composedPath) ? t.composedPath() : t.path;
      return [It(e ? e[0] : t.target), It(t.currentTarget)];
    }
    var Ce = function() {
      function t(e) {
        k(this, t), this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = e;
      }
      return O(t, [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }]), t;
    }();
    Object.defineProperty(Ce.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Vt = function(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        t.push(r);
      }
      return t;
    }, qt = function(t) {
      return Vt([], t);
    }, be = function(t, e) {
      for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return n;
      return -1;
    }, xe = function(t, e) {
      return t[be(t, e)];
    }, fe = function(t) {
      j(n, t);
      var e = J(n);
      function n(r, i, o) {
        var a;
        k(this, n), (a = e.call(this, i._interaction)).dropzone = void 0, a.dragEvent = void 0, a.relatedTarget = void 0, a.draggable = void 0, a.propagationStopped = !1, a.immediatePropagationStopped = !1;
        var s = o === "dragleave" ? r.prev : r.cur, c = s.element, u = s.dropzone;
        return a.type = o, a.target = c, a.currentTarget = c, a.dropzone = u, a.dragEvent = i, a.relatedTarget = i.target, a.draggable = i.interactable, a.timeStamp = i.timeStamp, a;
      }
      return O(n, [{ key: "reject", value: function() {
        var r = this, i = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && i.cur.dropzone === this.dropzone && i.cur.element === this.target) if (i.prev.dropzone = this.dropzone, i.prev.element = this.target, i.rejected = !0, i.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
          var o = i.activeDrops, a = be(o, function(c) {
            var u = c.dropzone, l = c.element;
            return u === r.dropzone && l === r.target;
          });
          i.activeDrops.splice(a, 1);
          var s = new n(i, this.dragEvent, "dropdeactivate");
          s.dropzone = this.dropzone, s.target = this.target, this.dropzone.fire(s);
        } else this.dropzone.fire(new n(i, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }]), n;
    }(Ce);
    function Bt(t, e) {
      for (var n = 0, r = t.slice(); n < r.length; n++) {
        var i = r[n], o = i.dropzone, a = i.element;
        e.dropzone = o, e.target = a, o.fire(e), e.propagationStopped = e.immediatePropagationStopped = !1;
      }
    }
    function rt(t, e) {
      for (var n = function(o, a) {
        for (var s = [], c = 0, u = o.interactables.list; c < u.length; c++) {
          var l = u[c];
          if (l.options.drop.enabled) {
            var p = l.options.drop.accept;
            if (!(d.element(p) && p !== a || d.string(p) && !Q(a, p) || d.func(p) && !p({ dropzone: l, draggableElement: a }))) for (var f = 0, h = l.getAllElements(); f < h.length; f++) {
              var v = h[f];
              v !== a && s.push({ dropzone: l, element: v, rect: l.getRect(v) });
            }
          }
        }
        return s;
      }(t, e), r = 0; r < n.length; r++) {
        var i = n[r];
        i.rect = i.dropzone.getRect(i.element);
      }
      return n;
    }
    function Gt(t, e, n) {
      for (var r = t.dropState, i = t.interactable, o = t.element, a = [], s = 0, c = r.activeDrops; s < c.length; s++) {
        var u = c[s], l = u.dropzone, p = u.element, f = u.rect, h = l.dropCheck(e, n, i, o, p, f);
        a.push(h ? p : null);
      }
      var v = function(g) {
        for (var y, m, b, T = [], _ = 0; _ < g.length; _++) {
          var w = g[_], S = g[y];
          if (w && _ !== y) if (S) {
            var X = Ue(w), D = Ue(S);
            if (X !== w.ownerDocument) if (D !== w.ownerDocument) if (X !== D) {
              T = T.length ? T : Dt(S);
              var Y = void 0;
              if (S instanceof A.HTMLElement && w instanceof A.SVGElement && !(w instanceof A.SVGSVGElement)) {
                if (w === D) continue;
                Y = w.ownerSVGElement;
              } else Y = w;
              for (var G = Dt(Y, S.ownerDocument), K = 0; G[K] && G[K] === T[K]; ) K++;
              var Ge = [G[K - 1], G[K], T[K]];
              if (Ge[0]) for (var Pe = Ge[0].lastChild; Pe; ) {
                if (Pe === Ge[1]) {
                  y = _, T = G;
                  break;
                }
                if (Pe === Ge[2]) break;
                Pe = Pe.previousSibling;
              }
            } else b = S, (parseInt($(m = w).getComputedStyle(m).zIndex, 10) || 0) >= (parseInt($(b).getComputedStyle(b).zIndex, 10) || 0) && (y = _);
            else y = _;
          } else y = _;
        }
        return y;
      }(a);
      return r.activeDrops[v] || null;
    }
    function it(t, e, n) {
      var r = t.dropState, i = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return n.type === "dragstart" && (i.activate = new fe(r, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), n.type === "dragend" && (i.deactivate = new fe(r, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (i.leave = new fe(r, n, "dragleave"), n.dragLeave = i.leave.target = r.prev.element, n.prevDropzone = i.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (i.enter = new fe(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), n.type === "dragend" && r.cur.dropzone && (i.drop = new fe(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), n.type === "dragmove" && r.cur.dropzone && (i.move = new fe(r, n, "dropmove"), n.dropzone = r.cur.dropzone)), i;
    }
    function ot(t, e) {
      var n = t.dropState, r = n.activeDrops, i = n.cur, o = n.prev;
      e.leave && o.dropzone.fire(e.leave), e.enter && i.dropzone.fire(e.enter), e.move && i.dropzone.fire(e.move), e.drop && i.dropzone.fire(e.drop), e.deactivate && Bt(r, e.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
    }
    function Wt(t, e) {
      var n = t.interaction, r = t.iEvent, i = t.event;
      if (r.type === "dragmove" || r.type === "dragend") {
        var o = n.dropState;
        e.dynamicDrop && (o.activeDrops = rt(e, n.element));
        var a = r, s = Gt(n, a, i);
        o.rejected = o.rejected && !!s && s.dropzone === o.cur.dropzone && s.element === o.cur.element, o.cur.dropzone = s && s.dropzone, o.cur.element = s && s.element, o.events = it(n, 0, a);
      }
    }
    var $t = { id: "actions/drop", install: function(t) {
      var e = t.actions, n = t.interactStatic, r = t.Interactable, i = t.defaults;
      t.usePlugin(Ot), r.prototype.dropzone = function(o) {
        return function(a, s) {
          if (d.object(s)) {
            if (a.options.drop.enabled = s.enabled !== !1, s.listeners) {
              var c = ce(s.listeners), u = Object.keys(c).reduce(function(p, f) {
                return p[/^(enter|leave)/.test(f) ? "drag".concat(f) : /^(activate|deactivate|move)/.test(f) ? "drop".concat(f) : f] = c[f], p;
              }, {}), l = a.options.drop.listeners;
              l && a.off(l), a.on(u), a.options.drop.listeners = u;
            }
            return d.func(s.ondrop) && a.on("drop", s.ondrop), d.func(s.ondropactivate) && a.on("dropactivate", s.ondropactivate), d.func(s.ondropdeactivate) && a.on("dropdeactivate", s.ondropdeactivate), d.func(s.ondragenter) && a.on("dragenter", s.ondragenter), d.func(s.ondragleave) && a.on("dragleave", s.ondragleave), d.func(s.ondropmove) && a.on("dropmove", s.ondropmove), /^(pointer|center)$/.test(s.overlap) ? a.options.drop.overlap = s.overlap : d.number(s.overlap) && (a.options.drop.overlap = Math.max(Math.min(1, s.overlap), 0)), "accept" in s && (a.options.drop.accept = s.accept), "checker" in s && (a.options.drop.checker = s.checker), a;
          }
          return d.bool(s) ? (a.options.drop.enabled = s, a) : a.options.drop;
        }(this, o);
      }, r.prototype.dropCheck = function(o, a, s, c, u, l) {
        return function(p, f, h, v, g, y, m) {
          var b = !1;
          if (!(m = m || p.getRect(y))) return !!p.options.drop.checker && p.options.drop.checker(f, h, b, p, y, v, g);
          var T = p.options.drop.overlap;
          if (T === "pointer") {
            var _ = ge(v, g, "drag"), w = Ft(f);
            w.x += _.x, w.y += _.y;
            var S = w.x > m.left && w.x < m.right, X = w.y > m.top && w.y < m.bottom;
            b = S && X;
          }
          var D = v.getRect(g);
          if (D && T === "center") {
            var Y = D.left + D.width / 2, G = D.top + D.height / 2;
            b = Y >= m.left && Y <= m.right && G >= m.top && G <= m.bottom;
          }
          return D && d.number(T) && (b = Math.max(0, Math.min(m.right, D.right) - Math.max(m.left, D.left)) * Math.max(0, Math.min(m.bottom, D.bottom) - Math.max(m.top, D.top)) / (D.width * D.height) >= T), p.options.drop.checker && (b = p.options.drop.checker(f, h, b, p, y, v, g)), b;
        }(this, o, a, s, c, u, l);
      }, n.dynamicDrop = function(o) {
        return d.bool(o) ? (t.dynamicDrop = o, n) : t.dynamicDrop;
      }, x(e.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), e.methodDict.drop = "dropzone", t.dynamicDrop = !1, i.actions.drop = $t.defaults;
    }, listeners: { "interactions:before-action-start": function(t) {
      var e = t.interaction;
      e.prepared.name === "drag" && (e.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(t, e) {
      var n = t.interaction, r = (t.event, t.iEvent);
      if (n.prepared.name === "drag") {
        var i = n.dropState;
        i.activeDrops = [], i.events = {}, i.activeDrops = rt(e, n.element), i.events = it(n, 0, r), i.events.activate && (Bt(i.activeDrops, i.events.activate), e.fire("actions/drop:start", { interaction: n, dragEvent: r }));
      }
    }, "interactions:action-move": Wt, "interactions:after-action-move": function(t, e) {
      var n = t.interaction, r = t.iEvent;
      if (n.prepared.name === "drag") {
        var i = n.dropState;
        ot(n, i.events), e.fire("actions/drop:move", { interaction: n, dragEvent: r }), i.events = {};
      }
    }, "interactions:action-end": function(t, e) {
      if (t.interaction.prepared.name === "drag") {
        var n = t.interaction, r = t.iEvent;
        Wt(t, e), ot(n, n.dropState.events), e.fire("actions/drop:end", { interaction: n, dragEvent: r });
      }
    }, "interactions:stop": function(t) {
      var e = t.interaction;
      if (e.prepared.name === "drag") {
        var n = e.dropState;
        n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1);
      }
    } }, getActiveDrops: rt, getDrop: Gt, getDropEvents: it, fireDropEvents: ot, filterEventType: function(t) {
      return t.search("drag") === 0 || t.search("drop") === 0;
    }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, kn = $t;
    function at(t) {
      var e = t.interaction, n = t.iEvent, r = t.phase;
      if (e.prepared.name === "gesture") {
        var i = e.pointers.map(function(u) {
          return u.pointer;
        }), o = r === "start", a = r === "end", s = e.interactable.options.deltaSource;
        if (n.touches = [i[0], i[1]], o) n.distance = tt(i, s), n.box = et(i), n.scale = 1, n.ds = 0, n.angle = nt(i, s), n.da = 0, e.gesture.startDistance = n.distance, e.gesture.startAngle = n.angle;
        else if (a || e.pointers.length < 2) {
          var c = e.prevEvent;
          n.distance = c.distance, n.box = c.box, n.scale = c.scale, n.ds = 0, n.angle = c.angle, n.da = 0;
        } else n.distance = tt(i, s), n.box = et(i), n.scale = n.distance / e.gesture.startDistance, n.angle = nt(i, s), n.ds = n.scale - e.gesture.scale, n.da = n.angle - e.gesture.angle;
        e.gesture.distance = n.distance, e.gesture.angle = n.angle, d.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale);
      }
    }
    var st = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t) {
      var e = t.actions, n = t.Interactable, r = t.defaults;
      n.prototype.gesturable = function(i) {
        return d.object(i) ? (this.options.gesture.enabled = i.enabled !== !1, this.setPerAction("gesture", i), this.setOnEvents("gesture", i), this) : d.bool(i) ? (this.options.gesture.enabled = i, this) : this.options.gesture;
      }, e.map.gesture = st, e.methodDict.gesture = "gesturable", r.actions.gesture = st.defaults;
    }, listeners: { "interactions:action-start": at, "interactions:action-move": at, "interactions:action-end": at, "interactions:new": function(t) {
      t.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(t) {
      if (!(t.interaction.pointers.length < 2)) {
        var e = t.interactable.options.gesture;
        if (e && e.enabled) return t.action = { name: "gesture" }, !1;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    }, filterEventType: function(t) {
      return t.search("gesture") === 0;
    } }, Dn = st;
    function In(t, e, n, r, i, o, a) {
      if (!e) return !1;
      if (e === !0) {
        var s = d.number(o.width) ? o.width : o.right - o.left, c = d.number(o.height) ? o.height : o.bottom - o.top;
        if (a = Math.min(a, Math.abs((t === "left" || t === "right" ? s : c) / 2)), s < 0 && (t === "left" ? t = "right" : t === "right" && (t = "left")), c < 0 && (t === "top" ? t = "bottom" : t === "bottom" && (t = "top")), t === "left") {
          var u = s >= 0 ? o.left : o.right;
          return n.x < u + a;
        }
        if (t === "top") {
          var l = c >= 0 ? o.top : o.bottom;
          return n.y < l + a;
        }
        if (t === "right") return n.x > (s >= 0 ? o.right : o.left) - a;
        if (t === "bottom") return n.y > (c >= 0 ? o.bottom : o.top) - a;
      }
      return !!d.element(r) && (d.element(e) ? e === r : He(r, e, i));
    }
    function Nt(t) {
      var e = t.iEvent, n = t.interaction;
      if (n.prepared.name === "resize" && n.resizeAxes) {
        var r = e;
        n.interactable.options.resize.square ? (n.resizeAxes === "y" ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, n.resizeAxes === "x" ? r.delta.y = 0 : n.resizeAxes === "y" && (r.delta.x = 0));
      }
    }
    var U, le, H = { id: "actions/resize", before: ["actions/drag"], install: function(t) {
      var e = t.actions, n = t.browser, r = t.Interactable, i = t.defaults;
      H.cursors = function(o) {
        return o.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(n), H.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function(o) {
        return function(a, s, c) {
          return d.object(s) ? (a.options.resize.enabled = s.enabled !== !1, a.setPerAction("resize", s), a.setOnEvents("resize", s), d.string(s.axis) && /^x$|^y$|^xy$/.test(s.axis) ? a.options.resize.axis = s.axis : s.axis === null && (a.options.resize.axis = c.defaults.actions.resize.axis), d.bool(s.preserveAspectRatio) ? a.options.resize.preserveAspectRatio = s.preserveAspectRatio : d.bool(s.square) && (a.options.resize.square = s.square), a) : d.bool(s) ? (a.options.resize.enabled = s, a) : a.options.resize;
        }(this, o, t);
      }, e.map.resize = H, e.methodDict.resize = "resizable", i.actions.resize = H.defaults;
    }, listeners: { "interactions:new": function(t) {
      t.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(t) {
      (function(e) {
        var n = e.iEvent, r = e.interaction;
        if (r.prepared.name === "resize" && r.prepared.edges) {
          var i = n, o = r.rect;
          r._rects = { start: x({}, o), corrected: x({}, o), previous: x({}, o), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, i.edges = r.prepared.edges, i.rect = r._rects.corrected, i.deltaRect = r._rects.delta;
        }
      })(t), Nt(t);
    }, "interactions:action-move": function(t) {
      (function(e) {
        var n = e.iEvent, r = e.interaction;
        if (r.prepared.name === "resize" && r.prepared.edges) {
          var i = n, o = r.interactable.options.resize.invert, a = o === "reposition" || o === "negate", s = r.rect, c = r._rects, u = c.start, l = c.corrected, p = c.delta, f = c.previous;
          if (x(f, l), a) {
            if (x(l, s), o === "reposition") {
              if (l.top > l.bottom) {
                var h = l.top;
                l.top = l.bottom, l.bottom = h;
              }
              if (l.left > l.right) {
                var v = l.left;
                l.left = l.right, l.right = v;
              }
            }
          } else l.top = Math.min(s.top, u.bottom), l.bottom = Math.max(s.bottom, u.top), l.left = Math.min(s.left, u.right), l.right = Math.max(s.right, u.left);
          for (var g in l.width = l.right - l.left, l.height = l.bottom - l.top, l) p[g] = l[g] - f[g];
          i.edges = r.prepared.edges, i.rect = l, i.deltaRect = p;
        }
      })(t), Nt(t);
    }, "interactions:action-end": function(t) {
      var e = t.iEvent, n = t.interaction;
      if (n.prepared.name === "resize" && n.prepared.edges) {
        var r = e;
        r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
      }
    }, "auto-start:check": function(t) {
      var e = t.interaction, n = t.interactable, r = t.element, i = t.rect, o = t.buttons;
      if (i) {
        var a = x({}, e.coords.cur.page), s = n.options.resize;
        if (s && s.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || o & s.mouseButtons)) {
          if (d.object(s.edges)) {
            var c = { left: !1, right: !1, top: !1, bottom: !1 };
            for (var u in c) c[u] = In(u, s.edges[u], a, e._latestPointer.eventTarget, r, i, s.margin || H.defaultMargin);
            c.left = c.left && !c.right, c.top = c.top && !c.bottom, (c.left || c.right || c.top || c.bottom) && (t.action = { name: "resize", edges: c });
          } else {
            var l = s.axis !== "y" && a.x > i.right - H.defaultMargin, p = s.axis !== "x" && a.y > i.bottom - H.defaultMargin;
            (l || p) && (t.action = { name: "resize", axes: (l ? "x" : "") + (p ? "y" : "") });
          }
          return !t.action && void 0;
        }
      }
    } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t) {
      var e = t.edges, n = t.axis, r = t.name, i = H.cursors, o = null;
      if (n) o = i[r + n];
      else if (e) {
        for (var a = "", s = 0, c = ["top", "bottom", "left", "right"]; s < c.length; s++) {
          var u = c[s];
          e[u] && (a += u);
        }
        o = i[a];
      }
      return o;
    }, filterEventType: function(t) {
      return t.search("resize") === 0;
    }, defaultMargin: null }, Mn = H, zn = { id: "actions", install: function(t) {
      t.usePlugin(Dn), t.usePlugin(Mn), t.usePlugin(Ot), t.usePlugin(kn);
    } }, Ut = 0, Z = { request: function(t) {
      return U(t);
    }, cancel: function(t) {
      return le(t);
    }, init: function(t) {
      if (U = t.requestAnimationFrame, le = t.cancelAnimationFrame, !U) for (var e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length; n++) {
        var r = e[n];
        U = t["".concat(r, "RequestAnimationFrame")], le = t["".concat(r, "CancelAnimationFrame")] || t["".concat(r, "CancelRequestAnimationFrame")];
      }
      U = U && U.bind(t), le = le && le.bind(t), U || (U = function(i) {
        var o = Date.now(), a = Math.max(0, 16 - (o - Ut)), s = t.setTimeout(function() {
          i(o + a);
        }, a);
        return Ut = o + a, s;
      }, le = function(i) {
        return clearTimeout(i);
      });
    } }, E = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(t) {
      E.isScrolling = !0, Z.cancel(E.i), t.autoScroll = E, E.interaction = t, E.prevTime = E.now(), E.i = Z.request(E.scroll);
    }, stop: function() {
      E.isScrolling = !1, E.interaction && (E.interaction.autoScroll = null), Z.cancel(E.i);
    }, scroll: function() {
      var t = E.interaction, e = t.interactable, n = t.element, r = t.prepared.name, i = e.options[r].autoScroll, o = Ht(i.container, e, n), a = E.now(), s = (a - E.prevTime) / 1e3, c = i.speed * s;
      if (c >= 1) {
        var u = { x: E.x * c, y: E.y * c };
        if (u.x || u.y) {
          var l = Kt(o);
          d.window(o) ? o.scrollBy(u.x, u.y) : o && (o.scrollLeft += u.x, o.scrollTop += u.y);
          var p = Kt(o), f = { x: p.x - l.x, y: p.y - l.y };
          (f.x || f.y) && e.fire({ type: "autoscroll", target: n, interactable: e, delta: f, interaction: t, container: o });
        }
        E.prevTime = a;
      }
      E.isScrolling && (Z.cancel(E.i), E.i = Z.request(E.scroll));
    }, check: function(t, e) {
      var n;
      return (n = t.options[e].autoScroll) == null ? void 0 : n.enabled;
    }, onInteractionMove: function(t) {
      var e = t.interaction, n = t.pointer;
      if (e.interacting() && E.check(e.interactable, e.prepared.name)) if (e.simulation) E.x = E.y = 0;
      else {
        var r, i, o, a, s = e.interactable, c = e.element, u = e.prepared.name, l = s.options[u].autoScroll, p = Ht(l.container, s, c);
        if (d.window(p)) a = n.clientX < E.margin, r = n.clientY < E.margin, i = n.clientX > p.innerWidth - E.margin, o = n.clientY > p.innerHeight - E.margin;
        else {
          var f = Ke(p);
          a = n.clientX < f.left + E.margin, r = n.clientY < f.top + E.margin, i = n.clientX > f.right - E.margin, o = n.clientY > f.bottom - E.margin;
        }
        E.x = i ? 1 : a ? -1 : 0, E.y = o ? 1 : r ? -1 : 0, E.isScrolling || (E.margin = l.margin, E.speed = l.speed, E.start(e));
      }
    } };
    function Ht(t, e, n) {
      return (d.string(t) ? At(t, e, n) : t) || $(n);
    }
    function Kt(t) {
      return d.window(t) && (t = window.document.body), { x: t.scrollLeft, y: t.scrollTop };
    }
    var An = { id: "auto-scroll", install: function(t) {
      var e = t.defaults, n = t.actions;
      t.autoScroll = E, E.now = function() {
        return t.now();
      }, n.phaselessTypes.autoscroll = !0, e.perAction.autoScroll = E.defaults;
    }, listeners: { "interactions:new": function(t) {
      t.interaction.autoScroll = null;
    }, "interactions:destroy": function(t) {
      t.interaction.autoScroll = null, E.stop(), E.interaction && (E.interaction = null);
    }, "interactions:stop": E.stop, "interactions:action-move": function(t) {
      return E.onInteractionMove(t);
    } } }, Rn = An;
    function we(t, e) {
      var n = !1;
      return function() {
        return n || (ae.console.warn(e), n = !0), t.apply(this, arguments);
      };
    }
    function ct(t, e) {
      return t.name = e.name, t.axis = e.axis, t.edges = e.edges, t;
    }
    function Cn(t) {
      return d.bool(t) ? (this.options.styleCursor = t, this) : t === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    function jn(t) {
      return d.func(t) ? (this.options.actionChecker = t, this) : t === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    var Fn = { id: "auto-start/interactableMethods", install: function(t) {
      var e = t.Interactable;
      e.prototype.getAction = function(n, r, i, o) {
        var a = function(s, c, u, l, p) {
          var f = s.getRect(l), h = c.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[c.button], v = { action: null, interactable: s, interaction: u, element: l, rect: f, buttons: h };
          return p.fire("auto-start:check", v), v.action;
        }(this, r, i, o, t);
        return this.options.actionChecker ? this.options.actionChecker(n, r, a, this, o, i) : a;
      }, e.prototype.ignoreFrom = we(function(n) {
        return this._backCompatOption("ignoreFrom", n);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = we(function(n) {
        return this._backCompatOption("allowFrom", n);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = jn, e.prototype.styleCursor = Cn;
    } };
    function Jt(t, e, n, r, i) {
      return e.testIgnoreAllow(e.options[t.name], n, r) && e.options[t.name].enabled && je(e, n, t, i) ? t : null;
    }
    function Xn(t, e, n, r, i, o, a) {
      for (var s = 0, c = r.length; s < c; s++) {
        var u = r[s], l = i[s], p = u.getAction(e, n, t, l);
        if (p) {
          var f = Jt(p, u, l, o, a);
          if (f) return { action: f, interactable: u, element: l };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    function Qt(t, e, n, r, i) {
      var o = [], a = [], s = r;
      function c(l) {
        o.push(l), a.push(s);
      }
      for (; d.element(s); ) {
        o = [], a = [], i.interactables.forEachMatch(s, c);
        var u = Xn(t, e, n, o, a, r, i);
        if (u.action && !u.interactable.options[u.action.name].manualStart) return u;
        s = N(s);
      }
      return { action: null, interactable: null, element: null };
    }
    function Zt(t, e, n) {
      var r = e.action, i = e.interactable, o = e.element;
      r = r || { name: null }, t.interactable = i, t.element = o, ct(t.prepared, r), t.rect = i && r.name ? i.getRect(o) : null, tn(t, n), n.fire("autoStart:prepared", { interaction: t });
    }
    function je(t, e, n, r) {
      var i = t.options, o = i[n.name].max, a = i[n.name].maxPerElement, s = r.autoStart.maxInteractions, c = 0, u = 0, l = 0;
      if (!(o && a && s)) return !1;
      for (var p = 0, f = r.interactions.list; p < f.length; p++) {
        var h = f[p], v = h.prepared.name;
        if (h.interacting() && (++c >= s || h.interactable === t && ((u += v === n.name ? 1 : 0) >= o || h.element === e && (l++, v === n.name && l >= a))))
          return !1;
      }
      return s > 0;
    }
    function en(t, e) {
      return d.number(t) ? (e.autoStart.maxInteractions = t, this) : e.autoStart.maxInteractions;
    }
    function lt(t, e, n) {
      var r = n.autoStart.cursorElement;
      r && r !== t && (r.style.cursor = ""), t.ownerDocument.documentElement.style.cursor = e, t.style.cursor = e, n.autoStart.cursorElement = e ? t : null;
    }
    function tn(t, e) {
      var n = t.interactable, r = t.element, i = t.prepared;
      if (t.pointerType === "mouse" && n && n.options.styleCursor) {
        var o = "";
        if (i.name) {
          var a = n.options[i.name].cursorChecker;
          o = d.func(a) ? a(i, n, r, t._interacting) : e.actions.map[i.name].getCursor(i);
        }
        lt(t.element, o || "", e);
      } else e.autoStart.cursorElement && lt(e.autoStart.cursorElement, "", e);
    }
    var Yn = { id: "auto-start/base", before: ["actions"], install: function(t) {
      var e = t.interactStatic, n = t.defaults;
      t.usePlugin(Fn), n.base.actionChecker = null, n.base.styleCursor = !0, x(n.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e.maxInteractions = function(r) {
        return en(r, t);
      }, t.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: je, cursorElement: null };
    }, listeners: { "interactions:down": function(t, e) {
      var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget;
      n.interacting() || Zt(n, Qt(n, r, i, o, e), e);
    }, "interactions:move": function(t, e) {
      (function(n, r) {
        var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget;
        i.pointerType !== "mouse" || i.pointerIsDown || i.interacting() || Zt(i, Qt(i, o, a, s, r), r);
      })(t, e), function(n, r) {
        var i = n.interaction;
        if (i.pointerIsDown && !i.interacting() && i.pointerWasMoved && i.prepared.name) {
          r.fire("autoStart:before-start", n);
          var o = i.interactable, a = i.prepared.name;
          a && o && (o.options[a].manualStart || !je(o, i.element, i.prepared, r) ? i.stop() : (i.start(i.prepared, o, i.element), tn(i, r)));
        }
      }(t, e);
    }, "interactions:stop": function(t, e) {
      var n = t.interaction, r = n.interactable;
      r && r.options.styleCursor && lt(n.element, "", e);
    } }, maxInteractions: en, withinInteractionLimit: je, validateAction: Jt }, ut = Yn, Ln = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t, e) {
      var n = t.interaction, r = t.eventTarget, i = t.dx, o = t.dy;
      if (n.prepared.name === "drag") {
        var a = Math.abs(i), s = Math.abs(o), c = n.interactable.options.drag, u = c.startAxis, l = a > s ? "x" : a < s ? "y" : "xy";
        if (n.prepared.axis = c.lockAxis === "start" ? l[0] : c.lockAxis, l !== "xy" && u !== "xy" && u !== l) {
          n.prepared.name = null;
          for (var p = r, f = function(v) {
            if (v !== n.interactable) {
              var g = n.interactable.options.drag;
              if (!g.manualStart && v.testIgnoreAllow(g, p, r)) {
                var y = v.getAction(n.downPointer, n.downEvent, n, p);
                if (y && y.name === "drag" && function(m, b) {
                  if (!b) return !1;
                  var T = b.options.drag.startAxis;
                  return m === "xy" || T === "xy" || T === m;
                }(l, v) && ut.validateAction(y, v, p, r, e)) return v;
              }
            }
          }; d.element(p); ) {
            var h = e.interactables.forEachMatch(p, f);
            if (h) {
              n.prepared.name = "drag", n.interactable = h, n.element = p;
              break;
            }
            p = N(p);
          }
        }
      }
    } } };
    function pt(t) {
      var e = t.prepared && t.prepared.name;
      if (!e) return null;
      var n = t.interactable.options;
      return n[e].hold || n[e].delay;
    }
    var Vn = { id: "auto-start/hold", install: function(t) {
      var e = t.defaults;
      t.usePlugin(ut), e.perAction.hold = 0, e.perAction.delay = 0;
    }, listeners: { "interactions:new": function(t) {
      t.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(t) {
      var e = t.interaction, n = pt(e);
      n > 0 && (e.autoStartHoldTimer = setTimeout(function() {
        e.start(e.prepared, e.interactable, e.element);
      }, n));
    }, "interactions:move": function(t) {
      var e = t.interaction, n = t.duplicate;
      e.autoStartHoldTimer && e.pointerWasMoved && !n && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(t) {
      var e = t.interaction;
      pt(e) > 0 && (e.prepared.name = null);
    } }, getHoldDuration: pt }, qn = Vn, Bn = { id: "auto-start", install: function(t) {
      t.usePlugin(ut), t.usePlugin(qn), t.usePlugin(Ln);
    } }, Gn = function(t) {
      return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : d.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault;
    };
    function Wn(t) {
      var e = t.interaction, n = t.event;
      e.interactable && e.interactable.checkAndPreventDefault(n);
    }
    var nn = { id: "core/interactablePreventDefault", install: function(t) {
      var e = t.Interactable;
      e.prototype.preventDefault = Gn, e.prototype.checkAndPreventDefault = function(n) {
        return function(r, i, o) {
          var a = r.options.preventDefault;
          if (a !== "never") if (a !== "always") {
            if (i.events.supportsPassive && /^touch(start|move)$/.test(o.type)) {
              var s = $(o.target).document, c = i.getDocOptions(s);
              if (!c || !c.events || c.events.passive !== !1) return;
            }
            /^(mouse|pointer|touch)*(down|start)/i.test(o.type) || d.element(o.target) && Q(o.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || o.preventDefault();
          } else o.preventDefault();
        }(this, t, n);
      }, t.interactions.docEvents.push({ type: "dragstart", listener: function(n) {
        for (var r = 0, i = t.interactions.list; r < i.length; r++) {
          var o = i[r];
          if (o.element && (o.element === n.target || se(o.element, n.target))) return void o.interactable.checkAndPreventDefault(n);
        }
      } });
    }, listeners: ["down", "move", "up", "cancel"].reduce(function(t, e) {
      return t["interactions:".concat(e)] = Wn, t;
    }, {}) };
    function Fe(t, e) {
      if (e.phaselessTypes[t]) return !0;
      for (var n in e.map) if (t.indexOf(n) === 0 && t.substr(n.length) in e.phases) return !0;
      return !1;
    }
    function de(t) {
      var e = {};
      for (var n in t) {
        var r = t[n];
        d.plainObject(r) ? e[n] = de(r) : d.array(r) ? e[n] = qt(r) : e[n] = r;
      }
      return e;
    }
    var ft = function() {
      function t(e) {
        k(this, t), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e, this.result = Xe(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
      }
      return O(t, [{ key: "start", value: function(e, n) {
        var r, i, o = e.phase, a = this.interaction, s = function(u) {
          var l = u.interactable.options[u.prepared.name], p = l.modifiers;
          return p && p.length ? p : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(f) {
            var h = l[f];
            return h && h.enabled && { options: h, methods: h._methods };
          }).filter(function(f) {
            return !!f;
          });
        }(a);
        this.prepareStates(s), this.startEdges = x({}, a.edges), this.edges = x({}, this.startEdges), this.startOffset = (r = a.rect, i = n, r ? { left: i.x - r.left, top: i.y - r.top, right: r.right - i.x, bottom: r.bottom - i.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
        var c = this.fillArg({ phase: o, pageCoords: n, preEnd: !1 });
        return this.result = Xe(), this.startAll(c), this.result = this.setAll(c);
      } }, { key: "fillArg", value: function(e) {
        var n = this.interaction;
        return e.interaction = n, e.interactable = n.interactable, e.element = n.element, e.rect || (e.rect = n.rect), e.edges || (e.edges = this.startEdges), e.startOffset = this.startOffset, e;
      } }, { key: "startAll", value: function(e) {
        for (var n = 0, r = this.states; n < r.length; n++) {
          var i = r[n];
          i.methods.start && (e.state = i, i.methods.start(e));
        }
      } }, { key: "setAll", value: function(e) {
        var n = e.phase, r = e.preEnd, i = e.skipModifiers, o = e.rect, a = e.edges;
        e.coords = x({}, e.pageCoords), e.rect = x({}, o), e.edges = x({}, a);
        for (var s = i ? this.states.slice(i) : this.states, c = Xe(e.coords, e.rect), u = 0; u < s.length; u++) {
          var l, p = s[u], f = p.options, h = x({}, e.coords), v = null;
          (l = p.methods) != null && l.set && this.shouldDo(f, r, n) && (e.state = p, v = p.methods.set(e), Me(e.edges, e.rect, { x: e.coords.x - h.x, y: e.coords.y - h.y })), c.eventProps.push(v);
        }
        x(this.edges, e.edges), c.delta.x = e.coords.x - e.pageCoords.x, c.delta.y = e.coords.y - e.pageCoords.y, c.rectDelta.left = e.rect.left - o.left, c.rectDelta.right = e.rect.right - o.right, c.rectDelta.top = e.rect.top - o.top, c.rectDelta.bottom = e.rect.bottom - o.bottom;
        var g = this.result.coords, y = this.result.rect;
        if (g && y) {
          var m = c.rect.left !== y.left || c.rect.right !== y.right || c.rect.top !== y.top || c.rect.bottom !== y.bottom;
          c.changed = m || g.x !== c.coords.x || g.y !== c.coords.y;
        }
        return c;
      } }, { key: "applyToInteraction", value: function(e) {
        var n = this.interaction, r = e.phase, i = n.coords.cur, o = n.coords.start, a = this.result, s = this.startDelta, c = a.delta;
        r === "start" && x(this.startDelta, a.delta);
        for (var u = 0, l = [[o, s], [i, c]]; u < l.length; u++) {
          var p = l[u], f = p[0], h = p[1];
          f.page.x += h.x, f.page.y += h.y, f.client.x += h.x, f.client.y += h.y;
        }
        var v = this.result.rectDelta, g = e.rect || n.rect;
        g.left += v.left, g.right += v.right, g.top += v.top, g.bottom += v.bottom, g.width = g.right - g.left, g.height = g.bottom - g.top;
      } }, { key: "setAndApply", value: function(e) {
        var n = this.interaction, r = e.phase, i = e.preEnd, o = e.skipModifiers, a = this.setAll(this.fillArg({ preEnd: i, phase: r, pageCoords: e.modifiedCoords || n.coords.cur.page }));
        if (this.result = a, !a.changed && (!o || o < this.states.length) && n.interacting()) return !1;
        if (e.modifiedCoords) {
          var s = n.coords.cur.page, c = { x: e.modifiedCoords.x - s.x, y: e.modifiedCoords.y - s.y };
          a.coords.x += c.x, a.coords.y += c.y, a.delta.x += c.x, a.delta.y += c.y;
        }
        this.applyToInteraction(e);
      } }, { key: "beforeEnd", value: function(e) {
        var n = e.interaction, r = e.event, i = this.states;
        if (i && i.length) {
          for (var o = !1, a = 0; a < i.length; a++) {
            var s = i[a];
            e.state = s;
            var c = s.options, u = s.methods, l = u.beforeEnd && u.beforeEnd(e);
            if (l) return this.endResult = l, !1;
            o = o || !o && this.shouldDo(c, !0, e.phase, !0);
          }
          o && n.move({ event: r, preEnd: !0 });
        }
      } }, { key: "stop", value: function(e) {
        var n = e.interaction;
        if (this.states && this.states.length) {
          var r = x({ states: this.states, interactable: n.interactable, element: n.element, rect: null }, e);
          this.fillArg(r);
          for (var i = 0, o = this.states; i < o.length; i++) {
            var a = o[i];
            r.state = a, a.methods.stop && a.methods.stop(r);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(e) {
        this.states = [];
        for (var n = 0; n < e.length; n++) {
          var r = e[n], i = r.options, o = r.methods, a = r.name;
          this.states.push({ options: i, methods: o, index: n, name: a });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(e) {
        var n = e.interaction, r = n.coords, i = n.rect, o = n.modification;
        if (o.result) {
          for (var a = o.startDelta, s = o.result, c = s.delta, u = s.rectDelta, l = 0, p = [[r.start, a], [r.cur, c]]; l < p.length; l++) {
            var f = p[l], h = f[0], v = f[1];
            h.page.x -= v.x, h.page.y -= v.y, h.client.x -= v.x, h.client.y -= v.y;
          }
          i.left -= u.left, i.right -= u.right, i.top -= u.top, i.bottom -= u.bottom;
        }
      } }, { key: "shouldDo", value: function(e, n, r, i) {
        return !(!e || e.enabled === !1 || i && !e.endOnly || e.endOnly && !n || r === "start" && !e.setStart);
      } }, { key: "copyFrom", value: function(e) {
        this.startOffset = e.startOffset, this.startDelta = e.startDelta, this.startEdges = e.startEdges, this.edges = e.edges, this.states = e.states.map(function(n) {
          return de(n);
        }), this.result = Xe(x({}, e.result.coords), x({}, e.result.rect));
      } }, { key: "destroy", value: function() {
        for (var e in this) this[e] = null;
      } }]), t;
    }();
    function Xe(t, e) {
      return { rect: e, coords: t, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
    }
    function ee(t, e) {
      var n = t.defaults, r = { start: t.start, set: t.set, beforeEnd: t.beforeEnd, stop: t.stop }, i = function(o) {
        var a = o || {};
        for (var s in a.enabled = a.enabled !== !1, n) s in a || (a[s] = n[s]);
        var c = { options: a, methods: r, name: e, enable: function() {
          return a.enabled = !0, c;
        }, disable: function() {
          return a.enabled = !1, c;
        } };
        return c;
      };
      return e && typeof e == "string" && (i._defaults = n, i._methods = r), i;
    }
    function Ee(t) {
      var e = t.iEvent, n = t.interaction.modification.result;
      n && (e.modifiers = n.eventProps);
    }
    var $n = { id: "modifiers/base", before: ["actions"], install: function(t) {
      t.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(t) {
      var e = t.interaction;
      e.modification = new ft(e);
    }, "interactions:before-action-start": function(t) {
      var e = t.interaction, n = t.interaction.modification;
      n.start(t, e.coords.start.page), e.edges = n.edges, n.applyToInteraction(t);
    }, "interactions:before-action-move": function(t) {
      var e = t.interaction, n = e.modification, r = n.setAndApply(t);
      return e.edges = n.edges, r;
    }, "interactions:before-action-end": function(t) {
      var e = t.interaction, n = e.modification, r = n.beforeEnd(t);
      return e.edges = n.startEdges, r;
    }, "interactions:action-start": Ee, "interactions:action-move": Ee, "interactions:action-end": Ee, "interactions:after-action-start": function(t) {
      return t.interaction.modification.restoreInteractionCoords(t);
    }, "interactions:after-action-move": function(t) {
      return t.interaction.modification.restoreInteractionCoords(t);
    }, "interactions:stop": function(t) {
      return t.interaction.modification.stop(t);
    } } }, rn = $n, on = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, dt = function(t) {
      j(n, t);
      var e = J(n);
      function n(r, i, o, a, s, c, u) {
        var l;
        k(this, n), (l = e.call(this, r)).relatedTarget = null, l.screenX = void 0, l.screenY = void 0, l.button = void 0, l.buttons = void 0, l.ctrlKey = void 0, l.shiftKey = void 0, l.altKey = void 0, l.metaKey = void 0, l.page = void 0, l.client = void 0, l.delta = void 0, l.rect = void 0, l.x0 = void 0, l.y0 = void 0, l.t0 = void 0, l.dt = void 0, l.duration = void 0, l.clientX0 = void 0, l.clientY0 = void 0, l.velocity = void 0, l.speed = void 0, l.swipe = void 0, l.axes = void 0, l.preEnd = void 0, s = s || r.element;
        var p = r.interactable, f = (p && p.options || on).deltaSource, h = ge(p, s, o), v = a === "start", g = a === "end", y = v ? ie(l) : r.prevEvent, m = v ? r.coords.start : g ? { page: y.page, client: y.client, timeStamp: r.coords.cur.timeStamp } : r.coords.cur;
        return l.page = x({}, m.page), l.client = x({}, m.client), l.rect = x({}, r.rect), l.timeStamp = m.timeStamp, g || (l.page.x -= h.x, l.page.y -= h.y, l.client.x -= h.x, l.client.y -= h.y), l.ctrlKey = i.ctrlKey, l.altKey = i.altKey, l.shiftKey = i.shiftKey, l.metaKey = i.metaKey, l.button = i.button, l.buttons = i.buttons, l.target = s, l.currentTarget = s, l.preEnd = c, l.type = u || o + (a || ""), l.interactable = p, l.t0 = v ? r.pointers[r.pointers.length - 1].downTime : y.t0, l.x0 = r.coords.start.page.x - h.x, l.y0 = r.coords.start.page.y - h.y, l.clientX0 = r.coords.start.client.x - h.x, l.clientY0 = r.coords.start.client.y - h.y, l.delta = v || g ? { x: 0, y: 0 } : { x: l[f].x - y[f].x, y: l[f].y - y[f].y }, l.dt = r.coords.delta.timeStamp, l.duration = l.timeStamp - l.t0, l.velocity = x({}, r.coords.velocity[f]), l.speed = me(l.velocity.x, l.velocity.y), l.swipe = g || a === "inertiastart" ? l.getSwipe() : null, l;
      }
      return O(n, [{ key: "getSwipe", value: function() {
        var r = this._interaction;
        if (r.prevEvent.speed < 600 || this.timeStamp - r.prevEvent.timeStamp > 150) return null;
        var i = 180 * Math.atan2(r.prevEvent.velocityY, r.prevEvent.velocityX) / Math.PI;
        i < 0 && (i += 360);
        var o = 112.5 <= i && i < 247.5, a = 202.5 <= i && i < 337.5;
        return { up: a, down: !a && 22.5 <= i && i < 157.5, left: o, right: !o && (292.5 <= i || i < 67.5), angle: i, speed: r.prevEvent.speed, velocity: { x: r.prevEvent.velocityX, y: r.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }]), n;
    }(Ce);
    Object.defineProperties(dt.prototype, { pageX: { get: function() {
      return this.page.x;
    }, set: function(t) {
      this.page.x = t;
    } }, pageY: { get: function() {
      return this.page.y;
    }, set: function(t) {
      this.page.y = t;
    } }, clientX: { get: function() {
      return this.client.x;
    }, set: function(t) {
      this.client.x = t;
    } }, clientY: { get: function() {
      return this.client.y;
    }, set: function(t) {
      this.client.y = t;
    } }, dx: { get: function() {
      return this.delta.x;
    }, set: function(t) {
      this.delta.x = t;
    } }, dy: { get: function() {
      return this.delta.y;
    }, set: function(t) {
      this.delta.y = t;
    } }, velocityX: { get: function() {
      return this.velocity.x;
    }, set: function(t) {
      this.velocity.x = t;
    } }, velocityY: { get: function() {
      return this.velocity.y;
    }, set: function(t) {
      this.velocity.y = t;
    } } });
    var Nn = O(function t(e, n, r, i, o) {
      k(this, t), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e, this.pointer = n, this.event = r, this.downTime = i, this.downTarget = o;
    }), Un = function(t) {
      return t.interactable = "", t.element = "", t.prepared = "", t.pointerIsDown = "", t.pointerWasMoved = "", t._proxy = "", t;
    }({}), an = function(t) {
      return t.start = "", t.move = "", t.end = "", t.stop = "", t.interacting = "", t;
    }({}), Hn = 0, Kn = function() {
      function t(e) {
        var n = this, r = e.pointerType, i = e.scopeFire;
        k(this, t), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = we(function(l) {
          this.move(l);
        }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = Hn++, this._scopeFire = i, this.pointerType = r;
        var o = this;
        this._proxy = {};
        var a = function(l) {
          Object.defineProperty(n._proxy, l, { get: function() {
            return o[l];
          } });
        };
        for (var s in Un) a(s);
        var c = function(l) {
          Object.defineProperty(n._proxy, l, { value: function() {
            return o[l].apply(o, arguments);
          } });
        };
        for (var u in an) c(u);
        this._scopeFire("interactions:new", { interaction: this });
      }
      return O(t, [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(e, n, r) {
        var i = this.updatePointer(e, n, r, !0), o = this.pointers[i];
        this._scopeFire("interactions:down", { pointer: e, event: n, eventTarget: r, pointerIndex: i, pointerInfo: o, type: "down", interaction: this });
      } }, { key: "start", value: function(e, n, r) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (e.name === "gesture" ? 2 : 1) || !n.options[e.name].enabled) && (ct(this.prepared, e), this.interactable = n, this.element = r, this.rect = n.getRect(r), this.edges = this.prepared.edges ? x({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(e, n, r) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(e, n, r, !1);
        var i, o, a = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (i = this.coords.cur.client.x - this.coords.start.client.x, o = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = me(i, o) > this.pointerMoveTolerance);
        var s, c, u, l = this.getPointerIndex(e), p = { pointer: e, pointerIndex: l, pointerInfo: this.pointers[l], event: n, type: "move", eventTarget: r, dx: i, dy: o, duplicate: a, interaction: this };
        a || (s = this.coords.velocity, c = this.coords.delta, u = Math.max(c.timeStamp / 1e3, 1e-3), s.page.x = c.page.x / u, s.page.y = c.page.y / u, s.client.x = c.client.x / u, s.client.y = c.client.y / u, s.timeStamp = u), this._scopeFire("interactions:move", p), a || this.simulation || (this.interacting() && (p.type = null, this.move(p)), this.pointerWasMoved && Ae(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(e) {
        e && e.event || Ct(this.coords.delta), (e = x({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, e || {})).phase = "move", this._doPhase(e);
      } }, { key: "pointerUp", value: function(e, n, r, i) {
        var o = this.getPointerIndex(e);
        o === -1 && (o = this.updatePointer(e, n, r, !1));
        var a = /cancel$/i.test(n.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(a), { pointer: e, pointerIndex: o, pointerInfo: this.pointers[o], event: n, eventTarget: r, type: a, curEventTarget: i, interaction: this }), this.simulation || this.end(n), this.removePointer(e, n);
      } }, { key: "documentBlur", value: function(e) {
        this.end(e), this._scopeFire("interactions:blur", { event: e, type: "blur", interaction: this });
      } }, { key: "end", value: function(e) {
        var n;
        this._ending = !0, e = e || this._latestPointer.event, this.interacting() && (n = this._doPhase({ event: e, interaction: this, phase: "end" })), this._ending = !1, n === !0 && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(e) {
        var n = ye(e);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : be(this.pointers, function(r) {
          return r.id === n;
        });
      } }, { key: "getPointerInfo", value: function(e) {
        return this.pointers[this.getPointerIndex(e)];
      } }, { key: "updatePointer", value: function(e, n, r, i) {
        var o, a, s, c = ye(e), u = this.getPointerIndex(e), l = this.pointers[u];
        return i = i !== !1 && (i || /(down|start)$/i.test(n.type)), l ? l.pointer = e : (l = new Nn(c, e, n, null, null), u = this.pointers.length, this.pointers.push(l)), On(this.coords.cur, this.pointers.map(function(p) {
          return p.pointer;
        }), this._now()), o = this.coords.delta, a = this.coords.prev, s = this.coords.cur, o.page.x = s.page.x - a.page.x, o.page.y = s.page.y - a.page.y, o.client.x = s.client.x - a.client.x, o.client.y = s.client.y - a.client.y, o.timeStamp = s.timeStamp - a.timeStamp, i && (this.pointerIsDown = !0, l.downTime = this.coords.cur.timeStamp, l.downTarget = r, ze(this.downPointer, e), this.interacting() || (Ae(this.coords.start, this.coords.cur), Ae(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = !1)), this._updateLatestPointer(e, n, r), this._scopeFire("interactions:update-pointer", { pointer: e, event: n, eventTarget: r, down: i, pointerInfo: l, pointerIndex: u, interaction: this }), u;
      } }, { key: "removePointer", value: function(e, n) {
        var r = this.getPointerIndex(e);
        if (r !== -1) {
          var i = this.pointers[r];
          this._scopeFire("interactions:remove-pointer", { pointer: e, event: n, eventTarget: null, pointerIndex: r, pointerInfo: i, interaction: this }), this.pointers.splice(r, 1), this.pointerIsDown = !1;
        }
      } }, { key: "_updateLatestPointer", value: function(e, n, r) {
        this._latestPointer.pointer = e, this._latestPointer.event = n, this._latestPointer.eventTarget = r;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(e, n, r, i) {
        return new dt(this, e, this.prepared.name, n, this.element, r, i);
      } }, { key: "_fireEvent", value: function(e) {
        var n;
        (n = this.interactable) == null || n.fire(e), (!this.prevEvent || e.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = e);
      } }, { key: "_doPhase", value: function(e) {
        var n = e.event, r = e.phase, i = e.preEnd, o = e.type, a = this.rect;
        if (a && r === "move" && (Me(this.edges, a, this.coords.delta[this.interactable.options.deltaSource]), a.width = a.right - a.left, a.height = a.bottom - a.top), this._scopeFire("interactions:before-action-".concat(r), e) === !1) return !1;
        var s = e.iEvent = this._createPreparedEvent(n, r, i, o);
        return this._scopeFire("interactions:action-".concat(r), e), r === "start" && (this.prevEvent = s), this._fireEvent(s), this._scopeFire("interactions:after-action-".concat(r), e), !0;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]), t;
    }();
    function sn(t) {
      cn(t.interaction);
    }
    function cn(t) {
      if (!function(n) {
        return !(!n.offset.pending.x && !n.offset.pending.y);
      }(t)) return !1;
      var e = t.offset.pending;
      return vt(t.coords.cur, e), vt(t.coords.delta, e), Me(t.edges, t.rect, e), e.x = 0, e.y = 0, !0;
    }
    function Jn(t) {
      var e = t.x, n = t.y;
      this.offset.pending.x += e, this.offset.pending.y += n, this.offset.total.x += e, this.offset.total.y += n;
    }
    function vt(t, e) {
      var n = t.page, r = t.client, i = e.x, o = e.y;
      n.x += i, n.y += o, r.x += i, r.y += o;
    }
    an.offsetBy = "";
    var Qn = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t) {
      t.Interaction.prototype.offsetBy = Jn;
    }, listeners: { "interactions:new": function(t) {
      t.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(t) {
      return function(e) {
        e.pointerIsDown && (vt(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0);
      }(t.interaction);
    }, "interactions:before-action-start": sn, "interactions:before-action-move": sn, "interactions:before-action-end": function(t) {
      var e = t.interaction;
      if (cn(e)) return e.move({ offset: !0 }), e.end(), !1;
    }, "interactions:stop": function(t) {
      var e = t.interaction;
      e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0;
    } } }, ln = Qn, Zn = function() {
      function t(e) {
        k(this, t), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e;
      }
      return O(t, [{ key: "start", value: function(e) {
        var n = this.interaction, r = Ye(n);
        if (!r || !r.enabled) return !1;
        var i = n.coords.velocity.client, o = me(i.x, i.y), a = this.modification || (this.modification = new ft(n));
        if (a.copyFrom(n.modification), this.t0 = n._now(), this.allowResume = r.allowResume, this.v0 = o, this.currentOffset = { x: 0, y: 0 }, this.startCoords = n.coords.cur.page, this.modifierArg = a.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - n.coords.cur.timeStamp < 50 && o > r.minSpeed && o > r.endSpeed) this.startInertia();
        else {
          if (a.result = a.setAll(this.modifierArg), !a.result.changed) return !1;
          this.startSmoothEnd();
        }
        return n.modification.result.rect = null, n.offsetBy(this.targetOffset), n._doPhase({ interaction: n, event: e, phase: "inertiastart" }), n.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), n.modification.result.rect = null, this.active = !0, n.simulation = this, !0;
      } }, { key: "startInertia", value: function() {
        var e = this, n = this.interaction.coords.velocity.client, r = Ye(this.interaction), i = r.resistance, o = -Math.log(r.endSpeed / this.v0) / i;
        this.targetOffset = { x: (n.x - o) / i, y: (n.y - o) / i }, this.te = o, this.lambda_v0 = i / this.v0, this.one_ve_v0 = 1 - r.endSpeed / this.v0;
        var a = this.modification, s = this.modifierArg;
        s.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, a.result = a.setAll(s), a.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + a.result.delta.x, y: this.targetOffset.y + a.result.delta.y }), this.onNextFrame(function() {
          return e.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var e = this;
        this.smoothEnd = !0, this.isModified = !0, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return e.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(e) {
        var n = this;
        this.timeout = Z.request(function() {
          n.active && e();
        });
      } }, { key: "inertiaTick", value: function() {
        var e, n, r, i, o, a, s, c = this, u = this.interaction, l = Ye(u).resistance, p = (u._now() - this.t0) / 1e3;
        if (p < this.te) {
          var f, h = 1 - (Math.exp(-l * p) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (e = 0, n = 0, r = this.targetOffset.x, i = this.targetOffset.y, o = this.modifiedOffset.x, a = this.modifiedOffset.y, f = { x: un(s = h, e, r, o), y: un(s, n, i, a) }) : f = { x: this.targetOffset.x * h, y: this.targetOffset.y * h };
          var v = { x: f.x - this.currentOffset.x, y: f.y - this.currentOffset.y };
          this.currentOffset.x += v.x, this.currentOffset.y += v.y, u.offsetBy(v), u.move(), this.onNextFrame(function() {
            return c.inertiaTick();
          });
        } else u.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var e = this, n = this.interaction, r = n._now() - this.t0, i = Ye(n).smoothEndDuration;
        if (r < i) {
          var o = { x: pn(r, 0, this.targetOffset.x, i), y: pn(r, 0, this.targetOffset.y, i) }, a = { x: o.x - this.currentOffset.x, y: o.y - this.currentOffset.y };
          this.currentOffset.x += a.x, this.currentOffset.y += a.y, n.offsetBy(a), n.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return e.smoothEndTick();
          });
        } else n.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(e) {
        var n = e.pointer, r = e.event, i = e.eventTarget, o = this.interaction;
        o.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o.updatePointer(n, r, i, !0), o._doPhase({ interaction: o, event: r, phase: "resume" }), Ae(o.coords.prev, o.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = !1, this.interaction.simulation = null, Z.cancel(this.timeout);
      } }]), t;
    }();
    function Ye(t) {
      var e = t.interactable, n = t.prepared;
      return e && e.options && n.name && e.options[n.name].inertia;
    }
    var er = { id: "inertia", before: ["modifiers", "actions"], install: function(t) {
      var e = t.defaults;
      t.usePlugin(ln), t.usePlugin(rn), t.actions.phases.inertiastart = !0, t.actions.phases.resume = !0, e.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(t) {
      var e = t.interaction;
      e.inertia = new Zn(e);
    }, "interactions:before-action-end": function(t) {
      var e = t.interaction, n = t.event;
      return (!e._interacting || e.simulation || !e.inertia.start(n)) && null;
    }, "interactions:down": function(t) {
      var e = t.interaction, n = t.eventTarget, r = e.inertia;
      if (r.active) for (var i = n; d.element(i); ) {
        if (i === e.element) {
          r.resume(t);
          break;
        }
        i = N(i);
      }
    }, "interactions:stop": function(t) {
      var e = t.interaction.inertia;
      e.active && e.stop();
    }, "interactions:before-action-resume": function(t) {
      var e = t.interaction.modification;
      e.stop(t), e.start(t, t.interaction.coords.cur.page), e.applyToInteraction(t);
    }, "interactions:before-action-inertiastart": function(t) {
      return t.interaction.modification.setAndApply(t);
    }, "interactions:action-resume": Ee, "interactions:action-inertiastart": Ee, "interactions:after-action-inertiastart": function(t) {
      return t.interaction.modification.restoreInteractionCoords(t);
    }, "interactions:after-action-resume": function(t) {
      return t.interaction.modification.restoreInteractionCoords(t);
    } } };
    function un(t, e, n, r) {
      var i = 1 - t;
      return i * i * e + 2 * i * t * n + t * t * r;
    }
    function pn(t, e, n, r) {
      return -n * (t /= r) * (t - 2) + e;
    }
    var tr = er;
    function fn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (t.immediatePropagationStopped) break;
        r(t);
      }
    }
    var dn = function() {
      function t(e) {
        k(this, t), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = x({}, e || {});
      }
      return O(t, [{ key: "fire", value: function(e) {
        var n, r = this.global;
        (n = this.types[e.type]) && fn(e, n), !e.propagationStopped && r && (n = r[e.type]) && fn(e, n);
      } }, { key: "on", value: function(e, n) {
        var r = ce(e, n);
        for (e in r) this.types[e] = Vt(this.types[e] || [], r[e]);
      } }, { key: "off", value: function(e, n) {
        var r = ce(e, n);
        for (e in r) {
          var i = this.types[e];
          if (i && i.length) for (var o = 0, a = r[e]; o < a.length; o++) {
            var s = a[o], c = i.indexOf(s);
            c !== -1 && i.splice(c, 1);
          }
        }
      } }, { key: "getRect", value: function(e) {
        return null;
      } }]), t;
    }(), nr = function() {
      function t(e) {
        k(this, t), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e, ze(this, e);
      }
      return O(t, [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]), t;
    }();
    function Te(t) {
      return d.object(t) ? { capture: !!t.capture, passive: !!t.passive } : { capture: !!t, passive: !1 };
    }
    function Le(t, e) {
      return t === e || (typeof t == "boolean" ? !!e.capture === t && !e.passive : !!t.capture == !!e.capture && !!t.passive == !!e.passive);
    }
    var rr = { id: "events", install: function(t) {
      var e, n = [], r = {}, i = [], o = { add: a, remove: s, addDelegate: function(l, p, f, h, v) {
        var g = Te(v);
        if (!r[f]) {
          r[f] = [];
          for (var y = 0; y < i.length; y++) {
            var m = i[y];
            a(m, f, c), a(m, f, u, !0);
          }
        }
        var b = r[f], T = xe(b, function(_) {
          return _.selector === l && _.context === p;
        });
        T || (T = { selector: l, context: p, listeners: [] }, b.push(T)), T.listeners.push({ func: h, options: g });
      }, removeDelegate: function(l, p, f, h, v) {
        var g, y = Te(v), m = r[f], b = !1;
        if (m)
          for (g = m.length - 1; g >= 0; g--) {
            var T = m[g];
            if (T.selector === l && T.context === p) {
              for (var _ = T.listeners, w = _.length - 1; w >= 0; w--) {
                var S = _[w];
                if (S.func === h && Le(S.options, y)) {
                  _.splice(w, 1), _.length || (m.splice(g, 1), s(p, f, c), s(p, f, u, !0)), b = !0;
                  break;
                }
              }
              if (b) break;
            }
          }
      }, delegateListener: c, delegateUseCapture: u, delegatedEvents: r, documents: i, targets: n, supportsOptions: !1, supportsPassive: !1 };
      function a(l, p, f, h) {
        if (l.addEventListener) {
          var v = Te(h), g = xe(n, function(y) {
            return y.eventTarget === l;
          });
          g || (g = { eventTarget: l, events: {} }, n.push(g)), g.events[p] || (g.events[p] = []), xe(g.events[p], function(y) {
            return y.func === f && Le(y.options, v);
          }) || (l.addEventListener(p, f, o.supportsOptions ? v : v.capture), g.events[p].push({ func: f, options: v }));
        }
      }
      function s(l, p, f, h) {
        if (l.addEventListener && l.removeEventListener) {
          var v = be(n, function(X) {
            return X.eventTarget === l;
          }), g = n[v];
          if (g && g.events) if (p !== "all") {
            var y = !1, m = g.events[p];
            if (m) {
              if (f === "all") {
                for (var b = m.length - 1; b >= 0; b--) {
                  var T = m[b];
                  s(l, p, T.func, T.options);
                }
                return;
              }
              for (var _ = Te(h), w = 0; w < m.length; w++) {
                var S = m[w];
                if (S.func === f && Le(S.options, _)) {
                  l.removeEventListener(p, f, o.supportsOptions ? _ : _.capture), m.splice(w, 1), m.length === 0 && (delete g.events[p], y = !0);
                  break;
                }
              }
            }
            y && !Object.keys(g.events).length && n.splice(v, 1);
          } else for (p in g.events) g.events.hasOwnProperty(p) && s(l, p, "all");
        }
      }
      function c(l, p) {
        for (var f = Te(p), h = new nr(l), v = r[l.type], g = Lt(l)[0], y = g; d.element(y); ) {
          for (var m = 0; m < v.length; m++) {
            var b = v[m], T = b.selector, _ = b.context;
            if (Q(y, T) && se(_, g) && se(_, y)) {
              var w = b.listeners;
              h.currentTarget = y;
              for (var S = 0; S < w.length; S++) {
                var X = w[S];
                Le(X.options, f) && X.func(h);
              }
            }
          }
          y = N(y);
        }
      }
      function u(l) {
        return c(l, !0);
      }
      return (e = t.document) == null || e.createElement("div").addEventListener("test", null, { get capture() {
        return o.supportsOptions = !0;
      }, get passive() {
        return o.supportsPassive = !0;
      } }), t.events = o, o;
    } }, ht = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t) {
      for (var e = 0, n = ht.methodOrder; e < n.length; e++) {
        var r = n[e], i = ht[r](t);
        if (i) return i;
      }
      return null;
    }, simulationResume: function(t) {
      var e = t.pointerType, n = t.eventType, r = t.eventTarget, i = t.scope;
      if (!/down|start/i.test(n)) return null;
      for (var o = 0, a = i.interactions.list; o < a.length; o++) {
        var s = a[o], c = r;
        if (s.simulation && s.simulation.allowResume && s.pointerType === e) for (; c; ) {
          if (c === s.element) return s;
          c = N(c);
        }
      }
      return null;
    }, mouseOrPen: function(t) {
      var e, n = t.pointerId, r = t.pointerType, i = t.eventType, o = t.scope;
      if (r !== "mouse" && r !== "pen") return null;
      for (var a = 0, s = o.interactions.list; a < s.length; a++) {
        var c = s[a];
        if (c.pointerType === r) {
          if (c.simulation && !vn(c, n)) continue;
          if (c.interacting()) return c;
          e || (e = c);
        }
      }
      if (e) return e;
      for (var u = 0, l = o.interactions.list; u < l.length; u++) {
        var p = l[u];
        if (!(p.pointerType !== r || /down/i.test(i) && p.simulation)) return p;
      }
      return null;
    }, hasPointer: function(t) {
      for (var e = t.pointerId, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
        var i = r[n];
        if (vn(i, e)) return i;
      }
      return null;
    }, idle: function(t) {
      for (var e = t.pointerType, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
        var i = r[n];
        if (i.pointers.length === 1) {
          var o = i.interactable;
          if (o && (!o.options.gesture || !o.options.gesture.enabled)) continue;
        } else if (i.pointers.length >= 2) continue;
        if (!i.interacting() && e === i.pointerType) return i;
      }
      return null;
    } };
    function vn(t, e) {
      return t.pointers.some(function(n) {
        return n.id === e;
      });
    }
    var ir = ht, gt = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function hn(t, e) {
      return function(n) {
        var r = e.interactions.list, i = Yt(n), o = Lt(n), a = o[0], s = o[1], c = [];
        if (/^touch/.test(n.type)) {
          e.prevTouchTime = e.now();
          for (var u = 0, l = n.changedTouches; u < l.length; u++) {
            var p = l[u], f = { pointer: p, pointerId: ye(p), pointerType: i, eventType: n.type, eventTarget: a, curEventTarget: s, scope: e }, h = gn(f);
            c.push([f.pointer, f.eventTarget, f.curEventTarget, h]);
          }
        } else {
          var v = !1;
          if (!B.supportsPointerEvent && /mouse/.test(n.type)) {
            for (var g = 0; g < r.length && !v; g++) v = r[g].pointerType !== "mouse" && r[g].pointerIsDown;
            v = v || e.now() - e.prevTouchTime < 500 || n.timeStamp === 0;
          }
          if (!v) {
            var y = { pointer: n, pointerId: ye(n), pointerType: i, eventType: n.type, curEventTarget: s, eventTarget: a, scope: e }, m = gn(y);
            c.push([y.pointer, y.eventTarget, y.curEventTarget, m]);
          }
        }
        for (var b = 0; b < c.length; b++) {
          var T = c[b], _ = T[0], w = T[1], S = T[2];
          T[3][t](_, n, w, S);
        }
      };
    }
    function gn(t) {
      var e = t.pointerType, n = t.scope, r = { interaction: ir.search(t), searchDetails: t };
      return n.fire("interactions:find", r), r.interaction || n.interactions.new({ pointerType: e });
    }
    function mt(t, e) {
      var n = t.doc, r = t.scope, i = t.options, o = r.interactions.docEvents, a = r.events, s = a[e];
      for (var c in r.browser.isIOS && !i.events && (i.events = { passive: !1 }), a.delegatedEvents) s(n, c, a.delegateListener), s(n, c, a.delegateUseCapture, !0);
      for (var u = i && i.events, l = 0; l < o.length; l++) {
        var p = o[l];
        s(n, p.type, p.listener, u);
      }
    }
    var or = { id: "core/interactions", install: function(t) {
      for (var e = {}, n = 0; n < gt.length; n++) {
        var r = gt[n];
        e[r] = hn(r, t);
      }
      var i, o = B.pEventTypes;
      function a() {
        for (var s = 0, c = t.interactions.list; s < c.length; s++) {
          var u = c[s];
          if (u.pointerIsDown && u.pointerType === "touch" && !u._interacting) for (var l = function() {
            var h = f[p];
            t.documents.some(function(v) {
              return se(v.doc, h.downTarget);
            }) || u.removePointer(h.pointer, h.event);
          }, p = 0, f = u.pointers; p < f.length; p++) l();
        }
      }
      (i = A.PointerEvent ? [{ type: o.down, listener: a }, { type: o.down, listener: e.pointerDown }, { type: o.move, listener: e.pointerMove }, { type: o.up, listener: e.pointerUp }, { type: o.cancel, listener: e.pointerUp }] : [{ type: "mousedown", listener: e.pointerDown }, { type: "mousemove", listener: e.pointerMove }, { type: "mouseup", listener: e.pointerUp }, { type: "touchstart", listener: a }, { type: "touchstart", listener: e.pointerDown }, { type: "touchmove", listener: e.pointerMove }, { type: "touchend", listener: e.pointerUp }, { type: "touchcancel", listener: e.pointerUp }]).push({ type: "blur", listener: function(s) {
        for (var c = 0, u = t.interactions.list; c < u.length; c++)
          u[c].documentBlur(s);
      } }), t.prevTouchTime = 0, t.Interaction = function(s) {
        j(u, s);
        var c = J(u);
        function u() {
          return k(this, u), c.apply(this, arguments);
        }
        return O(u, [{ key: "pointerMoveTolerance", get: function() {
          return t.interactions.pointerMoveTolerance;
        }, set: function(l) {
          t.interactions.pointerMoveTolerance = l;
        } }, { key: "_now", value: function() {
          return t.now();
        } }]), u;
      }(Kn), t.interactions = { list: [], new: function(s) {
        s.scopeFire = function(u, l) {
          return t.fire(u, l);
        };
        var c = new t.Interaction(s);
        return t.interactions.list.push(c), c;
      }, listeners: e, docEvents: i, pointerMoveTolerance: 1 }, t.usePlugin(nn);
    }, listeners: { "scope:add-document": function(t) {
      return mt(t, "add");
    }, "scope:remove-document": function(t) {
      return mt(t, "remove");
    }, "interactable:unset": function(t, e) {
      for (var n = t.interactable, r = e.interactions.list.length - 1; r >= 0; r--) {
        var i = e.interactions.list[r];
        i.interactable === n && (i.stop(), e.fire("interactions:destroy", { interaction: i }), i.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(r, 1));
      }
    } }, onDocSignal: mt, doOnInteractions: hn, methodNames: gt }, ar = or, te = function(t) {
      return t[t.On = 0] = "On", t[t.Off = 1] = "Off", t;
    }(te || {}), sr = function() {
      function t(e, n, r, i) {
        k(this, t), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new dn(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n.actions, this.target = e, this._context = n.context || r, this._win = $(zt(e) ? this._context : e), this._doc = this._win.document, this._scopeEvents = i, this.set(n);
      }
      return O(t, [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(e, n) {
        return d.func(n.onstart) && this.on("".concat(e, "start"), n.onstart), d.func(n.onmove) && this.on("".concat(e, "move"), n.onmove), d.func(n.onend) && this.on("".concat(e, "end"), n.onend), d.func(n.oninertiastart) && this.on("".concat(e, "inertiastart"), n.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(e, n, r) {
        var i, o = this, a = (i = this._actions.map[e]) == null ? void 0 : i.filterEventType, s = function(c) {
          return (a == null || a(c)) && Fe(c, o._actions);
        };
        (d.array(n) || d.object(n)) && this._onOff(te.Off, e, n, void 0, s), (d.array(r) || d.object(r)) && this._onOff(te.On, e, r, void 0, s);
      } }, { key: "setPerAction", value: function(e, n) {
        var r = this._defaults;
        for (var i in n) {
          var o = i, a = this.options[e], s = n[o];
          o === "listeners" && this.updatePerActionListeners(e, a.listeners, s), d.array(s) ? a[o] = qt(s) : d.plainObject(s) ? (a[o] = x(a[o] || {}, de(s)), d.object(r.perAction[o]) && "enabled" in r.perAction[o] && (a[o].enabled = s.enabled !== !1)) : d.bool(s) && d.object(r.perAction[o]) ? a[o].enabled = s : a[o] = s;
        }
      } }, { key: "getRect", value: function(e) {
        return e = e || (d.element(this.target) ? this.target : null), d.string(this.target) && (e = e || this._context.querySelector(this.target)), Je(e);
      } }, { key: "rectChecker", value: function(e) {
        var n = this;
        return d.func(e) ? (this.getRect = function(r) {
          var i = x({}, e.apply(n, r));
          return "width" in i || (i.width = i.right - i.left, i.height = i.bottom - i.top), i;
        }, this) : e === null ? (delete this.getRect, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(e, n) {
        if (zt(n) || d.object(n)) {
          for (var r in this.options[e] = n, this._actions.map) this.options[r][e] = n;
          return this;
        }
        return this.options[e];
      } }, { key: "origin", value: function(e) {
        return this._backCompatOption("origin", e);
      } }, { key: "deltaSource", value: function(e) {
        return e === "page" || e === "client" ? (this.options.deltaSource = e, this) : this.options.deltaSource;
      } }, { key: "getAllElements", value: function() {
        var e = this.target;
        return d.string(e) ? Array.from(this._context.querySelectorAll(e)) : d.func(e) && e.getAllElements ? e.getAllElements() : d.element(e) ? [e] : [];
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(e) {
        return this._context === e.ownerDocument || se(this._context, e);
      } }, { key: "testIgnoreAllow", value: function(e, n, r) {
        return !this.testIgnore(e.ignoreFrom, n, r) && this.testAllow(e.allowFrom, n, r);
      } }, { key: "testAllow", value: function(e, n, r) {
        return !e || !!d.element(r) && (d.string(e) ? He(r, e, n) : !!d.element(e) && se(e, r));
      } }, { key: "testIgnore", value: function(e, n, r) {
        return !(!e || !d.element(r)) && (d.string(e) ? He(r, e, n) : !!d.element(e) && se(e, r));
      } }, { key: "fire", value: function(e) {
        return this.events.fire(e), this;
      } }, { key: "_onOff", value: function(e, n, r, i, o) {
        d.object(n) && !d.array(n) && (i = r, r = null);
        var a = ce(n, r, o);
        for (var s in a) {
          s === "wheel" && (s = B.wheelEvent);
          for (var c = 0, u = a[s]; c < u.length; c++) {
            var l = u[c];
            Fe(s, this._actions) ? this.events[e === te.On ? "on" : "off"](s, l) : d.string(this.target) ? this._scopeEvents[e === te.On ? "addDelegate" : "removeDelegate"](this.target, this._context, s, l, i) : this._scopeEvents[e === te.On ? "add" : "remove"](this.target, s, l, i);
          }
        }
        return this;
      } }, { key: "on", value: function(e, n, r) {
        return this._onOff(te.On, e, n, r);
      } }, { key: "off", value: function(e, n, r) {
        return this._onOff(te.Off, e, n, r);
      } }, { key: "set", value: function(e) {
        var n = this._defaults;
        for (var r in d.object(e) || (e = {}), this.options = de(n.base), this._actions.methodDict) {
          var i = r, o = this._actions.methodDict[i];
          this.options[i] = {}, this.setPerAction(i, x(x({}, n.perAction), n.actions[i])), this[o](e[i]);
        }
        for (var a in e) a !== "getRect" ? d.func(this[a]) && this[a](e[a]) : this.rectChecker(e.getRect);
        return this;
      } }, { key: "unset", value: function() {
        if (d.string(this.target)) for (var e in this._scopeEvents.delegatedEvents) for (var n = this._scopeEvents.delegatedEvents[e], r = n.length - 1; r >= 0; r--) {
          var i = n[r], o = i.selector, a = i.context, s = i.listeners;
          o === this.target && a === this._context && n.splice(r, 1);
          for (var c = s.length - 1; c >= 0; c--) this._scopeEvents.removeDelegate(this.target, this._context, e, s[c][0], s[c][1]);
        }
        else this._scopeEvents.remove(this.target, "all");
      } }]), t;
    }(), cr = function() {
      function t(e) {
        var n = this;
        k(this, t), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e, e.addListeners({ "interactable:unset": function(r) {
          var i = r.interactable, o = i.target, a = d.string(o) ? n.selectorMap[o] : o[n.scope.id], s = be(a, function(c) {
            return c === i;
          });
          a.splice(s, 1);
        } });
      }
      return O(t, [{ key: "new", value: function(e, n) {
        n = x(n || {}, { actions: this.scope.actions });
        var r = new this.scope.Interactable(e, n, this.scope.document, this.scope.events);
        return this.scope.addDocument(r._doc), this.list.push(r), d.string(e) ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(r)) : (r.target[this.scope.id] || Object.defineProperty(e, this.scope.id, { value: [], configurable: !0 }), e[this.scope.id].push(r)), this.scope.fire("interactable:new", { target: e, options: n, interactable: r, win: this.scope._win }), r;
      } }, { key: "getExisting", value: function(e, n) {
        var r = n && n.context || this.scope.document, i = d.string(e), o = i ? this.selectorMap[e] : e[this.scope.id];
        if (o) return xe(o, function(a) {
          return a._context === r && (i || a.inContext(e));
        });
      } }, { key: "forEachMatch", value: function(e, n) {
        for (var r = 0, i = this.list; r < i.length; r++) {
          var o = i[r], a = void 0;
          if ((d.string(o.target) ? d.element(e) && Q(e, o.target) : e === o.target) && o.inContext(e) && (a = n(o)), a !== void 0) return a;
        }
      } }]), t;
    }(), lr = function() {
      function t() {
        var e = this;
        k(this, t), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = B, this.defaults = de(on), this.Eventable = dn, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = function(r) {
          var i = function o(a, s) {
            var c = r.interactables.getExisting(a, s);
            return c || ((c = r.interactables.new(a, s)).events.global = o.globalEvents), c;
          };
          return i.getPointerAverage = Xt, i.getTouchBBox = et, i.getTouchDistance = tt, i.getTouchAngle = nt, i.getElementRect = Je, i.getElementClientRect = Ke, i.matchesSelector = Q, i.closest = kt, i.globalEvents = {}, i.version = "1.10.27", i.scope = r, i.use = function(o, a) {
            return this.scope.usePlugin(o, a), this;
          }, i.isSet = function(o, a) {
            return !!this.scope.interactables.get(o, a && a.context);
          }, i.on = we(function(o, a, s) {
            if (d.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), d.array(o)) {
              for (var c = 0, u = o; c < u.length; c++) {
                var l = u[c];
                this.on(l, a, s);
              }
              return this;
            }
            if (d.object(o)) {
              for (var p in o) this.on(p, o[p], a);
              return this;
            }
            return Fe(o, this.scope.actions) ? this.globalEvents[o] ? this.globalEvents[o].push(a) : this.globalEvents[o] = [a] : this.scope.events.add(this.scope.document, o, a, { options: s }), this;
          }, "The interact.on() method is being deprecated"), i.off = we(function(o, a, s) {
            if (d.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), d.array(o)) {
              for (var c = 0, u = o; c < u.length; c++) {
                var l = u[c];
                this.off(l, a, s);
              }
              return this;
            }
            if (d.object(o)) {
              for (var p in o) this.off(p, o[p], a);
              return this;
            }
            var f;
            return Fe(o, this.scope.actions) ? o in this.globalEvents && (f = this.globalEvents[o].indexOf(a)) !== -1 && this.globalEvents[o].splice(f, 1) : this.scope.events.remove(this.scope.document, o, a, s), this;
          }, "The interact.off() method is being deprecated"), i.debug = function() {
            return this.scope;
          }, i.supportsTouch = function() {
            return B.supportsTouch;
          }, i.supportsPointerEvent = function() {
            return B.supportsPointerEvent;
          }, i.stop = function() {
            for (var o = 0, a = this.scope.interactions.list; o < a.length; o++) a[o].stop();
            return this;
          }, i.pointerMoveTolerance = function(o) {
            return d.number(o) ? (this.scope.interactions.pointerMoveTolerance = o, this) : this.scope.interactions.pointerMoveTolerance;
          }, i.addDocument = function(o, a) {
            this.scope.addDocument(o, a);
          }, i.removeDocument = function(o) {
            this.scope.removeDocument(o);
          }, i;
        }(this), this.InteractEvent = dt, this.Interactable = void 0, this.interactables = new cr(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(r) {
          return e.removeDocument(r.target);
        };
        var n = this;
        this.Interactable = function(r) {
          j(o, r);
          var i = J(o);
          function o() {
            return k(this, o), i.apply(this, arguments);
          }
          return O(o, [{ key: "_defaults", get: function() {
            return n.defaults;
          } }, { key: "set", value: function(a) {
            return oe(q(o.prototype), "set", this).call(this, a), n.fire("interactable:set", { options: a, interactable: this }), this;
          } }, { key: "unset", value: function() {
            oe(q(o.prototype), "unset", this).call(this);
            var a = n.interactables.list.indexOf(this);
            a < 0 || (n.interactables.list.splice(a, 1), n.fire("interactable:unset", { interactable: this }));
          } }]), o;
        }(sr);
      }
      return O(t, [{ key: "addListeners", value: function(e, n) {
        this.listenerMaps.push({ id: n, map: e });
      } }, { key: "fire", value: function(e, n) {
        for (var r = 0, i = this.listenerMaps; r < i.length; r++) {
          var o = i[r].map[e];
          if (o && o(n, this, e) === !1) return !1;
        }
      } }, { key: "init", value: function(e) {
        return this.isInitialized ? this : function(n, r) {
          return n.isInitialized = !0, d.window(r) && St(r), A.init(r), B.init(r), Z.init(r), n.window = r, n.document = r.document, n.usePlugin(ar), n.usePlugin(rr), n;
        }(this, e);
      } }, { key: "pluginIsInstalled", value: function(e) {
        var n = e.id;
        return n ? !!this._plugins.map[n] : this._plugins.list.indexOf(e) !== -1;
      } }, { key: "usePlugin", value: function(e, n) {
        if (!this.isInitialized) return this;
        if (this.pluginIsInstalled(e)) return this;
        if (e.id && (this._plugins.map[e.id] = e), this._plugins.list.push(e), e.install && e.install(this, n), e.listeners && e.before) {
          for (var r = 0, i = this.listenerMaps.length, o = e.before.reduce(function(s, c) {
            return s[c] = !0, s[mn(c)] = !0, s;
          }, {}); r < i; r++) {
            var a = this.listenerMaps[r].id;
            if (a && (o[a] || o[mn(a)])) break;
          }
          this.listenerMaps.splice(r, 0, { id: e.id, map: e.listeners });
        } else e.listeners && this.listenerMaps.push({ id: e.id, map: e.listeners });
        return this;
      } }, { key: "addDocument", value: function(e, n) {
        if (this.getDocIndex(e) !== -1) return !1;
        var r = $(e);
        n = n ? x({}, n) : {}, this.documents.push({ doc: e, options: n }), this.events.documents.push(e), e !== this.document && this.events.add(r, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: e, window: r, scope: this, options: n });
      } }, { key: "removeDocument", value: function(e) {
        var n = this.getDocIndex(e), r = $(e), i = this.documents[n].options;
        this.events.remove(r, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", { doc: e, window: r, scope: this, options: i });
      } }, { key: "getDocIndex", value: function(e) {
        for (var n = 0; n < this.documents.length; n++) if (this.documents[n].doc === e) return n;
        return -1;
      } }, { key: "getDocOptions", value: function(e) {
        var n = this.getDocIndex(e);
        return n === -1 ? null : this.documents[n].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), t;
    }();
    function mn(t) {
      return t && t.replace(/\/.*$/, "");
    }
    var yn = new lr(), F = yn.interactStatic, ur = typeof globalThis < "u" ? globalThis : window;
    yn.init(ur);
    var pr = Object.freeze({ __proto__: null, edgeTarget: function() {
    }, elements: function() {
    }, grid: function(t) {
      var e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(r) {
        var i = r[0], o = r[1];
        return i in t || o in t;
      }), n = function(r, i) {
        for (var o = t.range, a = t.limits, s = a === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : a, c = t.offset, u = c === void 0 ? { x: 0, y: 0 } : c, l = { range: o, grid: t, x: null, y: null }, p = 0; p < e.length; p++) {
          var f = e[p], h = f[0], v = f[1], g = Math.round((r - u.x) / t[h]), y = Math.round((i - u.y) / t[v]);
          l[h] = Math.max(s.left, Math.min(s.right, g * t[h] + u.x)), l[v] = Math.max(s.top, Math.min(s.bottom, y * t[v] + u.y));
        }
        return l;
      };
      return n.grid = t, n.coordFields = e, n;
    } }), fr = { id: "snappers", install: function(t) {
      var e = t.interactStatic;
      e.snappers = x(e.snappers || {}, pr), e.createSnapGrid = e.snappers.grid;
    } }, dr = fr, vr = { start: function(t) {
      var e = t.state, n = t.rect, r = t.edges, i = t.pageCoords, o = e.options, a = o.ratio, s = o.enabled, c = e.options, u = c.equalDelta, l = c.modifiers;
      a === "preserve" && (a = n.width / n.height), e.startCoords = x({}, i), e.startRect = x({}, n), e.ratio = a, e.equalDelta = u;
      var p = e.linkedEdges = { top: r.top || r.left && !r.bottom, left: r.left || r.top && !r.right, bottom: r.bottom || r.right && !r.top, right: r.right || r.bottom && !r.left };
      if (e.xIsPrimaryAxis = !(!r.left && !r.right), e.equalDelta) {
        var f = (p.left ? 1 : -1) * (p.top ? 1 : -1);
        e.edgeSign = { x: f, y: f };
      } else e.edgeSign = { x: p.left ? -1 : 1, y: p.top ? -1 : 1 };
      if (s !== !1 && x(r, p), l != null && l.length) {
        var h = new ft(t.interaction);
        h.copyFrom(t.interaction.modification), h.prepareStates(l), e.subModification = h, h.startAll(I({}, t));
      }
    }, set: function(t) {
      var e = t.state, n = t.rect, r = t.coords, i = e.linkedEdges, o = x({}, r), a = e.equalDelta ? hr : gr;
      if (x(t.edges, i), a(e, e.xIsPrimaryAxis, r, n), !e.subModification) return null;
      var s = x({}, n);
      Me(i, s, { x: r.x - o.x, y: r.y - o.y });
      var c = e.subModification.setAll(I(I({}, t), {}, { rect: s, edges: i, pageCoords: r, prevCoords: r, prevRect: s })), u = c.delta;
      return c.changed && (a(e, Math.abs(u.x) > Math.abs(u.y), c.coords, c.rect), x(r, c.coords)), c.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
    function hr(t, e, n) {
      var r = t.startCoords, i = t.edgeSign;
      e ? n.y = r.y + (n.x - r.x) * i.y : n.x = r.x + (n.y - r.y) * i.x;
    }
    function gr(t, e, n, r) {
      var i = t.startRect, o = t.startCoords, a = t.ratio, s = t.edgeSign;
      if (e) {
        var c = r.width / a;
        n.y = o.y + (c - i.height) * s.y;
      } else {
        var u = r.height * a;
        n.x = o.x + (u - i.width) * s.x;
      }
    }
    var mr = ee(vr, "aspectRatio"), bn = function() {
    };
    bn._defaults = {};
    var Ve = bn;
    function ue(t, e, n) {
      return d.func(t) ? he(t, e.interactable, e.element, [n.x, n.y, e]) : he(t, e.interactable, e.element);
    }
    var qe = { start: function(t) {
      var e = t.rect, n = t.startOffset, r = t.state, i = t.interaction, o = t.pageCoords, a = r.options, s = a.elementRect, c = x({ left: 0, top: 0, right: 0, bottom: 0 }, a.offset || {});
      if (e && s) {
        var u = ue(a.restriction, i, o);
        if (u) {
          var l = u.right - u.left - e.width, p = u.bottom - u.top - e.height;
          l < 0 && (c.left += l, c.right += l), p < 0 && (c.top += p, c.bottom += p);
        }
        c.left += n.left - e.width * s.left, c.top += n.top - e.height * s.top, c.right += n.right - e.width * (1 - s.right), c.bottom += n.bottom - e.height * (1 - s.bottom);
      }
      r.offset = c;
    }, set: function(t) {
      var e = t.coords, n = t.interaction, r = t.state, i = r.options, o = r.offset, a = ue(i.restriction, n, e);
      if (a) {
        var s = function(c) {
          return !c || "left" in c && "top" in c || ((c = x({}, c)).left = c.x || 0, c.top = c.y || 0, c.right = c.right || c.left + c.width, c.bottom = c.bottom || c.top + c.height), c;
        }(a);
        e.x = Math.max(Math.min(s.right - o.right, e.x), s.left + o.left), e.y = Math.max(Math.min(s.bottom - o.bottom, e.y), s.top + o.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, yr = ee(qe, "restrict"), xn = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, wn = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function En(t, e) {
      for (var n = 0, r = ["top", "left", "bottom", "right"]; n < r.length; n++) {
        var i = r[n];
        i in t || (t[i] = e[i]);
      }
      return t;
    }
    var Se = { noInner: xn, noOuter: wn, start: function(t) {
      var e, n = t.interaction, r = t.startOffset, i = t.state, o = i.options;
      o && (e = Ie(ue(o.offset, n, n.coords.start.page))), e = e || { x: 0, y: 0 }, i.offset = { top: e.y + r.top, left: e.x + r.left, bottom: e.y - r.bottom, right: e.x - r.right };
    }, set: function(t) {
      var e = t.coords, n = t.edges, r = t.interaction, i = t.state, o = i.offset, a = i.options;
      if (n) {
        var s = x({}, e), c = ue(a.inner, r, s) || {}, u = ue(a.outer, r, s) || {};
        En(c, xn), En(u, wn), n.top ? e.y = Math.min(Math.max(u.top + o.top, s.y), c.top + o.top) : n.bottom && (e.y = Math.max(Math.min(u.bottom + o.bottom, s.y), c.bottom + o.bottom)), n.left ? e.x = Math.min(Math.max(u.left + o.left, s.x), c.left + o.left) : n.right && (e.x = Math.max(Math.min(u.right + o.right, s.x), c.right + o.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, br = ee(Se, "restrictEdges"), xr = x({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(t) {
    } }, qe.defaults), wr = ee({ start: qe.start, set: qe.set, defaults: xr }, "restrictRect"), Er = { width: -1 / 0, height: -1 / 0 }, Tr = { width: 1 / 0, height: 1 / 0 }, Sr = ee({ start: function(t) {
      return Se.start(t);
    }, set: function(t) {
      var e = t.interaction, n = t.state, r = t.rect, i = t.edges, o = n.options;
      if (i) {
        var a = Qe(ue(o.min, e, t.coords)) || Er, s = Qe(ue(o.max, e, t.coords)) || Tr;
        n.options = { endOnly: o.endOnly, inner: x({}, Se.noInner), outer: x({}, Se.noOuter) }, i.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - s.height) : i.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + s.height), i.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - s.width) : i.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + s.width), Se.set(t), n.options = o;
      }
    }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), yt = { start: function(t) {
      var e, n = t.interaction, r = t.interactable, i = t.element, o = t.rect, a = t.state, s = t.startOffset, c = a.options, u = c.offsetWithOrigin ? function(f) {
        var h = f.interaction.element, v = Ie(he(f.state.options.origin, null, null, [h])), g = v || ge(f.interactable, h, f.interaction.prepared.name);
        return g;
      }(t) : { x: 0, y: 0 };
      if (c.offset === "startCoords") e = { x: n.coords.start.page.x, y: n.coords.start.page.y };
      else {
        var l = he(c.offset, r, i, [n]);
        (e = Ie(l) || { x: 0, y: 0 }).x += u.x, e.y += u.y;
      }
      var p = c.relativePoints;
      a.offsets = o && p && p.length ? p.map(function(f, h) {
        return { index: h, relativePoint: f, x: s.left - o.width * f.x + e.x, y: s.top - o.height * f.y + e.y };
      }) : [{ index: 0, relativePoint: null, x: e.x, y: e.y }];
    }, set: function(t) {
      var e = t.interaction, n = t.coords, r = t.state, i = r.options, o = r.offsets, a = ge(e.interactable, e.element, e.prepared.name), s = x({}, n), c = [];
      i.offsetWithOrigin || (s.x -= a.x, s.y -= a.y);
      for (var u = 0, l = o; u < l.length; u++) for (var p = l[u], f = s.x - p.x, h = s.y - p.y, v = 0, g = i.targets.length; v < g; v++) {
        var y = i.targets[v], m = void 0;
        (m = d.func(y) ? y(f, h, e._proxy, p, v) : y) && c.push({ x: (d.number(m.x) ? m.x : f) + p.x, y: (d.number(m.y) ? m.y : h) + p.y, range: d.number(m.range) ? m.range : i.range, source: y, index: v, offset: p });
      }
      for (var b = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, T = 0; T < c.length; T++) {
        var _ = c[T], w = _.range, S = _.x - s.x, X = _.y - s.y, D = me(S, X), Y = D <= w;
        w === 1 / 0 && b.inRange && b.range !== 1 / 0 && (Y = !1), b.target && !(Y ? b.inRange && w !== 1 / 0 ? D / w < b.distance / b.range : w === 1 / 0 && b.range !== 1 / 0 || D < b.distance : !b.inRange && D < b.distance) || (b.target = _, b.distance = D, b.range = w, b.inRange = Y, b.delta.x = S, b.delta.y = X);
      }
      return b.inRange && (n.x = b.target.x, n.y = b.target.y), r.closest = b, b;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, _r = ee(yt, "snap"), Be = { start: function(t) {
      var e = t.state, n = t.edges, r = e.options;
      if (!n) return null;
      t.state = { options: { targets: null, relativePoints: [{ x: n.left ? 0 : 1, y: n.top ? 0 : 1 }], offset: r.offset || "self", origin: { x: 0, y: 0 }, range: r.range } }, e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]], yt.start(t), e.offsets = t.state.offsets, t.state = e;
    }, set: function(t) {
      var e = t.interaction, n = t.state, r = t.coords, i = n.options, o = n.offsets, a = { x: r.x - o[0].x, y: r.y - o[0].y };
      n.options = x({}, i), n.options.targets = [];
      for (var s = 0, c = i.targets || []; s < c.length; s++) {
        var u = c[s], l = void 0;
        if (l = d.func(u) ? u(a.x, a.y, e) : u) {
          for (var p = 0, f = n.targetFields; p < f.length; p++) {
            var h = f[p], v = h[0], g = h[1];
            if (v in l || g in l) {
              l.x = l[v], l.y = l[g];
              break;
            }
          }
          n.options.targets.push(l);
        }
      }
      var y = yt.set(t);
      return n.options = i, y;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, Pr = ee(Be, "snapSize"), bt = { aspectRatio: mr, restrictEdges: br, restrict: yr, restrictRect: wr, restrictSize: Sr, snapEdges: ee({ start: function(t) {
      var e = t.edges;
      return e ? (t.state.targetFields = t.state.targetFields || [[e.left ? "left" : "right", e.top ? "top" : "bottom"]], Be.start(t)) : null;
    }, set: Be.set, defaults: x(de(Be.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: _r, snapSize: Pr, spring: Ve, avoid: Ve, transform: Ve, rubberband: Ve }, Or = { id: "modifiers", install: function(t) {
      var e = t.interactStatic;
      for (var n in t.usePlugin(rn), t.usePlugin(dr), e.modifiers = bt, bt) {
        var r = bt[n], i = r._defaults, o = r._methods;
        i._methods = o, t.defaults.perAction[n] = i;
      }
    } }, kr = Or, Tn = function(t) {
      j(n, t);
      var e = J(n);
      function n(r, i, o, a, s, c) {
        var u;
        if (k(this, n), ze(ie(u = e.call(this, s)), o), o !== i && ze(ie(u), i), u.timeStamp = c, u.originalEvent = o, u.type = r, u.pointerId = ye(i), u.pointerType = Yt(i), u.target = a, u.currentTarget = null, r === "tap") {
          var l = s.getPointerIndex(i);
          u.dt = u.timeStamp - s.pointers[l].downTime;
          var p = u.timeStamp - s.tapTime;
          u.double = !!s.prevTap && s.prevTap.type !== "doubletap" && s.prevTap.target === u.target && p < 500;
        } else r === "doubletap" && (u.dt = i.timeStamp - s.tapTime, u.double = !0);
        return u;
      }
      return O(n, [{ key: "_subtractOrigin", value: function(r) {
        var i = r.x, o = r.y;
        return this.pageX -= i, this.pageY -= o, this.clientX -= i, this.clientY -= o, this;
      } }, { key: "_addOrigin", value: function(r) {
        var i = r.x, o = r.y;
        return this.pageX += i, this.pageY += o, this.clientX += i, this.clientY += o, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]), n;
    }(Ce), _e = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t) {
      t.pointerEvents = _e, t.defaults.actions.pointerEvents = _e.defaults, x(t.actions.phaselessTypes, _e.types);
    }, listeners: { "interactions:new": function(t) {
      var e = t.interaction;
      e.prevTap = null, e.tapTime = 0;
    }, "interactions:update-pointer": function(t) {
      var e = t.down, n = t.pointerInfo;
      !e && n.hold || (n.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(t, e) {
      var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget;
      t.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && xt(t), ne({ interaction: n, pointer: r, event: i, eventTarget: o, type: "move" }, e));
    }, "interactions:down": function(t, e) {
      (function(n, r) {
        for (var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget, c = n.pointerIndex, u = i.pointers[c].hold, l = Mt(s), p = { interaction: i, pointer: o, event: a, eventTarget: s, type: "hold", targets: [], path: l, node: null }, f = 0; f < l.length; f++) {
          var h = l[f];
          p.node = h, r.fire("pointerEvents:collect-targets", p);
        }
        if (p.targets.length) {
          for (var v = 1 / 0, g = 0, y = p.targets; g < y.length; g++) {
            var m = y[g].eventable.options.holdDuration;
            m < v && (v = m);
          }
          u.duration = v, u.timeout = setTimeout(function() {
            ne({ interaction: i, eventTarget: s, pointer: o, event: a, type: "hold" }, r);
          }, v);
        }
      })(t, e), ne(t, e);
    }, "interactions:up": function(t, e) {
      xt(t), ne(t, e), function(n, r) {
        var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget;
        i.pointerWasMoved || ne({ interaction: i, eventTarget: s, pointer: o, event: a, type: "tap" }, r);
      }(t, e);
    }, "interactions:cancel": function(t, e) {
      xt(t), ne(t, e);
    } }, PointerEvent: Tn, fire: ne, collectEventTargets: Sn, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
    function ne(t, e) {
      var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, s = t.targets, c = s === void 0 ? Sn(t, e) : s, u = new Tn(a, r, i, o, n, e.now());
      e.fire("pointerEvents:new", { pointerEvent: u });
      for (var l = { interaction: n, pointer: r, event: i, eventTarget: o, targets: c, type: a, pointerEvent: u }, p = 0; p < c.length; p++) {
        var f = c[p];
        for (var h in f.props || {}) u[h] = f.props[h];
        var v = ge(f.eventable, f.node);
        if (u._subtractOrigin(v), u.eventable = f.eventable, u.currentTarget = f.node, f.eventable.fire(u), u._addOrigin(v), u.immediatePropagationStopped || u.propagationStopped && p + 1 < c.length && c[p + 1].node !== u.currentTarget) break;
      }
      if (e.fire("pointerEvents:fired", l), a === "tap") {
        var g = u.double ? ne({ interaction: n, pointer: r, event: i, eventTarget: o, type: "doubletap" }, e) : u;
        n.prevTap = g, n.tapTime = g.timeStamp;
      }
      return u;
    }
    function Sn(t, e) {
      var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, s = n.getPointerIndex(r), c = n.pointers[s];
      if (a === "tap" && (n.pointerWasMoved || !c || c.downTarget !== o)) return [];
      for (var u = Mt(o), l = { interaction: n, pointer: r, event: i, eventTarget: o, type: a, path: u, targets: [], node: null }, p = 0; p < u.length; p++) {
        var f = u[p];
        l.node = f, e.fire("pointerEvents:collect-targets", l);
      }
      return a === "hold" && (l.targets = l.targets.filter(function(h) {
        var v, g;
        return h.eventable.options.holdDuration === ((v = n.pointers[s]) == null || (g = v.hold) == null ? void 0 : g.duration);
      })), l.targets;
    }
    function xt(t) {
      var e = t.interaction, n = t.pointerIndex, r = e.pointers[n].hold;
      r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
    }
    var Dr = Object.freeze({ __proto__: null, default: _e });
    function Ir(t) {
      var e = t.interaction;
      e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
    }
    var Mr = { id: "pointer-events/holdRepeat", install: function(t) {
      t.usePlugin(_e);
      var e = t.pointerEvents;
      e.defaults.holdRepeatInterval = 0, e.types.holdrepeat = t.actions.phaselessTypes.holdrepeat = !0;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t, e) {
      return t["pointerEvents:".concat(e)] = Ir, t;
    }, { "pointerEvents:new": function(t) {
      var e = t.pointerEvent;
      e.type === "hold" && (e.count = (e.count || 0) + 1);
    }, "pointerEvents:fired": function(t, e) {
      var n = t.interaction, r = t.pointerEvent, i = t.eventTarget, o = t.targets;
      if (r.type === "hold" && o.length) {
        var a = o[0].eventable.options.holdRepeatInterval;
        a <= 0 || (n.holdIntervalHandle = setTimeout(function() {
          e.pointerEvents.fire({ interaction: n, eventTarget: i, type: "hold", pointer: r, event: r }, e);
        }, a));
      }
    } }) }, zr = Mr, Ar = { id: "pointer-events/interactableTargets", install: function(t) {
      var e = t.Interactable;
      e.prototype.pointerEvents = function(r) {
        return x(this.events.options, r), this;
      };
      var n = e.prototype._backCompatOption;
      e.prototype._backCompatOption = function(r, i) {
        var o = n.call(this, r, i);
        return o === this && (this.events.options[r] = i), o;
      };
    }, listeners: { "pointerEvents:collect-targets": function(t, e) {
      var n = t.targets, r = t.node, i = t.type, o = t.eventTarget;
      e.interactables.forEachMatch(r, function(a) {
        var s = a.events, c = s.options;
        s.types[i] && s.types[i].length && a.testIgnoreAllow(c, r, o) && n.push({ node: r, eventable: s, props: { interactable: a } });
      });
    }, "interactable:new": function(t) {
      var e = t.interactable;
      e.events.getRect = function(n) {
        return e.getRect(n);
      };
    }, "interactable:set": function(t, e) {
      var n = t.interactable, r = t.options;
      x(n.events.options, e.pointerEvents.defaults), x(n.events.options, r.pointerEvents || {});
    } } }, Rr = Ar, Cr = { id: "pointer-events", install: function(t) {
      t.usePlugin(Dr), t.usePlugin(zr), t.usePlugin(Rr);
    } }, jr = Cr, Fr = { id: "reflow", install: function(t) {
      var e = t.Interactable;
      t.actions.phases.reflow = !0, e.prototype.reflow = function(n) {
        return function(r, i, o) {
          for (var a = r.getAllElements(), s = o.window.Promise, c = s ? [] : null, u = function() {
            var p = a[l], f = r.getRect(p);
            if (!f) return 1;
            var h, v = xe(o.interactions.list, function(m) {
              return m.interacting() && m.interactable === r && m.element === p && m.prepared.name === i.name;
            });
            if (v) v.move(), c && (h = v._reflowPromise || new s(function(m) {
              v._reflowResolve = m;
            }));
            else {
              var g = Qe(f), y = /* @__PURE__ */ function(m) {
                return { coords: m, get page() {
                  return this.coords.page;
                }, get client() {
                  return this.coords.client;
                }, get timeStamp() {
                  return this.coords.timeStamp;
                }, get pageX() {
                  return this.coords.page.x;
                }, get pageY() {
                  return this.coords.page.y;
                }, get clientX() {
                  return this.coords.client.x;
                }, get clientY() {
                  return this.coords.client.y;
                }, get pointerId() {
                  return this.coords.pointerId;
                }, get target() {
                  return this.coords.target;
                }, get type() {
                  return this.coords.type;
                }, get pointerType() {
                  return this.coords.pointerType;
                }, get buttons() {
                  return this.coords.buttons;
                }, preventDefault: function() {
                } };
              }({ page: { x: g.x, y: g.y }, client: { x: g.x, y: g.y }, timeStamp: o.now() });
              h = function(m, b, T, _, w) {
                var S = m.interactions.new({ pointerType: "reflow" }), X = { interaction: S, event: w, pointer: w, eventTarget: T, phase: "reflow" };
                S.interactable = b, S.element = T, S.prevEvent = w, S.updatePointer(w, w, T, !0), Ct(S.coords.delta), ct(S.prepared, _), S._doPhase(X);
                var D = m.window, Y = D.Promise, G = Y ? new Y(function(K) {
                  S._reflowResolve = K;
                }) : void 0;
                return S._reflowPromise = G, S.start(_, b, T), S._interacting ? (S.move(X), S.end(w)) : (S.stop(), S._reflowResolve()), S.removePointer(w, w), G;
              }(o, r, p, i, y);
            }
            c && c.push(h);
          }, l = 0; l < a.length && !u(); l++) ;
          return c && s.all(c).then(function() {
            return r;
          });
        }(this, n, t);
      };
    }, listeners: { "interactions:stop": function(t, e) {
      var n = t.interaction;
      n.pointerType === "reflow" && (n._reflowResolve && n._reflowResolve(), function(r, i) {
        r.splice(r.indexOf(i), 1);
      }(e.interactions.list, n));
    } } }, Xr = Fr;
    if (F.use(nn), F.use(ln), F.use(jr), F.use(tr), F.use(kr), F.use(Bn), F.use(zn), F.use(Rn), F.use(Xr), F.default = F, M(P) === "object" && P) try {
      P.exports = F;
    } catch {
    }
    return F.default = F, F;
  });
})(We, We.exports);
var Vr = We.exports;
const $e = /* @__PURE__ */ Lr(Vr), Br = (P) => {
  let R = Oe(null);
  const C = Oe({ x: 0, y: 0 }), I = Oe({ width: 0, height: 0 });
  return wt(P, () => {
    P.value && (R.value = $e(P.value), C.value = {
      x: 0,
      y: 0
    });
  }, { immediate: !0, deep: !0 }), wt(() => C.value, (M) => {
    var O;
    const { x: k, y: W } = M;
    ((O = R.value) == null ? void 0 : O.target).style.transform = `translate(${k}px, ${W}px)`;
  }, { deep: !0 }), wt(() => I.value, (M) => {
    var O, re;
    const { width: k, height: W } = M;
    ((O = R.value) == null ? void 0 : O.target).style.width = `${k}px`, ((re = R.value) == null ? void 0 : re.target).style.height = `${W}px`;
  }, { deep: !0 }), {
    interactable: R,
    interact: $e,
    position: C,
    size: I
  };
}, Gr = (P, R = {}) => {
  const C = Oe(!1), I = P.position, M = _n({
    get: () => ({
      listeners: {
        start: k,
        move: W,
        end: O
      },
      ...R
    }),
    set: (j) => {
      var q;
      R = j, (q = P.interactable.value) == null || q.set(j);
    }
  }), k = (j) => {
    C.value = !0;
  }, W = (j) => {
    I.value = {
      x: I.value.x + j.dx,
      y: I.value.y + j.dy
    };
  }, O = (j) => {
    C.value = !1;
  };
  return {
    init: () => {
      if (!P.interactable.value)
        throw new Error("Interactable context is not set");
      P.interactable.value.draggable(M.value);
    },
    position: I,
    draggableOptions: M,
    isDragging: C
  };
}, Wr = (P, R) => {
  const C = Oe(!1), I = P.position, M = P.size;
  let k;
  const W = _n({
    get: () => ({
      edges: { left: !0, right: !0, bottom: !0, top: !0 },
      listeners: {
        start: O,
        move: re,
        end: j
      },
      ...R
    }),
    set: (z) => {
      R = z, k.set(z);
    }
  }), O = (z) => {
    C.value = !0;
  }, re = (z) => {
    var oe, ve;
    const ie = I.value.x + (((oe = z.deltaRect) == null ? void 0 : oe.left) || 0), J = I.value.y + (((ve = z.deltaRect) == null ? void 0 : ve.top) || 0);
    Object.assign(z.target.style, {
      width: `${z.rect.width}px`,
      height: `${z.rect.height}px`,
      transform: `translate(${ie}px, ${J}px)`
    }), M.value = {
      width: z.rect.width,
      height: z.rect.height
    }, I.value = {
      x: ie,
      y: J
    };
  }, j = (z) => {
    C.value = !1;
  };
  return {
    init: () => {
      if (!P.interactable.value)
        throw new Error("Interactable context is not set");
      k = P.interactable.value.resizable(W.value);
    },
    resizeData: M,
    position: I,
    resizableOptions: W,
    isResizing: C
  };
}, $r = {
  install: (P, R = {
    installInject: !0,
    installGlobalProperty: !0
  }) => {
    if (!P)
      throw new Error("VueInteract.install requires an app instance");
    R.installInject && P.provide("interact", $e), R.installGlobalProperty && (P.config.globalProperties.$interact = $e);
  }
};
export {
  $r as default,
  Gr as useDraggable,
  Br as useInteractContext,
  Wr as useResizable
};
