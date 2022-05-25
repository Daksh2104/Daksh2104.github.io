(() => {
  "use strict";
  var e = {
      771: (e, n, t) => {
        t.d(n, { Z: () => c });
        var r = t(537),
          i = t.n(r),
          a = t(645),
          o = t.n(a)()(i());
        o.push([
          e.id,
          '* {\n  box-sizing: border-box;\n}\n/* Reset font related attributes */\nhtml {\n  font-family: proxima-nova, system-ui, -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n}\n\nhtml,\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n}\n\nimg {\n  border-radius: 5px;\n  object-fit: cover;\n}\n\n.container {\n  display: flex;\n  /* Add 2em to take into account padding too */\n  width: calc(900px + 2em);\n  height: 100vh;\n  padding: 2em 0;\n  margin: 0 auto;\n}\n\n.sidebar {\n  width: 300px;\n}\n\n.sidebar > * + * {\n  margin-top: 2px;\n}\n\n.main-section {\n  display: flex;\n  margin-left: 18px;\n  flex-direction: column;\n  width: 600px;\n  align-items: center;\n}\n\n.sidebar-item {\n  display: flex;\n  align-items: center;\n  padding: 0.3em;\n  border-radius: 5px;\n}\n\n.sidebar-item img {\n  height: 3em;\n  width: 3em;\n}\n\n/* title contains left and right part */\n.sidebar-item-title {\n  display: flex;\n  width: calc(100% - 4em);\n  justify-items: flex-start;\n  margin-left: 0.5em;\n}\n\n/* Left part of image container title which is used to show ellipsis */\n.title-left-part {\n  /* Set flex-grow to 0 and flex-shrink as 1 to make sure this part doesn\'t grow and can only shrink */\n  flex: 0 1 auto;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: pre;\n}\n\n.title-right-part {\n  /* Set flex-grow as 1 to make sure it can grow to allow entire string to display */\n  flex: 1 0 auto;\n  overflow: hidden;\n  white-space: pre-line;\n}\n\n.sidebar-focussed-item {\n  background-color: #005cc5;\n  color: white;\n}\n\n.preview-image {\n  height: calc(100% - 3em);\n  width: 100%;\n}\n\n.preview-image-title {\n  width: 100%;\n  text-align: center;\n  color: gray;\n  margin-top: 0.3em;\n}\n\n@media (min-width: 945px) and (max-height: 450px) {\n  .container {\n    padding: 0;\n  }\n  .sidebar-item img {\n    height: 2em;\n    width: 2em;\n  }\n  .sidebar-item p {\n    margin: 0.5em 0;\n  }\n}\n@media (max-width: 945px) {\n  .container {\n    display: block;\n    width: 100%;\n    height: 100vh;\n    padding: 0.5em 0;\n  }\n  .sidebar {\n    display: flex;\n    justify-content: space-around;\n    width: 100vw;\n  }\n  .sidebar-item {\n    width: fit-content;\n  }\n  .main-section {\n    display: flex;\n    width: 100%;\n    height: calc(100% - 4.5em);\n    flex-grow: 1;\n    margin-top: 1em;\n    margin-left: 0;\n  }\n  .preview-image {\n    width: 100%;\n    height: calc(100% - 2em);\n    object-fit: cover;\n  }\n  .sidebar-item-title {\n    display: none;\n  }\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles/index.css"],
            names: [],
            mappings:
              "AAAA;EACE,sBAAsB;AACxB;AACA,kCAAkC;AAClC;EACE;oDACkD;EAClD,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,6CAA6C;EAC7C,wBAAwB;EACxB,aAAa;EACb,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA,uCAAuC;AACvC;EACE,aAAa;EACb,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA,sEAAsE;AACtE;EACE,oGAAoG;EACpG,cAAc;EACd,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kFAAkF;EAClF,cAAc;EACd,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,WAAW;IACX,UAAU;EACZ;EACA;IACE,eAAe;EACjB;AACF;AACA;EACE;IACE,cAAc;IACd,WAAW;IACX,aAAa;IACb,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,6BAA6B;IAC7B,YAAY;EACd;EACA;IACE,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,WAAW;IACX,0BAA0B;IAC1B,YAAY;IACZ,eAAe;IACf,cAAc;EAChB;EACA;IACE,WAAW;IACX,wBAAwB;IACxB,iBAAiB;EACnB;EACA;IACE,aAAa;EACf;AACF",
            sourcesContent: [
              '* {\n  box-sizing: border-box;\n}\n/* Reset font related attributes */\nhtml {\n  font-family: proxima-nova, system-ui, -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n}\n\nhtml,\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n}\n\nimg {\n  border-radius: 5px;\n  object-fit: cover;\n}\n\n.container {\n  display: flex;\n  /* Add 2em to take into account padding too */\n  width: calc(900px + 2em);\n  height: 100vh;\n  padding: 2em 0;\n  margin: 0 auto;\n}\n\n.sidebar {\n  width: 300px;\n}\n\n.sidebar > * + * {\n  margin-top: 2px;\n}\n\n.main-section {\n  display: flex;\n  margin-left: 18px;\n  flex-direction: column;\n  width: 600px;\n  align-items: center;\n}\n\n.sidebar-item {\n  display: flex;\n  align-items: center;\n  padding: 0.3em;\n  border-radius: 5px;\n}\n\n.sidebar-item img {\n  height: 3em;\n  width: 3em;\n}\n\n/* title contains left and right part */\n.sidebar-item-title {\n  display: flex;\n  width: calc(100% - 4em);\n  justify-items: flex-start;\n  margin-left: 0.5em;\n}\n\n/* Left part of image container title which is used to show ellipsis */\n.title-left-part {\n  /* Set flex-grow to 0 and flex-shrink as 1 to make sure this part doesn\'t grow and can only shrink */\n  flex: 0 1 auto;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: pre;\n}\n\n.title-right-part {\n  /* Set flex-grow as 1 to make sure it can grow to allow entire string to display */\n  flex: 1 0 auto;\n  overflow: hidden;\n  white-space: pre-line;\n}\n\n.sidebar-focussed-item {\n  background-color: #005cc5;\n  color: white;\n}\n\n.preview-image {\n  height: calc(100% - 3em);\n  width: 100%;\n}\n\n.preview-image-title {\n  width: 100%;\n  text-align: center;\n  color: gray;\n  margin-top: 0.3em;\n}\n\n@media (min-width: 945px) and (max-height: 450px) {\n  .container {\n    padding: 0;\n  }\n  .sidebar-item img {\n    height: 2em;\n    width: 2em;\n  }\n  .sidebar-item p {\n    margin: 0.5em 0;\n  }\n}\n@media (max-width: 945px) {\n  .container {\n    display: block;\n    width: 100%;\n    height: 100vh;\n    padding: 0.5em 0;\n  }\n  .sidebar {\n    display: flex;\n    justify-content: space-around;\n    width: 100vw;\n  }\n  .sidebar-item {\n    width: fit-content;\n  }\n  .main-section {\n    display: flex;\n    width: 100%;\n    height: calc(100% - 4.5em);\n    flex-grow: 1;\n    margin-top: 1em;\n    margin-left: 0;\n  }\n  .preview-image {\n    width: 100%;\n    height: calc(100% - 2em);\n    object-fit: cover;\n  }\n  .sidebar-item-title {\n    display: none;\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const c = o;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, i, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var o = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (o[s] = !0);
                }
              for (var A = 0; A < e.length; A++) {
                var l = [].concat(e[A]);
                (r && o[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  i &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = i))
                      : (l[4] = "".concat(i))),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var n = e[1],
            t = e[3];
          if (!t) return n;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              i =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              a = "/*# ".concat(i, " */"),
              o = t.sources.map(function (e) {
                return "/*# sourceURL="
                  .concat(t.sourceRoot || "")
                  .concat(e, " */");
              });
            return [n].concat(o).concat([a]).join("\n");
          }
          return [n].join("\n");
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, o = [], c = 0; c < e.length; c++) {
            var s = e[c],
              A = r.base ? s[0] + r.base : s[0],
              l = a[A] || 0,
              d = "".concat(A, " ").concat(l);
            a[A] = l + 1;
            var u = t(d),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) n[u].references++, n[u].updater(p);
            else {
              var f = i(p, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: d, updater: f, references: 1 });
            }
            o.push(d);
          }
          return o;
        }
        function i(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, i) {
          var a = r((e = e || []), (i = i || {}));
          return function (e) {
            e = e || [];
            for (var o = 0; o < a.length; o++) {
              var c = t(a[o]);
              n[c].references--;
            }
            for (var s = r(e, i), A = 0; A < a.length; A++) {
              var l = t(a[A]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            a = s;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var i = void 0 !== t.layer;
                i &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  i && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var i = n[r];
    if (void 0 !== i) return i.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0),
    (() => {
      var e = t(379),
        n = t.n(e),
        r = t(795),
        i = t.n(r),
        a = t(569),
        o = t.n(a),
        c = t(565),
        s = t.n(c),
        A = t(216),
        l = t.n(A),
        d = t(589),
        u = t.n(d),
        p = t(771),
        f = {};
      (f.styleTagTransform = u()),
        (f.setAttributes = s()),
        (f.insert = o().bind(null, "head")),
        (f.domAPI = i()),
        (f.insertStyleElement = l()),
        n()(p.Z, f),
        p.Z && p.Z.locals && p.Z.locals;
      var m,
        h,
        g = [
          {
            previewImage:
              "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            title: "cat.jpeg",
          },
          {
            previewImage:
              "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            title:
              "a man and a woman trying to cook a meal together in a modern kitchen.jpg",
          },
          {
            previewImage:
              "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            title: "bali-kelingking-beach-plastic-removal-drive.key",
          },
          {
            previewImage:
              "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            title: "NextByk Investor Pitch 2022.ppt",
          },
          {
            previewImage:
              "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            title: "interns-performance-report-may-2022.key",
          },
        ],
        b = function () {
          return [].concat(g);
        },
        y = function (e) {
          return g[e];
        },
        v =
          ((m = !1),
          (h = -1),
          {
            getDetails: function () {
              return { isPresent: m, index: h };
            },
            updateDetails: function (e) {
              (m = !0), (h = e);
            },
          }),
        w = function (e) {
          var n = Math.max(e.length - 12, 0);
          return [e.slice(0, n), e.slice(n)];
        },
        x = function (e) {
          var n = document.querySelector(".preview-image");
          n.setAttribute("src", e.previewImage),
            n.setAttribute("alt", e.title),
            (document.querySelector(".preview-image-title").innerHTML =
              e.title);
        };
      function C(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function E(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function B(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? E(Object(t), !0).forEach(function (n) {
                j(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function j(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var k = function (e) {
          var n = document.createElement("div");
          n.classList.add("sidebar-item"),
            n.setAttribute("id", "index-" + e.index),
            n.addEventListener("click", function () {
              I(e.index),
                v.updateDetails(e.index),
                x(B(B({}, y(e.index)), {}, { index: e.index }));
            });
          var t,
            r,
            i =
              ((t = w(e.title)),
              (r = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(t) ||
                (function (e, n) {
                  var t =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != t) {
                    var r,
                      i,
                      a = [],
                      o = !0,
                      c = !1;
                    try {
                      for (
                        t = t.call(e);
                        !(o = (r = t.next()).done) &&
                        (a.push(r.value), !n || a.length !== n);
                        o = !0
                      );
                    } catch (e) {
                      (c = !0), (i = e);
                    } finally {
                      try {
                        o || null == t.return || t.return();
                      } finally {
                        if (c) throw i;
                      }
                    }
                    return a;
                  }
                })(t, r) ||
                (function (e, n) {
                  if (e) {
                    if ("string" == typeof e) return C(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === t &&
                        e.constructor &&
                        (t = e.constructor.name),
                      "Map" === t || "Set" === t
                        ? Array.from(e)
                        : "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? C(e, n)
                        : void 0
                    );
                  }
                })(t, r) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            a = i[0],
            o = i[1];
          return (
            (n.innerHTML = '\n      <img src="'
              .concat(
                e.previewImage,
                '"/>\n      <div class="sidebar-item-title">\n          <p class = "title-left-part">'
              )
              .concat(a, '</p>\n          <p class = "title-right-part">')
              .concat(o, "</p>\n      </div>\n      ")),
            n
          );
        },
        I = function (e) {
          var n = v.getDetails();
          n.isPresent && O(n.index), O(e);
        },
        O = function (e) {
          document
            .querySelector("#index-".concat(e))
            .classList.toggle("sidebar-focussed-item");
        };
      function S(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function M(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function D(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? M(Object(t), !0).forEach(function (n) {
                H(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function H(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var P = function (e) {
        var n = e.index;
        I(n), v.updateDetails(n), x(e);
      };
      !(function (e) {
        var n = document.querySelector(".sidebar");
        e.forEach(function (e, t) {
          var r = k(B(B({}, e), {}, { index: t }));
          n.appendChild(r);
        });
      })(b()),
        P(D(D({}, y(0)), {}, { index: 0 })),
        document
          .querySelector(".preview-image-title")
          .addEventListener("keyup", function (e) {
            var n,
              t,
              r,
              i,
              a,
              o,
              c =
                ((r = w(e.target.innerHTML)),
                (i = 2),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(r) ||
                  (function (e, n) {
                    var t =
                      null == e
                        ? null
                        : ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                    if (null != t) {
                      var r,
                        i,
                        a = [],
                        o = !0,
                        c = !1;
                      try {
                        for (
                          t = t.call(e);
                          !(o = (r = t.next()).done) &&
                          (a.push(r.value), !n || a.length !== n);
                          o = !0
                        );
                      } catch (e) {
                        (c = !0), (i = e);
                      } finally {
                        try {
                          o || null == t.return || t.return();
                        } finally {
                          if (c) throw i;
                        }
                      }
                      return a;
                    }
                  })(r, i) ||
                  (function (e, n) {
                    if (e) {
                      if ("string" == typeof e) return S(e, n);
                      var t = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === t &&
                          e.constructor &&
                          (t = e.constructor.name),
                        "Map" === t || "Set" === t
                          ? Array.from(e)
                          : "Arguments" === t ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                          ? S(e, n)
                          : void 0
                      );
                    }
                  })(r, i) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })());
            (a = c[0]),
              (o = c[1]),
              (document
                .querySelector(".sidebar-focussed-item")
                .querySelector(".title-left-part").innerHTML = a),
              (document
                .querySelector(".sidebar-focussed-item")
                .querySelector(".title-right-part").innerHTML = o),
              (n = v.getDetails().index),
              (t = D(
                D({}, y(v.getDetails().index)),
                {},
                { title: e.target.innerHTML }
              )),
              (g[n] = t);
          }),
        document.addEventListener("keyup", function (e) {
          if ("ArrowUp" === (r = e.code) || "ArrowDown" === r) {
            var n = b().length,
              t =
                (v.getDetails().index + n + ("ArrowUp" === e.code ? -1 : 1)) %
                n;
            P(D(D({}, y(t)), {}, { index: t }));
          }
          var r;
        });
    })();
})();
//# sourceMappingURL=index9800dafb50b7b14e8f2f.js.map
