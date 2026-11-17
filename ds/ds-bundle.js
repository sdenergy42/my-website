/* @ds-bundle: {"format":4,"namespace":"SDEnergyDesignSystem_db7406","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"aab2a2eb2269","components/content/Accordion.jsx":"ce33620208cd","components/content/Badge.jsx":"7510f1d00ee3","components/content/Card.jsx":"ba4b8ff20a54","components/content/Eyebrow.jsx":"8eb428f11983","components/content/StatCard.jsx":"0882b80b8df7","components/content/Tag.jsx":"ce11da5adfdd","components/forms/Button.jsx":"2840f9697d91","components/forms/Checkbox.jsx":"b3bb0d1b6cbe","components/forms/IconButton.jsx":"945875ade573","components/forms/Input.jsx":"a9a7535cb9a4","components/forms/Select.jsx":"cafb03833166","components/forms/Textarea.jsx":"ce65ed4071b1","components/navigation/Footer.jsx":"5a3378145102","components/navigation/Navbar.jsx":"db4a7884eabb","ui_kits/website/About.jsx":"5b8ae650bc2d","ui_kits/website/Contact.jsx":"42c1dacd6e21","ui_kits/website/Home.jsx":"7503f8d5666e","ui_kits/website/Projects.jsx":"39d2e32f02e0","ui_kits/website/lib.jsx":"d80f437a1178"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SDEnergyDesignSystem_db7406 = window.SDEnergyDesignSystem_db7406 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — Wordmark (TYPE-BASED PLACEHOLDER)
 * No official logo file was provided, so the brand name is set in type.
 * "SD" sits in a solar-orange rounded tile; "Energy" in navy.
 * Replace with the official SVG/PNG logo when available.
 */
function Wordmark({
  size = "md",
  onDark = false,
  showText = true,
  style = {},
  className = "",
  ...rest
}) {
  const scale = {
    sm: 0.82,
    md: 1,
    lg: 1.3
  }[size] || 1;
  const tile = Math.round(34 * scale);
  const textColor = onDark ? "var(--text-on-navy)" : "var(--text-strong)";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `sd-wordmark ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: `${10 * scale}px`,
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: tile,
      height: tile,
      borderRadius: `${Math.round(9 * scale)}px`,
      background: "var(--gradient-dawn)",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-extrabold)",
      fontSize: `${15 * scale}px`,
      letterSpacing: "-0.03em",
      boxShadow: "var(--shadow-xs)",
      flexShrink: 0
    }
  }, "SD"), showText ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: `${5 * scale}px`,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: `${19 * scale}px`,
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: textColor
    }
  }, "SD"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? "var(--orange-300)" : "var(--brand-primary)"
    }
  }, "Energy")) : null);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
/**
 * SD Energy — Accordion
 * Collapsible FAQ / process list. Controlled internally; one item open at a time
 * by default (set `multi` to allow many).
 */
function Accordion({
  items = [],
  multi = false,
  defaultOpen = [0],
  style = {},
  className = ""
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(multi ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `sd-accordion ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, items.map((item, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "sd-accordion__trigger",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        padding: "20px 4px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--fs-h4)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-strong)",
        transition: "color var(--dur-fast) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", null, item.title), /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 28,
        height: 28,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: isOpen ? "var(--brand-primary)" : "var(--text-muted)",
        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        transition: "transform var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
        fontSize: "26px",
        lineHeight: 1
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows var(--dur-slow) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 4px 22px",
        fontSize: "var(--fs-body)",
        color: "var(--text-body)",
        lineHeight: "var(--lh-relaxed)",
        maxWidth: "62ch"
      }
    }, item.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — Badge
 * Small status/label pill. Semantic tones for project status etc.
 */
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  style = {},
  className = "",
  ...rest
}) {
  const map = {
    neutral: {
      soft: ["var(--gray-100)", "var(--gray-700)"],
      solid: ["var(--gray-700)", "#fff"]
    },
    brand: {
      soft: ["var(--orange-50)", "var(--orange-700)"],
      solid: ["var(--brand-primary)", "#fff"]
    },
    navy: {
      soft: ["var(--navy-50)", "var(--navy-700)"],
      solid: ["var(--navy-700)", "#fff"]
    },
    success: {
      soft: ["var(--green-50)", "var(--green-700)"],
      solid: ["var(--green-600)", "#fff"]
    },
    warning: {
      soft: ["var(--amber-50)", "#8a5d00"],
      solid: ["var(--amber-500)", "#fff"]
    },
    danger: {
      soft: ["var(--red-50)", "#a52323"],
      solid: ["var(--red-500)", "#fff"]
    }
  };
  const [bg, fg] = (map[tone] || map.neutral)[variant] || map.neutral.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `sd-badge ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      height: "24px",
      padding: "0 10px",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-wide)",
      lineHeight: 1,
      color: fg,
      background: bg,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — Card
 * Surface container with soft elevation. Optional interactive hover-lift.
 */
function Card({
  children,
  interactive = false,
  padding = "var(--space-6)",
  elevation = "sm",
  style = {},
  className = "",
  ...rest
}) {
  const shadows = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sd-card ${interactive ? "sd-card--interactive" : ""} ${className}`,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: shadows[elevation],
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — Eyebrow
 * Small uppercase label above a section heading. A core brand motif:
 * an orange tick + spaced caps introducing each content band.
 */
function Eyebrow({
  children,
  tick = true,
  color = "var(--brand-primary)",
  align = "left",
  style = {},
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `sd-eyebrow ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      justifyContent: align === "center" ? "center" : "flex-start",
      fontSize: "var(--fs-eyebrow)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: color,
      ...style
    }
  }, rest), tick ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 2,
      background: color,
      display: "inline-block",
      borderRadius: 2
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — StatCard
 * A headline metric with label and optional caption. Uses mono tabular figures.
 * Central to an energy brand: capacity (MW), CO2 avoided, projects, etc.
 */
function StatCard({
  value,
  unit,
  label,
  caption,
  align = "left",
  tone = "default",
  style = {},
  className = "",
  ...rest
}) {
  const valueColor = tone === "brand" ? "var(--brand-primary)" : "var(--text-strong)";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sd-statcard ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontFamily: "var(--font-data)",
      fontSize: "var(--fs-display-m)",
      fontWeight: "var(--fw-bold)",
      lineHeight: 1,
      letterSpacing: "var(--ls-tighter)",
      color: valueColor,
      fontVariantNumeric: "tabular-nums"
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-semibold)",
      color: valueColor
    }
  }, unit) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label), caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — Tag
 * Outlined category/filter chip. Optional selected state and dot.
 */
function Tag({
  children,
  selected = false,
  dot = false,
  dotColor = "var(--brand-primary)",
  style = {},
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `sd-tag ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      height: "30px",
      padding: "0 14px",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-medium)",
      lineHeight: 1,
      color: selected ? "var(--brand-ink)" : "var(--text-body)",
      background: selected ? "var(--surface-brand-tint)" : "var(--surface-card)",
      border: `1px solid ${selected ? "var(--border-brand)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: dotColor,
      display: "inline-block"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — Button
 * Primary CTA uses Solar Orange; secondary is navy-outline; ghost is text-only.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  className = "",
  style = {},
  ...rest
}) {
  const heights = {
    sm: "var(--control-h-sm)",
    md: "var(--control-h-md)",
    lg: "var(--control-h-lg)"
  };
  const pads = {
    sm: "0 16px",
    md: "0 22px",
    lg: "0 28px"
  };
  const fonts = {
    sm: "var(--fs-body-sm)",
    md: "var(--fs-body)",
    lg: "var(--fs-body-lg)"
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    height: heights[size],
    padding: pads[size],
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-ui)",
    fontSize: fonts[size],
    fontWeight: "var(--fw-semibold)",
    letterSpacing: "var(--ls-tight)",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "var(--transition-base)",
    whiteSpace: "nowrap",
    textDecoration: "none",
    userSelect: "none"
  };
  const variants = {
    primary: {
      background: "var(--brand-primary)",
      color: "var(--text-on-brand)",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--brand-ink)",
      borderColor: "var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand-ink)"
    },
    navy: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-brand)"
    },
    link: {
      background: "transparent",
      color: "var(--text-link)",
      height: "auto",
      padding: 0,
      borderRadius: 0
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `sd-btn sd-btn--${variant} ${className}`,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    disabled: as === "button" ? disabled : undefined
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginLeft: size === "sm" ? -2 : -4
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginRight: size === "sm" ? -2 : -4
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — Checkbox
 * Controlled or uncontrolled checkbox with label. Orange when checked.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `cb-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontSize: "var(--fs-body)",
      color: "var(--text-body)",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    className: "sd-check",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      width: 20,
      height: 20,
      margin: 0,
      accentColor: "var(--brand-primary)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest)), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — IconButton
 * Square/pill button for a single icon. Pass a Lucide (or any) SVG as children.
 */
function IconButton({
  children,
  label,
  size = "md",
  variant = "ghost",
  shape = "circle",
  disabled = false,
  style = {},
  className = "",
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const d = dims[size];
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--brand-ink)",
      border: "1px solid var(--border-default)"
    },
    solid: {
      background: "var(--brand-primary)",
      color: "var(--text-on-brand)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    className: `sd-iconbtn sd-iconbtn--${variant} ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      borderRadius: shape === "circle" ? "var(--radius-pill)" : "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "var(--transition-base)",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — Input
 * Single-line text field with optional label, hint and error.
 */
function Input({
  label,
  hint,
  error,
  id,
  size = "md",
  leadingIcon = null,
  type = "text",
  style = {},
  className = "",
  ...rest
}) {
  const heights = {
    sm: "var(--control-h-sm)",
    md: "var(--control-h-md)",
    lg: "var(--control-h-lg)"
  };
  const fieldId = id || (label ? `in-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%"
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, leadingIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      display: "inline-flex",
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }, leadingIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    className: `sd-input ${className}`,
    style: {
      width: "100%",
      height: heights[size],
      padding: leadingIcon ? "0 16px 0 42px" : "0 16px",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: `1px solid ${error ? "var(--red-500)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      transition: "var(--transition-base)",
      ...style
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--red-500)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — Select
 * Native select styled to match Input, with a chevron affordance.
 */
function Select({
  label,
  hint,
  error,
  id,
  size = "md",
  options = [],
  placeholder,
  style = {},
  className = "",
  children,
  ...rest
}) {
  const heights = {
    sm: "var(--control-h-sm)",
    md: "var(--control-h-md)",
    lg: "var(--control-h-lg)"
  };
  const fieldId = id || (label ? `sel-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const chevron = "data:image/svg+xml;utf8," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236C788C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%"
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: `sd-select ${className}`,
    style: {
      width: "100%",
      height: heights[size],
      padding: "0 42px 0 16px",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      background: `var(--surface-card) url("${chevron}") no-repeat right 14px center`,
      border: `1px solid ${error ? "var(--red-500)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      appearance: "none",
      WebkitAppearance: "none",
      cursor: "pointer",
      transition: "var(--transition-base)",
      ...style
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  }), children), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--red-500)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SD Energy — Textarea
 * Multi-line text field with matching styling to Input.
 */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  style = {},
  className = "",
  ...rest
}) {
  const fieldId = id || (label ? `ta-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%"
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    className: `sd-textarea ${className}`,
    style: {
      width: "100%",
      padding: "12px 16px",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-normal)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: `1px solid ${error ? "var(--red-500)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      resize: "vertical",
      transition: "var(--transition-base)",
      ...style
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--red-500)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/**
 * SD Energy — Footer
 * Navy footer with wordmark, link columns, company/legal info, and copyright.
 */
function Footer({
  columns = [{
    title: "회사소개",
    links: ["CEO 인사말", "연혁", "조직도", "오시는 길"]
  }, {
    title: "사업영역",
    links: ["프로젝트 개발", "엔지니어링·설계", "투자", "운영·유지보수"]
  }, {
    title: "지속가능경영",
    links: ["환경 경영", "지역 상생", "안전·품질", "윤리경영"]
  }, {
    title: "고객지원",
    links: ["공지사항", "보도자료", "채용", "문의하기"]
  }],
  company = {
    name: "에스디에너지 주식회사 (SD Energy Co., Ltd.)",
    lines: ["대표이사 홍길동  |  사업자등록번호 000-00-00000", "서울특별시 강남구 테헤란로 000, 00층", "T. 02-000-0000  |  E. contact@sdenergy.co.kr"]
  },
  style = {},
  className = ""
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: `sd-footer ${className}`,
    style: {
      background: "var(--gradient-navy)",
      color: "var(--text-on-navy)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "64px var(--gutter) 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(4, 1fr)",
      gap: 40
    },
    className: "sd-footer__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    onDark: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: "var(--fs-body-sm)",
      color: "rgba(230,237,246,0.72)",
      maxWidth: "30ch",
      lineHeight: "var(--lh-relaxed)"
    }
  }, "\uD0DC\uC591\uAD11 \uBC1C\uC804\uC758 \uAC1C\uBC1C\xB7\uC124\uACC4\xB7\uD22C\uC790\xB7\uC6B4\uC601\uC744 \uC544\uC6B0\uB974\uB294 \uC2E0\uC7AC\uC0DD\uC5D0\uB108\uC9C0 \uC804\uBB38 \uAE30\uC5C5.")), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-bold)",
      color: "#fff",
      marginBottom: 14,
      letterSpacing: "var(--ls-tight)"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, col.links.map(link => /*#__PURE__*/React.createElement("li", {
    key: link
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "sd-navlink",
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "rgba(230,237,246,0.72)"
    }
  }, link))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 28,
      borderTop: "1px solid var(--border-inverse)",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "rgba(230,237,246,0.6)",
      lineHeight: "var(--lh-relaxed)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      color: "rgba(230,237,246,0.82)",
      marginBottom: 4
    }
  }, company.name), company.lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "sd-navlink",
    style: {
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      color: "rgba(230,237,246,0.82)"
    }
  }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "sd-navlink",
    style: {
      fontSize: "var(--fs-caption)",
      color: "rgba(230,237,246,0.7)"
    }
  }, "\uC774\uC6A9\uC57D\uAD00")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "rgba(230,237,246,0.5)"
    }
  }, "\xA9 2026 SD Energy Co., Ltd. All rights reserved.")))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    marginTop: 1
  }
}, /*#__PURE__*/React.createElement("polyline", {
  points: "6 9 12 15 18 9"
}));
const Menu = () => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "12",
  x2: "21",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "18",
  x2: "21",
  y2: "18"
}));

/**
 * SD Energy — Navbar
 * Sticky top navigation for the marketing site. White, hairline bottom border,
 * wordmark left, links center-right, primary CTA far right.
 */
function Navbar({
  links = [{
    label: "회사소개",
    labelEn: "About",
    hasMenu: true
  }, {
    label: "사업영역",
    labelEn: "Business",
    hasMenu: true
  }, {
    label: "프로젝트",
    labelEn: "Projects"
  }, {
    label: "지속가능경영",
    labelEn: "Sustainability"
  }, {
    label: "홍보센터",
    labelEn: "News"
  }],
  active,
  ctaLabel = "문의하기",
  onCta,
  style = {},
  className = ""
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: `sd-navbar ${className}`,
    style: {
      position: "sticky",
      top: 0,
      zIndex: "var(--z-sticky)",
      background: "rgba(255,255,255,0.86)",
      backdropFilter: "saturate(180%) blur(12px)",
      WebkitBackdropFilter: "saturate(180%) blur(12px)",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      height: 72,
      padding: "0 var(--gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      flex: 1,
      justifyContent: "center"
    },
    className: "sd-navbar__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: "#",
    className: "sd-navlink",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "8px 14px",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)",
      color: active === l.label ? "var(--brand-primary)" : "var(--text-strong)",
      borderRadius: "var(--radius-sm)"
    }
  }, l.label, l.hasMenu ? /*#__PURE__*/React.createElement(Chevron, null) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-muted)"
    },
    className: "sd-navbar__lang"
  }, "KO \xB7 EN"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, ctaLabel), /*#__PURE__*/React.createElement("button", {
    "aria-label": "menu",
    className: "sd-navbar__burger",
    style: {
      display: "none",
      background: "transparent",
      border: "none",
      color: "var(--text-strong)",
      cursor: "pointer",
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(Menu, null)))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* SD Energy — About screen */
const {
  Button,
  Card,
  Eyebrow,
  StatCard
} = window.SDEnergyDesignSystem_db7406;
function AboutHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.SECTION,
      paddingTop: 72,
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    eyebrow: "\uD68C\uC0AC\uC18C\uAC1C / About us",
    title: "\uAE68\uB057\uD55C \uC5D0\uB108\uC9C0\uB85C \uC9C0\uC5ED\uACFC \uBBF8\uB798\uB97C \uC787\uC2B5\uB2C8\uB2E4",
    lead: "SD Energy\uB294 \uD0DC\uC591\uAD11 \uBC1C\uC804\uC758 \uAC1C\uBC1C\xB7\uC124\uACC4\xB7\uD22C\uC790\xB7\uC6B4\uC601\uC744 \uC544\uC6B0\uB974\uB294 \uC2E0\uC7AC\uC0DD\uC5D0\uB108\uC9C0 \uC804\uBB38 \uAE30\uC5C5\uC785\uB2C8\uB2E4. \uC644\uACB0\uC801 \uD504\uB85C\uC138\uC2A4\uC640 \uCD95\uC801\uB41C \uC804\uBB38\uC131\uC73C\uB85C \uC5D0\uB108\uC9C0 \uC804\uD658\uC744 \uC55E\uB2F9\uAE41\uB2C8\uB2E4."
  })));
}
function Mission() {
  const values = [{
    icon: "leaf",
    title: "환경 지속가능성",
    desc: "탄소중립 사회로의 전환을 실질적 발전 사업으로 실현합니다."
  }, {
    icon: "handshake",
    title: "지역 상생",
    desc: "주민 참여형 모델로 지역 경제 성장에 기여합니다."
  }, {
    icon: "shield-check",
    title: "신뢰와 책임",
    desc: "투명한 운영과 안전·품질 관리로 신뢰를 쌓습니다."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: window.SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(window.Img, {
    variant: "soft",
    label: "\uBE44\uC804 / Vision",
    height: 360
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "\uBBF8\uC158 / Mission"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      margin: "16px 0 18px",
      letterSpacing: "var(--ls-tighter)"
    }
  }, "\uC9C0\uC18D\uAC00\uB2A5\uD55C \uC5D0\uB108\uC9C0, \uC644\uACB0\uC801 \uC2E4\uD589\uB825"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-relaxed)",
      marginBottom: 28
    }
  }, "\uC6B0\uB9AC\uB294 \uD0DC\uC591\uAD11 \uBC1C\uC804 \uC0AC\uC5C5\uC758 \uBAA8\uB4E0 \uB2E8\uACC4\uB97C \uC9C1\uC811 \uC218\uD589\uD569\uB2C8\uB2E4. \uC774 \uD1B5\uD569\uB41C \uC2E4\uD589\uB825\uC774 \uC0AC\uC5C5\uC758 \uC548\uC815\uC131\uACFC \uBC1C\uC804 \uD6A8\uC728\uC744 \uB192\uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, values.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.title,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-brand-tint)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, window.Icon(v.icon, 22, "var(--brand-primary)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "var(--fs-h4)",
      marginBottom: 4
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-relaxed)"
    }
  }, v.desc))))))));
}
function Timeline() {
  const events = [{
    year: "2011",
    text: "회사 설립, 첫 태양광 발전소 개발 착수"
  }, {
    year: "2015",
    text: "누적 개발 용량 100MW 돌파"
  }, {
    year: "2019",
    text: "EPC·O&M 통합 조직 출범"
  }, {
    year: "2023",
    text: "해상 태양광 프로젝트 진출"
  }, {
    year: "2026",
    text: "누적 개발 용량 1.2GW 달성"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: window.SECTION
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    eyebrow: "\uC5F0\uD601 / History",
    title: "15\uB144, \uAFB8\uC900\uD788 \uC313\uC544\uC628 \uADA4\uC801",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 20,
      marginTop: 48
    }
  }, events.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.year,
    style: {
      position: "relative",
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: i === 4 ? "var(--brand-primary)" : "var(--border-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -5,
      left: 0,
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: i === 4 ? "var(--brand-primary)" : "var(--gray-0)",
      border: "2px solid " + (i === 4 ? "var(--brand-primary)" : "var(--border-strong)")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontFamily: "var(--font-data)",
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-bold)",
      color: i === 4 ? "var(--brand-primary)" : "var(--text-strong)",
      marginBottom: 8
    }
  }, e.year), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-relaxed)"
    }
  }, e.text))))));
}
function LeadershipQuote() {
  return /*#__PURE__*/React.createElement("section", {
    style: window.SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 64,
      lineHeight: 1,
      color: "var(--orange-200)"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "var(--ls-tight)",
      margin: "0 0 28px"
    }
  }, "\uC5D0\uB108\uC9C0 \uC804\uD658\uC740 \uAE30\uC220\uC774 \uC544\uB2C8\uB77C \uC2E0\uB8B0\uC758 \uBB38\uC81C\uC785\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uC9C0\uC5ED\uACFC \uD568\uAED8, \uB05D\uAE4C\uC9C0 \uCC45\uC784\uC9C0\uB294 \uBC1C\uC804 \uC0AC\uC5C5\uC744 \uB9CC\uB4ED\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      background: "var(--gradient-navy)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, "\uD64D\uAE38\uB3D9 \xB7 \uB300\uD45C\uC774\uC0AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, "CEO, SD Energy")))));
}
function About() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AboutHero, null), /*#__PURE__*/React.createElement(Mission, null), /*#__PURE__*/React.createElement(Timeline, null), /*#__PURE__*/React.createElement(LeadershipQuote, null));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* SD Energy — Contact screen (interactive form) */
const {
  Card,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  Eyebrow
} = window.SDEnergyDesignSystem_db7406;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  const info = [{
    icon: "map-pin",
    label: "주소",
    value: "서울특별시 강남구 테헤란로 000, 00층"
  }, {
    icon: "phone",
    label: "전화",
    value: "02-000-0000"
  }, {
    icon: "mail",
    label: "이메일",
    value: "contact@sdenergy.co.kr"
  }, {
    icon: "clock",
    label: "운영시간",
    value: "평일 09:00 – 18:00"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.SECTION,
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 96
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\uBB38\uC758\uD558\uAE30 / Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h1)",
      margin: "16px 0 16px",
      letterSpacing: "var(--ls-tighter)"
    }
  }, "\uC0AC\uC5C5 \uBB38\uC758 \uBC0F \uC0C1\uB2F4 \uC2E0\uCCAD"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-relaxed)",
      marginBottom: 32
    }
  }, "\uD504\uB85C\uC81D\uD2B8 \uAC1C\uBC1C, \uD22C\uC790, O&M \uB4F1 \uC5B4\uB5A4 \uBB38\uC758\uB4E0 \uC804\uBB38\uAC00\uAC00 \uAC80\uD1A0 \uD6C4 \uC5F0\uB77D\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, info.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, window.Icon(it.icon, 20, "var(--brand-primary)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, it.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, it.value)))))), /*#__PURE__*/React.createElement(Card, {
    padding: "36px",
    elevation: "md"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--green-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 20px"
    }
  }, window.Icon("check", 32, "var(--green-600)")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h2)",
      marginBottom: 10
    }
  }, "\uBB38\uC758\uAC00 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginBottom: 24
    }
  }, "\uC601\uC5C5\uC77C \uAE30\uC900 1\u20132\uC77C \uC774\uB0B4\uC5D0 \uB2F4\uB2F9\uC790\uAC00 \uC5F0\uB77D\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      setAgree(false);
    }
  }, "\uC0C8 \uBB38\uC758 \uC791\uC131")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\uC774\uB984 / Name",
    placeholder: "\uD64D\uAE38\uB3D9",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\uD68C\uC0AC / Company",
    placeholder: "\uD68C\uC0AC\uBA85"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\uC774\uBA54\uC77C / Email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\uC5F0\uB77D\uCC98 / Phone",
    placeholder: "010-0000-0000"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "\uBB38\uC758 \uC720\uD615 / Inquiry type",
    placeholder: "\uC120\uD0DD\uD558\uC138\uC694",
    options: ["프로젝트 개발", "엔지니어링·설계", "투자 문의", "O&M 서비스", "기타"]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "\uBB38\uC758 \uB0B4\uC6A9 / Message",
    rows: 5,
    placeholder: "\uD504\uB85C\uC81D\uD2B8 \uC704\uCE58, \uADDC\uBAA8, \uC77C\uC815 \uB4F1\uC744 \uC54C\uB824\uC8FC\uC2DC\uBA74 \uB354 \uC815\uD655\uD788 \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.",
    required: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4 (\uD544\uC218)",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !agree,
    iconRight: window.Icon("send", 18)
  }, "\uBB38\uC758 \uBCF4\uB0B4\uAE30")))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* SD Energy — Home screen */
const {
  Button,
  Card,
  StatCard,
  Badge,
  Tag,
  Eyebrow
} = window.SDEnergyDesignSystem_db7406;
function HomeHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--surface-page)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-tint)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.SECTION,
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center",
      paddingTop: 80,
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "\uC2E0\uC7AC\uC0DD\uC5D0\uB108\uC9C0 \xB7 Renewable Energy"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-display-l)",
      lineHeight: 1.05,
      letterSpacing: "var(--ls-tighter)",
      margin: "20px 0 22px"
    }
  }, "\uD0DC\uC591\uAD11 \uBC1C\uC804\uC758", /*#__PURE__*/React.createElement("br", null), "\uC804 \uACFC\uC815\uC744 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-primary)"
    }
  }, "\uCC45\uC784\uC9D1\uB2C8\uB2E4")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-relaxed)",
      maxWidth: "44ch",
      marginBottom: 32
    }
  }, "\uD504\uB85C\uC81D\uD2B8 \uAC1C\uBC1C\uBD80\uD130 \uC5D4\uC9C0\uB2C8\uC5B4\uB9C1\xB7\uC124\uACC4, \uD22C\uC790, \uC6B4\uC601\xB7\uC720\uC9C0\uBCF4\uC218\uAE4C\uC9C0. \uCCB4\uACC4\uC801\uC774\uACE0 \uC644\uACB0\uC801\uC778 \uD0DC\uC591\uAD11 \uBC1C\uC804 \uAC1C\uBC1C\uB85C \uC9C0\uC18D\uAC00\uB2A5\uD55C \uBBF8\uB798\uC640 \uC9C0\uC5ED \uACBD\uC81C \uC131\uC7A5\uC5D0 \uAE30\uC5EC\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: window.Icon("arrow-right", 18)
  }, "\uC0AC\uC5C5 \uBB38\uC758\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: window.Icon("play-circle", 18)
  }, "\uD68C\uC0AC \uC18C\uAC1C\uC601\uC0C1"))), /*#__PURE__*/React.createElement(window.Img, {
    variant: "solar",
    label: "\uBC1C\uC804\uC18C \uC804\uACBD / Hero photo",
    height: 420,
    style: {
      boxShadow: "var(--shadow-xl)"
    }
  })));
}
function StatBand() {
  const stats = [{
    value: "1.2",
    unit: "GW",
    label: "누적 개발 용량",
    cap: "Cumulative capacity"
  }, {
    value: "86",
    unit: "건",
    label: "개발 프로젝트",
    cap: "Projects developed"
  }, {
    value: "320",
    unit: "천 톤",
    label: "연간 CO₂ 저감",
    cap: "CO₂ avoided / yr"
  }, {
    value: "15",
    unit: "년",
    label: "업계 경험",
    cap: "Years of expertise"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.SECTION,
      paddingTop: 44,
      paddingBottom: 44,
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderLeft: i ? "1px solid var(--border-subtle)" : "none",
      paddingLeft: i ? 32 : 0
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: s.value,
    unit: s.unit,
    label: s.label,
    caption: s.cap,
    tone: i === 0 ? "brand" : "default"
  })))));
}
function BusinessAreas() {
  const areas = [{
    icon: "map",
    title: "프로젝트 개발",
    en: "Development",
    desc: "부지 발굴, 인허가, 계통 연계까지 사업의 시작을 설계합니다."
  }, {
    icon: "ruler",
    title: "엔지니어링·설계",
    en: "Engineering & Design",
    desc: "최적 발전량을 위한 정밀 설계와 EPC 관리."
  }, {
    icon: "trending-up",
    title: "투자",
    en: "Investment",
    desc: "구조화 금융과 투자 유치로 사업을 실현합니다."
  }, {
    icon: "settings",
    title: "운영·유지보수",
    en: "O&M",
    desc: "상업운전 이후 자산 가치를 지키는 통합 O&M."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: window.SECTION
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    eyebrow: "\uC0AC\uC5C5 \uC601\uC5ED / What we do",
    title: "\uD0DC\uC591\uAD11 \uAC1C\uBC1C\uC758 \uC644\uACB0\uC801 \uBC38\uB958\uCCB4\uC778",
    lead: "\uB124 \uAC1C\uC758 \uC804\uBB38 \uC870\uC9C1\uC774 \uD558\uB098\uC758 \uD504\uB85C\uC138\uC2A4\uB85C \uC5F0\uACB0\uB418\uC5B4, \uC0AC\uC5C5 \uC804 \uACFC\uC815\uC744 \uCC45\uC784\uC9D1\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20,
      marginTop: 44
    }
  }, areas.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.title,
    interactive: true,
    elevation: "sm",
    padding: "28px 24px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-brand-tint)",
      color: "var(--brand-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    }
  }, window.Icon(a.icon, 26, "var(--brand-primary)")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-eyebrow)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-subtle)",
      marginBottom: 6
    }
  }, a.en), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)",
      marginBottom: 10
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-relaxed)"
    }
  }, a.desc)))));
}
function FeaturedProjects({
  onView
}) {
  const projs = [{
    name: "영암 태양광 발전소",
    cap: "98.5 MW",
    region: "전라남도 영암",
    status: ["운영 중", "success"],
    img: "field"
  }, {
    name: "신안 해상 태양광",
    cap: "240 MW",
    region: "전라남도 신안",
    status: ["개발 단계", "brand"],
    img: "solar"
  }, {
    name: "밀양 산업단지 지붕형",
    cap: "42 MW",
    region: "경상남도 밀양",
    status: ["시공 중", "warning"],
    img: "dawn"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: window.SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    eyebrow: "\uD504\uB85C\uC81D\uD2B8 / Projects",
    title: "\uC804\uAD6D \uACF3\uACF3\uC5D0\uC11C \uAC00\uB3D9 \uC911"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: window.Icon("arrow-right", 16),
    onClick: onView
  }, "\uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8 \uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24,
      marginTop: 44
    }
  }, projs.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true,
    padding: "0",
    elevation: "md",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(window.Img, {
    variant: p.img,
    label: p.region,
    height: 190,
    radius: "0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.status[1]
  }, p.status[0]), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)",
      margin: "14px 0 6px"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--text-muted)",
      fontSize: "var(--fs-body-sm)"
    }
  }, window.Icon("zap", 15, "var(--brand-primary)"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, p.cap), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border-default)"
    }
  }, "\xB7"), p.region)))))));
}
function SustainabilityBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-navy)",
      color: "var(--text-on-navy)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.SECTION,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(window.Img, {
    variant: "field",
    label: "\uC9C0\uC5ED \uC0C1\uC0DD / Community",
    height: 340
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--orange-300)"
  }, "\uC9C0\uC18D\uAC00\uB2A5\uACBD\uC601 / Sustainability"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      color: "#fff",
      margin: "16px 0 18px",
      letterSpacing: "var(--ls-tighter)"
    }
  }, "\uC5D0\uB108\uC9C0 \uC804\uD658\uACFC \uC9C0\uC5ED \uACBD\uC81C, \uD568\uAED8 \uC131\uC7A5\uD569\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      color: "rgba(230,237,246,0.78)",
      lineHeight: "var(--lh-relaxed)",
      marginBottom: 28
    }
  }, "\uC8FC\uBBFC \uCC38\uC5EC\uD615 \uBC1C\uC804 \uBAA8\uB378\uACFC \uD658\uACBD \uC601\uD5A5 \uCD5C\uC18C\uD654 \uC124\uACC4\uB85C, \uAE68\uB057\uD55C \uC5D0\uB108\uC9C0\uAC00 \uC9C0\uC5ED\uC5D0 \uC2E4\uC9C8\uC801 \uAC00\uCE58\uB97C \uB0A8\uAE30\uB3C4\uB85D \uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "42",
    unit: "\uACF3",
    label: "\uC8FC\uBBFC \uCC38\uC5EC \uC0AC\uC5C5",
    align: "left",
    tone: "default",
    style: {
      color: "#fff"
    }
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "100",
    unit: "%",
    label: "RE100 \uC9C0\uD5A5",
    align: "left"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: window.Icon("arrow-right", 18)
  }, "\uC9C0\uC18D\uAC00\uB2A5\uACBD\uC601 \uBCF4\uACE0\uC11C")))));
}
function CtaBand({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: window.SECTION
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "56px",
    style: {
      background: "var(--gradient-dawn)",
      border: "none",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      color: "#fff",
      letterSpacing: "var(--ls-tighter)",
      marginBottom: 14
    }
  }, "\uD0DC\uC591\uAD11 \uC0AC\uC5C5, \uC5B4\uB514\uC11C\uBD80\uD130 \uC2DC\uC791\uD560\uAE4C\uC694?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      color: "rgba(255,255,255,0.9)",
      maxWidth: "48ch",
      margin: "0 auto 28px"
    }
  }, "\uBD80\uC9C0 \uAC80\uD1A0\uBD80\uD130 \uD22C\uC790 \uAD6C\uC870\uAE4C\uC9C0, SD Energy \uC804\uBB38\uAC00\uAC00 \uD568\uAED8 \uC124\uACC4\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    size: "lg",
    onClick: onContact,
    iconRight: window.Icon("arrow-right", 18)
  }, "\uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD")));
}
function Home({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HomeHero, null), /*#__PURE__*/React.createElement(StatBand, null), /*#__PURE__*/React.createElement(BusinessAreas, null), /*#__PURE__*/React.createElement(FeaturedProjects, {
    onView: () => onNav && onNav("projects")
  }), /*#__PURE__*/React.createElement(SustainabilityBand, null), /*#__PURE__*/React.createElement(CtaBand, {
    onContact: () => onNav && onNav("contact")
  }));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Projects.jsx
try { (() => {
/* SD Energy — Projects screen (with interactive filter) */
const {
  Card,
  Badge,
  Tag,
  Button
} = window.SDEnergyDesignSystem_db7406;
const PROJECTS = [{
  name: "영암 태양광 발전소",
  cap: "98.5",
  region: "전라남도 영암",
  type: "태양광",
  status: ["운영 중", "success"],
  img: "field",
  year: "2018"
}, {
  name: "신안 해상 태양광",
  cap: "240",
  region: "전라남도 신안",
  type: "해상태양광",
  status: ["개발 단계", "brand"],
  img: "solar",
  year: "2027"
}, {
  name: "밀양 지붕형 태양광",
  cap: "42",
  region: "경상남도 밀양",
  type: "지붕형",
  status: ["시공 중", "warning"],
  img: "dawn",
  year: "2026"
}, {
  name: "당진 육상 태양광",
  cap: "76",
  region: "충청남도 당진",
  type: "태양광",
  status: ["운영 중", "success"],
  img: "field",
  year: "2020"
}, {
  name: "해남 ESS 연계",
  cap: "120",
  region: "전라남도 해남",
  type: "ESS",
  status: ["운영 중", "success"],
  img: "solar",
  year: "2022"
}, {
  name: "포항 산업단지 발전",
  cap: "58",
  region: "경상북도 포항",
  type: "지붕형",
  status: ["개발 단계", "brand"],
  img: "dawn",
  year: "2028"
}];
const FILTERS = ["전체", "태양광", "해상태양광", "지붕형", "ESS"];
function Projects() {
  const [filter, setFilter] = React.useState("전체");
  const list = filter === "전체" ? PROJECTS : PROJECTS.filter(p => p.type === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.SECTION,
      paddingTop: 64,
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    eyebrow: "\uD504\uB85C\uC81D\uD2B8 / Projects",
    title: "\uC804\uAD6D 86\uAC74, 1.2GW\uC758 \uBC1C\uC804 \uC790\uC0B0",
    lead: "\uAC1C\uBC1C\uBD80\uD130 \uC6B4\uC601\uAE4C\uC9C0 \uC9C1\uC811 \uC218\uD589\uD55C \uD0DC\uC591\uAD11 \uBC1C\uC804 \uD504\uB85C\uC81D\uD2B8\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4."
  }))), /*#__PURE__*/React.createElement("section", {
    style: window.SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 36
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f),
    style: {
      cursor: "pointer"
    }
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, list.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true,
    padding: "0",
    elevation: "md",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(window.Img, {
    variant: p.img,
    label: p.region,
    height: 180,
    radius: "0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.status[1],
    variant: "solid"
  }, p.status[0]))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-subtle)",
      marginBottom: 8
    }
  }, p.type, " \xB7 ", p.year), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h4)",
      marginBottom: 14
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontFamily: "var(--font-data)",
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-bold)",
      color: "var(--brand-primary)",
      lineHeight: 1
    }
  }, p.cap, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body)",
      marginLeft: 3
    }
  }, "MW")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, "\uC124\uBE44 \uC6A9\uB7C9")), /*#__PURE__*/React.createElement("span", {
    className: "sd-arrowlink",
    style: {
      color: "var(--text-link)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)"
    }
  }, "\uC0C1\uC138\uBCF4\uAE30 ", window.Icon("arrow-right", 15, "var(--text-link)"))))))), list.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      padding: "40px 0"
    }
  }, "\uD574\uB2F9 \uC720\uD615\uC758 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.") : null));
}
Object.assign(window, {
  Projects
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/lib.jsx
try { (() => {
/* SD Energy website UI kit — shared building blocks.
   Exposes helpers on window for the screen files + index shell. */

const {
  Eyebrow
} = window.SDEnergyDesignSystem_db7406;

/* Lucide icon -> inline SVG span */
function Icon(name, size = 22, color = "currentColor", stroke = 2) {
  const node = window.lucide && window.lucide[name];
  if (!node) return null;
  const el = window.lucide.createElement(node);
  el.setAttribute("width", size);
  el.setAttribute("height", size);
  el.setAttribute("stroke", color);
  el.setAttribute("stroke-width", stroke);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    },
    dangerouslySetInnerHTML: {
      __html: el.outerHTML
    }
  });
}

/* On-brand image placeholder. `variant`: solar | field | navy | soft.
   Represents photography slots without fabricating photos. */
function Img({
  variant = "solar",
  label = "Image",
  height = "100%",
  radius = "var(--radius-lg)",
  style = {}
}) {
  const bgs = {
    solar: "linear-gradient(135deg,#1F3A5F 0%,#294265 45%,#FF7A1A 130%)",
    field: "linear-gradient(160deg,#294265 0%,#33517D 60%,#1F9D5A 140%)",
    navy: "var(--gradient-navy)",
    soft: "linear-gradient(160deg,#FFF4EB 0%,#FFE4CC 100%)",
    dawn: "var(--gradient-dawn)"
  };
  const isSoft = variant === "soft";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height,
      background: bgs[variant] || bgs.solar,
      borderRadius: radius,
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: isSoft ? 0.25 : 0.16,
      backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
      backgroundSize: "34px 22px",
      transform: "perspective(520px) rotateX(52deg) scale(1.5)",
      transformOrigin: "bottom",
      maskImage: "linear-gradient(to top,#000 30%,transparent 85%)",
      WebkitMaskImage: "linear-gradient(to top,#000 30%,transparent 85%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 14,
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-wide)",
      color: isSoft ? "var(--navy-600)" : "rgba(255,255,255,0.82)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, Icon("image", 14, isSoft ? "var(--navy-500)" : "rgba(255,255,255,0.7)"), label));
}

/* Section heading block: eyebrow + title + optional lead */
function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
  eyebrowColor,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: align === "center" ? 720 : 640,
      margin: align === "center" ? "0 auto" : 0,
      textAlign: align,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(Eyebrow, {
    color: eyebrowColor,
    align: align
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      marginTop: 16,
      marginBottom: lead ? 16 : 0,
      letterSpacing: "var(--ls-tighter)"
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-relaxed)"
    }
  }, lead) : null);
}
const SECTION = {
  maxWidth: "var(--container-xl)",
  margin: "0 auto",
  padding: "var(--section-y) var(--gutter)"
};
Object.assign(window, {
  Icon,
  Img,
  SectionHead,
  SECTION
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/lib.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
