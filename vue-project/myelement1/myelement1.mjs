import { inject as P, computed as b, openBlock as p, createElementBlock as v, normalizeClass as m, unref as t, createElementVNode as a, withDirectives as g, isRef as x, vModelCheckbox as W, renderSlot as V, toDisplayString as $, createCommentVNode as O, provide as z, ref as C, vModelDynamic as G, vModelText as D, vShow as M, pushScopeId as j, popScopeId as N, normalizeStyle as S, createBlock as X, reactive as Y, watch as Z, onMounted as R, onBeforeUnmount as ee, Fragment as T, renderList as F, withModifiers as q, vModelRadio as te, createVNode as se, render as U } from "vue";
const k = (o, n) => {
  const e = o.__vccOpts || o;
  for (const [s, l] of n)
    e[s] = l;
  return e;
}, ae = { class: "myratioinput" }, oe = ["name", "value", "disabled"], ne = { class: "myratiolabel" }, le = { key: 0 }, ie = {
  name: "MyCheckBox"
}, de = /* @__PURE__ */ Object.assign(ie, {
  props: ["label", "disabled", "border", "size", "name", "modelValue"],
  emits: ["update:modelValue"],
  setup(o, { emit: n }) {
    const e = o;
    var s = P("change"), l = P("group"), i = b({
      get() {
        return l ? l.value.indexOf(e.label) != -1 : e.modelValue;
      },
      set(_) {
        if (!e.disabled)
          if (l)
            if (console.log(2222), _)
              s([...l.value, e.label]);
            else {
              var d = l.value.slice();
              d.splice(l.value.indexOf(e.label), 1), s(d);
            }
          else
            console.log(1111), n("update:modelValue", _);
      }
    });
    return (_, d) => (p(), v("div", {
      class: m(["myratio", [
        `myratio-${t(e).size}`,
        {
          "is-disabled": t(e).disabled == "",
          "is-border": t(e).border == ""
        }
      ]])
    }, [
      a("span", ae, [
        g(a("input", {
          type: "checkbox",
          name: t(e).name,
          value: t(e).label,
          disabled: t(e).disabled,
          "onUpdate:modelValue": d[0] || (d[0] = (r) => x(i) ? i.value = r : i = r)
        }, null, 8, oe), [
          [W, t(i)]
        ])
      ]),
      a("span", ne, [
        V(_.$slots, "default", {}, void 0, !0),
        _.$slots.default ? O("", !0) : (p(), v("span", le, $(t(e).label), 1))
      ])
    ], 2));
  }
}), ce = /* @__PURE__ */ k(de, [["__scopeId", "data-v-775ec9d5"]]), re = { class: "myradio-grounp" }, ue = {
  name: "MyCheckBoxGroup"
}, _e = /* @__PURE__ */ Object.assign(ue, {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(o, { emit: n }) {
    const e = o;
    function s(i) {
      n("update:modelValue", i);
    }
    var l = b(() => e.modelValue);
    return z("change", s), z("group", l), (i, _) => (p(), v("div", re, [
      V(i.$slots, "default")
    ]));
  }
});
const A = (o) => (j("data-v-699fdffe"), o = o(), N(), o), pe = { class: "Myinput clearfix" }, ve = ["type", "name", "placeholder", "disabled", "maxlength"], me = ["name", "placeholder", "disabled", "maxlength"], fe = /* @__PURE__ */ A(() => /* @__PURE__ */ a("i", { class: "iconfont icon-chacha clearlogo" }, null, -1)), ge = [
  fe
], he = /* @__PURE__ */ A(() => /* @__PURE__ */ a("i", { class: "iconfont icon-yanjing clearlogo" }, null, -1)), ye = [
  he
], be = { class: "inputclear" }, $e = { class: "inputcountinner" }, xe = {
  name: "MyInput"
}, ke = /* @__PURE__ */ Object.assign(xe, {
  props: ["modelValue", "type", "placeholder", "disabled", "clearable", "showPassword", "maxlength", "showwordlimit", "name"],
  emits: ["update:modelValue"],
  setup(o, { emit: n }) {
    const e = o;
    var s = b({
      get() {
        return e.modelValue;
      },
      set(_) {
        e.disabled != "" && n("update:modelValue", _);
      }
    }), l = C(e.showPassword == ""), i = function() {
      l.value = !l.value;
    };
    return (_, d) => (p(), v("div", pe, [
      t(e).type != "textarea" ? g((p(), v("input", {
        key: 0,
        class: m(["inputinner", {
          "is-disabled": t(e).disabled == ""
        }]),
        type: t(e).showPassword == "" ? t(l) ? "password" : "text" : t(e).type,
        name: t(e).name,
        placeholder: t(e).placeholder,
        "onUpdate:modelValue": d[0] || (d[0] = (r) => x(s) ? s.value = r : s = r),
        disabled: t(e).disabled == "",
        maxlength: t(e).maxlength
      }, null, 10, ve)), [
        [G, t(s)]
      ]) : O("", !0),
      t(e).type == "textarea" ? g((p(), v("textarea", {
        key: 1,
        class: m(["inputinner inputtextarea", {
          "is-disabled": t(e).disabled == ""
        }]),
        name: t(e).name,
        placeholder: t(e).placeholder,
        "onUpdate:modelValue": d[1] || (d[1] = (r) => x(s) ? s.value = r : s = r),
        disabled: t(e).disabled == "",
        maxlength: t(e).maxlength
      }, `\r
        `, 10, me)), [
        [D, t(s)]
      ]) : O("", !0),
      g(a("span", {
        class: "inputclear",
        onClick: d[2] || (d[2] = (r) => x(s) ? s.value = "" : s = "")
      }, ge, 512), [
        [M, t(s).length && t(e).clearable == ""]
      ]),
      g(a("span", {
        class: "inputclear",
        onClick: d[3] || (d[3] = (...r) => t(i) && t(i)(...r))
      }, ye, 512), [
        [M, t(e).showPassword == ""]
      ]),
      g(a("span", be, [
        a("span", $e, $(t(s).length) + "/" + $(t(e).maxlength), 1)
      ], 512), [
        [M, t(e).showwordlimit == ""]
      ])
    ]));
  }
}), we = /* @__PURE__ */ k(ke, [["__scopeId", "data-v-699fdffe"]]);
const Me = { class: "myicon" }, Ve = {
  name: "MyIcon"
}, Ce = /* @__PURE__ */ Object.assign(Ve, {
  props: ["name", "color", "size"],
  setup(o) {
    const n = o;
    return (e, s) => (p(), v("div", Me, [
      a("i", {
        class: m(["iconfont icon-info", [`icon-${t(n).name}`]]),
        style: S({ color: t(n).color, "font-size": t(n).size + "px" })
      }, null, 6)
    ]));
  }
}), H = /* @__PURE__ */ k(Ce, [["__scopeId", "data-v-6ec7415f"]]);
const Ie = {
  name: "MyButton"
}, Se = /* @__PURE__ */ Object.assign(Ie, {
  props: ["type", "size", "disabled", "round", "plain", "icon"],
  setup(o) {
    const n = o;
    return (e, s) => (p(), v("div", {
      class: m(["mybotton", [`mybotton--${t(n).type}`, `mybotton--${t(n).size}`, {
        "is-disabled": t(n).disabled == "",
        "is-round": t(n).round == "",
        "is-plain": t(n).plain == ""
      }]]),
      tabindex: "111"
    }, [
      t(n).icon ? (p(), X(H, {
        key: 0,
        class: "icon",
        name: "props.icon"
      })) : O("", !0),
      a("span", null, [
        V(e.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Oe = /* @__PURE__ */ k(Se, [["__scopeId", "data-v-eead4c5a"]]);
const J = (o) => (j("data-v-aa3e9969"), o = o(), N(), o), je = { class: "myCarousel" }, Ne = { class: "container" }, Pe = /* @__PURE__ */ J(() => /* @__PURE__ */ a("i", { class: "iconfont icon-left" }, null, -1)), ze = [
  Pe
], Be = /* @__PURE__ */ J(() => /* @__PURE__ */ a("i", { class: "iconfont icon-right" }, null, -1)), Le = [
  Be
], Re = {
  id: "slotnum",
  class: "maincontain"
}, Ue = { class: "indicator" }, Ee = ["onClick", "onMouseenter"], Ge = {
  name: "MyCarousel"
}, De = /* @__PURE__ */ Object.assign(Ge, {
  props: {
    initindex: {
      type: Number,
      default: 0
    },
    trigger: {
      type: String,
      default: "hover"
    },
    autoplay: {
      type: Boolean,
      default: !0
    },
    interval: {
      type: Number,
      default: 3e3
    }
  },
  setup(o) {
    const n = o;
    var e = C(n.initindex), s = Y([]);
    b(() => e.value == 0 ? s.length - 1 : e.value - 1), b(() => e.value == s.length - 1 ? 0 : e.value + 1);
    function l() {
      e.value == 0 ? e.value = s.length - 1 : --e.value;
    }
    function i() {
      e.value == s.length - 1 ? e.value = 0 : ++e.value;
    }
    function _() {
      var c = document.getElementById("slotnum").childNodes;
      for (let f = 0; f < c.length; f++)
        c[f].nodeType == 1 && s.push(c[f]);
      s[e.value].classList.add("item_curr");
    }
    Z(() => e.value, () => {
      for (let c = 0; c < s.length; c++)
        c < e.value ? (s[c].classList.remove("item_curr"), s[c].classList.remove("item_next"), s[c].classList.add("item_prev")) : c == e.value ? (s[c].classList.remove("item_prev"), s[c].classList.remove("item_next"), s[c].classList.add("item_curr")) : (s[c].classList.remove("item_prev"), s[c].classList.remove("item_curr"), s[c].classList.add("item_next"));
    });
    function d(c) {
      n.trigger == "click" && (e.value = c);
    }
    function r(c) {
      n.trigger == "hover" && (e.value = c);
    }
    var I;
    function h() {
      n.autoplay == !0 && (I = setInterval(() => {
        i();
      }, n.interval));
    }
    function w() {
      clearInterval(I);
    }
    return R(() => {
      _(), h();
    }), ee(() => {
      w();
    }), (c, f) => (p(), v("div", je, [
      a("div", Ne, [
        a("div", {
          class: "leftarrow",
          onClick: i
        }, ze),
        a("div", {
          class: "rightarrow",
          onClick: l
        }, Le),
        a("div", Re, [
          V(c.$slots, "default", {}, void 0, !0)
        ])
      ]),
      a("div", Ue, [
        (p(!0), v(T, null, F(t(s), (u, y) => (p(), v("div", {
          class: m(["indicatoritem", { indicatoritem_active: y == t(e) }]),
          key: u,
          onClick: q((B) => d(y), ["stop"]),
          onMouseenter: (B) => r(y)
        }, null, 42, Ee))), 128))
      ])
    ]));
  }
}), Te = /* @__PURE__ */ k(De, [["__scopeId", "data-v-aa3e9969"]]);
const Fe = {
  name: "MyCarouselItem"
}, qe = /* @__PURE__ */ Object.assign(Fe, {
  props: ["num"],
  setup(o) {
    const n = o;
    var e = C(0);
    return R(() => {
      console.log(n.num);
    }), (s, l) => (p(), v("div", {
      class: "MyCarouselitem",
      onClick: l[0] || (l[0] = (i) => x(e) ? e.value = 1 : e = 1)
    }, [
      V(s.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ae = /* @__PURE__ */ k(qe, [["__scopeId", "data-v-47517860"]]);
const He = (o) => (j("data-v-9fe2aadf"), o = o(), N(), o), Je = ["onClick"], Ke = { class: "dialoghead" }, Qe = { class: "headslot" }, We = /* @__PURE__ */ He(() => /* @__PURE__ */ a("i", { class: "iconfont icon-chacha logosize" }, null, -1)), Xe = [
  We
], Ye = { class: "dialogcontent" }, Ze = {
  name: "MyDialog"
}, et = /* @__PURE__ */ Object.assign(Ze, {
  props: ["modelValue", "title", "width", "top", "center"],
  emits: ["update:modelValue"],
  setup(o, { emit: n }) {
    const e = o;
    function s() {
      n("update:modelValue", !1);
    }
    return (l, i) => g((p(), v("div", {
      class: "mydialog",
      onClick: q(s, ["self"])
    }, [
      a("div", {
        class: "dialogwrap",
        style: S({ width: t(e).width, "margin-top": t(e).top })
      }, [
        a("div", Ke, [
          a("div", Qe, [
            a("span", {
              class: m(["headtitle", { "is-center": t(e).center == "" }])
            }, $(t(e).title), 3)
          ]),
          a("div", {
            class: "iconremove",
            onClick: s
          }, Xe)
        ]),
        a("div", Ye, [
          V(l.$slots, "default", {}, void 0, !0)
        ]),
        a("div", {
          class: m(["dialogfoot", { "is-center": t(e).center == "" }])
        }, [
          V(l.$slots, "footer", {}, void 0, !0)
        ], 2)
      ], 4)
    ], 8, Je)), [
      [M, t(e).modelValue]
    ]);
  }
}), tt = /* @__PURE__ */ k(et, [["__scopeId", "data-v-9fe2aadf"]]);
const K = (o) => (j("data-v-a888195d"), o = o(), N(), o), st = { class: "Myinput clearfix" }, at = ["type", "name", "placeholder", "disabled", "maxlength"], ot = ["name", "placeholder", "disabled", "maxlength"], nt = /* @__PURE__ */ K(() => /* @__PURE__ */ a("i", { class: "iconfont icon-chacha clearlogo" }, null, -1)), lt = [
  nt
], it = /* @__PURE__ */ K(() => /* @__PURE__ */ a("i", { class: "iconfont icon-yanjing clearlogo" }, null, -1)), dt = [
  it
], ct = { class: "inputclear" }, rt = { class: "inputcountinner" }, ut = {
  name: "MyInput"
}, _t = /* @__PURE__ */ Object.assign(ut, {
  props: ["modelValue", "type", "placeholder", "disabled", "clearable", "showPassword", "maxlength", "showwordlimit", "name"],
  emits: ["update:modelValue"],
  setup(o, { emit: n }) {
    const e = o;
    var s = b({
      get() {
        return e.modelValue;
      },
      set(_) {
        e.disabled != "" && n("update:modelValue", _);
      }
    }), l = C(e.showPassword == ""), i = function() {
      l.value = !l.value;
    };
    return (_, d) => (p(), v("div", st, [
      t(e).type != "textarea" ? g((p(), v("input", {
        key: 0,
        class: m(["inputinner", {
          "is-disabled": t(e).disabled == ""
        }]),
        type: t(e).showPassword == "" ? t(l) ? "password" : "text" : t(e).type,
        name: t(e).name,
        placeholder: t(e).placeholder,
        "onUpdate:modelValue": d[0] || (d[0] = (r) => x(s) ? s.value = r : s = r),
        disabled: t(e).disabled == "",
        maxlength: t(e).maxlength
      }, null, 10, at)), [
        [G, t(s)]
      ]) : O("", !0),
      t(e).type == "textarea" ? g((p(), v("textarea", {
        key: 1,
        class: m(["inputinner inputtextarea", {
          "is-disabled": t(e).disabled == ""
        }]),
        name: t(e).name,
        placeholder: t(e).placeholder,
        "onUpdate:modelValue": d[1] || (d[1] = (r) => x(s) ? s.value = r : s = r),
        disabled: t(e).disabled == "",
        maxlength: t(e).maxlength
      }, `\r
        `, 10, ot)), [
        [D, t(s)]
      ]) : O("", !0),
      g(a("span", {
        class: "inputclear",
        onClick: d[2] || (d[2] = (r) => x(s) ? s.value = "" : s = "")
      }, lt, 512), [
        [M, t(s).length && t(e).clearable == ""]
      ]),
      g(a("span", {
        class: "inputclear",
        onClick: d[3] || (d[3] = (...r) => t(i) && t(i)(...r))
      }, dt, 512), [
        [M, t(e).showPassword == ""]
      ]),
      g(a("span", ct, [
        a("span", rt, $(t(s).length) + "/" + $(t(e).maxlength), 1)
      ], 512), [
        [M, t(e).showwordlimit == ""]
      ])
    ]));
  }
}), pt = /* @__PURE__ */ k(_t, [["__scopeId", "data-v-a888195d"]]);
const vt = { class: "content" }, mt = {
  name: "MyOption"
}, ft = /* @__PURE__ */ Object.assign(mt, {
  props: ["label", "value"],
  setup(o) {
    const n = o;
    var e = P("choose");
    return (s, l) => (p(), v("div", {
      class: "option",
      onClick: l[0] || (l[0] = (i) => t(e)(t(n).value))
    }, [
      a("span", vt, $(t(n).label), 1)
    ]));
  }
}), gt = /* @__PURE__ */ k(ft, [["__scopeId", "data-v-8316b196"]]);
const Q = (o) => (j("data-v-65f68caa"), o = o(), N(), o), ht = { class: "mypagination" }, yt = /* @__PURE__ */ Q(() => /* @__PURE__ */ a("i", { class: "iconfont icon-left" }, null, -1)), bt = [
  yt
], $t = { class: "numcontent" }, xt = { class: "left" }, kt = { class: "mid" }, wt = ["onClick"], Mt = { class: "right" }, Vt = /* @__PURE__ */ Q(() => /* @__PURE__ */ a("i", { class: "iconfont icon-right" }, null, -1)), Ct = [
  Vt
], It = {
  name: "MyPagination"
}, St = /* @__PURE__ */ Object.assign(It, {
  props: {
    background: {
      type: null
    },
    total: {
      type: [Number, String]
    },
    modelValue: {
      type: Number
    },
    pagesizes: {
      type: [Number, String],
      default: 10
    },
    pagercount: {
      type: [Number, String],
      default: 7
    }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: n }) {
    const e = o;
    var s = b({
      get() {
        return e.modelValue;
      },
      set(f) {
        n("update:modelValue", f);
      }
    }), l = b(() => Math.ceil(Number(e.total) / e.pagesizes)), i = b(() => {
      var f = [];
      if (!r.value) {
        for (let u = 1; u <= e.pagercount - 1; u++)
          f.push(u);
        return f;
      }
      if (!I.value) {
        for (let u = l.value - e.pagercount + 2; u <= l.value; u++)
          f.push(u);
        return f;
      }
      for (let u = s.value - (e.pagercount - 3) / 2; u <= s.value + (e.pagercount - 3) / 2; u++)
        f.push(u);
      return f;
    });
    function _() {
      s.value < l.value && s.value++;
    }
    function d() {
      s.value > 1 && s.value--;
    }
    var r = b(() => !(s.value < Math.ceil(e.pagercount / 2))), I = b(() => !(s.value > l.value - Math.ceil(e.pagercount / 2)));
    function h(f) {
      f <= 1 && (f = 1), f >= l.value && (f = l.value), s.value = f;
    }
    var w = C(!1), c = C(!1);
    return (f, u) => (p(), v("div", ht, [
      a("div", {
        class: m(["leftarrow", {
          "is-disable": t(s) == 1,
          "is-background": t(e).background == ""
        }]),
        onClick: d
      }, bt, 2),
      a("div", $t, [
        g(a("div", xt, [
          a("div", {
            class: m(["numitem", { "is-background": t(e).background == "" }]),
            onClick: u[0] || (u[0] = (y) => h(1))
          }, "1", 2),
          a("div", {
            class: m(["numitem", { "is-background": t(e).background == "" }]),
            onMouseenter: u[2] || (u[2] = (y) => x(w) ? w.value = !0 : w = !0),
            onMouseleave: u[3] || (u[3] = (y) => x(w) ? w.value = !1 : w = !1)
          }, [
            g(a("div", null, "...", 512), [
              [M, !t(w)]
            ]),
            g(a("div", {
              onClick: u[1] || (u[1] = (y) => h(t(s) - t(e).pagercount - 2))
            }, "<<", 512), [
              [M, t(w)]
            ])
          ], 34)
        ], 512), [
          [M, t(r)]
        ]),
        a("div", kt, [
          (p(!0), v(T, null, F(t(i), (y, B) => (p(), v("div", {
            class: m(["numitem", { "item-active": y == t(s) && t(e).background != "", "is-background-active": y == t(s) && t(e).background == "", "is-background": t(e).background == "" }]),
            onClick: (as) => h(y),
            key: B
          }, $(y), 11, wt))), 128))
        ]),
        g(a("div", Mt, [
          a("div", {
            class: m(["numitem", { "is-background": t(e).background == "" }]),
            onMouseenter: u[5] || (u[5] = (y) => x(c) ? c.value = !0 : c = !0),
            onMouseleave: u[6] || (u[6] = (y) => x(c) ? c.value = !1 : c = !1)
          }, [
            g(a("div", null, "...", 512), [
              [M, !t(c)]
            ]),
            g(a("div", {
              onClick: u[4] || (u[4] = (y) => h(t(s) + Number(t(e).pagercount) - 2))
            }, ">>", 512), [
              [M, t(c)]
            ])
          ], 34),
          a("div", {
            class: m(["numitem", { "is-background": t(e).background == "" }]),
            onClick: u[7] || (u[7] = (y) => h(t(l)))
          }, $(t(l)), 3)
        ], 512), [
          [M, t(I)]
        ])
      ]),
      a("div", {
        class: m(["rightarrow", {
          "is-disable": t(s) == t(l),
          "is-background": t(e).background == ""
        }]),
        onClick: _
      }, Ct, 2)
    ]));
  }
}), Ot = /* @__PURE__ */ k(St, [["__scopeId", "data-v-65f68caa"]]);
const jt = { class: "myratioinput" }, Nt = ["name", "value", "disabled"], Pt = { class: "myratiolabel" }, zt = { key: 0 }, Bt = {
  name: "MyRadio"
}, Lt = /* @__PURE__ */ Object.assign(Bt, {
  props: ["label", "disabled", "border", "size", "name", "modelValue"],
  emits: ["update:modelValue"],
  setup(o, { emit: n }) {
    const e = o;
    var { change: s, groupnum: l } = P("RadioGroup", {
      change: "",
      groupnum: ""
    }), i = b({
      get() {
        return l != "" ? l.value : e.modelValue;
      },
      set(_) {
        e.disabled || (l ? s(_) : n("update:modelValue", _));
      }
    });
    return (_, d) => (p(), v("label", {
      class: m(["myratio", [
        `myratio-${t(e).size}`,
        {
          "is-disabled": t(e).disabled == "",
          "is-border": t(e).border == ""
        }
      ]])
    }, [
      a("span", jt, [
        g(a("input", {
          type: "radio",
          name: t(e).name,
          value: t(e).label,
          disabled: t(e).disabled,
          "onUpdate:modelValue": d[0] || (d[0] = (r) => x(i) ? i.value = r : i = r)
        }, null, 8, Nt), [
          [te, t(i)]
        ])
      ]),
      a("span", Pt, [
        V(_.$slots, "default", {}, void 0, !0),
        _.$slots.default ? O("", !0) : (p(), v("span", zt, $(t(e).label), 1))
      ])
    ], 2));
  }
}), Rt = /* @__PURE__ */ k(Lt, [["__scopeId", "data-v-27b8c1d3"]]);
const Ut = {
  name: "MySelect"
}, Et = /* @__PURE__ */ Object.assign(Ut, {
  props: {
    modelValue: [String, Number, Boolean],
    width: {
      type: Number,
      default: 180
    },
    height: {
      type: Number,
      default: 180
    }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: n }) {
    const e = o;
    z("choose", I);
    var s = b({
      get() {
        return e.modelValue;
      },
      set(h) {
        n("update:modelValue", h);
      }
    }), l = b(() => s.value == "" ? "Select" : s.value), i = C(!1), _ = C(null), d = C(null);
    function r() {
      document.addEventListener("click", function(h) {
        _.value && (_.value.contains(h.target) || d.value.contains(h.target) ? console.log(1111) : (console.log(2222), i.value = !1));
      });
    }
    function I(h) {
      n("update:modelValue", h);
    }
    return R(() => {
      r();
    }), (h, w) => (p(), v("div", {
      class: "myselect",
      style: S({ width: t(e).width + "px" })
    }, [
      a("div", {
        class: m(["myselect-input", { "is-showlist": t(i) }]),
        onClick: w[0] || (w[0] = (c) => x(i) ? i.value = !t(i) : i = !t(i)),
        ref_key: "selectpart",
        ref: _,
        style: S({ width: t(e).width + "px", height: t(e).height + "px" })
      }, [
        a("div", {
          class: m(["selectinfo", { "no-select": t(l) == "Select" }])
        }, $(t(l)), 3)
      ], 6),
      a("div", {
        class: "selectoptions",
        ref_key: "dropoutpart",
        ref: d
      }, [
        a("div", {
          class: "option_list",
          style: S({ height: t(i) ? "auto" : "0px" })
        }, [
          V(h.$slots, "default", {}, void 0, !0)
        ], 4)
      ], 512)
    ], 4));
  }
}), Gt = /* @__PURE__ */ k(Et, [["__scopeId", "data-v-a2297829"]]);
const Dt = { class: "activetext" }, Tt = { class: "inactivetext" }, Ft = {
  name: "MySwitch"
}, qt = /* @__PURE__ */ Object.assign(Ft, {
  props: ["modelValue", "disabled", "activecolor", "inactivecolor", "activetext", "inactivetext"],
  emits: ["update:modelValue"],
  setup(o, { emit: n }) {
    const e = o;
    function s() {
      e.disabled != "" && n("update:modelValue", !e.modelValue);
    }
    return (l, i) => (p(), v("div", {
      class: m(["myswitch", {
        "is-disabled": t(e).disabled == ""
      }]),
      onClick: i[0] || (i[0] = (_) => s())
    }, [
      a("div", Dt, $(t(e).activetext), 1),
      a("div", {
        class: m(["switchinput", [t(e).modelValue ? "activecolor" : "inactivecolor"]]),
        style: S({ "background-color": t(e).modelValue ? t(e).activecolor : t(e).inactivecolor })
      }, [
        a("div", {
          class: m(["switchkey", [t(e).modelValue ? "keyleft" : "keyright"]]),
          style: S({ "border-color": t(e).modelValue ? t(e).activecolor : t(e).inactivecolor })
        }, null, 6)
      ], 6),
      a("div", Tt, $(t(e).inactivetext), 1)
    ], 2));
  }
}), At = /* @__PURE__ */ k(qt, [["__scopeId", "data-v-02aa4ff1"]]), Ht = { class: "myradio-grounp" }, Jt = {
  name: "MyRadioGroup"
}, Kt = /* @__PURE__ */ Object.assign(Jt, {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(o, { emit: n }) {
    const e = o;
    function s(i) {
      n("update:modelValue", i);
    }
    var l = b(() => e.modelValue);
    return z("RadioGroup", {
      change: s,
      groupnum: l
    }), (i, _) => (p(), v("div", Ht, [
      V(i.$slots, "default")
    ]));
  }
});
const Qt = { class: "type" }, Wt = { class: "message" }, Xt = {
  name: "MyMessage"
}, Yt = /* @__PURE__ */ Object.assign(Xt, {
  props: ["type", "message"],
  setup(o) {
    const n = o;
    return (e, s) => (p(), v("div", {
      class: m(["mymessage", {
        "is-success": t(n).type == "success",
        "is-warning": t(n).type == "warning",
        "is-message": t(n).type == "message",
        "is-error": t(n).type == "error"
      }])
    }, [
      a("span", Qt, $(t(n).type) + ":", 1),
      a("span", Wt, $(t(n).message), 1)
    ], 2));
  }
}), Zt = /* @__PURE__ */ k(Yt, [["__scopeId", "data-v-e40fe3e5"]]), L = document.createElement("div");
document.body.appendChild(L);
let E = null;
function es({ type: o, message: n }) {
  const e = se(Zt, { type: o, message: n });
  U(e, L), clearTimeout(E), E = setTimeout(() => {
    U(null, L);
  }, 3e3);
}
const ts = [
  ce,
  _e,
  we,
  Oe,
  Te,
  Ae,
  tt,
  pt,
  H,
  gt,
  Ot,
  Rt,
  Gt,
  At,
  Kt
], ss = function(o) {
  o.config.globalProperties.$MyMessage = es, ts.forEach((n) => {
    o.component(n.name, n);
  });
}, ns = {
  install: ss
};
export {
  ce as CheckBox,
  _e as CheckBoxGroup,
  we as InputNum,
  Oe as MyButton,
  Te as MyCarousel,
  Ae as MyCarouselItem,
  tt as MyDialog,
  H as MyIcon,
  pt as MyInput,
  gt as MyOption,
  Ot as MyPagination,
  Rt as MyRadio,
  Kt as MyRadioGroup,
  Gt as MySelect,
  At as MySwitch,
  ns as default
};
