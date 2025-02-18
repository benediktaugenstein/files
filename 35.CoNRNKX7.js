import {
	s as ue,
	e as E,
	c as y,
	a as k,
	d,
	f as o,
	i as A,
	g as h,
	n as se,
	q as we,
	t as T,
	b as j,
	h as H,
	P as Ke,
	l as ae,
	S as ge,
	E as O,
	F as q,
	p as Ze,
	j as ne,
	k as B,
	N as Je,
	o as S,
	u as x,
	y as Qe,
	m as Xe,
	A as $e,
	C as ie
  } from "../chunks/scheduler.CRl-z1y4.js";
  import {
	S as pe,
	i as ve,
	g as be,
	a as X,
	c as ke,
	t as G,
	h as xe,
	b as ce,
	d as he,
	m as me,
	e as _e,
	f as et
  } from "../chunks/index.Ci9MLlfz.js";
  import {
	t as de
  } from "../chunks/Toaster.svelte_svelte_type_style_lang.CQ9dEDgo.js";
  import {
	g as Ue
  } from "../chunks/entry.BOwti1Qt.js";
  import {
	p as tt
  } from "../chunks/stores.DtH1oHi1.js";
  import {
	a as lt
  } from "../chunks/index.JqgQ6U3K.js";
  import {
	g as rt,
	a as st,
	b as at,
	l as it
  } from "../chunks/index.BF6RQCLU.js";
  import {
	e as oe,
	c as De,
	u as Ae,
	r as nt,
	W as ot
  } from "../chunks/index.ChRLoCN-.js";
  import {
	k as ut
  } from "../chunks/index.DiiC1yKz.js";
  import {
	S as ft
  } from "../chunks/Spinner.B5qNQZjw.js";
  import {
	a as dt
  } from "../chunks/index.JHD1JQaA.js";
  import {
	e as Be,
	u as ct,
	d as ht
  } from "../chunks/each.Cd7EUOR7.js";
  
  function Se(i) {
	let e, t = i[1].at(i[2]) + "",
	  l, s;
	return {
	  c() {
		e = E("div"), l = T(t), this.h()
	  },
	  l(a) {
		e = y(a, "DIV", {
		  class: !0
		});
		var r = k(e);
		l = j(r, t), r.forEach(d), this.h()
	  },
	  h() {
		o(e, "class", "marquee-item")
	  },
	  m(a, r) {
		A(a, e, r), h(e, l)
	  },
	  p(a, r) {
		r & 6 && t !== (t = a[1].at(a[2]) + "") && H(l, t)
	  },
	  i(a) {
		a && (s || Ke(() => {
		  s = xe(e, dt, {
			y: "30%",
			duration: 1e3
		  }), s.start()
		}))
	  },
	  o: se,
	  d(a) {
		a && d(e)
	  }
	}
  }

  
  function mt(i) {
	let e, t, l = i[2],
	  s = Se(i);
	return {
	  c() {
		e = E("div"), t = E("div"), s.c(), this.h()
	  },
	  l(a) {
		e = y(a, "DIV", {
		  class: !0
		});
		var r = k(e);
		t = y(r, "DIV", {});
		var n = k(t);
		s.l(n), n.forEach(d), r.forEach(d), this.h()
	  },
	  h() {
		o(e, "class", i[0])
	  },
	  m(a, r) {
		A(a, e, r), h(e, t), s.m(t, null)
	  },
	  p(a, [r]) {
		r & 4 && ue(l, l = a[2]) ? (be(), X(s, 1, 1, se), ke(), s = Se(a), s.c(), G(s, 1), s.m(t, null)) : s.p(a, r), r & 1 && o(e, "class", a[0])
	  },
	  i(a) {
		G(s)
	  },
	  o(a) {
		X(s)
	  },
	  d(a) {
		a && d(e), s.d(a)
	  }
	}
  }
  
  function _t(i, e, t) {
	let l = 0,
	  {
		className: s = ""
	  } = e,
	  {
		words: a = ["lorem", "ipsum"]
	  } = e,
	  {
		duration: r = 4e3
	  } = e;
	return we(() => {
	  setInterval(async () => {
		l === a.length - 1 ? t(2, l = 0) : t(2, l = l + 1)
	  }, r)
	}), i.$$set = n => {
	  "className" in n && t(0, s = n.className), "words" in n && t(1, a = n.words), "duration" in n && t(3, r = n.duration)
	}, [s, a, l, r]
  }
  class pt extends pe {
	constructor(e) {
	  super(), ve(this, e, _t, mt, ue, {
		className: 0,
		words: 1,
		duration: 3
	  })
	}
  }
  
  function Ve(i, e, t) {
	const l = i.slice();
	return l[3] = e[t], l[5] = t, l
  }
  
  function Me(i, e) {
	let t;
	return {
	  key: i,
	  first: null,
	  c() {
		t = E("div"), this.h()
	  },
	  l(l) {
		t = y(l, "DIV", {
		  class: !0,
		  style: !0
		}), k(t).forEach(d), this.h()
	  },
	  h() {
		o(t, "class", "image w-full h-full absolute top-0 left-0 bg-cover bg-center transition-opacity duration-1000 svelte-ezqcnh"), ge(t, "opacity", e[1] === e[5] ? 1 : 0), ge(t, "background-image", "url('" + e[3] + "')"), this.first = t
	  },
	  m(l, s) {
		A(l, t, s)
	  },
	  p(l, s) {
		e = l, s & 3 && ge(t, "opacity", e[1] === e[5] ? 1 : 0), s & 1 && ge(t, "background-image", "url('" + e[3] + "')")
	  },
	  d(l) {
		l && d(t)
	  }
	}
  }
  
  function vt(i) {
	let e = [],
	  t = new Map,
	  l, s = Be(i[0]);
	const a = r => r[5];
	for (let r = 0; r < s.length; r += 1) {
	  let n = Ve(i, s, r),
		c = a(n);
	  t.set(c, e[r] = Me(c, n))
	}
	return {
	  c() {
		for (let r = 0; r < e.length; r += 1) e[r].c();
		l = ae()
	  },
	  l(r) {
		for (let n = 0; n < e.length; n += 1) e[n].l(r);
		l = ae()
	  },
	  m(r, n) {
		for (let c = 0; c < e.length; c += 1) e[c] && e[c].m(r, n);
		A(r, l, n)
	  },
	  p(r, [n]) {
		n & 3 && (s = Be(r[0]), e = ct(e, n, a, 1, r, s, t, l.parentNode, ht, Me, l, Ve))
	  },
	  i: se,
	  o: se,
	  d(r) {
		r && d(l);
		for (let n = 0; n < e.length; n += 1) e[n].d(r)
	  }
	}
  }
  
  function gt(i, e, t) {
	let {
	  imageUrls: l = ["/assets/images/adam.jpg", "/assets/images/galaxy.jpg", "/assets/images/earth.jpg", "/assets/images/space.jpg"]
	} = e, {
	  duration: s = 5e3
	} = e, a = 0;
	return we(() => {
	  setInterval(() => {
		t(1, a = (a + 1) % (l.length - 1))
	  }, s)
	}), i.$$set = r => {
	  "imageUrls" in r && t(0, l = r.imageUrls), "duration" in r && t(2, s = r.duration)
	}, [l, a, s]
  }
  class bt extends pe {
	constructor(e) {
	  super(), ve(this, e, gt, vt, ue, {
		imageUrls: 0,
		duration: 2
	  })
	}
  }
  
  function kt(i) {
	let e, t;
	return {
	  c() {
		e = O("svg"), t = O("path"), this.h()
	  },
	  l(l) {
		e = q(l, "svg", {
		  xmlns: !0,
		  fill: !0,
		  viewBox: !0,
		  "stroke-width": !0,
		  stroke: !0,
		  class: !0
		});
		var s = k(e);
		t = q(s, "path", {
		  "stroke-linecap": !0,
		  "stroke-linejoin": !0,
		  d: !0
		}), k(t).forEach(d), s.forEach(d), this.h()
	  },
	  h() {
		o(t, "stroke-linecap", "round"), o(t, "stroke-linejoin", "round"), o(t, "d", "m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"), o(e, "xmlns", "http://www.w3.org/2000/svg"), o(e, "fill", "none"), o(e, "viewBox", "0 0 24 24"), o(e, "stroke-width", i[1]), o(e, "stroke", "currentColor"), o(e, "class", i[0])
	  },
	  m(l, s) {
		A(l, e, s), h(e, t)
	  },
	  p(l, [s]) {
		s & 2 && o(e, "stroke-width", l[1]), s & 1 && o(e, "class", l[0])
	  },
	  i: se,
	  o: se,
	  d(l) {
		l && d(e)
	  }
	}
  }
  
  function wt(i, e, t) {
	let {
	  className: l = "size-4"
	} = e, {
	  strokeWidth: s = "1.5"
	} = e;
	return i.$$set = a => {
	  "className" in a && t(0, l = a.className), "strokeWidth" in a && t(1, s = a.strokeWidth)
	}, [l, s]
  }
  class Et extends pe {
	constructor(e) {
	  super(), ve(this, e, wt, kt, ue, {
		className: 0,
		strokeWidth: 1
	  })
	}
  }
  
  function Ce(i) {
	let e, t, l = `<div class="flex space-x-2"><div class="self-center"><img crossorigin="anonymous" src="${oe}/static/favicon.png" class="w-6 rounded-full" alt="logo"/></div></div>`,
	  s, a, r, n, c, v, u, f, p, _, m, g, w, I = i[2].t("wherever you are") + "",
	  D, C, M, W, z, Y, ee, R, Q = i[2].t("Get started") + "",
	  $, Z, le, V;
	return a = new bt({
	  props: {
		duration: 5e3
	  }
	}), m = new pt({
	  props: {
		duration: 5e3,
		words: [i[2].t("Explore the cosmos"), i[2].t("Unlock mysteries"), i[2].t("Chart new frontiers"), i[2].t("Dive into knowledge"), i[2].t("Discover wonders"), i[2].t("Ignite curiosity"), i[2].t("Forge new paths"), i[2].t("Unravel secrets"), i[2].t("Pioneer insights"), i[2].t("Embark on adventures")]
	  }
	}), Y = new Et({
	  props: {
		className: "size-6"
	  }
	}), {
	  c() {
		e = E("div"), t = E("div"), t.innerHTML = l, s = B(), ce(a.$$.fragment), r = B(), n = E("div"), c = B(), v = E("div"), u = B(), f = E("div"), p = E("div"), _ = E("div"), ce(m.$$.fragment), g = B(), w = E("div"), D = T(I), C = B(), M = E("div"), W = E("div"), z = E("button"), ce(Y.$$.fragment), ee = B(), R = E("div"), $ = T(Q), this.h()
	  },
	  l(b) {
		e = y(b, "DIV", {
		  class: !0
		});
		var N = k(e);
		t = y(N, "DIV", {
		  class: !0,
		  "data-svelte-h": !0
		}), Je(t) !== "svelte-xyh0ou" && (t.innerHTML = l), s = S(N), he(a.$$.fragment, N), r = S(N), n = y(N, "DIV", {
		  class: !0
		}), k(n).forEach(d), c = S(N), v = y(N, "DIV", {
		  class: !0
		}), k(v).forEach(d), u = S(N), f = y(N, "DIV", {
		  class: !0
		});
		var P = k(f);
		p = y(P, "DIV", {
		  class: !0
		});
		var L = k(p);
		_ = y(L, "DIV", {
		  class: !0
		});
		var J = k(_);
		he(m.$$.fragment, J), g = S(J), w = y(J, "DIV", {
		  class: !0
		});
		var U = k(w);
		D = j(U, I), U.forEach(d), J.forEach(d), C = S(L), M = y(L, "DIV", {
		  class: !0
		});
		var F = k(M);
		W = y(F, "DIV", {
		  class: !0
		});
		var K = k(W);
		z = y(K, "BUTTON", {
		  class: !0
		});
		var te = k(z);
		he(Y.$$.fragment, te), te.forEach(d), ee = S(K), R = y(K, "DIV", {
		  class: !0
		});
		var re = k(R);
		$ = j(re, Q), re.forEach(d), K.forEach(d), F.forEach(d), L.forEach(d), P.forEach(d), N.forEach(d), this.h()
	  },
	  h() {
		o(t, "class", "fixed m-10 z-50"), o(n, "class", "w-full h-full absolute top-0 left-0 bg-gradient-to-t from-20% from-black to-transparent"), o(v, "class", "w-full h-full absolute top-0 left-0 backdrop-blur-sm bg-black/50"), o(w, "class", "mt-0.5"), o(_, "class", "text-5xl lg:text-7xl font-secondary"), o(z, "class", "relative z-20 flex p-1 rounded-full bg-white/5 hover:bg-white/10 transition font-medium text-sm"), o(R, "class", "mt-1.5 font-primary text-base font-medium"), o(W, "class", "flex flex-col justify-center items-center"), o(M, "class", "flex justify-center mt-8"), o(p, "class", "flex flex-col justify-end w-full items-center pb-10 text-center"), o(f, "class", "relative bg-transparent w-full min-h-screen flex z-10"), o(e, "class", "w-full h-screen max-h-[100dvh] text-white relative")
	  },
	  m(b, N) {
		A(b, e, N), h(e, t), h(e, s), me(a, e, null), h(e, r), h(e, n), h(e, c), h(e, v), h(e, u), h(e, f), h(f, p), h(p, _), me(m, _, null), h(_, g), h(_, w), h(w, D), h(p, C), h(p, M), h(M, W), h(W, z), me(Y, z, null), h(W, ee), h(W, R), h(R, $), Z = !0, le || (V = x(z, "click", i[4]), le = !0)
	  },
	  p(b, N) {
		const P = {};
		N & 4 && (P.words = [b[2].t("Explore the cosmos"), b[2].t("Unlock mysteries"), b[2].t("Chart new frontiers"), b[2].t("Dive into knowledge"), b[2].t("Discover wonders"), b[2].t("Ignite curiosity"), b[2].t("Forge new paths"), b[2].t("Unravel secrets"), b[2].t("Pioneer insights"), b[2].t("Embark on adventures")]), m.$set(P), (!Z || N & 4) && I !== (I = b[2].t("wherever you are") + "") && H(D, I), (!Z || N & 4) && Q !== (Q = b[2].t("Get started") + "") && H($, Q)
	  },
	  i(b) {
		Z || (G(a.$$.fragment, b), G(m.$$.fragment, b), G(Y.$$.fragment, b), Z = !0)
	  },
	  o(b) {
		X(a.$$.fragment, b), X(m.$$.fragment, b), X(Y.$$.fragment, b), Z = !1
	  },
	  d(b) {
		b && d(e), _e(a), _e(m), _e(Y), le = !1, V()
	  }
	}
  }
  
  function yt(i) {
	let e, t, l = i[0] && Ce(i);
	return {
	  c() {
		l && l.c(), e = ae()
	  },
	  l(s) {
		l && l.l(s), e = ae()
	  },
	  m(s, a) {
		l && l.m(s, a), A(s, e, a), t = !0
	  },
	  p(s, [a]) {
		s[0] ? l ? (l.p(s, a), a & 1 && G(l, 1)) : (l = Ce(s), l.c(), G(l, 1), l.m(e.parentNode, e)) : l && (be(), X(l, 1, 1, () => {
		  l = null
		}), ke())
	  },
	  i(s) {
		t || (G(l), t = !0)
	  },
	  o(s) {
		X(l), t = !1
	  },
	  d(s) {
		s && d(e), l && l.d(s)
	  }
	}
  }
  
  function It(i, e, t) {
	let l;
	const s = Ze("i18n");
	ne(i, s, c => t(2, l = c));
	let {
	  show: a = !0
	} = e, {
	  getStartedHandler: r = () => {}
	} = e;
	const n = () => {
	  r()
	};
	return i.$$set = c => {
	  "show" in c && t(0, a = c.show), "getStartedHandler" in c && t(1, r = c.getStartedHandler)
	}, [a, r, l, s, n]
  }
  class Nt extends pe {
	constructor(e) {
	  super(), ve(this, e, It, yt, ue, {
		show: 0,
		getStartedHandler: 1
	  })
	}
  }
  
  function We(i) {
	let e, t = `<div class="flex space-x-2"><div class="self-center"><img crossorigin="anonymous" src="${oe}/static/splash.png" class="w-6 rounded-full dark:invert" alt="logo"/></div></div>`,
	  l, s, a, r, n, c;
	const v = [Dt, Ut],
	  u = [];
  
	function f(p, _) {
	  var m, g;
	  return (((m = p[7]) == null ? void 0 : m.features.auth_trusted_header) ?? !1) || ((g = p[7]) == null ? void 0 : g.features.auth) === !1 ? 0 : 1
	}
	return r = f(i), n = u[r] = v[r](i), {
	  c() {
		e = E("div"), e.innerHTML = t, l = B(), s = E("div"), a = E("div"), n.c(), this.h()
	  },
	  l(p) {
		e = y(p, "DIV", {
		  class: !0,
		  "data-svelte-h": !0
		}), Je(e) !== "svelte-14v286r" && (e.innerHTML = t), l = S(p), s = y(p, "DIV", {
		  class: !0
		});
		var _ = k(s);
		a = y(_, "DIV", {
		  class: !0
		});
		var m = k(a);
		n.l(m), m.forEach(d), _.forEach(d), this.h()
	  },
	  h() {
		o(e, "class", "fixed m-10 z-50"), o(a, "class", "w-full sm:max-w-md px-10 min-h-screen flex flex-col text-center"), o(s, "class", "fixed bg-transparent min-h-screen w-full flex justify-center font-primary z-50 text-black dark:text-white")
	  },
	  m(p, _) {
		A(p, e, _), A(p, l, _), A(p, s, _), h(s, a), u[r].m(a, null), c = !0
	  },
	  p(p, _) {
		let m = r;
		r = f(p), r === m ? u[r].p(p, _) : (be(), X(u[m], 1, 1, () => {
		  u[m] = null
		}), ke(), n = u[r], n ? n.p(p, _) : (n = u[r] = v[r](p), n.c()), G(n, 1), n.m(a, null))
	  },
	  i(p) {
		c || (G(n), c = !0)
	  },
	  o(p) {
		X(n), c = !1
	  },
	  d(p) {
		p && (d(e), d(l), d(s)), u[r].d()
	  }
	}
  }
  
  function Ut(i) {
	var z, Y, ee, R, Q, $, Z, le, V;
	let e, t, l, s, a, r, n, c, v, u = Object.keys(((Y = (z = i[7]) == null ? void 0 : z.oauth) == null ? void 0 : Y.providers) ?? {}).length > 0,
	  f, p, _;
  
	function m(b, N) {
	  var P;
	  return ((P = b[7]) == null ? void 0 : P.onboarding) ?? !1 ? Vt : b[1] === "ldap" ? St : b[1] === "signin" ? Bt : At
	}
	let g = m(i),
	  w = g(i),
	  I = (((ee = i[7]) == null ? void 0 : ee.onboarding) ?? !1) && Te(i),
	  D = (((R = i[7]) == null ? void 0 : R.features.enable_login_form) || ((Q = i[7]) == null ? void 0 : Q.features.enable_ldap)) && je(i),
	  C = ((($ = i[7]) == null ? void 0 : $.features.enable_login_form) || ((Z = i[7]) == null ? void 0 : Z.features.enable_ldap)) && Pe(i),
	  M = u && Oe(i),
	  W = ((le = i[7]) == null ? void 0 : le.features.enable_ldap) && ((V = i[7]) == null ? void 0 : V.features.enable_login_form) && Re(i);
	return {
	  c() {
		e = E("div"), t = E("form"), l = E("div"), s = E("div"), w.c(), a = B(), I && I.c(), r = B(), D && D.c(), n = B(), c = E("div"), C && C.c(), v = B(), M && M.c(), f = B(), W && W.c(), this.h()
	  },
	  l(b) {
		e = y(b, "DIV", {
		  class: !0
		});
		var N = k(e);
		t = y(N, "FORM", {
		  class: !0
		});
		var P = k(t);
		l = y(P, "DIV", {
		  class: !0
		});
		var L = k(l);
		s = y(L, "DIV", {
		  class: !0
		});
		var J = k(s);
		w.l(J), J.forEach(d), a = S(L), I && I.l(L), L.forEach(d), r = S(P), D && D.l(P), n = S(P), c = y(P, "DIV", {
		  class: !0
		});
		var U = k(c);
		C && C.l(U), U.forEach(d), P.forEach(d), v = S(N), M && M.l(N), f = S(N), W && W.l(N), N.forEach(d), this.h()
	  },
	  h() {
		o(s, "class", "text-2xl font-medium"), o(l, "class", "mb-1"), o(c, "class", "mt-5"), o(t, "class", "flex flex-col justify-center"), o(e, "class", "my-auto pb-10 w-full dark:text-gray-100")
	  },
	  m(b, N) {
		A(b, e, N), h(e, t), h(t, l), h(l, s), w.m(s, null), h(l, a), I && I.m(l, null), h(t, r), D && D.m(t, null), h(t, n), h(t, c), C && C.m(c, null), h(e, v), M && M.m(e, null), h(e, f), W && W.m(e, null), p || (_ = x(t, "submit", i[19]), p = !0)
	  },
	  p(b, N) {
		var P, L, J, U, F, K, te, re, fe;
		g === (g = m(b)) && w ? w.p(b, N) : (w.d(1), w = g(b), w && (w.c(), w.m(s, null))), ((P = b[7]) == null ? void 0 : P.onboarding) ?? !1 ? I ? I.p(b, N) : (I = Te(b), I.c(), I.m(l, null)) : I && (I.d(1), I = null), (L = b[7]) != null && L.features.enable_login_form || (J = b[7]) != null && J.features.enable_ldap ? D ? D.p(b, N) : (D = je(b), D.c(), D.m(t, n)) : D && (D.d(1), D = null), (U = b[7]) != null && U.features.enable_login_form || (F = b[7]) != null && F.features.enable_ldap ? C ? C.p(b, N) : (C = Pe(b), C.c(), C.m(c, null)) : C && (C.d(1), C = null), N[0] & 128 && (u = Object.keys(((te = (K = b[7]) == null ? void 0 : K.oauth) == null ? void 0 : te.providers) ?? {}).length > 0), u ? M ? M.p(b, N) : (M = Oe(b), M.c(), M.m(e, f)) : M && (M.d(1), M = null), (re = b[7]) != null && re.features.enable_ldap && ((fe = b[7]) != null && fe.features.enable_login_form) ? W ? W.p(b, N) : (W = Re(b), W.c(), W.m(e, null)) : W && (W.d(1), W = null)
	  },
	  i: se,
	  o: se,
	  d(b) {
		b && d(e), w.d(), I && I.d(), D && D.d(), C && C.d(), M && M.d(), W && W.d(), p = !1, _()
	  }
	}
  }
  
  function Dt(i) {
	let e, t, l, s = i[8].t("Signing in to {{WEBUI_NAME}}", {
		WEBUI_NAME: i[9]
	  }) + "",
	  a, r, n, c, v;
	return c = new ft({}), {
	  c() {
		e = E("div"), t = E("div"), l = E("div"), a = T(s), r = B(), n = E("div"), ce(c.$$.fragment), this.h()
	  },
	  l(u) {
		e = y(u, "DIV", {
		  class: !0
		});
		var f = k(e);
		t = y(f, "DIV", {
		  class: !0
		});
		var p = k(t);
		l = y(p, "DIV", {});
		var _ = k(l);
		a = j(_, s), _.forEach(d), r = S(p), n = y(p, "DIV", {});
		var m = k(n);
		he(c.$$.fragment, m), m.forEach(d), p.forEach(d), f.forEach(d), this.h()
	  },
	  h() {
		o(t, "class", "flex items-center justify-center gap-3 text-xl sm:text-2xl text-center font-semibold dark:text-gray-200"), o(e, "class", "my-auto pb-10 w-full")
	  },
	  m(u, f) {
		A(u, e, f), h(e, t), h(t, l), h(l, a), h(t, r), h(t, n), me(c, n, null), v = !0
	  },
	  p(u, f) {
		(!v || f[0] & 768) && s !== (s = u[8].t("Signing in to {{WEBUI_NAME}}", {
		  WEBUI_NAME: u[9]
		}) + "") && H(a, s)
	  },
	  i(u) {
		v || (G(c.$$.fragment, u), v = !0)
	  },
	  o(u) {
		X(c.$$.fragment, u), v = !1
	  },
	  d(u) {
		u && d(e), _e(c)
	  }
	}
  }
  
  function At(i) {
	let e = i[8].t("Sign up to {{WEBUI_NAME}}", {
		WEBUI_NAME: i[9]
	  }) + "",
	  t;
	return {
	  c() {
		t = T(e)
	  },
	  l(l) {
		t = j(l, e)
	  },
	  m(l, s) {
		A(l, t, s)
	  },
	  p(l, s) {
		s[0] & 768 && e !== (e = l[8].t("Sign up to {{WEBUI_NAME}}", {
		  WEBUI_NAME: l[9]
		}) + "") && H(t, e)
	  },
	  d(l) {
		l && d(t)
	  }
	}
  }
  
  function Bt(i) {
	let e = i[8].t("Sign in to {{WEBUI_NAME}}", {
		WEBUI_NAME: i[9]
	  }) + "",
	  t;
	return {
	  c() {
		t = T(e)
	  },
	  l(l) {
		t = j(l, e)
	  },
	  m(l, s) {
		A(l, t, s)
	  },
	  p(l, s) {
		s[0] & 768 && e !== (e = l[8].t("Sign in to {{WEBUI_NAME}}", {
		  WEBUI_NAME: l[9]
		}) + "") && H(t, e)
	  },
	  d(l) {
		l && d(t)
	  }
	}
  }
  
  function St(i) {
	let e = i[8].t("Sign in to {{WEBUI_NAME}} with LDAP", {
		WEBUI_NAME: i[9]
	  }) + "",
	  t;
	return {
	  c() {
		t = T(e)
	  },
	  l(l) {
		t = j(l, e)
	  },
	  m(l, s) {
		A(l, t, s)
	  },
	  p(l, s) {
		s[0] & 768 && e !== (e = l[8].t("Sign in to {{WEBUI_NAME}} with LDAP", {
		  WEBUI_NAME: l[9]
		}) + "") && H(t, e)
	  },
	  d(l) {
		l && d(t)
	  }
	}
  }
  
  function Vt(i) {
	let e = i[8].t("Get started with {{WEBUI_NAME}}", {
		WEBUI_NAME: i[9]
	  }) + "",
	  t;
	return {
	  c() {
		t = T(e)
	  },
	  l(l) {
		t = j(l, e)
	  },
	  m(l, s) {
		A(l, t, s)
	  },
	  p(l, s) {
		s[0] & 768 && e !== (e = l[8].t("Get started with {{WEBUI_NAME}}", {
		  WEBUI_NAME: l[9]
		}) + "") && H(t, e)
	  },
	  d(l) {
		l && d(t)
	  }
	}
  }
  
  function Te(i) {
	let e, t, l, s, a = i[8].t("does not make any external connections, and your data stays securely on your locally hosted server.") + "",
	  r;
	return {
	  c() {
		e = E("div"), t = T("ⓘ "), l = T(i[9]), s = B(), r = T(a), this.h()
	  },
	  l(n) {
		e = y(n, "DIV", {
		  class: !0
		});
		var c = k(e);
		t = j(c, "ⓘ "), l = j(c, i[9]), s = S(c), r = j(c, a), c.forEach(d), this.h()
	  },
	  h() {
		o(e, "class", "mt-1 text-xs font-medium text-gray-500")
	  },
	  m(n, c) {
		A(n, e, c), h(e, t), h(e, l), h(e, s), h(e, r)
	  },
	  p(n, c) {
		c[0] & 512 && H(l, n[9]), c[0] & 256 && a !== (a = n[8].t("does not make any external connections, and your data stays securely on your locally hosted server.") + "") && H(r, a)
	  },
	  d(n) {
		n && d(e)
	  }
	}
  }
  
  function je(i) {
	let e, t, l, s, a, r = i[8].t("Password") + "",
	  n, c, v, u, f, p, _ = i[1] === "signup" && He(i);
  
	function m(I, D) {
	  return I[1] === "ldap" ? Ct : Mt
	}
	let g = m(i),
	  w = g(i);
	return {
	  c() {
		e = E("div"), _ && _.c(), t = B(), w.c(), l = B(), s = E("div"), a = E("div"), n = T(r), c = B(), v = E("input"), this.h()
	  },
	  l(I) {
		e = y(I, "DIV", {
		  class: !0
		});
		var D = k(e);
		_ && _.l(D), t = S(D), w.l(D), l = S(D), s = y(D, "DIV", {});
		var C = k(s);
		a = y(C, "DIV", {
		  class: !0
		});
		var M = k(a);
		n = j(M, r), M.forEach(d), c = S(C), v = y(C, "INPUT", {
		  type: !0,
		  class: !0,
		  placeholder: !0,
		  autocomplete: !0,
		  name: !0
		}), C.forEach(d), D.forEach(d), this.h()
	  },
	  h() {
		o(a, "class", "text-sm font-medium text-left mb-1"), o(v, "type", "password"), o(v, "class", "my-0.5 w-full text-sm outline-none bg-transparent"), o(v, "placeholder", u = i[8].t("Enter Your Password")), o(v, "autocomplete", "current-password"), o(v, "name", "current-password"), v.required = !0, o(e, "class", "flex flex-col mt-4")
	  },
	  m(I, D) {
		A(I, e, D), _ && _.m(e, null), h(e, t), w.m(e, null), h(e, l), h(e, s), h(s, a), h(a, n), h(s, c), h(s, v), ie(v, i[4]), f || (p = x(v, "input", i[17]), f = !0)
	  },
	  p(I, D) {
		I[1] === "signup" ? _ ? _.p(I, D) : (_ = He(I), _.c(), _.m(e, t)) : _ && (_.d(1), _ = null), g === (g = m(I)) && w ? w.p(I, D) : (w.d(1), w = g(I), w && (w.c(), w.m(e, l))), D[0] & 256 && r !== (r = I[8].t("Password") + "") && H(n, r), D[0] & 256 && u !== (u = I[8].t("Enter Your Password")) && o(v, "placeholder", u), D[0] & 16 && v.value !== I[4] && ie(v, I[4])
	  },
	  d(I) {
		I && d(e), _ && _.d(), w.d(), f = !1, p()
	  }
	}
  }
  
  function He(i) {
	let e, t, l = i[8].t("Name") + "",
	  s, a, r, n, c, v;
	return {
	  c() {
		e = E("div"), t = E("div"), s = T(l), a = B(), r = E("input"), this.h()
	  },
	  l(u) {
		e = y(u, "DIV", {
		  class: !0
		});
		var f = k(e);
		t = y(f, "DIV", {
		  class: !0
		});
		var p = k(t);
		s = j(p, l), p.forEach(d), a = S(f), r = y(f, "INPUT", {
		  type: !0,
		  class: !0,
		  autocomplete: !0,
		  placeholder: !0
		}), f.forEach(d), this.h()
	  },
	  h() {
		o(t, "class", "text-sm font-medium text-left mb-1"), o(r, "type", "text"), o(r, "class", "my-0.5 w-full text-sm outline-none bg-transparent"), o(r, "autocomplete", "name"), o(r, "placeholder", n = i[8].t("Enter Your Full Name")), r.required = !0, o(e, "class", "mb-2")
	  },
	  m(u, f) {
		A(u, e, f), h(e, t), h(t, s), h(e, a), h(e, r), ie(r, i[2]), c || (v = x(r, "input", i[14]), c = !0)
	  },
	  p(u, f) {
		f[0] & 256 && l !== (l = u[8].t("Name") + "") && H(s, l), f[0] & 256 && n !== (n = u[8].t("Enter Your Full Name")) && o(r, "placeholder", n), f[0] & 4 && r.value !== u[2] && ie(r, u[2])
	  },
	  d(u) {
		u && d(e), c = !1, v()
	  }
	}
  }
  
  function Mt(i) {
	let e, t, l = i[8].t("Email") + "",
	  s, a, r, n, c, v;
	return {
	  c() {
		e = E("div"), t = E("div"), s = T(l), a = B(), r = E("input"), this.h()
	  },
	  l(u) {
		e = y(u, "DIV", {
		  class: !0
		});
		var f = k(e);
		t = y(f, "DIV", {
		  class: !0
		});
		var p = k(t);
		s = j(p, l), p.forEach(d), a = S(f), r = y(f, "INPUT", {
		  type: !0,
		  class: !0,
		  autocomplete: !0,
		  name: !0,
		  placeholder: !0
		}), f.forEach(d), this.h()
	  },
	  h() {
		o(t, "class", "text-sm font-medium text-left mb-1"), o(r, "type", "email"), o(r, "class", "my-0.5 w-full text-sm outline-none bg-transparent"), o(r, "autocomplete", "email"), o(r, "name", "email"), o(r, "placeholder", n = i[8].t("Enter Your Email")), r.required = !0, o(e, "class", "mb-2")
	  },
	  m(u, f) {
		A(u, e, f), h(e, t), h(t, s), h(e, a), h(e, r), ie(r, i[3]), c || (v = x(r, "input", i[16]), c = !0)
	  },
	  p(u, f) {
		f[0] & 256 && l !== (l = u[8].t("Email") + "") && H(s, l), f[0] & 256 && n !== (n = u[8].t("Enter Your Email")) && o(r, "placeholder", n), f[0] & 8 && r.value !== u[3] && ie(r, u[3])
	  },
	  d(u) {
		u && d(e), c = !1, v()
	  }
	}
  }
  
  function Ct(i) {
	let e, t, l = i[8].t("Username") + "",
	  s, a, r, n, c, v;
	return {
	  c() {
		e = E("div"), t = E("div"), s = T(l), a = B(), r = E("input"), this.h()
	  },
	  l(u) {
		e = y(u, "DIV", {
		  class: !0
		});
		var f = k(e);
		t = y(f, "DIV", {
		  class: !0
		});
		var p = k(t);
		s = j(p, l), p.forEach(d), a = S(f), r = y(f, "INPUT", {
		  type: !0,
		  class: !0,
		  autocomplete: !0,
		  name: !0,
		  placeholder: !0
		}), f.forEach(d), this.h()
	  },
	  h() {
		o(t, "class", "text-sm font-medium text-left mb-1"), o(r, "type", "text"), o(r, "class", "my-0.5 w-full text-sm outline-none bg-transparent"), o(r, "autocomplete", "username"), o(r, "name", "username"), o(r, "placeholder", n = i[8].t("Enter Your Username")), r.required = !0, o(e, "class", "mb-2")
	  },
	  m(u, f) {
		A(u, e, f), h(e, t), h(t, s), h(e, a), h(e, r), ie(r, i[5]), c || (v = x(r, "input", i[15]), c = !0)
	  },
	  p(u, f) {
		f[0] & 256 && l !== (l = u[8].t("Username") + "") && H(s, l), f[0] & 256 && n !== (n = u[8].t("Enter Your Username")) && o(r, "placeholder", n), f[0] & 32 && r.value !== u[5] && ie(r, u[5])
	  },
	  d(u) {
		u && d(e), c = !1, v()
	  }
	}
  }
  
  function Pe(i) {
	let e;
  
	function t(a, r) {
	  return a[1] === "ldap" ? Tt : Wt
	}
	let l = t(i),
	  s = l(i);
	return {
	  c() {
		s.c(), e = ae()
	  },
	  l(a) {
		s.l(a), e = ae()
	  },
	  m(a, r) {
		s.m(a, r), A(a, e, r)
	  },
	  p(a, r) {
		l === (l = t(a)) && s ? s.p(a, r) : (s.d(1), s = l(a), s && (s.c(), s.m(e.parentNode, e)))
	  },
	  d(a) {
		a && d(e), s.d(a)
	  }
	}
  }
  
  function Wt(i) {
	var n, c, v;
	let e, t = (i[1] === "signin" ? i[8].t("Sign in") : ((n = i[7]) == null ? void 0 : n.onboarding) ?? !1 ? i[8].t("Create Admin Account") : i[8].t("Create Account")) + "",
	  l, s, a, r = ((c = i[7]) == null ? void 0 : c.features.enable_signup) && !(((v = i[7]) == null ? void 0 : v.onboarding) ?? !1) && ze(i);
	return {
	  c() {
		e = E("button"), l = T(t), s = B(), r && r.c(), a = ae(), this.h()
	  },
	  l(u) {
		e = y(u, "BUTTON", {
		  class: !0,
		  type: !0
		});
		var f = k(e);
		l = j(f, t), f.forEach(d), s = S(u), r && r.l(u), a = ae(), this.h()
	  },
	  h() {
		o(e, "class", "bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"), o(e, "type", "submit")
	  },
	  m(u, f) {
		A(u, e, f), h(e, l), A(u, s, f), r && r.m(u, f), A(u, a, f)
	  },
	  p(u, f) {
		var p, _, m;
		f[0] & 386 && t !== (t = (u[1] === "signin" ? u[8].t("Sign in") : ((p = u[7]) == null ? void 0 : p.onboarding) ?? !1 ? u[8].t("Create Admin Account") : u[8].t("Create Account")) + "") && H(l, t), (_ = u[7]) != null && _.features.enable_signup && !(((m = u[7]) == null ? void 0 : m.onboarding) ?? !1) ? r ? r.p(u, f) : (r = ze(u), r.c(), r.m(a.parentNode, a)) : r && (r.d(1), r = null)
	  },
	  d(u) {
		u && (d(e), d(s), d(a)), r && r.d(u)
	  }
	}
  }
  
  function Tt(i) {
	let e, t = i[8].t("Authenticate") + "",
	  l;
	return {
	  c() {
		e = E("button"), l = T(t), this.h()
	  },
	  l(s) {
		e = y(s, "BUTTON", {
		  class: !0,
		  type: !0
		});
		var a = k(e);
		l = j(a, t), a.forEach(d), this.h()
	  },
	  h() {
		o(e, "class", "bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"), o(e, "type", "submit")
	  },
	  m(s, a) {
		A(s, e, a), h(e, l)
	  },
	  p(s, a) {
		a[0] & 256 && t !== (t = s[8].t("Authenticate") + "") && H(l, t)
	  },
	  d(s) {
		s && d(e)
	  }
	}
  }
  
  function ze(i) {
	let e, t = (i[1] === "signin" ? i[8].t("Don't have an account?") : i[8].t("Already have an account?")) + "",
	  l, s, a, r = (i[1] === "signin" ? i[8].t("Sign up") : i[8].t("Sign in")) + "",
	  n, c, v;
	return {
	  c() {
		e = E("div"), l = T(t), s = B(), a = E("button"), n = T(r), this.h()
	  },
	  l(u) {
		e = y(u, "DIV", {
		  class: !0
		});
		var f = k(e);
		l = j(f, t), s = S(f), a = y(f, "BUTTON", {
		  class: !0,
		  type: !0
		});
		var p = k(a);
		n = j(p, r), p.forEach(d), f.forEach(d), this.h()
	  },
	  h() {
		o(a, "class", "font-medium underline"), o(a, "type", "button"), o(e, "class", "mt-4 text-sm text-center")
	  },
	  m(u, f) {
		A(u, e, f), h(e, l), h(e, s), h(e, a), h(a, n), c || (v = x(a, "click", i[18]), c = !0)
	  },
	  p(u, f) {
		f[0] & 258 && t !== (t = (u[1] === "signin" ? u[8].t("Don't have an account?") : u[8].t("Already have an account?")) + "") && H(l, t), f[0] & 258 && r !== (r = (u[1] === "signin" ? u[8].t("Sign up") : u[8].t("Sign in")) + "") && H(n, r)
	  },
	  d(u) {
		u && d(e), c = !1, v()
	  }
	}
  }

  
  function Oe(i) {
	var w, I, D, C, M, W, z, Y, ee, R, Q, $, Z, le;
	let e, t, l, s, a, r, n, c, v, u, f = (((w = i[7]) == null ? void 0 : w.features.enable_login_form) || ((I = i[7]) == null ? void 0 : I.features.enable_ldap)) && qe(i),
	  p = ((M = (C = (D = i[7]) == null ? void 0 : D.oauth) == null ? void 0 : C.providers) == null ? void 0 : M.google) && Le(i),
	  _ = ((Y = (z = (W = i[7]) == null ? void 0 : W.oauth) == null ? void 0 : z.providers) == null ? void 0 : Y.microsoft) && Ye(i),
	  m = ((Q = (R = (ee = i[7]) == null ? void 0 : ee.oauth) == null ? void 0 : R.providers) == null ? void 0 : Q.github) && Fe(i),
	  g = ((le = (Z = ($ = i[7]) == null ? void 0 : $.oauth) == null ? void 0 : Z.providers) == null ? void 0 : le.oidc) && Ge(i);
	return {
	  c() {
		e = E("div"), t = E("hr"), l = B(), f && f.c(), s = B(), a = E("hr"), r = B(), n = E("div"), p && p.c(), c = B(), _ && _.c(), v = B(), m && m.c(), u = B(), g && g.c(), this.h()
	  },
	  l(V) {
		e = y(V, "DIV", {
		  class: !0
		});
		var b = k(e);
		t = y(b, "HR", {
		  class: !0
		}), l = S(b), f && f.l(b), s = S(b), a = y(b, "HR", {
		  class: !0
		}), b.forEach(d), r = S(V), n = y(V, "DIV", {
		  class: !0
		});
		var N = k(n);
		p && p.l(N), c = S(N), _ && _.l(N), v = S(N), m && m.l(N), u = S(N), g && g.l(N), N.forEach(d), this.h()
	  },
	  h() {
		o(t, "class", "w-32 h-px my-4 border-0 dark:bg-gray-100/10 bg-gray-700/10"), o(a, "class", "w-32 h-px my-4 border-0 dark:bg-gray-100/10 bg-gray-700/10"), o(e, "class", "inline-flex items-center justify-center w-full"), o(n, "class", "flex flex-col space-y-2")
	  },
	  m(V, b) {
		A(V, e, b), h(e, t), h(e, l), f && f.m(e, null), h(e, s), h(e, a), A(V, r, b), A(V, n, b), p && p.m(n, null), h(n, c), _ && _.m(n, null), h(n, v), m && m.m(n, null), h(n, u), g && g.m(n, null)
	  },
	  p(V, b) {
		var N, P, L, J, U, F, K, te, re, fe, Ee, ye, Ie, Ne;
		(N = V[7]) != null && N.features.enable_login_form || (P = V[7]) != null && P.features.enable_ldap ? f ? f.p(V, b) : (f = qe(V), f.c(), f.m(e, s)) : f && (f.d(1), f = null), (U = (J = (L = V[7]) == null ? void 0 : L.oauth) == null ? void 0 : J.providers) != null && U.google ? p ? p.p(V, b) : (p = Le(V), p.c(), p.m(n, c)) : p && (p.d(1), p = null), (te = (K = (F = V[7]) == null ? void 0 : F.oauth) == null ? void 0 : K.providers) != null && te.microsoft ? _ ? _.p(V, b) : (_ = Ye(V), _.c(), _.m(n, v)) : _ && (_.d(1), _ = null), (Ee = (fe = (re = V[7]) == null ? void 0 : re.oauth) == null ? void 0 : fe.providers) != null && Ee.github ? m ? m.p(V, b) : (m = Fe(V), m.c(), m.m(n, u)) : m && (m.d(1), m = null), (Ne = (Ie = (ye = V[7]) == null ? void 0 : ye.oauth) == null ? void 0 : Ie.providers) != null && Ne.oidc ? g ? g.p(V, b) : (g = Ge(V), g.c(), g.m(n, null)) : g && (g.d(1), g = null)
	  },
	  d(V) {
		V && (d(e), d(r), d(n)), f && f.d(), p && p.d(), _ && _.d(), m && m.d(), g && g.d()
	  }
	}
  }
  
  function qe(i) {
	let e, t = i[8].t("or") + "",
	  l;
	return {
	  c() {
		e = E("span"), l = T(t), this.h()
	  },
	  l(s) {
		e = y(s, "SPAN", {
		  class: !0
		});
		var a = k(e);
		l = j(a, t), a.forEach(d), this.h()
	  },
	  h() {
		o(e, "class", "px-3 text-sm font-medium text-gray-900 dark:text-white bg-transparent")
	  },
	  m(s, a) {
		A(s, e, a), h(e, l)
	  },
	  p(s, a) {
		a[0] & 256 && t !== (t = s[8].t("or") + "") && H(l, t)
	  },
	  d(s) {
		s && d(e)
	  }
	}
  }
  
  function Le(i) {
	let e, t, l, s, a, r, n, c, v, u = i[8].t("Continue with {{provider}}", {
		provider: "Google"
	  }) + "",
	  f, p, _;
	return {
	  c() {
		e = E("button"), t = O("svg"), l = O("path"), s = O("path"), a = O("path"), r = O("path"), n = O("path"), c = B(), v = E("span"), f = T(u), this.h()
	  },
	  l(m) {
		e = y(m, "BUTTON", {
		  class: !0
		});
		var g = k(e);
		t = q(g, "svg", {
		  xmlns: !0,
		  viewBox: !0,
		  class: !0
		});
		var w = k(t);
		l = q(w, "path", {
		  fill: !0,
		  d: !0
		}), k(l).forEach(d), s = q(w, "path", {
		  fill: !0,
		  d: !0
		}), k(s).forEach(d), a = q(w, "path", {
		  fill: !0,
		  d: !0
		}), k(a).forEach(d), r = q(w, "path", {
		  fill: !0,
		  d: !0
		}), k(r).forEach(d), n = q(w, "path", {
		  fill: !0,
		  d: !0
		}), k(n).forEach(d), w.forEach(d), c = S(g), v = y(g, "SPAN", {});
		var I = k(v);
		f = j(I, u), I.forEach(d), g.forEach(d), this.h()
	  },
	  h() {
		o(l, "fill", "#EA4335"), o(l, "d", "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"), o(s, "fill", "#4285F4"), o(s, "d", "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"), o(a, "fill", "#FBBC05"), o(a, "d", "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"), o(r, "fill", "#34A853"), o(r, "d", "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"), o(n, "fill", "none"), o(n, "d", "M0 0h48v48H0z"), o(t, "xmlns", "http://www.w3.org/2000/svg"), o(t, "viewBox", "0 0 48 48"), o(t, "class", "size-6 mr-3"), o(e, "class", "flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5")
	  },
	  m(m, g) {
		A(m, e, g), h(e, t), h(t, l), h(t, s), h(t, a), h(t, r), h(t, n), h(e, c), h(e, v), h(v, f), p || (_ = x(e, "click", i[20]), p = !0)
	  },
	  p(m, g) {
		g[0] & 256 && u !== (u = m[8].t("Continue with {{provider}}", {
		  provider: "Google"
		}) + "") && H(f, u)
	  },
	  d(m) {
		m && d(e), p = !1, _()
	  }
	}
  }
  
  function Ye(i) {
	let e, t, l, s, a, r, n, c, v = i[8].t("Continue with {{provider}}", {
		provider: "Microsoft"
	  }) + "",
	  u, f, p;
	return {
	  c() {
		e = E("button"), t = O("svg"), l = O("rect"), s = O("rect"), a = O("rect"), r = O("rect"), n = B(), c = E("span"), u = T(v), this.h()
	  },
	  l(_) {
		e = y(_, "BUTTON", {
		  class: !0
		});
		var m = k(e);
		t = q(m, "svg", {
		  xmlns: !0,
		  viewBox: !0,
		  class: !0
		});
		var g = k(t);
		l = q(g, "rect", {
		  x: !0,
		  y: !0,
		  width: !0,
		  height: !0,
		  fill: !0
		}), k(l).forEach(d), s = q(g, "rect", {
		  x: !0,
		  y: !0,
		  width: !0,
		  height: !0,
		  fill: !0
		}), k(s).forEach(d), a = q(g, "rect", {
		  x: !0,
		  y: !0,
		  width: !0,
		  height: !0,
		  fill: !0
		}), k(a).forEach(d), r = q(g, "rect", {
		  x: !0,
		  y: !0,
		  width: !0,
		  height: !0,
		  fill: !0
		}), k(r).forEach(d), g.forEach(d), n = S(m), c = y(m, "SPAN", {});
		var w = k(c);
		u = j(w, v), w.forEach(d), m.forEach(d), this.h()
	  },
	  h() {
		o(l, "x", "1"), o(l, "y", "1"), o(l, "width", "9"), o(l, "height", "9"), o(l, "fill", "#f25022"), o(s, "x", "1"), o(s, "y", "11"), o(s, "width", "9"), o(s, "height", "9"), o(s, "fill", "#00a4ef"), o(a, "x", "11"), o(a, "y", "1"), o(a, "width", "9"), o(a, "height", "9"), o(a, "fill", "#7fba00"), o(r, "x", "11"), o(r, "y", "11"), o(r, "width", "9"), o(r, "height", "9"), o(r, "fill", "#ffb900"), o(t, "xmlns", "http://www.w3.org/2000/svg"), o(t, "viewBox", "0 0 21 21"), o(t, "class", "size-6 mr-3"), o(e, "class", "flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5")
	  },
	  m(_, m) {
		A(_, e, m), h(e, t), h(t, l), h(t, s), h(t, a), h(t, r), h(e, n), h(e, c), h(c, u), f || (p = x(e, "click", i[21]), f = !0)
	  },
	  p(_, m) {
		m[0] & 256 && v !== (v = _[8].t("Continue with {{provider}}", {
		  provider: "Microsoft"
		}) + "") && H(u, v)
	  },
	  d(_) {
		_ && d(e), f = !1, p()
	  }
	}
  }
  
  function Fe(i) {
	let e, t, l, s, a, r = i[8].t("Continue with {{provider}}", {
		provider: "GitHub"
	  }) + "",
	  n, c, v;
	return {
	  c() {
		e = E("button"), t = O("svg"), l = O("path"), s = B(), a = E("span"), n = T(r), this.h()
	  },
	  l(u) {
		e = y(u, "BUTTON", {
		  class: !0
		});
		var f = k(e);
		t = q(f, "svg", {
		  xmlns: !0,
		  viewBox: !0,
		  class: !0
		});
		var p = k(t);
		l = q(p, "path", {
		  fill: !0,
		  d: !0
		}), k(l).forEach(d), p.forEach(d), s = S(f), a = y(f, "SPAN", {});
		var _ = k(a);
		n = j(_, r), _.forEach(d), f.forEach(d), this.h()
	  },
	  h() {
		o(l, "fill", "currentColor"), o(l, "d", "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"), o(t, "xmlns", "http://www.w3.org/2000/svg"), o(t, "viewBox", "0 0 24 24"), o(t, "class", "size-6 mr-3"), o(e, "class", "flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5")
	  },
	  m(u, f) {
		A(u, e, f), h(e, t), h(t, l), h(e, s), h(e, a), h(a, n), c || (v = x(e, "click", i[22]), c = !0)
	  },
	  p(u, f) {
		f[0] & 256 && r !== (r = u[8].t("Continue with {{provider}}", {
		  provider: "GitHub"
		}) + "") && H(n, r)
	  },
	  d(u) {
		u && d(e), c = !1, v()
	  }
	}
  }
  
  function Ge(i) {
	var u, f, p;
	let e, t, l, s, a, r = i[8].t("Continue with {{provider}}", {
		provider: ((p = (f = (u = i[7]) == null ? void 0 : u.oauth) == null ? void 0 : f.providers) == null ? void 0 : p.oidc) ?? "SSO"
	  }) + "",
	  n, c, v;
	return {
	  c() {
		e = E("button"), t = O("svg"), l = O("path"), s = B(), a = E("span"), n = T(r), this.h()
	  },
	  l(_) {
		e = y(_, "BUTTON", {
		  class: !0
		});
		var m = k(e);
		t = q(m, "svg", {
		  xmlns: !0,
		  fill: !0,
		  viewBox: !0,
		  "stroke-width": !0,
		  stroke: !0,
		  class: !0
		});
		var g = k(t);
		l = q(g, "path", {
		  "stroke-linecap": !0,
		  "stroke-linejoin": !0,
		  d: !0
		}), k(l).forEach(d), g.forEach(d), s = S(m), a = y(m, "SPAN", {});
		var w = k(a);
		n = j(w, r), w.forEach(d), m.forEach(d), this.h()
	  },
	  h() {
		o(l, "stroke-linecap", "round"), o(l, "stroke-linejoin", "round"), o(l, "d", "M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"), o(t, "xmlns", "http://www.w3.org/2000/svg"), o(t, "fill", "none"), o(t, "viewBox", "0 0 24 24"), o(t, "stroke-width", "1.5"), o(t, "stroke", "currentColor"), o(t, "class", "size-6 mr-3"), o(e, "class", "flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5")
	  },
	  m(_, m) {
		A(_, e, m), h(e, t), h(t, l), h(e, s), h(e, a), h(a, n), c || (v = x(e, "click", i[23]), c = !0)
	  },
	  p(_, m) {
		var g, w, I;
		m[0] & 384 && r !== (r = _[8].t("Continue with {{provider}}", {
		  provider: ((I = (w = (g = _[7]) == null ? void 0 : g.oauth) == null ? void 0 : w.providers) == null ? void 0 : I.oidc) ?? "SSO"
		}) + "") && H(n, r)
	  },
	  d(_) {
		_ && d(e), c = !1, v()
	  }
	}
  }
  
  function Re(i) {
	let e, t, l, s = (i[1] === "ldap" ? i[8].t("Continue with Email") : i[8].t("Continue with LDAP")) + "",
	  a, r, n;
	return {
	  c() {
		e = E("div"), t = E("button"), l = E("span"), a = T(s), this.h()
	  },
	  l(c) {
		e = y(c, "DIV", {
		  class: !0
		});
		var v = k(e);
		t = y(v, "BUTTON", {
		  class: !0,
		  type: !0
		});
		var u = k(t);
		l = y(u, "SPAN", {});
		var f = k(l);
		a = j(f, s), f.forEach(d), u.forEach(d), v.forEach(d), this.h()
	  },
	  h() {
		o(t, "class", "flex justify-center items-center text-xs w-full text-center underline"), o(t, "type", "button"), o(e, "class", "mt-2")
	  },
	  m(c, v) {
		A(c, e, v), h(e, t), h(t, l), h(l, a), r || (n = x(t, "click", i[24]), r = !0)
	  },
	  p(c, v) {
		v[0] & 258 && s !== (s = (c[1] === "ldap" ? c[8].t("Continue with Email") : c[8].t("Continue with LDAP")) + "") && H(a, s)
	  },
	  d(c) {
		c && d(e), r = !1, n()
	  }
	}
  }
  
  function jt(i) {
	let e, t, l, s, a, r, n, c, v, u, f;
	document.title = e = `
		  ${i[9]}
	  `;
  
	function p(g) {
	  i[13](g)
	}
	let _ = {
	  getStartedHandler: i[12]
	};
	i[6] !== void 0 && (_.show = i[6]), l = new Nt({
	  props: _
	}), Qe.push(() => et(l, "show", p));
	let m = i[0] && We(i);
	return {
	  c() {
		t = B(), ce(l.$$.fragment), a = B(), r = E("div"), n = E("div"), c = B(), v = E("div"), u = B(), m && m.c(), this.h()
	  },
	  l(g) {
		Xe("svelte-sdpf07", document.head).forEach(d), t = S(g), he(l.$$.fragment, g), a = S(g), r = y(g, "DIV", {
		  class: !0
		});
		var I = k(r);
		n = y(I, "DIV", {
		  class: !0
		}), k(n).forEach(d), c = S(I), v = y(I, "DIV", {
		  class: !0
		}), k(v).forEach(d), u = S(I), m && m.l(I), I.forEach(d), this.h()
	  },
	  h() {
		o(n, "class", "w-full h-full absolute top-0 left-0 bg-white dark:bg-black"), o(v, "class", "w-full absolute top-0 left-0 right-0 h-8 drag-region"), o(r, "class", "w-full h-screen max-h-[100dvh] text-white relative")
	  },
	  m(g, w) {
		A(g, t, w), me(l, g, w), A(g, a, w), A(g, r, w), h(r, n), h(r, c), h(r, v), h(r, u), m && m.m(r, null), f = !0
	  },
	  p(g, w) {
		(!f || w[0] & 512) && e !== (e = `
		  ${g[9]}
	  `) && (document.title = e);
		const I = {};
		w[0] & 194 && (I.getStartedHandler = g[12]), !s && w[0] & 64 && (s = !0, I.show = g[6], $e(() => s = !1)), l.$set(I), g[0] ? m ? (m.p(g, w), w[0] & 1 && G(m, 1)) : (m = We(g), m.c(), G(m, 1), m.m(r, null)) : m && (be(), X(m, 1, 1, () => {
		  m = null
		}), ke())
	  },
	  i(g) {
		f || (G(l.$$.fragment, g), G(m), f = !0)
	  },
	  o(g) {
		X(l.$$.fragment, g), X(m), f = !1
	  },
	  d(g) {
		g && (d(t), d(a), d(r)), _e(l, g), m && m.d()
	  }
	}
  }
  
  function Ht(i, e, t) {
	let l, s, a, r, n, c;
	ne(i, De, U => t(7, l = U)), ne(i, Ae, U => t(25, s = U)), ne(i, tt, U => t(26, a = U)), ne(i, nt, U => t(27, r = U)), ne(i, ot, U => t(9, c = U));
	const v = Ze("i18n");
	ne(i, v, U => t(8, n = U));
	let u = !1,
	  f = l != null && l.features.enable_ldap ? "ldap" : "signin",
	  p = "",
	  _ = "",
	  m = "",
	  g = "";
	const w = async U => {
	  U && (console.log(U), de.success(n.t("You're now logged in.")), U.token && (localStorage.token = U.token), r.emit("user-join", {
		auth: {
		  token: U.token
		}
	  }), await Ae.set(U), await De.set(await lt()), Ue("/"))
	}, I = async () => {
	  const U = await st(_, m).catch(F => (de.error(`${F}`), null));
	  await w(U)
	}, D = async () => {
	  const U = await at(p, _, m, ut(p)).catch(F => (de.error(`${F}`), null));
	  await w(U)
	}, C = async () => {
	  const U = await it(g, m).catch(F => (de.error(`${F}`), null));
	  await w(U)
	}, M = async () => {
	  f === "ldap" ? await C() : f === "signin" ? await I() : await D()
	}, W = async () => {
	  if (!a.url.hash) return;
	  const U = a.url.hash.substring(1);
	  if (!U) return;
	  const K = new URLSearchParams(U).get("token");
	  if (!K) return;
	  const te = await rt(K).catch(re => (de.error(`${re}`), null));
	  te && (localStorage.token = K, await w(te))
	};
	let z = !1;
	we(async () => {
	  s !== void 0 && await Ue("/"), await W(), t(0, u = !0), ((l == null ? void 0 : l.features.auth_trusted_header) ?? !1) || (l == null ? void 0 : l.features.auth) === !1 ? await I() : t(6, z = (l == null ? void 0 : l.onboarding) ?? !1)
	});
	const Y = () => {
	  t(6, z = !1), t(1, f = l != null && l.features.enable_ldap ? "ldap" : "signup")
	};
  
	function ee(U) {
	  z = U, t(6, z)
	}
  
	function R() {
	  p = this.value, t(2, p)
	}
  
	function Q() {
	  g = this.value, t(5, g)
	}
  
	function $() {
	  _ = this.value, t(3, _)
	}
  
	function Z() {
	  m = this.value, t(4, m)
	}
	return [u, f, p, _, m, g, z, l, n, c, v, M, Y, ee, R, Q, $, Z, () => {
	  f === "signin" ? t(1, f = "signup") : t(1, f = "signin")
	}, U => {
	  U.preventDefault(), M()
	}, () => {
	  window.location.href = `${oe}/oauth/google/login`
	}, () => {
	  window.location.href = `${oe}/oauth/microsoft/login`
	}, () => {
	  window.location.href = `${oe}/oauth/github/login`
	}, () => {
	  window.location.href = `${oe}/oauth/oidc/login`
	}, () => {
	  f === "ldap" ? t(1, f = (l == null ? void 0 : l.onboarding) ?? !1 ? "signup" : "signin") : t(1, f = "ldap")
	}]
  }
  class Qt extends pe {
	constructor(e) {
	  super(), ve(this, e, Ht, jt, ue, {}, null, [-1, -1])
	}
  }
  export {
	Qt as component
  };
  //# sourceMappingURL=35.CoNRNKX7.js.map