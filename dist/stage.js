function wt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
/**!
 * is
 * the definitive JavaScript type testing library
 *
 * @copyright 2013-2014 Enrico Marino / Jordan Harband
 * @license MIT
 */
var ct = Object.prototype, _t = ct.hasOwnProperty, Y = ct.toString, pt;
typeof Symbol == "function" && (pt = Symbol.prototype.valueOf);
var lt;
typeof BigInt == "function" && (lt = BigInt.prototype.valueOf);
var x = function(t) {
  return t !== t;
}, bt = {
  boolean: 1,
  number: 1,
  string: 1,
  undefined: 1
}, xt = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/, kt = /^[A-Fa-f0-9]+$/, h = {};
h.a = h.type = function(t, i) {
  return typeof t === i;
};
h.defined = function(t) {
  return typeof t < "u";
};
h.empty = function(t) {
  var i = Y.call(t), e;
  if (i === "[object Array]" || i === "[object Arguments]" || i === "[object String]")
    return t.length === 0;
  if (i === "[object Object]") {
    for (e in t)
      if (_t.call(t, e))
        return !1;
    return !0;
  }
  return !t;
};
h.equal = function(i, e) {
  if (i === e)
    return !0;
  var n = Y.call(i), r;
  if (n !== Y.call(e))
    return !1;
  if (n === "[object Object]") {
    for (r in i)
      if (!h.equal(i[r], e[r]) || !(r in e))
        return !1;
    for (r in e)
      if (!h.equal(i[r], e[r]) || !(r in i))
        return !1;
    return !0;
  }
  if (n === "[object Array]") {
    if (r = i.length, r !== e.length)
      return !1;
    for (; r--; )
      if (!h.equal(i[r], e[r]))
        return !1;
    return !0;
  }
  return n === "[object Function]" ? i.prototype === e.prototype : n === "[object Date]" ? i.getTime() === e.getTime() : !1;
};
h.hosted = function(t, i) {
  var e = typeof i[t];
  return e === "object" ? !!i[t] : !bt[e];
};
h.instance = h.instanceof = function(t, i) {
  return t instanceof i;
};
h.nil = h.null = function(t) {
  return t === null;
};
h.undef = h.undefined = function(t) {
  return typeof t > "u";
};
h.args = h.arguments = function(t) {
  var i = Y.call(t) === "[object Arguments]", e = !h.array(t) && h.arraylike(t) && h.object(t) && h.fn(t.callee);
  return i || e;
};
h.array = Array.isArray || function(t) {
  return Y.call(t) === "[object Array]";
};
h.args.empty = function(t) {
  return h.args(t) && t.length === 0;
};
h.array.empty = function(t) {
  return h.array(t) && t.length === 0;
};
h.arraylike = function(t) {
  return !!t && !h.bool(t) && _t.call(t, "length") && isFinite(t.length) && h.number(t.length) && t.length >= 0;
};
h.bool = h.boolean = function(t) {
  return Y.call(t) === "[object Boolean]";
};
h.false = function(t) {
  return h.bool(t) && !Number(t);
};
h.true = function(t) {
  return h.bool(t) && !!Number(t);
};
h.date = function(t) {
  return Y.call(t) === "[object Date]";
};
h.date.valid = function(t) {
  return h.date(t) && !isNaN(Number(t));
};
h.element = function(t) {
  return t !== void 0 && typeof HTMLElement < "u" && t instanceof HTMLElement && t.nodeType === 1;
};
h.error = function(t) {
  return Y.call(t) === "[object Error]";
};
h.fn = h.function = function(t) {
  var i = typeof window < "u" && t === window.alert;
  if (i)
    return !0;
  var e = Y.call(t);
  return e === "[object Function]" || e === "[object GeneratorFunction]" || e === "[object AsyncFunction]";
};
h.number = function(t) {
  return Y.call(t) === "[object Number]";
};
h.infinite = function(t) {
  return t === 1 / 0 || t === -1 / 0;
};
h.decimal = function(t) {
  return h.number(t) && !x(t) && !h.infinite(t) && t % 1 !== 0;
};
h.divisibleBy = function(t, i) {
  var e = h.infinite(t), n = h.infinite(i), r = h.number(t) && !x(t) && h.number(i) && !x(i) && i !== 0;
  return e || n || r && t % i === 0;
};
h.integer = h.int = function(t) {
  return h.number(t) && !x(t) && t % 1 === 0;
};
h.maximum = function(t, i) {
  if (x(t))
    throw new TypeError("NaN is not a valid value");
  if (!h.arraylike(i))
    throw new TypeError("second argument must be array-like");
  for (var e = i.length; --e >= 0; )
    if (t < i[e])
      return !1;
  return !0;
};
h.minimum = function(t, i) {
  if (x(t))
    throw new TypeError("NaN is not a valid value");
  if (!h.arraylike(i))
    throw new TypeError("second argument must be array-like");
  for (var e = i.length; --e >= 0; )
    if (t > i[e])
      return !1;
  return !0;
};
h.nan = function(t) {
  return !h.number(t) || t !== t;
};
h.even = function(t) {
  return h.infinite(t) || h.number(t) && t === t && t % 2 === 0;
};
h.odd = function(t) {
  return h.infinite(t) || h.number(t) && t === t && t % 2 !== 0;
};
h.ge = function(t, i) {
  if (x(t) || x(i))
    throw new TypeError("NaN is not a valid value");
  return !h.infinite(t) && !h.infinite(i) && t >= i;
};
h.gt = function(t, i) {
  if (x(t) || x(i))
    throw new TypeError("NaN is not a valid value");
  return !h.infinite(t) && !h.infinite(i) && t > i;
};
h.le = function(t, i) {
  if (x(t) || x(i))
    throw new TypeError("NaN is not a valid value");
  return !h.infinite(t) && !h.infinite(i) && t <= i;
};
h.lt = function(t, i) {
  if (x(t) || x(i))
    throw new TypeError("NaN is not a valid value");
  return !h.infinite(t) && !h.infinite(i) && t < i;
};
h.within = function(t, i, e) {
  if (x(t) || x(i) || x(e))
    throw new TypeError("NaN is not a valid value");
  if (!h.number(t) || !h.number(i) || !h.number(e))
    throw new TypeError("all arguments must be numbers");
  var n = h.infinite(t) || h.infinite(i) || h.infinite(e);
  return n || t >= i && t <= e;
};
h.object = function(t) {
  return Y.call(t) === "[object Object]";
};
h.primitive = function(i) {
  return i ? !(typeof i == "object" || h.object(i) || h.fn(i) || h.array(i)) : !0;
};
h.hash = function(t) {
  return h.object(t) && t.constructor === Object && !t.nodeType && !t.setInterval;
};
h.regexp = function(t) {
  return Y.call(t) === "[object RegExp]";
};
h.string = function(t) {
  return Y.call(t) === "[object String]";
};
h.base64 = function(t) {
  return h.string(t) && (!t.length || xt.test(t));
};
h.hex = function(t) {
  return h.string(t) && (!t.length || kt.test(t));
};
h.symbol = function(t) {
  return typeof Symbol == "function" && Y.call(t) === "[object Symbol]" && typeof pt.call(t) == "symbol";
};
h.bigint = function(t) {
  return typeof BigInt == "function" && Y.call(t) === "[object BigInt]" && typeof lt.call(t) == "bigint";
};
var Xt = h;
const d = /* @__PURE__ */ wt(Xt), I = {};
function Yt() {
  var t = 0;
  function i(r, s) {
    return t += s = typeof s == "number" && s >= 1 ? s : 1, function() {
      r && r.apply(this, arguments), s > 0 && (s--, t--, n());
    };
  }
  var e = [];
  function n() {
    if (t === 0)
      for (; e.length; )
        setTimeout(e.shift(), 0);
  }
  return i.then = function(r) {
    t === 0 ? setTimeout(r, 0) : e.push(r);
  }, i;
}
I.create = 0;
function o(t) {
  if (!(this instanceof o))
    return d.fn(t) ? o.app.apply(o, arguments) : d.object(t) ? o.atlas.apply(o, arguments) : t;
  I.create++;
  for (var i = 0; i < et.length; i++)
    et[i].call(this);
}
var et = [];
o._init = function(t) {
  et.push(t);
};
var nt = [];
o._load = function(t) {
  nt.push(t);
};
var tt = {};
o.config = function() {
  if (arguments.length === 1 && d.string(arguments[0]))
    return tt[arguments[0]];
  arguments.length === 1 && d.object(arguments[0]) && Object.assign(tt, arguments[0]), arguments.length === 2 && d.string(arguments[0]) && tt[arguments[1]];
};
var rt = [], D = [], dt = !1, Q = !1;
o.app = function(t, i) {
  if (!dt) {
    rt.push(arguments);
    return;
  }
  console.log("Creating app...");
  var e = o.config("app-loader");
  e(function(n, r) {
    console.log("Initing app...");
    for (var s = 0; s < nt.length; s++)
      nt[s].call(this, n, r);
    t(n, r), D.push(n), console.log("Starting app..."), n.start();
  }, i);
};
var gt = Yt();
o.preload = function(t) {
  typeof t == "function" && t(gt());
};
o.start = function(t) {
  console.log("Starting..."), o.config(t), gt.then(function() {
    for (console.log("Loading apps..."), dt = !0; rt.length; ) {
      var i = rt.shift();
      o.app.apply(o, i);
    }
  });
};
o.pause = function() {
  if (!Q) {
    Q = !0;
    for (var t = D.length - 1; t >= 0; t--)
      D[t].pause();
  }
};
o.resume = function() {
  if (Q) {
    Q = !1;
    for (var t = D.length - 1; t >= 0; t--)
      D[t].resume();
  }
};
o.create = function() {
  return new o();
};
function m(t, i, e, n, r, s) {
  this.reset(t, i, e, n, r, s);
}
m.prototype.toString = function() {
  return "[" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.e + ", " + this.f + "]";
};
m.prototype.clone = function() {
  return new m(this.a, this.b, this.c, this.d, this.e, this.f);
};
m.prototype.reset = function(t, i, e, n, r, s) {
  return this._dirty = !0, typeof t == "object" ? (this.a = t.a, this.d = t.d, this.b = t.b, this.c = t.c, this.e = t.e, this.f = t.f) : (this.a = t || 1, this.d = n || 1, this.b = i || 0, this.c = e || 0, this.e = r || 0, this.f = s || 0), this;
};
m.prototype.identity = function() {
  return this._dirty = !0, this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0, this;
};
m.prototype.rotate = function(t) {
  if (!t)
    return this;
  this._dirty = !0;
  var i = t ? Math.cos(t) : 1, e = t ? Math.sin(t) : 0, n = i * this.a - e * this.b, r = i * this.b + e * this.a, s = i * this.c - e * this.d, a = i * this.d + e * this.c, c = i * this.e - e * this.f, u = i * this.f + e * this.e;
  return this.a = n, this.b = r, this.c = s, this.d = a, this.e = c, this.f = u, this;
};
m.prototype.translate = function(t, i) {
  return !t && !i ? this : (this._dirty = !0, this.e += t, this.f += i, this);
};
m.prototype.scale = function(t, i) {
  return !(t - 1) && !(i - 1) ? this : (this._dirty = !0, this.a *= t, this.b *= i, this.c *= t, this.d *= i, this.e *= t, this.f *= i, this);
};
m.prototype.skew = function(t, i) {
  if (!t && !i)
    return this;
  this._dirty = !0;
  var e = this.a + this.b * t, n = this.b + this.a * i, r = this.c + this.d * t, s = this.d + this.c * i, a = this.e + this.f * t, c = this.f + this.e * i;
  return this.a = e, this.b = n, this.c = r, this.d = s, this.e = a, this.f = c, this;
};
m.prototype.concat = function(t) {
  this._dirty = !0;
  var i = this, e = i.a * t.a + i.b * t.c, n = i.b * t.d + i.a * t.b, r = i.c * t.a + i.d * t.c, s = i.d * t.d + i.c * t.b, a = i.e * t.a + t.e + i.f * t.c, c = i.f * t.d + t.f + i.e * t.b;
  return this.a = e, this.b = n, this.c = r, this.d = s, this.e = a, this.f = c, this;
};
m.prototype.inverse = m.prototype.reverse = function() {
  if (this._dirty) {
    this._dirty = !1, this.inversed = this.inversed || new m();
    var t = this.a * this.d - this.b * this.c;
    this.inversed.a = this.d / t, this.inversed.b = -this.b / t, this.inversed.c = -this.c / t, this.inversed.d = this.a / t, this.inversed.e = (this.c * this.f - this.e * this.d) / t, this.inversed.f = (this.e * this.b - this.a * this.f) / t;
  }
  return this.inversed;
};
m.prototype.map = function(t, i) {
  return i = i || {}, i.x = this.a * t.x + this.c * t.y + this.e, i.y = this.b * t.x + this.d * t.y + this.f, i;
};
m.prototype.mapX = function(t, i) {
  return typeof t == "object" && (i = t.y, t = t.x), this.a * t + this.c * i + this.e;
};
m.prototype.mapY = function(t, i) {
  return typeof t == "object" && (i = t.y, t = t.x), this.b * t + this.d * i + this.f;
};
var yt = Math;
const N = Object.create(Math);
N.random = function(t, i) {
  return typeof t > "u" ? (i = 1, t = 0) : typeof i > "u" && (i = t, t = 0), t == i ? t : yt.random() * (i - t) + t;
};
N.rotate = function(t, i, e) {
  return typeof i > "u" ? (e = 1, i = 0) : typeof e > "u" && (e = i, i = 0), e > i ? (t = (t - i) % (e - i), t + (t < 0 ? e : i)) : (t = (t - e) % (i - e), t + (t <= 0 ? i : e));
};
N.limit = function(t, i, e) {
  return t < i ? i : t > e ? e : t;
};
N.length = function(t, i) {
  return yt.sqrt(t * t + i * i);
};
function R(t, i) {
  typeof t == "object" && this.src(t, i);
}
R.prototype.pipe = function() {
  return new R(this);
};
R.prototype.src = function(t, i, e, n) {
  if (typeof t == "object") {
    var r = t, s = i || 1;
    this._image = r, this._sx = this._dx = 0, this._sy = this._dy = 0, this._sw = this._dw = r.width / s, this._sh = this._dh = r.height / s, this.width = r.width / s, this.height = r.height / s, this.ratio = s;
  } else
    typeof e > "u" ? (e = t, n = i) : (this._sx = t, this._sy = i), this._sw = this._dw = e, this._sh = this._dh = n, this.width = e, this.height = n;
  return this;
};
R.prototype.dest = function(t, i, e, n) {
  return this._dx = t, this._dy = i, this._dx = t, this._dy = i, typeof e < "u" && (this._dw = e, this._dh = n, this.width = e, this.height = n), this;
};
R.prototype.draw = function(t, i, e, n, r, s, a, c, u) {
  var p = this._image;
  if (!(p === null || typeof p != "object")) {
    var f = this._sx, _ = this._sy, l = this._sw, y = this._sh, k = this._dx, b = this._dy, T = this._dw, X = this._dh;
    typeof s < "u" ? (i = N.limit(i, 0, this._sw), n = N.limit(n, 0, this._sw - i), e = N.limit(e, 0, this._sh), r = N.limit(r, 0, this._sh - e), f += i, _ += e, l = n, y = r, k = s, b = a, T = c, X = u) : typeof n < "u" ? (k = i, b = e, T = n, X = r) : typeof i < "u" && (T = i, X = e);
    var v = this.ratio || 1;
    f *= v, _ *= v, l *= v, y *= v;
    try {
      typeof p.draw == "function" ? p.draw(t, f, _, l, y, k, b, T, X) : (I.draw++, t.drawImage(p, f, _, l, y, k, b, T, X));
    } catch (C) {
      p._draw_failed || (console.log("Unable to draw: ", p), console.log(C), p._draw_failed = !0);
    }
  }
};
var st = {}, ot = [];
o.atlas = function(t) {
  var i = d.fn(t.draw) ? t : new $(t);
  t.name && (st[t.name] = i), ot.push(i), z(t, "imagePath"), z(t, "imageRatio");
  var e = t.imagePath, n = t.imageRatio || 1;
  return d.string(t.image) ? e = t.image : d.hash(t.image) && (e = t.image.src || t.image.url, n = t.image.ratio || n), e && o.preload(function(r) {
    console.log("Loading atlas: " + e);
    var s = o.config("image-loader");
    s(e, function(a) {
      console.log("Image loaded: " + e), i.src(a, n), r();
    }, function(a) {
      console.log("Error loading atlas: " + e, a), r();
    });
  }), i;
};
$._super = R;
$.prototype = Object.create($._super.prototype);
function $(t) {
  $._super.call(this);
  var i = this;
  z(t, "filter"), z(t, "cutouts"), z(t, "sprites"), z(t, "factory");
  var e = t.map || t.filter, n = t.ppu || t.ratio || 1, r = t.trim || 0, s = t.textures, a = t.factory, c = t.cutouts || t.sprites;
  function u(f) {
    if (!f || d.fn(f.draw))
      return f;
    f = Object.assign({}, f), d.fn(e) && (f = e(f)), n != 1 && (f.x *= n, f.y *= n, f.width *= n, f.height *= n, f.top *= n, f.bottom *= n, f.left *= n, f.right *= n), r != 0 && (f.x += r, f.y += r, f.width -= 2 * r, f.height -= 2 * r, f.top -= r, f.bottom -= r, f.left -= r, f.right -= r);
    var _ = i.pipe();
    return _.top = f.top, _.bottom = f.bottom, _.left = f.left, _.right = f.right, _.src(f.x, f.y, f.width, f.height), _;
  }
  function p(f) {
    if (s) {
      if (d.fn(s))
        return s(f);
      if (d.hash(s))
        return s[f];
    }
    if (c) {
      for (var _ = null, l = 0, y = 0; y < c.length; y++)
        string.startsWith(c[y].name, f) && (l === 0 ? _ = c[y] : l === 1 ? _ = [_, c[y]] : _.push(c[y]), l++);
      return l === 0 && d.fn(a) && (_ = function(k) {
        return a(f + (k || ""));
      }), _;
    }
  }
  this.select = function(f) {
    if (!f)
      return new q(this.pipe());
    var _ = p(f);
    if (_)
      return new q(_, p, u);
  };
}
var P = new R();
P.x = P.y = P.width = P.height = 0;
P.pipe = P.src = P.dest = function() {
  return this;
};
P.draw = function() {
};
var At = new q(P);
function q(t, i, e) {
  function n(r, s) {
    if (r) {
      if (d.fn(r.draw))
        return r;
      if (d.hash(r) && d.number(r.width) && d.number(r.height) && d.fn(e))
        return e(r);
      if (d.hash(r) && d.defined(s))
        return n(r[s]);
      if (d.fn(r))
        return n(r(s));
      if (d.array(r))
        return n(r[0]);
      if (d.string(r) && d.fn(i))
        return n(i(r));
    } else
      return P;
  }
  this.one = function(r) {
    return n(t, r);
  }, this.array = function(r) {
    var s = d.array(r) ? r : [];
    if (d.array(t))
      for (var a = 0; a < t.length; a++)
        s[a] = n(t[a]);
    else
      s[0] = n(t);
    return s;
  };
}
o.texture = function(t) {
  if (!d.string(t))
    return new q(t);
  var i = null, e, n;
  for ((n = t.indexOf(":")) > 0 && t.length > n + 1 && (e = st[t.slice(0, n)], i = e && e.select(t.slice(n + 1))), !i && (e = st[t]) && (i = e.select()), n = 0; !i && n < ot.length; n++)
    i = ot[n].select(t);
  return i || (console.error("Texture not found: " + t), i = At), i;
};
function z(t, i, e) {
  i in t && console.log(e ? e.replace("%name", i) : "'" + i + "' field of texture atlas is deprecated.");
}
var j = 0;
o.prototype._label = "";
o.prototype._visible = !0;
o.prototype._parent = null;
o.prototype._next = null;
o.prototype._prev = null;
o.prototype._first = null;
o.prototype._last = null;
o.prototype._attrs = null;
o.prototype._flags = null;
o.prototype.toString = function() {
  return "[" + this._label + "]";
};
o.prototype.id = function(t) {
  return this.label(t);
};
o.prototype.label = function(t) {
  return typeof t > "u" ? this._label : (this._label = t, this);
};
o.prototype.attr = function(t, i) {
  return typeof i > "u" ? this._attrs !== null ? this._attrs[t] : void 0 : ((this._attrs !== null ? this._attrs : this._attrs = {})[t] = i, this);
};
o.prototype.visible = function(t) {
  return typeof t > "u" ? this._visible : (this._visible = t, this._parent && (this._parent._ts_children = ++j), this._ts_pin = ++j, this.touch(), this);
};
o.prototype.hide = function() {
  return this.visible(!1);
};
o.prototype.show = function() {
  return this.visible(!0);
};
o.prototype.parent = function() {
  return this._parent;
};
o.prototype.next = function(t) {
  for (var i = this._next; i && t && !i._visible; )
    i = i._next;
  return i;
};
o.prototype.prev = function(t) {
  for (var i = this._prev; i && t && !i._visible; )
    i = i._prev;
  return i;
};
o.prototype.first = function(t) {
  for (var i = this._first; i && t && !i._visible; )
    i = i._next;
  return i;
};
o.prototype.last = function(t) {
  for (var i = this._last; i && t && !i._visible; )
    i = i._prev;
  return i;
};
o.prototype.visit = function(t, i) {
  var e = t.reverse, n = t.visible;
  if (!(t.start && t.start(this, i))) {
    for (var r, s = e ? this.last(n) : this.first(n); r = s; )
      if (s = e ? r.prev(n) : r.next(n), r.visit(t, i))
        return !0;
    return t.end && t.end(this, i);
  }
};
o.prototype.append = function(t, i) {
  if (d.array(t))
    for (var e = 0; e < t.length; e++)
      G(this, t[e]);
  else if (typeof i < "u")
    for (var e = 0; e < arguments.length; e++)
      G(this, arguments[e]);
  else
    typeof t < "u" && G(this, t);
  return this;
};
o.prototype.prepend = function(t, i) {
  if (d.array(t))
    for (var e = t.length - 1; e >= 0; e--)
      K(this, t[e]);
  else if (typeof i < "u")
    for (var e = arguments.length - 1; e >= 0; e--)
      K(this, arguments[e]);
  else
    typeof t < "u" && K(this, t);
  return this;
};
o.prototype.appendTo = function(t) {
  return G(t, this), this;
};
o.prototype.prependTo = function(t) {
  return K(t, this), this;
};
o.prototype.insertNext = function(t, i) {
  if (d.array(t))
    for (var e = 0; e < t.length; e++)
      J(t[e], this);
  else if (typeof i < "u")
    for (var e = 0; e < arguments.length; e++)
      J(arguments[e], this);
  else
    typeof t < "u" && J(t, this);
  return this;
};
o.prototype.insertPrev = function(t, i) {
  if (d.array(t))
    for (var e = t.length - 1; e >= 0; e--)
      U(t[e], this);
  else if (typeof i < "u")
    for (var e = arguments.length - 1; e >= 0; e--)
      U(arguments[e], this);
  else
    typeof t < "u" && U(t, this);
  return this;
};
o.prototype.insertAfter = function(t) {
  return J(this, t), this;
};
o.prototype.insertBefore = function(t) {
  return U(this, t), this;
};
function G(t, i) {
  S(i), S(t), i.remove(), t._last && (t._last._next = i, i._prev = t._last), i._parent = t, t._last = i, t._first || (t._first = i), i._parent._flag(i, !0), i._ts_parent = ++j, t._ts_children = ++j, t.touch();
}
function K(t, i) {
  S(i), S(t), i.remove(), t._first && (t._first._prev = i, i._next = t._first), i._parent = t, t._first = i, t._last || (t._last = i), i._parent._flag(i, !0), i._ts_parent = ++j, t._ts_children = ++j, t.touch();
}
function U(t, i) {
  S(t), S(i), t.remove();
  var e = i._parent, n = i._prev;
  i._prev = t, n && (n._next = t) || e && (e._first = t), t._parent = e, t._prev = n, t._next = i, t._parent._flag(t, !0), t._ts_parent = ++j, t.touch();
}
function J(t, i) {
  S(t), S(i), t.remove();
  var e = i._parent, n = i._next;
  i._next = t, n && (n._prev = t) || e && (e._last = t), t._parent = e, t._prev = i, t._next = n, t._parent._flag(t, !0), t._ts_parent = ++j, t.touch();
}
o.prototype.remove = function(t, i) {
  if (typeof t < "u") {
    if (d.array(t))
      for (var e = 0; e < t.length; e++)
        S(t[e]).remove();
    else if (typeof i < "u")
      for (var e = 0; e < arguments.length; e++)
        S(arguments[e]).remove();
    else
      S(t).remove();
    return this;
  }
  return this._prev && (this._prev._next = this._next), this._next && (this._next._prev = this._prev), this._parent && (this._parent._first === this && (this._parent._first = this._next), this._parent._last === this && (this._parent._last = this._prev), this._parent._flag(this, !1), this._parent._ts_children = ++j, this._parent.touch()), this._prev = this._next = this._parent = null, this._ts_parent = ++j, this;
};
o.prototype.empty = function() {
  for (var t, i = this._first; t = i; )
    i = t._next, t._prev = t._next = t._parent = null, this._flag(t, !1);
  return this._first = this._last = null, this._ts_children = ++j, this.touch(), this;
};
o.prototype.touch = function() {
  return this._ts_touch = ++j, this._parent && this._parent.touch(), this;
};
o.prototype._flag = function(t, i) {
  if (typeof i > "u")
    return this._flags !== null && this._flags[t] || 0;
  if (typeof t == "string" && (i ? (this._flags = this._flags || {}, !this._flags[t] && this._parent && this._parent._flag(t, !0), this._flags[t] = (this._flags[t] || 0) + 1) : this._flags && this._flags[t] > 0 && (this._flags[t] == 1 && this._parent && this._parent._flag(t, !1), this._flags[t] = this._flags[t] - 1)), typeof t == "object" && t._flags)
    for (var e in t._flags)
      t._flags[e] > 0 && this._flag(e, i);
  return this;
};
o.prototype.hitTest = function(t) {
  var i = this._pin._width, e = this._pin._height;
  return t.x >= 0 && t.x <= i && t.y >= 0 && t.y <= e;
};
function S(t) {
  if (t && t instanceof o)
    return t;
  throw "Invalid node: " + t;
}
function Mt(t, i) {
  t._listeners = null, t.on = t.listen = function(e, n) {
    if (!e || !e.length || typeof n != "function")
      return this;
    this._listeners === null && (this._listeners = {});
    var r = typeof e != "string" && typeof e.join == "function";
    if (e = (r ? e.join(" ") : e).match(/\S+/g))
      for (var s = 0; s < e.length; s++) {
        var a = e[s];
        this._listeners[a] = this._listeners[a] || [], this._listeners[a].push(n), typeof i == "function" && i(this, a, !0);
      }
    return this;
  }, t.off = function(e, n) {
    if (!e || !e.length || typeof n != "function")
      return this;
    if (this._listeners === null)
      return this;
    var r = typeof e != "string" && typeof e.join == "function";
    if (e = (r ? e.join(" ") : e).match(/\S+/g))
      for (var s = 0; s < e.length; s++) {
        var a = e[s], c = this._listeners[a], u;
        c && (u = c.indexOf(n)) >= 0 && (c.splice(u, 1), c.length || delete this._listeners[a], typeof i == "function" && i(this, a, !1));
      }
    return this;
  }, t.listeners = function(e) {
    return this._listeners && this._listeners[e];
  }, t.publish = function(e, n) {
    var r = this.listeners(e);
    if (!r || !r.length)
      return 0;
    for (var s = 0; s < r.length; s++)
      r[s].apply(this, n);
    return r.length;
  }, t.trigger = function(e, n) {
    return this.publish(e, n), this;
  };
}
var g = 0;
o._init(function() {
  this._pin = new O(this);
});
o.prototype.matrix = function(t) {
  return t === !0 ? this._pin.relativeMatrix() : this._pin.absoluteMatrix();
};
o.prototype.pin = function(t, i) {
  if (typeof t == "object")
    return this._pin.set(t), this;
  if (typeof t == "string")
    return typeof i > "u" ? this._pin.get(t) : (this._pin.set(t, i), this);
  if (typeof t > "u")
    return this._pin;
};
function O(t) {
  this._owner = t, this._parent = null, this._relativeMatrix = new m(), this._absoluteMatrix = new m(), this.reset();
}
O.prototype.reset = function() {
  this._textureAlpha = 1, this._alpha = 1, this._width = 0, this._height = 0, this._scaleX = 1, this._scaleY = 1, this._skewX = 0, this._skewY = 0, this._rotation = 0, this._pivoted = !1, this._pivotX = null, this._pivotY = null, this._handled = !1, this._handleX = 0, this._handleY = 0, this._aligned = !1, this._alignX = 0, this._alignY = 0, this._offsetX = 0, this._offsetY = 0, this._boxX = 0, this._boxY = 0, this._boxWidth = this._width, this._boxHeight = this._height, this._ts_translate = ++g, this._ts_transform = ++g, this._ts_matrix = ++g;
};
O.prototype._update = function() {
  return this._parent = this._owner._parent && this._owner._parent._pin, this._handled && this._mo_handle != this._ts_transform && (this._mo_handle = this._ts_transform, this._ts_translate = ++g), this._aligned && this._parent && this._mo_align != this._parent._ts_transform && (this._mo_align = this._parent._ts_transform, this._ts_translate = ++g), this;
};
O.prototype.toString = function() {
  return this._owner + " (" + (this._parent ? this._parent._owner : null) + ")";
};
O.prototype.absoluteMatrix = function() {
  this._update();
  var t = Math.max(
    this._ts_transform,
    this._ts_translate,
    this._parent ? this._parent._ts_matrix : 0
  );
  if (this._mo_abs == t)
    return this._absoluteMatrix;
  this._mo_abs = t;
  var i = this._absoluteMatrix;
  return i.reset(this.relativeMatrix()), this._parent && i.concat(this._parent._absoluteMatrix), this._ts_matrix = ++g, i;
};
O.prototype.relativeMatrix = function() {
  this._update();
  var t = Math.max(
    this._ts_transform,
    this._ts_translate,
    this._parent ? this._parent._ts_transform : 0
  );
  if (this._mo_rel == t)
    return this._relativeMatrix;
  this._mo_rel = t;
  var i = this._relativeMatrix;
  if (i.identity(), this._pivoted && i.translate(-this._pivotX * this._width, -this._pivotY * this._height), i.scale(this._scaleX, this._scaleY), i.skew(this._skewX, this._skewY), i.rotate(this._rotation), this._pivoted && i.translate(this._pivotX * this._width, this._pivotY * this._height), this._pivoted)
    this._boxX = 0, this._boxY = 0, this._boxWidth = this._width, this._boxHeight = this._height;
  else {
    var e, n;
    i.a > 0 && i.c > 0 || i.a < 0 && i.c < 0 ? (e = 0, n = i.a * this._width + i.c * this._height) : (e = i.a * this._width, n = i.c * this._height), e > n ? (this._boxX = n, this._boxWidth = e - n) : (this._boxX = e, this._boxWidth = n - e), i.b > 0 && i.d > 0 || i.b < 0 && i.d < 0 ? (e = 0, n = i.b * this._width + i.d * this._height) : (e = i.b * this._width, n = i.d * this._height), e > n ? (this._boxY = n, this._boxHeight = e - n) : (this._boxY = e, this._boxHeight = n - e);
  }
  return this._x = this._offsetX, this._y = this._offsetY, this._x -= this._boxX + this._handleX * this._boxWidth, this._y -= this._boxY + this._handleY * this._boxHeight, this._aligned && this._parent && (this._parent.relativeMatrix(), this._x += this._alignX * this._parent._width, this._y += this._alignY * this._parent._height), i.translate(this._x, this._y), this._relativeMatrix;
};
O.prototype.get = function(t) {
  if (typeof ft[t] == "function")
    return ft[t](this);
};
O.prototype.set = function(t, i) {
  if (typeof t == "string")
    typeof Z[t] == "function" && typeof i < "u" && Z[t](this, i);
  else if (typeof t == "object")
    for (i in t)
      typeof Z[i] == "function" && typeof t[i] < "u" && Z[i](this, t[i], t);
  return this._owner && (this._owner._ts_pin = ++g, this._owner.touch()), this;
};
var ft = {
  alpha: function(t) {
    return t._alpha;
  },
  textureAlpha: function(t) {
    return t._textureAlpha;
  },
  width: function(t) {
    return t._width;
  },
  height: function(t) {
    return t._height;
  },
  boxWidth: function(t) {
    return t._boxWidth;
  },
  boxHeight: function(t) {
    return t._boxHeight;
  },
  // scale : function(pin) {
  // },
  scaleX: function(t) {
    return t._scaleX;
  },
  scaleY: function(t) {
    return t._scaleY;
  },
  // skew : function(pin) {
  // },
  skewX: function(t) {
    return t._skewX;
  },
  skewY: function(t) {
    return t._skewY;
  },
  rotation: function(t) {
    return t._rotation;
  },
  // pivot : function(pin) {
  // },
  pivotX: function(t) {
    return t._pivotX;
  },
  pivotY: function(t) {
    return t._pivotY;
  },
  // offset : function(pin) {
  // },
  offsetX: function(t) {
    return t._offsetX;
  },
  offsetY: function(t) {
    return t._offsetY;
  },
  // align : function(pin) {
  // },
  alignX: function(t) {
    return t._alignX;
  },
  alignY: function(t) {
    return t._alignY;
  },
  // handle : function(pin) {
  // },
  handleX: function(t) {
    return t._handleX;
  },
  handleY: function(t) {
    return t._handleY;
  }
}, Z = {
  alpha: function(t, i) {
    t._alpha = i;
  },
  textureAlpha: function(t, i) {
    t._textureAlpha = i;
  },
  width: function(t, i) {
    t._width_ = i, t._width = i, t._ts_transform = ++g;
  },
  height: function(t, i) {
    t._height_ = i, t._height = i, t._ts_transform = ++g;
  },
  scale: function(t, i) {
    t._scaleX = i, t._scaleY = i, t._ts_transform = ++g;
  },
  scaleX: function(t, i) {
    t._scaleX = i, t._ts_transform = ++g;
  },
  scaleY: function(t, i) {
    t._scaleY = i, t._ts_transform = ++g;
  },
  skew: function(t, i) {
    t._skewX = i, t._skewY = i, t._ts_transform = ++g;
  },
  skewX: function(t, i) {
    t._skewX = i, t._ts_transform = ++g;
  },
  skewY: function(t, i) {
    t._skewY = i, t._ts_transform = ++g;
  },
  rotation: function(t, i) {
    t._rotation = i, t._ts_transform = ++g;
  },
  pivot: function(t, i) {
    t._pivotX = i, t._pivotY = i, t._pivoted = !0, t._ts_transform = ++g;
  },
  pivotX: function(t, i) {
    t._pivotX = i, t._pivoted = !0, t._ts_transform = ++g;
  },
  pivotY: function(t, i) {
    t._pivotY = i, t._pivoted = !0, t._ts_transform = ++g;
  },
  offset: function(t, i) {
    t._offsetX = i, t._offsetY = i, t._ts_translate = ++g;
  },
  offsetX: function(t, i) {
    t._offsetX = i, t._ts_translate = ++g;
  },
  offsetY: function(t, i) {
    t._offsetY = i, t._ts_translate = ++g;
  },
  align: function(t, i) {
    this.alignX(t, i), this.alignY(t, i);
  },
  alignX: function(t, i) {
    t._alignX = i, t._aligned = !0, t._ts_translate = ++g, this.handleX(t, i);
  },
  alignY: function(t, i) {
    t._alignY = i, t._aligned = !0, t._ts_translate = ++g, this.handleY(t, i);
  },
  handle: function(t, i) {
    this.handleX(t, i), this.handleY(t, i);
  },
  handleX: function(t, i) {
    t._handleX = i, t._handled = !0, t._ts_translate = ++g;
  },
  handleY: function(t, i) {
    t._handleY = i, t._handled = !0, t._ts_translate = ++g;
  },
  resizeMode: function(t, i, e) {
    e && (i == "in" ? i = "in-pad" : i == "out" && (i = "out-crop"), W(t, e.resizeWidth, e.resizeHeight, i));
  },
  resizeWidth: function(t, i, e) {
    (!e || !e.resizeMode) && W(t, i, null);
  },
  resizeHeight: function(t, i, e) {
    (!e || !e.resizeMode) && W(t, null, i);
  },
  scaleMode: function(t, i, e) {
    e && W(t, e.scaleWidth, e.scaleHeight, i);
  },
  scaleWidth: function(t, i, e) {
    (!e || !e.scaleMode) && W(t, i, null);
  },
  scaleHeight: function(t, i, e) {
    (!e || !e.scaleMode) && W(t, null, i);
  },
  matrix: function(t, i) {
    this.scaleX(t, i.a), this.skewX(t, i.c / i.d), this.skewY(t, i.b / i.a), this.scaleY(t, i.d), this.offsetX(t, i.e), this.offsetY(t, i.f), this.rotation(t, 0);
  }
};
function W(t, i, e, n) {
  var r = typeof i == "number", s = typeof e == "number", a = typeof n == "string";
  t._ts_transform = ++g, r && (t._scaleX = i / t._width_, t._width = t._width_), s && (t._scaleY = e / t._height_, t._height = t._height_), r && s && a && (n == "out" || n == "out-crop" ? t._scaleX = t._scaleY = Math.max(t._scaleX, t._scaleY) : (n == "in" || n == "in-pad") && (t._scaleX = t._scaleY = Math.min(t._scaleX, t._scaleY)), (n == "out-crop" || n == "in-pad") && (t._width = i / t._scaleX, t._height = e / t._scaleY));
}
o.prototype.scaleTo = function(t, i, e) {
  return typeof t == "object" && (e = i, i = t.y, t = t.x), W(this._pin, t, i, e), this;
};
O._add_shortcuts = function(t) {
  t.prototype.size = function(i, e) {
    return this.pin("width", i), this.pin("height", e), this;
  }, t.prototype.width = function(i) {
    return typeof i > "u" ? this.pin("width") : (this.pin("width", i), this);
  }, t.prototype.height = function(i) {
    return typeof i > "u" ? this.pin("height") : (this.pin("height", i), this);
  }, t.prototype.offset = function(i, e) {
    return typeof i == "object" && (e = i.y, i = i.x), this.pin("offsetX", i), this.pin("offsetY", e), this;
  }, t.prototype.rotate = function(i) {
    return this.pin("rotation", i), this;
  }, t.prototype.skew = function(i, e) {
    return typeof i == "object" ? (e = i.y, i = i.x) : typeof e > "u" && (e = i), this.pin("skewX", i), this.pin("skewY", e), this;
  }, t.prototype.scale = function(i, e) {
    return typeof i == "object" ? (e = i.y, i = i.x) : typeof e > "u" && (e = i), this.pin("scaleX", i), this.pin("scaleY", e), this;
  }, t.prototype.alpha = function(i, e) {
    return this.pin("alpha", i), typeof e < "u" && this.pin("textureAlpha", e), this;
  };
};
O._add_shortcuts(o);
o.prototype._textures = null;
o.prototype._alpha = 1;
o.prototype.render = function(t) {
  if (this._visible) {
    I.node++;
    var i = this.matrix();
    t.setTransform(i.a, i.b, i.c, i.d, i.e, i.f), this._alpha = this._pin._alpha * (this._parent ? this._parent._alpha : 1);
    var e = this._pin._textureAlpha * this._alpha;
    if (t.globalAlpha != e && (t.globalAlpha = e), this._textures !== null)
      for (var n = 0, r = this._textures.length; n < r; n++)
        this._textures[n].draw(t);
    t.globalAlpha != this._alpha && (t.globalAlpha = this._alpha);
    for (var s, a = this._first; s = a; )
      a = s._next, s.render(t);
  }
};
o.prototype._tickBefore = null;
o.prototype._tickAfter = null;
o.prototype.MAX_ELAPSE = 1 / 0;
o.prototype._tick = function(t, i, e) {
  if (this._visible) {
    t > this.MAX_ELAPSE && (t = this.MAX_ELAPSE);
    var n = !1;
    if (this._tickBefore !== null)
      for (var r = 0; r < this._tickBefore.length; r++) {
        I.tick++;
        var s = this._tickBefore[r];
        n = s.call(this, t, i, e) === !0 || n;
      }
    for (var a, c = this._first; a = c; )
      c = a._next, a._flag("_tick") && (n = a._tick(t, i, e) === !0 ? !0 : n);
    if (this._tickAfter !== null)
      for (var r = 0; r < this._tickAfter.length; r++) {
        I.tick++;
        var s = this._tickAfter[r];
        n = s.call(this, t, i, e) === !0 || n;
      }
    return n;
  }
};
o.prototype.tick = function(t, i) {
  typeof t == "function" && (i ? (this._tickBefore === null && (this._tickBefore = []), this._tickBefore.push(t)) : (this._tickAfter === null && (this._tickAfter = []), this._tickAfter.push(t)), this._flag("_tick", this._tickAfter !== null && this._tickAfter.length > 0 || this._tickBefore !== null && this._tickBefore.length > 0));
};
o.prototype.untick = function(t) {
  if (typeof t == "function") {
    var i;
    this._tickBefore !== null && (i = this._tickBefore.indexOf(t)) >= 0 && this._tickBefore.splice(i, 1), this._tickAfter !== null && (i = this._tickAfter.indexOf(t)) >= 0 && this._tickAfter.splice(i, 1);
  }
};
o.prototype.timeout = function(t, i) {
  this.setTimeout(t, i);
};
o.prototype.setTimeout = function(t, i) {
  function e(n) {
    if ((i -= n) < 0)
      this.untick(e), t.call(this);
    else
      return !0;
  }
  return this.tick(e), e;
};
o.prototype.clearTimeout = function(t) {
  this.untick(t);
};
F._super = o;
F.prototype = Object.create(F._super.prototype);
o.root = function(t, i) {
  return new F(t, i);
};
function F(t, i) {
  F._super.call(this), this.label("Root");
  var e = !0, n = !0, r = this, s = 0, a = function(c) {
    if (!(e === !0 || n === !0)) {
      I.tick = I.node = I.draw = 0;
      var u = s || c, p = c - u;
      s = c;
      var f = r._tick(p, c, u);
      r._mo_touch != r._ts_touch ? (r._mo_touch = r._ts_touch, i(r), t(a)) : f ? t(a) : e = !0, I.fps = p ? 1e3 / p : 0;
    }
  };
  this.start = function() {
    return n = !1, this.resume();
  }, this.resume = function() {
    return e && (this.publish("resume"), e = !1, t(a)), this;
  }, this.pause = function() {
    return e || this.publish("pause"), e = !0, this;
  }, this.touch_root = this.touch, this.touch = function() {
    return this.resume(), this.touch_root();
  }, this.stop = function() {
    return n = !0, this;
  };
}
F.prototype.background = function(t) {
  return this;
};
F.prototype.viewport = function(t, i, e) {
  if (typeof t > "u")
    return Object.assign({}, this._viewport);
  this._viewport = {
    width: t,
    height: i,
    ratio: e || 1
  }, this.viewbox();
  var n = Object.assign({}, this._viewport);
  return this.visit({
    start: function(r) {
      if (!r._flag("viewport"))
        return !0;
      r.publish("viewport", [n]);
    }
  }), this;
};
F.prototype.viewbox = function(t, i, e) {
  typeof t == "number" && typeof i == "number" && (this._viewbox = {
    width: t,
    height: i,
    mode: /^(in|out|in-pad|out-crop)$/.test(e) ? e : "in-pad"
  });
  var n = this._viewbox, r = this._viewport;
  return r && n ? (this.pin({
    width: n.width,
    height: n.height
  }), this.scaleTo(r.width, r.height, n.mode)) : r && this.pin({
    width: r.width,
    height: r.height
  }), this;
};
o.canvas = function(t, i, e) {
  typeof t == "string" ? typeof i == "object" || (typeof i == "function" && (e = i), i = {}) : (typeof t == "function" && (e = t), i = {}, t = "2d");
  var n = document.createElement("canvas"), r = n.getContext(t, i), s = new R(n);
  return s.context = function() {
    return r;
  }, s.size = function(a, c, u) {
    return u = u || 1, n.width = a * u, n.height = c * u, this.src(n, u), this;
  }, s.canvas = function(a) {
    return typeof a == "function" ? a.call(this, r) : typeof a > "u" && typeof e == "function" && e.call(this, r), this;
  }, typeof e == "function" && e.call(s, r), s;
};
function Tt(t, i, e, n, r, s) {
  var a = t.width, c = t.height, u = t.left, p = t.right, f = t.top, _ = t.bottom;
  u = typeof u == "number" && u === u ? u : 0, p = typeof p == "number" && p === p ? p : 0, f = typeof f == "number" && f === f ? f : 0, _ = typeof _ == "number" && _ === _ ? _ : 0, a = a - u - p, c = c - f - _, r || (i = Math.max(i - u - p, 0), e = Math.max(e - f - _, 0));
  var l = 0;
  if (f > 0 && u > 0 && s(l++, 0, 0, u, f, 0, 0, u, f), _ > 0 && u > 0 && s(l++, 0, c + f, u, _, 0, e + f, u, _), f > 0 && p > 0 && s(l++, a + u, 0, p, f, i + u, 0, p, f), _ > 0 && p > 0 && s(
    l++,
    a + u,
    c + f,
    p,
    _,
    i + u,
    e + f,
    p,
    _
  ), n)
    f > 0 && s(l++, u, 0, a, f, u, 0, i, f), _ > 0 && s(
      l++,
      u,
      c + f,
      a,
      _,
      u,
      e + f,
      i,
      _
    ), u > 0 && s(l++, 0, f, u, c, 0, f, u, e), p > 0 && s(
      l++,
      a + u,
      f,
      p,
      c,
      i + u,
      f,
      p,
      e
    ), s(l++, u, f, a, c, u, f, i, e);
  else
    for (var y = u, k = i, b; k > 0; ) {
      b = Math.min(a, k), k -= a;
      for (var T = f, X = e, v; X > 0; )
        v = Math.min(c, X), X -= c, s(l++, u, f, b, v, y, T, b, v), k <= 0 && (u && s(l++, 0, f, u, v, 0, T, u, v), p && s(l++, a + u, f, p, v, y + b, T, p, v)), T += v;
      f && s(l++, u, 0, b, f, y, 0, b, f), _ && s(l++, u, c + f, b, _, y, T, b, _), y += b;
    }
  return l;
}
o.image = function(t) {
  var i = new B();
  return t && i.image(t), i;
};
B._super = o;
B.prototype = Object.create(B._super.prototype);
function B() {
  B._super.call(this), this.label("Image"), this._textures = [], this._image = null;
}
B.prototype.setImage = function(t, i, e) {
  return this.image(t, i, e);
};
B.prototype.image = function(t) {
  return this._image = o.texture(t).one(), this.pin("width", this._image ? this._image.width : 0), this.pin("height", this._image ? this._image.height : 0), this._textures[0] = this._image.pipe(), this._textures.length = 1, this;
};
B.prototype.tile = function(t) {
  return this._repeat(!1, t), this;
};
B.prototype.stretch = function(t) {
  return this._repeat(!0, t), this;
};
B.prototype._repeat = function(t, i) {
  var e = this;
  this.untick(this._repeatTicker), this.tick(this._repeatTicker = function() {
    if (this._mo_stretch != this._pin._ts_transform) {
      this._mo_stretch = this._pin._ts_transform;
      var r = this.pin("width"), s = this.pin("height");
      this._textures.length = Tt(
        this._image,
        r,
        s,
        t,
        i,
        n
      );
    }
  });
  function n(r, s, a, c, u, p, f, _, l) {
    var y = e._textures.length > r ? e._textures[r] : e._textures[r] = e._image.pipe();
    y.src(s, a, c, u), y.dest(p, f, _, l);
  }
};
o.anim = function(t, i) {
  var e = new A();
  return e.frames(t).gotoFrame(0), i && e.fps(i), e;
};
A._super = o;
A.prototype = Object.create(A._super.prototype);
o.Anim = {
  FPS: 15
};
function A() {
  A._super.call(this), this.label("Anim"), this._textures = [], this._fps = o.Anim.FPS, this._ft = 1e3 / this._fps, this._time = -1, this._repeat = 0, this._index = 0, this._frames = [];
  var t = 0;
  this.tick(function(i, e, n) {
    if (!(this._time < 0 || this._frames.length <= 1)) {
      var r = t != n;
      if (t = e, r || (this._time += i, this._time < this._ft))
        return !0;
      var s = this._time / this._ft | 0;
      return this._time -= s * this._ft, this.moveFrame(s), this._repeat > 0 && (this._repeat -= s) <= 0 ? (this.stop(), this._callback && this._callback(), !1) : !0;
    }
  }, !1);
}
A.prototype.fps = function(t) {
  return typeof t > "u" ? this._fps : (this._fps = t > 0 ? t : o.Anim.FPS, this._ft = 1e3 / this._fps, this);
};
A.prototype.setFrames = function(t, i, e) {
  return this.frames(t, i, e);
};
A.prototype.frames = function(t) {
  return this._index = 0, this._frames = o.texture(t).array(), this.touch(), this;
};
A.prototype.length = function() {
  return this._frames ? this._frames.length : 0;
};
A.prototype.gotoFrame = function(t, i) {
  return this._index = N.rotate(t, this._frames.length) | 0, i = i || !this._textures[0], this._textures[0] = this._frames[this._index], i && (this.pin("width", this._textures[0].width), this.pin("height", this._textures[0].height)), this.touch(), this;
};
A.prototype.moveFrame = function(t) {
  return this.gotoFrame(this._index + t);
};
A.prototype.repeat = function(t, i) {
  return this._repeat = t * this._frames.length - 1, this._callback = i, this.play(), this;
};
A.prototype.play = function(t) {
  return typeof t < "u" ? (this.gotoFrame(t), this._time = 0) : this._time < 0 && (this._time = 0), this.touch(), this;
};
A.prototype.stop = function(t) {
  return this._time = -1, typeof t < "u" && this.gotoFrame(t), this;
};
o.string = function(t) {
  return new H().frames(t);
};
H._super = o;
H.prototype = Object.create(H._super.prototype);
function H() {
  H._super.call(this), this.label("String"), this._textures = [];
}
H.prototype.setFont = function(t, i, e) {
  return this.frames(t, i, e);
};
H.prototype.frames = function(t) {
  return this._textures = [], typeof t == "string" ? (t = o.texture(t), this._item = function(i) {
    return t.one(i);
  }) : typeof t == "object" ? this._item = function(i) {
    return t[i];
  } : typeof t == "function" && (this._item = t), this;
};
H.prototype.setValue = function(t, i, e) {
  return this.value(t, i, e);
};
H.prototype.value = function(t) {
  if (typeof t > "u")
    return this._value;
  if (this._value === t)
    return this;
  this._value = t, t === null ? t = "" : typeof t != "string" && !d.array(t) && (t = t.toString()), this._spacing = this._spacing || 0;
  for (var i = 0, e = 0, n = 0; n < t.length; n++) {
    var r = this._textures[n] = this._item(t[n]);
    i += n > 0 ? this._spacing : 0, r.dest(i, 0), i = i + r.width, e = Math.max(e, r.height);
  }
  return this.pin("width", i), this.pin("height", e), this._textures.length = t.length, this;
};
o.row = function(t) {
  return o.create().row(t).label("Row");
};
o.prototype.row = function(t) {
  return this.sequence("row", t), this;
};
o.column = function(t) {
  return o.create().column(t).label("Row");
};
o.prototype.column = function(t) {
  return this.sequence("column", t), this;
};
o.sequence = function(t, i) {
  return o.create().sequence(t, i).label("Sequence");
};
o.prototype.sequence = function(t, i) {
  return this._padding = this._padding || 0, this._spacing = this._spacing || 0, this.untick(this._layoutTiker), this.tick(this._layoutTiker = function() {
    if (this._mo_seq != this._ts_touch) {
      this._mo_seq = this._ts_touch;
      var e = this._mo_seqAlign != this._ts_children;
      this._mo_seqAlign = this._ts_children;
      for (var n = 0, r = 0, s, a = this.first(!0), c = !0; s = a; ) {
        a = s.next(!0), s.matrix(!0);
        var u = s.pin("boxWidth"), p = s.pin("boxHeight");
        t == "column" ? (!c && (r += this._spacing), s.pin("offsetY") != r && s.pin("offsetY", r), n = Math.max(n, u), r = r + p, e && s.pin("alignX", i)) : t == "row" && (!c && (n += this._spacing), s.pin("offsetX") != n && s.pin("offsetX", n), n = n + u, r = Math.max(r, p), e && s.pin("alignY", i)), c = !1;
      }
      n += 2 * this._padding, r += 2 * this._padding, this.pin("width") != n && this.pin("width", n), this.pin("height") != r && this.pin("height", r);
    }
  }), this;
};
o.box = function() {
  return o.create().box().label("Box");
};
o.prototype.box = function() {
  return this._padding = this._padding || 0, this.untick(this._layoutTiker), this.tick(this._layoutTiker = function() {
    if (this._mo_box != this._ts_touch) {
      this._mo_box = this._ts_touch;
      for (var t = 0, i = 0, e, n = this.first(!0); e = n; ) {
        n = e.next(!0), e.matrix(!0);
        var r = e.pin("boxWidth"), s = e.pin("boxHeight");
        t = Math.max(t, r), i = Math.max(i, s);
      }
      t += 2 * this._padding, i += 2 * this._padding, this.pin("width") != t && this.pin("width", t), this.pin("height") != i && this.pin("height", i);
    }
  }), this;
};
o.layer = function() {
  return o.create().layer().label("Layer");
};
o.prototype.layer = function() {
  return this.untick(this._layoutTiker), this.tick(this._layoutTiker = function() {
    var t = this.parent();
    if (t) {
      var i = t.pin("width");
      this.pin("width") != i && this.pin("width", i);
      var e = t.pin("height");
      this.pin("height") != e && this.pin("height", e);
    }
  }, !0), this;
};
o.prototype.padding = function(t) {
  return this._padding = t, this;
};
o.prototype.spacing = function(t) {
  return this._spacing = t, this;
};
function it(t) {
  return t;
}
var at = {}, mt = {}, vt = {};
function w(t) {
  if (typeof t == "function")
    return t;
  if (typeof t != "string")
    return it;
  var i = at[t];
  if (i)
    return i;
  var e = /^(\w+)(-(in|out|in-out|out-in))?(\((.*)\))?$/i.exec(t);
  if (!e || !e.length)
    return it;
  var n = vt[e[1]], r = mt[e[3]], s = e[5];
  return n && n.fn ? i = n.fn : n && n.fc ? i = n.fc.apply(n.fc, s && s.replace(/\s+/, "").split(",")) : i = it, r && (i = r.fn(i)), at[t] = i, i;
}
w.add = function(t) {
  for (var i = (t.name || t.mode).split(/\s+/), e = 0; e < i.length; e++) {
    var n = i[e];
    n && ((t.name ? vt : mt)[n] = t);
  }
};
w.add({
  mode: "in",
  fn: function(t) {
    return t;
  }
});
w.add({
  mode: "out",
  fn: function(t) {
    return function(i) {
      return 1 - t(1 - i);
    };
  }
});
w.add({
  mode: "in-out",
  fn: function(t) {
    return function(i) {
      return i < 0.5 ? t(2 * i) / 2 : 1 - t(2 * (1 - i)) / 2;
    };
  }
});
w.add({
  mode: "out-in",
  fn: function(t) {
    return function(i) {
      return i < 0.5 ? 1 - t(2 * (1 - i)) / 2 : t(2 * i) / 2;
    };
  }
});
w.add({
  name: "linear",
  fn: function(t) {
    return t;
  }
});
w.add({
  name: "quad",
  fn: function(t) {
    return t * t;
  }
});
w.add({
  name: "cubic",
  fn: function(t) {
    return t * t * t;
  }
});
w.add({
  name: "quart",
  fn: function(t) {
    return t * t * t * t;
  }
});
w.add({
  name: "quint",
  fn: function(t) {
    return t * t * t * t * t;
  }
});
w.add({
  name: "sin sine",
  fn: function(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  }
});
w.add({
  name: "exp expo",
  fn: function(t) {
    return t == 0 ? 0 : Math.pow(2, 10 * (t - 1));
  }
});
w.add({
  name: "circle circ",
  fn: function(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
});
w.add({
  name: "bounce",
  fn: function(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }
});
w.add({
  name: "poly",
  fc: function(t) {
    return function(i) {
      return Math.pow(i, t);
    };
  }
});
w.add({
  name: "elastic",
  fc: function(t, i) {
    i = i || 0.45, t = t || 1;
    var e = i / (2 * Math.PI) * Math.asin(1 / t);
    return function(n) {
      return 1 + t * Math.pow(2, -10 * n) * Math.sin((n - e) * (2 * Math.PI) / i);
    };
  }
});
w.add({
  name: "back",
  fc: function(t) {
    return t = typeof t < "u" ? t : 1.70158, function(i) {
      return i * i * ((t + 1) * i - t);
    };
  }
});
o.prototype.tween = function(t, i, e) {
  if (typeof t != "number" ? (e = t, i = 0, t = 0) : typeof i != "number" && (e = i, i = 0), !this._tweens) {
    this._tweens = [];
    var n = 0;
    this.tick(function(s, a, c) {
      if (this._tweens.length) {
        var u = n != c;
        if (n = a, u)
          return !0;
        var p = this._tweens[0], f = p.tick(this, s, a, c);
        if (f && p === this._tweens[0] && this._tweens.shift(), Array.isArray(f))
          for (var _ = 0; _ < f.length; _++)
            try {
              f[_].call(this);
            } catch (l) {
              console.log(l);
            }
        else
          typeof f == "object" && this._tweens.unshift(f);
        return !0;
      }
    }, !0);
  }
  this.touch(), e || (this._tweens.length = 0);
  var r = new M(this, t, i);
  return this._tweens.push(r), r;
};
function M(t, i, e) {
  this._end = {}, this._duration = i || 400, this._delay = e || 0, this._owner = t, this._time = 0;
}
M.prototype.tick = function(t, i, e, n) {
  if (this._time += i, !(this._time < this._delay)) {
    var r = this._time - this._delay;
    if (!this._start) {
      this._start = {};
      for (var s in this._end)
        this._start[s] = this._owner.pin(s);
    }
    var a, c;
    r < this._duration ? (a = r / this._duration, c = !1) : (a = 1, c = !0), typeof this._easing == "function" && (a = this._easing(a));
    var u = 1 - a;
    for (var s in this._end)
      this._owner.pin(s, this._start[s] * u + this._end[s] * a);
    if (c) {
      var p = [this._hide, this._remove, this._done];
      return p = p.filter(function(f) {
        return typeof f == "function";
      }), this._next || p;
    }
  }
};
M.prototype.tween = function(t, i) {
  return this._next = new M(this._owner, t, i);
};
M.prototype.duration = function(t) {
  return this._duration = t, this;
};
M.prototype.delay = function(t) {
  return this._delay = t, this;
};
M.prototype.ease = function(t) {
  return this._easing = w(t), this;
};
M.prototype.done = function(t) {
  return this._done = t, this;
};
M.prototype.hide = function() {
  return this._hide = function() {
    this.hide();
  }, this;
};
M.prototype.remove = function() {
  return this._remove = function() {
    this.remove();
  }, this;
};
M.prototype.pin = function(t, i) {
  if (typeof t == "object")
    for (var e in t)
      ut(this._owner, this._end, e, t[e]);
  else
    typeof i < "u" && ut(this._owner, this._end, t, i);
  return this;
};
function ut(t, i, e, n) {
  typeof t.pin(e) == "number" ? i[e] = n : typeof t.pin(e + "X") == "number" && typeof t.pin(e + "Y") == "number" && (i[e + "X"] = n, i[e + "Y"] = n);
}
O._add_shortcuts(M);
M.prototype.then = function(t) {
  return this.done(t), this;
};
M.prototype.clear = function(t) {
  return this;
};
o._load(function(t, i) {
  L.subscribe(t, i);
});
L.CLICK = "click";
L.START = "touchstart mousedown";
L.MOVE = "touchmove mousemove";
L.END = "touchend mouseup";
L.CANCEL = "touchcancel mousecancel";
L.subscribe = function(t, i) {
  if (t.mouse)
    return;
  t.mouse = new L(t, i), i.addEventListener("touchstart", r), i.addEventListener("touchend", a), i.addEventListener("touchmove", s), i.addEventListener("touchcancel", c), i.addEventListener("mousedown", r), i.addEventListener("mouseup", a), i.addEventListener("mousemove", s), document.addEventListener("mouseup", c), window.addEventListener("blur", c);
  var e = [], n = [];
  function r(u) {
    u.preventDefault(), t.mouse.locate(u), t.mouse.publish(u.type, u), t.mouse.lookup("click", e), t.mouse.lookup("mousecancel", n);
  }
  function s(u) {
    u.preventDefault(), t.mouse.locate(u), t.mouse.publish(u.type, u);
  }
  function a(u) {
    u.preventDefault(), t.mouse.publish(u.type, u), e.length && t.mouse.publish("click", u, e), n.length = 0;
  }
  function c(u) {
    n.length && t.mouse.publish("mousecancel", u, n), e.length = 0;
  }
};
function L(t, i) {
  if (this instanceof L) {
    var e = t.viewport().ratio || 1;
    t.on("viewport", function(n) {
      e = n.ratio || e;
    }), this.x = 0, this.y = 0, this.toString = function() {
      return (this.x | 0) + "x" + (this.y | 0);
    }, this.locate = function(n) {
      jt(i, n, this), this.x *= e, this.y *= e;
    }, this.lookup = function(n, r) {
      this.type = n, this.root = t, this.event = null, r.length = 0, this.collect = r, this.root.visit(this.visitor, this);
    }, this.publish = function(n, r, s) {
      if (this.type = n, this.root = t, this.event = r, this.collect = !1, this.timeStamp = Date.now(), n !== "mousemove" && n !== "touchmove" && console.log(this.type + " " + this), s) {
        for (; s.length && !this.visitor.end(s.shift(), this); )
          ;
        s.length = 0;
      } else
        this.root.visit(this.visitor, this);
    }, this.visitor = {
      reverse: !0,
      visible: !0,
      start: function(n, r) {
        return !n._flag(r.type);
      },
      end: function(n, r) {
        E.raw = r.event, E.type = r.type, E.timeStamp = r.timeStamp, E.abs.x = r.x, E.abs.y = r.y;
        var s = n.listeners(r.type);
        if (s && (n.matrix().inverse().map(r, E), !!(n === r.root || n.attr("spy") || n.hitTest(E)) && (r.collect && r.collect.push(n), r.event))) {
          for (var a = !1, c = 0; c < s.length; c++)
            a = s[c].call(n, E) ? !0 : a;
          return a;
        }
      }
    };
  }
}
var E = {}, ht = {};
V(E, "clone", function(t) {
  return t = t || {}, t.x = this.x, t.y = this.y, t;
});
V(E, "toString", function() {
  return (this.x | 0) + "x" + (this.y | 0) + " (" + this.abs + ")";
});
V(E, "abs", ht);
V(ht, "clone", function(t) {
  return t = t || {}, t.x = this.x, t.y = this.y, t;
});
V(ht, "toString", function() {
  return (this.x | 0) + "x" + (this.y | 0);
});
function V(t, i, e) {
  Object.defineProperty(t, i, {
    value: e
  });
}
function jt(t, i, e) {
  i.touches && i.touches.length ? (e.x = i.touches[0].clientX, e.y = i.touches[0].clientY) : (e.x = i.clientX, e.y = i.clientY);
  var n = t.getBoundingClientRect();
  return e.x -= n.left, e.y -= n.top, e.x -= t.clientLeft | 0, e.y -= t.clientTop | 0, e;
}
window.addEventListener("load", function() {
  console.log("On load."), o.start();
}, !1);
o.config({
  "app-loader": Et,
  "image-loader": St
});
function Et(t, i) {
  i = i || {};
  var e = i.canvas, n = null, r = !1, s = 0, a = 0, c = 1;
  if (typeof e == "string" && (e = document.getElementById(e)), e || (e = document.getElementById("cutjs") || document.getElementById("stage")), !e) {
    r = !0, console.log("Creating Canvas..."), e = document.createElement("canvas"), e.style.position = "absolute", e.style.top = "0", e.style.left = "0";
    var u = document.body;
    u.insertBefore(e, u.firstChild);
  }
  n = e.getContext("2d");
  var p = window.devicePixelRatio || 1, f = n.webkitBackingStorePixelRatio || n.mozBackingStorePixelRatio || n.msBackingStorePixelRatio || n.oBackingStorePixelRatio || n.backingStorePixelRatio || 1;
  c = p / f;
  var _ = window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || function(X) {
    return window.setTimeout(X, 1e3 / 60);
  };
  console.log("Creating stage...");
  var l = o.root(_, y);
  function y() {
    s > 0 && a > 0 && (n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, s, a), l.render(n));
  }
  l.background = function(X) {
    return e.style.backgroundColor = X, this;
  }, t(l, e);
  var k = -1, b = -1;
  (function X() {
    var v, C;
    r ? (v = window.innerWidth > 0 ? window.innerWidth : screen.width, C = window.innerHeight > 0 ? window.innerHeight : screen.height) : (v = e.clientWidth, C = e.clientHeight), (k !== v || b !== C) && (k = v, b = C, T()), _(X);
  })();
  function T() {
    r ? (s = window.innerWidth > 0 ? window.innerWidth : screen.width, a = window.innerHeight > 0 ? window.innerHeight : screen.height, e.style.width = s + "px", e.style.height = a + "px") : (s = e.clientWidth, a = e.clientHeight), s *= c, a *= c, !(e.width === s && e.height === a) && (e.width = s, e.height = a, console.log("Resize: " + s + " x " + a + " / " + c), l.viewport(s, a, c), y());
  }
}
function St(t, i, e) {
  console.log("Loading image: " + t);
  var n = new Image();
  n.onload = function() {
    i(n);
  }, n.onerror = e, n.src = t;
}
Mt(o.prototype, function(t, i, e) {
  t._flag(i, e);
});
o.Matrix = m;
o.Texture = R;
o.Mouse = L;
o.Math = N;
o.internal = {};
o.internal.Image = B;
export {
  o as default
};
