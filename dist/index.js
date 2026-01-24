import { jsxs as c, jsx as e, Fragment as dt } from "react/jsx-runtime";
import { forwardRef as J, createElement as P, useState as C, createContext as Y, useContext as Z, useRef as ht, useCallback as E, useMemo as U, useEffect as O } from "react";
function q({
  request: t,
  className: a = "",
  showMessage: s = !0
}) {
  const { message: n, procedure_name: h, subject: i, elapsed_seconds: r } = t, o = (l) => l == null ? "" : l < 60 ? `${l}s ago` : l < 3600 ? `${Math.floor(l / 60)}m ago` : `${Math.floor(l / 3600)}h ago`;
  return /* @__PURE__ */ c("div", { className: `tactus-hitl-header ${a}`.trim(), children: [
    /* @__PURE__ */ c("div", { className: "tactus-hitl-header-top", children: [
      h && /* @__PURE__ */ e("span", { className: "tactus-hitl-procedure-name", children: h }),
      i && /* @__PURE__ */ e("span", { className: "tactus-hitl-subject", children: i }),
      r !== void 0 && /* @__PURE__ */ e("span", { className: "tactus-hitl-elapsed", children: o(r) })
    ] }),
    s && /* @__PURE__ */ e("div", { className: "tactus-hitl-message", children: n })
  ] });
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), pt = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, s, n) => n ? n.toUpperCase() : s.toLowerCase()
), V = (t) => {
  const a = pt(t);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, G = (...t) => t.filter((a, s, n) => !!a && a.trim() !== "" && n.indexOf(a) === s).join(" ").trim(), ft = (t) => {
  for (const a in t)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = J(
  ({
    color: t = "currentColor",
    size: a = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: n,
    className: h = "",
    children: i,
    iconNode: r,
    ...o
  }, l) => P(
    "svg",
    {
      ref: l,
      ...bt,
      width: a,
      height: a,
      stroke: t,
      strokeWidth: n ? Number(s) * 24 / Number(a) : s,
      className: G("lucide", h),
      ...!i && !ft(o) && { "aria-hidden": "true" },
      ...o
    },
    [
      ...r.map(([m, u]) => P(m, u)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j = (t, a) => {
  const s = J(
    ({ className: n, ...h }, i) => P(vt, {
      ref: i,
      iconNode: a,
      className: G(
        `lucide-${mt(V(t))}`,
        `lucide-${t}`,
        n
      ),
      ...h
    })
  );
  return s.displayName = V(t), s;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Nt = j("chevron-down", yt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], kt = j("chevron-right", gt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Ct = j("circle-x", xt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], wt = j("info", St);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _t = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], $t = j("monitor", _t);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], At = j("moon", It);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = [
  ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  [
    "path",
    {
      d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
      key: "1fd625"
    }
  ]
], jt = j("octagon-alert", Rt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], Tt = j("sun", zt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], W = j("triangle-alert", qt);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Dt = j("upload", Lt);
function T({
  request: t,
  className: a = "",
  defaultExpanded: s = !1
}) {
  const [n, h] = C(s), { input_summary: i, conversation: r, prior_interactions: o } = t;
  return i && Object.keys(i).length > 0 || r && r.length > 0 || o && o.length > 0 ? /* @__PURE__ */ c("div", { className: `tactus-hitl-context ${a}`.trim(), children: [
    /* @__PURE__ */ c(
      "button",
      {
        type: "button",
        className: "tactus-hitl-context-toggle",
        onClick: () => h(!n),
        "aria-expanded": n,
        children: [
          n ? /* @__PURE__ */ e(Nt, { className: "tactus-hitl-context-toggle-icon", size: 16 }) : /* @__PURE__ */ e(kt, { className: "tactus-hitl-context-toggle-icon", size: 16 }),
          /* @__PURE__ */ e("span", { children: "Context" })
        ]
      }
    ),
    n && /* @__PURE__ */ c("div", { className: "tactus-hitl-context-content", children: [
      i && Object.keys(i).length > 0 && /* @__PURE__ */ e(Et, { summary: i }),
      o && o.length > 0 && /* @__PURE__ */ e(Ot, { interactions: o }),
      r && r.length > 0 && /* @__PURE__ */ e(Ft, { messages: r })
    ] })
  ] }) : null;
}
function Et({ summary: t }) {
  return /* @__PURE__ */ c("div", { className: "tactus-hitl-context-section", children: [
    /* @__PURE__ */ e("h4", { className: "tactus-hitl-context-section-title", children: "Input" }),
    /* @__PURE__ */ e("dl", { className: "tactus-hitl-input-summary", children: Object.entries(t).map(([a, s]) => /* @__PURE__ */ c("div", { className: "tactus-hitl-input-summary-item", children: [
      /* @__PURE__ */ e("dt", { children: a }),
      /* @__PURE__ */ e("dd", { children: Q(s) })
    ] }, a)) })
  ] });
}
function Ot({ interactions: t }) {
  return /* @__PURE__ */ c("div", { className: "tactus-hitl-context-section", children: [
    /* @__PURE__ */ e("h4", { className: "tactus-hitl-context-section-title", children: "Prior Decisions" }),
    /* @__PURE__ */ e("ul", { className: "tactus-hitl-prior-interactions", children: t.map((a, s) => /* @__PURE__ */ c("li", { className: "tactus-hitl-prior-interaction", children: [
      /* @__PURE__ */ e("span", { className: "tactus-hitl-prior-interaction-type", children: a.request_type }),
      /* @__PURE__ */ e("span", { className: "tactus-hitl-prior-interaction-message", children: a.message }),
      /* @__PURE__ */ c("span", { className: "tactus-hitl-prior-interaction-response", children: [
        "→ ",
        Q(a.response_value)
      ] })
    ] }, s)) })
  ] });
}
function Ft({ messages: t }) {
  return /* @__PURE__ */ c("div", { className: "tactus-hitl-context-section", children: [
    /* @__PURE__ */ e("h4", { className: "tactus-hitl-context-section-title", children: "Conversation" }),
    /* @__PURE__ */ e("div", { className: "tactus-hitl-conversation", children: t.map((a, s) => /* @__PURE__ */ c(
      "div",
      {
        className: `tactus-hitl-conversation-message tactus-hitl-conversation-message-${a.role}`,
        children: [
          /* @__PURE__ */ e("span", { className: "tactus-hitl-conversation-role", children: a.role }),
          /* @__PURE__ */ e("span", { className: "tactus-hitl-conversation-content", children: a.content }),
          a.tool_name && /* @__PURE__ */ c("span", { className: "tactus-hitl-conversation-tool", children: [
            "Tool: ",
            a.tool_name
          ] })
        ]
      },
      s
    )) })
  ] });
}
function Q(t) {
  return t == null ? "—" : typeof t == "boolean" ? t ? "Yes" : "No" : typeof t == "object" ? JSON.stringify(t, null, 2) : String(t);
}
const X = Y(null), L = () => {
  const t = Z(X);
  if (!t)
    throw new Error("Confirmation components must be used within Confirmation");
  return t;
}, Pt = ({
  className: t,
  approval: a,
  state: s,
  ...n
}) => !a || s === "input-streaming" || s === "input-available" ? null : /* @__PURE__ */ e(X.Provider, { value: { approval: a, state: s }, children: /* @__PURE__ */ e("div", { className: `tactus-ai-confirmation ${t ?? ""}`.trim(), ...n }) }), ce = ({
  className: t,
  ...a
}) => /* @__PURE__ */ e("div", { className: `tactus-ai-confirmation-title ${t ?? ""}`.trim(), ...a }), Mt = ({ children: t }) => {
  const { state: a } = L();
  return a !== "approval-requested" ? null : /* @__PURE__ */ e("div", { className: "tactus-ai-confirmation-request", children: t });
}, Bt = ({
  children: t
}) => {
  const { approval: a, state: s } = L();
  return !(a != null && a.approved) || s !== "approval-responded" && s !== "output-denied" && s !== "output-available" ? null : /* @__PURE__ */ e("div", { className: "tactus-ai-confirmation-accepted", children: t });
}, Ut = ({
  children: t
}) => {
  const { approval: a, state: s } = L();
  return (a == null ? void 0 : a.approved) !== !1 || s !== "approval-responded" && s !== "output-denied" && s !== "output-available" ? null : /* @__PURE__ */ e("div", { className: "tactus-ai-confirmation-rejected", children: t });
}, Vt = ({
  className: t,
  ...a
}) => {
  const { state: s } = L();
  return s !== "approval-requested" ? null : /* @__PURE__ */ e(
    "div",
    {
      className: `tactus-ai-confirmation-actions ${t ?? ""}`.trim(),
      ...a
    }
  );
}, Wt = (t) => {
  switch (t) {
    case "destructive":
      return "tactus-hitl-button tactus-hitl-button-danger";
    case "outline":
      return "tactus-hitl-button tactus-hitl-button-secondary";
    default:
      return "tactus-hitl-button tactus-hitl-button-primary";
  }
}, H = ({
  className: t,
  variant: a = "default",
  ...s
}) => /* @__PURE__ */ e(
  "button",
  {
    type: "button",
    className: `${Wt(a)} ${t ?? ""}`.trim(),
    ...s
  }
);
function K({
  request: t,
  onRespond: a,
  onCancel: s,
  className: n = "",
  showHeader: h = !0,
  showContext: i = !0
}) {
  const { request_id: r, options: o } = t, [l, m] = C(!1), [u, p] = C(void 0), f = [
    { label: "Approve", value: !0, style: "primary" },
    { label: "Reject", value: !1, style: "danger" }
  ], y = o && o.length > 0 ? o : f, k = (g) => {
    m(!0), p(g), a({ request_id: r, value: g });
  };
  return /* @__PURE__ */ c("div", { className: `tactus-hitl-approval ${n}`.trim(), children: [
    h && /* @__PURE__ */ e(q, { request: t, showMessage: !1 }),
    i && /* @__PURE__ */ e(T, { request: t }),
    /* @__PURE__ */ c(
      Pt,
      {
        approval: l ? {
          id: r,
          approved: !!u,
          reason: u ? "Approved by user" : "Rejected by user"
        } : {
          id: r
        },
        state: l ? "approval-responded" : "approval-requested",
        children: [
          /* @__PURE__ */ e(Mt, { children: t.message }),
          /* @__PURE__ */ e(Bt, { children: "You approved this action" }),
          /* @__PURE__ */ e(Ut, { children: "You rejected this action" }),
          /* @__PURE__ */ c(Vt, { children: [
            y.map((g) => /* @__PURE__ */ e(
              H,
              {
                variant: g.style === "danger" ? "destructive" : g.style === "secondary" ? "outline" : "default",
                onClick: () => k(g.value),
                children: g.label
              },
              g.label
            )),
            !y.length && s && /* @__PURE__ */ e(H, { variant: "outline", onClick: s, children: "Cancel" })
          ] })
        ]
      }
    )
  ] });
}
function tt({
  request: t,
  onRespond: a,
  onCancel: s,
  className: n = "",
  showHeader: h = !0,
  showContext: i = !0
}) {
  const { request_id: r, default_value: o, metadata: l } = t, m = l, [u, p] = C(
    typeof o == "string" ? o : ""
  ), [f, y] = C(!1), k = (m == null ? void 0 : m.placeholder) ?? "", g = (m == null ? void 0 : m.multiline) ?? !1, $ = (S) => {
    S.preventDefault(), y(!0), a({ request_id: r, value: u });
  };
  return /* @__PURE__ */ c("div", { className: `tactus-hitl-input tactus-ai-card ${n}`.trim(), children: [
    h && /* @__PURE__ */ e(q, { request: t }),
    i && /* @__PURE__ */ e(T, { request: t }),
    /* @__PURE__ */ c("form", { onSubmit: $, className: "tactus-hitl-input-form tactus-ai-field", children: [
      g ? /* @__PURE__ */ e(
        "textarea",
        {
          className: "tactus-hitl-textarea tactus-ai-input",
          value: u,
          onChange: (S) => p(S.target.value),
          placeholder: k,
          disabled: f,
          rows: 4
        }
      ) : /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          className: "tactus-hitl-textfield tactus-ai-input",
          value: u,
          onChange: (S) => p(S.target.value),
          placeholder: k,
          disabled: f
        }
      ),
      /* @__PURE__ */ c("div", { className: "tactus-hitl-actions", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "submit",
            className: "tactus-hitl-button tactus-hitl-button-primary",
            disabled: f,
            children: f ? "Submitting..." : "Submit"
          }
        ),
        s && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "tactus-hitl-button tactus-hitl-button-secondary",
            onClick: s,
            disabled: f,
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
function et({
  request: t,
  onRespond: a,
  onCancel: s,
  className: n = "",
  showHeader: h = !0,
  showContext: i = !0
}) {
  const { request_id: r, options: o, default_value: l, metadata: m } = t, u = m, [p, f] = C(l), [y, k] = C(!1), g = (u == null ? void 0 : u.style) ?? "radio", $ = o ?? [], S = (d) => {
    d.preventDefault(), p !== void 0 && (k(!0), a({ request_id: r, value: p }));
  }, v = (d) => {
    k(!0), a({ request_id: r, value: d });
  };
  return /* @__PURE__ */ c("div", { className: `tactus-hitl-select tactus-hitl-select-single tactus-ai-card ${n}`.trim(), children: [
    h && /* @__PURE__ */ e(q, { request: t }),
    i && /* @__PURE__ */ e(T, { request: t }),
    /* @__PURE__ */ c("form", { onSubmit: S, className: "tactus-hitl-select-form tactus-ai-field", children: [
      g === "dropdown" ? /* @__PURE__ */ e(
        Jt,
        {
          options: $,
          selected: p,
          onChange: v,
          disabled: y
        }
      ) : /* @__PURE__ */ e(
        Ht,
        {
          options: $,
          selected: p,
          onChange: f,
          disabled: y
        }
      ),
      g !== "dropdown" && /* @__PURE__ */ c("div", { className: "tactus-hitl-actions", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "submit",
            className: "tactus-hitl-button tactus-hitl-button-primary",
            disabled: y || p === void 0,
            children: y ? "Submitting..." : "Confirm"
          }
        ),
        s && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "tactus-hitl-button tactus-hitl-button-secondary",
            onClick: s,
            disabled: y,
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
function Ht({ options: t, selected: a, onChange: s, disabled: n }) {
  return /* @__PURE__ */ e("div", { className: "tactus-hitl-radio-group", role: "radiogroup", children: t.map((h, i) => /* @__PURE__ */ c("label", { className: "tactus-hitl-radio-option tactus-ai-option", children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "radio",
        className: "tactus-hitl-radio",
        name: "selection",
        checked: a === h.value,
        onChange: () => s(h.value),
        disabled: n
      }
    ),
    /* @__PURE__ */ e("span", { className: "tactus-hitl-radio-label", children: h.label }),
    h.description && /* @__PURE__ */ e("span", { className: "tactus-hitl-radio-description", children: h.description })
  ] }, i)) });
}
function Jt({ options: t, selected: a, onChange: s, disabled: n }) {
  const h = (r) => {
    const o = parseInt(r.target.value, 10);
    !isNaN(o) && t[o] && s(t[o].value);
  }, i = t.findIndex((r) => r.value === a);
  return /* @__PURE__ */ c(
    "select",
    {
      className: "tactus-hitl-dropdown tactus-ai-input",
      value: i >= 0 ? i : "",
      onChange: h,
      disabled: n,
      children: [
        /* @__PURE__ */ e("option", { value: "", disabled: !0, children: "Select an option..." }),
        t.map((r, o) => /* @__PURE__ */ e("option", { value: o, children: r.label }, o))
      ]
    }
  );
}
function at({
  request: t,
  onRespond: a,
  onCancel: s,
  className: n = "",
  showHeader: h = !0,
  showContext: i = !0
}) {
  const { request_id: r, options: o, default_value: l, metadata: m } = t, u = m, p = Array.isArray(l) ? l : [], [f, y] = C(p), [k, g] = C(!1), $ = o ?? [], S = (u == null ? void 0 : u.min) ?? 0, v = u == null ? void 0 : u.max, d = f.length >= S && (v === void 0 || f.length <= v), N = (w) => {
    y((z) => z.includes(w) ? z.filter((D) => D !== w) : v !== void 0 && z.length >= v ? z : [...z, w]);
  }, x = (w) => {
    w.preventDefault(), d && (g(!0), a({ request_id: r, value: f }));
  }, R = Zt(S, v);
  return /* @__PURE__ */ c("div", { className: `tactus-hitl-select tactus-hitl-select-multiple tactus-ai-card ${n}`.trim(), children: [
    h && /* @__PURE__ */ e(q, { request: t }),
    i && /* @__PURE__ */ e(T, { request: t }),
    /* @__PURE__ */ c("form", { onSubmit: x, className: "tactus-hitl-select-form tactus-ai-field", children: [
      R && /* @__PURE__ */ e("p", { className: "tactus-hitl-constraint", children: R }),
      /* @__PURE__ */ e("div", { className: "tactus-hitl-checkbox-group", children: $.map((w, z) => /* @__PURE__ */ e(
        Yt,
        {
          option: w,
          checked: f.includes(w.value),
          onChange: () => N(w.value),
          disabled: k || !f.includes(w.value) && v !== void 0 && f.length >= v
        },
        z
      )) }),
      /* @__PURE__ */ c("div", { className: "tactus-hitl-actions", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "submit",
            className: "tactus-hitl-button tactus-hitl-button-primary",
            disabled: k || !d,
            children: k ? "Submitting..." : `Confirm (${f.length} selected)`
          }
        ),
        s && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "tactus-hitl-button tactus-hitl-button-secondary",
            onClick: s,
            disabled: k,
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
function Yt({ option: t, checked: a, onChange: s, disabled: n }) {
  return /* @__PURE__ */ c("label", { className: "tactus-hitl-checkbox-option tactus-ai-option", children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        className: "tactus-hitl-checkbox",
        checked: a,
        onChange: s,
        disabled: n
      }
    ),
    /* @__PURE__ */ e("span", { className: "tactus-hitl-checkbox-label", children: t.label }),
    t.description && /* @__PURE__ */ e("span", { className: "tactus-hitl-checkbox-description", children: t.description })
  ] });
}
function Zt(t, a) {
  return t > 0 && a !== void 0 ? t === a ? `Select exactly ${t} option${t === 1 ? "" : "s"}` : `Select ${t}-${a} options` : t > 0 ? `Select at least ${t} option${t === 1 ? "" : "s"}` : a !== void 0 ? `Select up to ${a} option${a === 1 ? "" : "s"}` : null;
}
function st({
  request: t,
  onRespond: a,
  onCancel: s,
  className: n = "",
  showHeader: h = !0,
  showContext: i = !0
}) {
  const { request_id: r, options: o, metadata: l } = t, m = l, [u, p] = C(""), [f, y] = C(!1), k = m == null ? void 0 : m.artifact, g = (m == null ? void 0 : m.artifact_type) ?? "artifact", $ = [
    { label: "Approve", value: "approve", style: "primary" },
    { label: "Request Changes", value: "request_changes", style: "secondary" },
    { label: "Reject", value: "reject", style: "danger" }
  ], S = o && o.length > 0 ? o : $, v = (d) => {
    y(!0);
    const N = {
      decision: String(d),
      edited_artifact: k,
      feedback: u.trim() || void 0
    };
    a({ request_id: r, value: N });
  };
  return /* @__PURE__ */ c("div", { className: `tactus-hitl-review tactus-ai-card ${n}`.trim(), children: [
    h && /* @__PURE__ */ e(q, { request: t }),
    i && /* @__PURE__ */ e(T, { request: t }),
    /* @__PURE__ */ c("div", { className: "tactus-hitl-review-content", children: [
      k !== void 0 && /* @__PURE__ */ e(Gt, { artifact: k, artifactType: g }),
      /* @__PURE__ */ c("div", { className: "tactus-hitl-review-feedback tactus-ai-field", children: [
        /* @__PURE__ */ e("label", { className: "tactus-hitl-review-feedback-label", children: "Feedback (optional)" }),
        /* @__PURE__ */ e(
          "textarea",
          {
            className: "tactus-hitl-textarea tactus-ai-input",
            value: u,
            onChange: (d) => p(d.target.value),
            placeholder: "Add feedback or comments...",
            disabled: f,
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ c("div", { className: "tactus-hitl-actions", children: [
        S.map((d, N) => /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `tactus-hitl-button tactus-hitl-button-${d.style ?? "default"}`,
            onClick: () => v(d.value),
            disabled: f,
            title: d.description,
            children: d.label
          },
          N
        )),
        s && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "tactus-hitl-button tactus-hitl-button-secondary",
            onClick: s,
            disabled: f,
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
function Gt({ artifact: t, artifactType: a }) {
  return /* @__PURE__ */ c("div", { className: "tactus-hitl-artifact", children: [
    /* @__PURE__ */ e("div", { className: "tactus-hitl-artifact-header", children: /* @__PURE__ */ e("span", { className: "tactus-hitl-artifact-type", children: a }) }),
    /* @__PURE__ */ e("div", { className: "tactus-hitl-artifact-content", children: (() => {
      if (t == null)
        return /* @__PURE__ */ e("em", { children: "No artifact provided" });
      switch (a) {
        case "code":
          return /* @__PURE__ */ e("pre", { className: "tactus-hitl-artifact-code", children: /* @__PURE__ */ e("code", { children: String(t) }) });
        case "json":
          return /* @__PURE__ */ e("pre", { className: "tactus-hitl-artifact-code", children: /* @__PURE__ */ e("code", { children: typeof t == "string" ? t : JSON.stringify(t, null, 2) }) });
        case "text":
        case "document":
          return /* @__PURE__ */ e("div", { className: "tactus-hitl-artifact-text", children: String(t) });
        default:
          return typeof t == "string" ? /* @__PURE__ */ e("div", { className: "tactus-hitl-artifact-text", children: t }) : /* @__PURE__ */ e("pre", { className: "tactus-hitl-artifact-code", children: /* @__PURE__ */ e("code", { children: JSON.stringify(t, null, 2) }) });
      }
    })() })
  ] });
}
function nt({
  request: t,
  onRespond: a,
  onCancel: s,
  className: n = "",
  showHeader: h = !0,
  showContext: i = !0
}) {
  const { request_id: r, metadata: o } = t, l = o, [m, u] = C([]), [p, f] = C(!1), [y, k] = C(!1), [g, $] = C(null), S = ht(null), v = l == null ? void 0 : l.accept, d = l == null ? void 0 : l.max_size, N = (l == null ? void 0 : l.multiple) ?? !1, x = (v == null ? void 0 : v.join(",")) ?? "", R = E(
    (b) => v && v.length > 0 && !v.some((A) => {
      if (A.startsWith("."))
        return b.name.toLowerCase().endsWith(A.toLowerCase());
      if (A.endsWith("/*")) {
        const _ = A.slice(0, -2);
        return b.type.startsWith(_);
      }
      return b.type === A;
    }) ? `Invalid file type. Accepted: ${v.join(", ")}` : d && b.size > d ? `File too large. Maximum size: ${F(d)}` : null,
    [v, d]
  ), w = E(
    (b) => {
      if (!b) return;
      const I = [], A = [];
      for (const _ of Array.from(b)) {
        const B = R(_);
        B ? A.push(`${_.name}: ${B}`) : I.push(_);
      }
      if (A.length > 0) {
        $(A.join(`
`));
        return;
      }
      $(null), u(N ? (_) => [..._, ...I] : I.slice(0, 1));
    },
    [R, N]
  ), z = E(
    (b) => {
      b.preventDefault(), f(!1), w(b.dataTransfer.files);
    },
    [w]
  ), M = (b) => {
    b.preventDefault(), f(!0);
  }, D = (b) => {
    b.preventDefault(), f(!1);
  }, rt = (b) => {
    w(b.target.files);
  }, ot = (b) => {
    u((I) => I.filter((A, _) => _ !== b));
  }, ut = (b) => {
    if (b.preventDefault(), m.length === 0) return;
    k(!0);
    const I = m.map((_) => ({
      path: URL.createObjectURL(_),
      // Temporary URL for preview
      name: _.name,
      size: _.size,
      mime_type: _.type || "application/octet-stream"
    })), A = N ? I : I[0];
    a({ request_id: r, value: A });
  };
  return /* @__PURE__ */ c("div", { className: `tactus-hitl-upload tactus-ai-card ${n}`.trim(), children: [
    h && /* @__PURE__ */ e(q, { request: t }),
    i && /* @__PURE__ */ e(T, { request: t }),
    /* @__PURE__ */ c("form", { onSubmit: ut, className: "tactus-hitl-upload-form tactus-ai-field", children: [
      /* @__PURE__ */ c(
        "div",
        {
          className: `tactus-hitl-dropzone tactus-ai-dropzone ${p ? "tactus-hitl-dropzone-active" : ""}`,
          onDrop: z,
          onDragOver: M,
          onDragLeave: D,
          onClick: () => {
            var b;
            return (b = S.current) == null ? void 0 : b.click();
          },
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                ref: S,
                type: "file",
                className: "tactus-hitl-file-input",
                accept: x,
                multiple: N,
                onChange: rt,
                disabled: y
              }
            ),
            /* @__PURE__ */ c("div", { className: "tactus-hitl-dropzone-content", children: [
              /* @__PURE__ */ e(Dt, { className: "tactus-hitl-dropzone-icon", size: 48, strokeWidth: 1.5 }),
              /* @__PURE__ */ e("span", { className: "tactus-hitl-dropzone-text", children: "Drop files here or click to browse" }),
              v && /* @__PURE__ */ c("span", { className: "tactus-hitl-dropzone-hint", children: [
                "Accepted: ",
                v.join(", ")
              ] }),
              d && /* @__PURE__ */ c("span", { className: "tactus-hitl-dropzone-hint", children: [
                "Max size: ",
                F(d)
              ] })
            ] })
          ]
        }
      ),
      g && /* @__PURE__ */ e("div", { className: "tactus-hitl-upload-error", children: g }),
      m.length > 0 && /* @__PURE__ */ e("ul", { className: "tactus-hitl-file-list", children: m.map((b, I) => /* @__PURE__ */ c("li", { className: "tactus-hitl-file-item", children: [
        /* @__PURE__ */ e("span", { className: "tactus-hitl-file-name", children: b.name }),
        /* @__PURE__ */ e("span", { className: "tactus-hitl-file-size", children: F(b.size) }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "tactus-hitl-file-remove",
            onClick: () => ot(I),
            disabled: y,
            "aria-label": "Remove file",
            children: "×"
          }
        )
      ] }, I)) }),
      /* @__PURE__ */ c("div", { className: "tactus-hitl-actions", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "submit",
            className: "tactus-hitl-button tactus-hitl-button-primary",
            disabled: y || m.length === 0,
            children: y ? "Uploading..." : `Upload ${m.length} file${m.length === 1 ? "" : "s"}`
          }
        ),
        s && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "tactus-hitl-button tactus-hitl-button-secondary",
            onClick: s,
            disabled: y,
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
function F(t) {
  if (t === 0) return "0 B";
  const a = 1024, s = ["B", "KB", "MB", "GB"], n = Math.floor(Math.log(t) / Math.log(a));
  return `${parseFloat((t / Math.pow(a, n)).toFixed(1))} ${s[n]}`;
}
function it({
  request: t,
  onRespond: a,
  onCancel: s,
  className: n = "",
  showHeader: h = !0,
  showContext: i = !0
}) {
  const { request_id: r, metadata: o } = t, l = o, m = (l == null ? void 0 : l.severity) ?? "warning", u = l == null ? void 0 : l.context, p = () => {
    a({ request_id: r, value: !0 });
  };
  return /* @__PURE__ */ c(
    "div",
    {
      className: `tactus-hitl-escalation tactus-hitl-escalation-${m} tactus-ai-card tactus-ai-alert ${n}`.trim(),
      role: "alert",
      children: [
        /* @__PURE__ */ e("div", { className: "tactus-hitl-escalation-icon", children: Qt(m) }),
        /* @__PURE__ */ c("div", { className: "tactus-hitl-escalation-content tactus-ai-field", children: [
          h && /* @__PURE__ */ e(q, { request: t }),
          i && /* @__PURE__ */ e(T, { request: t }),
          u && Object.keys(u).length > 0 && /* @__PURE__ */ e("div", { className: "tactus-hitl-escalation-context", children: /* @__PURE__ */ e("dl", { className: "tactus-hitl-escalation-context-list", children: Object.entries(u).map(([f, y]) => /* @__PURE__ */ c("div", { className: "tactus-hitl-escalation-context-item", children: [
            /* @__PURE__ */ e("dt", { children: f }),
            /* @__PURE__ */ e("dd", { children: Xt(y) })
          ] }, f)) }) }),
          /* @__PURE__ */ e(T, { request: t })
        ] }),
        /* @__PURE__ */ c("div", { className: "tactus-hitl-actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "tactus-hitl-button tactus-hitl-button-primary",
              onClick: p,
              children: "Acknowledge"
            }
          ),
          s && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "tactus-hitl-button tactus-hitl-button-secondary",
              onClick: s,
              children: "Cancel"
            }
          )
        ] })
      ]
    }
  );
}
function Qt(t) {
  const a = { size: 24, strokeWidth: 2 };
  switch (t) {
    case "info":
      return /* @__PURE__ */ e(wt, { ...a });
    case "warning":
      return /* @__PURE__ */ e(W, { ...a });
    case "error":
      return /* @__PURE__ */ e(Ct, { ...a });
    case "critical":
      return /* @__PURE__ */ e(jt, { ...a });
    default:
      return /* @__PURE__ */ e(W, { ...a });
  }
}
function Xt(t) {
  return t == null ? "—" : typeof t == "boolean" ? t ? "Yes" : "No" : typeof t == "object" ? JSON.stringify(t) : String(t);
}
function ct({
  request: t,
  onRespond: a,
  onCancel: s,
  className: n = "",
  showHeader: h = !0,
  showContext: i = !0
}) {
  var v;
  const r = t.items || [], [o, l] = C(((v = r[0]) == null ? void 0 : v.item_id) || ""), [m, u] = C({}), [p, f] = C(/* @__PURE__ */ new Set()), y = r.every((d) => d.required === !1 ? !0 : p.has(d.item_id)), k = (d, N) => {
    u((x) => ({ ...x, [d]: N })), f((x) => new Set(x).add(d));
  }, g = () => {
    a({
      request_id: t.request_id,
      value: m
    });
  }, $ = (d) => {
    var R;
    const N = {
      ...t,
      request_id: `${t.request_id}_${d.item_id}`,
      request_type: d.request_type,
      message: d.message,
      label: d.label,
      options: d.options,
      default_value: d.default_value,
      metadata: d.metadata
    }, x = (w) => {
      k(d.item_id, w.value);
    };
    switch (d.request_type) {
      case "approval":
        return /* @__PURE__ */ e(
          K,
          {
            request: N,
            onRespond: x,
            onCancel: s
          }
        );
      case "input":
        return /* @__PURE__ */ e(
          tt,
          {
            request: N,
            onRespond: x,
            onCancel: s
          }
        );
      case "select":
        return ((R = N.metadata) == null ? void 0 : R.mode) === "multiple" ? /* @__PURE__ */ e(
          at,
          {
            request: N,
            onRespond: x,
            onCancel: s
          }
        ) : /* @__PURE__ */ e(
          et,
          {
            request: N,
            onRespond: x,
            onCancel: s
          }
        );
      case "review":
        return /* @__PURE__ */ e(
          st,
          {
            request: N,
            onRespond: x,
            onCancel: s
          }
        );
      case "upload":
        return /* @__PURE__ */ e(
          nt,
          {
            request: N,
            onRespond: x,
            onCancel: s
          }
        );
      case "escalation":
        return /* @__PURE__ */ e(
          it,
          {
            request: N,
            onRespond: x,
            onCancel: s
          }
        );
      default:
        return /* @__PURE__ */ c("div", { children: [
          "Unsupported item type: ",
          d.request_type
        ] });
    }
  }, S = r.find((d) => d.item_id === o);
  return /* @__PURE__ */ c("div", { className: `tactus-hitl-inputs tactus-ai-card ${n}`.trim(), children: [
    h && /* @__PURE__ */ e(q, { request: t }),
    i && /* @__PURE__ */ e(T, { request: t }),
    /* @__PURE__ */ c("div", { className: "tactus-hitl-tabs", children: [
      /* @__PURE__ */ e("div", { className: "tactus-hitl-tabs-list", role: "tablist", children: r.map((d) => {
        const N = d.item_id === o, x = p.has(d.item_id), R = d.required !== !1;
        return /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": N,
            "aria-controls": `tabpanel-${d.item_id}`,
            className: `tactus-hitl-tab ${N ? "tactus-hitl-tab-active" : ""} ${x ? "tactus-hitl-tab-complete" : ""}`.trim(),
            onClick: () => l(d.item_id),
            children: [
              /* @__PURE__ */ e("span", { className: "tactus-hitl-tab-label", children: d.label }),
              R && !x && /* @__PURE__ */ e("span", { className: "tactus-hitl-tab-required", "aria-label": "required", children: "*" }),
              x && /* @__PURE__ */ e("span", { className: "tactus-hitl-tab-check", "aria-label": "complete", children: "✓" })
            ]
          },
          d.item_id
        );
      }) }),
      /* @__PURE__ */ e(
        "div",
        {
          id: `tabpanel-${o}`,
          role: "tabpanel",
          "aria-labelledby": `tab-${o}`,
          className: "tactus-hitl-tabs-content",
          children: S && $(S)
        }
      )
    ] }),
    /* @__PURE__ */ c("div", { className: "tactus-hitl-actions", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "tactus-hitl-button tactus-hitl-button-primary",
          onClick: g,
          disabled: !y,
          children: "Submit All"
        }
      ),
      s && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "tactus-hitl-button tactus-hitl-button-secondary",
          onClick: s,
          children: "Cancel"
        }
      )
    ] })
  ] });
}
function le({
  request: t,
  onRespond: a,
  onCancel: s,
  className: n = "",
  showHeader: h = !0,
  showContext: i = !0
}) {
  const { request_type: r, metadata: o } = t, l = {
    request: t,
    onRespond: a,
    onCancel: s,
    className: n,
    showHeader: h,
    showContext: i
  };
  switch (r) {
    case "approval":
      return /* @__PURE__ */ e(K, { ...l });
    case "input":
      return /* @__PURE__ */ e(tt, { ...l });
    case "select": {
      const m = o;
      return ((m == null ? void 0 : m.mode) ?? "single") === "multiple" ? /* @__PURE__ */ e(at, { ...l }) : /* @__PURE__ */ e(et, { ...l });
    }
    case "review":
      return /* @__PURE__ */ e(st, { ...l });
    case "upload":
      return /* @__PURE__ */ e(nt, { ...l });
    case "escalation":
      return /* @__PURE__ */ e(it, { ...l });
    case "inputs":
      return /* @__PURE__ */ e(ct, { ...l });
    default:
      return /* @__PURE__ */ c("div", { className: `tactus-hitl-unknown ${n}`.trim(), children: [
        /* @__PURE__ */ c("p", { children: [
          "Unknown request type: ",
          r
        ] }),
        /* @__PURE__ */ e("p", { children: t.message }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "tactus-hitl-button tactus-hitl-button-secondary",
            onClick: s,
            children: "Cancel"
          }
        )
      ] });
  }
}
function re({
  request: t,
  onRespond: a,
  onCancel: s,
  className: n = "",
  open: h,
  onOpenChange: i,
  title: r,
  description: o,
  showHeader: l = !1,
  showContext: m = !1
}) {
  if (!h)
    return null;
  const u = () => {
    i == null || i(!1), s == null || s();
  }, p = (f) => {
    a(f), i == null || i(!1);
  };
  return /* @__PURE__ */ c("div", { className: `tactus-hitl-modal ${n}`.trim(), children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "tactus-hitl-modal-overlay",
        "aria-label": "Close",
        onClick: u
      }
    ),
    /* @__PURE__ */ c("div", { className: "tactus-hitl-modal-content", role: "dialog", "aria-modal": "true", children: [
      /* @__PURE__ */ c("div", { className: "tactus-hitl-modal-header", children: [
        /* @__PURE__ */ c("div", { children: [
          /* @__PURE__ */ e("div", { className: "tactus-hitl-modal-title", children: r ?? "Complete Form" }),
          o && /* @__PURE__ */ e("div", { className: "tactus-hitl-modal-description", children: o })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "tactus-hitl-modal-close",
            "aria-label": "Close",
            onClick: u,
            children: "x"
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "tactus-hitl-modal-body", children: /* @__PURE__ */ e(
        ct,
        {
          request: t,
          onRespond: p,
          onCancel: u,
          showHeader: l,
          showContext: m
        }
      ) })
    ] })
  ] });
}
function oe({
  options: t,
  onSelect: a,
  onCancel: s,
  isSubmitting: n = !1,
  className: h = ""
}) {
  const i = t && t.length > 0;
  return /* @__PURE__ */ e("div", { className: `tactus-hitl-actions ${h}`.trim(), children: i ? t.map((r, o) => /* @__PURE__ */ e(
    Kt,
    {
      option: r,
      onClick: () => a(r.value),
      disabled: n
    },
    o
  )) : /* @__PURE__ */ c(dt, { children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "submit",
        className: "tactus-hitl-button tactus-hitl-button-primary",
        disabled: n,
        children: n ? "Submitting..." : "Submit"
      }
    ),
    s && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "tactus-hitl-button tactus-hitl-button-secondary",
        onClick: s,
        disabled: n,
        children: "Cancel"
      }
    )
  ] }) });
}
function Kt({ option: t, onClick: a, disabled: s }) {
  const n = te(t.style);
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: `tactus-hitl-button ${n}`,
      onClick: a,
      disabled: s,
      title: t.description,
      children: t.label
    }
  );
}
function te(t) {
  switch (t) {
    case "primary":
      return "tactus-hitl-button-primary";
    case "danger":
      return "tactus-hitl-button-danger";
    case "secondary":
      return "tactus-hitl-button-secondary";
    default:
      return "tactus-hitl-button-default";
  }
}
function ee() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ae(t) {
  return t === "system" ? ee() : t;
}
function ue(t, a, s = "tactus-hitl-theme") {
  const n = a || document.documentElement;
  n.classList.contains(s) || n.classList.add(s), t === "dark" ? n.classList.add("dark") : n.classList.remove("dark");
}
const lt = Y(void 0);
function de({
  children: t,
  defaultTheme: a = "system",
  storageKey: s,
  disableTransitionOnChange: n = !1,
  classPrefix: h = "tactus-hitl-theme"
}) {
  const [i, r] = C(() => {
    if (s && typeof window < "u") {
      const u = localStorage.getItem(s);
      if (u && ["light", "dark", "system"].includes(u))
        return u;
    }
    return a;
  }), o = U(() => ae(i), [i]);
  O(() => {
    a && a !== i && r(a);
  }, [a]), O(() => {
    if (i !== "system") return;
    const u = window.matchMedia("(prefers-color-scheme: dark)"), p = () => {
      r("system");
    };
    if (u.addEventListener)
      return u.addEventListener("change", p), () => u.removeEventListener("change", p);
    if (u.addListener)
      return u.addListener(p), () => u.removeListener(p);
  }, [i]), O(() => {
    s && localStorage.setItem(s, i);
  }, [i, s]);
  const l = (u) => {
    if (n) {
      const p = document.createElement("style");
      p.textContent = "* { transition: none !important; }", document.head.appendChild(p), setTimeout(() => {
        document.head.removeChild(p);
      }, 0);
    }
    r(u);
  }, m = U(
    () => ({
      theme: i,
      setTheme: l,
      resolvedTheme: o
    }),
    [i, o]
  );
  return /* @__PURE__ */ e(lt.Provider, { value: m, children: /* @__PURE__ */ e("div", { className: `${h}${o === "dark" ? " dark" : ""}`, children: t }) });
}
function se() {
  const t = Z(lt);
  if (!t)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
}
function he({ className: t = "" }) {
  const { theme: a, setTheme: s } = se(), n = () => {
    const r = ["light", "dark", "system"], l = (r.indexOf(a) + 1) % r.length;
    s(r[l]);
  }, h = () => {
    switch (a) {
      case "light":
        return /* @__PURE__ */ e(Tt, { size: 18 });
      case "dark":
        return /* @__PURE__ */ e(At, { size: 18 });
      case "system":
        return /* @__PURE__ */ e($t, { size: 18 });
    }
  }, i = () => {
    switch (a) {
      case "light":
        return "Switch to dark mode";
      case "dark":
        return "Switch to system mode";
      case "system":
        return "Switch to light mode";
    }
  };
  return /* @__PURE__ */ c(
    "button",
    {
      onClick: n,
      className: `tactus-hitl-button tactus-hitl-button-secondary ${t}`.trim(),
      "aria-label": i(),
      title: i(),
      type: "button",
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "0.5rem 0.75rem"
      },
      children: [
        h(),
        /* @__PURE__ */ e("span", { style: { textTransform: "capitalize" }, children: a })
      ]
    }
  );
}
export {
  K as ApprovalPanel,
  Pt as Confirmation,
  Bt as ConfirmationAccepted,
  H as ConfirmationAction,
  Vt as ConfirmationActions,
  Ut as ConfirmationRejected,
  Mt as ConfirmationRequest,
  ce as ConfirmationTitle,
  T as ContextPanel,
  it as EscalationAlert,
  nt as FileUpload,
  re as HITLInputsModal,
  ct as HITLInputsPanel,
  le as HITLRequestRenderer,
  q as RequestHeader,
  oe as ResponseActions,
  st as ReviewPanel,
  at as SelectMultiple,
  et as SelectSingle,
  tt as TextInput,
  de as ThemeProvider,
  he as ThemeToggle,
  ue as applyTheme,
  ee as getSystemTheme,
  ae as resolveTheme,
  se as useTheme
};
