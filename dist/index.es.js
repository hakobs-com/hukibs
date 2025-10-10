var dt = Object.defineProperty;
var It = (t, r, a) => r in t ? dt(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var Ge = (t, r, a) => It(t, typeof r != "symbol" ? r + "" : r, a);
import { defineComponent as B, computed as w, ref as H, watchEffect as at, createElementBlock as c, openBlock as i, mergeProps as ie, useSlots as me, watch as re, createBlock as g, resolveDynamicComponent as q, withCtx as X, createElementVNode as T, createCommentVNode as E, normalizeClass as l, unref as o, createVNode as F, renderSlot as y, normalizeStyle as V, toDisplayString as f, resolveComponent as mt, Fragment as k, renderList as G, createTextVNode as K, onMounted as le, onUnmounted as Oe, withModifiers as ce, provide as ye, inject as Te, mergeModels as $, useModel as Z, withDirectives as we, vModelDynamic as Et, nextTick as ke, vModelSelect as Rt, vModelCheckbox as rt, vModelRadio as At, withKeys as Tt, reactive as pt, markRaw as ue, Teleport as ot, createSlots as _t, TransitionGroup as Ot } from "vue";
var wt = Object.defineProperty, ft = Object.defineProperties, Lt = Object.getOwnPropertyDescriptors, Xe = Object.getOwnPropertySymbols, ht = Object.prototype.hasOwnProperty, Ct = Object.prototype.propertyIsEnumerable, Ke = (t, r, a) => r in t ? wt(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, ne = (t, r) => {
  for (var a in r || (r = {}))
    ht.call(r, a) && Ke(t, a, r[a]);
  if (Xe)
    for (var a of Xe(r))
      Ct.call(r, a) && Ke(t, a, r[a]);
  return t;
}, fe = (t, r) => ft(t, Lt(r)), St = (t) => t === "" ? "" : t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([\d])([a-zA-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), Dt = (t) => !isNaN(t) && typeof t == "number", He = (t) => typeof t == "object" && !Array.isArray(t), de = (t) => typeof t == "object" && Array.isArray(t) && !He(t), De = (t) => {
  if (!Array.isArray(t) || t.length === 0)
    return !1;
  for (let r = 0; r < t.length; r++)
    if (typeof t[r] != "string")
      return !1;
  return !0;
}, Q = (t) => typeof t == "string", nt = (t) => t == null, pe = (t) => De(t) ? t : Q(t) ? [t] : [], it = (t) => {
  const r = t.map((a) => a && typeof a == "string" && a.includes(" ") ? it(a.split(" ")) : (a && typeof a == "string" ? a.trim() : null) || "").flat().filter((a) => a !== "");
  return [...new Set(r)];
}, vt = (t) => t == null ? !0 : t !== void 0 ? !!t : !1, gt = (t) => typeof t == "boolean", ve = {
  ARRAY: "array"
}, ae = {
  STRING: "string",
  ARRAY: "array",
  OBJECT: "object",
  NONE: "none",
  FALSE: "false"
}, Nt = (t) => Q(t) ? t : "", bt = (t) => Q(t) || De(t) ? t : "", Se = (t) => {
  if (!He(t) || de(t) || Q(t) || nt(t))
    return !1;
  const r = [
    "b",
    "block",
    "e",
    "element",
    "m",
    "modifier",
    "s",
    "show"
  ];
  return ![
    ...new Set(Object.keys(t).find((s) => !r.includes(s)))
  ].length;
}, yt = (t) => !!(de(t) && Q(t[0]) && (De(t[1]) || Q(t[1]))), Bt = (t) => !Q(t) && t[2] !== void 0 && !t[2], kt = (t, r, a = {}) => {
  const s = [];
  return Ie(
    t,
    Nt(r[0]),
    bt(r[1]),
    fe(ne({}, a), { return: ve.ARRAY })
  ).forEach((d) => {
    s.push(d);
  }), s;
}, $e = (t, r, a = {}) => {
  const s = {
    block: t,
    element: "",
    modifier: ""
  };
  if (r.includes(":")) {
    const [n, d] = r.split(":");
    s.element = n, s.modifier = d;
  } else
    s.element = r;
  return Ie(s.block, s.element, s.modifier, fe(ne({}, a), {
    return: ve.ARRAY
  }));
}, Ht = (t, r, a = {}) => {
  if (r.show !== void 0 && !r.show || r.s !== void 0 && !r.s)
    return [];
  const s = (r == null ? void 0 : r.block) || r.b || t, n = {
    element: r.element || r.e || "",
    modifier: r.modifier || r.m || ""
  };
  return Ie(s, n.element, n.modifier, fe(ne({}, a), {
    return: ve.ARRAY
  }));
}, Pt = (t) => nt(t) ? ae.NONE : Q(t) ? ae.STRING : (de(t) && t.length < 2 || yt(t)) && !Bt(t) ? ae.ARRAY : Se(t) ? ae.OBJECT : ae.FALSE, Ut = (t, r = {}) => (...s) => {
  const n = Q(t) ? [t] : t;
  let d = [];
  return n.forEach((u) => {
    (s.length == 0 || s[0] == null || s[0] == "") && d.push(
      ...Ie(u, "", "", { return: ve.ARRAY })
    ), s.forEach((m, I) => {
      switch (Pt(m)) {
        case ae.NONE:
          d.push(...$e(u, "", r));
          break;
        case ae.STRING:
          d.push(...$e(u, m, r));
          break;
        case ae.ARRAY:
          d.push(...kt(u, m, r));
          break;
        case ae.OBJECT:
          d.push(...Ht(u, m, r));
          break;
      }
    });
  }), Pe({ classes: it(d), settings: r });
}, Ae = {
  ARRAY: "array",
  STRING: "string",
  AUTO: "auto"
}, lt = (t, r, a) => {
  const s = (t == null ? void 0 : t.show) !== void 0 ? t == null ? void 0 : t.show : gt(a.show) ? a.show : !0;
  let n = {
    element: a.element,
    modifier: a.modifier,
    show: s
  };
  if ((Q(t) || De(t)) && Q(r))
    n = {
      element: t,
      modifier: r,
      show: s
    };
  else if (Se(t)) {
    const d = t;
    n = {
      element: d.element,
      modifier: d.modifier,
      show: s
    };
  }
  return n;
}, st = (t) => {
  let r = ne({
    modifier: "--",
    element: "__"
  }, t.prefix);
  return fe(ne({
    toKebabCase: !0,
    return: Ae.AUTO,
    includeBaseClass: !1
  }, t), {
    prefix: r
  });
}, Pe = (t) => {
  const r = Array.from(new Set(t.classes.filter((a) => a !== "")));
  switch (t.settings.return) {
    case Ae.STRING:
      return r.join(" ");
    case Ae.ARRAY:
      return r;
    default:
    case Ae.AUTO:
      return r.length == 1 ? r[0] : r;
  }
}, Le = (t, r) => (r.toKebabCase && (t = St(t)), t), Mt = (t) => t.element == null || t.element == "" || t.element.length == 0 ? Le(t.block, t.settings) : pe(t.element).map((r) => {
  var a;
  return `${Le(t.block, t.settings)}${(a = t.settings.prefix) == null ? void 0 : a.element}${Le(r, t.settings)}`;
}).join(" "), he = (t) => {
  var r;
  return t.modifier == null || t.modifier == "" ? t.elementClass : `${t.elementClass}${(r = t.settings.prefix) == null ? void 0 : r.modifier}${Le(
    t.modifier,
    t.settings
  )}`;
}, Ft = (t) => {
  const r = [];
  return t.modifier.forEach((a) => {
    r.push(he({
      elementClass: t.elementClass,
      modifier: a,
      settings: t.settings
    }));
  }), r;
}, Wt = (t) => {
  const r = [];
  return Object.keys(t.modifier).forEach((a) => {
    const s = !!t.modifier[a];
    if (!a.includes("|"))
      r.push(
        he({
          elementClass: t.elementClass,
          modifier: s ? a : null,
          settings: t.settings
        })
      );
    else if (Dt(t.modifier[a])) {
      const n = t.modifier[a], u = a.split("|")[n] || "";
      r.push(
        he({
          elementClass: t.elementClass,
          modifier: u,
          settings: t.settings
        })
      );
    } else {
      const n = a.split("|")[0], d = a.split("|")[1];
      r.push(
        he({
          elementClass: t.elementClass,
          modifier: s ? n : d,
          settings: t.settings
        })
      );
    }
  }), r;
}, Ie = (t, r = "", a = "", s) => {
  if (t == "")
    return [];
  const { modifier: n } = lt(r, a, {
    element: r,
    modifier: a
  }), d = st(s), u = [];
  return pe(r).forEach((m) => {
    const I = Mt({
      block: t,
      element: m,
      settings: d
    });
    switch (d.includeBaseClass && u.push(I), !0) {
      case Q(n):
      case de(n):
        u.push(...Ft({
          elementClass: I,
          modifier: pe(n),
          settings: d
        }));
        break;
      case He(n):
        u.push(...Wt({ elementClass: I, modifier: n, settings: d }));
        break;
      default:
        u.push(I);
    }
  }), Pe({ classes: u, settings: d });
}, W = (t, r = {}) => {
  const a = (n = "", d = "", u = r) => {
    const m = st(ne(ne({}, r), u));
    if (Q(n) && de(n) && n !== null && !vt(n == null ? void 0 : n.show))
      return "";
    let I = [];
    const { element: p, modifier: R, show: A } = lt(n, d, {
      element: Se(n) ? n.element : n,
      modifier: Se(n) ? n.modifier : d
    });
    switch (!0) {
      case Q(t):
        I = Ie(
          t,
          p,
          R,
          fe(ne({}, m), {
            return: Ae.ARRAY
          })
        );
        break;
      case de(t):
        I = pe(t).flatMap(
          (_) => pe(n).map((D) => Ie(_, D, d, m)).flat()
        ).flat();
        break;
    }
    return A ? Pe({
      classes: I,
      settings: m
    }) : "";
  }, s = a;
  return s.bemm = a, s.classes = Ut(t, r), s;
}, z = {
  ANIMAL_STEP: "animal-step",
  BUTTERFLY: "butterfly",
  CAT_HEAD: "cat-head",
  CAT_HEAD2: "cat-head2",
  CAT: "cat",
  CAT2: "cat2",
  CAT3: "cat3",
  FISH: "fish",
  FISH2: "fish2",
  JELLYFISH: "jellyfish",
  LOBSTER: "lobster",
  PUFFERFISH: "pufferfish",
  SEA_STAR: "sea-star",
  SQUID: "squid",
  STINGRAY: "stingray",
  TURTLE: "turtle",
  WHALE: "whale",
  ICON24: "icon24",
  ARROW_CORNER_DOWN: "arrow-corner-down",
  ARROW_CORNER_LEFT: "arrow-corner-left",
  ARROW_CORNER_RIGHT: "arrow-corner-right",
  ARROW_CORNER_UP: "arrow-corner-up",
  ARROW_DIAGONAL_BL_TR_STOP: "arrow-diagonal-bl-tr-stop",
  ARROW_DIAGONAL_BR_TL_STOP: "arrow-diagonal-br-tl-stop",
  ARROW_DIAGONAL_IN_LT_BR: "arrow-diagonal-in-lt-br",
  ARROW_DIAGONAL_IN_TR_BL: "arrow-diagonal-in-tr-bl",
  ARROW_DIAGONAL_TL_BR_SPLIT: "arrow-diagonal-tl-br-split",
  ARROW_DIAGONAL_TL_BR_STOP: "arrow-diagonal-tl-br-stop",
  ARROW_DIAGONAL_TL_BR: "arrow-diagonal-tl-br",
  ARROW_DIAGONAL_TR_BL_SPLIT: "arrow-diagonal-tr-bl-split",
  ARROW_DIAGONAL_TR_BL_STOP: "arrow-diagonal-tr-bl-stop",
  ARROW_DIAGONAL_TR_BL: "arrow-diagonal-tr-bl",
  ARROW_DOWN_COPY: "arrow-down-copy",
  ARROW_DOWN_LEFT: "arrow-down-left",
  ARROW_DOWN_RIGHT: "arrow-down-right",
  ARROW_DOWN: "arrow-down",
  ARROW_DOWNLOAD: "arrow-download",
  ARROW_HEADED_CORNER_DOWN: "arrow-headed-corner-down",
  ARROW_HEADED_CORNER_LEFT: "arrow-headed-corner-left",
  ARROW_HEADED_CORNER_RIGHT: "arrow-headed-corner-right",
  ARROW_HEADED_CORNER_UP: "arrow-headed-corner-up",
  ARROW_HEADED_DIAGONAL_BL_TR_STOP: "arrow-headed-diagonal-bl-tr-stop",
  ARROW_HEADED_DIAGONAL_BR_TL_STOP: "arrow-headed-diagonal-br-tl-stop",
  ARROW_HEADED_DIAGONAL_IN_LT_BR: "arrow-headed-diagonal-in-lt-br",
  ARROW_HEADED_DIAGONAL_IN_TR_BL: "arrow-headed-diagonal-in-tr-bl",
  ARROW_HEADED_DIAGONAL_TL_BR_SPLIT: "arrow-headed-diagonal-tl-br-split",
  ARROW_HEADED_DIAGONAL_TL_BR_STOP: "arrow-headed-diagonal-tl-br-stop",
  ARROW_HEADED_DIAGONAL_TL_BR: "arrow-headed-diagonal-tl-br",
  ARROW_HEADED_DIAGONAL_TR_BL_SPLIT: "arrow-headed-diagonal-tr-bl-split",
  ARROW_HEADED_DIAGONAL_TR_BL_STOP: "arrow-headed-diagonal-tr-bl-stop",
  ARROW_HEADED_DIAGONAL_TR_BL: "arrow-headed-diagonal-tr-bl",
  ARROW_HEADED_DOWN_LEFT: "arrow-headed-down-left",
  ARROW_HEADED_DOWN_RIGHT: "arrow-headed-down-right",
  ARROW_HEADED_DOWN_STOP: "arrow-headed-down-stop",
  ARROW_HEADED_DOWN: "arrow-headed-down",
  ARROW_HEADED_DOWNLOAD: "arrow-headed-download",
  ARROW_HEADED_IN_CENTER: "arrow-headed-in-center",
  ARROW_HEADED_IN_DIAGONAL: "arrow-headed-in-diagonal",
  ARROW_HEADED_IN: "arrow-headed-in",
  ARROW_HEADED_LEFT_RIGHT_SPLIT: "arrow-headed-left-right-split",
  ARROW_HEADED_LEFT_RIGHT_STOP: "arrow-headed-left-right-stop",
  ARROW_HEADED_LEFT_RIGHT: "arrow-headed-left-right",
  ARROW_HEADED_LEFT_STOP: "arrow-headed-left-stop",
  ARROW_HEADED_LEFT: "arrow-headed-left",
  ARROW_HEADED_OUT_CENTER: "arrow-headed-out-center",
  ARROW_HEADED_RELOAD_DOWN_UP: "arrow-headed-reload-down-up",
  ARROW_HEADED_RELOAD_LEFT_RIGHT: "arrow-headed-reload-left-right",
  ARROW_HEADED_RELOAD_RIGHT_LEFT: "arrow-headed-reload-right-left",
  ARROW_HEADED_RELOAD_UP_DOWN: "arrow-headed-reload-up-down",
  ARROW_HEADED_RETURN_DOWN: "arrow-headed-return-down",
  ARROW_HEADED_RETURN_LEFT: "arrow-headed-return-left",
  ARROW_HEADED_RETURN_RIGHT: "arrow-headed-return-right",
  ARROW_HEADED_RETURN_UP: "arrow-headed-return-up",
  ARROW_HEADED_RIGHT: "arrow-headed-right",
  ARROW_HEADED_ROTATE_BOTTOM_LEFT: "arrow-headed-rotate-bottom-left",
  ARROW_HEADED_ROTATE_BOTTOM_RIGHT: "arrow-headed-rotate-bottom-right",
  ARROW_HEADED_ROTATE_TOP_LEFT: "arrow-headed-rotate-top-left",
  ARROW_HEADED_ROTATE_TOP_RIGHT: "arrow-headed-rotate-top-right",
  ARROW_HEADED_ROUNDED_LEFT_UP: "arrow-headed-rounded-left-up",
  ARROW_HEADED_ROUNDED_RIGHT_DOWN: "arrow-headed-rounded-right-down",
  ARROW_HEADED_ROUNDED_RIGHT_UP: "arrow-headed-rounded-right-up",
  ARROW_HEADED_ROUNED_LEFT_DOWN: "arrow-headed-rouned-left-down",
  ARROW_HEADED_SHARE: "arrow-headed-share",
  ARROW_HEADED_SPREAD_SPLIT: "arrow-headed-spread-split",
  ARROW_HEADED_SPREAD: "arrow-headed-spread",
  ARROW_HEADED_TWOWAY_DIAGONAL_LR: "arrow-headed-twoway-diagonal-lr",
  ARROW_HEADED_TWOWAY_DIAGONAL_RL: "arrow-headed-twoway-diagonal-rl",
  ARROW_HEADED_TWOWAY_HORIZONTAL: "arrow-headed-twoway-horizontal",
  ARROW_HEADED_TWOWAY_VERTICAL: "arrow-headed-twoway-vertical",
  ARROW_HEADED_UP_DOWN_SPLIT: "arrow-headed-up-down-split",
  ARROW_HEADED_UP_DOWN_STOP: "arrow-headed-up-down-stop",
  ARROW_HEADED_UP_DOWN: "arrow-headed-up-down",
  ARROW_HEADED_UP_LEFT: "arrow-headed-up-left",
  ARROW_HEADED_UP_RIGHT: "arrow-headed-up-right",
  ARROW_HEADED_UP_STOP76: "arrow-headed-up-stop76",
  ARROW_HEADED_UP_STOP78: "arrow-headed-up-stop78",
  ARROW_HEADED_UP: "arrow-headed-up",
  ARROW_HEADED_UPLOAD: "arrow-headed-upload",
  ARROW_IN_CENTER: "arrow-in-center",
  ARROW_INVERT: "arrow-invert",
  ARROW_LEFT_RIGHT_SPLIT: "arrow-left-right-split",
  ARROW_LEFT_RIGHT_STOP: "arrow-left-right-stop",
  ARROW_LEFT_RIGHT: "arrow-left-right",
  ARROW_LEFT_STOP: "arrow-left-stop",
  ARROW_LEFT: "arrow-left",
  ARROW_OUT_CENTER: "arrow-out-center",
  ARROW_RELOAD_DOWN_UP: "arrow-reload-down-up",
  ARROW_RELOAD_LEFT_RIGHT: "arrow-reload-left-right",
  ARROW_RELOAD_RIGHT_LEFT: "arrow-reload-right-left",
  ARROW_RELOAD_UP_DOWN: "arrow-reload-up-down",
  ARROW_RETURN_DOWN: "arrow-return-down",
  ARROW_RETURN_LEFT: "arrow-return-left",
  ARROW_RETURN_RIGHT: "arrow-return-right",
  ARROW_RETURN_UP: "arrow-return-up",
  ARROW_RIGHT_STOP: "arrow-right-stop",
  ARROW_RIGHT: "arrow-right",
  ARROW_ROATE_BOTTOM_RIGHT: "arrow-roate-bottom-right",
  ARROW_ROTATE_BOTTOM_LEFT: "arrow-rotate-bottom-left",
  ARROW_ROTATE_TOP_LEFT: "arrow-rotate-top-left",
  ARROW_ROTATE_TOP_RIGHT: "arrow-rotate-top-right",
  ARROW_ROUNDED_LEFT_DOWN: "arrow-rounded-left-down",
  ARROW_ROUNDED_LEFT_UP: "arrow-rounded-left-up",
  ARROW_ROUNDED_RIGHT_DOWN: "arrow-rounded-right-down",
  ARROW_ROUNDED_RIGHT_UP: "arrow-rounded-right-up",
  ARROW_SHARE: "arrow-share",
  ARROW_SPREAD_SPLIT: "arrow-spread-split",
  ARROW_SPREAD: "arrow-spread",
  ARROW_THICK_BOTTOM_LEFT: "arrow-thick-bottom-left",
  ARROW_THICK_DOWN: "arrow-thick-down",
  ARROW_THICK_LEFT_TOP: "arrow-thick-left-top",
  ARROW_THICK_LEFT: "arrow-thick-left",
  ARROW_THICK_RIGHT_BOTTOM: "arrow-thick-right-bottom",
  ARROW_THICK_RIGHT: "arrow-thick-right",
  ARROW_THICK_TALL_BOTTOM_LEFT: "arrow-thick-tall-bottom-left",
  ARROW_THICK_TALL_DOWN: "arrow-thick-tall-down",
  ARROW_THICK_TALL_LEFT_TOP: "arrow-thick-tall-left-top",
  ARROW_THICK_TALL_LEFT: "arrow-thick-tall-left",
  ARROW_THICK_TALL_RIGHT_BOTTOM: "arrow-thick-tall-right-bottom",
  ARROW_THICK_TALL_RIGHT: "arrow-thick-tall-right",
  ARROW_THICK_TALL_TOP_RIGHT: "arrow-thick-tall-top-right",
  ARROW_THICK_TALL_UP: "arrow-thick-tall-up",
  ARROW_THICK_TOP_RIGHT: "arrow-thick-top-right",
  ARROW_THICK_UP: "arrow-thick-up",
  ARROW_THICK_WIDE_BOTTOM_LEFT: "arrow-thick-wide-bottom-left",
  ARROW_THICK_WIDE_DOWN: "arrow-thick-wide-down",
  ARROW_THICK_WIDE_LEFT_TOP: "arrow-thick-wide-left-top",
  ARROW_THICK_WIDE_LEFT: "arrow-thick-wide-left",
  ARROW_THICK_WIDE_RIGHT_BOTTOM: "arrow-thick-wide-right-bottom",
  ARROW_THICK_WIDE_RIGHT: "arrow-thick-wide-right",
  ARROW_THICK_WIDE_TOP_RIGHT: "arrow-thick-wide-top-right",
  ARROW_THICK_WIDE_UP: "arrow-thick-wide-up",
  ARROW_TRANSFER_BL_TR: "arrow-transfer-bl-tr",
  ARROW_TRANSFER_LEFT_RIGHT: "arrow-transfer-left-right",
  ARROW_TRANSFER_LT_BR: "arrow-transfer-lt-br",
  ARROW_TRANSFER_UP_DOWN: "arrow-transfer-up-down",
  ARROW_TWOWAY_DIAGONAL_LR: "arrow-twoway-diagonal-lr",
  ARROW_TWOWAY_DIAGONAL_RL: "arrow-twoway-diagonal-rl",
  ARROW_TWOWAY_HORIZONTAL: "arrow-twoway-horizontal",
  ARROW_TWOWAY_VERTICAL: "arrow-twoway-vertical",
  ARROW_UP_COPY: "arrow-up-copy",
  ARROW_UP_DOWN_SPLIT: "arrow-up-down-split",
  ARROW_UP_DOWN_STOP: "arrow-up-down-stop",
  ARROW_UP_DOWN: "arrow-up-down",
  ARROW_UP_LEFT: "arrow-up-left",
  ARROW_UP_RIGHT: "arrow-up-right",
  ARROW_UP: "arrow-up",
  ARROW_UPLOAD: "arrow-upload",
  CHEVRON_CONNECT2: "chevron-connect2",
  CHEVRON_CONNECT: "chevron-connect",
  CHEVRON_DISCONNECT2: "chevron-disconnect2",
  CHEVRON_DISCONNECT: "chevron-disconnect",
  CHEVRON_DOUBLE_DOWN: "chevron-double-down",
  CHEVRON_DOUBLE_LEFT: "chevron-double-left",
  CHEVRON_DOUBLE_RIGHT: "chevron-double-right",
  CHEVRON_DOUBLE_UP: "chevron-double-up",
  CHEVRON_DOWN: "chevron-down",
  CHEVRON_LEFT: "chevron-left",
  CHEVRON_RIGHT: "chevron-right",
  CHEVRON_UP: "chevron-up",
  ICON01: "icon01",
  BOTTLE: "bottle",
  BOTTLES: "bottles",
  BREAD_SLICE: "bread-slice",
  COFFEE_CUP: "coffee-cup",
  COFFEE_MACHINE: "coffee-machine",
  COFFEE_BEANS: "coffee-beans",
  COGNAC_GLASS: "cognac-glass",
  ESPRESS_MACHINE2: "espress-machine2",
  ESPRESSO_MACHINE_E61: "espresso-machine-e61",
  ESPRESSO_MACHINE: "espresso-machine",
  ESPRESSO_PISTOL: "espresso-pistol",
  HAMBURGER: "hamburger",
  PERCULATOR: "perculator",
  WINE_GLASS: "wine-glass",
  ALARM_BELL2: "alarm-bell2",
  ALARM_BELL3: "alarm-bell3",
  ALARM_BELL: "alarm-bell",
  ART_SUPPLIES: "art-supplies",
  AUDIO_WAVES: "audio-waves",
  BLUETOOTH: "bluetooth",
  CAMERA: "camera",
  CLIPBOARD: "clipboard",
  COLOR_PALLETTE: "color-pallette",
  COLOR_RGB: "color-rgb",
  COLOR_SWATCHES: "color-swatches",
  DESKTOP: "desktop",
  FILMROLL: "filmroll",
  GAMEPAD_CLASSIC: "gamepad-classic",
  GAMEPAD: "gamepad",
  HEADPHONES: "headphones",
  HIGHLIGHT: "highlight",
  IMAGE: "image",
  JOYSTICK: "joystick",
  LAPTOP: "laptop",
  MAIL_OPEN: "mail-open",
  MAIL: "mail",
  MEDIA: "media",
  MICROPHONE: "microphone",
  MUSIC_NOTE_SINGLE: "music-note-single",
  MUSIC_NOTE: "music-note",
  NES_CONTROLLER: "nes-controller",
  PACMAN: "pacman",
  PAINT_ROLLER: "paint-roller",
  PAPERPLANE: "paperplane",
  PLAYBACK_BACKWARD: "playback-backward",
  PLAYBACK_END: "playback-end",
  PLAYBACK_FORWARD: "playback-forward",
  PLAYBACK_NEXT: "playback-next",
  PLAYBACK_PAUSE: "playback-pause",
  PLAYBACK_PLAY: "playback-play",
  PLAYBACK_PREVIOUS: "playback-previous",
  PLAYBACK_START: "playback-start",
  PLAYBACK_STOP: "playback-stop",
  PRINTER: "printer",
  RECORD: "record",
  REELS: "reels",
  TABLET_LANDSCAPE: "tablet-landscape",
  TABLET: "tablet",
  TELEVISION: "television",
  TERMINAL: "terminal",
  VIDEO_CAMERA: "video-camera",
  VIDEOS: "videos",
  VOLUME_I: "volume-i",
  VOLUME_II: "volume-ii",
  VOLUME_III: "volume-iii",
  VOLUME_MUTE: "volume-mute",
  VOLUME_OFF: "volume-off",
  WEBSITE: "website",
  WIFI2: "wifi2",
  WIFI3: "wifi3",
  WIFI_ROUNDED: "wifi-rounded",
  WIFI: "wifi",
  AI_FACE: "ai-face",
  AI_LETTERS_BLOCKED: "ai-letters-blocked",
  AI_LETTERS_CIRCLED: "ai-letters-circled",
  AI_LETTERS: "ai-letters",
  AFRAME: "aframe",
  ARTWORK_FRAME: "artwork-frame",
  BARBECUE: "barbecue",
  BATHROOM_ESSENTIALS: "bathroom-essentials",
  BINOCULARS: "binoculars",
  BLENDER: "blender",
  BOOKCASE: "bookcase",
  BRAIN: "brain",
  BRANCH2: "branch2",
  BRANCH3: "branch3",
  BRANCH: "branch",
  BULB: "bulb",
  CACTUS: "cactus",
  CAMPER: "camper",
  CARAVAN: "caravan",
  CHIP: "chip",
  CLEANING_BUCKET: "cleaning-bucket",
  CLEANING_SPRAY: "cleaning-spray",
  CLOSET: "closet",
  COINS: "coins",
  COMPASS2: "compass2",
  COMPASS: "compass",
  CUBE3D: "cube3d",
  EDUCATION: "education",
  FACTORY_ARM: "factory-arm",
  FACTORY_BELT: "factory-belt",
  FACTORY: "factory",
  FINGERPRINT: "fingerprint",
  FIRE: "fire",
  FRIDGE: "fridge",
  FURNITURE_BED2: "furniture-bed2",
  FURNITURE_BED_KING2: "furniture-bed-king2",
  FURNITURE_BED_KING: "furniture-bed-king",
  FURNITURE_BED_SINGLE2: "furniture-bed-single2",
  FURNITURE_BED_SINGLE: "furniture-bed-single",
  FURNITURE_BED: "furniture-bed",
  FURNITURE_BEDSIDE_TABLE: "furniture-bedside-table",
  FURNITURE_CHAIR2: "furniture-chair2",
  FURNITURE_CHAIR3: "furniture-chair3",
  FURNITURE_CHAIR4: "furniture-chair4",
  FURNITURE_CHAIR: "furniture-chair",
  FURNITURE_COUCH2: "furniture-couch2",
  FURNITURE_COUCH3: "furniture-couch3",
  FURNITURE_COUCH4: "furniture-couch4",
  FURNITURE_COUCH: "furniture-couch",
  FURNITURE_DESK: "furniture-desk",
  FURNITURE_DRESSOIR: "furniture-dressoir",
  GRAPH_UP_ROUND: "graph-up-round",
  GRAPH_UP: "graph-up",
  HAIRDRYER: "hairdryer",
  HILL_LANDSCAPE: "hill-landscape",
  IDEA_FACTORY: "idea-factory",
  INDUSTRY3: "industry3",
  IRON: "iron",
  KITCHEN_CUTLERY: "kitchen-cutlery",
  KITCHEN_UTENSILS: "kitchen-utensils",
  LAKE_VIEW: "lake-view",
  LEAF2: "leaf2",
  LEAF3: "leaf3",
  LEAF: "leaf",
  LEAFS: "leafs",
  LIQUID_SOAP2: "liquid-soap2",
  LIQUID_SOAP: "liquid-soap",
  LUXE_VILLA: "luxe-villa",
  MANSION: "mansion",
  MICROWAVE: "microwave",
  MONEY: "money",
  MONEYBAG: "moneybag",
  MOUNTAIN_SCAPE: "mountain-scape",
  OVEN: "oven",
  PLANT: "plant",
  POLITICIAN2: "politician2",
  POLITICIAN: "politician",
  ROCKET: "rocket",
  ROOM_SHADE: "room-shade",
  SHIELD2_LINE: "shield2-line",
  SHIELD2: "shield2",
  SHIELD3_LINE: "shield3-line",
  SHIELD3: "shield3",
  SHIELD4_LINE: "shield4-line",
  SHIELD4: "shield4",
  SHIELD_LINE: "shield-line",
  SHIELD: "shield",
  STOVE: "stove",
  SURFBOARD: "surfboard",
  SWIMMING_POOL: "swimming-pool",
  TEMPLE2: "temple2",
  TEMPLE: "temple",
  TENT_CAMPING: "tent-camping",
  TENT: "tent",
  TOY_BLOCKS2: "toy-blocks2",
  TOY_BLOCKS3: "toy-blocks3",
  TOY_BLOCKS: "toy-blocks",
  TOY_HEAD: "toy-head",
  TREE2: "tree2",
  TREE3: "tree3",
  TREE: "tree",
  TREEHOUSE: "treehouse",
  TREES2: "trees2",
  TREES: "trees",
  TRUNK1: "trunk1",
  TRUNK2: "trunk2",
  UFO: "ufo",
  VOTE: "vote",
  WALLET: "wallet",
  WASHING_MACHINE: "washing-machine",
  WATERCOOKER: "watercooker",
  YURT: "yurt",
  BABY_STROLLER: "baby-stroller",
  CLOTHING_TSHIRT: "clothing-tshirt",
  COTTON: "cotton",
  HOME_GARDEN: "home-garden",
  HYPOALLERGENIC: "hypoallergenic",
  NO_LEAKS: "no-leaks",
  SUITCASE_JOBS: "suitcase-jobs",
  SHOPPING_BAG2: "shopping-bag2",
  SHOPPING_BAG3: "shopping-bag3",
  SHOPPING_BAG_DISCOUNT: "shopping-bag-discount",
  SHOPPING_BAG: "shopping-bag",
  SHOPPING_BASKET_ROUNDED: "shopping-basket-rounded",
  SHOPPING_BASKET: "shopping-basket",
  SHOPPING_CART_FAST: "shopping-cart-fast",
  SHOPPING_CART: "shopping-cart",
  SHOPPING_LABEL: "shopping-label",
  SHOPPING_LABELS: "shopping-labels",
  ICON43: "icon43",
  BAHT_SYMBOL: "baht-symbol",
  DICE1: "dice1",
  DICE2: "dice2",
  DICE3: "dice3",
  DICE4: "dice4",
  DICE5: "dice5",
  DICE6: "dice6",
  DICE7: "dice7",
  DICE8: "dice8",
  DICE9: "dice9",
  DIGIT_DIGITAL1: "digit-digital1",
  DIGIT_DIGITAL2: "digit-digital2",
  DIGIT_DIGITAL3: "digit-digital3",
  DIGIT_DIGITAL4: "digit-digital4",
  DIGIT_DIGITAL5: "digit-digital5",
  DIGIT_DIGITAL6: "digit-digital6",
  DIGIT_DIGITAL7: "digit-digital7",
  DIGIT_DIGITAL8: "digit-digital8",
  DIGIT_DIGITAL9: "digit-digital9",
  DIGIT_DIGTAL0: "digit-digtal0",
  DOLLAR: "dollar",
  EURO: "euro",
  PERCENTAGE: "percentage",
  POUND_SYMBOL: "pound-symbol",
  PROMILLE: "promille",
  RUBLES_SYMBOL: "rubles-symbol",
  RUPEE_SYMBOL_COPY: "rupee-symbol-copy",
  RUPEE_SYMBOL: "rupee-symbol",
  SYMBOL_FEMALE: "symbol-female",
  SYMBOL_MALE: "symbol-male",
  SYMBOL_UNISEX: "symbol-unisex",
  THREE_DOTS_DIAGONAL_MAJOR: "three-dots-diagonal-major",
  THREE_DOTS_DIAGONAL_MINOR: "three-dots-diagonal-minor",
  THREE_DOTS_HORIZONTAL: "three-dots-horizontal",
  THREE_DOTS_LINES: "three-dots-lines",
  THREE_DOTS_VERTICAL: "three-dots-vertical",
  TWO_DOTS_DIAGONAL_MAJOR: "two-dots-diagonal-major",
  TWO_DOTS_DIAGONAL_MINOR: "two-dots-diagonal-minor",
  TWO_DOTS_HORIZONTAL: "two-dots-horizontal",
  TWO_DOTS_LINES: "two-dots-lines",
  TWO_DOTS_VERTICAL: "two-dots-vertical",
  YEN: "yen",
  BALL_BASKETBALL: "ball-basketball",
  BALL_FOOTBALL: "ball-football",
  BALL_RUGBY: "ball-rugby",
  BALL_TENNIS: "ball-tennis",
  ACCESSIBILITY_PERSON_CIRCLED: "accessibility-person-circled",
  ACCESSIBILITY_PERSON: "accessibility-person",
  ADD_FAT: "add-fat",
  ADD_L: "add-l",
  ADD_LINES: "add-lines",
  ADD_M: "add-m",
  ADD_S: "add-s",
  AT_SIGN: "at-sign",
  BLOCK_PARTIALS: "block-partials",
  BOARD_ADD2: "board-add2",
  BOARD_MULTI2_HORIZONTAL: "board-multi2-horizontal",
  BOARD_MULTI2_VERTICAL: "board-multi2-vertical",
  BOARD_MULTI_DASHBOARD: "board-multi-dashboard",
  BOARD_MULTI_T_DOWN: "board-multi-t-down",
  BOARD_MULTI_T_LEFT: "board-multi-t-left",
  BOARD_MULTI_T_RIGHT: "board-multi-t-right",
  BOARD_MULTI_T_UP: "board-multi-t-up",
  BOARD_MULTI: "board-multi",
  BOARD_MULTIPLY2: "board-multiply2",
  BOARD_SPLIT13_HORIZONTAL: "board-split13-horizontal",
  BOARD_SPLIT13_VERTICAL: "board-split13-vertical",
  BOARD_SPLIT2_HORIZONTAL: "board-split2-horizontal",
  BOARD_SPLIT2_VERTICAL: "board-split2-vertical",
  BOARD_SPLIT31_HORIZONTAL: "board-split31-horizontal",
  BOARD_SPLIT31_VERTICAL: "board-split31-vertical",
  BOARD_SPLIT3_HORIZONTAL: "board-split3-horizontal",
  BOARD_SPLIT3_VERTICAL: "board-split3-vertical",
  BOARD_SPLIT4_HORIZONTAL: "board-split4-horizontal",
  BOARD_SPLIT4_VERTICAL: "board-split4-vertical",
  BOARD_SPLIT_T_DOWN: "board-split-t-down",
  BOARD_SPLIT_T_LEFT: "board-split-t-left",
  BOARD_SPLIT_T_RIGHT: "board-split-t-right",
  BOARD_SPLIT_T_UP: "board-split-t-up",
  BOARD_SUBTRACT2: "board-subtract2",
  BOARD: "board",
  BOX_IN: "box-in",
  BOX_OUT: "box-out",
  BOX: "box",
  BOY: "boy",
  BROKEN_HEART_F: "broken-heart-f",
  BROKEN_HEART_L: "broken-heart-l",
  BROKEN_HEART_M: "broken-heart-m",
  BUILDING_CHURCH: "building-church",
  BUILDING_HOUSE2: "building-house2",
  BUILDING_HOUSE: "building-house",
  BUILDING_SHOP: "building-shop",
  BUTTON_ADD: "button-add",
  BUTTON_BROKEN_HEART2: "button-broken-heart2",
  BUTTON_BROKEN_HEART: "button-broken-heart",
  BUTTON_CHECK2: "button-check2",
  BUTTON_CHECK: "button-check",
  BUTTON_EDIT2: "button-edit2",
  BUTTON_EDIT: "button-edit",
  BUTTON_EXCLAMATION_MARK2: "button-exclamation-mark2",
  BUTTON_EXCLAMATION_MARK: "button-exclamation-mark",
  BUTTON_HEART2: "button-heart2",
  BUTTON_HEART: "button-heart",
  BUTTON_INFO2: "button-info2",
  BUTTON_INFO: "button-info",
  BUTTON_INVISIBLE2: "button-invisible2",
  BUTTON_INVISIBLE: "button-invisible",
  BUTTON_MULTIPLY: "button-multiply",
  BUTTON_QUESTION_MARK2: "button-question-mark2",
  BUTTON_QUESTION_MARK: "button-question-mark",
  BUTTON_SEARCH2: "button-search2",
  BUTTON_SEARCH: "button-search",
  BUTTON_STAR2: "button-star2",
  BUTTON_STAR: "button-star",
  BUTTON_SUBTRACT: "button-subtract",
  BUTTON_VISIBLE2: "button-visible2",
  BUTTON_VISIBLE: "button-visible",
  BUTTON: "button",
  CALENDAR2: "calendar2",
  CALENDAR: "calendar",
  CHART_BARS_SQUARED: "chart-bars-squared",
  CHART_BUBBLES: "chart-bubbles",
  CHART_CANDLES: "chart-candles",
  CHART_HALF_CIRCLE: "chart-half-circle",
  CHART_LINE_SQUARED: "chart-line-squared",
  CHART_LINE: "chart-line",
  CHART_PIE: "chart-pie",
  CHECK_FAT: "check-fat",
  CHECK_L: "check-l",
  CHECK_LIST: "check-list",
  CHECK_M: "check-m",
  CHECK_S: "check-s",
  CIRCLE_INVISIBLE: "circle-invisible",
  CIRCLE_SUBTRACT: "circle-subtract",
  CIRCLED_ADD: "circled-add",
  CIRCLED_BROKEN_HEART: "circled-broken-heart",
  CIRCLED_CHECK: "circled-check",
  CIRCLED_EDIT: "circled-edit",
  CIRCLED_EXCLAMATION_MARK: "circled-exclamation-mark",
  CIRCLED_HEART: "circled-heart",
  CIRCLED_INFO: "circled-info",
  CIRCLED_MULTIPLY: "circled-multiply",
  CIRCLED_QUESTION_MARK: "circled-question-mark",
  CIRCLED_SEARCH: "circled-search",
  CIRCLED_STAR: "circled-star",
  CIRCLED_VISIBLE: "circled-visible",
  CIRCLED: "circled",
  CIRCULAR_LOADER: "circular-loader",
  CLOCK: "clock",
  CODE_BRACKETS_CIRCLED: "code-brackets-circled",
  CODE_BRACKETS: "code-brackets",
  CODE_CHEVRONS_CIRCLED: "code-chevrons-circled",
  CODE_CHEVRONS_OPEN_CIRCLED: "code-chevrons-open-circled",
  CODE_CHEVRONS_OPEN: "code-chevrons-open",
  CODE_CHEVRONS: "code-chevrons",
  COMPANY: "company",
  DISLIKE: "dislike",
  EDIT_FAT: "edit-fat",
  EDIT_L: "edit-l",
  EDIT_LINE_SWIRL: "edit-line-swirl",
  EDIT_LINE: "edit-line",
  EDIT_M: "edit-m",
  EDIT_S: "edit-s",
  EXCLAMATION_MARK_FAT: "exclamation-mark-fat",
  EXCLAMATION_MARK_L: "exclamation-mark-l",
  EXCLAMATION_MARK_M: "exclamation-mark-m",
  EXCLAMATION_MARK_S: "exclamation-mark-s",
  FEMALE_SIMPLIFIED: "female-simplified",
  FILE_ADD267: "file-add267",
  FILE_ADD269: "file-add269",
  FILE_ADD: "file-add",
  FILE_ARCHIVE: "file-archive",
  FILE_ARROW_UP: "file-arrow-up",
  FILE_BINARY: "file-binary",
  FILE_BROKEN_HEART2: "file-broken-heart2",
  FILE_BROKEN_HEART: "file-broken-heart",
  FILE_CHECK2: "file-check2",
  FILE_CHECK: "file-check",
  FILE_CLOUD: "file-cloud",
  FILE_CODE: "file-code",
  FILE_COLUMNS: "file-columns",
  FILE_EDIT2: "file-edit2",
  FILE_EDIT: "file-edit",
  FILE_EXCLAMATION_MARK2: "file-exclamation-mark2",
  FILE_EXCLAMATION_MARK: "file-exclamation-mark",
  FILE_GRAPHS: "file-graphs",
  FILE_HEART2: "file-heart2",
  FILE_HEART: "file-heart",
  FILE_INFO2: "file-info2",
  FILE_INFO: "file-info",
  FILE_INVISIBLE2: "file-invisible2",
  FILE_INVISIBLE: "file-invisible",
  FILE_MULTIPLY: "file-multiply",
  FILE_QUESTION_MARK2: "file-question-mark2",
  FILE_QUESTION_MARK: "file-question-mark",
  FILE_SEARCH2: "file-search2",
  FILE_SEARCH: "file-search",
  FILE_STAR2: "file-star2",
  FILE_STAR: "file-star",
  FILE_SUBTRACT2: "file-subtract2",
  FILE_SUBTRACT: "file-subtract",
  FILE_TEXT: "file-text",
  FILE_TRAY_STACK: "file-tray-stack",
  FILE_TRAY: "file-tray",
  FILE_VISIBLE2: "file-visible2",
  FILE_VISIBLE: "file-visible",
  FILE: "file",
  FOLDER_ADD2: "folder-add2",
  FOLDER_ADD: "folder-add",
  FOLDER_BROKEN_HEART2: "folder-broken-heart2",
  FOLDER_BROKEN_HEART: "folder-broken-heart",
  FOLDER_CHECK2: "folder-check2",
  FOLDER_CHECK: "folder-check",
  FOLDER_EDIT2: "folder-edit2",
  FOLDER_EDIT: "folder-edit",
  FOLDER_EXCLAMATION_MARK2: "folder-exclamation-mark2",
  FOLDER_EXCLAMATION_MARK: "folder-exclamation-mark",
  FOLDER_HEART2: "folder-heart2",
  FOLDER_HEART: "folder-heart",
  FOLDER_INFO2: "folder-info2",
  FOLDER_INFO: "folder-info",
  FOLDER_INVISIBLE2: "folder-invisible2",
  FOLDER_INVISIBLE: "folder-invisible",
  FOLDER_MULTIPLY2: "folder-multiply2",
  FOLDER_MULTIPLY: "folder-multiply",
  FOLDER_QUESTION_MARK2: "folder-question-mark2",
  FOLDER_QUESTION_MARK: "folder-question-mark",
  FOLDER_SEARCH2: "folder-search2",
  FOLDER_SEARCH: "folder-search",
  FOLDER_STAR2: "folder-star2",
  FOLDER_STAR: "folder-star",
  FOLDER_SUBTRACT2: "folder-subtract2",
  FOLDER_SUBTRACT: "folder-subtract",
  FOLDER_VISIBLE2: "folder-visible2",
  FOLDER_VISIBLE: "folder-visible",
  FOLDER: "folder",
  GIRL: "girl",
  GIT_BRANCH: "git-branch",
  GIT_COMPARE: "git-compare",
  GIT_MERGE_QUEUE: "git-merge-queue",
  GIT_MERGE: "git-merge",
  GIT_PULL_REQUEST_CLOSED: "git-pull-request-closed",
  GIT_PULL_REQUEST_DRAFT: "git-pull-request-draft",
  GIT_PULL_REQUEST: "git-pull-request",
  GIT_REPO_FORK: "git-repo-fork",
  HEART_BROKEN_SMALL: "heart-broken-small",
  HEART_FAT: "heart-fat",
  HEART_L: "heart-l",
  HEART_M: "heart-m",
  HEART_SMALL: "heart-small",
  INFO_FAT: "info-fat",
  INFO_L: "info-l",
  INFO_M: "info-m",
  INFO_S: "info-s",
  INVISIBLE_FAT: "invisible-fat",
  INVISIBLE_L: "invisible-l",
  INVISIBLE_M: "invisible-m",
  INVISIBLE_S: "invisible-s",
  KEY_BACKSPACE: "key-backspace",
  KEY_DELETE: "key-delete",
  KEY_DOWN: "key-down",
  KEY_EJECT: "key-eject",
  KEY_ENTER: "key-enter",
  KEY_FUNCTION: "key-function",
  KEY_MAC_COMMAND: "key-mac-command",
  KEY_OPTION: "key-option",
  KEY_PAGE_DOWN: "key-page-down",
  KEY_PAGE_NEXT: "key-page-next",
  KEY_PAGE_UP: "key-page-up",
  KEY_PREVIOUS_UP: "key-previous-up",
  KEY_SHIFT: "key-shift",
  KEY_TAB: "key-tab",
  KEY_UP: "key-up",
  LIKE: "like",
  LINK: "link",
  LOADER_DOTS2: "loader-dots2",
  LOADER_DOTS: "loader-dots",
  MALE_SIMPLIFIED: "male-simplified",
  MOVING_BLOCK: "moving-block",
  MULTIPLY_FAT: "multiply-fat",
  MULTIPLY_L: "multiply-l",
  MULTIPLY_M: "multiply-m",
  MULTIPLY_S: "multiply-s",
  NOTE_ADD2: "note-add2",
  NOTE_ADD: "note-add",
  NOTE_BROKEN_HEART2: "note-broken-heart2",
  NOTE_BROKEN_HEART: "note-broken-heart",
  NOTE_CHECK2: "note-check2",
  NOTE_CHECK: "note-check",
  NOTE_EDIT2: "note-edit2",
  NOTE_EDIT: "note-edit",
  NOTE_EXCLAMATION_MARK2: "note-exclamation-mark2",
  NOTE_EXCLAMATION_MARK: "note-exclamation-mark",
  NOTE_HEART2: "note-heart2",
  NOTE_HEART: "note-heart",
  NOTE_INFO2: "note-info2",
  NOTE_INFO: "note-info",
  NOTE_INVISIBLE2: "note-invisible2",
  NOTE_INVISIBLE: "note-invisible",
  NOTE_MULTIPLY2: "note-multiply2",
  NOTE_MULTIPLY: "note-multiply",
  NOTE_QUESTION_MARK2: "note-question-mark2",
  NOTE_QUESTION_MARK: "note-question-mark",
  NOTE_SEARCH2: "note-search2",
  NOTE_SEARCH: "note-search",
  NOTE_STAR2: "note-star2",
  NOTE_STAR: "note-star",
  NOTE_SUBTRACT2: "note-subtract2",
  NOTE_SUBTRACT: "note-subtract",
  NOTE_VISIBLE2: "note-visible2",
  NOTE_VISIBLE: "note-visible",
  NOTE: "note",
  ON_TARGET: "on-target",
  PARAGRAPH: "paragraph",
  PERFORMANCE2: "performance2",
  PERFORMANCE: "performance",
  PIN_TILTED: "pin-tilted",
  PIN: "pin",
  PLANNER: "planner",
  POINTER_ARROW_LINE: "pointer-arrow-line",
  POINTER_ARROW: "pointer-arrow",
  POINTER_CROSS: "pointer-cross",
  POINTER_HAND: "pointer-hand",
  POINTER_LEFT: "pointer-left",
  POINTER_MOUSE: "pointer-mouse",
  POINTER_PEN: "pointer-pen",
  POINTER_TEXT: "pointer-text",
  QUESTION_MARK_FAT: "question-mark-fat",
  QUESTION_MARK_L: "question-mark-l",
  QUESTION_MARK_M: "question-mark-m",
  QUESTION_MARK_S: "question-mark-s",
  REMOVE_LINES: "remove-lines",
  SEARCH_FAT: "search-fat",
  SEARCH_L: "search-l",
  SEARCH_M: "search-m",
  SEARCH_SMALL: "search-small",
  SECTION: "section",
  SETTINGS2: "settings2",
  SETTINGS3: "settings3",
  SETTINGS4: "settings4",
  SETTINGS5: "settings5",
  SETTINGS: "settings",
  SPEECH_BALLOON2: "speech-balloon2",
  SPEECH_BALLOON_SQUARE2: "speech-balloon-square2",
  SPEECH_BALLOON_SQUARE_COPY: "speech-balloon-square-copy",
  SPEECH_BALLOON_SQUARE_TEXT: "speech-balloon-square-text",
  SPEECH_BALLOON_SQUARE: "speech-balloon-square",
  SPEECH_BALLOON: "speech-balloon",
  SPEECH_BALLOONS: "speech-balloons",
  SQUARED_ADD: "squared-add",
  SQUARED_BROKEN_HEART: "squared-broken-heart",
  SQUARED_CHECK: "squared-check",
  SQUARED_EDIT: "squared-edit",
  SQUARED_EXCLAMATION_MARK: "squared-exclamation-mark",
  SQUARED_HEART: "squared-heart",
  SQUARED_INFO: "squared-info",
  SQUARED_INVISIBLE: "squared-invisible",
  SQUARED_MULTIPLY: "squared-multiply",
  SQUARED_QUESTION_MARK: "squared-question-mark",
  SQUARED_SEARCH: "squared-search",
  SQUARED_STAR: "squared-star",
  SQUARED_SUBTRACT: "squared-subtract",
  SQUARED_VISIBLE: "squared-visible",
  SQUARED: "squared",
  STAMP: "stamp",
  STAR_FAT: "star-fat",
  STAR_L: "star-l",
  STAR_M: "star-m",
  STAR_SMALL: "star-small",
  STOPWATCH: "stopwatch",
  SUBTRACT_FAT: "subtract-fat",
  SUBTRACT_L: "subtract-l",
  SUBTRACT_M: "subtract-m",
  SUBTRACT_S: "subtract-s",
  TABLES: "tables",
  TALK_ADD: "talk-add",
  TALK_CHECK: "talk-check",
  TALK_DELETE: "talk-delete",
  TALK_EDIT: "talk-edit",
  TALK_EXCLAMATION_MARK: "talk-exclamation-mark",
  TALK_HEART_BROKEN: "talk-heart-broken",
  TALK_HEART: "talk-heart",
  TALK_INFO: "talk-info",
  TALK_INVISIBLE: "talk-invisible",
  TALK_QUESTION_MARK: "talk-question-mark",
  TALK_SEARCH: "talk-search",
  TALK_STAR: "talk-star",
  TALK_SUBTRACT: "talk-subtract",
  TALK_VISIBLE: "talk-visible",
  TALK: "talk",
  TARGET: "target",
  TEXT_ALIGN_CENTER: "text-align-center",
  TEXT_ALIGN_JUSTIFY_CENTERED: "text-align-justify-centered",
  TEXT_ALIGN_JUSTIFY_LEFT: "text-align-justify-left",
  TEXT_ALIGN_JUSTIFY_RIGHT: "text-align-justify-right",
  TEXT_ALIGN_JUSTIFY: "text-align-justify",
  TEXT_ALIGN_LEFT: "text-align-left",
  TEXT_ALIGN_RIGHT_ORDER_DESC: "text-align-right-order-desc",
  TEXT_ALIGN_RIGHT: "text-align-right",
  TEXT_BOLD: "text-bold",
  TEXT_DETAIL_LIST: "text-detail-list",
  TEXT_INDENT: "text-indent",
  TEXT_ITALIC: "text-italic",
  TEXT_LINE_THROUGH: "text-line-through",
  TEXT_ORDER_ASC114: "text-order-asc114",
  TEXT_ORDER_ASC118: "text-order-asc118",
  TEXT_ORDER_DESC_COPY2: "text-order-desc-copy2",
  TEXT_ORDER_DESC_COPY3: "text-order-desc-copy3",
  TEXT_ORDER_DESC_COPY: "text-order-desc-copy",
  TEXT_ORDER_DESC: "text-order-desc",
  TEXT_OUTDENT: "text-outdent",
  TEXT_UNDERLINE: "text-underline",
  TIMER: "timer",
  TRASH2: "trash2",
  TRASH: "trash",
  TRIANGLED_EXCLAMATION_MARK: "triangled-exclamation-mark",
  TRIANGLED_INFO: "triangled-info",
  TRIANGLED_QUESTION_MARK: "triangled-question-mark",
  TRIANGLED: "triangled",
  USER_ADD: "user-add",
  USER_DELETE: "user-delete",
  USER_GROUP: "user-group",
  USER: "user",
  USERS: "users",
  VISIBLE_FAT: "visible-fat",
  VISIBLE_L: "visible-l",
  VISIBLE_M: "visible-m",
  VISIBLE_S: "visible-s",
  WHEELCHAIR_ACTION: "wheelchair-action",
  WHEELCHAIR: "wheelchair",
  AIRPLANE_ARRIVALS: "airplane-arrivals",
  AIRPLANE_DEPARTURES: "airplane-departures",
  AIRPLANE: "airplane",
  AIRPORT_CONNECT_FLIGHTS: "airport-connect-flights",
  AIRPORT_TRANSFER2: "airport-transfer2",
  AIRPORT_TRANSFER: "airport-transfer",
  ANCHOR: "anchor",
  BICYCLE_SURFBOARD: "bicycle-surfboard",
  BICYCLE: "bicycle",
  BRIEFCASE_CROSS: "briefcase-cross",
  CAR_PARKING_INDOOR: "car-parking-indoor",
  CAR_PARKING_OUTSIDE: "car-parking-outside",
  CAR_PARKING: "car-parking",
  CAR: "car",
  CHANGING_AREA: "changing-area",
  CHECK_IN: "check-in",
  CITY_BUS: "city-bus",
  CROSS_CIRCLED: "cross-circled",
  CROSS: "cross",
  CRUISESHIP: "cruiseship",
  ELEVATOR1: "elevator1",
  ELEVATOR2: "elevator2",
  ELEVATOR3: "elevator3",
  ELEVATOR4: "elevator4",
  ESCALATOR_DOWN: "escalator-down",
  ESCALATOR_UP: "escalator-up",
  ESCALATOR: "escalator",
  FAMILY: "family",
  FERRY: "ferry",
  FIRE_EXTINGUISHER: "fire-extinguisher",
  FIRE_FLAME: "fire-flame",
  FIRE_HOSE: "fire-hose",
  GRAVESTONE2: "gravestone2",
  GRAVESTONE3: "gravestone3",
  GRAVESTONE: "gravestone",
  HELLO_GOODBYE: "hello-goodbye",
  LOCATION_MARKER: "location-marker",
  LOCATION_PATH2: "location-path2",
  LOCATION_PATH: "location-path",
  LOCATION_PIN: "location-pin",
  LOUNGE: "lounge",
  LUGGAGE_BELT: "luggage-belt",
  LUGGAGE_LOCKER: "luggage-locker",
  LUGGAGE_TROLLEY: "luggage-trolley",
  LUGGAGE: "luggage",
  MAP: "map",
  MAP2: "map2",
  MAP3: "map3",
  METRO2: "metro2",
  METRO: "metro",
  NO_SMOKING_CIRCLED: "no-smoking-circled",
  NO_SMOKING: "no-smoking",
  OFFICE_SPACE: "office-space",
  PALMTREE_ISLAND_WAVE: "palmtree-island-wave",
  PALMTREE_ISLAND: "palmtree-island",
  PALMTREE: "palmtree",
  PARASOL_ISLAND_WAVE: "parasol-island-wave",
  PARASOL_ISLAND: "parasol-island",
  PARASOL: "parasol",
  PLASTER: "plaster",
  PLASTERS: "plasters",
  POINTER_TARGET: "pointer-target",
  RENTAL_CAR: "rental-car",
  RESTROOM: "restroom",
  SECURITY_CAMERA2: "security-camera2",
  SECURITY_CAMERA3: "security-camera3",
  SECURITY_CAMERA: "security-camera",
  SECURITY_CHECK: "security-check",
  SHIP: "ship",
  SIGNPOST2: "signpost2",
  SIGNPOST: "signpost",
  SMOKING: "smoking",
  STAIRS_DOWN: "stairs-down",
  STAIRS_UP: "stairs-up",
  STAIRS: "stairs",
  TAXI_STOP: "taxi-stop",
  TAXI: "taxi",
  TRAIN_TRACK: "train-track",
  TRAIN: "train",
  WALKING2: "walking2",
  WALKING: "walking",
  CLOUD_LIGHTNING: "cloud-lightning",
  CLOUD_RAIN2: "cloud-rain2",
  CLOUD_SMALL_RAIN: "cloud-small-rain",
  CLOUD_SUN: "cloud-sun",
  CLOUD_THERMOMETER: "cloud-thermometer",
  CLOUD: "cloud",
  LIGHT_DARK_MODE2: "light-dark-mode2",
  LIGHT_DARK_MODE3: "light-dark-mode3",
  LIGHTNING_FLASH: "lightning-flash",
  MOON01: "moon01",
  MOON19: "moon19",
  MOON_DARK_MODE: "moon-dark-mode",
  SIMPLE_SUN: "simple-sun",
  SUN2: "sun2",
  SUN_LIGHT_MODE: "sun-light-mode",
  SUN: "sun",
  THERMOMETER_COLD: "thermometer-cold",
  THERMOMETER_HOT: "thermometer-hot",
  THERMOMETER: "thermometer"
}, Gt = {
  ADD: z.ADD_M,
  PLUS: z.ADD_M,
  MINUS: z.SUBTRACT_M,
  MIN: z.SUBTRACT_M,
  SUBTRACT: z.SUBTRACT_M,
  MULTIPLY: z.MULTIPLY_M,
  TIMES: z.MULTIPLY_M,
  X: z.MULTIPLY_M,
  CLOSE: z.MULTIPLY_M,
  VISIBLE: z.VISIBLE_M,
  EYE: z.VISIBLE_M,
  SHOW: z.VISIBLE_M,
  INVISIBLE: z.INVISIBLE_M,
  EYE_SLASH: z.INVISIBLE_M,
  HIDE: z.INVISIBLE_M,
  HEART: z.HEART_M,
  LOVE: z.HEART_M
}, e = {
  ...z,
  ...Gt
}, Xt = async (t) => {
  switch (t) {
    case e.ANIMAL_STEP:
      return (await import("./animal-step-6H4UX4VF-viEusnpr.js")).IconAnimalStep;
    case e.BUTTERFLY:
      return (await import("./butterfly-A2W3RJVY-BbpRM_m3.js")).IconButterfly;
    case e.CAT_HEAD:
      return (await import("./cat-head-LR57RSUC-CJX2hfdE.js")).IconCatHead;
    case e.CAT_HEAD2:
      return (await import("./cat-head2-6ROQVRS7-BGzI4l6J.js")).IconCatHead2;
    case e.CAT:
      return (await import("./cat-E76CYKLX-zPjESXH7.js")).IconCat;
    case e.CAT2:
      return (await import("./cat2-Q2AAIHNZ-CkzD934F.js")).IconCat2;
    case e.CAT3:
      return (await import("./cat3-AV2U6R3S-D4ePvhkv.js")).IconCat3;
    case e.FISH:
      return (await import("./fish-OCYDMPBB-w-Ec_nvo.js")).IconFish;
    case e.FISH2:
      return (await import("./fish2-QUYV5ZXE-C2vREQ7o.js")).IconFish2;
    case e.JELLYFISH:
      return (await import("./jellyfish-U3DDBZRI-DgjisHyS.js")).IconJellyfish;
    case e.LOBSTER:
      return (await import("./lobster-WVQGCA2U-DC5Di4Nb.js")).IconLobster;
    case e.PUFFERFISH:
      return (await import("./pufferfish-JGB27U3L-B4rGJCXO.js")).IconPufferfish;
    case e.SEA_STAR:
      return (await import("./sea-star-AROC557C-B9n5kE7F.js")).IconSeaStar;
    case e.SQUID:
      return (await import("./squid-BD5L7UZC-D4fR04Cc.js")).IconSquid;
    case e.STINGRAY:
      return (await import("./stingray-62U2UZSK-CGqwYN5d.js")).IconStingray;
    case e.TURTLE:
      return (await import("./turtle-IMVSMAJY-g5RwFES6.js")).IconTurtle;
    case e.WHALE:
      return (await import("./whale-DZTBMBH4-82PebXmm.js")).IconWhale;
    case e.ICON24:
      return (await import("./icon24-PY5ABTAJ-DyUTAf5c.js")).IconIcon24;
    case e.ARROW_CORNER_DOWN:
      return (await import("./arrow-corner-down-RMBTYSX5-MWf0R2nj.js")).IconArrowCornerDown;
    case e.ARROW_CORNER_LEFT:
      return (await import("./arrow-corner-left-LJP55DCF-BRoENk2I.js")).IconArrowCornerLeft;
    case e.ARROW_CORNER_RIGHT:
      return (await import("./arrow-corner-right-XR23J4VX-Bw5hD90z.js")).IconArrowCornerRight;
    case e.ARROW_CORNER_UP:
      return (await import("./arrow-corner-up-ONO7IAR7-DKlb3kwI.js")).IconArrowCornerUp;
    case e.ARROW_DIAGONAL_BL_TR_STOP:
      return (await import("./arrow-diagonal-bl-tr-stop-6N73WHJV-GFL_k7Wu.js")).IconArrowDiagonalBlTrStop;
    case e.ARROW_DIAGONAL_BR_TL_STOP:
      return (await import("./arrow-diagonal-br-tl-stop-HVKHPLZ2-D4GeQEHY.js")).IconArrowDiagonalBrTlStop;
    case e.ARROW_DIAGONAL_IN_LT_BR:
      return (await import("./arrow-diagonal-in-lt-br-QZN5ZZN4-MWhYSnND.js")).IconArrowDiagonalInLtBr;
    case e.ARROW_DIAGONAL_IN_TR_BL:
      return (await import("./arrow-diagonal-in-tr-bl-457BXITR-v24SqT9n.js")).IconArrowDiagonalInTrBl;
    case e.ARROW_DIAGONAL_TL_BR_SPLIT:
      return (await import("./arrow-diagonal-tl-br-split-5KD3EPFC-CHaPPOBa.js")).IconArrowDiagonalTlBrSplit;
    case e.ARROW_DIAGONAL_TL_BR_STOP:
      return (await import("./arrow-diagonal-tl-br-stop-I7ZVDN6F-B6hD9iwD.js")).IconArrowDiagonalTlBrStop;
    case e.ARROW_DIAGONAL_TL_BR:
      return (await import("./arrow-diagonal-tl-br-I5X3ZNYU-BMxMSmyw.js")).IconArrowDiagonalTlBr;
    case e.ARROW_DIAGONAL_TR_BL_SPLIT:
      return (await import("./arrow-diagonal-tr-bl-split-PK7ZQKNS-Bh0WQhEB.js")).IconArrowDiagonalTrBlSplit;
    case e.ARROW_DIAGONAL_TR_BL_STOP:
      return (await import("./arrow-diagonal-tr-bl-stop-4PE6T23T-dDPoLsR-.js")).IconArrowDiagonalTrBlStop;
    case e.ARROW_DIAGONAL_TR_BL:
      return (await import("./arrow-diagonal-tr-bl-XPAON45E-BgKJVKi0.js")).IconArrowDiagonalTrBl;
    case e.ARROW_DOWN_COPY:
      return (await import("./arrow-down-copy-6JGHCWTN-CLJOlcPq.js")).IconArrowDownCopy;
    case e.ARROW_DOWN_LEFT:
      return (await import("./arrow-down-left-BILIHP6M-Bu2qfRS4.js")).IconArrowDownLeft;
    case e.ARROW_DOWN_RIGHT:
      return (await import("./arrow-down-right-UMJFYFU2-CKlTmajU.js")).IconArrowDownRight;
    case e.ARROW_DOWN:
      return (await import("./arrow-down-OB4X2N2U-DVYkllCQ.js")).IconArrowDown;
    case e.ARROW_DOWNLOAD:
      return (await import("./arrow-download-JWFP7Q6Q-D6IalR-w.js")).IconArrowDownload;
    case e.ARROW_HEADED_CORNER_DOWN:
      return (await import("./arrow-headed-corner-down-W2JFJSWR-DXQ9nmJF.js")).IconArrowHeadedCornerDown;
    case e.ARROW_HEADED_CORNER_LEFT:
      return (await import("./arrow-headed-corner-left-JMJGFI57-B7DY90sv.js")).IconArrowHeadedCornerLeft;
    case e.ARROW_HEADED_CORNER_RIGHT:
      return (await import("./arrow-headed-corner-right-BWEQEYRF-CoE8UYqS.js")).IconArrowHeadedCornerRight;
    case e.ARROW_HEADED_CORNER_UP:
      return (await import("./arrow-headed-corner-up-ZSFXI4VL-8bJtR0P2.js")).IconArrowHeadedCornerUp;
    case e.ARROW_HEADED_DIAGONAL_BL_TR_STOP:
      return (await import("./arrow-headed-diagonal-bl-tr-stop-UMDHRTVF-C2xP--1h.js")).IconArrowHeadedDiagonalBlTrStop;
    case e.ARROW_HEADED_DIAGONAL_BR_TL_STOP:
      return (await import("./arrow-headed-diagonal-br-tl-stop-7DVVYSZO-CGo6O7eG.js")).IconArrowHeadedDiagonalBrTlStop;
    case e.ARROW_HEADED_DIAGONAL_IN_LT_BR:
      return (await import("./arrow-headed-diagonal-in-lt-br-Q6QKUXPP-DswM36ZU.js")).IconArrowHeadedDiagonalInLtBr;
    case e.ARROW_HEADED_DIAGONAL_IN_TR_BL:
      return (await import("./arrow-headed-diagonal-in-tr-bl-LUEILX4K-CXR1VW_G.js")).IconArrowHeadedDiagonalInTrBl;
    case e.ARROW_HEADED_DIAGONAL_TL_BR_SPLIT:
      return (await import("./arrow-headed-diagonal-tl-br-split-7LZJHPVF-BkmBpI52.js")).IconArrowHeadedDiagonalTlBrSplit;
    case e.ARROW_HEADED_DIAGONAL_TL_BR_STOP:
      return (await import("./arrow-headed-diagonal-tl-br-stop-PSX3D3UD-CT0Lc6pn.js")).IconArrowHeadedDiagonalTlBrStop;
    case e.ARROW_HEADED_DIAGONAL_TL_BR:
      return (await import("./arrow-headed-diagonal-tl-br-WV64GAM2-C7gCJW6Y.js")).IconArrowHeadedDiagonalTlBr;
    case e.ARROW_HEADED_DIAGONAL_TR_BL_SPLIT:
      return (await import("./arrow-headed-diagonal-tr-bl-split-SLU7GIA6-D71GCbml.js")).IconArrowHeadedDiagonalTrBlSplit;
    case e.ARROW_HEADED_DIAGONAL_TR_BL_STOP:
      return (await import("./arrow-headed-diagonal-tr-bl-stop-UORPPW7M-CpgM0Tcz.js")).IconArrowHeadedDiagonalTrBlStop;
    case e.ARROW_HEADED_DIAGONAL_TR_BL:
      return (await import("./arrow-headed-diagonal-tr-bl-GUUONHCW-B2h8HVUP.js")).IconArrowHeadedDiagonalTrBl;
    case e.ARROW_HEADED_DOWN_LEFT:
      return (await import("./arrow-headed-down-left-ZRXSSOGJ-Dh3cPZlL.js")).IconArrowHeadedDownLeft;
    case e.ARROW_HEADED_DOWN_RIGHT:
      return (await import("./arrow-headed-down-right-PHCVV5D5-CjBxI8zS.js")).IconArrowHeadedDownRight;
    case e.ARROW_HEADED_DOWN_STOP:
      return (await import("./arrow-headed-down-stop-4QBGCTDH-Qabc-A6-.js")).IconArrowHeadedDownStop;
    case e.ARROW_HEADED_DOWN:
      return (await import("./arrow-headed-down-FZZGJKPU-Zw1MbGy8.js")).IconArrowHeadedDown;
    case e.ARROW_HEADED_DOWNLOAD:
      return (await import("./arrow-headed-download-F464MD6L-WajuNFJ9.js")).IconArrowHeadedDownload;
    case e.ARROW_HEADED_IN_CENTER:
      return (await import("./arrow-headed-in-center-45Z4LW55-BH66gF6x.js")).IconArrowHeadedInCenter;
    case e.ARROW_HEADED_IN_DIAGONAL:
      return (await import("./arrow-headed-in-diagonal-GCL7QMEI-CwyYzspG.js")).IconArrowHeadedInDiagonal;
    case e.ARROW_HEADED_IN:
      return (await import("./arrow-headed-in-UQ7B4N34-DMdVR3nb.js")).IconArrowHeadedIn;
    case e.ARROW_HEADED_LEFT_RIGHT_SPLIT:
      return (await import("./arrow-headed-left-right-split-23WWB4DJ-CHZJJvHj.js")).IconArrowHeadedLeftRightSplit;
    case e.ARROW_HEADED_LEFT_RIGHT_STOP:
      return (await import("./arrow-headed-left-right-stop-72KMKXKK-C95KgeVB.js")).IconArrowHeadedLeftRightStop;
    case e.ARROW_HEADED_LEFT_RIGHT:
      return (await import("./arrow-headed-left-right-ADUI36DJ-D4Yg8OX7.js")).IconArrowHeadedLeftRight;
    case e.ARROW_HEADED_LEFT_STOP:
      return (await import("./arrow-headed-left-stop-S7PKNAMH-DbPuL9Ou.js")).IconArrowHeadedLeftStop;
    case e.ARROW_HEADED_LEFT:
      return (await import("./arrow-headed-left-KGIRDMND-DxoN4XMT.js")).IconArrowHeadedLeft;
    case e.ARROW_HEADED_OUT_CENTER:
      return (await import("./arrow-headed-out-center-74MV5HEW-C0_DmtCQ.js")).IconArrowHeadedOutCenter;
    case e.ARROW_HEADED_RELOAD_DOWN_UP:
      return (await import("./arrow-headed-reload-down-up-EQO3CRYE-kDIXJ1PZ.js")).IconArrowHeadedReloadDownUp;
    case e.ARROW_HEADED_RELOAD_LEFT_RIGHT:
      return (await import("./arrow-headed-reload-left-right-RUMJUEFN-DL_NMDxU.js")).IconArrowHeadedReloadLeftRight;
    case e.ARROW_HEADED_RELOAD_RIGHT_LEFT:
      return (await import("./arrow-headed-reload-right-left-VPL4D2RS-BIS8zVs6.js")).IconArrowHeadedReloadRightLeft;
    case e.ARROW_HEADED_RELOAD_UP_DOWN:
      return (await import("./arrow-headed-reload-up-down-QXSYGKDV-M4HMQz-N.js")).IconArrowHeadedReloadUpDown;
    case e.ARROW_HEADED_RETURN_DOWN:
      return (await import("./arrow-headed-return-down-M7HUELAY-DJHNWnfU.js")).IconArrowHeadedReturnDown;
    case e.ARROW_HEADED_RETURN_LEFT:
      return (await import("./arrow-headed-return-left-73HD76Q4-DyWY-PyT.js")).IconArrowHeadedReturnLeft;
    case e.ARROW_HEADED_RETURN_RIGHT:
      return (await import("./arrow-headed-return-right-EBXKNRV2-CjqZ2lsu.js")).IconArrowHeadedReturnRight;
    case e.ARROW_HEADED_RETURN_UP:
      return (await import("./arrow-headed-return-up-WKPRVWUT-R9lJvbh8.js")).IconArrowHeadedReturnUp;
    case e.ARROW_HEADED_RIGHT:
      return (await import("./arrow-headed-right-TWBEVFN7-BkjgiKMY.js")).IconArrowHeadedRight;
    case e.ARROW_HEADED_ROTATE_BOTTOM_LEFT:
      return (await import("./arrow-headed-rotate-bottom-left-JVITZTGX-Cg4QUHJY.js")).IconArrowHeadedRotateBottomLeft;
    case e.ARROW_HEADED_ROTATE_BOTTOM_RIGHT:
      return (await import("./arrow-headed-rotate-bottom-right-73EDHMTG-DUSCP3WB.js")).IconArrowHeadedRotateBottomRight;
    case e.ARROW_HEADED_ROTATE_TOP_LEFT:
      return (await import("./arrow-headed-rotate-top-left-54TUN33W-Dr8y07x9.js")).IconArrowHeadedRotateTopLeft;
    case e.ARROW_HEADED_ROTATE_TOP_RIGHT:
      return (await import("./arrow-headed-rotate-top-right-6R4ZMLRS-bISvVsV7.js")).IconArrowHeadedRotateTopRight;
    case e.ARROW_HEADED_ROUNDED_LEFT_UP:
      return (await import("./arrow-headed-rounded-left-up-QPYEGPUW-DygihMZZ.js")).IconArrowHeadedRoundedLeftUp;
    case e.ARROW_HEADED_ROUNDED_RIGHT_DOWN:
      return (await import("./arrow-headed-rounded-right-down-MMC5LH5Q-R78S6peN.js")).IconArrowHeadedRoundedRightDown;
    case e.ARROW_HEADED_ROUNDED_RIGHT_UP:
      return (await import("./arrow-headed-rounded-right-up-USBXDH4J-B_9Jl20g.js")).IconArrowHeadedRoundedRightUp;
    case e.ARROW_HEADED_ROUNED_LEFT_DOWN:
      return (await import("./arrow-headed-rouned-left-down-QWE3X4C3-Gh8DC_aZ.js")).IconArrowHeadedRounedLeftDown;
    case e.ARROW_HEADED_SHARE:
      return (await import("./arrow-headed-share-ZLVLKSK2-C92g8Edm.js")).IconArrowHeadedShare;
    case e.ARROW_HEADED_SPREAD_SPLIT:
      return (await import("./arrow-headed-spread-split-BBPEYKQH-CJ17n-QR.js")).IconArrowHeadedSpreadSplit;
    case e.ARROW_HEADED_SPREAD:
      return (await import("./arrow-headed-spread-UBPSGR53-BMGK2odj.js")).IconArrowHeadedSpread;
    case e.ARROW_HEADED_TWOWAY_DIAGONAL_LR:
      return (await import("./arrow-headed-twoway-diagonal-lr-DIDSLUAI-CM0qGj9f.js")).IconArrowHeadedTwowayDiagonalLr;
    case e.ARROW_HEADED_TWOWAY_DIAGONAL_RL:
      return (await import("./arrow-headed-twoway-diagonal-rl-ORYUPZ3K-TGJ8tAEc.js")).IconArrowHeadedTwowayDiagonalRl;
    case e.ARROW_HEADED_TWOWAY_HORIZONTAL:
      return (await import("./arrow-headed-twoway-horizontal-FU2BWTI7-CE392HEi.js")).IconArrowHeadedTwowayHorizontal;
    case e.ARROW_HEADED_TWOWAY_VERTICAL:
      return (await import("./arrow-headed-twoway-vertical-7HO46QNO-DgwHK0HM.js")).IconArrowHeadedTwowayVertical;
    case e.ARROW_HEADED_UP_DOWN_SPLIT:
      return (await import("./arrow-headed-up-down-split-3VQYSHUF-B1Hz31MF.js")).IconArrowHeadedUpDownSplit;
    case e.ARROW_HEADED_UP_DOWN_STOP:
      return (await import("./arrow-headed-up-down-stop-4AGEN5BO-CIBNcYwO.js")).IconArrowHeadedUpDownStop;
    case e.ARROW_HEADED_UP_DOWN:
      return (await import("./arrow-headed-up-down-VEFZOGJI-DvtzQfCw.js")).IconArrowHeadedUpDown;
    case e.ARROW_HEADED_UP_LEFT:
      return (await import("./arrow-headed-up-left-AHFHQSEX-DBPsw0t8.js")).IconArrowHeadedUpLeft;
    case e.ARROW_HEADED_UP_RIGHT:
      return (await import("./arrow-headed-up-right-2SKPGPC3-BfL5AsBF.js")).IconArrowHeadedUpRight;
    case e.ARROW_HEADED_UP_STOP76:
      return (await import("./arrow-headed-up-stop76-JZBNKEVX-D7POAUcL.js")).IconArrowHeadedUpStop76;
    case e.ARROW_HEADED_UP_STOP78:
      return (await import("./arrow-headed-up-stop78-ST3VKEVG-Djcc0_q7.js")).IconArrowHeadedUpStop78;
    case e.ARROW_HEADED_UP:
      return (await import("./arrow-headed-up-CT7DNXOB-DystphKm.js")).IconArrowHeadedUp;
    case e.ARROW_HEADED_UPLOAD:
      return (await import("./arrow-headed-upload-3LT5S62R-DST1tRn5.js")).IconArrowHeadedUpload;
    case e.ARROW_IN_CENTER:
      return (await import("./arrow-in-center-KCUE7YLK-DTGQIb8p.js")).IconArrowInCenter;
    case e.ARROW_INVERT:
      return (await import("./arrow-invert-S7UFAXH6-Blpttkb0.js")).IconArrowInvert;
    case e.ARROW_LEFT_RIGHT_SPLIT:
      return (await import("./arrow-left-right-split-XUTDMOLP-D0iuWMT9.js")).IconArrowLeftRightSplit;
    case e.ARROW_LEFT_RIGHT_STOP:
      return (await import("./arrow-left-right-stop-2PZQP63T-CfBarOiw.js")).IconArrowLeftRightStop;
    case e.ARROW_LEFT_RIGHT:
      return (await import("./arrow-left-right-KD6SKKSQ-B9jX1Csg.js")).IconArrowLeftRight;
    case e.ARROW_LEFT_STOP:
      return (await import("./arrow-left-stop-OT2I6OBV-CMDm_6I7.js")).IconArrowLeftStop;
    case e.ARROW_LEFT:
      return (await import("./arrow-left-AMEROHDY-ddXUIJBd.js")).IconArrowLeft;
    case e.ARROW_OUT_CENTER:
      return (await import("./arrow-out-center-QA4SANLF-D3rDNr4J.js")).IconArrowOutCenter;
    case e.ARROW_RELOAD_DOWN_UP:
      return (await import("./arrow-reload-down-up-DMXPI6FJ-CxhLFIZI.js")).IconArrowReloadDownUp;
    case e.ARROW_RELOAD_LEFT_RIGHT:
      return (await import("./arrow-reload-left-right-XO2LMUWB-DTo5DvAo.js")).IconArrowReloadLeftRight;
    case e.ARROW_RELOAD_RIGHT_LEFT:
      return (await import("./arrow-reload-right-left-6U64YIA4-CtXSrd2A.js")).IconArrowReloadRightLeft;
    case e.ARROW_RELOAD_UP_DOWN:
      return (await import("./arrow-reload-up-down-ID465I3A-CVY8mjmR.js")).IconArrowReloadUpDown;
    case e.ARROW_RETURN_DOWN:
      return (await import("./arrow-return-down-PR7TFZUN-BjVTRbeB.js")).IconArrowReturnDown;
    case e.ARROW_RETURN_LEFT:
      return (await import("./arrow-return-left-IGWZOW2S-CndGxEBk.js")).IconArrowReturnLeft;
    case e.ARROW_RETURN_RIGHT:
      return (await import("./arrow-return-right-RUH2US4A-C7Xt3F0z.js")).IconArrowReturnRight;
    case e.ARROW_RETURN_UP:
      return (await import("./arrow-return-up-VZNCPTG5-DHyxN2R6.js")).IconArrowReturnUp;
    case e.ARROW_RIGHT_STOP:
      return (await import("./arrow-right-stop-JE3R3MAW-sRitzoDe.js")).IconArrowRightStop;
    case e.ARROW_RIGHT:
      return (await import("./arrow-right-YTZ6EFK4-13Hh5cTD.js")).IconArrowRight;
    case e.ARROW_ROATE_BOTTOM_RIGHT:
      return (await import("./arrow-roate-bottom-right-Y7NEBMUK-Koe_qkVS.js")).IconArrowRoateBottomRight;
    case e.ARROW_ROTATE_BOTTOM_LEFT:
      return (await import("./arrow-rotate-bottom-left-47IIEYSP-Dr2JtAR7.js")).IconArrowRotateBottomLeft;
    case e.ARROW_ROTATE_TOP_LEFT:
      return (await import("./arrow-rotate-top-left-ED7NXMMT-B8zyBx6q.js")).IconArrowRotateTopLeft;
    case e.ARROW_ROTATE_TOP_RIGHT:
      return (await import("./arrow-rotate-top-right-DL5GG6GF-DOf_XlmL.js")).IconArrowRotateTopRight;
    case e.ARROW_ROUNDED_LEFT_DOWN:
      return (await import("./arrow-rounded-left-down-HYIUQBCW-CV2AYN2X.js")).IconArrowRoundedLeftDown;
    case e.ARROW_ROUNDED_LEFT_UP:
      return (await import("./arrow-rounded-left-up-I7ZNNSBZ-DFTEvaSy.js")).IconArrowRoundedLeftUp;
    case e.ARROW_ROUNDED_RIGHT_DOWN:
      return (await import("./arrow-rounded-right-down-VPX726EO-oP0nGjqD.js")).IconArrowRoundedRightDown;
    case e.ARROW_ROUNDED_RIGHT_UP:
      return (await import("./arrow-rounded-right-up-XZ73OKGP-Bk5KZZvQ.js")).IconArrowRoundedRightUp;
    case e.ARROW_SHARE:
      return (await import("./arrow-share-3VGBIA7N-BqAu0-a3.js")).IconArrowShare;
    case e.ARROW_SPREAD_SPLIT:
      return (await import("./arrow-spread-split-LDNPBVSM-DNe2VYds.js")).IconArrowSpreadSplit;
    case e.ARROW_SPREAD:
      return (await import("./arrow-spread-3KSHHFEM-BtHxPyQ9.js")).IconArrowSpread;
    case e.ARROW_THICK_BOTTOM_LEFT:
      return (await import("./arrow-thick-bottom-left-EI4HIEH4-BGhPmqqS.js")).IconArrowThickBottomLeft;
    case e.ARROW_THICK_DOWN:
      return (await import("./arrow-thick-down-OO44ADAI-C0oUddvu.js")).IconArrowThickDown;
    case e.ARROW_THICK_LEFT_TOP:
      return (await import("./arrow-thick-left-top-KX52RBRF-BVhwageo.js")).IconArrowThickLeftTop;
    case e.ARROW_THICK_LEFT:
      return (await import("./arrow-thick-left-LRWCB6XL-CGjBDEvE.js")).IconArrowThickLeft;
    case e.ARROW_THICK_RIGHT_BOTTOM:
      return (await import("./arrow-thick-right-bottom-LKLCFN2L-B3zb0yqF.js")).IconArrowThickRightBottom;
    case e.ARROW_THICK_RIGHT:
      return (await import("./arrow-thick-right-NKUYUFCR-xL-Lpo5v.js")).IconArrowThickRight;
    case e.ARROW_THICK_TALL_BOTTOM_LEFT:
      return (await import("./arrow-thick-tall-bottom-left-6TZ534GL-D2YMGZvt.js")).IconArrowThickTallBottomLeft;
    case e.ARROW_THICK_TALL_DOWN:
      return (await import("./arrow-thick-tall-down-SI7Z2R7H-CsXkcK0I.js")).IconArrowThickTallDown;
    case e.ARROW_THICK_TALL_LEFT_TOP:
      return (await import("./arrow-thick-tall-left-top-SIB2ZTJP--CO8XCKW.js")).IconArrowThickTallLeftTop;
    case e.ARROW_THICK_TALL_LEFT:
      return (await import("./arrow-thick-tall-left-RYN4PRCC-C2X7-hsB.js")).IconArrowThickTallLeft;
    case e.ARROW_THICK_TALL_RIGHT_BOTTOM:
      return (await import("./arrow-thick-tall-right-bottom-YUQQVS36-B9IzQlnN.js")).IconArrowThickTallRightBottom;
    case e.ARROW_THICK_TALL_RIGHT:
      return (await import("./arrow-thick-tall-right-7UFLNOFI-C94yQsNL.js")).IconArrowThickTallRight;
    case e.ARROW_THICK_TALL_TOP_RIGHT:
      return (await import("./arrow-thick-tall-top-right-LJJ6RRCO-Czb_Pqsu.js")).IconArrowThickTallTopRight;
    case e.ARROW_THICK_TALL_UP:
      return (await import("./arrow-thick-tall-up-GUQ3ZO2M-DgsU4fqg.js")).IconArrowThickTallUp;
    case e.ARROW_THICK_TOP_RIGHT:
      return (await import("./arrow-thick-top-right-AGIHBIHI-C2n3nI_P.js")).IconArrowThickTopRight;
    case e.ARROW_THICK_UP:
      return (await import("./arrow-thick-up-OPM6S5QH-CySbNnMP.js")).IconArrowThickUp;
    case e.ARROW_THICK_WIDE_BOTTOM_LEFT:
      return (await import("./arrow-thick-wide-bottom-left-72H2NWK6-BctF9EAB.js")).IconArrowThickWideBottomLeft;
    case e.ARROW_THICK_WIDE_DOWN:
      return (await import("./arrow-thick-wide-down-ITRIMNGN-uY6q9Ks6.js")).IconArrowThickWideDown;
    case e.ARROW_THICK_WIDE_LEFT_TOP:
      return (await import("./arrow-thick-wide-left-top-IFNPYB2S-B4WUggtq.js")).IconArrowThickWideLeftTop;
    case e.ARROW_THICK_WIDE_LEFT:
      return (await import("./arrow-thick-wide-left-PA3BRTDQ-CzoJptHc.js")).IconArrowThickWideLeft;
    case e.ARROW_THICK_WIDE_RIGHT_BOTTOM:
      return (await import("./arrow-thick-wide-right-bottom-NYRGLVE7-mom4zYPK.js")).IconArrowThickWideRightBottom;
    case e.ARROW_THICK_WIDE_RIGHT:
      return (await import("./arrow-thick-wide-right-Z2VY6SJH-CQY41osN.js")).IconArrowThickWideRight;
    case e.ARROW_THICK_WIDE_TOP_RIGHT:
      return (await import("./arrow-thick-wide-top-right-P667FZTX-BWRL0gTc.js")).IconArrowThickWideTopRight;
    case e.ARROW_THICK_WIDE_UP:
      return (await import("./arrow-thick-wide-up-2Q3YSHAO-CXQtVTSL.js")).IconArrowThickWideUp;
    case e.ARROW_TRANSFER_BL_TR:
      return (await import("./arrow-transfer-bl-tr-SXDA2B4K-Da_VqIHX.js")).IconArrowTransferBlTr;
    case e.ARROW_TRANSFER_LEFT_RIGHT:
      return (await import("./arrow-transfer-left-right-4GKI6WV5-C2-QFfs3.js")).IconArrowTransferLeftRight;
    case e.ARROW_TRANSFER_LT_BR:
      return (await import("./arrow-transfer-lt-br-F5FJPCTQ-DECFzkXK.js")).IconArrowTransferLtBr;
    case e.ARROW_TRANSFER_UP_DOWN:
      return (await import("./arrow-transfer-up-down-D6SMHT6M-CYXdY_4E.js")).IconArrowTransferUpDown;
    case e.ARROW_TWOWAY_DIAGONAL_LR:
      return (await import("./arrow-twoway-diagonal-lr-ABL27TSK-Cl073bK4.js")).IconArrowTwowayDiagonalLr;
    case e.ARROW_TWOWAY_DIAGONAL_RL:
      return (await import("./arrow-twoway-diagonal-rl-AORWDI53-DtObmp2M.js")).IconArrowTwowayDiagonalRl;
    case e.ARROW_TWOWAY_HORIZONTAL:
      return (await import("./arrow-twoway-horizontal-4KP27JEU-C5OYctYL.js")).IconArrowTwowayHorizontal;
    case e.ARROW_TWOWAY_VERTICAL:
      return (await import("./arrow-twoway-vertical-BEKODIPV-DSY3Lt5E.js")).IconArrowTwowayVertical;
    case e.ARROW_UP_COPY:
      return (await import("./arrow-up-copy-PZX7TUEA-DDt3MbEG.js")).IconArrowUpCopy;
    case e.ARROW_UP_DOWN_SPLIT:
      return (await import("./arrow-up-down-split-KGEL2SSH-BMamIDFK.js")).IconArrowUpDownSplit;
    case e.ARROW_UP_DOWN_STOP:
      return (await import("./arrow-up-down-stop-WNP2LR7G-CgfZCRjj.js")).IconArrowUpDownStop;
    case e.ARROW_UP_DOWN:
      return (await import("./arrow-up-down-KKWOJOO3-BnUu531R.js")).IconArrowUpDown;
    case e.ARROW_UP_LEFT:
      return (await import("./arrow-up-left-AOCLKGYI-DiEFFTmH.js")).IconArrowUpLeft;
    case e.ARROW_UP_RIGHT:
      return (await import("./arrow-up-right-F6NB23TR-BDf78fBB.js")).IconArrowUpRight;
    case e.ARROW_UP:
      return (await import("./arrow-up-QD5TEBXP-eS9O-k55.js")).IconArrowUp;
    case e.ARROW_UPLOAD:
      return (await import("./arrow-upload-OPTJS5R7-CdmS4Uck.js")).IconArrowUpload;
    case e.CHEVRON_CONNECT2:
      return (await import("./chevron-connect2-3NWCI3QD-y3mHw08t.js")).IconChevronConnect2;
    case e.CHEVRON_CONNECT:
      return (await import("./chevron-connect-D36B7XY3-BluCOwgt.js")).IconChevronConnect;
    case e.CHEVRON_DISCONNECT2:
      return (await import("./chevron-disconnect2-P4VMXKLL-naY3dcWY.js")).IconChevronDisconnect2;
    case e.CHEVRON_DISCONNECT:
      return (await import("./chevron-disconnect-M33FOHSU-BB_o82Ic.js")).IconChevronDisconnect;
    case e.CHEVRON_DOUBLE_DOWN:
      return (await import("./chevron-double-down-CSHILZCI-DtAUSY7H.js")).IconChevronDoubleDown;
    case e.CHEVRON_DOUBLE_LEFT:
      return (await import("./chevron-double-left-J3FZKX5B-mOjx47IM.js")).IconChevronDoubleLeft;
    case e.CHEVRON_DOUBLE_RIGHT:
      return (await import("./chevron-double-right-3JMQS6LS-4t_j1s85.js")).IconChevronDoubleRight;
    case e.CHEVRON_DOUBLE_UP:
      return (await import("./chevron-double-up-MWAKDE74-BQEqfDHV.js")).IconChevronDoubleUp;
    case e.CHEVRON_DOWN:
      return (await import("./chevron-down-3JBTLM2Y-B3_5fiIv.js")).IconChevronDown;
    case e.CHEVRON_LEFT:
      return (await import("./chevron-left-576AEHMZ-DsyrsLF5.js")).IconChevronLeft;
    case e.CHEVRON_RIGHT:
      return (await import("./chevron-right-SIEJRPAU-BtBV_3ic.js")).IconChevronRight;
    case e.CHEVRON_UP:
      return (await import("./chevron-up-25YTR7HO-C4j42fGI.js")).IconChevronUp;
    case e.ICON01:
      return (await import("./icon01-6ADWVZQ6-GwphpKJu.js")).IconIcon01;
    case e.BOTTLE:
      return (await import("./bottle-TA4B62AW-ClHAdlMT.js")).IconBottle;
    case e.BOTTLES:
      return (await import("./bottles-OPDFTQV4-BC7c2LXD.js")).IconBottles;
    case e.BREAD_SLICE:
      return (await import("./bread-slice-DA5LDEAX-C_qtMmQe.js")).IconBreadSlice;
    case e.COFFEE_CUP:
      return (await import("./coffee-cup-SX5D6VFS-BSmuS650.js")).IconCoffeeCup;
    case e.COFFEE_MACHINE:
      return (await import("./coffee-machine-MDL3CTUK-BlQPwxUW.js")).IconCoffeeMachine;
    case e.COFFEE_BEANS:
      return (await import("./coffee-beans-72QOQHQV-CtHMFr3P.js")).IconCoffeeBeans;
    case e.COGNAC_GLASS:
      return (await import("./cognac-glass-SVBPJNI7-PuU3q9xN.js")).IconCognacGlass;
    case e.ESPRESS_MACHINE2:
      return (await import("./espress-machine2-YTS4HJG5-lkpWhSLF.js")).IconEspressMachine2;
    case e.ESPRESSO_MACHINE_E61:
      return (await import("./espresso-machine-e61-FDCGWFJ7-ByVKxljA.js")).IconEspressoMachineE61;
    case e.ESPRESSO_MACHINE:
      return (await import("./espresso-machine-E22QKF5Y-BV66TuI1.js")).IconEspressoMachine;
    case e.ESPRESSO_PISTOL:
      return (await import("./espresso-pistol-BGJJIOOR-BMB3kw59.js")).IconEspressoPistol;
    case e.HAMBURGER:
      return (await import("./hamburger-KWFT7YB6-DYFwhD-H.js")).IconHamburger;
    case e.PERCULATOR:
      return (await import("./perculator-Q4N4V7S7-BcCL-YX-.js")).IconPerculator;
    case e.WINE_GLASS:
      return (await import("./wine-glass-Q6LP4PUU-D0lfVYES.js")).IconWineGlass;
    case e.ALARM_BELL2:
      return (await import("./alarm-bell2-KA77PHWH-BTo6qU0C.js")).IconAlarmBell2;
    case e.ALARM_BELL3:
      return (await import("./alarm-bell3-C6WLNA2V-DRHLBzQs.js")).IconAlarmBell3;
    case e.ALARM_BELL:
      return (await import("./alarm-bell-R32IUSNB-I16bJH_g.js")).IconAlarmBell;
    case e.ART_SUPPLIES:
      return (await import("./art-supplies-NPCBF6GM-DVLqEGRI.js")).IconArtSupplies;
    case e.AUDIO_WAVES:
      return (await import("./audio-waves-YSFG77PW-CkS0AFmH.js")).IconAudioWaves;
    case e.BLUETOOTH:
      return (await import("./bluetooth-5V7DAHPM-C8XVvHsd.js")).IconBluetooth;
    case e.CAMERA:
      return (await import("./camera-NYH2TZBC-DMUolzD0.js")).IconCamera;
    case e.CLIPBOARD:
      return (await import("./clipboard-QRF6ZHFF-DwQEW56e.js")).IconClipboard;
    case e.COLOR_PALLETTE:
      return (await import("./color-pallette-UBEBJOJN-DNXOboPs.js")).IconColorPallette;
    case e.COLOR_RGB:
      return (await import("./color-rgb-X7NET55K-c6Jmx4DF.js")).IconColorRgb;
    case e.COLOR_SWATCHES:
      return (await import("./color-swatches-55SW2HEY-CIEd3NUX.js")).IconColorSwatches;
    case e.DESKTOP:
      return (await import("./desktop-D2LPZQEO-Cf4VQmwD.js")).IconDesktop;
    case e.FILMROLL:
      return (await import("./filmroll-YASRGB4B-kQoHLJdO.js")).IconFilmroll;
    case e.GAMEPAD_CLASSIC:
      return (await import("./gamepad-classic-WJZBY44J-wZgsCf3G.js")).IconGamepadClassic;
    case e.GAMEPAD:
      return (await import("./gamepad-GZF3YCQP-BoKrgtPC.js")).IconGamepad;
    case e.HEADPHONES:
      return (await import("./headphones-E52K4LXE-PnOcOWYr.js")).IconHeadphones;
    case e.HIGHLIGHT:
      return (await import("./highlight-5YX3SVRD-BSKL68BH.js")).IconHighlight;
    case e.IMAGE:
      return (await import("./image-YM3O2372-DzbpiZpw.js")).IconImage;
    case e.JOYSTICK:
      return (await import("./joystick-UDJMAGRC-DZHsiJNX.js")).IconJoystick;
    case e.LAPTOP:
      return (await import("./laptop-PLYXSM4E-CVhRzja7.js")).IconLaptop;
    case e.MAIL_OPEN:
      return (await import("./mail-open-NYNBJBJ3-Cmc0_ENy.js")).IconMailOpen;
    case e.MAIL:
      return (await import("./mail-TJECTGTF-CzQDQ_E_.js")).IconMail;
    case e.MEDIA:
      return (await import("./media-C32LP55C-DkSIcWgz.js")).IconMedia;
    case e.MICROPHONE:
      return (await import("./microphone-JBJJSXYJ-BWf3xL4q.js")).IconMicrophone;
    case e.MUSIC_NOTE_SINGLE:
      return (await import("./music-note-single-2OJZNXDX-DEgBsPhu.js")).IconMusicNoteSingle;
    case e.MUSIC_NOTE:
      return (await import("./music-note-GTNWNDXR-CBu4_tVV.js")).IconMusicNote;
    case e.NES_CONTROLLER:
      return (await import("./nes-controller-Z5ZPDT5C-BRZN-3xq.js")).IconNesController;
    case e.PACMAN:
      return (await import("./pacman-7NBYTDJQ-BcF5SZvT.js")).IconPacman;
    case e.PAINT_ROLLER:
      return (await import("./paint-roller-FDFX4RF4-gahnISly.js")).IconPaintRoller;
    case e.PAPERPLANE:
      return (await import("./paperplane-DWDN6YH5-0mRdfUmJ.js")).IconPaperplane;
    case e.PLAYBACK_BACKWARD:
      return (await import("./playback-backward-C2HXDULY-CkDU_S6s.js")).IconPlaybackBackward;
    case e.PLAYBACK_END:
      return (await import("./playback-end-KTZ7NDZW-_v0COtyP.js")).IconPlaybackEnd;
    case e.PLAYBACK_FORWARD:
      return (await import("./playback-forward-OF3UGTNY-B6qmhJHz.js")).IconPlaybackForward;
    case e.PLAYBACK_NEXT:
      return (await import("./playback-next-CQM3J6NU-DOMxq8Qq.js")).IconPlaybackNext;
    case e.PLAYBACK_PAUSE:
      return (await import("./playback-pause-N2SC47NH-LvX6Y6oB.js")).IconPlaybackPause;
    case e.PLAYBACK_PLAY:
      return (await import("./playback-play-4VKHOLFJ-NinIzcmR.js")).IconPlaybackPlay;
    case e.PLAYBACK_PREVIOUS:
      return (await import("./playback-previous-OM7KENTG-DVvOUSZt.js")).IconPlaybackPrevious;
    case e.PLAYBACK_START:
      return (await import("./playback-start-XK4XZHYW-B1Lt_wSX.js")).IconPlaybackStart;
    case e.PLAYBACK_STOP:
      return (await import("./playback-stop-FFJHVADC-0znFLoX6.js")).IconPlaybackStop;
    case e.PRINTER:
      return (await import("./printer-BQJNDAST-CxrdmCjm.js")).IconPrinter;
    case e.RECORD:
      return (await import("./record-ZETFKYC4-BVWK1yvs.js")).IconRecord;
    case e.REELS:
      return (await import("./reels-BAD6FN6V-DZDNUs2z.js")).IconReels;
    case e.TABLET_LANDSCAPE:
      return (await import("./tablet-landscape-L4QKUNB3-DpLq1qJF.js")).IconTabletLandscape;
    case e.TABLET:
      return (await import("./tablet-3XZLGUJB-CaDA7__Z.js")).IconTablet;
    case e.TELEVISION:
      return (await import("./television-3GRZFI6B-CiwaAt5R.js")).IconTelevision;
    case e.TERMINAL:
      return (await import("./terminal-EPI6NWC7-CUYu754o.js")).IconTerminal;
    case e.VIDEO_CAMERA:
      return (await import("./video-camera-L62KKNY2-DcjZtIbE.js")).IconVideoCamera;
    case e.VIDEOS:
      return (await import("./videos-LY2DB42X-BGap8VOJ.js")).IconVideos;
    case e.VOLUME_I:
      return (await import("./volume-i-V7BVBPVB-SvojRh7a.js")).IconVolumeI;
    case e.VOLUME_II:
      return (await import("./volume-ii-TMVZREYY-DD8sRAT4.js")).IconVolumeIi;
    case e.VOLUME_III:
      return (await import("./volume-iii-VVNDKHB5-0R5JwTFV.js")).IconVolumeIii;
    case e.VOLUME_MUTE:
      return (await import("./volume-mute-X6DUKVT6-D3MloEF5.js")).IconVolumeMute;
    case e.VOLUME_OFF:
      return (await import("./volume-off-3535IHOL-BKQwDZ4U.js")).IconVolumeOff;
    case e.WEBSITE:
      return (await import("./website-BF4ZRMWE-CKBb7tnj.js")).IconWebsite;
    case e.WIFI2:
      return (await import("./wifi2-U3OQY7HX-B73D05qx.js")).IconWifi2;
    case e.WIFI3:
      return (await import("./wifi3-ZBNZYJNW-DjRwNlDy.js")).IconWifi3;
    case e.WIFI_ROUNDED:
      return (await import("./wifi-rounded-3NSGM2PL-CmLXWyk2.js")).IconWifiRounded;
    case e.WIFI:
      return (await import("./wifi-QXS7BOYH-B9m8gviq.js")).IconWifi;
    case e.AI_FACE:
      return (await import("./ai-face-J2AO4AWN-CVCuRi1K.js")).IconAiFace;
    case e.AI_LETTERS_BLOCKED:
      return (await import("./ai-letters-blocked-HDIEMI2Y-CykpywiP.js")).IconAiLettersBlocked;
    case e.AI_LETTERS_CIRCLED:
      return (await import("./ai-letters-circled-BVBYSTGG-BIBNPg8z.js")).IconAiLettersCircled;
    case e.AI_LETTERS:
      return (await import("./ai-letters-4QEXA5RQ-DYs1UoMK.js")).IconAiLetters;
    case e.AFRAME:
      return (await import("./aframe-WODYBD2C-CDSlbI-X.js")).IconAframe;
    case e.ARTWORK_FRAME:
      return (await import("./artwork-frame-AHPV6TNU-CwO7RmZ3.js")).IconArtworkFrame;
    case e.BARBECUE:
      return (await import("./barbecue-PTAMQ5MB-BjexhzTy.js")).IconBarbecue;
    case e.BATHROOM_ESSENTIALS:
      return (await import("./bathroom-essentials-X3SZXNDF-BxirOCUB.js")).IconBathroomEssentials;
    case e.BINOCULARS:
      return (await import("./binoculars-PZOHEMMZ-Df3PgsWr.js")).IconBinoculars;
    case e.BLENDER:
      return (await import("./blender-CGY3D4VR-C8pHaWL-.js")).IconBlender;
    case e.BOOKCASE:
      return (await import("./bookcase-4OSXI2O5-SvB9YW8f.js")).IconBookcase;
    case e.BRAIN:
      return (await import("./brain-7QINZFMP-XpEP6bgk.js")).IconBrain;
    case e.BRANCH2:
      return (await import("./branch2-65G6KVSU-DXc5MLgw.js")).IconBranch2;
    case e.BRANCH3:
      return (await import("./branch3-W555L3B6-BYYTcBpS.js")).IconBranch3;
    case e.BRANCH:
      return (await import("./branch-3IABDH73-DNm_GtZ7.js")).IconBranch;
    case e.BULB:
      return (await import("./bulb-5USZR4Z6-DYU4o2a2.js")).IconBulb;
    case e.CACTUS:
      return (await import("./cactus-RJVXFN55-DyNK9YKX.js")).IconCactus;
    case e.CAMPER:
      return (await import("./camper-6R3UITMC-Bxj5lhzk.js")).IconCamper;
    case e.CARAVAN:
      return (await import("./caravan-4EU74URY-B9XgNv1E.js")).IconCaravan;
    case e.CHIP:
      return (await import("./chip-FOE7FIVC-BKHPNodQ.js")).IconChip;
    case e.CLEANING_BUCKET:
      return (await import("./cleaning-bucket-DIMR7NHP-CvME8o5a.js")).IconCleaningBucket;
    case e.CLEANING_SPRAY:
      return (await import("./cleaning-spray-QWE4VOBM-Cs9nJLL5.js")).IconCleaningSpray;
    case e.CLOSET:
      return (await import("./closet-YYC5DUS7-DYW270ZV.js")).IconCloset;
    case e.COINS:
      return (await import("./coins-W3KOTOGH-BzAjQg01.js")).IconCoins;
    case e.COMPASS2:
      return (await import("./compass2-ZNE4LOAZ-Bn5RxRuK.js")).IconCompass2;
    case e.COMPASS:
      return (await import("./compass-FTDXXSOP-7-Rzhet6.js")).IconCompass;
    case e.CUBE3D:
      return (await import("./cube3d-6OK2C7QZ-CGzYOJHu.js")).IconCube3d;
    case e.EDUCATION:
      return (await import("./education-NXDBGPQV-DJHSZc12.js")).IconEducation;
    case e.FACTORY_ARM:
      return (await import("./factory-arm-PRYI5ONQ-DMQYgKaL.js")).IconFactoryArm;
    case e.FACTORY_BELT:
      return (await import("./factory-belt-QTGRQGBW-CUrnYqq3.js")).IconFactoryBelt;
    case e.FACTORY:
      return (await import("./factory-HYOA3GI4-CcRoO3V9.js")).IconFactory;
    case e.FINGERPRINT:
      return (await import("./fingerprint-B6PHBIJF-BgL4CYDb.js")).IconFingerprint;
    case e.FIRE:
      return (await import("./fire-I4L64KK5-OWiw0v81.js")).IconFire;
    case e.FRIDGE:
      return (await import("./fridge-FZMEYDYE-DcWGCe-j.js")).IconFridge;
    case e.FURNITURE_BED2:
      return (await import("./furniture-bed2-2UYLP676-_L28jvmE.js")).IconFurnitureBed2;
    case e.FURNITURE_BED_KING2:
      return (await import("./furniture-bed-king2-PCSSHT2O-Dp7_4DJk.js")).IconFurnitureBedKing2;
    case e.FURNITURE_BED_KING:
      return (await import("./furniture-bed-king-XK3LL3E3-CguBg0VK.js")).IconFurnitureBedKing;
    case e.FURNITURE_BED_SINGLE2:
      return (await import("./furniture-bed-single2-UADZAUV6-FB0CflqX.js")).IconFurnitureBedSingle2;
    case e.FURNITURE_BED_SINGLE:
      return (await import("./furniture-bed-single-JCUWK3G6-BKjWsM8y.js")).IconFurnitureBedSingle;
    case e.FURNITURE_BED:
      return (await import("./furniture-bed-5SPQFRVF-DRU4OZ9Q.js")).IconFurnitureBed;
    case e.FURNITURE_BEDSIDE_TABLE:
      return (await import("./furniture-bedside-table-BQXNJJV2-qEv48RLP.js")).IconFurnitureBedsideTable;
    case e.FURNITURE_CHAIR2:
      return (await import("./furniture-chair2-CHFZ237P-S7KKimTy.js")).IconFurnitureChair2;
    case e.FURNITURE_CHAIR3:
      return (await import("./furniture-chair3-V4FM3A56-Dm5jJ6KH.js")).IconFurnitureChair3;
    case e.FURNITURE_CHAIR4:
      return (await import("./furniture-chair4-S2SLI74T-B31ybLha.js")).IconFurnitureChair4;
    case e.FURNITURE_CHAIR:
      return (await import("./furniture-chair-P44UZSZX-Yy-ievHD.js")).IconFurnitureChair;
    case e.FURNITURE_COUCH2:
      return (await import("./furniture-couch2-PIBAUZYC-nQrNaMUT.js")).IconFurnitureCouch2;
    case e.FURNITURE_COUCH3:
      return (await import("./furniture-couch3-OUJCJWQ7-CQ1w5wa1.js")).IconFurnitureCouch3;
    case e.FURNITURE_COUCH4:
      return (await import("./furniture-couch4-UHSIMCX7-B2x7iDpw.js")).IconFurnitureCouch4;
    case e.FURNITURE_COUCH:
      return (await import("./furniture-couch-VX7H3ZBZ-CXWfV2wJ.js")).IconFurnitureCouch;
    case e.FURNITURE_DESK:
      return (await import("./furniture-desk-3BYYXGW6-KYmRWobG.js")).IconFurnitureDesk;
    case e.FURNITURE_DRESSOIR:
      return (await import("./furniture-dressoir-JG4SXJ2W-C5BOs6Zb.js")).IconFurnitureDressoir;
    case e.GRAPH_UP_ROUND:
      return (await import("./graph-up-round-SDOLWIVV-DUk9hUBv.js")).IconGraphUpRound;
    case e.GRAPH_UP:
      return (await import("./graph-up-UXSP3OQF-DBq8Ctop.js")).IconGraphUp;
    case e.HAIRDRYER:
      return (await import("./hairdryer-S3BVKN65-Cu2GdOZE.js")).IconHairdryer;
    case e.HILL_LANDSCAPE:
      return (await import("./hill-landscape-KLD46Z66-IqcTWmkI.js")).IconHillLandscape;
    case e.IDEA_FACTORY:
      return (await import("./idea-factory-IHYCDGJB-zcMyFavH.js")).IconIdeaFactory;
    case e.INDUSTRY3:
      return (await import("./industry3-7IC57F6U-BAKMdEX9.js")).IconIndustry3;
    case e.IRON:
      return (await import("./iron-U5A5WDAM-CWkOyNz0.js")).IconIron;
    case e.KITCHEN_CUTLERY:
      return (await import("./kitchen-cutlery-MJJ4R5CW-BUPJviEo.js")).IconKitchenCutlery;
    case e.KITCHEN_UTENSILS:
      return (await import("./kitchen-utensils-DEVO6GHU-Bb2vfX_D.js")).IconKitchenUtensils;
    case e.LAKE_VIEW:
      return (await import("./lake-view-V3UQO5RP-BDBwDr4j.js")).IconLakeView;
    case e.LEAF2:
      return (await import("./leaf2-QW4TQNQC--1lVnlAr.js")).IconLeaf2;
    case e.LEAF3:
      return (await import("./leaf3-ED7B34NM-CcX4CEq2.js")).IconLeaf3;
    case e.LEAF:
      return (await import("./leaf-YBGGDXQS-EoEblpxk.js")).IconLeaf;
    case e.LEAFS:
      return (await import("./leafs-V7VR6EG6-BUvwWg5C.js")).IconLeafs;
    case e.LIQUID_SOAP2:
      return (await import("./liquid-soap2-FNRQAPSM-B9l8BVCV.js")).IconLiquidSoap2;
    case e.LIQUID_SOAP:
      return (await import("./liquid-soap-ZL64R24C-C5OQmCcl.js")).IconLiquidSoap;
    case e.LUXE_VILLA:
      return (await import("./luxe-villa-M74XBUNI-Cd1fS0BV.js")).IconLuxeVilla;
    case e.MANSION:
      return (await import("./mansion-N3EIPFAS-DEg72vvB.js")).IconMansion;
    case e.MICROWAVE:
      return (await import("./microwave-57AZ76CW-fczVdNH6.js")).IconMicrowave;
    case e.MONEY:
      return (await import("./money-JF6GWGIK-Db2N8uYp.js")).IconMoney;
    case e.MONEYBAG:
      return (await import("./moneybag-WCYTV4HK-DoM5k_8U.js")).IconMoneybag;
    case e.MOUNTAIN_SCAPE:
      return (await import("./mountain-scape-2EK4WDPI-Ca1Il9iU.js")).IconMountainScape;
    case e.OVEN:
      return (await import("./oven-HEBBCTC2-zJGSotbx.js")).IconOven;
    case e.PLANT:
      return (await import("./plant-LBHPNOMJ-D90u2Fw8.js")).IconPlant;
    case e.POLITICIAN2:
      return (await import("./politician2-DK7WNLKP-Dr3fP6de.js")).IconPolitician2;
    case e.POLITICIAN:
      return (await import("./politician-CA4L6RZ7-CsNtgGVy.js")).IconPolitician;
    case e.ROCKET:
      return (await import("./rocket-F2OSYGDS-BGUCWwpm.js")).IconRocket;
    case e.ROOM_SHADE:
      return (await import("./room-shade-ILCPGR4B-R-bTuzoy.js")).IconRoomShade;
    case e.SHIELD2_LINE:
      return (await import("./shield2-line-Y4QQV4MS-C7fcHuId.js")).IconShield2Line;
    case e.SHIELD2:
      return (await import("./shield2-ZUAGZBZI-3aNRGRfh.js")).IconShield2;
    case e.SHIELD3_LINE:
      return (await import("./shield3-line-ZC6W5EVI-KuMlrTix.js")).IconShield3Line;
    case e.SHIELD3:
      return (await import("./shield3-RZM3FASE-B2sSVjxE.js")).IconShield3;
    case e.SHIELD4_LINE:
      return (await import("./shield4-line-JLPXVSOZ-Di5DwaWN.js")).IconShield4Line;
    case e.SHIELD4:
      return (await import("./shield4-MADYM3HS-Bt-x4LWP.js")).IconShield4;
    case e.SHIELD_LINE:
      return (await import("./shield-line-L4QMXGYA-BfMP5kch.js")).IconShieldLine;
    case e.SHIELD:
      return (await import("./shield-WHC7S4CZ-e4jlqoi7.js")).IconShield;
    case e.STOVE:
      return (await import("./stove-6B6QUZPA-CC34EN77.js")).IconStove;
    case e.SURFBOARD:
      return (await import("./surfboard-FEJZA6D2-CrSxkYkh.js")).IconSurfboard;
    case e.SWIMMING_POOL:
      return (await import("./swimming-pool-7WKQVWBB-D866M59h.js")).IconSwimmingPool;
    case e.TEMPLE2:
      return (await import("./temple2-FCBLWR5D-uXS1Ou8Z.js")).IconTemple2;
    case e.TEMPLE:
      return (await import("./temple-C6YLSB6O-BlR39EQ6.js")).IconTemple;
    case e.TENT_CAMPING:
      return (await import("./tent-camping-PHOPT3P5-C2EYRQRp.js")).IconTentCamping;
    case e.TENT:
      return (await import("./tent-TCD5XNPN-CTLTfcdy.js")).IconTent;
    case e.TOY_BLOCKS2:
      return (await import("./toy-blocks2-MBETRWPP-C1J-xOnZ.js")).IconToyBlocks2;
    case e.TOY_BLOCKS3:
      return (await import("./toy-blocks3-PO5GEMLG-Ds9wNAao.js")).IconToyBlocks3;
    case e.TOY_BLOCKS:
      return (await import("./toy-blocks-XBPNKPAQ-kGx-nfMp.js")).IconToyBlocks;
    case e.TOY_HEAD:
      return (await import("./toy-head-Y3G7TWB2-BVTeqd8C.js")).IconToyHead;
    case e.TREE2:
      return (await import("./tree2-YYI7K2I3-rzun5Cw2.js")).IconTree2;
    case e.TREE3:
      return (await import("./tree3-QPWARGN2-BMBeQ43P.js")).IconTree3;
    case e.TREE:
      return (await import("./tree-PUWLSJ4R-D6Il2C_H.js")).IconTree;
    case e.TREEHOUSE:
      return (await import("./treehouse-NE2I6CS3-CtewFRVX.js")).IconTreehouse;
    case e.TREES2:
      return (await import("./trees2-KFOQOGLG-5hbxL2EC.js")).IconTrees2;
    case e.TREES:
      return (await import("./trees-5I7CCI22-BY9Y4jeW.js")).IconTrees;
    case e.TRUNK1:
      return (await import("./trunk1-ARTRAETY-DYh8v8ON.js")).IconTrunk1;
    case e.TRUNK2:
      return (await import("./trunk2-SZ2XJYT4-7K5N9CAD.js")).IconTrunk2;
    case e.UFO:
      return (await import("./ufo-2J6PXI6S-ByNsk-O0.js")).IconUfo;
    case e.VOTE:
      return (await import("./vote-LIMET7OW-DDTEq5Kq.js")).IconVote;
    case e.WALLET:
      return (await import("./wallet-ZQELUZ6F-BrPSJCan.js")).IconWallet;
    case e.WASHING_MACHINE:
      return (await import("./washing-machine-DWN2STC3-BGYV1Zim.js")).IconWashingMachine;
    case e.WATERCOOKER:
      return (await import("./watercooker-HLOVG2ME-CMyQACLh.js")).IconWatercooker;
    case e.YURT:
      return (await import("./yurt-OD5RUGEF-DzNKXGQ7.js")).IconYurt;
    case e.BABY_STROLLER:
      return (await import("./baby-stroller-KRBLBHZX-Mwm6O7KF.js")).IconBabyStroller;
    case e.CLOTHING_TSHIRT:
      return (await import("./clothing-tshirt-W7IG3VZ2-oKYTIyVU.js")).IconClothingTshirt;
    case e.COTTON:
      return (await import("./cotton-IXE6T3KK-Cx3BhGW_.js")).IconCotton;
    case e.HOME_GARDEN:
      return (await import("./home-garden-M5G5FZUR-ipU9d0WM.js")).IconHomeGarden;
    case e.HYPOALLERGENIC:
      return (await import("./hypoallergenic-MEEQSCKO-uesDBnp8.js")).IconHypoallergenic;
    case e.NO_LEAKS:
      return (await import("./no-leaks-45R7C46M-DOjYLGe-.js")).IconNoLeaks;
    case e.SUITCASE_JOBS:
      return (await import("./suitcase-jobs-4FFABJBO-ArsIZfyG.js")).IconSuitcaseJobs;
    case e.SHOPPING_BAG2:
      return (await import("./shopping-bag2-3ZGMZRSG-tU63q21u.js")).IconShoppingBag2;
    case e.SHOPPING_BAG3:
      return (await import("./shopping-bag3-DU7P36V5-CkvUVUtK.js")).IconShoppingBag3;
    case e.SHOPPING_BAG_DISCOUNT:
      return (await import("./shopping-bag-discount-LFYYOBV5-DSj82Ajz.js")).IconShoppingBagDiscount;
    case e.SHOPPING_BAG:
      return (await import("./shopping-bag-XY3UKTG5-BANdUMcY.js")).IconShoppingBag;
    case e.SHOPPING_BASKET_ROUNDED:
      return (await import("./shopping-basket-rounded-FCGVSBFO-DicGKVKD.js")).IconShoppingBasketRounded;
    case e.SHOPPING_BASKET:
      return (await import("./shopping-basket-CGWBKBG2-DTyJySor.js")).IconShoppingBasket;
    case e.SHOPPING_CART_FAST:
      return (await import("./shopping-cart-fast-MARAT5QV-CCZKL_FU.js")).IconShoppingCartFast;
    case e.SHOPPING_CART:
      return (await import("./shopping-cart-22WAF3LO-Jwcbcw42.js")).IconShoppingCart;
    case e.SHOPPING_LABEL:
      return (await import("./shopping-label-VSAGUW4V-DxQV0EdC.js")).IconShoppingLabel;
    case e.SHOPPING_LABELS:
      return (await import("./shopping-labels-WDULFXIJ-D7pCg-fo.js")).IconShoppingLabels;
    case e.ICON43:
      return (await import("./icon43-5ZB3BAV4-CJEpIKKP.js")).IconIcon43;
    case e.BAHT_SYMBOL:
      return (await import("./baht-symbol-LPJKCNHY-CKYOcyK8.js")).IconBahtSymbol;
    case e.DICE1:
      return (await import("./dice1-4UKOWF7L-BWa5ETi4.js")).IconDice1;
    case e.DICE2:
      return (await import("./dice2-KDRGH3OW-BR-0mw6r.js")).IconDice2;
    case e.DICE3:
      return (await import("./dice3-NSLSVBG6-BalmbT3o.js")).IconDice3;
    case e.DICE4:
      return (await import("./dice4-TQCPJ5HT-BScc7JsK.js")).IconDice4;
    case e.DICE5:
      return (await import("./dice5-FBOR6EPY-aYT7k41H.js")).IconDice5;
    case e.DICE6:
      return (await import("./dice6-N6RWHX4I-DPdlRUsx.js")).IconDice6;
    case e.DICE7:
      return (await import("./dice7-776JOWAR-B7w-0VHB.js")).IconDice7;
    case e.DICE8:
      return (await import("./dice8-FIGYMHFN-BPV5TpU6.js")).IconDice8;
    case e.DICE9:
      return (await import("./dice9-2BPBZXHB-D31gHiC4.js")).IconDice9;
    case e.DIGIT_DIGITAL1:
      return (await import("./digit-digital1-F4FFYN5M-DeICJffI.js")).IconDigitDigital1;
    case e.DIGIT_DIGITAL2:
      return (await import("./digit-digital2-CHLIW24X-DCJfq0DK.js")).IconDigitDigital2;
    case e.DIGIT_DIGITAL3:
      return (await import("./digit-digital3-32RUS7HZ-Cf48FhSh.js")).IconDigitDigital3;
    case e.DIGIT_DIGITAL4:
      return (await import("./digit-digital4-VISYEVVE-Ovc0tx48.js")).IconDigitDigital4;
    case e.DIGIT_DIGITAL5:
      return (await import("./digit-digital5-J5BSUAC4-CvWCc-21.js")).IconDigitDigital5;
    case e.DIGIT_DIGITAL6:
      return (await import("./digit-digital6-BJXFKNKB-CZLxR5x7.js")).IconDigitDigital6;
    case e.DIGIT_DIGITAL7:
      return (await import("./digit-digital7-BHASIRVW-MQRYujhK.js")).IconDigitDigital7;
    case e.DIGIT_DIGITAL8:
      return (await import("./digit-digital8-CHLCPYAG-2NDGtOOj.js")).IconDigitDigital8;
    case e.DIGIT_DIGITAL9:
      return (await import("./digit-digital9-ZHHQ6GGL-BF4F0tU0.js")).IconDigitDigital9;
    case e.DIGIT_DIGTAL0:
      return (await import("./digit-digtal0-I2C7TAX3-CEf6hlvF.js")).IconDigitDigtal0;
    case e.DOLLAR:
      return (await import("./dollar-RG6WVTIF-C4RINLEJ.js")).IconDollar;
    case e.EURO:
      return (await import("./euro-SXFQ2225-CYrc4Lv8.js")).IconEuro;
    case e.PERCENTAGE:
      return (await import("./percentage-WIWV6AEM-C2c0Wt7m.js")).IconPercentage;
    case e.POUND_SYMBOL:
      return (await import("./pound-symbol-MLCOIH2X-X_oB64-C.js")).IconPoundSymbol;
    case e.PROMILLE:
      return (await import("./promille-WJSICKNL-C4SgyETW.js")).IconPromille;
    case e.RUBLES_SYMBOL:
      return (await import("./rubles-symbol-HOF3QGCJ-DeBCuIOH.js")).IconRublesSymbol;
    case e.RUPEE_SYMBOL_COPY:
      return (await import("./rupee-symbol-copy-OZOUOG4D-CHOtXo_s.js")).IconRupeeSymbolCopy;
    case e.RUPEE_SYMBOL:
      return (await import("./rupee-symbol-Z5WO626T-WXiCc_NU.js")).IconRupeeSymbol;
    case e.SYMBOL_FEMALE:
      return (await import("./symbol-female-DAWNMGSO-gXxREkA6.js")).IconSymbolFemale;
    case e.SYMBOL_MALE:
      return (await import("./symbol-male-BZLRFXN3-gBKq_8sb.js")).IconSymbolMale;
    case e.SYMBOL_UNISEX:
      return (await import("./symbol-unisex-HSIJAAF4-BUZjH6HQ.js")).IconSymbolUnisex;
    case e.THREE_DOTS_DIAGONAL_MAJOR:
      return (await import("./three-dots-diagonal-major-VO4ULRAD-DPtOSMNp.js")).IconThreeDotsDiagonalMajor;
    case e.THREE_DOTS_DIAGONAL_MINOR:
      return (await import("./three-dots-diagonal-minor-KMZV4RCN-fvCVCKJU.js")).IconThreeDotsDiagonalMinor;
    case e.THREE_DOTS_HORIZONTAL:
      return (await import("./three-dots-horizontal-6E4CLDTG-Bds4YKem.js")).IconThreeDotsHorizontal;
    case e.THREE_DOTS_LINES:
      return (await import("./three-dots-lines-BLZPL35S-BxoF39v9.js")).IconThreeDotsLines;
    case e.THREE_DOTS_VERTICAL:
      return (await import("./three-dots-vertical-JDMI4UPS-DDjwb67T.js")).IconThreeDotsVertical;
    case e.TWO_DOTS_DIAGONAL_MAJOR:
      return (await import("./two-dots-diagonal-major-WZVIPXJD-DE9vbYVw.js")).IconTwoDotsDiagonalMajor;
    case e.TWO_DOTS_DIAGONAL_MINOR:
      return (await import("./two-dots-diagonal-minor-FMKDJB3E-XEWQdPjc.js")).IconTwoDotsDiagonalMinor;
    case e.TWO_DOTS_HORIZONTAL:
      return (await import("./two-dots-horizontal-QMYEBWFF-BVAX_nuJ.js")).IconTwoDotsHorizontal;
    case e.TWO_DOTS_LINES:
      return (await import("./two-dots-lines-3AFKVNBP-DnmnXeIa.js")).IconTwoDotsLines;
    case e.TWO_DOTS_VERTICAL:
      return (await import("./two-dots-vertical-4EIQUXV3-BLrO2U_N.js")).IconTwoDotsVertical;
    case e.YEN:
      return (await import("./yen-VWQGVCMM--ztuXRpm.js")).IconYen;
    case e.BALL_BASKETBALL:
      return (await import("./ball-basketball-EIXHYYLR-HWRW3ZB6.js")).IconBallBasketball;
    case e.BALL_FOOTBALL:
      return (await import("./ball-football-L3VS4DPY-B2db8y9h.js")).IconBallFootball;
    case e.BALL_RUGBY:
      return (await import("./ball-rugby-QX7FJND4-vsGMein_.js")).IconBallRugby;
    case e.BALL_TENNIS:
      return (await import("./ball-tennis-GQVZFU64-D21pBncQ.js")).IconBallTennis;
    case e.ACCESSIBILITY_PERSON_CIRCLED:
      return (await import("./accessibility-person-circled-3RRSFSEL-BbZlNuwb.js")).IconAccessibilityPersonCircled;
    case e.ACCESSIBILITY_PERSON:
      return (await import("./accessibility-person-U4W44OLC-C_Yu_vyd.js")).IconAccessibilityPerson;
    case e.ADD_FAT:
      return (await import("./add-fat-EWBHK6TR-D5bPXiFs.js")).IconAddFat;
    case e.ADD_L:
      return (await import("./add-l-REPGDDK2-BYAiDkAN.js")).IconAddL;
    case e.ADD_LINES:
      return (await import("./add-lines-HOYCUA2V-BMEdmdQF.js")).IconAddLines;
    case e.ADD_M:
      return (await import("./add-m-JPLXKNNV-DLVQmRuH.js")).IconAddM;
    case e.ADD_S:
      return (await import("./add-s-4JIAKNKA-DtZjd6eA.js")).IconAddS;
    case e.AT_SIGN:
      return (await import("./at-sign-7XMPIBWK-qnVF-3nL.js")).IconAtSign;
    case e.BLOCK_PARTIALS:
      return (await import("./block-partials-JKJN4GYT-BER_KGgy.js")).IconBlockPartials;
    case e.BOARD_ADD2:
      return (await import("./board-add2-MSWFIKBH-CHny3dTk.js")).IconBoardAdd2;
    case e.BOARD_MULTI2_HORIZONTAL:
      return (await import("./board-multi2-horizontal-YMSRO5QA-DrckFOYH.js")).IconBoardMulti2Horizontal;
    case e.BOARD_MULTI2_VERTICAL:
      return (await import("./board-multi2-vertical-O6CUMR6Q-BofxamFe.js")).IconBoardMulti2Vertical;
    case e.BOARD_MULTI_DASHBOARD:
      return (await import("./board-multi-dashboard-37UPBVAH-D5mAT1Iq.js")).IconBoardMultiDashboard;
    case e.BOARD_MULTI_T_DOWN:
      return (await import("./board-multi-t-down-UUN3TPPM-CUPQ_95Q.js")).IconBoardMultiTDown;
    case e.BOARD_MULTI_T_LEFT:
      return (await import("./board-multi-t-left-ZQMRJ5PD-Bx9-PpE1.js")).IconBoardMultiTLeft;
    case e.BOARD_MULTI_T_RIGHT:
      return (await import("./board-multi-t-right-2HYVLQF2-DFcQNJP9.js")).IconBoardMultiTRight;
    case e.BOARD_MULTI_T_UP:
      return (await import("./board-multi-t-up-B2MIWBF4-CcnNTG0x.js")).IconBoardMultiTUp;
    case e.BOARD_MULTI:
      return (await import("./board-multi-DWW62GQY-CoJbMPHe.js")).IconBoardMulti;
    case e.BOARD_MULTIPLY2:
      return (await import("./board-multiply2-ZEYLGHYL-ithZ0TpA.js")).IconBoardMultiply2;
    case e.BOARD_SPLIT13_HORIZONTAL:
      return (await import("./board-split13-horizontal-OFKFN3FN-BVqaZHxN.js")).IconBoardSplit13Horizontal;
    case e.BOARD_SPLIT13_VERTICAL:
      return (await import("./board-split13-vertical-E7MDDXUQ-BFrJzKys.js")).IconBoardSplit13Vertical;
    case e.BOARD_SPLIT2_HORIZONTAL:
      return (await import("./board-split2-horizontal-WQEIXCQR-qj45gpBs.js")).IconBoardSplit2Horizontal;
    case e.BOARD_SPLIT2_VERTICAL:
      return (await import("./board-split2-vertical-QCOYKZ5N-BfBO1hlc.js")).IconBoardSplit2Vertical;
    case e.BOARD_SPLIT31_HORIZONTAL:
      return (await import("./board-split31-horizontal-IEYWVHGV-BLEbB1XW.js")).IconBoardSplit31Horizontal;
    case e.BOARD_SPLIT31_VERTICAL:
      return (await import("./board-split31-vertical-TW3I3K53-xaCQog7f.js")).IconBoardSplit31Vertical;
    case e.BOARD_SPLIT3_HORIZONTAL:
      return (await import("./board-split3-horizontal-NVZ5IANM-BLuL4TTu.js")).IconBoardSplit3Horizontal;
    case e.BOARD_SPLIT3_VERTICAL:
      return (await import("./board-split3-vertical-5RL3R4Z6-B__8_Qup.js")).IconBoardSplit3Vertical;
    case e.BOARD_SPLIT4_HORIZONTAL:
      return (await import("./board-split4-horizontal-2PAE6YDX-Dx4cbuVL.js")).IconBoardSplit4Horizontal;
    case e.BOARD_SPLIT4_VERTICAL:
      return (await import("./board-split4-vertical-GOUISA5C-DwIUIpD4.js")).IconBoardSplit4Vertical;
    case e.BOARD_SPLIT_T_DOWN:
      return (await import("./board-split-t-down-Q4DRIAST-DM0WRqyh.js")).IconBoardSplitTDown;
    case e.BOARD_SPLIT_T_LEFT:
      return (await import("./board-split-t-left-KBTFQXGK-D23NulnG.js")).IconBoardSplitTLeft;
    case e.BOARD_SPLIT_T_RIGHT:
      return (await import("./board-split-t-right-FEIDGVSY-B2h9kTcJ.js")).IconBoardSplitTRight;
    case e.BOARD_SPLIT_T_UP:
      return (await import("./board-split-t-up-CIMCWQPF-DaYdW_5r.js")).IconBoardSplitTUp;
    case e.BOARD_SUBTRACT2:
      return (await import("./board-subtract2-X7YHWIWZ-Bethxi66.js")).IconBoardSubtract2;
    case e.BOARD:
      return (await import("./board-TEVWBPLP-IyPAFEEK.js")).IconBoard;
    case e.BOX_IN:
      return (await import("./box-in-SGDDHTVQ-GW9WlIi_.js")).IconBoxIn;
    case e.BOX_OUT:
      return (await import("./box-out-IVYL6HO2-CsU0fJbg.js")).IconBoxOut;
    case e.BOX:
      return (await import("./box-W6VMWJEM-B-z66NUT.js")).IconBox;
    case e.BOY:
      return (await import("./boy-M3NRWV4D-Dm2qhPoT.js")).IconBoy;
    case e.BROKEN_HEART_F:
      return (await import("./broken-heart-f-YDEOCIEN-bxYx-tur.js")).IconBrokenHeartF;
    case e.BROKEN_HEART_L:
      return (await import("./broken-heart-l-FY6JHQAU-Dv6H8ip3.js")).IconBrokenHeartL;
    case e.BROKEN_HEART_M:
      return (await import("./broken-heart-m-OPCXJ32I-BFtiyw4c.js")).IconBrokenHeartM;
    case e.BUILDING_CHURCH:
      return (await import("./building-church-PPFVYI45-lETvcexT.js")).IconBuildingChurch;
    case e.BUILDING_HOUSE2:
      return (await import("./building-house2-UDBQ4CLU-BI2cSkvt.js")).IconBuildingHouse2;
    case e.BUILDING_HOUSE:
      return (await import("./building-house-XVUM7P7X-BbgrfKKF.js")).IconBuildingHouse;
    case e.BUILDING_SHOP:
      return (await import("./building-shop-YFMMZ5NF-oMbN4S73.js")).IconBuildingShop;
    case e.BUTTON_ADD:
      return (await import("./button-add-I4ZVCNS2-B_ZN6EmW.js")).IconButtonAdd;
    case e.BUTTON_BROKEN_HEART2:
      return (await import("./button-broken-heart2-6OWE3E5U-X0jHxyj_.js")).IconButtonBrokenHeart2;
    case e.BUTTON_BROKEN_HEART:
      return (await import("./button-broken-heart-T5EDZHOJ-Ct2-w5FI.js")).IconButtonBrokenHeart;
    case e.BUTTON_CHECK2:
      return (await import("./button-check2-IQ2ORFYJ-C0UUE2RJ.js")).IconButtonCheck2;
    case e.BUTTON_CHECK:
      return (await import("./button-check-ECM56Y4L-BlCUbLcQ.js")).IconButtonCheck;
    case e.BUTTON_EDIT2:
      return (await import("./button-edit2-U32COBEC-DXZXev83.js")).IconButtonEdit2;
    case e.BUTTON_EDIT:
      return (await import("./button-edit-AOMB4BRU-CgAf3ZAs.js")).IconButtonEdit;
    case e.BUTTON_EXCLAMATION_MARK2:
      return (await import("./button-exclamation-mark2-RQOSTK56-BX7SY-DI.js")).IconButtonExclamationMark2;
    case e.BUTTON_EXCLAMATION_MARK:
      return (await import("./button-exclamation-mark-2X3MSSWP-DPYcH26P.js")).IconButtonExclamationMark;
    case e.BUTTON_HEART2:
      return (await import("./button-heart2-QMOIMJPZ-BwIVbPXa.js")).IconButtonHeart2;
    case e.BUTTON_HEART:
      return (await import("./button-heart-BHATQKOR-0PlbSEe3.js")).IconButtonHeart;
    case e.BUTTON_INFO2:
      return (await import("./button-info2-UFM2AWJS-BbU-PEdW.js")).IconButtonInfo2;
    case e.BUTTON_INFO:
      return (await import("./button-info-6PDY367O-Bl9zqQz4.js")).IconButtonInfo;
    case e.BUTTON_INVISIBLE2:
      return (await import("./button-invisible2-OSGOF42X-Dh1KWCZ-.js")).IconButtonInvisible2;
    case e.BUTTON_INVISIBLE:
      return (await import("./button-invisible-4ILPCC4G-CLUCfrSP.js")).IconButtonInvisible;
    case e.BUTTON_MULTIPLY:
      return (await import("./button-multiply-5FGGPWVD-GXI4cm-k.js")).IconButtonMultiply;
    case e.BUTTON_QUESTION_MARK2:
      return (await import("./button-question-mark2-LGEFC6WC-ChQEbRYL.js")).IconButtonQuestionMark2;
    case e.BUTTON_QUESTION_MARK:
      return (await import("./button-question-mark-EI6OMCOD-bKgDNw3D.js")).IconButtonQuestionMark;
    case e.BUTTON_SEARCH2:
      return (await import("./button-search2-MC2GKMJ2-CA5x6avP.js")).IconButtonSearch2;
    case e.BUTTON_SEARCH:
      return (await import("./button-search-HCREW26J-C3pueI0J.js")).IconButtonSearch;
    case e.BUTTON_STAR2:
      return (await import("./button-star2-2DLPN5P7-CfEa8d2E.js")).IconButtonStar2;
    case e.BUTTON_STAR:
      return (await import("./button-star-U3QXTLKF-BznmDlYS.js")).IconButtonStar;
    case e.BUTTON_SUBTRACT:
      return (await import("./button-subtract-QNPPFW7X-CEfbaMnz.js")).IconButtonSubtract;
    case e.BUTTON_VISIBLE2:
      return (await import("./button-visible2-OWFEQ7LR-DPcyjBo8.js")).IconButtonVisible2;
    case e.BUTTON_VISIBLE:
      return (await import("./button-visible-UVBBUFMZ-dNOy-AhG.js")).IconButtonVisible;
    case e.BUTTON:
      return (await import("./button-PKKA5UXE-BwrcOPZu.js")).IconButton;
    case e.CALENDAR2:
      return (await import("./calendar2-AQDFY2SB-78m0KV63.js")).IconCalendar2;
    case e.CALENDAR:
      return (await import("./calendar-6F46F6F6-Cp8j-Nzc.js")).IconCalendar;
    case e.CHART_BARS_SQUARED:
      return (await import("./chart-bars-squared-5QWEOE5S-OP4DVm0Y.js")).IconChartBarsSquared;
    case e.CHART_BUBBLES:
      return (await import("./chart-bubbles-F2I7QYEY-BCWxOm89.js")).IconChartBubbles;
    case e.CHART_CANDLES:
      return (await import("./chart-candles-XH7ELZQA--vWNR1vM.js")).IconChartCandles;
    case e.CHART_HALF_CIRCLE:
      return (await import("./chart-half-circle-5XRDCODV-BtMdmJX1.js")).IconChartHalfCircle;
    case e.CHART_LINE_SQUARED:
      return (await import("./chart-line-squared-4APC6C5Q-C_99O4Tj.js")).IconChartLineSquared;
    case e.CHART_LINE:
      return (await import("./chart-line-MCPIURDN-CQkKM1pF.js")).IconChartLine;
    case e.CHART_PIE:
      return (await import("./chart-pie-NQHU5FNE-RVap-Qbh.js")).IconChartPie;
    case e.CHECK_FAT:
      return (await import("./check-fat-IW7GKKWQ-06mtdZTP.js")).IconCheckFat;
    case e.CHECK_L:
      return (await import("./check-l-AX2XQ2DQ-BV6hkZSi.js")).IconCheckL;
    case e.CHECK_LIST:
      return (await import("./check-list-P2Q5EASV-C1nUdx47.js")).IconCheckList;
    case e.CHECK_M:
      return (await import("./check-m-4642VVSW-CkR4_Tm9.js")).IconCheckM;
    case e.CHECK_S:
      return (await import("./check-s-LPF2H2KI-WoviA1M-.js")).IconCheckS;
    case e.CIRCLE_INVISIBLE:
      return (await import("./circle-invisible-XB6MDRV3-2lKNzwCV.js")).IconCircleInvisible;
    case e.CIRCLE_SUBTRACT:
      return (await import("./circle-subtract-NBZSPPHT-BrItMMZW.js")).IconCircleSubtract;
    case e.CIRCLED_ADD:
      return (await import("./circled-add-M4WWNZB4-DIK_GJyu.js")).IconCircledAdd;
    case e.CIRCLED_BROKEN_HEART:
      return (await import("./circled-broken-heart-H5F25OBI-BTpXI4ke.js")).IconCircledBrokenHeart;
    case e.CIRCLED_CHECK:
      return (await import("./circled-check-J5NKDY3G-DDhzmB9V.js")).IconCircledCheck;
    case e.CIRCLED_EDIT:
      return (await import("./circled-edit-AZNMFJV4-JlV2tn2s.js")).IconCircledEdit;
    case e.CIRCLED_EXCLAMATION_MARK:
      return (await import("./circled-exclamation-mark-UMFLVVKC-DkWpFbu4.js")).IconCircledExclamationMark;
    case e.CIRCLED_HEART:
      return (await import("./circled-heart-IF4W2FS3-DQO06a7N.js")).IconCircledHeart;
    case e.CIRCLED_INFO:
      return (await import("./circled-info-ODK3ZCBD-EqLQDdd-.js")).IconCircledInfo;
    case e.CIRCLED_MULTIPLY:
      return (await import("./circled-multiply-UPH64LKJ-B0Y1wzmh.js")).IconCircledMultiply;
    case e.CIRCLED_QUESTION_MARK:
      return (await import("./circled-question-mark-3GOWLJV5-D3PqHiMW.js")).IconCircledQuestionMark;
    case e.CIRCLED_SEARCH:
      return (await import("./circled-search-U3SSCLSD-CXodiOS-.js")).IconCircledSearch;
    case e.CIRCLED_STAR:
      return (await import("./circled-star-4DCB3TG6-Wl-XT_OI.js")).IconCircledStar;
    case e.CIRCLED_VISIBLE:
      return (await import("./circled-visible-7GCIMKUP-CjO_OrrD.js")).IconCircledVisible;
    case e.CIRCLED:
      return (await import("./circled-5CZ6JTP3-jvYkLAvj.js")).IconCircled;
    case e.CIRCULAR_LOADER:
      return (await import("./circular-loader-3NFL5ZFG-DEroRJhi.js")).IconCircularLoader;
    case e.CLOCK:
      return (await import("./clock-SQUCAIEM-BLCs33xj.js")).IconClock;
    case e.CODE_BRACKETS_CIRCLED:
      return (await import("./code-brackets-circled-W5RNYTUO-BKznD7hE.js")).IconCodeBracketsCircled;
    case e.CODE_BRACKETS:
      return (await import("./code-brackets-6NZ3AAI3-B-nnLe2f.js")).IconCodeBrackets;
    case e.CODE_CHEVRONS_CIRCLED:
      return (await import("./code-chevrons-circled-6622NOSE-DQFPvtD5.js")).IconCodeChevronsCircled;
    case e.CODE_CHEVRONS_OPEN_CIRCLED:
      return (await import("./code-chevrons-open-circled-NHEK6JZX-DtNVwkEF.js")).IconCodeChevronsOpenCircled;
    case e.CODE_CHEVRONS_OPEN:
      return (await import("./code-chevrons-open-VJWP7MQG-CYhSNOEp.js")).IconCodeChevronsOpen;
    case e.CODE_CHEVRONS:
      return (await import("./code-chevrons-EDJ233QQ-t3vJc7CP.js")).IconCodeChevrons;
    case e.COMPANY:
      return (await import("./company-X5URVUFV-BlGoDKcn.js")).IconCompany;
    case e.DISLIKE:
      return (await import("./dislike-TQTDSYQQ-CTZ9Efns.js")).IconDislike;
    case e.EDIT_FAT:
      return (await import("./edit-fat-BCDT5W2U-BXp8Y4xE.js")).IconEditFat;
    case e.EDIT_L:
      return (await import("./edit-l-E4QTIUXF-DC3LCwwF.js")).IconEditL;
    case e.EDIT_LINE_SWIRL:
      return (await import("./edit-line-swirl-JXDC55W3-BdtoFB2C.js")).IconEditLineSwirl;
    case e.EDIT_LINE:
      return (await import("./edit-line-GSILV7BT-DJ5X8cLI.js")).IconEditLine;
    case e.EDIT_M:
      return (await import("./edit-m-NBOVCNYK-HS4Vnmsc.js")).IconEditM;
    case e.EDIT_S:
      return (await import("./edit-s-TMHAQP7Q-CU2XvVK8.js")).IconEditS;
    case e.EXCLAMATION_MARK_FAT:
      return (await import("./exclamation-mark-fat-JRVM73G5-DQo4Hz2S.js")).IconExclamationMarkFat;
    case e.EXCLAMATION_MARK_L:
      return (await import("./exclamation-mark-l-M2L3PZCV-D1A-hByu.js")).IconExclamationMarkL;
    case e.EXCLAMATION_MARK_M:
      return (await import("./exclamation-mark-m-FVKJO5WC-9b0g9hQw.js")).IconExclamationMarkM;
    case e.EXCLAMATION_MARK_S:
      return (await import("./exclamation-mark-s-J33J6ATZ-53oqkMTV.js")).IconExclamationMarkS;
    case e.FEMALE_SIMPLIFIED:
      return (await import("./female-simplified-SAG422A3-BohvY3en.js")).IconFemaleSimplified;
    case e.FILE_ADD267:
      return (await import("./file-add267-BUMW2WHM-rmZjKxXe.js")).IconFileAdd267;
    case e.FILE_ADD269:
      return (await import("./file-add269-ZCCFTLAG-Byjbq-eO.js")).IconFileAdd269;
    case e.FILE_ADD:
      return (await import("./file-add-KEQKBUQU-DA0_5X58.js")).IconFileAdd;
    case e.FILE_ARCHIVE:
      return (await import("./file-archive-JB4ZMVZZ-B_a1oi3f.js")).IconFileArchive;
    case e.FILE_ARROW_UP:
      return (await import("./file-arrow-up-P7VVRB5H-DEzE_S6Y.js")).IconFileArrowUp;
    case e.FILE_BINARY:
      return (await import("./file-binary-7I6ME65G-CUQlgoo5.js")).IconFileBinary;
    case e.FILE_BROKEN_HEART2:
      return (await import("./file-broken-heart2-JFSG62KX-CZP31InA.js")).IconFileBrokenHeart2;
    case e.FILE_BROKEN_HEART:
      return (await import("./file-broken-heart-IK3VVG7C-CaDoGj-4.js")).IconFileBrokenHeart;
    case e.FILE_CHECK2:
      return (await import("./file-check2-7ZQ2VDEE-BWxDsyCF.js")).IconFileCheck2;
    case e.FILE_CHECK:
      return (await import("./file-check-3O7KVPBH-BIJ2fT0q.js")).IconFileCheck;
    case e.FILE_CLOUD:
      return (await import("./file-cloud-YI5ZO3HT-BST9LPme.js")).IconFileCloud;
    case e.FILE_CODE:
      return (await import("./file-code-WXHGRQGI-6id3Zadd.js")).IconFileCode;
    case e.FILE_COLUMNS:
      return (await import("./file-columns-BKKWZQI5-cVio8ISc.js")).IconFileColumns;
    case e.FILE_EDIT2:
      return (await import("./file-edit2-VOCLEAVO-KusogxJI.js")).IconFileEdit2;
    case e.FILE_EDIT:
      return (await import("./file-edit-6ASOT7A5-rWv1hsvE.js")).IconFileEdit;
    case e.FILE_EXCLAMATION_MARK2:
      return (await import("./file-exclamation-mark2-WROB2TNJ-kVum71XE.js")).IconFileExclamationMark2;
    case e.FILE_EXCLAMATION_MARK:
      return (await import("./file-exclamation-mark-VPHU3NY4-DkFJhj7T.js")).IconFileExclamationMark;
    case e.FILE_GRAPHS:
      return (await import("./file-graphs-RCICTZNN-qXhnFsWE.js")).IconFileGraphs;
    case e.FILE_HEART2:
      return (await import("./file-heart2-XG2WI2EI-CiC8SXEM.js")).IconFileHeart2;
    case e.FILE_HEART:
      return (await import("./file-heart-V57VGO2H-q7f3NarZ.js")).IconFileHeart;
    case e.FILE_INFO2:
      return (await import("./file-info2-FF2FNSLA-BjfA2Aof.js")).IconFileInfo2;
    case e.FILE_INFO:
      return (await import("./file-info-AAGFKJPJ-Dmogyvrt.js")).IconFileInfo;
    case e.FILE_INVISIBLE2:
      return (await import("./file-invisible2-XKUCVJ62-Bvw-yEbG.js")).IconFileInvisible2;
    case e.FILE_INVISIBLE:
      return (await import("./file-invisible-VUEBVZF6-BwIM9U2v.js")).IconFileInvisible;
    case e.FILE_MULTIPLY:
      return (await import("./file-multiply-KMV5BWKI-mLK8MBe8.js")).IconFileMultiply;
    case e.FILE_QUESTION_MARK2:
      return (await import("./file-question-mark2-CXFHDQ3R-tad-hrFg.js")).IconFileQuestionMark2;
    case e.FILE_QUESTION_MARK:
      return (await import("./file-question-mark-CGCLIOPW-uOPS5T3s.js")).IconFileQuestionMark;
    case e.FILE_SEARCH2:
      return (await import("./file-search2-DMDZPKWX-TRGoa3Q6.js")).IconFileSearch2;
    case e.FILE_SEARCH:
      return (await import("./file-search-BNB75JZL-o0EcrwMA.js")).IconFileSearch;
    case e.FILE_STAR2:
      return (await import("./file-star2-CYMIXECO-ByU8dEzv.js")).IconFileStar2;
    case e.FILE_STAR:
      return (await import("./file-star-VOD2TX4J-iKeCNZRN.js")).IconFileStar;
    case e.FILE_SUBTRACT2:
      return (await import("./file-subtract2-Y2JKKCVU-D6EJhtBi.js")).IconFileSubtract2;
    case e.FILE_SUBTRACT:
      return (await import("./file-subtract-4UKVA3WO-Dr2Z_fo9.js")).IconFileSubtract;
    case e.FILE_TEXT:
      return (await import("./file-text-3G7XC556-CM-iIGfX.js")).IconFileText;
    case e.FILE_TRAY_STACK:
      return (await import("./file-tray-stack-WBTXVDJ6-Cdwfh33f.js")).IconFileTrayStack;
    case e.FILE_TRAY:
      return (await import("./file-tray-2X64PXDC-QSLc4nxj.js")).IconFileTray;
    case e.FILE_VISIBLE2:
      return (await import("./file-visible2-4AI4DQ3C-DYXBbC0F.js")).IconFileVisible2;
    case e.FILE_VISIBLE:
      return (await import("./file-visible-IVXW44LN-CyeOVEa-.js")).IconFileVisible;
    case e.FILE:
      return (await import("./file-XQJ3E5ZJ-cBOrgPbF.js")).IconFile;
    case e.FOLDER_ADD2:
      return (await import("./folder-add2-PK4JI76I-OuZCk-hE.js")).IconFolderAdd2;
    case e.FOLDER_ADD:
      return (await import("./folder-add-FH7VYIS7-jqNO_XLL.js")).IconFolderAdd;
    case e.FOLDER_BROKEN_HEART2:
      return (await import("./folder-broken-heart2-L2MSFL3R-CtpH1aJc.js")).IconFolderBrokenHeart2;
    case e.FOLDER_BROKEN_HEART:
      return (await import("./folder-broken-heart-DXPVRBYE-BH0a1DlO.js")).IconFolderBrokenHeart;
    case e.FOLDER_CHECK2:
      return (await import("./folder-check2-IWG6CVN4-BCwFrGRj.js")).IconFolderCheck2;
    case e.FOLDER_CHECK:
      return (await import("./folder-check-THF45XIK-BYN5m_OW.js")).IconFolderCheck;
    case e.FOLDER_EDIT2:
      return (await import("./folder-edit2-6ACZEN5X-CZoCLtHG.js")).IconFolderEdit2;
    case e.FOLDER_EDIT:
      return (await import("./folder-edit-S6YIK5WM-uV32SFrc.js")).IconFolderEdit;
    case e.FOLDER_EXCLAMATION_MARK2:
      return (await import("./folder-exclamation-mark2-5VI7TUYP-DTMmg6AP.js")).IconFolderExclamationMark2;
    case e.FOLDER_EXCLAMATION_MARK:
      return (await import("./folder-exclamation-mark-WTE3P6CM-Bsy7P_eC.js")).IconFolderExclamationMark;
    case e.FOLDER_HEART2:
      return (await import("./folder-heart2-3DU4ZZKT-DJij0jnh.js")).IconFolderHeart2;
    case e.FOLDER_HEART:
      return (await import("./folder-heart-OAG6TJVG-DdwVFl3R.js")).IconFolderHeart;
    case e.FOLDER_INFO2:
      return (await import("./folder-info2-Z3I72MBD-C9RJx5EY.js")).IconFolderInfo2;
    case e.FOLDER_INFO:
      return (await import("./folder-info-PN5LCT3H-D9HKQBJf.js")).IconFolderInfo;
    case e.FOLDER_INVISIBLE2:
      return (await import("./folder-invisible2-UCSGYDU6-DPAE-kiX.js")).IconFolderInvisible2;
    case e.FOLDER_INVISIBLE:
      return (await import("./folder-invisible-VQNG3XXE-Dx_oKaai.js")).IconFolderInvisible;
    case e.FOLDER_MULTIPLY2:
      return (await import("./folder-multiply2-WC27H6Y5-BO5Dzvev.js")).IconFolderMultiply2;
    case e.FOLDER_MULTIPLY:
      return (await import("./folder-multiply-OFMUHRF3-DpYJxtiR.js")).IconFolderMultiply;
    case e.FOLDER_QUESTION_MARK2:
      return (await import("./folder-question-mark2-BLL5GN66-DFLc0AaM.js")).IconFolderQuestionMark2;
    case e.FOLDER_QUESTION_MARK:
      return (await import("./folder-question-mark-VKKSSMDK-BW4KH4PH.js")).IconFolderQuestionMark;
    case e.FOLDER_SEARCH2:
      return (await import("./folder-search2-W5QN3AIJ-CzifQj7b.js")).IconFolderSearch2;
    case e.FOLDER_SEARCH:
      return (await import("./folder-search-DRDJZJ3Z-CUJbJ62g.js")).IconFolderSearch;
    case e.FOLDER_STAR2:
      return (await import("./folder-star2-XP4XKMYP-CGwIlGxY.js")).IconFolderStar2;
    case e.FOLDER_STAR:
      return (await import("./folder-star-T3KJDSYD-VUj1UjhE.js")).IconFolderStar;
    case e.FOLDER_SUBTRACT2:
      return (await import("./folder-subtract2-IRM2YRSF-DBQ7qh0X.js")).IconFolderSubtract2;
    case e.FOLDER_SUBTRACT:
      return (await import("./folder-subtract-PGJCONHN-C3fyNNAn.js")).IconFolderSubtract;
    case e.FOLDER_VISIBLE2:
      return (await import("./folder-visible2-LNOQCJDX-HwRShYGc.js")).IconFolderVisible2;
    case e.FOLDER_VISIBLE:
      return (await import("./folder-visible-TJ5VCF3P-BaEjwidR.js")).IconFolderVisible;
    case e.FOLDER:
      return (await import("./folder-3SJL7PNN-DCuH41xl.js")).IconFolder;
    case e.GIRL:
      return (await import("./girl-6GZ6GYXG-B_lGjQC6.js")).IconGirl;
    case e.GIT_BRANCH:
      return (await import("./git-branch-2WLFJTNR-DMOi48eO.js")).IconGitBranch;
    case e.GIT_COMPARE:
      return (await import("./git-compare-S6XY3Q27-B8EeNOJO.js")).IconGitCompare;
    case e.GIT_MERGE_QUEUE:
      return (await import("./git-merge-queue-XIYHLZUS-DTJog1-H.js")).IconGitMergeQueue;
    case e.GIT_MERGE:
      return (await import("./git-merge-5AW3YDUX-DImg3CFN.js")).IconGitMerge;
    case e.GIT_PULL_REQUEST_CLOSED:
      return (await import("./git-pull-request-closed-GLHNIYYB-bhi1VM_o.js")).IconGitPullRequestClosed;
    case e.GIT_PULL_REQUEST_DRAFT:
      return (await import("./git-pull-request-draft-HBZ4KG53-BndxIiCz.js")).IconGitPullRequestDraft;
    case e.GIT_PULL_REQUEST:
      return (await import("./git-pull-request-IMTARDV2-T6rz1TDw.js")).IconGitPullRequest;
    case e.GIT_REPO_FORK:
      return (await import("./git-repo-fork-KNFQJ2FR-BhM96KYV.js")).IconGitRepoFork;
    case e.HEART_BROKEN_SMALL:
      return (await import("./heart-broken-small-LEAFV2CK-BAgLyeSW.js")).IconHeartBrokenSmall;
    case e.HEART_FAT:
      return (await import("./heart-fat-AIC3JYVY-uB0ywBuB.js")).IconHeartFat;
    case e.HEART_L:
      return (await import("./heart-l-3PK4SJKH-BI2RX82U.js")).IconHeartL;
    case e.HEART_M:
      return (await import("./heart-m-QOGIJ44N-CVbol8iZ.js")).IconHeartM;
    case e.HEART_SMALL:
      return (await import("./heart-small-K5PHO353-CddPRBGW.js")).IconHeartSmall;
    case e.INFO_FAT:
      return (await import("./info-fat-ASMFH6MW-DQ-DzuoR.js")).IconInfoFat;
    case e.INFO_L:
      return (await import("./info-l-2ABE22K7-UnWGrfO0.js")).IconInfoL;
    case e.INFO_M:
      return (await import("./info-m-HOO2EALQ-DDtnSl1J.js")).IconInfoM;
    case e.INFO_S:
      return (await import("./info-s-SH45CRNG-CjO9QPUx.js")).IconInfoS;
    case e.INVISIBLE_FAT:
      return (await import("./invisible-fat-6VGGZNCE-CKAkZlbU.js")).IconInvisibleFat;
    case e.INVISIBLE_L:
      return (await import("./invisible-l-VYE34Q5T-D8z6AMA4.js")).IconInvisibleL;
    case e.INVISIBLE_M:
      return (await import("./invisible-m-CWEBGKQQ-CoBnrI2k.js")).IconInvisibleM;
    case e.INVISIBLE_S:
      return (await import("./invisible-s-HJK6ZLDU-j7xvl4lM.js")).IconInvisibleS;
    case e.KEY_BACKSPACE:
      return (await import("./key-backspace-NGKUSFJL-_vz4y1di.js")).IconKeyBackspace;
    case e.KEY_DELETE:
      return (await import("./key-delete-MAZ3NP6U-WjjXDLir.js")).IconKeyDelete;
    case e.KEY_DOWN:
      return (await import("./key-down-DZNQ2C7R-ZId0D_dd.js")).IconKeyDown;
    case e.KEY_EJECT:
      return (await import("./key-eject-LM3KYW4M-DwID8dyv.js")).IconKeyEject;
    case e.KEY_ENTER:
      return (await import("./key-enter-CYJZD3AC-Cu1QtKe5.js")).IconKeyEnter;
    case e.KEY_FUNCTION:
      return (await import("./key-function-22XNB6O7-DYQjO21j.js")).IconKeyFunction;
    case e.KEY_MAC_COMMAND:
      return (await import("./key-mac-command-35XDJ5WC-B5SWQQnq.js")).IconKeyMacCommand;
    case e.KEY_OPTION:
      return (await import("./key-option-N7UABPCQ-C4XtCSzi.js")).IconKeyOption;
    case e.KEY_PAGE_DOWN:
      return (await import("./key-page-down-HWJRKHPN-DF_sB0Iu.js")).IconKeyPageDown;
    case e.KEY_PAGE_NEXT:
      return (await import("./key-page-next-ULFEOE6D-DOz9MMAh.js")).IconKeyPageNext;
    case e.KEY_PAGE_UP:
      return (await import("./key-page-up-4KNYCCZ2-CqVpe6lH.js")).IconKeyPageUp;
    case e.KEY_PREVIOUS_UP:
      return (await import("./key-previous-up-3V3U3EUE-BZ9KYTpS.js")).IconKeyPreviousUp;
    case e.KEY_SHIFT:
      return (await import("./key-shift-2Q3VGU6R-CT0vUzAp.js")).IconKeyShift;
    case e.KEY_TAB:
      return (await import("./key-tab-ABE6BVZP-B39iSvz-.js")).IconKeyTab;
    case e.KEY_UP:
      return (await import("./key-up-6CJJFKCO-BiX9ybdb.js")).IconKeyUp;
    case e.LIKE:
      return (await import("./like-5BGMS4AE-DPzsO911.js")).IconLike;
    case e.LINK:
      return (await import("./link-DECGU7JN-CbjtjE8F.js")).IconLink;
    case e.LOADER_DOTS2:
      return (await import("./loader-dots2-Y4BCI2EP-DxjgaKT3.js")).IconLoaderDots2;
    case e.LOADER_DOTS:
      return (await import("./loader-dots-PO2OYHOL-DdV6n27v.js")).IconLoaderDots;
    case e.MALE_SIMPLIFIED:
      return (await import("./male-simplified-NI53UM4R-4dYgS5EB.js")).IconMaleSimplified;
    case e.MOVING_BLOCK:
      return (await import("./moving-block-DBB5FUAB-Cgb7WULx.js")).IconMovingBlock;
    case e.MULTIPLY_FAT:
      return (await import("./multiply-fat-6G2OPG3K-DJmoYT-A.js")).IconMultiplyFat;
    case e.MULTIPLY_L:
      return (await import("./multiply-l-E7WP7UDP-M5FsYXNC.js")).IconMultiplyL;
    case e.MULTIPLY_M:
      return (await import("./multiply-m-7H3A3TIN-BXpqrWOi.js")).IconMultiplyM;
    case e.MULTIPLY_S:
      return (await import("./multiply-s-CYH5NWDQ-jl92xq6w.js")).IconMultiplyS;
    case e.NOTE_ADD2:
      return (await import("./note-add2-GGR4VQWG-B5b_oTZg.js")).IconNoteAdd2;
    case e.NOTE_ADD:
      return (await import("./note-add-ZZLKKITR-Cr0ZiQAO.js")).IconNoteAdd;
    case e.NOTE_BROKEN_HEART2:
      return (await import("./note-broken-heart2-N3NXMCBU-BR74teDz.js")).IconNoteBrokenHeart2;
    case e.NOTE_BROKEN_HEART:
      return (await import("./note-broken-heart-VQWCHRX5-BcO4Kspx.js")).IconNoteBrokenHeart;
    case e.NOTE_CHECK2:
      return (await import("./note-check2-KONXVU56-SQRN0WXh.js")).IconNoteCheck2;
    case e.NOTE_CHECK:
      return (await import("./note-check-CH5TWNT3-Bg4MSjCK.js")).IconNoteCheck;
    case e.NOTE_EDIT2:
      return (await import("./note-edit2-5XF4WGMG-4bfn9QYH.js")).IconNoteEdit2;
    case e.NOTE_EDIT:
      return (await import("./note-edit-6THC4FAD-DRxD-32j.js")).IconNoteEdit;
    case e.NOTE_EXCLAMATION_MARK2:
      return (await import("./note-exclamation-mark2-FA24J4BP-JACa4AYi.js")).IconNoteExclamationMark2;
    case e.NOTE_EXCLAMATION_MARK:
      return (await import("./note-exclamation-mark-RTLZJ4O3-HioQbjis.js")).IconNoteExclamationMark;
    case e.NOTE_HEART2:
      return (await import("./note-heart2-LU3BFO47-DggAsudA.js")).IconNoteHeart2;
    case e.NOTE_HEART:
      return (await import("./note-heart-XJSV3CLX-BNW0mCZY.js")).IconNoteHeart;
    case e.NOTE_INFO2:
      return (await import("./note-info2-WQZ7T27I-BnXInrLz.js")).IconNoteInfo2;
    case e.NOTE_INFO:
      return (await import("./note-info-S4XVNU5T-DuM8Co9h.js")).IconNoteInfo;
    case e.NOTE_INVISIBLE2:
      return (await import("./note-invisible2-ZSC3VPDG-CoBIyoxw.js")).IconNoteInvisible2;
    case e.NOTE_INVISIBLE:
      return (await import("./note-invisible-7QXVQDTK-DLT6y4RX.js")).IconNoteInvisible;
    case e.NOTE_MULTIPLY2:
      return (await import("./note-multiply2-LSSPVRIF-HAP93d-X.js")).IconNoteMultiply2;
    case e.NOTE_MULTIPLY:
      return (await import("./note-multiply-I7CANKIJ-DeYtPf3X.js")).IconNoteMultiply;
    case e.NOTE_QUESTION_MARK2:
      return (await import("./note-question-mark2-YBTI6JY6-D8x5eafA.js")).IconNoteQuestionMark2;
    case e.NOTE_QUESTION_MARK:
      return (await import("./note-question-mark-NOMY4N2M-CiUrRbPF.js")).IconNoteQuestionMark;
    case e.NOTE_SEARCH2:
      return (await import("./note-search2-D7X6EPY7-BDJWwopq.js")).IconNoteSearch2;
    case e.NOTE_SEARCH:
      return (await import("./note-search-6KKKQPNR-fa71ZSf0.js")).IconNoteSearch;
    case e.NOTE_STAR2:
      return (await import("./note-star2-YPXH73AL-Bk1hrt0P.js")).IconNoteStar2;
    case e.NOTE_STAR:
      return (await import("./note-star-T4SNK5PW-BkbU8FqY.js")).IconNoteStar;
    case e.NOTE_SUBTRACT2:
      return (await import("./note-subtract2-DDC4JQOO-CAadgW9v.js")).IconNoteSubtract2;
    case e.NOTE_SUBTRACT:
      return (await import("./note-subtract-PV2ZUCNM-DIDbbW81.js")).IconNoteSubtract;
    case e.NOTE_VISIBLE2:
      return (await import("./note-visible2-O2BC2T6U-CiWGFCaW.js")).IconNoteVisible2;
    case e.NOTE_VISIBLE:
      return (await import("./note-visible-WJS6MRS5-CEfwnVnG.js")).IconNoteVisible;
    case e.NOTE:
      return (await import("./note-IAHQUANQ-X-ZK4t90.js")).IconNote;
    case e.ON_TARGET:
      return (await import("./on-target-T34IASTT-CSjsSiFl.js")).IconOnTarget;
    case e.PARAGRAPH:
      return (await import("./paragraph-LSNPNKGT-BdvWY-DV.js")).IconParagraph;
    case e.PERFORMANCE2:
      return (await import("./performance2-QVJUYLMX-Cy3j0YiD.js")).IconPerformance2;
    case e.PERFORMANCE:
      return (await import("./performance-RXFJEJJQ-IlHWI8nZ.js")).IconPerformance;
    case e.PIN_TILTED:
      return (await import("./pin-tilted-J4KWBBRV-DWbLDstK.js")).IconPinTilted;
    case e.PIN:
      return (await import("./pin-I2TXPSNB-BpDf6XCg.js")).IconPin;
    case e.PLANNER:
      return (await import("./planner-3CPMROQU-DSdPaTKX.js")).IconPlanner;
    case e.POINTER_ARROW_LINE:
      return (await import("./pointer-arrow-line-YAKPV35E-Cc7e5ogz.js")).IconPointerArrowLine;
    case e.POINTER_ARROW:
      return (await import("./pointer-arrow-NJBXMAP6-Rq4XUxkk.js")).IconPointerArrow;
    case e.POINTER_CROSS:
      return (await import("./pointer-cross-ECVW4JJI-ZfQJM1Wm.js")).IconPointerCross;
    case e.POINTER_HAND:
      return (await import("./pointer-hand-EBM7QQQF-B9znkhSL.js")).IconPointerHand;
    case e.POINTER_LEFT:
      return (await import("./pointer-left-SKR76X32-CeOojpIN.js")).IconPointerLeft;
    case e.POINTER_MOUSE:
      return (await import("./pointer-mouse-75AQZ2MT-a005h2Hy.js")).IconPointerMouse;
    case e.POINTER_PEN:
      return (await import("./pointer-pen-MUSZIWOC-R8YiXId_.js")).IconPointerPen;
    case e.POINTER_TEXT:
      return (await import("./pointer-text-JXBJW4JS-CBdZbLZC.js")).IconPointerText;
    case e.QUESTION_MARK_FAT:
      return (await import("./question-mark-fat-XM3A6MH4-BpTSRvbO.js")).IconQuestionMarkFat;
    case e.QUESTION_MARK_L:
      return (await import("./question-mark-l-4H7S7MBN-DJQ4-FtV.js")).IconQuestionMarkL;
    case e.QUESTION_MARK_M:
      return (await import("./question-mark-m-Y2XF7RIF-CKkV8faW.js")).IconQuestionMarkM;
    case e.QUESTION_MARK_S:
      return (await import("./question-mark-s-AMUUKHFW-z6XieVFt.js")).IconQuestionMarkS;
    case e.REMOVE_LINES:
      return (await import("./remove-lines-CDCMCNNG-m6jB9ydJ.js")).IconRemoveLines;
    case e.SEARCH_FAT:
      return (await import("./search-fat-MBPSV4H7-KjwQzjtb.js")).IconSearchFat;
    case e.SEARCH_L:
      return (await import("./search-l-TNEUOY3O-C6B8XeV1.js")).IconSearchL;
    case e.SEARCH_M:
      return (await import("./search-m-YFGGQ7I3-Ch1JDeeX.js")).IconSearchM;
    case e.SEARCH_SMALL:
      return (await import("./search-small-VXYDX2WM-C9QPFimb.js")).IconSearchSmall;
    case e.SECTION:
      return (await import("./section-M4KUGKZF-jAa4D9bv.js")).IconSection;
    case e.SETTINGS2:
      return (await import("./settings2-PWKOTJAZ-Be-QBD63.js")).IconSettings2;
    case e.SETTINGS3:
      return (await import("./settings3-MPMMF5PF-B1PNFBqi.js")).IconSettings3;
    case e.SETTINGS4:
      return (await import("./settings4-YRTMGNBM-BXaTF42D.js")).IconSettings4;
    case e.SETTINGS5:
      return (await import("./settings5-JSTGJEFA-eCaBL08W.js")).IconSettings5;
    case e.SETTINGS:
      return (await import("./settings-OASTDUFU-CgE10qQ7.js")).IconSettings;
    case e.SPEECH_BALLOON2:
      return (await import("./speech-balloon2-B5JPDRWN-DQvTapy1.js")).IconSpeechBalloon2;
    case e.SPEECH_BALLOON_SQUARE2:
      return (await import("./speech-balloon-square2-MQ5WLAA2-Bz3Knr6m.js")).IconSpeechBalloonSquare2;
    case e.SPEECH_BALLOON_SQUARE_COPY:
      return (await import("./speech-balloon-square-copy-WTMC2VRO-CBK7y8nz.js")).IconSpeechBalloonSquareCopy;
    case e.SPEECH_BALLOON_SQUARE_TEXT:
      return (await import("./speech-balloon-square-text-LPDBCPBR-Dy2RGViG.js")).IconSpeechBalloonSquareText;
    case e.SPEECH_BALLOON_SQUARE:
      return (await import("./speech-balloon-square-JOBQZWJ7-DnVRBfoB.js")).IconSpeechBalloonSquare;
    case e.SPEECH_BALLOON:
      return (await import("./speech-balloon-7CJ57WUS-CEKNwozS.js")).IconSpeechBalloon;
    case e.SPEECH_BALLOONS:
      return (await import("./speech-balloons-BV5OKSKK-CLkgbQz9.js")).IconSpeechBalloons;
    case e.SQUARED_ADD:
      return (await import("./squared-add-IE3CG5OU-Cw1rdznu.js")).IconSquaredAdd;
    case e.SQUARED_BROKEN_HEART:
      return (await import("./squared-broken-heart-3BAAJBGS-Tsat1rYO.js")).IconSquaredBrokenHeart;
    case e.SQUARED_CHECK:
      return (await import("./squared-check-B6GYDKN5-CHGiZl6n.js")).IconSquaredCheck;
    case e.SQUARED_EDIT:
      return (await import("./squared-edit-KYKMG2MH-B5wUSsqe.js")).IconSquaredEdit;
    case e.SQUARED_EXCLAMATION_MARK:
      return (await import("./squared-exclamation-mark-4AEKZ6TZ-u4-SpmdG.js")).IconSquaredExclamationMark;
    case e.SQUARED_HEART:
      return (await import("./squared-heart-KTFMNBGN-DI_ULHP8.js")).IconSquaredHeart;
    case e.SQUARED_INFO:
      return (await import("./squared-info-6PR662OQ-BhzafM-G.js")).IconSquaredInfo;
    case e.SQUARED_INVISIBLE:
      return (await import("./squared-invisible-THKCW5RU-OcXbLp-8.js")).IconSquaredInvisible;
    case e.SQUARED_MULTIPLY:
      return (await import("./squared-multiply-3MA74N7Z-C8cNmDvH.js")).IconSquaredMultiply;
    case e.SQUARED_QUESTION_MARK:
      return (await import("./squared-question-mark-HFT4UE7T-Dpgf3idH.js")).IconSquaredQuestionMark;
    case e.SQUARED_SEARCH:
      return (await import("./squared-search-MOSF654O-BU07NOqY.js")).IconSquaredSearch;
    case e.SQUARED_STAR:
      return (await import("./squared-star-DFF2PRGY-CZy3tyj7.js")).IconSquaredStar;
    case e.SQUARED_SUBTRACT:
      return (await import("./squared-subtract-IUHY3NNS-Dk57vcrQ.js")).IconSquaredSubtract;
    case e.SQUARED_VISIBLE:
      return (await import("./squared-visible-J6IJIGNV-CG4fooD1.js")).IconSquaredVisible;
    case e.SQUARED:
      return (await import("./squared-LQ2H6YVL-YzL-S0Jd.js")).IconSquared;
    case e.STAMP:
      return (await import("./stamp-7EKGTJ5P-DZ7VeEMG.js")).IconStamp;
    case e.STAR_FAT:
      return (await import("./star-fat-PLMUNHVV-Dr44UHEB.js")).IconStarFat;
    case e.STAR_L:
      return (await import("./star-l-MLHRTXGD-CCNEHVJz.js")).IconStarL;
    case e.STAR_M:
      return (await import("./star-m-YM5FQUAU-CkhvlhSN.js")).IconStarM;
    case e.STAR_SMALL:
      return (await import("./star-small-M73FZAOV-CtIkQAis.js")).IconStarSmall;
    case e.STOPWATCH:
      return (await import("./stopwatch-5MBDH773-DcLijFsR.js")).IconStopwatch;
    case e.SUBTRACT_FAT:
      return (await import("./subtract-fat-MAI5FNTN-BPoBdD85.js")).IconSubtractFat;
    case e.SUBTRACT_L:
      return (await import("./subtract-l-7ENCDDJB-B6ramxkS.js")).IconSubtractL;
    case e.SUBTRACT_M:
      return (await import("./subtract-m-OJIWLOAR-Y86s-5M2.js")).IconSubtractM;
    case e.SUBTRACT_S:
      return (await import("./subtract-s-5MZFHD7M-DcxGZg9s.js")).IconSubtractS;
    case e.TABLES:
      return (await import("./tables-EF4QNBXY-Caml1QI8.js")).IconTables;
    case e.TALK_ADD:
      return (await import("./talk-add-Y2RZBV7N-DF7onlDn.js")).IconTalkAdd;
    case e.TALK_CHECK:
      return (await import("./talk-check-HBELWZ24-DGNPpiT3.js")).IconTalkCheck;
    case e.TALK_DELETE:
      return (await import("./talk-delete-HCRH6VOA-CQ7LdDxb.js")).IconTalkDelete;
    case e.TALK_EDIT:
      return (await import("./talk-edit-ZWEG74SV-JLTPuhri.js")).IconTalkEdit;
    case e.TALK_EXCLAMATION_MARK:
      return (await import("./talk-exclamation-mark-22AKWNT5-Dqo_xFX8.js")).IconTalkExclamationMark;
    case e.TALK_HEART_BROKEN:
      return (await import("./talk-heart-broken-GWTZYQBL-DItrbPVN.js")).IconTalkHeartBroken;
    case e.TALK_HEART:
      return (await import("./talk-heart-SD5K362C-rCtVjmGC.js")).IconTalkHeart;
    case e.TALK_INFO:
      return (await import("./talk-info-NHKNDZOR--a-YzwVb.js")).IconTalkInfo;
    case e.TALK_INVISIBLE:
      return (await import("./talk-invisible-NT7LS4XW-Amn6yx3Z.js")).IconTalkInvisible;
    case e.TALK_QUESTION_MARK:
      return (await import("./talk-question-mark-DNXSH4OK-qtJA0AqX.js")).IconTalkQuestionMark;
    case e.TALK_SEARCH:
      return (await import("./talk-search-Q5UYC6GA-OprBWuXB.js")).IconTalkSearch;
    case e.TALK_STAR:
      return (await import("./talk-star-G5ONKT43-7U1kMZv-.js")).IconTalkStar;
    case e.TALK_SUBTRACT:
      return (await import("./talk-subtract-QR22BR7R-iUk4vTsS.js")).IconTalkSubtract;
    case e.TALK_VISIBLE:
      return (await import("./talk-visible-SSY6G43L-CqFirfYw.js")).IconTalkVisible;
    case e.TALK:
      return (await import("./talk-KVV77RYX-B-Ylwxo7.js")).IconTalk;
    case e.TARGET:
      return (await import("./target-YABV67JX-C20XPcX-.js")).IconTarget;
    case e.TEXT_ALIGN_CENTER:
      return (await import("./text-align-center-VK36BV7W-0Mx88Nh1.js")).IconTextAlignCenter;
    case e.TEXT_ALIGN_JUSTIFY_CENTERED:
      return (await import("./text-align-justify-centered-X4XC5W2D-Dg8aQR37.js")).IconTextAlignJustifyCentered;
    case e.TEXT_ALIGN_JUSTIFY_LEFT:
      return (await import("./text-align-justify-left-TKTKWOFD-DlQDH6Wv.js")).IconTextAlignJustifyLeft;
    case e.TEXT_ALIGN_JUSTIFY_RIGHT:
      return (await import("./text-align-justify-right-C3RIMTSM-B6c-2A6K.js")).IconTextAlignJustifyRight;
    case e.TEXT_ALIGN_JUSTIFY:
      return (await import("./text-align-justify-XDQELQDK-CeTcuVxw.js")).IconTextAlignJustify;
    case e.TEXT_ALIGN_LEFT:
      return (await import("./text-align-left-GGOYBVPB-BEvUcaTR.js")).IconTextAlignLeft;
    case e.TEXT_ALIGN_RIGHT_ORDER_DESC:
      return (await import("./text-align-right-order-desc-7YN33W2L-Dl4Y2Fl_.js")).IconTextAlignRightOrderDesc;
    case e.TEXT_ALIGN_RIGHT:
      return (await import("./text-align-right-BHPOWDUA-DuRkDbn0.js")).IconTextAlignRight;
    case e.TEXT_BOLD:
      return (await import("./text-bold-GVOH2WIW-DBJKHVRq.js")).IconTextBold;
    case e.TEXT_DETAIL_LIST:
      return (await import("./text-detail-list-7DIKKIPA-loimLPKt.js")).IconTextDetailList;
    case e.TEXT_INDENT:
      return (await import("./text-indent-VKV7SJN2--gVcxDLR.js")).IconTextIndent;
    case e.TEXT_ITALIC:
      return (await import("./text-italic-HOBHSGHL-VAkRq39F.js")).IconTextItalic;
    case e.TEXT_LINE_THROUGH:
      return (await import("./text-line-through-UIOHT6AU-BW0zRLXq.js")).IconTextLineThrough;
    case e.TEXT_ORDER_ASC114:
      return (await import("./text-order-asc114-ZYG5CLFO-CQYV_6l5.js")).IconTextOrderAsc114;
    case e.TEXT_ORDER_ASC118:
      return (await import("./text-order-asc118-JJOFAARZ-D-k7TfOI.js")).IconTextOrderAsc118;
    case e.TEXT_ORDER_DESC_COPY2:
      return (await import("./text-order-desc-copy2-DLSMU5QX-Cv9yY83T.js")).IconTextOrderDescCopy2;
    case e.TEXT_ORDER_DESC_COPY3:
      return (await import("./text-order-desc-copy3-2I4XK2FX-BTBVgBmh.js")).IconTextOrderDescCopy3;
    case e.TEXT_ORDER_DESC_COPY:
      return (await import("./text-order-desc-copy-JETRJWRX-D4tTaesA.js")).IconTextOrderDescCopy;
    case e.TEXT_ORDER_DESC:
      return (await import("./text-order-desc-EE4LISW6-DZcpMqaj.js")).IconTextOrderDesc;
    case e.TEXT_OUTDENT:
      return (await import("./text-outdent-4D2TFLBQ-wa3qDJGp.js")).IconTextOutdent;
    case e.TEXT_UNDERLINE:
      return (await import("./text-underline-3NFZ3U7H-DSuZGnVH.js")).IconTextUnderline;
    case e.TIMER:
      return (await import("./timer-RWEJD7AL-BmidHsts.js")).IconTimer;
    case e.TRASH2:
      return (await import("./trash2-C5U6D75Q-D5yeRTLy.js")).IconTrash2;
    case e.TRASH:
      return (await import("./trash-MNZLK4KA-erDx0cl1.js")).IconTrash;
    case e.TRIANGLED_EXCLAMATION_MARK:
      return (await import("./triangled-exclamation-mark-IUQUCAKV-iQuI1MPc.js")).IconTriangledExclamationMark;
    case e.TRIANGLED_INFO:
      return (await import("./triangled-info-PLIFMTGL-cX8yl41U.js")).IconTriangledInfo;
    case e.TRIANGLED_QUESTION_MARK:
      return (await import("./triangled-question-mark-YALEIFBQ-DOXiSaR9.js")).IconTriangledQuestionMark;
    case e.TRIANGLED:
      return (await import("./triangled-SL74VFWQ-xHL_jyPa.js")).IconTriangled;
    case e.USER_ADD:
      return (await import("./user-add-GHJ3EQZH-CT2zMTjL.js")).IconUserAdd;
    case e.USER_DELETE:
      return (await import("./user-delete-26T6D234-B1zDbufh.js")).IconUserDelete;
    case e.USER_GROUP:
      return (await import("./user-group-VFEY5NYK-CEJFb_Is.js")).IconUserGroup;
    case e.USER:
      return (await import("./user-UT7CAEIV-CbQvw6jc.js")).IconUser;
    case e.USERS:
      return (await import("./users-22WQV6JI-BVn7mijQ.js")).IconUsers;
    case e.VISIBLE_FAT:
      return (await import("./visible-fat-FPJW6MCW-CL1Wb5EC.js")).IconVisibleFat;
    case e.VISIBLE_L:
      return (await import("./visible-l-T7LQCKDH-DtzsJgQj.js")).IconVisibleL;
    case e.VISIBLE_M:
      return (await import("./visible-m-224XFSOB-Ound59ns.js")).IconVisibleM;
    case e.VISIBLE_S:
      return (await import("./visible-s-LUAACX7S-CRVbF3Y6.js")).IconVisibleS;
    case e.WHEELCHAIR_ACTION:
      return (await import("./wheelchair-action-XI3H3HJH-BAv_Rn-r.js")).IconWheelchairAction;
    case e.WHEELCHAIR:
      return (await import("./wheelchair-TYIHSKTG-BcGC_4uv.js")).IconWheelchair;
    case e.AIRPLANE_ARRIVALS:
      return (await import("./airplane-arrivals-QDH362KZ-DdbDnDXS.js")).IconAirplaneArrivals;
    case e.AIRPLANE_DEPARTURES:
      return (await import("./airplane-departures-6WAQMXOH-Bkzz4guI.js")).IconAirplaneDepartures;
    case e.AIRPLANE:
      return (await import("./airplane-CXLPK76B-D6Zi3XBR.js")).IconAirplane;
    case e.AIRPORT_CONNECT_FLIGHTS:
      return (await import("./airport-connect-flights-KH66VMKG-DxBvNDd-.js")).IconAirportConnectFlights;
    case e.AIRPORT_TRANSFER2:
      return (await import("./airport-transfer2-PXWOHILH-BrlSwFHl.js")).IconAirportTransfer2;
    case e.AIRPORT_TRANSFER:
      return (await import("./airport-transfer-O5YVUQ64-D-sOH-SJ.js")).IconAirportTransfer;
    case e.ANCHOR:
      return (await import("./anchor-FZ2S4FKM-CsJSbkic.js")).IconAnchor;
    case e.BICYCLE_SURFBOARD:
      return (await import("./bicycle-surfboard-MBF45BM7-bOYjWnwx.js")).IconBicycleSurfboard;
    case e.BICYCLE:
      return (await import("./bicycle-S3R5MIFC-DZykPpQk.js")).IconBicycle;
    case e.BRIEFCASE_CROSS:
      return (await import("./briefcase-cross-TC3T7LWJ-MsK0og4D.js")).IconBriefcaseCross;
    case e.CAR_PARKING_INDOOR:
      return (await import("./car-parking-indoor-4OHPFS3N-CJoVPYOb.js")).IconCarParkingIndoor;
    case e.CAR_PARKING_OUTSIDE:
      return (await import("./car-parking-outside-UOC35ZOZ-CFkB9VK3.js")).IconCarParkingOutside;
    case e.CAR_PARKING:
      return (await import("./car-parking-DYZSXVBQ-Da8_iQRU.js")).IconCarParking;
    case e.CAR:
      return (await import("./car-SDLFJSFV-CH9nUzEx.js")).IconCar;
    case e.CHANGING_AREA:
      return (await import("./changing-area-2DXTGBJA-CC2ddDqC.js")).IconChangingArea;
    case e.CHECK_IN:
      return (await import("./check-in-GLVZLEHD-DIsdA4Lq.js")).IconCheckIn;
    case e.CITY_BUS:
      return (await import("./city-bus-EBONEMYT-BAYdDw-R.js")).IconCityBus;
    case e.CROSS_CIRCLED:
      return (await import("./cross-circled-GEJOOLK3-CugSQXRW.js")).IconCrossCircled;
    case e.CROSS:
      return (await import("./cross-W2XSBVZK-DspgGhHf.js")).IconCross;
    case e.CRUISESHIP:
      return (await import("./cruiseship-YNXGBAPI-DWVCTWX0.js")).IconCruiseship;
    case e.ELEVATOR1:
      return (await import("./elevator1-7ZLJCTZW-UMS1WWP9.js")).IconElevator1;
    case e.ELEVATOR2:
      return (await import("./elevator2-PNUNZCZW-DO7Ku20L.js")).IconElevator2;
    case e.ELEVATOR3:
      return (await import("./elevator3-2R5E54ZJ-DJ2wfew9.js")).IconElevator3;
    case e.ELEVATOR4:
      return (await import("./elevator4-IBRNMDP3-C2mrIOi3.js")).IconElevator4;
    case e.ESCALATOR_DOWN:
      return (await import("./escalator-down-PBAKQXPK-CMtrBgN5.js")).IconEscalatorDown;
    case e.ESCALATOR_UP:
      return (await import("./escalator-up-AKAFFMYQ-CwgTmF1Q.js")).IconEscalatorUp;
    case e.ESCALATOR:
      return (await import("./escalator-ZYJN7GC4-BXD6AKAO.js")).IconEscalator;
    case e.FAMILY:
      return (await import("./family-D3VIS43Q-DmU8p74r.js")).IconFamily;
    case e.FERRY:
      return (await import("./ferry-JPK2RBND-Cq1SxHSJ.js")).IconFerry;
    case e.FIRE_EXTINGUISHER:
      return (await import("./fire-extinguisher-LJD2EGGQ-B9cybRRd.js")).IconFireExtinguisher;
    case e.FIRE_FLAME:
      return (await import("./fire-flame-KG5N2APJ-BeEEzP_C.js")).IconFireFlame;
    case e.FIRE_HOSE:
      return (await import("./fire-hose-F5BXP6HW-C9oS8Td-.js")).IconFireHose;
    case e.GRAVESTONE2:
      return (await import("./gravestone2-RGFOCJYS-hEVXP6BL.js")).IconGravestone2;
    case e.GRAVESTONE3:
      return (await import("./gravestone3-HGS7HPFZ-BvGbdsSW.js")).IconGravestone3;
    case e.GRAVESTONE:
      return (await import("./gravestone-D7FX3AXJ-DF7HFz0U.js")).IconGravestone;
    case e.HELLO_GOODBYE:
      return (await import("./hello-goodbye-SJFFN4AW-DosZxkgg.js")).IconHelloGoodbye;
    case e.LOCATION_MARKER:
      return (await import("./location-marker-D5HR53KG-BZ3HCNUh.js")).IconLocationMarker;
    case e.LOCATION_PATH2:
      return (await import("./location-path2-5NRIGSOD-De4KjLY_.js")).IconLocationPath2;
    case e.LOCATION_PATH:
      return (await import("./location-path-X7GTHC7X-DqlY6HQQ.js")).IconLocationPath;
    case e.LOCATION_PIN:
      return (await import("./location-pin-TOCQKNBK-BEJ0Lz-w.js")).IconLocationPin;
    case e.LOUNGE:
      return (await import("./lounge-PHBMHIN7-CcBXND42.js")).IconLounge;
    case e.LUGGAGE_BELT:
      return (await import("./luggage-belt-NI6GUSJB-C9uCwab5.js")).IconLuggageBelt;
    case e.LUGGAGE_LOCKER:
      return (await import("./luggage-locker-O5QJAVFR-DSV4t-uc.js")).IconLuggageLocker;
    case e.LUGGAGE_TROLLEY:
      return (await import("./luggage-trolley-YWK5Q5H5-BTkUAd7x.js")).IconLuggageTrolley;
    case e.LUGGAGE:
      return (await import("./luggage-DWNOAJBX-QtOtu9pg.js")).IconLuggage;
    case e.MAP:
      return (await import("./map-ZOZ7L7YL-BAouAHOA.js")).IconMap;
    case e.MAP2:
      return (await import("./map2-AYO4UQVP-CnjjKDko.js")).IconMap2;
    case e.MAP3:
      return (await import("./map3-FU4I7UO7-Bnjd88Zf.js")).IconMap3;
    case e.METRO2:
      return (await import("./metro2-QM4VSRKG-ee1hADqN.js")).IconMetro2;
    case e.METRO:
      return (await import("./metro-ZXKQ3XSG-YyQPx79z.js")).IconMetro;
    case e.NO_SMOKING_CIRCLED:
      return (await import("./no-smoking-circled-BE5W4F45-D4QEa1BT.js")).IconNoSmokingCircled;
    case e.NO_SMOKING:
      return (await import("./no-smoking-3G47KCK4-BE8yw7Du.js")).IconNoSmoking;
    case e.OFFICE_SPACE:
      return (await import("./office-space-6ZONLLTU-DIpP98uu.js")).IconOfficeSpace;
    case e.PALMTREE_ISLAND_WAVE:
      return (await import("./palmtree-island-wave-K2W25LVB-BS7jjkj5.js")).IconPalmtreeIslandWave;
    case e.PALMTREE_ISLAND:
      return (await import("./palmtree-island-B6YZDSJR-B5zdjhwW.js")).IconPalmtreeIsland;
    case e.PALMTREE:
      return (await import("./palmtree-LM4MHFSM-QGKRUBt8.js")).IconPalmtree;
    case e.PARASOL_ISLAND_WAVE:
      return (await import("./parasol-island-wave-X43D4GZO-CGEo4_er.js")).IconParasolIslandWave;
    case e.PARASOL_ISLAND:
      return (await import("./parasol-island-DUFAD4SA-B3xz0qxS.js")).IconParasolIsland;
    case e.PARASOL:
      return (await import("./parasol-M6YREWBG-BHTWbBum.js")).IconParasol;
    case e.PLASTER:
      return (await import("./plaster-74UDFD65-Dp7a5CB3.js")).IconPlaster;
    case e.PLASTERS:
      return (await import("./plasters-NCUYOH64-DDRSYxeN.js")).IconPlasters;
    case e.POINTER_TARGET:
      return (await import("./pointer-target-MGBYLALI-BAGH9egP.js")).IconPointerTarget;
    case e.RENTAL_CAR:
      return (await import("./rental-car-AMER2OXY-2roi46xE.js")).IconRentalCar;
    case e.RESTROOM:
      return (await import("./restroom-RV2QKRCX-BnxKo9Xg.js")).IconRestroom;
    case e.SECURITY_CAMERA2:
      return (await import("./security-camera2-ZLQUGIEG-BCyrRYPg.js")).IconSecurityCamera2;
    case e.SECURITY_CAMERA3:
      return (await import("./security-camera3-TRCNHAPS-DzelGUYV.js")).IconSecurityCamera3;
    case e.SECURITY_CAMERA:
      return (await import("./security-camera-NZOGWX52-C6AFFUoY.js")).IconSecurityCamera;
    case e.SECURITY_CHECK:
      return (await import("./security-check-7XCJ3YXT-D0wYuVl_.js")).IconSecurityCheck;
    case e.SHIP:
      return (await import("./ship-5W5B3QN3-DrzaDh2H.js")).IconShip;
    case e.SIGNPOST2:
      return (await import("./signpost2-NHRNDL5D-CLMtUZca.js")).IconSignpost2;
    case e.SIGNPOST:
      return (await import("./signpost-C3GYDWHU-NNAeFzFC.js")).IconSignpost;
    case e.SMOKING:
      return (await import("./smoking-EYPC7UU7-CeyR0vz9.js")).IconSmoking;
    case e.STAIRS_DOWN:
      return (await import("./stairs-down-I74RT5MD-UgiRC72t.js")).IconStairsDown;
    case e.STAIRS_UP:
      return (await import("./stairs-up-2CJ6D27H-DvuShs2m.js")).IconStairsUp;
    case e.STAIRS:
      return (await import("./stairs-UBROAXAZ-DSeFIpgV.js")).IconStairs;
    case e.TAXI_STOP:
      return (await import("./taxi-stop-XSLPDFVE-n7W9G9uW.js")).IconTaxiStop;
    case e.TAXI:
      return (await import("./taxi-GZNBAEIX-Bmm-zxrY.js")).IconTaxi;
    case e.TRAIN_TRACK:
      return (await import("./train-track-KNAS7DD5-CROGf3Xu.js")).IconTrainTrack;
    case e.TRAIN:
      return (await import("./train-I3I2SDNU-DWEpqrM5.js")).IconTrain;
    case e.WALKING2:
      return (await import("./walking2-42QMUZTK-COj3wcP5.js")).IconWalking2;
    case e.WALKING:
      return (await import("./walking-X4A36L4Y-fSNFCyeD.js")).IconWalking;
    case e.CLOUD_LIGHTNING:
      return (await import("./cloud-lightning-O54OEKRA-C3s1aFlE.js")).IconCloudLightning;
    case e.CLOUD_RAIN2:
      return (await import("./cloud-rain2-JKRIX3CU-DcXCReD_.js")).IconCloudRain2;
    case e.CLOUD_SMALL_RAIN:
      return (await import("./cloud-small-rain-6BT44KA6-CL4wdRIk.js")).IconCloudSmallRain;
    case e.CLOUD_SUN:
      return (await import("./cloud-sun-52AQSRDQ-D4U3jgif.js")).IconCloudSun;
    case e.CLOUD_THERMOMETER:
      return (await import("./cloud-thermometer-Z4T7O7XI-B3PJjqpB.js")).IconCloudThermometer;
    case e.CLOUD:
      return (await import("./cloud-DWLYRWVE-VxkXqWwl.js")).IconCloud;
    case e.LIGHT_DARK_MODE2:
      return (await import("./light-dark-mode2-GMNLFUCM-Dm3DyF4a.js")).IconLightDarkMode2;
    case e.LIGHT_DARK_MODE3:
      return (await import("./light-dark-mode3-DLLZX2ZD-jnpwdpZB.js")).IconLightDarkMode3;
    case e.LIGHTNING_FLASH:
      return (await import("./lightning-flash-TAKN7C5U-C2UsBV6o.js")).IconLightningFlash;
    case e.MOON01:
      return (await import("./moon01-YQ6L6UZQ-B7we606m.js")).IconMoon01;
    case e.MOON19:
      return (await import("./moon19-CLU4WW5P-gtMXmeqc.js")).IconMoon19;
    case e.MOON_DARK_MODE:
      return (await import("./moon-dark-mode-IR2JBUYI-D4L3Tsru.js")).IconMoonDarkMode;
    case e.SIMPLE_SUN:
      return (await import("./simple-sun-K7LOBAWY-jc2BAxj9.js")).IconSimpleSun;
    case e.SUN2:
      return (await import("./sun2-EYW2RZAZ-B9Q8_yt7.js")).IconSun2;
    case e.SUN_LIGHT_MODE:
      return (await import("./sun-light-mode-XHDNDYSU-3e9y7ttU.js")).IconSunLightMode;
    case e.SUN:
      return (await import("./sun-5OVZUQJ7-B5iH4ykd.js")).IconSun;
    case e.THERMOMETER_COLD:
      return (await import("./thermometer-cold-DAMBK6HJ-BOw_n66v.js")).IconThermometerCold;
    case e.THERMOMETER_HOT:
      return (await import("./thermometer-hot-KZPDH4I6-BnEiJUkR.js")).IconThermometerHot;
    case e.THERMOMETER:
      return (await import("./thermometer-XRXDGVES-Dej6ATxQ.js")).IconThermometer;
    default:
      return "";
  }
};
const Kt = ["aria-hidden", "aria-label", "innerHTML"], U = /* @__PURE__ */ B({
  __name: "Icon",
  props: {
    name: {},
    size: { default: "medium" },
    color: {},
    ariaLabel: {}
  },
  setup(t) {
    const r = t, { bemm: a } = W("icon"), s = w(() => {
      const I = [a()];
      return r.size && I.push(a("", r.size)), r.color && I.push(a("", `color-${r.color}`)), d.value && I.push(a("", "is-brand")), I;
    }), n = H(""), d = H(!1), u = {
      github: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 72 72"><path d="M27.5 54.5c0 .2.3.4.6.4s.6-.2.6-.4-.3-.4-.6-.4-.6.2-.6.4"/><path d="M27.1 64.1c.9.2 1.7-.5 1.7-1.5v-5.4c-1.1.2-2.4.3-3 .3-1.6-.1-3.1-.3-3.9-.8-.9-.5-2.1-1.5-2.5-2.3-.5-1.1-.6-1.7-1.2-2.6-.5-.9-1.5-1.8-2.1-2.1s-1.2-.8-1.3-1.1.1-.7.7-.8 1.6.1 2.6.6c.8.4 1.7 1.4 2.3 2.3.7 1.1 1.7 2.1 2.5 2.6s2.5.7 4.1.5c.6-.1 1.3-.3 1.8-.6.2-1.5.9-2.8 1.9-3.9-8.5-1-13.1-5-13.1-13.6 0-3.3 1.1-6.1 3-8.2-.2-.5-.4-1.1-.5-1.9-.2-1.8 0-2.9.3-3.9.2-1.1.5-1.8.5-1.8s1.3-.1 2.5.2c1.1.4 2.1.7 3.5 1.5q1.05.6 1.8 1.2c2.2-.6 4.7-.9 7.3-.9q3.9 0 7.2.9c.5-.3 1.2-.8 1.8-1.2 1.4-.8 2.4-1.1 3.5-1.5s2.5-.2 2.5-.2.3.7.5 1.8.5 2.1.3 3.9c-.1.8-.3 1.4-.5 1.9 1.9 2.2 3 4.9 3 8.2 0 8.7-4.7 12.6-13.1 13.6 1.2 1.3 2 3 2 4.9v8.4c0 .9.8 1.6 1.7 1.5 11.6-3.7 19.9-14.6 19.9-27.4C64.8 20.8 51.9 7.9 36 7.9S7.2 20.8 7.2 36.7c0 12.8 8.3 23.6 19.9 27.4"/><path d="M23 54.4c0 .2.2.4.5.4s.6-.1.6-.3-.2-.4-.5-.4-.6.1-.6.3m2.3.4c0 .2.2.4.6.4.3 0 .6-.1.6-.3s-.2-.4-.6-.4-.6.1-.6.3M21.1 53q-.15.3.3.6c.2.2.5.1.6 0q.15-.3-.3-.6c-.2-.2-.5-.2-.6 0m-2.4-3.3c-.1.1-.1.4.1.5.2.2.4.2.6.1.1-.1.1-.4-.1-.5-.3-.2-.5-.2-.6-.1m-1.3-.9c-.1.1 0 .4.3.5.2.1.5.1.5-.1s0-.4-.3-.5c-.2-.1-.5-.1-.5.1m2.5 2.5c-.1.1-.1.4 0 .6.2.2.4.3.6.2.1-.1.1-.4 0-.6-.2-.2-.5-.3-.6-.2"/></svg>',
      google: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 72 72"><path d="M63.7 30.8H36.6V42h15.5c-.7 3.6-2.7 6.6-5.8 8.7-2.6 1.7-5.8 2.8-9.7 2.8-7.5 0-13.9-5.1-16.1-11.9-.6-1.7-.9-3.6-.9-5.5s.3-3.7.9-5.5c2.3-6.8 8.6-11.9 16.1-11.9 4.2 0 8 1.5 11 4.3l8.2-8.2c-5-4.7-11.5-7.5-19.3-7.5-11.3 0-21 6.5-25.7 15.9-1.9 3.8-3 8.1-3 12.8s1.1 9 3.1 12.9c4.7 9.4 14.5 15.9 25.7 15.9 7.8 0 14.3-2.6 19.1-7 5.4-5 8.6-12.4 8.6-21.2-.1-2-.3-4-.6-5.8"/></svg>'
    }, m = {
      "chevron-down": "chevron-down",
      "chevron-up": "chevron-up",
      "chevron-left": "chevron-left",
      "chevron-right": "chevron-right",
      eye: "eye",
      "eye-off": "eye-off",
      check: "check-m",
      x: "cross",
      plus: "add-m",
      minus: "subtract-m",
      search: "search-m",
      user: "user",
      mail: "mail",
      phone: "phone",
      lock: "lock",
      unlock: "unlock",
      star: "star",
      heart: "heart-m",
      home: "home-large",
      settings: "settings",
      menu: "hamburger",
      close: "cross",
      sun: "sun",
      moon: "moon",
      edit: "edit-m",
      sparkles: "sparkles",
      database: "database",
      folder: "folder",
      package: "package-box",
      code: "code-brackets",
      users: "users",
      book: "bookcase",
      download: "arrow-download",
      zap: "power",
      shield: "shield-keyhole",
      globe: "language",
      briefcase: "briefcase-cross",
      award: "trophy-cup",
      "trending-up": "graph-up",
      calendar: "calendar",
      "dollar-sign": "dollar",
      laptop: "laptop-large",
      "map-pin": "map-pin",
      key: "key",
      "file-text": "file-text",
      activity: "heart-activity",
      "check-circle": "circled-check",
      image: "image-m",
      photo: "image-m",
      photograph: "image-m",
      information: "information-circle",
      info: "information-circle",
      play: "play",
      "play-circle": "play",
      collection: "folder",
      "document-text": "file-text"
    };
    return at(async () => {
      if (!r.name) {
        n.value = "", d.value = !1;
        return;
      }
      const I = m[r.name] || r.name;
      try {
        if (u[r.name]) {
          n.value = u[r.name], d.value = !0;
          return;
        }
        d.value = !1;
        const p = Object.keys(e).find((R) => e[R] === I);
        if (p) {
          const R = e[p];
          n.value = await Xt(R);
        } else
          console.warn(`Icon "${r.name}" not found`), n.value = "";
      } catch {
        console.warn(`Icon "${r.name}" not found`), n.value = "", d.value = !1;
      }
    }), (I, p) => (i(), c("div", ie({
      class: s.value,
      "aria-hidden": !t.ariaLabel,
      "aria-label": t.ariaLabel
    }, I.$attrs, { innerHTML: n.value }), null, 16, Kt));
  }
}), $t = {
  MEDIUM: "medium"
}, Ve = {
  PRIMARY: "primary",
  OUTLINE: "outline"
}, Ue = {
  BUTTON: "button",
  SUBMIT: "submit",
  RESET: "reset"
}, te = /* @__PURE__ */ B({
  __name: "Button",
  props: {
    size: { default: $t.MEDIUM },
    variant: { default: Ve.PRIMARY },
    type: { default: Ue.BUTTON },
    icon: {},
    iconOnly: { type: Boolean, default: !1 },
    iconAfter: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    block: { type: Boolean },
    to: { default: void 0 },
    href: { default: void 0 },
    element: { default: "button" },
    color: { default: void 0 },
    tooltip: {},
    fullWidth: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, { bemm: a } = W("button"), s = me(), n = w(() => {
      const A = [a()];
      return r.icon && A.push(a("", "has-icon")), A.push(a("", r.size)), A.push(a("", r.variant)), (!u.value && r.icon || r.iconOnly) && A.push(a("", "icon-only")), u.value && r.icon && A.push(a("", "text-icon")), r.loading && A.push(a("", "loading")), r.block && A.push(a("", "block")), d.value && A.push(a("", "disabled")), r.fullWidth && A.push(a("", "full-width")), A;
    }), d = H(r.disabled);
    re(
      () => r.disabled,
      (A) => {
        d.value = A || r.loading;
      },
      { immediate: !0 }
    ), re(
      () => r.loading,
      (A) => {
        d.value = r.disabled || A;
      }
    );
    const u = w(() => !!(s != null && s.default)), m = w(() => r.to ? "router-link" : r.href ? "a" : r.element || "button"), I = w(() => {
      if (m.value !== "router-link")
        return r.href ? r.href : void 0;
    }), p = w(() => {
      if (m.value === "button")
        return r.type;
    }), R = w(() => {
      const A = {};
      return r.color && (A["--button-color"] = `var(--color-${r.color})`, A["--button-color-text"] = `var(--color-${r.color}-text)`, r.variant === Ve.OUTLINE && (A["--button-color-text"] = `var(--color-${r.color})`, A["--button-color-text-hover"] = `var(--color-${r.color}-text)`)), A;
    });
    return (A, _) => (i(), g(q(m.value), ie({
      to: m.value === "router-link" ? r.to : void 0,
      href: I.value,
      class: n.value,
      disabled: m.value === "button" ? d.value : void 0,
      type: p.value,
      style: R.value,
      title: t.tooltip
    }, A.$attrs), {
      default: X(() => [
        T("div", {
          class: l(o(a)("container"))
        }, [
          t.icon && !t.iconAfter ? (i(), c("span", {
            key: 0,
            class: l(o(a)("icon"))
          }, [
            F(U, { name: t.icon }, null, 8, ["name"])
          ], 2)) : E("", !0),
          u.value && !r.iconOnly ? (i(), c("span", {
            key: 1,
            class: l(o(a)("text"))
          }, [
            y(A.$slots, "default")
          ], 2)) : E("", !0),
          t.icon && t.iconAfter ? (i(), c("span", {
            key: 2,
            class: l(o(a)("icon"))
          }, [
            F(U, { name: t.icon }, null, 8, ["name"])
          ], 2)) : E("", !0)
        ], 2),
        t.loading ? (i(), c("div", {
          key: 0,
          class: l(o(a)("loading"))
        }, [..._[0] || (_[0] = [
          T("span", { class: "spinner" }, null, -1)
        ])], 2)) : E("", !0)
      ]),
      _: 3
    }, 16, ["to", "href", "class", "disabled", "type", "style", "title"]));
  }
}), bo = /* @__PURE__ */ B({
  __name: "ButtonGroup",
  props: {
    direction: { default: "row" },
    fluid: { type: Boolean, default: !1 },
    gap: { default: "medium" },
    align: { default: "start" },
    justify: { default: "start" },
    wrap: { type: Boolean }
  },
  setup(t) {
    const r = t, { bemm: a } = W("button-group"), s = w(() => {
      const n = [a()];
      return n.push(a("", r.direction)), n.push(a("", `gap-${r.gap}`)), n.push(a("", `align-${r.align}`)), n.push(a("", `justify-${r.justify}`)), r.fluid && n.push(a("", "fluid")), r.wrap && n.push(a("", "wrap")), n;
    });
    return (n, d) => (i(), c("div", {
      class: l(s.value)
    }, [
      y(n.$slots, "default")
    ], 2));
  }
}), Vt = ["data-variant"], xt = { class: "card__container" }, Yt = {
  key: 0,
  class: "card__title"
}, Me = /* @__PURE__ */ B({
  __name: "Card",
  props: {
    variant: { default: "default" },
    color: {},
    featured: { type: Boolean },
    hoverable: { type: Boolean },
    title: {},
    noPadding: { type: Boolean, default: !1 },
    noHeaderPadding: { type: Boolean, default: !1 },
    noContentPadding: { type: Boolean, default: !1 },
    noFooterPadding: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = W("card"), a = t, s = me(), n = H(), d = H(50), u = H(50), m = H(0), I = w(() => a.title || s.header), p = w(() => s.footer), R = w(() => r("", [
      "",
      a.variant ? `${a.variant}` : "",
      a.color ? `${a.color}` : "",
      a.color ? "has-color" : "",
      a.featured ? "featured" : "",
      a.hoverable ? "hoverable" : "",
      a.noPadding ? "no-padding" : "",
      I.value ? "has-header" : "",
      p.value ? "has-footer" : ""
    ])), A = w(() => {
      const C = {
        "--pointer-x": `${d.value}%`,
        "--pointer-y": `${u.value}%`,
        "--pointer-angle": `${m.value}deg`
      };
      return a.color && (C["--card-color"] = `var(--color-${a.color})`), C;
    }), _ = (C) => {
      if (!n.value) return;
      const O = n.value.getBoundingClientRect(), N = C.clientX - O.left, b = C.clientY - O.top;
      d.value = Math.round(N / O.width * 100), u.value = Math.round(b / O.height * 100);
      const S = 50, v = 50, h = d.value - S, L = u.value - v, M = Math.atan2(L, h) * (180 / Math.PI);
      m.value = Math.round(M);
    }, D = () => {
      d.value = 50, u.value = 50;
    };
    return (C, O) => (i(), c("div", {
      class: l(R.value),
      "data-variant": t.variant,
      style: V(A.value),
      onMousemove: _,
      onMouseleave: D,
      ref_key: "cardRef",
      ref: n
    }, [
      T("div", {
        class: l(o(r)("glow"))
      }, null, 2),
      T("div", xt, [
        I.value ? (i(), c("div", {
          key: 0,
          class: l(["card__header", t.noHeaderPadding && "card__header--no-padding"])
        }, [
          t.title ? (i(), c("h3", Yt, f(t.title), 1)) : y(C.$slots, "header", { key: 1 })
        ], 2)) : E("", !0),
        T("div", {
          class: l(["card__content", t.noContentPadding && "card__content--no-padding"])
        }, [
          y(C.$slots, "default")
        ], 2),
        p.value ? (i(), c("div", {
          key: 1,
          class: l(["card__footer", t.noFooterPadding && "card__footer--no-padding"])
        }, [
          y(C.$slots, "footer")
        ], 2)) : E("", !0)
      ])
    ], 46, Vt));
  }
}), ct = /* @__PURE__ */ B({
  __name: "Container",
  props: {
    max: { default: "default" },
    maxWidth: {},
    padding: {},
    fluid: { type: Boolean, default: !1 },
    showHeader: { type: Boolean, default: !0 },
    showFooter: { type: Boolean, default: !0 },
    title: {},
    subtitle: {},
    noPadding: { type: Boolean, default: !1 },
    noHeaderPadding: { type: Boolean, default: !1 },
    noContentPadding: { type: Boolean, default: !1 },
    noFooterPadding: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, { bemm: a } = W("container"), s = w(() => [
      a(),
      r.fluid && a("", "fluid"),
      r.max && a("", r.max)
    ]), n = w(() => {
      const d = {
        small: "600px",
        medium: "900px",
        large: "1200px",
        wide: "1400px",
        full: "100%",
        "fit-content": "fit-content"
      };
      return {
        "--int-container-max-width": r.maxWidth || d[r.max] || d.large,
        "--int-container-padding": r.padding || "var(--spacing)"
      };
    });
    return (d, u) => (i(), c("div", {
      class: l(s.value),
      style: V(n.value)
    }, [
      t.showHeader && (t.title || t.subtitle || d.$slots.header) ? (i(), c("header", {
        key: 0,
        class: l(o(a)("header", ["", t.noPadding || t.noHeaderPadding ? "no-padding" : ""]))
      }, [
        T("div", {
          class: l(o(a)("header-content"))
        }, [
          t.title || t.subtitle ? (i(), c("div", {
            key: 0,
            class: l(o(a)("header-text"))
          }, [
            t.title ? (i(), c("h1", {
              key: 0,
              class: l(o(a)("title"))
            }, f(t.title), 3)) : E("", !0),
            t.subtitle ? (i(), c("p", {
              key: 1,
              class: l(o(a)("subtitle"))
            }, f(t.subtitle), 3)) : E("", !0)
          ], 2)) : E("", !0),
          y(d.$slots, "header")
        ], 2)
      ], 2)) : E("", !0),
      T("main", {
        class: l(o(a)("content", ["", t.noPadding || t.noContentPadding ? "no-padding" : ""]))
      }, [
        y(d.$slots, "default")
      ], 2),
      t.showFooter && d.$slots.footer ? (i(), c("footer", {
        key: 1,
        class: l(o(a)("footer", ["", t.noPadding || t.noFooterPadding ? "no-padding" : ""]))
      }, [
        y(d.$slots, "footer")
      ], 2)) : E("", !0)
    ], 6));
  }
}), zt = ["data-variant", "data-size"], yo = /* @__PURE__ */ B({
  __name: "Badge",
  props: {
    variant: { default: "default" },
    size: { default: "medium" },
    color: {},
    icon: {}
  },
  setup(t) {
    const r = t, a = w(() => [
      "badge",
      r.variant && `badge--${r.variant}`,
      r.size && `badge--${r.size}`,
      r.color && "badge--has-color"
    ]), s = w(() => r.color ? {
      "--badge-color": `var(--color-${r.color})`,
      "--badge-text-color": `var(--color-${r.color})-text`
    } : {});
    return (n, d) => (i(), c("span", {
      class: l(a.value),
      "data-variant": t.variant,
      "data-size": t.size,
      style: V(s.value)
    }, [
      t.icon ? (i(), g(o(U), {
        key: 0,
        name: t.icon,
        class: "badge__icon"
      }, null, 8, ["name"])) : E("", !0),
      y(n.$slots, "default")
    ], 14, zt));
  }
}), Bo = {
  DEFAULT: "default",
  OUTLINE: "outline"
};
var ge = /* @__PURE__ */ ((t) => (t.SMALL = "small", t.MEDIUM = "medium", t.LARGE = "large", t))(ge || {}), ee = /* @__PURE__ */ ((t) => (t.BACKGROUND = "background", t.FOREGROUND = "foreground", t.PRIMARY = "primary", t.SECONDARY = "secondary", t.SUCCESS = "success", t.WARNING = "warning", t.ERROR = "error", t.INFO = "info", t))(ee || {});
const Ce = {
  SHORT: "short",
  LONG: "long",
  RIGHT: "right"
}, qt = {
  BOTTOM_CENTER: "bottom-center"
}, ut = {
  id: "",
  position: qt.BOTTOM_CENTER,
  clickMode: Ce.SHORT,
  pressTime: 500,
  menu: [],
  vibrate: !0,
  disabled: !1,
  size: ge.MEDIUM
}, Qt = {
  id: "",
  disabled: !1,
  active: !0,
  icon: "",
  label: "",
  link: "",
  action: void 0,
  items: [],
  size: ge.MEDIUM,
  type: "default"
}, xe = ut, _e = (t) => t.map((r) => {
  const a = { ...Qt, ...r };
  return a.items && a.items.length > 0 && (a.items = _e(a.items)), a;
}).filter((r) => !r.disabled && r.active), jt = ["href", "onClick"], Zt = { key: 0 }, Jt = /* @__PURE__ */ B({
  __name: "ContextMenuItems",
  props: {
    items: {
      type: Array,
      required: !0
    },
    contextMenu: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const r = W("context-menu-items"), a = t, s = (d) => {
      if (d.link)
        return d.link;
    }, n = (d, u) => {
      var m;
      d.preventDefault(), !((m = u.items) != null && m.length) && (u.action && u.action(), u.link && (window.location.href = u.link), setTimeout(() => {
        var I;
        (I = a.contextMenu) == null || I.close();
      }, 100));
    };
    return (d, u) => {
      const m = mt("ContextMenuItems", !0);
      return i(), c("ul", {
        class: l(o(r)("list"))
      }, [
        (i(!0), c(k, null, G(t.items, (I) => {
          var p, R;
          return i(), c("li", {
            key: I.id + I.label,
            class: l(o(r)("list-item", ["", `size-${I.size}`]))
          }, [
            I.type == "default" ? (i(), c(k, { key: 0 }, [
              F(o(te), {
                icon: I.icon,
                class: l(o(r)("item", ["", "normal", (p = I.items) != null && p.length ? "has-submenu" : ""])),
                variant: "ghost",
                color: o(ee).FOREGROUND,
                href: s(I),
                onClick: (A) => n(A, I)
              }, {
                default: X(() => {
                  var A;
                  return [
                    K(f(I.label) + " ", 1),
                    (A = I.items) != null && A.length ? (i(), g(o(U), {
                      key: 0,
                      name: "chevron-right"
                    })) : E("", !0)
                  ];
                }),
                _: 2
              }, 1032, ["icon", "class", "color", "href", "onClick"]),
              (R = I.items) != null && R.length ? (i(), c("div", {
                key: 0,
                class: l(["panel", o(r)("submenu")])
              }, [
                F(m, {
                  items: o(_e)(I.items),
                  "context-menu": t.contextMenu
                }, null, 8, ["items", "context-menu"])
              ], 2)) : E("", !0)
            ], 64)) : E("", !0),
            I.type == "row" ? (i(), c("div", {
              key: 1,
              class: l(o(r)("row"))
            }, [
              F(m, {
                items: o(_e)(I.items),
                "context-menu": t.contextMenu
              }, null, 8, ["items", "context-menu"])
            ], 2)) : E("", !0),
            I.type == "icon-tile" ? (i(), c("a", {
              key: 2,
              class: l(o(r)("item", ["", "icon-tile"])),
              href: s(I),
              onClick: (A) => n(A, I)
            }, [
              I.icon ? (i(), g(o(U), {
                key: 0,
                class: l(o(r)("icon")),
                name: I.icon
              }, null, 8, ["class", "name"])) : E("", !0),
              I.label ? (i(), c("span", {
                key: 1,
                class: l(o(r)("label"))
              }, f(I.label), 3)) : E("", !0)
            ], 10, jt)) : E("", !0),
            I.type == "separator" && I.active ? (i(), c("hr", {
              key: 3,
              class: l(o(r)("separator"))
            }, null, 2)) : E("", !0),
            I.type == "header" ? (i(), c("div", {
              key: 4,
              class: l(o(r)("header"))
            }, [
              I.label ? (i(), c("h5", Zt, f(I.label), 1)) : E("", !0)
            ], 2)) : E("", !0)
          ], 2);
        }), 128))
      ], 2);
    };
  }
}), ea = ["id"], ta = /* @__PURE__ */ B({
  __name: "ContextPanel",
  props: {
    config: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(t, { expose: r }) {
    const a = W("context-panel"), s = H(!1), n = H(null), d = H(0), u = H(0), m = t, { id: I, position: p, clickMode: R, pressTime: A, vibrate: _, disabled: D, size: C } = {
      ...ut,
      ...m.config
    }, O = H(null), N = H(!1), b = R === Ce.LONG, S = R === Ce.RIGHT, v = (x) => {
      D || R !== Ce.LONG || (x.preventDefault(), x.stopPropagation(), N.value = !1, O.value = window.setTimeout(() => {
        _ && navigator.vibrate && navigator.vibrate(50), M(x), N.value = !0;
      }, A));
    }, h = (x) => {
      D || S && M(x);
    }, L = (x) => {
      x.preventDefault(), x.stopPropagation(), !D && (!b && !S && M(x), b && (O.value && (clearTimeout(O.value), O.value = null), N.value = !1));
    }, P = (x) => {
      D || (x.preventDefault(), O.value && (clearTimeout(O.value), O.value = null));
    }, M = (x) => {
      D || (x && p === "click" && (d.value = Math.round(x.clientX), u.value = Math.round(x.clientY)), s.value ? Re() : We());
    }, Y = (x) => {
      D || s.value && n.value && !n.value.contains(x.target) && Re();
    }, j = () => {
      s.value && Re();
    };
    le(() => {
      D || (window.addEventListener("click", Y), window.addEventListener("resize", j), window.addEventListener("orientationchange", j));
    }), Oe(() => {
      window.removeEventListener("click", Y), window.removeEventListener("resize", j), window.removeEventListener("orientationchange", j);
    });
    const Re = () => s.value = !1, We = () => {
      setTimeout(() => {
        s.value = !0;
      }, 100);
    };
    return r({
      toggle: M,
      close: Re,
      open: We
    }), (x, vo) => (i(), c("div", {
      id: o(I),
      ref_key: "panelRef",
      ref: n,
      class: l(o(a)("", ["", s.value ? "active" : "inactive", `size:${o(C)}`])),
      style: V(`--click-x: ${d.value}px; --click-y: ${u.value}px`)
    }, [
      T("div", {
        class: l(o(a)("trigger")),
        onPointerdown: ce(v, ["stop"]),
        onPointerup: ce(L, ["stop"]),
        onPointerleave: ce(P, ["stop"]),
        onContextmenu: ce(h, ["prevent", "stop"])
      }, [
        y(x.$slots, "default")
      ], 34),
      s.value ? (i(), c("div", {
        key: 0,
        class: l(o(a)("overlay")),
        onPointerdown: ce(Re, ["stop"])
      }, null, 34)) : E("", !0),
      T("div", {
        class: l(["panel", o(a)("panel", ["", s.value ? "active" : "", o(p)])])
      }, [
        T("div", {
          class: l(o(a)("content"))
        }, [
          y(x.$slots, "content")
        ], 2)
      ], 2)
    ], 14, ea));
  }
}), ko = /* @__PURE__ */ B({
  __name: "ContextMenu",
  props: {
    config: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(t, { expose: r }) {
    const a = W("context-menu"), s = H(), n = t, { menu: d } = {
      ...xe,
      ...n.config
    }, u = H(_e(d));
    return re(() => n.config, (m, I) => {
      if (m) {
        const { menu: p } = {
          ...xe,
          ...m
        };
        u.value = _e(p);
      }
    }, { immediate: !0, deep: !0 }), r({
      close: () => {
        var m;
        return (m = s.value) == null ? void 0 : m.close();
      },
      open: () => {
        var m;
        return (m = s.value) == null ? void 0 : m.open();
      },
      toggle: () => {
        var m;
        return (m = s.value) == null ? void 0 : m.toggle();
      }
    }), (m, I) => (i(), g(ta, {
      ref_key: "contextMenuRef",
      ref: s,
      config: t.config,
      class: l(o(a)("", `size-${t.config.size}`))
    }, {
      default: X(() => [
        y(m.$slots, "default")
      ]),
      content: X(() => [
        u.value && s.value ? (i(), g(Jt, {
          key: 0,
          items: u.value,
          "context-menu": s.value
        }, null, 8, ["items", "context-menu"])) : E("", !0)
      ]),
      _: 3
    }, 8, ["config", "class"]));
  }
}), Ho = /* @__PURE__ */ B({
  __name: "Tabs",
  props: {
    modelValue: { default: "" },
    orientation: { default: "horizontal" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: r }) {
    const a = t, s = r, { bemm: n } = W("tabs"), d = H(a.modelValue), u = w(() => [
      n(),
      n("", a.orientation)
    ]);
    re(() => a.modelValue, (I) => {
      d.value = I;
    });
    const m = (I) => {
      d.value = I, s("update:modelValue", I);
    };
    return ye("activeTab", d), ye("selectTab", m), (I, p) => (i(), c("div", {
      class: l(u.value)
    }, [
      T("nav", {
        class: l(o(n)("nav")),
        role: "tablist"
      }, [
        y(I.$slots, "tabs")
      ], 2),
      T("div", {
        class: l(o(n)("panels"))
      }, [
        y(I.$slots, "panels")
      ], 2)
    ], 2));
  }
}), aa = ["aria-selected", "aria-controls", "disabled"], Po = /* @__PURE__ */ B({
  __name: "Tab",
  props: {
    id: {},
    label: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, { bemm: a } = W("tab"), s = Te("activeTab"), n = Te("selectTab"), d = w(() => (s == null ? void 0 : s.value) === r.id), u = w(() => {
      const I = [a()];
      return d.value && I.push(a("", "active")), r.disabled && I.push(a("", "disabled")), r.icon && I.push(a("", "has-icon")), I;
    }), m = () => {
      !r.disabled && n && n(r.id);
    };
    return (I, p) => (i(), c("button", {
      class: l(u.value),
      "aria-selected": d.value,
      "aria-controls": `panel-${r.id}`,
      disabled: r.disabled,
      onClick: m,
      type: "button",
      role: "tab"
    }, [
      r.icon ? (i(), g(U, {
        key: 0,
        name: r.icon,
        class: l(o(a)("icon"))
      }, null, 8, ["name", "class"])) : E("", !0),
      T("span", {
        class: l(o(a)("label"))
      }, f(r.label), 3)
    ], 10, aa));
  }
}), ra = ["id", "aria-labelledby"], Uo = /* @__PURE__ */ B({
  __name: "TabPanel",
  props: {
    id: {}
  },
  setup(t) {
    const r = t, { bemm: a } = W("tab-panel"), s = Te("activeTab"), n = w(() => (s == null ? void 0 : s.value) === r.id), d = w(() => [a()]);
    return (u, m) => n.value ? (i(), c("div", {
      key: 0,
      id: `panel-${r.id}`,
      class: l(d.value),
      role: "tabpanel",
      "aria-labelledby": r.id
    }, [
      y(u.$slots, "default")
    ], 10, ra)) : E("", !0);
  }
}), oa = ["width", "height"], na = ["cx", "cy", "r", "stroke-width"], ia = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset", "transform-origin"], la = ["x", "y"], Ye = /* @__PURE__ */ B({
  __name: "CircularProgress",
  props: {
    percentage: {},
    size: { default: 48 },
    strokeWidth: { default: 4 },
    indeterminate: { type: Boolean, default: !1 },
    color: {}
  },
  setup(t) {
    const r = t, { bemm: a } = W("circular-progress"), s = w(() => r.size / 2), n = w(() => (r.size - r.strokeWidth) / 2), d = w(() => 2 * Math.PI * n.value), u = w(() => {
      if (r.indeterminate)
        return d.value * 0.25;
      const p = Math.min(Math.max(r.percentage || 0, 0), 100);
      return d.value - p / 100 * d.value;
    }), m = w(() => r.percentage ? r.percentage === 100 ? "success" : r.percentage >= 90 ? "almost" : r.percentage >= 50 ? "warning" : "danger" : "default"), I = w(() => `${r.size / 100 * 16 * 1.75}px`);
    return (p, R) => (i(), c("svg", {
      width: t.size,
      height: t.size,
      class: l(o(a)())
    }, [
      T("circle", {
        class: l(o(a)("track")),
        cx: s.value,
        cy: s.value,
        r: n.value,
        "stroke-width": t.strokeWidth,
        fill: "none"
      }, null, 10, na),
      T("circle", {
        class: l([o(a)("fill", ["", t.color || m.value]), t.indeterminate && o(a)("fill", "indeterminate")]),
        cx: s.value,
        cy: s.value,
        r: n.value,
        "stroke-width": t.strokeWidth,
        fill: "none",
        "stroke-dasharray": d.value,
        "stroke-dashoffset": u.value,
        transform: "rotate(-90)",
        "transform-origin": `${s.value} ${s.value}`
      }, null, 10, ia),
      !t.indeterminate && t.percentage !== void 0 ? (i(), c("text", {
        key: 0,
        x: s.value,
        y: s.value,
        class: l(o(a)("text", ["", t.color || m.value])),
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        style: V({ fontSize: I.value })
      }, f(Math.round(t.percentage)) + "% ", 15, la)) : E("", !0)
    ], 10, oa));
  }
}), Mo = /* @__PURE__ */ B({
  __name: "StatsCard",
  props: {
    value: {},
    label: {},
    layout: { default: "icon" },
    icon: {},
    color: { default: "primary" },
    variant: { default: "default" },
    size: { default: "medium" },
    percentage: {},
    total: {},
    isLoading: { type: Boolean, default: !1 },
    isClickable: { type: Boolean, default: !1 },
    formatter: {}
  },
  setup(t) {
    const r = t, { bemm: a } = W("stats-card"), s = {
      small: 32,
      medium: 48,
      large: 64
    }, n = {
      small: 3,
      medium: 4,
      large: 5
    }, d = w(() => r.formatter ? r.formatter(r.value) : r.layout === "progress-circle" || r.layout === "progress-bar" ? `${u.value}%` : r.value.toString()), u = w(() => r.percentage !== void 0 ? Math.min(100, Math.max(0, r.percentage)) : r.total !== void 0 && typeof r.value == "number" ? Math.min(100, Math.max(0, r.value / r.total * 100)) : 0), m = w(() => {
      const p = u.value;
      return p >= 90 ? "success" : p >= 70 ? "info" : p >= 50 ? "warning" : "error";
    }), I = w(() => {
      switch (r.variant) {
        case "elevated":
          return "elevated";
        case "outlined":
          return "default";
        case "minimal":
          return "ghost";
        default:
          return "default";
      }
    });
    return (p, R) => (i(), g(o(Me), {
      variant: I.value,
      hoverable: t.isClickable,
      class: l(o(a)("", ["", t.size]))
    }, {
      default: X(() => [
        t.layout === "icon" ? (i(), c(k, { key: 0 }, [
          T("div", {
            class: l(o(a)("icon-container", { loading: t.isLoading }))
          }, [
            t.isLoading ? (i(), g(o(Ye), {
              key: 0,
              size: s[t.size],
              "stroke-width": 2,
              indeterminate: ""
            }, null, 8, ["size"])) : (i(), c("div", {
              key: 1,
              class: l(o(a)("icon", ["", t.color]))
            }, [
              F(o(U), {
                name: t.icon || "chart-bar"
              }, null, 8, ["name"])
            ], 2))
          ], 2),
          T("div", {
            class: l(o(a)("content"))
          }, [
            T("span", {
              class: l(o(a)("value"))
            }, f(d.value), 3),
            T("span", {
              class: l(o(a)("label"))
            }, f(t.label), 3)
          ], 2)
        ], 64)) : t.layout === "progress-circle" ? (i(), c(k, { key: 1 }, [
          T("div", {
            class: l(o(a)("progress-container"))
          }, [
            F(o(Ye), {
              percentage: u.value,
              size: s[t.size],
              "stroke-width": n[t.size],
              color: m.value
            }, null, 8, ["percentage", "size", "stroke-width", "color"])
          ], 2),
          T("div", {
            class: l(o(a)("content"))
          }, [
            T("span", {
              class: l(o(a)("value"))
            }, f(d.value), 3),
            T("span", {
              class: l(o(a)("label"))
            }, f(t.label), 3)
          ], 2)
        ], 64)) : t.layout === "progress-bar" ? (i(), c(k, { key: 2 }, [
          T("div", {
            class: l(o(a)("header"))
          }, [
            T("span", {
              class: l(o(a)("label"))
            }, f(t.label), 3),
            T("span", {
              class: l(o(a)("value"))
            }, f(d.value), 3)
          ], 2),
          T("div", {
            class: l(o(a)("progress-bar"))
          }, [
            T("div", {
              class: l(o(a)("progress-fill", ["", t.color])),
              style: V({ width: `${u.value}%` })
            }, null, 6)
          ], 2)
        ], 64)) : t.layout === "compact" ? (i(), c(k, { key: 3 }, [
          t.icon ? (i(), g(o(U), {
            key: 0,
            name: t.icon,
            class: l(o(a)("compact-icon", ["", t.color]))
          }, null, 8, ["name", "class"])) : E("", !0),
          T("span", {
            class: l(o(a)("compact-value"))
          }, f(d.value), 3),
          t.label ? (i(), c("span", {
            key: 1,
            class: l(o(a)("compact-label"))
          }, f(t.label), 3)) : E("", !0)
        ], 64)) : E("", !0),
        p.$slots.action ? (i(), c("div", {
          key: 4,
          class: l(o(a)("action"))
        }, [
          y(p.$slots, "action")
        ], 2)) : E("", !0)
      ]),
      _: 3
    }, 8, ["variant", "hoverable", "class"]));
  }
}), Fo = /* @__PURE__ */ B({
  __name: "OptionItem",
  props: {
    label: {},
    value: {},
    description: {},
    icon: {},
    clickable: { type: Boolean, default: !0 },
    showArrow: { type: Boolean, default: !1 },
    selected: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, s = r, { bemm: n } = W("option-item"), d = (u) => {
      a.clickable && s("click", u);
    };
    return (u, m) => (i(), c("div", {
      class: l([
        o(n)(),
        t.clickable && o(n)("", "clickable"),
        t.selected && o(n)("", "selected")
      ]),
      onClick: d
    }, [
      T("div", {
        class: l(o(n)("content"))
      }, [
        t.icon || u.$slots.icon ? (i(), c("div", {
          key: 0,
          class: l(o(n)("icon"))
        }, [
          y(u.$slots, "icon", {}, () => [
            t.icon ? (i(), g(o(U), {
              key: 0,
              name: t.icon
            }, null, 8, ["name"])) : E("", !0)
          ])
        ], 2)) : E("", !0),
        T("div", {
          class: l(o(n)("info"))
        }, [
          t.label || u.$slots.label ? (i(), c("div", {
            key: 0,
            class: l(o(n)("label"))
          }, [
            y(u.$slots, "label", {}, () => [
              K(f(t.label), 1)
            ])
          ], 2)) : E("", !0),
          t.value || t.description || u.$slots.default ? (i(), c("div", {
            key: 1,
            class: l(o(n)("value"))
          }, [
            y(u.$slots, "default", {}, () => [
              K(f(t.value || t.description), 1)
            ])
          ], 2)) : E("", !0)
        ], 2)
      ], 2),
      u.$slots.actions || t.showArrow ? (i(), c("div", {
        key: 0,
        class: l(o(n)("actions"))
      }, [
        y(u.$slots, "actions", {}, () => [
          t.showArrow ? (i(), g(o(U), {
            key: 0,
            name: "chevron-right",
            class: l(o(n)("arrow"))
          }, null, 8, ["class"])) : E("", !0)
        ])
      ], 2)) : E("", !0)
    ], 2));
  }
}), sa = ["stroke-dasharray"], Wo = /* @__PURE__ */ B({
  __name: "Progress",
  props: {
    value: { default: 0 },
    max: { default: 100 },
    label: {},
    details: {},
    showBar: { type: Boolean, default: !0 },
    showPercentage: { type: Boolean, default: !0 },
    showPercentageInBar: { type: Boolean, default: !1 },
    indeterminate: { type: Boolean, default: !1 },
    variant: { default: "primary" },
    size: { default: "medium" },
    type: { default: "linear" }
  },
  setup(t) {
    const r = t, { bemm: a } = W("progress"), s = w(() => r.max === 0 ? 0 : Math.min(100, Math.max(0, r.value / r.max * 100)));
    return (n, d) => (i(), c("div", {
      class: l(o(a)("", [`type-${t.type}`, `size-${t.size}`]))
    }, [
      t.type === "linear" && t.showBar ? (i(), c("div", {
        key: 0,
        class: l(o(a)("bar"))
      }, [
        T("div", {
          class: l(o(a)("fill", {
            indeterminate: t.indeterminate,
            [`variant-${t.variant}`]: !0
          })),
          style: V(t.indeterminate ? void 0 : { width: `${s.value}%` })
        }, [
          t.showPercentageInBar && !t.indeterminate ? (i(), c("span", {
            key: 0,
            class: l(o(a)("bar-label"))
          }, f(Math.round(s.value)) + "% ", 3)) : E("", !0)
        ], 6)
      ], 2)) : E("", !0),
      t.type === "circular" ? (i(), c("div", {
        key: 1,
        class: l(o(a)("circular"))
      }, [
        (i(), c("svg", {
          class: l(o(a)("circular-svg")),
          viewBox: "0 0 100 100"
        }, [
          T("circle", {
            class: l(o(a)("circular-track")),
            cx: "50",
            cy: "50",
            r: "45",
            fill: "none",
            "stroke-width": "6"
          }, null, 2),
          T("circle", {
            class: l(o(a)("circular-fill", {
              indeterminate: t.indeterminate,
              [`variant-${t.variant}`]: !0
            })),
            cx: "50",
            cy: "50",
            r: "45",
            fill: "none",
            "stroke-width": "6",
            "stroke-dasharray": t.indeterminate ? "212.25 70.75" : `${s.value * 2.83} 283`,
            style: V(t.indeterminate ? { animation: "circular-indeterminate 1.4s ease-in-out infinite" } : void 0)
          }, null, 14, sa)
        ], 2)),
        t.showPercentage && !t.indeterminate ? (i(), c("div", {
          key: 0,
          class: l(o(a)("circular-label"))
        }, f(Math.round(s.value)) + "% ", 3)) : E("", !0)
      ], 2)) : E("", !0),
      t.label || t.showPercentage ? (i(), c("div", {
        key: 2,
        class: l(o(a)("label"))
      }, [
        t.label ? (i(), c("span", {
          key: 0,
          class: l(o(a)("label-text"))
        }, f(t.label), 3)) : E("", !0),
        t.showPercentage && !t.showPercentageInBar ? (i(), c("span", {
          key: 1,
          class: l(o(a)("label-percentage"))
        }, f(Math.round(s.value)) + "% ", 3)) : E("", !0)
      ], 2)) : E("", !0),
      t.details && t.details.length > 0 ? (i(), c("div", {
        key: 3,
        class: l(o(a)("details"))
      }, [
        (i(!0), c(k, null, G(t.details, (u, m) => (i(), c("span", {
          key: m,
          class: l(o(a)("detail"))
        }, f(u), 3))), 128))
      ], 2)) : E("", !0),
      n.$slots.default ? (i(), c("div", {
        key: 4,
        class: l(o(a)("content"))
      }, [
        y(n.$slots, "default")
      ], 2)) : E("", !0)
    ], 2));
  }
}), ca = ["aria-label"], ua = /* @__PURE__ */ B({
  __name: "ThemeToggle",
  props: {
    theme: { default: "light" }
  },
  emits: ["toggle"],
  setup(t) {
    const r = t, { bemm: a } = W("theme-toggle"), s = w(() => r.theme === "system" ? "monitor" : r.theme === "dark" ? "sun" : "moon");
    return (n, d) => (i(), c("button", {
      class: l(o(a)()),
      onClick: d[0] || (d[0] = (u) => n.$emit("toggle")),
      "aria-label": t.theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      type: "button"
    }, [
      F(o(U), { name: s.value }, null, 8, ["name"])
    ], 10, ca));
  }
});
let ze = 0;
function Fe(t = "id") {
  return ze++, `${t}-${ze}`;
}
const da = { class: "input-wrapper" }, Ia = ["for"], ma = {
  key: 0,
  class: "input-required"
}, Ea = {
  key: 1,
  class: "input-description"
}, Ra = ["id", "type", "placeholder", "disabled", "readonly", "required"], Aa = ["title"], Ta = {
  key: 2,
  class: "input-errors"
}, oe = /* @__PURE__ */ B({
  inheritAttrs: !1,
  __name: "BaseInput",
  props: /* @__PURE__ */ $({
    type: { default: "text" },
    size: { default: "medium" },
    variant: { default: "default" },
    label: {},
    placeholder: {},
    description: {},
    error: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    clearable: { type: Boolean },
    clearTitle: { default: "Clear" },
    prefixIcon: {},
    suffixIcon: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["focus", "blur", "input", "change", "clear", "touched"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const a = t, s = Fe("input"), n = Z(t, "modelValue"), d = r, u = (R) => {
      const A = R.target;
      n.value = A.value, d("input", R);
    }, m = w(() => [
      "input-container",
      `input-container--${a.size}`,
      `input-container--${a.variant}`,
      a.disabled && "input-container--disabled",
      a.readonly && "input-container--readonly",
      a.error && "input-container--error",
      a.prefixIcon && "input-container--has-prefix",
      a.suffixIcon && "input-container--has-suffix",
      a.clearable && n.value && "input-container--has-clear"
    ]), I = w(() => [
      "input",
      `input--${a.size}`,
      `input--${a.variant}`
    ]), p = () => {
      n.value = "", d("clear");
    };
    return (R, A) => (i(), c("div", da, [
      t.label ? (i(), c("label", {
        key: 0,
        for: o(s),
        class: "input-label"
      }, [
        K(f(t.label) + " ", 1),
        t.required ? (i(), c("span", ma, "*")) : E("", !0)
      ], 8, Ia)) : E("", !0),
      t.description ? (i(), c("div", Ea, f(t.description), 1)) : E("", !0),
      T("div", {
        class: l(["input-container", m.value])
      }, [
        y(R.$slots, "control", {
          id: o(s),
          value: n.value,
          disabled: t.disabled,
          handleInput: u
        }, () => [
          t.prefixIcon ? (i(), g(o(U), {
            key: 0,
            name: t.prefixIcon,
            class: "input-icon input-icon--prefix"
          }, null, 8, ["name"])) : E("", !0),
          we(T("input", ie({
            id: o(s),
            "onUpdate:modelValue": A[0] || (A[0] = (_) => n.value = _),
            type: t.type,
            placeholder: t.placeholder,
            disabled: t.disabled,
            readonly: t.readonly,
            required: t.required,
            class: I.value
          }, R.$attrs, {
            onFocus: A[1] || (A[1] = (_) => R.$emit("focus", _)),
            onBlur: A[2] || (A[2] = (_) => R.$emit("blur", _)),
            onInput: u,
            onChange: A[3] || (A[3] = (_) => R.$emit("change", _))
          }), null, 16, Ra), [
            [Et, n.value]
          ]),
          t.suffixIcon ? (i(), g(o(U), {
            key: 1,
            name: t.suffixIcon,
            class: "input-icon input-icon--suffix"
          }, null, 8, ["name"])) : E("", !0),
          t.clearable && n.value ? (i(), c("button", {
            key: 2,
            type: "button",
            class: "input-clear",
            onClick: p,
            title: t.clearTitle
          }, [
            F(o(U), { name: "multiply" })
          ], 8, Aa)) : E("", !0)
        ])
      ], 2),
      t.error && t.error.length ? (i(), c("div", Ta, [
        (i(!0), c(k, null, G(t.error, (_) => (i(), c("div", {
          key: _,
          class: "input-error"
        }, f(_), 1))), 128))
      ])) : E("", !0)
    ]));
  }
}), Go = /* @__PURE__ */ B({
  inheritAttrs: !1,
  __name: "SearchInput",
  props: /* @__PURE__ */ $({
    size: {},
    variant: {},
    label: {},
    placeholder: { default: "Search..." },
    description: {},
    error: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    clearable: { type: Boolean, default: !0 },
    clearTitle: {},
    suffixIcon: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["focus", "blur", "input", "change", "clear"], ["update:modelValue"]),
  setup(t) {
    const r = Z(t, "modelValue");
    return (a, s) => (i(), g(o(oe), ie({
      modelValue: r.value,
      "onUpdate:modelValue": s[0] || (s[0] = (n) => r.value = n),
      type: "search",
      "prefix-icon": "search",
      clearable: t.clearable
    }, a.$attrs, {
      onFocus: s[1] || (s[1] = (n) => a.$emit("focus", n)),
      onBlur: s[2] || (s[2] = (n) => a.$emit("blur", n)),
      onInput: s[3] || (s[3] = (n) => a.$emit("input", n)),
      onChange: s[4] || (s[4] = (n) => a.$emit("change", n)),
      onClear: s[5] || (s[5] = (n) => a.$emit("clear"))
    }), null, 16, ["modelValue", "clearable"]));
  }
}), pa = /* @__PURE__ */ B({
  inheritAttrs: !1,
  __name: "TextInput",
  props: /* @__PURE__ */ $({
    size: {},
    variant: {},
    label: {},
    placeholder: {},
    description: {},
    error: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    clearable: { type: Boolean },
    clearTitle: {},
    prefixIcon: {},
    suffixIcon: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["focus", "blur", "input", "change", "clear"], ["update:modelValue"]),
  setup(t) {
    const r = Z(t, "modelValue");
    return (a, s) => (i(), g(o(oe), ie({
      modelValue: r.value,
      "onUpdate:modelValue": s[0] || (s[0] = (n) => r.value = n),
      type: "text"
    }, a.$attrs, {
      onFocus: s[1] || (s[1] = (n) => a.$emit("focus", n)),
      onBlur: s[2] || (s[2] = (n) => a.$emit("blur", n)),
      onInput: s[3] || (s[3] = (n) => a.$emit("input", n)),
      onChange: s[4] || (s[4] = (n) => a.$emit("change", n)),
      onClear: s[5] || (s[5] = (n) => a.$emit("clear"))
    }), null, 16, ["modelValue"]));
  }
}), _a = ["id", "value", "disabled", "onInput", "onChange"], Oa = {
  key: 0,
  value: ""
}, wa = ["value"], fa = ["label"], La = ["value"], ha = ["id", "value", "disabled", "onChange"], Ca = {
  key: 0,
  value: ""
}, Sa = ["value"], Da = ["label"], va = ["value"], be = "select-input", Xo = /* @__PURE__ */ B({
  __name: "SelectInput",
  props: /* @__PURE__ */ $({
    modelValue: {},
    label: { default: "" },
    description: { default: "" },
    options: { default: () => [] },
    error: { default: () => [] },
    size: { default: ge.MEDIUM },
    allowNull: { type: Boolean, default: !1 },
    nullLabel: { default: "Please select..." },
    disabled: { type: Boolean, default: !1 },
    placeholder: {},
    searchable: { type: Boolean },
    multiple: { type: Boolean }
  }, {
    modelValue: {
      default: null
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["update:modelValue", "change", "touched", "focus", "blur"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const a = Z(t, "modelValue"), s = t, n = r, d = W(be), u = (A) => typeof A == "string" ? {
      label: A,
      value: A
    } : A && typeof A == "object" && ("label" in A || "value" in A) ? {
      label: A.label || A.value || "",
      value: A.value || A.label || "",
      disabled: A.disabled,
      icon: A.icon
    } : (console.warn("Invalid option format:", A), {
      label: String(A),
      value: String(A)
    }), m = (A) => !A || !Array.isArray(A) ? !1 : A.some((_) => typeof _ == "object" && "title" in _ && "options" in _), I = H(m(s.options)), p = w(() => m(s.options) ? s.options.map((A) => ({
      title: A.title,
      options: A.options.map((_) => u(_))
    })) : s.options.map((A) => u(A))), R = (A) => {
      const D = A.target.value, C = s.allowNull && D === "" ? null : D;
      n("change", C);
    };
    return (A, _) => a.value !== void 0 ? (i(), g(oe, {
      key: 0,
      modelValue: a.value ?? void 0,
      block: be,
      label: t.label,
      description: t.description,
      error: t.error,
      size: t.size,
      disabled: t.disabled,
      "onUpdate:modelValue": _[0] || (_[0] = (D) => a.value = D ?? null),
      onChange: R,
      onTouched: _[1] || (_[1] = (D) => A.$emit("touched", D))
    }, {
      control: X(({ id: D, value: C, disabled: O, handleInput: N }) => [
        T("select", {
          id: D,
          value: C ?? "",
          class: l(o(d)("control")),
          disabled: O,
          onInput: N,
          onChange: N
        }, [
          t.allowNull ? (i(), c("option", Oa, f(t.nullLabel), 1)) : E("", !0),
          I.value ? E("", !0) : (i(!0), c(k, { key: 1 }, G(p.value, (b) => (i(), c("option", {
            key: b.value,
            value: b.value
          }, f(b.label), 9, wa))), 128)),
          I.value ? (i(!0), c(k, { key: 2 }, G(p.value, (b) => (i(), c("optgroup", {
            key: b.title,
            label: b.title
          }, [
            (i(!0), c(k, null, G(b.options, (S) => (i(), c("option", {
              key: S.value,
              value: S.value
            }, f(S.label), 9, La))), 128))
          ], 8, fa))), 128)) : E("", !0)
        ], 42, _a)
      ]),
      _: 1
    }, 8, ["modelValue", "label", "description", "error", "size", "disabled"])) : (i(), g(oe, {
      key: 1,
      modelValue: s.modelValue ?? void 0,
      block: be,
      label: t.label,
      description: t.description,
      error: t.error,
      size: t.size,
      disabled: t.disabled,
      "onUpdate:modelValue": _[2] || (_[2] = (D) => A.$emit("update:modelValue", D)),
      onChange: R,
      onTouched: _[3] || (_[3] = (D) => A.$emit("touched", D))
    }, {
      control: X(({ id: D, value: C, disabled: O, handleInput: N }) => [
        T("select", {
          id: D,
          value: C ?? "",
          class: l(o(d)("control")),
          disabled: O,
          onChange: (b) => {
            N(b), R(b);
          }
        }, [
          t.allowNull ? (i(), c("option", Ca, f(t.nullLabel), 1)) : E("", !0),
          I.value ? E("", !0) : (i(!0), c(k, { key: 1 }, G(p.value, (b) => (i(), c("option", {
            key: b.value,
            value: b.value
          }, f(b.label), 9, Sa))), 128)),
          I.value ? (i(!0), c(k, { key: 2 }, G(p.value, (b) => (i(), c("optgroup", {
            key: b.title,
            label: b.title
          }, [
            (i(!0), c(k, null, G(b.options, (S) => (i(), c("option", {
              key: S.value,
              value: S.value
            }, f(S.label), 9, va))), 128))
          ], 8, Da))), 128)) : E("", !0)
        ], 42, ha)
      ]),
      _: 1
    }, 8, ["modelValue", "label", "description", "error", "size", "disabled"]));
  }
}), ga = ["value", "placeholder", "disabled", "readonly", "maxlength", "spellcheck"], Ko = /* @__PURE__ */ B({
  __name: "TInputTextArea",
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    placeholder: { default: "" },
    description: {},
    autoGrow: { type: Boolean, default: !0 },
    allowResize: { type: Boolean, default: !1 },
    minRows: { default: 3 },
    maxRows: { default: 10 },
    disabled: { type: Boolean, default: !1 },
    maxlength: {},
    showCount: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    spellcheck: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change", "touched", "focus", "blur", "submit"],
  setup(t, { emit: r }) {
    const a = t, s = r, n = W("t-input-textarea"), d = H(), u = `textarea-${Math.random().toString(36).substr(2, 9)}`, m = H(0), I = H(0), p = w(() => {
      const D = {};
      return a.autoGrow && m.value && (D.height = `${m.value}px`), a.minRows && I.value && (D.minHeight = `${a.minRows * I.value}px`), a.maxRows && I.value && (D.maxHeight = `${a.maxRows * I.value}px`), D;
    }), R = (D) => {
      if (!a.autoGrow) return;
      if (D.style.height = "auto", !I.value) {
        const O = window.getComputedStyle(D);
        I.value = parseInt(O.lineHeight);
      }
      let C = D.scrollHeight;
      if (a.minRows && I.value) {
        const O = a.minRows * I.value;
        C = Math.max(C, O);
      }
      if (a.maxRows && I.value) {
        const O = a.maxRows * I.value;
        C = Math.min(C, O);
      }
      m.value = C;
    }, A = (D) => {
      const C = D.target, O = C.value;
      s("update:modelValue", O), s("change", O), a.autoGrow && R(C);
    }, _ = (D) => {
      D.key === "Enter" && !D.shiftKey && !D.ctrlKey && !D.metaKey && s("submit", D);
    };
    return le(() => {
      if (d.value) {
        const D = window.getComputedStyle(d.value);
        I.value = parseInt(D.lineHeight), a.autoGrow && (m.value = a.minRows * I.value, a.modelValue && R(d.value));
      }
    }), (D, C) => (i(), c("div", {
      class: l(o(n)())
    }, [
      t.label ? (i(), c("label", {
        key: 0,
        for: u,
        class: l(o(n)("label"))
      }, f(t.label), 3)) : E("", !0),
      T("div", {
        class: l(o(n)("control-wrapper"))
      }, [
        T("textarea", {
          id: u,
          ref_key: "control",
          ref: d,
          value: t.modelValue,
          style: V(p.value),
          class: l([o(n)("control"), { "no-resize": !t.allowResize }]),
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          maxlength: t.maxlength,
          spellcheck: t.spellcheck,
          onInput: A,
          onFocus: C[0] || (C[0] = (O) => D.$emit("focus", O)),
          onBlur: C[1] || (C[1] = (O) => D.$emit("blur", O)),
          onKeydown: _
        }, null, 46, ga)
      ], 2),
      t.description || t.showCount ? (i(), c("div", {
        key: 1,
        class: l(o(n)("footer"))
      }, [
        t.description ? (i(), c("p", {
          key: 0,
          class: l(o(n)("description"))
        }, f(t.description), 3)) : E("", !0),
        t.showCount && t.maxlength ? (i(), c("span", {
          key: 1,
          class: l(o(n)("count"))
        }, f((t.modelValue || "").length) + "/" + f(t.maxlength), 3)) : E("", !0)
      ], 2)) : E("", !0)
    ], 2));
  }
}), $o = /* @__PURE__ */ B({
  __name: "InputEmail",
  props: /* @__PURE__ */ $({
    modelValue: {},
    size: {},
    variant: {},
    label: {},
    placeholder: { default: "email@example.com" },
    description: {},
    error: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    clearable: { type: Boolean, default: !0 },
    autocomplete: { default: "email" },
    validate: { type: Boolean, default: !0 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["update:modelValue", "blur", "validity"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const a = t, s = Z(t, "modelValue"), n = r, d = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, u = w(() => {
      if (!a.validate || !a.error || typeof a.error == "string")
        return a.error;
      if (s.value && !d.test(s.value)) {
        const R = "Please enter a valid email address";
        return Array.isArray(a.error) ? [...a.error, R] : R;
      }
      return a.error;
    }), m = (R) => {
      if (R !== void 0 && (s.value = R, a.validate)) {
        const A = !R || d.test(R);
        n("validity", A);
      }
    }, I = (R) => {
      if (n("blur", R), a.validate && s.value) {
        const A = d.test(s.value);
        n("validity", A);
      }
    }, p = w(() => "mail");
    return (R, A) => (i(), g(o(oe), {
      type: "email",
      "model-value": s.value,
      size: t.size,
      variant: t.variant,
      label: t.label,
      placeholder: t.placeholder,
      description: t.description,
      error: u.value,
      disabled: t.disabled,
      readonly: t.readonly,
      required: t.required,
      clearable: t.clearable,
      autocomplete: t.autocomplete,
      "prefix-icon": p.value,
      "onUpdate:modelValue": m,
      onBlur: I
    }, null, 8, ["model-value", "size", "variant", "label", "placeholder", "description", "error", "disabled", "readonly", "required", "clearable", "autocomplete", "prefix-icon"]));
  }
}), Na = { class: "password-input" }, ba = {
  key: 0,
  class: "password-strength"
}, ya = { class: "password-strength-bar" }, Ba = {
  key: 1,
  class: "password-requirements"
}, ka = /* @__PURE__ */ B({
  __name: "InputPassword",
  props: /* @__PURE__ */ $({
    modelValue: {},
    size: {},
    variant: {},
    label: {},
    placeholder: { default: "Enter password" },
    description: {},
    error: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    clearable: { type: Boolean, default: !1 },
    autocomplete: { default: "current-password" },
    showStrength: { type: Boolean, default: !1 },
    minLength: { default: 8 },
    requireUppercase: { type: Boolean, default: !0 },
    requireLowercase: { type: Boolean, default: !0 },
    requireNumbers: { type: Boolean, default: !0 },
    requireSpecial: { type: Boolean, default: !0 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["update:modelValue", "blur", "strength"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const a = t, s = Z(t, "modelValue"), n = r, d = H(!1), u = H(!1), m = w(() => {
      if (!s.value) return 0;
      let L = 0;
      const P = s.value;
      return P.length >= a.minLength && (L += 25), P.length >= 12 && (L += 10), P.length >= 16 && (L += 15), /[a-z]/.test(P) && (L += 15), /[A-Z]/.test(P) && (L += 15), /[0-9]/.test(P) && (L += 15), /[^a-zA-Z0-9]/.test(P) && (L += 20), Math.min(L, 100);
    }), I = w(() => {
      const L = m.value;
      return L < 30 ? "weak" : L < 60 ? "fair" : L < 80 ? "good" : "strong";
    }), p = w(() => {
      const L = m.value;
      return L < 30 ? "Weak password" : L < 60 ? "Fair password" : L < 80 ? "Good password" : "Strong password";
    }), R = w(() => m.value), A = w(
      () => s.value && s.value.length >= a.minLength
    ), _ = w(
      () => !a.requireUppercase || s.value && /[A-Z]/.test(s.value)
    ), D = w(
      () => !a.requireLowercase || s.value && /[a-z]/.test(s.value)
    ), C = w(
      () => !a.requireNumbers || s.value && /[0-9]/.test(s.value)
    ), O = w(
      () => !a.requireSpecial || s.value && /[^a-zA-Z0-9]/.test(s.value)
    ), N = w(
      () => A.value && _.value && D.value && C.value && O.value
    ), b = w(() => {
      if (a.error) return a.error;
      if (u.value && s.value && !N.value)
        return "Password does not meet all requirements";
    }), S = (L) => {
      L !== void 0 && (s.value = L, n("update:modelValue", L), n("strength", m.value));
    }, v = (L) => {
      n("blur", L), u.value = !0;
    }, h = () => {
      d.value = !d.value;
    };
    return (L, P) => (i(), c("div", Na, [
      F(o(oe), {
        type: d.value ? "text" : "password",
        "model-value": s.value,
        size: t.size,
        variant: t.variant,
        label: t.label,
        placeholder: t.placeholder,
        description: t.description,
        error: b.value,
        disabled: t.disabled,
        readonly: t.readonly,
        required: t.required,
        clearable: t.clearable,
        autocomplete: t.autocomplete,
        "suffix-icon": d.value ? "eye-off" : "eye",
        "onUpdate:modelValue": S,
        onBlur: v,
        onSuffixClick: h
      }, null, 8, ["type", "model-value", "size", "variant", "label", "placeholder", "description", "error", "disabled", "readonly", "required", "clearable", "autocomplete", "suffix-icon"]),
      t.showStrength && s.value ? (i(), c("div", ba, [
        T("div", ya, [
          T("div", {
            class: l(["password-strength-fill", I.value]),
            style: V({ width: `${R.value}%` })
          }, null, 6)
        ]),
        T("div", {
          class: l(["password-strength-text", I.value])
        }, f(p.value), 3)
      ])) : E("", !0),
      u.value ? (i(), c("div", Ba, [
        T("div", {
          class: l(["requirement", { fulfilled: A.value }])
        }, [
          F(o(U), {
            name: A.value ? "check" : "x"
          }, null, 8, ["name"]),
          K(" At least " + f(t.minLength) + " characters ", 1)
        ], 2),
        t.requireUppercase ? (i(), c("div", {
          key: 0,
          class: l(["requirement", { fulfilled: _.value }])
        }, [
          F(o(U), {
            name: _.value ? "check" : "x"
          }, null, 8, ["name"]),
          P[0] || (P[0] = K(" One uppercase letter ", -1))
        ], 2)) : E("", !0),
        t.requireLowercase ? (i(), c("div", {
          key: 1,
          class: l(["requirement", { fulfilled: D.value }])
        }, [
          F(o(U), {
            name: D.value ? "check" : "x"
          }, null, 8, ["name"]),
          P[1] || (P[1] = K(" One lowercase letter ", -1))
        ], 2)) : E("", !0),
        t.requireNumbers ? (i(), c("div", {
          key: 2,
          class: l(["requirement", { fulfilled: C.value }])
        }, [
          F(o(U), {
            name: C.value ? "check" : "x"
          }, null, 8, ["name"]),
          P[2] || (P[2] = K(" One number ", -1))
        ], 2)) : E("", !0),
        t.requireSpecial ? (i(), c("div", {
          key: 3,
          class: l(["requirement", { fulfilled: O.value }])
        }, [
          F(o(U), {
            name: O.value ? "check" : "x"
          }, null, 8, ["name"]),
          P[3] || (P[3] = K(" One special character ", -1))
        ], 2)) : E("", !0)
      ])) : E("", !0)
    ]));
  }
}), Ee = (t, r) => {
  const a = t.__vccOpts || t;
  for (const [s, n] of r)
    a[s] = n;
  return a;
}, Vo = /* @__PURE__ */ Ee(ka, [["__scopeId", "data-v-a87e6a32"]]), Ha = { class: "number-input" }, Pa = { class: "number-input-wrapper" }, Ua = {
  key: 0,
  class: "number-input-prefix"
}, Ma = { class: "number-input-container" }, Fa = {
  key: 0,
  class: "number-input-controls"
}, Wa = ["disabled"], Ga = ["disabled"], Xa = {
  key: 1,
  class: "number-input-suffix"
}, Ka = /* @__PURE__ */ B({
  __name: "InputNumber",
  props: /* @__PURE__ */ $({
    modelValue: {},
    size: {},
    variant: {},
    label: {},
    placeholder: {},
    description: {},
    error: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    clearable: { type: Boolean },
    min: {},
    max: {},
    step: { default: 1 },
    controls: { type: Boolean, default: !0 },
    precision: { default: 0 },
    locale: { default: "en-US" },
    prefix: {},
    suffix: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["update:modelValue", "blur", "focus", "increment", "decrement"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const a = t, s = Z(t, "modelValue"), n = r, d = H(!1), u = H(), m = H(s.value ?? null);
    re(() => a.modelValue, (h) => {
      h !== m.value && (m.value = h ?? null);
    });
    const I = w(() => {
      var h;
      return !d.value && m.value !== null ? a.locale ? m.value.toLocaleString(a.locale, {
        minimumFractionDigits: a.precision,
        maximumFractionDigits: a.precision
      }) : m.value.toFixed(a.precision) : ((h = m.value) == null ? void 0 : h.toString()) || "";
    }), p = (h) => {
      const L = parseFloat(h);
      return !isNaN(L) && isFinite(L);
    }, R = (h) => a.min !== void 0 && h < a.min ? a.min : a.max !== void 0 && h > a.max ? a.max : h, A = (h) => {
      const L = Math.pow(10, a.precision);
      return Math.round(h * L) / L;
    }, _ = (h) => {
      if (!h) {
        m.value = null, s.value = null;
        return;
      }
      if (p(h)) {
        let L = parseFloat(h);
        L = R(L), L = A(L), m.value = L, s.value = L;
      }
    }, D = (h) => {
      d.value = !0, n("focus", h), ke(() => {
        u.value && u.value.select();
      });
    }, C = (h) => {
      if (d.value = !1, n("blur", h), m.value !== null) {
        const L = A(R(m.value));
        m.value = L, s.value = L;
      }
    }, O = (h) => {
      if (!(a.disabled || a.readonly))
        switch (h.key) {
          case "ArrowUp":
            h.preventDefault(), N();
            break;
          case "ArrowDown":
            h.preventDefault(), b();
            break;
          case "Enter":
            h.preventDefault(), C(h);
            break;
        }
    }, N = () => {
      if (a.disabled || a.readonly) return;
      let L = (m.value ?? 0) + a.step;
      L = R(L), L = A(L), m.value = L, s.value = L, n("increment", L);
    }, b = () => {
      if (a.disabled || a.readonly) return;
      let L = (m.value ?? 0) - a.step;
      L = R(L), L = A(L), m.value = L, s.value = L, n("decrement", L);
    }, S = w(() => !a.prefix && !a.controls ? "hash" : void 0), v = w(() => (!a.suffix && !a.controls, void 0));
    return (h, L) => (i(), c("div", Ha, [
      T("div", Pa, [
        t.prefix ? (i(), c("div", Ua, f(t.prefix), 1)) : E("", !0),
        T("div", Ma, [
          F(o(oe), {
            type: "text",
            "model-value": I.value,
            size: t.size,
            variant: t.variant,
            label: t.label,
            placeholder: t.placeholder,
            description: t.description,
            error: t.error,
            disabled: t.disabled,
            readonly: t.readonly,
            required: t.required,
            clearable: t.clearable,
            "prefix-icon": S.value,
            "suffix-icon": v.value,
            "onUpdate:modelValue": _,
            onBlur: C,
            onFocus: D,
            onKeydown: O
          }, null, 8, ["model-value", "size", "variant", "label", "placeholder", "description", "error", "disabled", "readonly", "required", "clearable", "prefix-icon", "suffix-icon"]),
          t.controls ? (i(), c("div", Fa, [
            T("button", {
              type: "button",
              class: "number-input-control number-input-control--up",
              disabled: t.disabled || t.readonly || t.max !== void 0 && m.value !== null && m.value >= t.max,
              onClick: N
            }, [
              F(o(U), { name: "chevron-up" })
            ], 8, Wa),
            T("button", {
              type: "button",
              class: "number-input-control number-input-control--down",
              disabled: t.disabled || t.readonly || t.min !== void 0 && m.value !== null && m.value <= t.min,
              onClick: b
            }, [
              F(o(U), { name: "chevron-down" })
            ], 8, Ga)
          ])) : E("", !0)
        ]),
        t.suffix ? (i(), c("div", Xa, f(t.suffix), 1)) : E("", !0)
      ])
    ]));
  }
}), xo = /* @__PURE__ */ Ee(Ka, [["__scopeId", "data-v-0466d90b"]]), $a = { class: "phone-input" }, Va = { class: "phone-input-wrapper" }, xa = {
  key: 0,
  class: "phone-input-country"
}, Ya = ["disabled", "readonly"], za = ["value"], qa = { class: "phone-input-container" }, Qa = /* @__PURE__ */ B({
  __name: "InputPhone",
  props: /* @__PURE__ */ $({
    modelValue: {},
    size: {},
    variant: {},
    label: {},
    placeholder: { default: "Phone number" },
    description: {},
    error: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    clearable: { type: Boolean, default: !0 },
    defaultCountry: { default: "US" },
    showCountrySelector: { type: Boolean, default: !0 },
    autoFormat: { type: Boolean, default: !0 },
    international: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["update:modelValue", "blur", "validity", "countryChange"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const a = t, s = Z(t, "modelValue"), n = r, d = [
      { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸", format: "(XXX) XXX-XXXX" },
      { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧", format: "XXXX XXXXXX" },
      { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦", format: "(XXX) XXX-XXXX" },
      { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺", format: "XXXX XXX XXX" },
      { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪", format: "XXX XXXXXXX" },
      { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷", format: "XX XX XX XX XX" },
      { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹", format: "XXX XXXXXXX" },
      { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸", format: "XXX XXX XXX" },
      { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱", format: "XX XXX XXXX" },
      { code: "BE", name: "Belgium", dialCode: "+32", flag: "🇧🇪", format: "XXX XX XX XX" },
      { code: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭", format: "XXX XXX XX XX" },
      { code: "AT", name: "Austria", dialCode: "+43", flag: "🇦🇹", format: "XXX XXXXXXX" },
      { code: "SE", name: "Sweden", dialCode: "+46", flag: "🇸🇪", format: "XXX XXX XXXX" },
      { code: "NO", name: "Norway", dialCode: "+47", flag: "🇳🇴", format: "XXXX XX XXX" },
      { code: "DK", name: "Denmark", dialCode: "+45", flag: "🇩🇰", format: "XX XX XX XX" },
      { code: "FI", name: "Finland", dialCode: "+358", flag: "🇫🇮", format: "XX XXX XXXX" },
      { code: "PL", name: "Poland", dialCode: "+48", flag: "🇵🇱", format: "XXX XXX XXX" },
      { code: "CZ", name: "Czech Republic", dialCode: "+420", flag: "🇨🇿", format: "XXX XXX XXX" },
      { code: "HU", name: "Hungary", dialCode: "+36", flag: "🇭🇺", format: "XXX XXX XXX" },
      { code: "GR", name: "Greece", dialCode: "+30", flag: "🇬🇷", format: "XXX XXX XXXX" },
      { code: "PT", name: "Portugal", dialCode: "+351", flag: "🇵🇹", format: "XXX XXX XXX" },
      { code: "IE", name: "Ireland", dialCode: "+353", flag: "🇮🇪", format: "XXX XXX XXXX" },
      { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿", format: "XXX XXX XXXX" },
      { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬", format: "XXXX XXXX" },
      { code: "HK", name: "Hong Kong", dialCode: "+852", flag: "🇭🇰", format: "XXXX XXXX" },
      { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵", format: "XX XXXX XXXX" },
      { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷", format: "XX XXXX XXXX" },
      { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳", format: "XXX XXXX XXXX" },
      { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳", format: "XXXXXX XXXXX" },
      { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷", format: "XX XXXXX XXXX" },
      { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽", format: "XX XXXX XXXX" },
      { code: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷", format: "XX XXXX XXXX" },
      { code: "RU", name: "Russia", dialCode: "+7", flag: "🇷🇺", format: "XXX XXX XX XX" },
      { code: "TR", name: "Turkey", dialCode: "+90", flag: "🇹🇷", format: "XXX XXX XXXX" },
      { code: "IL", name: "Israel", dialCode: "+972", flag: "🇮🇱", format: "XX XXX XXXX" },
      { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦", format: "XX XXX XXXX" },
      { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦", format: "XX XXX XXXX" },
      { code: "EG", name: "Egypt", dialCode: "+20", flag: "🇪🇬", format: "XX XXXX XXXX" },
      { code: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬", format: "XX XXX XXXX" },
      { code: "KE", name: "Kenya", dialCode: "+254", flag: "🇰🇪", format: "XX XXX XXXXXX" }
    ], u = H(d.find((v) => v.code === a.defaultCountry) || d[0]), m = H("");
    re(() => a.modelValue, (v) => {
      v !== m.value && (m.value = v || "");
    }), a.modelValue && (m.value = a.modelValue);
    const I = (v, h) => {
      if (!a.autoFormat) return v;
      const L = v.replace(/\D/g, "");
      let P = "", M = 0;
      for (let Y = 0; Y < h.format.length && M < L.length; Y++)
        h.format[Y] === "X" ? (P += L[M], M++) : P += h.format[Y];
      return P;
    }, p = (v) => v.replace(/\D/g, ""), R = (v, h) => {
      const L = p(v);
      return L.length >= 10 && L.length <= 15;
    }, A = w(
      () => d.find((v) => v.code === u.value.code) || d[0]
    ), _ = w(
      () => I(m.value, A.value)
    ), D = w(() => {
      if (a.error) return a.error;
      if (m.value && !R(m.value, A.value))
        return "Please enter a valid phone number";
    }), C = w(
      () => a.international ? "tel-country-code" : "tel-national"
    ), O = w(() => "phone"), N = (v) => {
      if (v) {
        if (m.value = v, a.international && a.showCountrySelector) {
          const h = `${A.value.dialCode} ${p(v)}`;
          s.value = h;
        } else
          s.value = v;
        n("update:modelValue", s.value || ""), n("validity", R(v, A.value));
      }
    }, b = (v) => {
      n("blur", v), a.autoFormat && (m.value = I(m.value, A.value), N(m.value)), n("validity", R(m.value, A.value));
    }, S = () => {
      const v = A.value;
      n("countryChange", v), m.value && a.autoFormat && (m.value = I(m.value, v), N(m.value));
    };
    if (a.modelValue && a.international) {
      const v = a.modelValue.match(/^\+(\d+)/);
      if (v) {
        const h = `+${v[1]}`, L = d.find((P) => P.dialCode === h);
        L && (u.value = L, m.value = a.modelValue.replace(h, "").trim());
      }
    }
    return (v, h) => (i(), c("div", $a, [
      T("div", Va, [
        t.showCountrySelector ? (i(), c("div", xa, [
          we(T("select", {
            "onUpdate:modelValue": h[0] || (h[0] = (L) => u.value = L),
            disabled: t.disabled,
            readonly: t.readonly,
            class: "phone-input-country-select",
            onChange: S
          }, [
            (i(), c(k, null, G(d, (L) => T("option", {
              key: L.code,
              value: L.code
            }, f(L.flag) + " " + f(L.dialCode), 9, za)), 64))
          ], 40, Ya), [
            [Rt, u.value]
          ])
        ])) : E("", !0),
        T("div", qa, [
          F(o(oe), {
            type: "tel",
            "model-value": _.value,
            size: t.size,
            variant: t.variant,
            label: t.label,
            placeholder: t.placeholder,
            description: t.description,
            error: D.value,
            disabled: t.disabled,
            readonly: t.readonly,
            required: t.required,
            clearable: t.clearable,
            "prefix-icon": O.value,
            autocomplete: C.value,
            "onUpdate:modelValue": N,
            onBlur: b
          }, null, 8, ["model-value", "size", "variant", "label", "placeholder", "description", "error", "disabled", "readonly", "required", "clearable", "prefix-icon", "autocomplete"])
        ])
      ])
    ]));
  }
}), Yo = /* @__PURE__ */ Ee(Qa, [["__scopeId", "data-v-5872d001"]]), ja = { class: "url-input" }, Za = {
  key: 0,
  class: "url-preview"
}, Ja = { class: "url-preview-header" }, er = { class: "url-preview-content" }, tr = { class: "url-preview-domain" }, ar = { class: "url-preview-path" }, rr = ["href"], or = /* @__PURE__ */ B({
  __name: "InputUrl",
  props: /* @__PURE__ */ $({
    modelValue: {},
    size: {},
    variant: {},
    label: {},
    placeholder: { default: "https://example.com" },
    description: {},
    error: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    clearable: { type: Boolean, default: !0 },
    autocomplete: { default: "url" },
    validate: { type: Boolean, default: !0 },
    allowedProtocols: { default: () => ["http:", "https:", "ftp:", "mailto:", "tel:"] },
    autoAddProtocol: { type: Boolean, default: !0 },
    showPreview: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["update:modelValue", "blur", "validity"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const a = t, s = Z(t, "modelValue"), n = r, d = w(() => {
      if (!a.validate || !s.value) return !0;
      try {
        const C = new URL(s.value);
        return a.allowedProtocols.includes(C.protocol);
      } catch {
        return !1;
      }
    }), u = w(() => {
      if (!s.value) return null;
      try {
        return new URL(s.value);
      } catch {
        return null;
      }
    }), m = w(() => u.value ? `${u.value.protocol}//${u.value.host}` : ""), I = w(() => u.value ? u.value.pathname + u.value.search + u.value.hash || "/" : ""), p = w(() => {
      if (!s.value) return "";
      let C = s.value.trim();
      return a.autoAddProtocol && !C.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//) && (C = `https://${C}`), C;
    }), R = w(() => {
      if (!a.validate) return a.error;
      if (a.error)
        return typeof a.error == "string" ? a.error : a.error.join(", ");
      if (s.value && !d.value)
        return "Please enter a valid URL";
    }), A = (C) => {
      C !== void 0 && (s.value = C, n("update:modelValue", C), a.validate && n("validity", d.value));
    }, _ = (C) => {
      if (n("blur", C), a.autoAddProtocol && s.value) {
        let O = s.value.trim();
        O.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//) || (O = `https://${O}`, s.value = O, n("update:modelValue", O));
      }
      a.validate && n("validity", d.value);
    }, D = w(() => "link");
    return (C, O) => (i(), c("div", ja, [
      F(o(oe), {
        type: "url",
        "model-value": s.value,
        size: t.size,
        variant: t.variant,
        label: t.label,
        placeholder: t.placeholder,
        description: t.description,
        error: R.value,
        disabled: t.disabled,
        readonly: t.readonly,
        required: t.required,
        clearable: t.clearable,
        autocomplete: t.autocomplete,
        "prefix-icon": D.value,
        "onUpdate:modelValue": A,
        onBlur: _
      }, null, 8, ["model-value", "size", "variant", "label", "placeholder", "description", "error", "disabled", "readonly", "required", "clearable", "autocomplete", "prefix-icon"]),
      t.showPreview && u.value ? (i(), c("div", Za, [
        T("div", Ja, [
          F(o(U), { name: "link" }),
          O[0] || (O[0] = T("span", null, "Preview", -1))
        ]),
        T("div", er, [
          T("div", tr, f(m.value), 1),
          T("div", ar, f(I.value), 1),
          d.value ? (i(), c("a", {
            key: 0,
            href: p.value,
            target: "_blank",
            rel: "noopener noreferrer",
            class: "url-preview-link"
          }, [
            F(o(U), { name: "external-link" }),
            O[1] || (O[1] = K(" Open in new tab ", -1))
          ], 8, rr)) : E("", !0)
        ])
      ])) : E("", !0)
    ]));
  }
}), zo = /* @__PURE__ */ Ee(or, [["__scopeId", "data-v-79655e0c"]]), nr = ["disabled", "required", "indeterminate"], ir = { class: "checkbox-checkmark" }, lr = {
  key: 0,
  class: "checkbox-ripple"
}, sr = { class: "checkbox-content" }, cr = {
  key: 0,
  class: "checkbox-text"
}, ur = {
  key: 1,
  class: "checkbox-required"
}, dr = {
  key: 0,
  class: "checkbox-description"
}, Ir = {
  key: 1,
  class: "checkbox-errors"
}, qo = /* @__PURE__ */ B({
  __name: "Checkbox",
  props: /* @__PURE__ */ $({
    modelValue: { type: [Boolean, Array] },
    value: { type: [String, Number, Boolean] },
    size: { default: "medium" },
    label: {},
    description: {},
    error: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    indeterminate: { type: Boolean },
    color: { default: "primary" },
    ripple: { type: Boolean, default: !0 },
    class: {}
  }, {
    modelValue: { type: [Boolean, Array] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["update:modelValue", "change", "focus", "blur"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const a = t, s = Z(t, "modelValue"), n = r, d = H(), u = H(!1), m = w(() => Array.isArray(s.value) ? s.value.includes(String(a.value)) : !!s.value), I = w({
      get: () => Array.isArray(s.value) ? s.value.includes(String(a.value)) : s.value || !1,
      set: (O) => {
        if (Array.isArray(s.value)) {
          const N = String(a.value), b = [...s.value];
          if (O)
            b.includes(N) || b.push(N);
          else {
            const S = b.indexOf(N);
            S > -1 && b.splice(S, 1);
          }
          s.value = b, n("update:modelValue", b), n("change", b);
        } else
          s.value = O, n("update:modelValue", O), n("change", O);
      }
    }), p = w(() => [
      "checkbox-wrapper",
      `checkbox-wrapper--${a.size}`,
      `checkbox-wrapper--${a.color}`,
      {
        "checkbox-wrapper--disabled": a.disabled,
        "checkbox-wrapper--error": a.error,
        "checkbox-wrapper--focused": u.value,
        "checkbox-wrapper--indeterminate": a.indeterminate
      },
      a.class
    ]), R = w(() => [
      "checkbox-label",
      `checkbox-label--${a.size}`,
      {
        "checkbox-label--disabled": a.disabled
      }
    ]), A = w(() => [
      "checkbox-control",
      `checkbox-control--${a.size}`,
      `checkbox-control--${a.color}`,
      {
        "checkbox-control--checked": m.value,
        "checkbox-control--indeterminate": a.indeterminate,
        "checkbox-control--disabled": a.disabled,
        "checkbox-control--focused": u.value
      }
    ]), _ = (O) => {
      ke(() => {
        n("change", I.value);
      });
    }, D = (O) => {
      u.value = !0, n("focus", O);
    }, C = (O) => {
      u.value = !1, n("blur", O);
    };
    return re(() => a.indeterminate, (O) => {
      d.value && (d.value.indeterminate = O);
    }, { immediate: !0 }), (O, N) => (i(), c("div", {
      class: l(["checkbox-wrapper", p.value])
    }, [
      T("label", {
        class: l(["checkbox-label", R.value])
      }, [
        we(T("input", {
          ref_key: "inputRef",
          ref: d,
          "onUpdate:modelValue": N[0] || (N[0] = (b) => I.value = b),
          type: "checkbox",
          disabled: t.disabled,
          required: t.required,
          indeterminate: t.indeterminate,
          class: l(["checkbox-input", { "checkbox-input--indeterminate": t.indeterminate }]),
          onChange: _,
          onFocus: D,
          onBlur: C
        }, null, 42, nr), [
          [rt, I.value]
        ]),
        T("div", {
          class: l(["checkbox-control", A.value])
        }, [
          T("div", ir, [
            t.indeterminate ? (i(), g(o(U), {
              key: 0,
              name: "minus",
              class: "checkbox-icon checkbox-icon--indeterminate"
            })) : m.value ? (i(), g(o(U), {
              key: 1,
              name: "check",
              class: "checkbox-icon checkbox-icon--checked"
            })) : E("", !0)
          ]),
          t.ripple && !t.disabled ? (i(), c("div", lr)) : E("", !0)
        ], 2),
        T("div", sr, [
          t.label ? (i(), c("span", cr, f(t.label), 1)) : E("", !0),
          t.required ? (i(), c("span", ur, "*")) : E("", !0),
          y(O.$slots, "default")
        ])
      ], 2),
      t.description ? (i(), c("div", dr, f(t.description), 1)) : E("", !0),
      t.error && t.error.length ? (i(), c("div", Ir, [
        (i(!0), c(k, null, G(Array.isArray(t.error) ? t.error : [t.error], (b) => (i(), c("div", {
          key: b,
          class: "checkbox-error"
        }, f(b), 1))), 128))
      ])) : E("", !0)
    ], 2));
  }
}), mr = ["value", "disabled", "required", "name"], Er = {
  key: 0,
  class: "radio-ripple"
}, Rr = { class: "radio-content" }, Ar = {
  key: 0,
  class: "radio-text"
}, Tr = {
  key: 1,
  class: "radio-required"
}, pr = {
  key: 0,
  class: "radio-description"
}, _r = {
  key: 1,
  class: "radio-errors"
}, Or = /* @__PURE__ */ B({
  __name: "Radio",
  props: /* @__PURE__ */ $({
    modelValue: { type: [String, Number, Boolean] },
    value: { type: [String, Number, Boolean] },
    size: { default: "medium" },
    label: {},
    description: {},
    error: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    color: { default: "primary" },
    ripple: { type: Boolean, default: !0 },
    class: {}
  }, {
    modelValue: { type: [String, Number, Boolean] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["update:modelValue", "change", "focus", "blur"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const a = t, s = Z(t, "modelValue"), n = r, d = H(), u = H(!1), m = Fe("radio"), I = w(() => s.value === a.value), p = w({
      get: () => s.value,
      set: (N) => {
        s.value = N, n("update:modelValue", N), n("change", N);
      }
    }), R = w(() => [
      "radio-wrapper",
      `radio-wrapper--${a.size}`,
      `radio-wrapper--${a.color}`,
      {
        "radio-wrapper--disabled": a.disabled,
        "radio-wrapper--error": a.error,
        "radio-wrapper--focused": u.value,
        "radio-wrapper--checked": I.value
      },
      a.class
    ]), A = w(() => [
      "radio-label",
      `radio-label--${a.size}`,
      {
        "radio-label--disabled": a.disabled
      }
    ]), _ = w(() => [
      "radio-control",
      `radio-control--${a.size}`,
      `radio-control--${a.color}`,
      {
        "radio-control--checked": I.value,
        "radio-control--disabled": a.disabled,
        "radio-control--focused": u.value
      }
    ]), D = (N) => {
      const b = N.target;
      p.value = b.value;
    }, C = (N) => {
      u.value = !0, n("focus", N);
    }, O = (N) => {
      u.value = !1, n("blur", N);
    };
    return (N, b) => (i(), c("div", {
      class: l(["radio-wrapper", R.value])
    }, [
      T("label", {
        class: l(["radio-label", A.value])
      }, [
        we(T("input", {
          ref_key: "inputRef",
          ref: d,
          "onUpdate:modelValue": b[0] || (b[0] = (S) => p.value = S),
          type: "radio",
          value: t.value,
          disabled: t.disabled,
          required: t.required,
          name: o(m),
          class: "radio-input",
          onChange: D,
          onFocus: C,
          onBlur: O
        }, null, 40, mr), [
          [At, p.value]
        ]),
        T("div", {
          class: l(["radio-control", _.value])
        }, [
          b[1] || (b[1] = T("div", { class: "radio-dot" }, null, -1)),
          t.ripple && !t.disabled ? (i(), c("div", Er)) : E("", !0)
        ], 2),
        T("div", Rr, [
          t.label ? (i(), c("span", Ar, f(t.label), 1)) : E("", !0),
          t.required ? (i(), c("span", Tr, "*")) : E("", !0),
          y(N.$slots, "default")
        ])
      ], 2),
      t.description ? (i(), c("div", pr, f(t.description), 1)) : E("", !0),
      t.error && t.error.length ? (i(), c("div", _r, [
        (i(!0), c(k, null, G(Array.isArray(t.error) ? t.error : [t.error], (S) => (i(), c("div", {
          key: S,
          class: "radio-error"
        }, f(S), 1))), 128))
      ])) : E("", !0)
    ], 2));
  }
}), wr = {
  key: 0,
  class: "radio-group-label"
}, fr = {
  key: 0,
  class: "radio-group-required"
}, Lr = {
  key: 1,
  class: "radio-group-description"
}, hr = {
  key: 2,
  class: "radio-group-errors"
}, Cr = /* @__PURE__ */ B({
  __name: "RadioGroup",
  props: /* @__PURE__ */ $({
    modelValue: { type: [String, Number, Boolean] },
    options: {},
    size: { default: "medium" },
    label: {},
    description: {},
    error: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    color: { default: "primary" },
    direction: { default: "vertical" },
    ripple: { type: Boolean, default: !0 },
    class: {}
  }, {
    modelValue: { type: [String, Number, Boolean] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const r = t, a = Z(t, "modelValue"), s = Fe("radio-group"), n = w(() => r.options.map((m) => typeof m == "object" ? m : {
      value: m,
      label: String(m),
      disabled: !1
    })), d = w(() => [
      "radio-group",
      `radio-group--${r.size}`,
      `radio-group--${r.color}`,
      `radio-group--${r.direction}`,
      {
        "radio-group--disabled": r.disabled,
        "radio-group--error": r.error
      },
      r.class
    ]), u = w(() => [
      "radio-group-options",
      `radio-group-options--${r.direction}`
    ]);
    return (m, I) => (i(), c("div", {
      class: l(["radio-group", d.value])
    }, [
      t.label ? (i(), c("div", wr, [
        K(f(t.label) + " ", 1),
        t.required ? (i(), c("span", fr, "*")) : E("", !0)
      ])) : E("", !0),
      t.description ? (i(), c("div", Lr, f(t.description), 1)) : E("", !0),
      T("div", {
        class: l(["radio-group-options", u.value])
      }, [
        (i(!0), c(k, null, G(n.value, (p) => (i(), g(Or, {
          key: String(typeof p == "object" ? p.value : p),
          "model-value": a.value,
          value: typeof p == "object" ? p.value : p,
          label: typeof p == "object" ? p.label : String(p),
          description: typeof p == "object" ? p.description : void 0,
          size: t.size,
          color: t.color,
          disabled: t.disabled || typeof p == "object" && p.disabled,
          required: t.required,
          ripple: t.ripple,
          error: t.error,
          name: o(s)
        }, null, 8, ["model-value", "value", "label", "description", "size", "color", "disabled", "required", "ripple", "error", "name"]))), 128))
      ], 2),
      t.error && t.error.length ? (i(), c("div", hr, [
        (i(!0), c(k, null, G(Array.isArray(t.error) ? t.error : [t.error], (p) => (i(), c("div", {
          key: p,
          class: "radio-group-error"
        }, f(p), 1))), 128))
      ])) : E("", !0)
    ], 2));
  }
}), Qo = /* @__PURE__ */ Ee(Cr, [["__scopeId", "data-v-52cdb32d"]]), Sr = ["disabled", "required"], Dr = {
  key: 0,
  class: "toggle-thumb-label"
}, vr = {
  key: 0,
  class: "toggle-ripple"
}, gr = { class: "toggle-content" }, Nr = {
  key: 0,
  class: "toggle-text"
}, br = {
  key: 1,
  class: "toggle-required"
}, yr = {
  key: 0,
  class: "toggle-description"
}, Br = {
  key: 1,
  class: "toggle-errors"
}, jo = /* @__PURE__ */ B({
  __name: "Toggle",
  props: /* @__PURE__ */ $({
    modelValue: { type: Boolean },
    size: { default: "medium" },
    label: {},
    description: {},
    error: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    color: { default: "primary" },
    ripple: { type: Boolean, default: !0 },
    labelOn: { default: "ON" },
    labelOff: { default: "OFF" },
    showLabels: { type: Boolean, default: !1 },
    class: {}
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["update:modelValue", "change", "focus", "blur"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const a = t, s = Z(t, "modelValue"), n = r, d = H(), u = H(!1), m = w({
      get: () => !!s.value,
      set: (N) => {
        s.value = N, n("update:modelValue", N), n("change", N);
      }
    }), I = w(() => [
      "toggle-wrapper",
      `toggle-wrapper--${a.size}`,
      `toggle-wrapper--${a.color}`,
      {
        "toggle-wrapper--disabled": a.disabled,
        "toggle-wrapper--error": a.error,
        "toggle-wrapper--focused": u.value,
        "toggle-wrapper--checked": m.value
      },
      a.class
    ]), p = w(() => [
      "toggle-label",
      `toggle-label--${a.size}`,
      {
        "toggle-label--disabled": a.disabled
      }
    ]), R = w(() => [
      "toggle-control",
      `toggle-control--${a.size}`,
      {
        "toggle-control--checked": m.value,
        "toggle-control--disabled": a.disabled,
        "toggle-control--focused": u.value
      }
    ]), A = w(() => [
      "toggle-track",
      `toggle-track--${a.size}`,
      `toggle-track--${a.color}`,
      {
        "toggle-track--checked": m.value,
        "toggle-track--disabled": a.disabled
      }
    ]), _ = w(() => [
      "toggle-thumb",
      `toggle-thumb--${a.size}`,
      {
        "toggle-thumb--checked": m.value,
        "toggle-thumb--disabled": a.disabled
      }
    ]), D = (N) => {
      const b = N.target;
      m.value = b.checked;
    }, C = (N) => {
      u.value = !0, n("focus", N);
    }, O = (N) => {
      u.value = !1, n("blur", N);
    };
    return (N, b) => (i(), c("div", {
      class: l(["toggle-wrapper", I.value])
    }, [
      T("label", {
        class: l(["toggle-label", p.value])
      }, [
        we(T("input", {
          ref_key: "inputRef",
          ref: d,
          "onUpdate:modelValue": b[0] || (b[0] = (S) => m.value = S),
          type: "checkbox",
          disabled: t.disabled,
          required: t.required,
          class: "toggle-input",
          onChange: D,
          onFocus: C,
          onBlur: O
        }, null, 40, Sr), [
          [rt, m.value]
        ]),
        T("div", {
          class: l(["toggle-control", R.value])
        }, [
          T("div", {
            class: l(["toggle-track", A.value])
          }, [
            T("div", {
              class: l(["toggle-thumb", _.value])
            }, [
              t.showLabels ? (i(), c("div", Dr, f(m.value ? t.labelOn : t.labelOff), 1)) : E("", !0)
            ], 2),
            t.ripple && !t.disabled ? (i(), c("div", vr)) : E("", !0)
          ], 2)
        ], 2),
        T("div", gr, [
          t.label ? (i(), c("span", Nr, f(t.label), 1)) : E("", !0),
          t.required ? (i(), c("span", br, "*")) : E("", !0),
          y(N.$slots, "default")
        ])
      ], 2),
      t.description ? (i(), c("div", yr, f(t.description), 1)) : E("", !0),
      t.error && t.error.length ? (i(), c("div", Br, [
        (i(!0), c(k, null, G(Array.isArray(t.error) ? t.error : [t.error], (S) => (i(), c("div", {
          key: S,
          class: "toggle-error"
        }, f(S), 1))), 128))
      ])) : E("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ B({
  __name: "TableRow",
  props: {
    clickable: { type: Boolean, default: !1 },
    selected: { type: Boolean, default: !1 },
    as: {},
    columns: {},
    level: {},
    expandable: { type: Boolean },
    expanded: { type: Boolean }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, s = Te("tableType", "table"), n = w(() => a.as ? a.as : s === "table" ? "tr" : "div"), d = r, { bemm: u } = W("table-row"), m = w(() => {
      const R = [u()];
      return a.clickable && R.push(u("", "clickable")), a.selected && R.push(u("", "selected")), n.value === "div" && R.push(u("", "div")), a.expandable && R.push(u("", "expandable")), a.expanded && R.push(u("", "expanded")), a.level && a.level > 0 && R.push(u("", `level-${a.level}`)), R;
    }), I = w(() => n.value === "div" && a.columns ? {
      display: "grid",
      gridTemplateColumns: a.columns
    } : {}), p = (R) => {
      a.clickable && d("click", R);
    };
    return (R, A) => (i(), g(q(n.value), {
      class: l(m.value),
      style: V(I.value),
      onClick: p
    }, {
      default: X(() => [
        y(R.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), Qe = /* @__PURE__ */ B({
  __name: "TableCell",
  props: {
    align: { default: "left" },
    nowrap: { type: Boolean, default: !1 },
    as: {},
    className: {}
  },
  setup(t) {
    const r = t, a = Te("tableType", "table"), s = w(() => r.as ? r.as : a === "table" ? "td" : "div"), { bemm: n } = W("table-cell"), d = w(() => {
      const u = [n()];
      return r.align !== "left" && u.push(n("", `align-${r.align}`)), r.nowrap && u.push(n("", "nowrap")), u;
    });
    return (u, m) => (i(), g(q(s.value), {
      class: l([d.value, r.className])
    }, {
      default: X(() => [
        y(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), kr = ["onClick"], Hr = ["onClick"], Pr = {
  key: 1,
  style: { width: "24px" }
}, Ur = ["onClick"], Mr = {
  key: 1,
  style: { width: "24px" }
}, Zo = /* @__PURE__ */ B({
  __name: "Table",
  props: {
    striped: { type: Boolean, default: !1 },
    hover: { type: Boolean, default: !0 },
    bordered: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 },
    as: { default: "table" },
    columns: {},
    data: {},
    rowKey: {},
    clickable: { type: Boolean, default: !1 },
    selectedKey: {},
    childrenKey: { default: "children" },
    expandedKeys: {},
    defaultExpandAll: { type: Boolean, default: !1 },
    expandable: { type: Boolean, default: !0 },
    indentSize: { default: 20 }
  },
  emits: ["row-click", "expand"],
  setup(t, { emit: r }) {
    const a = t, s = r;
    ye("tableType", a.as);
    const n = H(/* @__PURE__ */ new Set());
    at(() => {
      if (a.expandedKeys)
        n.value = new Set(
          (Array.isArray(a.expandedKeys), a.expandedKeys)
        );
      else if (a.defaultExpandAll && a.data) {
        const S = /* @__PURE__ */ new Set(), v = (h, L = "") => {
          h.forEach((P, M) => {
            var j;
            const Y = I(P, M);
            ((j = P[a.childrenKey]) == null ? void 0 : j.length) > 0 && (S.add(Y), v(P[a.childrenKey], `${L}${M}-`));
          });
        };
        v(a.data), n.value = S;
      }
    });
    const { bemm: d } = W("table"), u = w(() => {
      const S = [d()];
      return a.striped && S.push(d("", "striped")), a.hover && S.push(d("", "hover")), a.bordered && S.push(d("", "bordered")), a.compact && S.push(d("", "compact")), S;
    }), m = w(() => a.columns ? a.columns.map((S) => S.width || "1fr").join(" ") : ""), I = (S, v) => a.rowKey ? typeof a.rowKey == "function" ? a.rowKey(S, v) : String(S[a.rowKey]) : String(v), p = (S, v) => a.selectedKey === void 0 ? !1 : I(S, v) === String(a.selectedKey), R = (S, v) => {
      a.clickable && s("row-click", S, v);
    }, A = (S, v) => {
      const h = [];
      return a.clickable && h.push(d("row", "clickable")), p(S, v) && h.push(d("row", "selected")), h;
    }, _ = (S) => {
      const v = ["header-cell"];
      return S.align && S.align !== "left" && v.push(`align-${S.align}`), S.sortable && v.push("sortable"), v;
    }, D = (S) => {
      const v = [];
      return S.align && S.align !== "left" && v.push(`align-${S.align}`), v;
    }, C = (S, v) => {
      const h = I(S, v);
      return n.value.has(h);
    }, O = (S, v) => {
      const h = I(S, v), L = new Set(n.value);
      L.has(h) ? L.delete(h) : L.add(h), n.value = L, s("expand", !n.value.has(h), S);
    }, N = (S) => {
      var v;
      return a.childrenKey ? ((v = S[a.childrenKey]) == null ? void 0 : v.length) > 0 : !1;
    }, b = w(() => {
      var h;
      if (!a.data || !a.childrenKey || !a.expandable)
        return ((h = a.data) == null ? void 0 : h.map((L, P) => ({ item: L, index: P, level: 0 }))) || [];
      const S = [], v = (L, P = 0, M = "") => {
        L.forEach((Y, j) => {
          S.push({ item: Y, index: j, level: P, parentIndex: M }), N(Y) && C(Y, j) && v(Y[a.childrenKey], P + 1, `${M}${j}-`);
        });
      };
      return v(a.data), S;
    });
    return (S, v) => (i(), c("div", {
      class: l(o(d)("wrapper"))
    }, [
      (i(), g(q(a.as), {
        class: l(u.value)
      }, {
        default: X(() => [
          a.columns && a.data ? (i(), c(k, { key: 0 }, [
            a.as === "table" ? (i(), c("thead", {
              key: 0,
              class: l(o(d)("head"))
            }, [
              T("tr", null, [
                (i(!0), c(k, null, G(a.columns, (h) => (i(), c("th", {
                  key: h.key,
                  style: V({ width: h.width }),
                  class: l(_(h))
                }, f(h.label), 7))), 128))
              ])
            ], 2)) : (i(), c("div", {
              key: 1,
              class: l(o(d)("head"))
            }, [
              F(qe, { columns: m.value }, {
                default: X(() => [
                  (i(!0), c(k, null, G(a.columns, (h) => (i(), g(Qe, {
                    key: h.key,
                    align: h.align,
                    class: "header-cell"
                  }, {
                    default: X(() => [
                      K(f(h.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["align"]))), 128))
                ]),
                _: 1
              }, 8, ["columns"])
            ], 2)),
            a.as === "table" ? (i(), c("tbody", {
              key: 2,
              class: l(o(d)("body"))
            }, [
              (i(!0), c(k, null, G(b.value, ({ item: h, index: L, level: P }) => (i(), c("tr", {
                key: I(h, L),
                class: l(A(h, L)),
                onClick: (M) => R(h, L)
              }, [
                (i(!0), c(k, null, G(a.columns, (M, Y) => (i(), c("td", {
                  key: M.key,
                  class: l(D(M))
                }, [
                  Y === 0 && a.expandable ? (i(), c("div", {
                    key: 0,
                    style: V({ paddingLeft: `${P * a.indentSize}px`, display: "flex", alignItems: "center", gap: "8px" })
                  }, [
                    N(h) ? (i(), c("button", {
                      key: 0,
                      onClick: ce((j) => O(h, L), ["stop"]),
                      class: "expand-button",
                      type: "button"
                    }, [
                      F(o(U), {
                        name: C(h, L) ? "chevron-down" : "chevron-right"
                      }, null, 8, ["name"])
                    ], 8, Hr)) : (i(), c("span", Pr)),
                    M.render ? (i(), g(q(M.render(h[M.key], h, L, P)), { key: 2 })) : (i(), c(k, { key: 3 }, [
                      K(f(h[M.key]), 1)
                    ], 64))
                  ], 4)) : (i(), c(k, { key: 1 }, [
                    M.render ? (i(), g(q(M.render(h[M.key], h, L, P)), { key: 0 })) : (i(), c(k, { key: 1 }, [
                      K(f(h[M.key]), 1)
                    ], 64))
                  ], 64))
                ], 2))), 128))
              ], 10, kr))), 128))
            ], 2)) : (i(), c("div", {
              key: 3,
              class: l(o(d)("body"))
            }, [
              (i(!0), c(k, null, G(b.value, ({ item: h, index: L, level: P }) => (i(), g(qe, {
                key: I(h, L),
                columns: m.value,
                clickable: a.clickable,
                selected: p(h, L),
                level: P,
                expandable: a.expandable && N(h),
                expanded: C(h, L),
                onClick: (M) => R(h, L)
              }, {
                default: X(() => [
                  (i(!0), c(k, null, G(a.columns, (M, Y) => (i(), g(Qe, {
                    key: M.key,
                    align: M.align
                  }, {
                    default: X(() => [
                      Y === 0 && a.expandable ? (i(), c("div", {
                        key: 0,
                        style: V({ paddingLeft: `${P * a.indentSize}px`, display: "flex", alignItems: "center", gap: "8px" })
                      }, [
                        N(h) ? (i(), c("button", {
                          key: 0,
                          onClick: ce((j) => O(h, L), ["stop"]),
                          class: "expand-button",
                          type: "button"
                        }, [
                          F(o(U), {
                            name: C(h, L) ? "chevron-down" : "chevron-right"
                          }, null, 8, ["name"])
                        ], 8, Ur)) : (i(), c("span", Mr)),
                        M.render ? (i(), g(q(M.render(h[M.key], h, L, P)), { key: 2 })) : (i(), c(k, { key: 3 }, [
                          K(f(h[M.key]), 1)
                        ], 64))
                      ], 4)) : (i(), c(k, { key: 1 }, [
                        M.render ? (i(), g(q(M.render(h[M.key], h, L, P)), { key: 0 })) : (i(), c(k, { key: 1 }, [
                          K(f(h[M.key]), 1)
                        ], 64))
                      ], 64))
                    ]),
                    _: 2
                  }, 1032, ["align"]))), 128))
                ]),
                _: 2
              }, 1032, ["columns", "clickable", "selected", "level", "expandable", "expanded", "onClick"]))), 128))
            ], 2))
          ], 64)) : (i(), c(k, { key: 1 }, [
            S.$slots.header && a.as === "table" ? (i(), c("thead", {
              key: 0,
              class: l(o(d)("head"))
            }, [
              y(S.$slots, "header")
            ], 2)) : E("", !0),
            S.$slots.header && a.as === "div" ? (i(), c("div", {
              key: 1,
              class: l(o(d)("head"))
            }, [
              y(S.$slots, "header")
            ], 2)) : E("", !0),
            a.as === "table" ? (i(), c("tbody", {
              key: 2,
              class: l(o(d)("body"))
            }, [
              y(S.$slots, "default")
            ], 2)) : E("", !0),
            a.as === "div" ? (i(), c("div", {
              key: 3,
              class: l(o(d)("body"))
            }, [
              y(S.$slots, "default")
            ], 2)) : E("", !0),
            S.$slots.footer && a.as === "table" ? (i(), c("tfoot", {
              key: 4,
              class: l(o(d)("foot"))
            }, [
              y(S.$slots, "footer")
            ], 2)) : E("", !0),
            S.$slots.footer && a.as === "div" ? (i(), c("div", {
              key: 5,
              class: l(o(d)("foot"))
            }, [
              y(S.$slots, "footer")
            ], 2)) : E("", !0)
          ], 64))
        ]),
        _: 3
      }, 8, ["class"]))
    ], 2));
  }
}), Fr = ["data-variant"], Jo = /* @__PURE__ */ B({
  __name: "Section",
  props: {
    variant: { default: "default" },
    centered: { type: Boolean, default: !1 },
    noContainer: { type: Boolean, default: !1 },
    maxWidth: {},
    padding: {},
    fluid: { type: Boolean }
  },
  setup(t) {
    const r = t, { bemm: a } = W("section"), s = {
      maxWidth: r.maxWidth,
      padding: r.padding,
      fluid: r.fluid
    };
    return (n, d) => (i(), c("section", {
      class: l(o(a)("", ["", t.centered ? "centered" : ""])),
      "data-variant": t.variant
    }, [
      y(n.$slots, "before"),
      t.noContainer ? y(n.$slots, "default", { key: 1 }) : (i(), g(o(ct), ie({
        key: 0,
        class: o(a)("container")
      }, s), {
        default: X(() => [
          y(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ], 10, Fr));
  }
}), en = /* @__PURE__ */ B({
  __name: "PageHeader",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    const r = me(), { bemm: a } = W("page-header"), s = w(() => !!r.actions);
    return (n, d) => (i(), c("div", {
      class: l(o(a)())
    }, [
      T("div", {
        class: l(o(a)("content"))
      }, [
        T("div", {
          class: l(o(a)("left"))
        }, [
          T("h1", {
            class: l(o(a)("title"))
          }, f(t.title), 3),
          t.description ? (i(), c("p", {
            key: 0,
            class: l(o(a)("description"))
          }, f(t.description), 3)) : E("", !0)
        ], 2),
        s.value ? (i(), c("div", {
          key: 0,
          class: l(o(a)("actions"))
        }, [
          y(n.$slots, "actions")
        ], 2)) : E("", !0)
      ], 2)
    ], 2));
  }
}), Wr = ["href"], Gr = ["href", "target", "rel"], tn = /* @__PURE__ */ B({
  __name: "AppHeader",
  props: {
    logo: {},
    navItems: {},
    showThemeToggle: { type: Boolean, default: !0 },
    showSettings: { type: Boolean, default: !1 }
  },
  emits: ["settings-click"],
  setup(t) {
    const { bemm: r } = W("app-header");
    return (a, s) => (i(), c("header", {
      class: l(o(r)())
    }, [
      T("div", {
        class: l(o(r)("container"))
      }, [
        T("div", {
          class: l(o(r)("logo"))
        }, [
          y(a.$slots, "logo", {}, () => [
            t.logo ? (i(), c("a", {
              key: 0,
              href: t.logo.href || "#",
              class: l(o(r)("logo-link"))
            }, [
              t.logo.icon ? (i(), g(o(U), {
                key: 0,
                name: t.logo.icon,
                class: l(o(r)("logo-icon"))
              }, null, 8, ["name", "class"])) : E("", !0),
              t.logo.text ? (i(), c("span", {
                key: 1,
                class: l(o(r)("logo-text"))
              }, f(t.logo.text), 3)) : E("", !0)
            ], 10, Wr)) : E("", !0)
          ])
        ], 2),
        t.navItems && t.navItems.length ? (i(), c("nav", {
          key: 0,
          class: l(o(r)("nav"))
        }, [
          (i(!0), c(k, null, G(t.navItems, (n) => y(a.$slots, "nav-link", {
            key: n.path || n.href,
            item: n
          }, () => [
            T("a", {
              href: n.href || n.path || "#",
              class: l(o(r)("nav-link")),
              target: n.external ? "_blank" : void 0,
              rel: n.external ? "noopener noreferrer" : void 0
            }, [
              K(f(n.label) + " ", 1),
              n.external ? (i(), g(o(U), {
                key: 0,
                name: "open-in-new",
                class: l(o(r)("nav-link-icon"))
              }, null, 8, ["class"])) : E("", !0)
            ], 10, Gr)
          ])), 128))
        ], 2)) : E("", !0),
        T("div", {
          class: l(o(r)("actions"))
        }, [
          y(a.$slots, "actions", {}, () => [
            t.showThemeToggle ? (i(), g(ua, { key: 0 })) : E("", !0),
            t.showSettings ? (i(), g(o(te), {
              key: 1,
              variant: "outline",
              size: "small",
              icon: "settings",
              onClick: s[0] || (s[0] = (n) => a.$emit("settings-click"))
            })) : E("", !0)
          ]),
          y(a.$slots, "extra-actions")
        ], 2)
      ], 2)
    ], 2));
  }
}), Xr = ["title"], Kr = ["href", "title"], $r = ["src", "alt"], je = 768, an = /* @__PURE__ */ B({
  __name: "AppSidebar",
  props: {
    sections: { default: () => [] },
    userInfo: {},
    collapsed: { type: Boolean },
    collapsible: { type: Boolean, default: !0 }
  },
  emits: ["update:collapsed"],
  setup(t, { emit: r }) {
    const a = t, s = r, { bemm: n } = W("app-sidebar"), d = H(window.innerWidth), u = H(a.collapsed || localStorage.getItem("sidebar-folded") === "true"), m = w(() => d.value <= je), I = w(() => d.value <= je), p = w(() => a.collapsible && u.value), R = () => {
      d.value = window.innerWidth;
    }, A = () => {
      a.collapsible && (u.value = !u.value, localStorage.setItem("sidebar-folded", u.value.toString()), s("update:collapsed", u.value));
    };
    return re(() => a.collapsed, (_) => {
      _ !== void 0 && (u.value = _);
    }), le(() => {
      window.addEventListener("resize", R);
    }), Oe(() => {
      window.removeEventListener("resize", R);
    }), (_, D) => (i(), c(k, null, [
      T("aside", {
        class: l([
          o(n)(),
          p.value && o(n)("", "folded"),
          m.value && o(n)("", "overlay"),
          m.value && !p.value && o(n)("", "overlay-expanded")
        ])
      }, [
        t.collapsible && !I.value ? (i(), c("button", {
          key: 0,
          class: l(o(n)("toggle")),
          onClick: A,
          title: p.value ? "Expand sidebar" : "Collapse sidebar"
        }, [
          F(o(U), {
            name: p.value ? "chevron-right" : "chevron-left"
          }, null, 8, ["name"])
        ], 10, Xr)) : E("", !0),
        _.$slots.header ? (i(), c("div", {
          key: 1,
          class: l(o(n)("header"))
        }, [
          y(_.$slots, "header")
        ], 2)) : E("", !0),
        T("nav", {
          class: l(o(n)("nav"))
        }, [
          (i(!0), c(k, null, G(t.sections, (C) => (i(), c("div", {
            key: C.id,
            class: l(o(n)("section"))
          }, [
            C.title && !p.value ? (i(), c("h3", {
              key: 0,
              class: l(o(n)("section-title"))
            }, f(C.title), 3)) : E("", !0),
            T("div", {
              class: l(o(n)("nav-list"))
            }, [
              (i(!0), c(k, null, G(C.items, (O) => y(_.$slots, "nav-link", {
                key: O.path || O.href,
                item: O,
                isFolded: p.value
              }, () => [
                T("a", {
                  href: O.href || O.path || "#",
                  class: l(o(n)("nav-link")),
                  title: p.value ? O.label : void 0
                }, [
                  F(o(U), {
                    name: O.icon,
                    class: l(o(n)("nav-icon"))
                  }, null, 8, ["name", "class"]),
                  p.value ? E("", !0) : (i(), c("span", {
                    key: 0,
                    class: l(o(n)("nav-text"))
                  }, f(O.label), 3)),
                  O.badge && !p.value ? (i(), c("span", {
                    key: 1,
                    class: l(o(n)("nav-badge"))
                  }, f(O.badge), 3)) : E("", !0)
                ], 10, Kr)
              ])), 128))
            ], 2)
          ], 2))), 128))
        ], 2),
        t.userInfo || _.$slots.footer ? (i(), c("div", {
          key: 2,
          class: l(o(n)("footer"))
        }, [
          y(_.$slots, "footer", {}, () => [
            t.userInfo ? (i(), c("div", {
              key: 0,
              class: l(o(n)("user-profile", ["", p.value ? "folded" : ""]))
            }, [
              T("div", {
                class: l(o(n)("user-avatar"))
              }, [
                t.userInfo.avatar ? (i(), c("img", {
                  key: 1,
                  src: t.userInfo.avatar,
                  alt: t.userInfo.name || "User avatar",
                  class: l(o(n)("user-image"))
                }, null, 10, $r)) : (i(), g(o(U), {
                  key: 0,
                  name: "user",
                  class: l(o(n)("user-icon"))
                }, null, 8, ["class"]))
              ], 2),
              p.value ? E("", !0) : (i(), c("div", {
                key: 0,
                class: l(o(n)("user-info"))
              }, [
                t.userInfo.name ? (i(), c("span", {
                  key: 0,
                  class: l(o(n)("user-name"))
                }, f(t.userInfo.name), 3)) : E("", !0),
                t.userInfo.email ? (i(), c("span", {
                  key: 1,
                  class: l(o(n)("user-email"))
                }, f(t.userInfo.email), 3)) : E("", !0),
                t.userInfo.role ? (i(), c("span", {
                  key: 2,
                  class: l(o(n)("user-role"))
                }, f(t.userInfo.role), 3)) : E("", !0)
              ], 2)),
              y(_.$slots, "user-menu-trigger", { isFolded: p.value }, () => [
                p.value ? E("", !0) : (i(), g(o(U), {
                  key: 0,
                  name: "chevron-up",
                  class: l(o(n)("user-menu-arrow"))
                }, null, 8, ["class"]))
              ])
            ], 2)) : E("", !0)
          ])
        ], 2)) : E("", !0)
      ], 2),
      m.value && !p.value ? (i(), c("div", {
        key: 0,
        class: l(o(n)("overlay-backdrop")),
        onClick: A
      }, null, 2)) : E("", !0)
    ], 64));
  }
}), Vr = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left"
}, xr = /* @__PURE__ */ B({
  __name: "Tooltip",
  props: {
    position: { default: Vr.BOTTOM },
    delay: { default: 0.5 },
    color: { default: "foreground" }
  },
  setup(t) {
    const r = W("tooltip"), a = me(), s = t, n = H(!1);
    re(
      () => a,
      () => {
        a.default && (n.value = a.default.length > 50);
      },
      {
        immediate: !0
      }
    );
    const d = w(() => ({
      "--tooltip-delay": `${s.delay}s`,
      "--tooltip-color": `var(--color-${s.color}, var(--color-foreground))`,
      "--tooltip-text-color": `var(--color-${s.color}-text, var(--color-background))`,
      "--tooltip-font-size": n.value ? "1em" : "0.75em"
    })), u = w(() => r("", ["", s.position]));
    return (m, I) => (i(), c("div", {
      class: l(u.value),
      style: V(d.value)
    }, [
      T("div", {
        class: l(o(r)("text"))
      }, [
        y(m.$slots, "default")
      ], 2)
    ], 6));
  }
}), Yr = ["title"], zr = ["onClick", "title"], Ze = 768, qr = 1024, rn = /* @__PURE__ */ B({
  __name: "SettingsLayout",
  props: {
    sections: {},
    activeSection: {}
  },
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const a = r, { bemm: s } = W("settings-layout"), n = H(window.innerWidth), d = H(!1), u = w(() => n.value <= Ze), m = w(() => n.value <= qr && n.value > Ze), I = w(() => !u.value && (d.value || m.value)), p = () => {
      n.value = window.innerWidth;
    }, R = () => {
      d.value = !d.value;
    }, A = (_) => {
      a("navigate", _);
    };
    return le(() => {
      window.addEventListener("resize", p);
    }), Oe(() => {
      window.removeEventListener("resize", p);
    }), (_, D) => (i(), c("div", {
      class: l([o(s)(), I.value && o(s)("", "folded")])
    }, [
      T("nav", {
        class: l(o(s)("sidebar"))
      }, [
        u.value ? E("", !0) : (i(), c("button", {
          key: 0,
          class: l(o(s)("toggle")),
          onClick: R,
          title: I.value ? "Expand sidebar" : "Collapse sidebar"
        }, [
          F(o(U), {
            name: I.value ? "chevron-right" : "chevron-left"
          }, null, 8, ["name"])
        ], 10, Yr)),
        T("ul", {
          class: l(o(s)("nav"))
        }, [
          (i(!0), c(k, null, G(t.sections, (C, O) => (i(), c("li", {
            key: C.id,
            class: l(o(s)("nav-item")),
            style: V(`--i: ${O}`)
          }, [
            T("button", {
              class: l([
                o(s)("nav-button"),
                t.activeSection === C.id && o(s)("nav-button", "active")
              ]),
              onClick: (N) => A(C.id),
              title: I.value ? C.label : void 0
            }, [
              I.value ? (i(), g(o(xr), {
                key: 0,
                text: C.label,
                position: "right"
              }, {
                default: X(() => [
                  F(o(U), {
                    name: C.icon
                  }, null, 8, ["name"])
                ]),
                _: 2
              }, 1032, ["text"])) : (i(), g(o(U), {
                key: 1,
                name: C.icon
              }, null, 8, ["name"])),
              T("span", {
                class: l(o(s)("nav-label"))
              }, f(C.label), 3)
            ], 10, zr)
          ], 6))), 128))
        ], 2)
      ], 2),
      T("div", {
        class: l(o(s)("main"))
      }, [
        y(_.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ne = /* @__PURE__ */ B({
  __name: "BaseSection",
  props: {
    padding: { default: "var(--spacing)" },
    containerSize: { default: "large" },
    sectionColor: { default: "transparent" },
    containerColor: { default: "transparent" },
    label: {}
  },
  setup(t) {
    const r = t, { bemm: a } = W("base-section"), s = w(() => ({
      backgroundColor: r.sectionColor,
      padding: r.padding
    })), n = w(() => {
      const d = r.containerSize === "full" ? "100%" : r.containerSize === "small" ? "var(--post-max-width, 680px)" : "var(--content-max-width, 1200px)", u = r.containerColor ? "var(--container-padding, var(--spacing))" : "var(--container-padding, 0)";
      return {
        maxWidth: d,
        backgroundColor: r.containerColor,
        padding: u
      };
    });
    return (d, u) => (i(), c("section", {
      class: l(o(a)("", ["", t.label ? "has-label" : ""])),
      style: V(s.value)
    }, [
      F(o(ct), {
        class: l(o(a)("container", [t.containerSize, t.containerColor ? "has-background" : ""])),
        style: V(n.value)
      }, {
        default: X(() => [
          t.label ? (i(), c("div", {
            key: 0,
            class: l(o(a)("label"))
          }, f(t.label), 3)) : E("", !0),
          T("div", {
            class: l(o(a)("content"))
          }, [
            y(d.$slots, "default")
          ], 2)
        ]),
        _: 3
      }, 8, ["class", "style"])
    ], 6));
  }
}), Qr = ["data-speed", "data-direction"], jr = ["href"], Zr = ["src", "alt"], Jr = ["src", "alt"], eo = ["href"], to = ["src", "alt"], ao = ["src", "alt"], on = /* @__PURE__ */ B({
  __name: "LogoScroller",
  props: {
    logos: {},
    variant: { default: "scroller" },
    speed: { default: "normal" },
    direction: { default: "left" },
    pauseOnHover: { type: Boolean, default: !0 },
    gridSize: { default: 4 },
    logoHeight: { default: "40px" },
    gap: { default: "2rem" },
    padding: { default: "var(--spacing)" },
    containerSize: { default: "large" },
    sectionColor: { default: "transparent" },
    containerColor: { default: "transparent" },
    label: {}
  },
  setup(t) {
    const r = t, { bemm: a } = W("logo-scroller"), s = w(() => {
      if (r.variant !== "scroller") return [];
      const n = r.logos.map((d) => ({
        ...d,
        _setIndex: 0
      }));
      return [...n, ...n.map((d) => ({ ...d, _setIndex: 1 }))];
    });
    return (n, d) => (i(), g(o(Ne), {
      padding: t.padding,
      "container-size": t.containerSize,
      "section-color": t.sectionColor,
      "container-color": t.containerColor,
      label: t.label
    }, {
      default: X(() => [
        T("div", {
          class: l(o(a)("", [t.variant])),
          "data-speed": t.speed,
          "data-direction": t.direction
        }, [
          t.variant === "scroller" ? (i(), c("div", {
            key: 0,
            class: l(o(a)("track", [t.pauseOnHover ? "pause-on-hover" : ""])),
            style: V({ "--logo-height": t.logoHeight, "--gap": t.gap })
          }, [
            T("div", {
              class: l(o(a)("content"))
            }, [
              (i(!0), c(k, null, G(s.value, (u) => (i(), c("div", {
                key: `${u.id}-${u._setIndex}`,
                class: l(o(a)("logo"))
              }, [
                u.href ? (i(), c("a", {
                  key: 0,
                  href: u.href,
                  class: l(o(a)("link")),
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  u.component ? (i(), g(q(u.component), {
                    key: 0,
                    class: l(o(a)("component"))
                  }, null, 8, ["class"])) : u.src ? (i(), c("img", {
                    key: 1,
                    src: u.src,
                    alt: u.alt || `Logo ${u.id}`,
                    class: l(o(a)("image"))
                  }, null, 10, Zr)) : E("", !0)
                ], 10, jr)) : u.component ? (i(), g(q(u.component), {
                  key: 1,
                  class: l(o(a)("component"))
                }, null, 8, ["class"])) : u.src ? (i(), c("img", {
                  key: 2,
                  src: u.src,
                  alt: u.alt || `Logo ${u.id}`,
                  class: l(o(a)("image"))
                }, null, 10, Jr)) : E("", !0)
              ], 2))), 128))
            ], 2)
          ], 6)) : t.variant === "grid" ? (i(), c("div", {
            key: 1,
            class: l(o(a)("grid")),
            style: V({ "--grid-size": t.gridSize, "--logo-height": t.logoHeight, "--gap": t.gap })
          }, [
            (i(!0), c(k, null, G(t.logos, (u) => (i(), c("div", {
              key: u.id,
              class: l(o(a)("logo"))
            }, [
              u.href ? (i(), c("a", {
                key: 0,
                href: u.href,
                class: l(o(a)("link")),
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                u.component ? (i(), g(q(u.component), {
                  key: 0,
                  class: l(o(a)("component"))
                }, null, 8, ["class"])) : u.src ? (i(), c("img", {
                  key: 1,
                  src: u.src,
                  alt: u.alt || `Logo ${u.id}`,
                  class: l(o(a)("image"))
                }, null, 10, to)) : E("", !0)
              ], 10, eo)) : u.component ? (i(), g(q(u.component), {
                key: 1,
                class: l(o(a)("component"))
              }, null, 8, ["class"])) : u.src ? (i(), c("img", {
                key: 2,
                src: u.src,
                alt: u.alt || `Logo ${u.id}`,
                class: l(o(a)("image"))
              }, null, 10, ao)) : E("", !0)
            ], 2))), 128))
          ], 6)) : E("", !0)
        ], 10, Qr)
      ]),
      _: 1
    }, 8, ["padding", "container-size", "section-color", "container-color", "label"]));
  }
}), ro = ["src", "alt"], nn = /* @__PURE__ */ B({
  __name: "CardSection",
  props: {
    title: {},
    description: {},
    cards: {},
    columns: { default: 3 },
    padding: { default: "var(--spacing)" },
    containerSize: { default: "large" },
    sectionColor: { default: "transparent" },
    containerColor: { default: "transparent" },
    label: {}
  },
  setup(t) {
    const { bemm: r } = W("card-section");
    return (a, s) => (i(), g(o(Ne), {
      padding: t.padding,
      "container-size": t.containerSize,
      "section-color": t.sectionColor,
      "container-color": t.containerColor,
      label: t.label
    }, {
      default: X(() => [
        T("div", {
          class: l(o(r)(""))
        }, [
          t.title || t.description ? (i(), c("header", {
            key: 0,
            class: l(o(r)("header"))
          }, [
            t.title ? (i(), c("h2", {
              key: 0,
              class: l(o(r)("title"))
            }, f(t.title), 3)) : E("", !0),
            t.description ? (i(), c("p", {
              key: 1,
              class: l(o(r)("description"))
            }, f(t.description), 3)) : E("", !0)
          ], 2)) : E("", !0),
          T("div", {
            class: l(o(r)("grid")),
            style: V({ "--columns": t.columns })
          }, [
            (i(!0), c(k, null, G(t.cards, (n) => (i(), g(o(Me), {
              key: n.id,
              class: l(o(r)("card")),
              style: V(n.color ? { "--card-color": n.color } : {})
            }, {
              default: X(() => [
                n.image || n.icon ? (i(), c("div", {
                  key: 0,
                  class: l(o(r)("media"))
                }, [
                  n.image ? (i(), c("img", {
                    key: 0,
                    src: n.image,
                    alt: n.title,
                    class: l(o(r)("image"))
                  }, null, 10, ro)) : n.icon ? (i(), g(o(U), {
                    key: 1,
                    name: n.icon,
                    class: l(o(r)("icon"))
                  }, null, 8, ["name", "class"])) : E("", !0)
                ], 2)) : E("", !0),
                T("div", {
                  class: l(o(r)("content"))
                }, [
                  n.title ? (i(), c("h3", {
                    key: 0,
                    class: l(o(r)("card-title"))
                  }, f(n.title), 3)) : E("", !0),
                  n.subtitle ? (i(), c("p", {
                    key: 1,
                    class: l(o(r)("subtitle"))
                  }, f(n.subtitle), 3)) : E("", !0),
                  n.content ? (i(), c("p", {
                    key: 2,
                    class: l(o(r)("text"))
                  }, f(n.content), 3)) : E("", !0),
                  n.cta ? (i(), c("div", {
                    key: 3,
                    class: l(o(r)("cta"))
                  }, [
                    n.cta.link ? (i(), g(o(te), {
                      key: 0,
                      href: n.cta.link,
                      color: n.cta.color || "primary",
                      size: "small"
                    }, {
                      default: X(() => [
                        K(f(n.cta.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["href", "color"])) : (i(), g(o(te), {
                      key: 1,
                      color: n.cta.color || "primary",
                      size: "small"
                    }, {
                      default: X(() => [
                        K(f(n.cta.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"]))
                  ], 2)) : E("", !0)
                ], 2)
              ]),
              _: 2
            }, 1032, ["class", "style"]))), 128))
          ], 6),
          a.$slots.footer ? (i(), c("footer", {
            key: 1,
            class: l(o(r)("footer"))
          }, [
            y(a.$slots, "footer")
          ], 2)) : E("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["padding", "container-size", "section-color", "container-color", "label"]));
  }
}), oo = ["href", "target", "rel"], ln = /* @__PURE__ */ B({
  __name: "SimpleFooter",
  props: {
    label: {},
    links: {},
    padding: { default: "var(--spacing)" },
    containerSize: { default: "large" },
    sectionColor: { default: "transparent" },
    containerColor: { default: "transparent" }
  },
  setup(t) {
    const { bemm: r } = W("simple-footer");
    return (a, s) => (i(), g(o(Ne), {
      padding: t.padding,
      "container-size": t.containerSize,
      "section-color": t.sectionColor,
      "container-color": t.containerColor,
      label: t.label
    }, {
      default: X(() => {
        var n;
        return [
          T("footer", {
            class: l(o(r)(""))
          }, [
            (n = t.links) != null && n.length ? (i(), c("nav", {
              key: 0,
              class: l(o(r)("links"))
            }, [
              (i(!0), c(k, null, G(t.links, (d) => (i(), c("ul", {
                key: d.id,
                class: l(o(r)("group"))
              }, [
                d.title ? (i(), c("li", {
                  key: 0,
                  class: l(o(r)("group-title"))
                }, f(d.title), 3)) : E("", !0),
                (i(!0), c(k, null, G(d.items, (u) => (i(), c("li", {
                  key: u.id,
                  class: l(o(r)("item"))
                }, [
                  T("a", {
                    href: u.href || "#",
                    target: u.target,
                    rel: u.rel
                  }, f(u.label), 9, oo)
                ], 2))), 128))
              ], 2))), 128))
            ], 2)) : E("", !0),
            T("div", {
              class: l(o(r)("slot"))
            }, [
              y(a.$slots, "default")
            ], 2)
          ], 2)
        ];
      }),
      _: 3
    }, 8, ["padding", "container-size", "section-color", "container-color", "label"]));
  }
}), no = ["href", "target", "rel"], sn = /* @__PURE__ */ B({
  __name: "PageFooter",
  props: {
    label: {},
    links: {},
    copyright: {},
    padding: { default: "var(--spacing)" },
    containerSize: { default: "large" },
    sectionColor: { default: "transparent" },
    containerColor: { default: "transparent" }
  },
  setup(t) {
    const { bemm: r } = W("page-footer");
    return (a, s) => (i(), g(o(Ne), {
      padding: t.padding,
      "container-size": t.containerSize,
      "section-color": t.sectionColor,
      "container-color": t.containerColor,
      label: t.label
    }, {
      default: X(() => {
        var n;
        return [
          T("footer", {
            class: l(o(r)(""))
          }, [
            T("div", {
              class: l(o(r)("top"))
            }, [
              (n = t.links) != null && n.length ? (i(), c("nav", {
                key: 0,
                class: l(o(r)("links"))
              }, [
                (i(!0), c(k, null, G(t.links, (d) => (i(), c("ul", {
                  key: d.id,
                  class: l(o(r)("group"))
                }, [
                  d.title ? (i(), c("li", {
                    key: 0,
                    class: l(o(r)("group-title"))
                  }, f(d.title), 3)) : E("", !0),
                  (i(!0), c(k, null, G(d.items, (u) => (i(), c("li", {
                    key: u.id,
                    class: l(o(r)("item"))
                  }, [
                    T("a", {
                      href: u.href || "#",
                      target: u.target,
                      rel: u.rel
                    }, f(u.label), 9, no)
                  ], 2))), 128))
                ], 2))), 128))
              ], 2)) : E("", !0),
              T("div", {
                class: l(o(r)("slot"))
              }, [
                y(a.$slots, "default")
              ], 2)
            ], 2),
            t.copyright ? (i(), c("div", {
              key: 0,
              class: l(o(r)("bottom"))
            }, [
              T("small", null, "© " + f((/* @__PURE__ */ new Date()).getFullYear()) + " " + f(t.copyright), 1)
            ], 2)) : E("", !0)
          ], 2)
        ];
      }),
      _: 3
    }, 8, ["padding", "container-size", "section-color", "container-color", "label"]));
  }
}), io = {};
function lo(t, r) {
  return i(), c("div", null, [
    y(t.$slots, "default")
  ]);
}
const Je = /* @__PURE__ */ Ee(io, [["render", lo]]), et = {
  error: (t, ...r) => console.error(t, ...r),
  warn: (t, ...r) => console.warn(t, ...r),
  info: (t, ...r) => console.info(t, ...r),
  debug: (t, ...r) => console.debug(t, ...r)
}, so = /* @__PURE__ */ B({
  __name: "ConfirmDialog",
  props: {
    title: {},
    message: {},
    icon: { default: "help-circle" },
    confirmLabel: { default: "Confirm" },
    cancelLabel: { default: "Cancel" },
    confirmColor: { default: ee.PRIMARY },
    onConfirm: {},
    onCancel: {},
    popupId: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const a = t, s = r, n = W("confirm-dialog"), d = H(null), u = () => {
      var R;
      (R = a.onConfirm) == null || R.call(a), s("close");
    }, m = () => {
      var R;
      (R = a.onCancel) == null || R.call(a), s("close");
    }, I = (R) => {
      switch (R) {
        case "success":
          return e.CIRCLED_CHECK;
        case "error":
          return e.MULTIPLY_M;
        case "warning":
          return e.CIRCLED_EXCLAMATION_MARK;
        default:
          return e.ARROW_RIGHT;
      }
    };
    le(() => {
      ke(() => {
        var A;
        const R = (A = d.value) == null ? void 0 : A.$el;
        if (R) {
          const _ = R.querySelector("button") || R;
          _ == null || _.focus();
        }
      });
    });
    const p = (R) => {
      R.key === "Enter" ? (R.preventDefault(), u()) : R.key === "Escape" && (R.preventDefault(), m());
    };
    return le(() => {
      document.addEventListener("keydown", p);
    }), Oe(() => {
      document.removeEventListener("keydown", p);
    }), (R, A) => (i(), c("div", {
      class: l(o(n)())
    }, [
      T("div", {
        class: l(o(n)("icon"))
      }, [
        F(U, { name: t.icon }, null, 8, ["name"])
      ], 2),
      T("div", {
        class: l(o(n)("content"))
      }, [
        T("h3", {
          class: l(o(n)("title"))
        }, f(t.title), 3),
        T("p", {
          class: l(o(n)("message"))
        }, f(t.message), 3)
      ], 2),
      T("div", {
        class: l(o(n)("actions"))
      }, [
        F(te, {
          type: o(Ue).BUTTON,
          color: o(ee).SECONDARY,
          onClick: m,
          icon: o(e).ARROW_LEFT,
          class: l(o(n)("cancel-button"))
        }, {
          default: X(() => [
            K(f(t.cancelLabel), 1)
          ]),
          _: 1
        }, 8, ["type", "color", "icon", "class"]),
        F(te, {
          color: t.confirmColor,
          icon: I(t.confirmColor),
          onClick: u,
          class: l(o(n)("confirm-button")),
          ref_key: "confirmButton",
          ref: d,
          autofocus: ""
        }, {
          default: X(() => [
            K(f(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["color", "icon", "class"])
      ], 2)
    ], 2));
  }
}), co = /* @__PURE__ */ B({
  __name: "ProgressDialog",
  props: {
    title: {},
    message: {},
    progress: { default: 0 },
    showPercentage: { type: Boolean, default: !1 }
  },
  setup(t) {
    const { bemm: r } = W("progress-dialog");
    return (a, s) => (i(), c("div", {
      class: l(o(r)())
    }, [
      T("div", {
        class: l(o(r)("content"))
      }, [
        t.title ? (i(), c("div", {
          key: 0,
          class: l(o(r)("title"))
        }, f(t.title), 3)) : E("", !0),
        t.message ? (i(), c("div", {
          key: 1,
          class: l(o(r)("message"))
        }, f(t.message), 3)) : E("", !0),
        T("div", {
          class: l(o(r)("progress"))
        }, [
          T("div", {
            class: l(o(r)("progress-bar")),
            style: V({ width: `${t.progress}%` })
          }, null, 6)
        ], 2),
        t.showPercentage ? (i(), c("div", {
          key: 2,
          class: l(o(r)("percentage"))
        }, f(Math.round(t.progress)) + "%", 3)) : E("", !0)
      ], 2)
    ], 2));
  }
}), uo = /* @__PURE__ */ B({
  __name: "InputDialog",
  props: {
    title: {},
    message: {},
    placeholder: {},
    initialValue: { default: "" },
    confirmLabel: { default: "OK" },
    cancelLabel: { default: "Cancel" },
    validate: {},
    type: { default: "text" },
    onConfirm: {},
    onCancel: {},
    popupId: {}
  },
  setup(t) {
    const r = t, { bemm: a } = W("input-dialog"), s = H(r.initialValue), n = H(""), d = H(null), u = () => {
      var p;
      const I = s.value.trim();
      if (r.validate) {
        const R = r.validate(I);
        if (R !== !0) {
          n.value = typeof R == "string" ? R : "Invalid input";
          return;
        }
      }
      (p = r.onConfirm) == null || p.call(r, I);
    }, m = () => {
      var I;
      (I = r.onCancel) == null || I.call(r);
    };
    return le(() => {
      setTimeout(() => {
        var I;
        (I = d.value) == null || I.focus();
      }, 100);
    }), (I, p) => (i(), c("div", {
      class: l(o(a)())
    }, [
      T("h3", {
        class: l(o(a)("title"))
      }, f(t.title), 3),
      t.message ? (i(), c("p", {
        key: 0,
        class: l(o(a)("message"))
      }, f(t.message), 3)) : E("", !0),
      F(o(pa), {
        modelValue: s.value,
        "onUpdate:modelValue": p[0] || (p[0] = (R) => s.value = R),
        placeholder: t.placeholder,
        type: t.type,
        error: n.value,
        class: l(o(a)("input")),
        onKeyup: Tt(u, ["enter"]),
        ref_key: "inputRef",
        ref: d
      }, null, 8, ["modelValue", "placeholder", "type", "error", "class"]),
      T("div", {
        class: l(o(a)("actions"))
      }, [
        F(te, {
          variant: "secondary",
          onClick: m
        }, {
          default: X(() => [
            K(f(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        F(te, {
          variant: "primary",
          onClick: u
        }, {
          default: X(() => [
            K(f(t.confirmLabel), 1)
          ]),
          _: 1
        })
      ], 2)
    ], 2));
  }
}), Io = {
  config: {
    background: !0,
    position: "center",
    canClose: !0,
    width: "auto",
    closingTimeout: 1e3
  },
  closePopups: !1
}, mo = pt({}), Eo = {
  ConfirmDialog: so,
  ProgressDialog: co,
  InputDialog: uo
}, Ro = () => {
  const t = H([]), r = () => {
    t.value = [];
  }, a = (d) => {
    var R, A, _, D, C;
    if (t.value.length > 5 && r(), typeof d.component == "string") {
      const O = Eo[d.component];
      if (!O)
        return et.error(`Component "${d.component}" not found in popup registry`), "";
      d.component = ue(O);
    } else if (typeof d.component == "function") {
      const O = d.component;
      d = {
        ...d,
        component: ue(Je),
        slots: {
          ...d.slots,
          // @ts-expect-error
          default: O
        }
      };
    }
    const u = { ...Io, ...d }, m = u.id || crypto.randomUUID();
    u.closePopups && n(m);
    const I = {
      ...u.props,
      ...u.on && Object.entries(u.on).reduce(
        (O, [N, b]) => ({
          ...O,
          [`onUpdate:${N}`]: b,
          [`on${N.charAt(0).toUpperCase() + N.slice(1)}`]: b
        }),
        {}
      )
    }, p = {
      id: m,
      component: u.component ? ue(u.component) : ue(Je),
      footer: u.footer ? ue(u.footer) : void 0,
      header: u.header ? ue(u.header) : void 0,
      actions: u.actions,
      props: I,
      title: u.title || "",
      description: u.description || "",
      config: {
        hasBackground: ((R = u.config) == null ? void 0 : R.background) ?? !0,
        position: ((A = u.config) == null ? void 0 : A.position) || "center",
        canClose: ((_ = u.config) == null ? void 0 : _.canClose) ?? !0,
        width: ((D = u.config) == null ? void 0 : D.width) || "auto",
        closingTimeout: ((C = u.config) == null ? void 0 : C.closingTimeout) || 1e3
      },
      onCallback: u.onCallback,
      onClose: u.onClose,
      openedTime: Date.now(),
      slots: u.slots,
      events: u.on,
      state: {
        closing: !1
      }
    };
    return Promise.resolve().then(() => {
      try {
        t.value.push(p);
      } catch (O) {
        et.error("Failed to push popup", {
          error: O,
          popupId: m,
          popupsCount: t.value.length
        }), r();
      }
    }), m;
  }, s = (d = {}) => {
    const { id: u, callback: m } = d;
    if (u) {
      const I = t.value.find((p) => p.id === u);
      I && (I.state.closing = !0, m && I.onCallback && I.onCallback(m), setTimeout(() => {
        var p;
        (p = I.onClose) == null || p.call(I), t.value = t.value.filter((R) => R.id !== u);
      }, I.config.closingTimeout));
    } else {
      const I = t.value[t.value.length - 1];
      I && (I.state.closing = !0, setTimeout(() => {
        var p;
        (p = I.onClose) == null || p.call(I), t.value.pop();
      }, I.config.closingTimeout));
    }
  }, n = (d) => {
    t.value.map((u) => u.id).filter((u) => u !== d).forEach((u) => s({ id: u }));
  };
  return {
    popups: t,
    showPopup: a,
    showFormPopup: a,
    hidePopup: (d) => s({ id: d }),
    closePopup: s,
    close: (d) => s({ id: d }),
    closeAllPopups: n,
    resePopupState: r
    // Expose reset method
  };
}, J = Ro();
class Ao {
  constructor() {
    Ge(this, "events");
    this.events = /* @__PURE__ */ new Map();
  }
  // Legacy channel-based methods
  onChannel(r, a) {
    this.events.has(r) || this.events.set(r, []), this.events.get(r).push(a);
  }
  offChannel(r, a) {
    const s = this.events.get(r);
    if (s) {
      const n = s.indexOf(a);
      n > -1 && s.splice(n, 1);
    }
  }
  emitChannel(r, a) {
    const s = this.events.get(r);
    s && s.forEach((n) => n(a));
  }
  // String-based event methods for popup compatibility
  on(r, a) {
    this.events.has(r) || this.events.set(r, []), this.events.get(r).push(a);
  }
  off(r, a) {
    const s = this.events.get(r);
    if (s) {
      const n = s.indexOf(a);
      n > -1 && s.splice(n, 1);
    }
  }
  emit(r, a) {
    const s = this.events.get(r);
    s && s.forEach((n) => n(a));
  }
  clear(r) {
    r ? this.events.delete(r) : this.events.clear();
  }
}
const To = new Ao();
function po() {
  return To;
}
const _o = ["id"], Oo = ["onClick"], cn = /* @__PURE__ */ B({
  __name: "Popup",
  setup(t) {
    const r = W("popup"), a = po(), s = w(() => J.popups.value), n = (R) => {
      R.key === "Escape" && J.closeAllPopups();
    }, d = (R) => {
      R.id && J.showPopup({ ...R, component: R.component });
    }, u = (R) => {
      R.id && J.closePopup({ id: R.id });
    }, m = () => {
      J.closeAllPopups();
    };
    le(() => {
      a.on("app:key", n), a.on("app:popup-open", d), a.on("app:popup-close", u), a.on("app:popup-force-close", m);
    }), Oe(() => {
      a.off("app:key", n), a.off("app:popup-open", d), a.off("app:popup-close", u), a.off("app:popup-force-close", m);
    });
    const I = me(), p = (R) => !!I[R];
    return (R, A) => (i(), g(ot, { to: "body" }, [
      (i(!0), c(k, null, G(s.value, (_) => {
        var D, C;
        return i(), c("div", {
          id: _.id,
          key: _.id,
          class: l([
            o(r)(""),
            o(r)("", _.config.position),
            o(r)("", _.config.hasBackground ? "has-background" : ""),
            o(r)("", `stack-${_.id}`),
            o(r)("", _.state.closing ? "closing" : "")
          ])
        }, [
          _.config.hasBackground ? (i(), c("div", {
            key: 0,
            class: l(o(r)("background")),
            onClick: (O) => o(J).closePopup({ id: _.id })
          }, null, 10, Oo)) : E("", !0),
          T("div", {
            class: l(o(r)("wrapper"))
          }, [
            T("div", {
              class: l(o(r)("container"))
            }, [
              T("div", {
                class: l(o(r)("popup"))
              }, [
                p("header") || _.title ? (i(), c("header", {
                  key: 0,
                  class: l(o(r)("header"))
                }, [
                  _.title ? (i(), c("h4", {
                    key: 0,
                    class: l(o(r)("header-title"))
                  }, f(_.title), 3)) : E("", !0),
                  _.description ? (i(), c("p", {
                    key: 1,
                    class: l(o(r)("header-description"))
                  }, f(_.description), 3)) : E("", !0),
                  y(R.$slots, "header"),
                  _.config.canClose ? (i(), g(te, {
                    key: 2,
                    class: l(o(r)("close")),
                    icon: o(e).MULTIPLY_M,
                    size: "small",
                    onClick: (O) => o(J).close(_.id)
                  }, null, 8, ["class", "icon", "onClick"])) : E("", !0),
                  _.header ? (i(), g(q(_.header), { key: 3 })) : E("", !0)
                ], 2)) : E("", !0),
                T("div", {
                  class: l(o(r)("content"))
                }, [
                  (i(), g(q(_.component), ie({ ref_for: !0 }, _.props, {
                    key: _.id,
                    "popup-id": _.id,
                    ref_for: !0,
                    ref: (O) => o(mo)[_.id] = O,
                    onClose: (O) => o(J).close(_.id)
                  }), _t({ _: 2 }, [
                    G(_.slots, (O, N) => ({
                      name: N,
                      fn: X(() => [
                        (i(), g(q(O)))
                      ])
                    }))
                  ]), 1040, ["popup-id", "onClose"]))
                ], 2),
                p("footer") || _.footer || (D = _.actions) != null && D.length ? (i(), c("footer", {
                  key: 1,
                  class: l(o(r)("footer"))
                }, [
                  y(R.$slots, "footer"),
                  _.footer ? (i(), g(q(_.footer), ie({
                    key: 0,
                    ref_for: !0
                  }, _.props, {
                    onClose: (O) => o(J).closePopup({ id: _.id })
                  }), null, 16, ["onClose"])) : E("", !0),
                  (C = _.actions) != null && C.length && !_.footer ? (i(), c("div", {
                    key: 1,
                    class: l(o(r)("actions"))
                  }, [
                    (i(!0), c(k, null, G(_.actions, (O) => (i(), g(te, {
                      key: O.id,
                      type: O.type || o(Ue).BUTTON,
                      color: O.color || o(ee).PRIMARY,
                      icon: O.icon,
                      disabled: O.disabled,
                      loading: O.loading,
                      onClick: O.action,
                      class: l(o(r)("action"))
                    }, {
                      default: X(() => [
                        K(f(O.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["type", "color", "icon", "disabled", "loading", "onClick", "class"]))), 128))
                  ], 2)) : E("", !0)
                ], 2)) : E("", !0)
              ], 2)
            ], 2)
          ], 2)
        ], 10, _o);
      }), 128))
    ]));
  }
}), wo = { class: "popup-wrapper" }, un = /* @__PURE__ */ B({
  __name: "PopupWrapper",
  props: {
    id: {
      type: String,
      default: "popup-wrapper"
    },
    title: {
      type: String,
      default: ""
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t) {
    const r = me(), a = t, s = () => {
      if (!r.content) {
        console.warn("No content slot provided for popup");
        return;
      }
      const n = {};
      r.footer && (n.footer = r.footer), J.showPopup({
        id: a.id,
        title: a.title,
        ...a.config,
        component: r.content ? r.content : a.config.component,
        slots: n
      });
    };
    return (n, d) => (i(), c("div", wo, [
      T("div", {
        class: "popup-trigger",
        onClick: s
      }, [
        y(n.$slots, "trigger")
      ])
    ]));
  }
});
var se = ((t) => (t[t.DEFAULT = ee.PRIMARY] = "DEFAULT", t[t.INFO = ee.INFO] = "INFO", t[t.SUCCESS = ee.SUCCESS] = "SUCCESS", t[t.WARNING = ee.WARNING] = "WARNING", t[t.ERROR = ee.ERROR] = "ERROR", t))(se || {});
const dn = /* @__PURE__ */ B({
  __name: "Alert",
  props: {
    variant: { default: se.INFO },
    title: {},
    description: {},
    dismissible: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["dismiss"],
  setup(t, { emit: r }) {
    const a = t, s = r, { bemm: n } = W("alert"), d = w(() => a.icon ? a.icon : {
      [se.DEFAULT]: "",
      [se.INFO]: "info",
      [se.SUCCESS]: "check-circle",
      [se.WARNING]: "alert",
      [se.ERROR]: "error"
    }[a.variant]), u = () => {
      s("dismiss");
    }, m = w(() => [
      n(),
      a.variant && n("", a.variant)
    ]);
    return (I, p) => (i(), g(o(Me), {
      class: l(m.value),
      color: t.variant
    }, {
      default: X(() => [
        T("div", {
          class: l(o(n)("container"))
        }, [
          F(o(U), {
            name: d.value,
            class: l(o(n)("icon"))
          }, null, 8, ["name", "class"]),
          T("div", {
            class: l(o(n)("content"))
          }, [
            t.title ? (i(), c("h4", {
              key: 0,
              class: l(o(n)("title"))
            }, f(t.title), 3)) : E("", !0),
            T("div", {
              class: l(o(n)("description"))
            }, [
              y(I.$slots, "default", {}, () => [
                K(f(t.description), 1)
              ])
            ], 2)
          ], 2),
          t.dismissible ? (i(), c("button", {
            key: 0,
            class: l(o(n)("dismiss")),
            onClick: u
          }, [
            F(o(U), { name: "close" })
          ], 2)) : E("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "color"]));
  }
}), In = /* @__PURE__ */ B({
  __name: "EmptyState",
  props: {
    icon: {},
    title: {},
    description: {}
  },
  setup(t) {
    const { bemm: r } = W("empty-state");
    return (a, s) => (i(), c("div", {
      class: l(o(r)())
    }, [
      t.icon ? (i(), g(o(U), {
        key: 0,
        name: t.icon,
        class: l(o(r)("icon"))
      }, null, 8, ["name", "class"])) : E("", !0),
      t.title ? (i(), c("h3", {
        key: 1,
        class: l(o(r)("title"))
      }, f(t.title), 3)) : E("", !0),
      t.description ? (i(), c("p", {
        key: 2,
        class: l(o(r)("description"))
      }, f(t.description), 3)) : E("", !0),
      a.$slots.default || a.$slots.actions ? (i(), c("div", {
        key: 3,
        class: l(o(r)("actions"))
      }, [
        y(a.$slots, "actions", {}, () => [
          y(a.$slots, "default")
        ])
      ], 2)) : E("", !0)
    ], 2));
  }
}), fo = {
  TOP: "top",
  BOTTOM: "bottom",
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right"
}, Be = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  DEFAULT: "default"
}, Lo = {
  message: "",
  type: Be.INFO,
  position: fo.TOP_RIGHT,
  duration: 5e3,
  dismissible: !0
}, ho = () => {
  const t = H([]), r = (n) => {
    const d = { ...Lo, ...n }, u = d.id || crypto.randomUUID(), m = {
      id: u,
      message: d.message,
      title: d.title,
      icon: d.icon,
      duration: d.duration,
      position: d.position,
      type: d.type,
      dismissible: d.dismissible,
      onClose: d.onClose,
      openedTime: Date.now(),
      state: {
        closing: !1
      }
    };
    return t.value.push(m), d.duration && d.duration > 0 && setTimeout(() => {
      a(u);
    }, d.duration), u;
  }, a = (n) => {
    const d = t.value.find((u) => u.id === n);
    d && (d.state.closing = !0, setTimeout(() => {
      var u;
      (u = d.onClose) == null || u.call(d), t.value = t.value.filter((m) => m.id !== n);
    }, 300));
  };
  return {
    toasts: t,
    show: r,
    hide: a,
    hideAll: () => {
      t.value.forEach((n) => a(n.id));
    }
  };
}, tt = ho(), Co = ["role", "aria-live"], So = ["onClick"], mn = /* @__PURE__ */ B({
  __name: "Toast",
  setup(t) {
    const { bemm: r } = W("toast"), a = w(() => tt.toasts.value), s = (u) => u === Be.ERROR ? "alert" : "status", n = (u) => u === Be.ERROR ? "assertive" : "polite", d = (u) => {
      tt.hide(u);
    };
    return (u, m) => (i(), g(ot, { to: "body" }, [
      F(Ot, {
        name: "toast",
        tag: "div",
        class: "toast-container"
      }, {
        default: X(() => [
          (i(!0), c(k, null, G(a.value, (I) => (i(), c("div", {
            key: I.id,
            class: l(o(r)("", [I.type || "", I.position || ""])),
            role: s(I.type),
            "aria-live": n(I.type),
            style: V(`--toast-color: var(--color-${I.type})`)
          }, [
            T("div", {
              class: l(o(r)("content"))
            }, [
              I.icon ? (i(), g(o(U), {
                key: 0,
                class: l(o(r)("icon")),
                name: I.icon
              }, null, 8, ["class", "name"])) : E("", !0),
              T("div", {
                class: l(o(r)("body"))
              }, [
                I.title ? (i(), c("div", {
                  key: 0,
                  class: l(o(r)("title"))
                }, f(I.title), 3)) : E("", !0),
                T("div", {
                  class: l(o(r)("message"))
                }, f(I.message), 3)
              ], 2)
            ], 2),
            I.dismissible ? (i(), c("button", {
              key: 0,
              class: l(o(r)("close")),
              onClick: (p) => d(I.id),
              "aria-label": "Close notification"
            }, [
              F(o(U), {
                name: "close",
                size: "small"
              })
            ], 10, So)) : E("", !0)
          ], 14, Co))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), Do = (t) => t, En = { install: Do };
export {
  dn as Alert,
  se as AlertVariant,
  tn as AppHeader,
  an as AppSidebar,
  yo as Badge,
  Bo as BadgeVariant,
  Ne as BaseSection,
  te as Button,
  bo as ButtonGroup,
  Me as Card,
  nn as CardSection,
  qo as Checkbox,
  Ye as CircularProgress,
  ee as Colors,
  ct as Container,
  ko as ContextMenu,
  Jt as ContextMenuItems,
  ta as ContextPanel,
  In as EmptyState,
  U as Icon,
  $o as InputEmail,
  xo as InputNumber,
  Vo as InputPassword,
  Yo as InputPhone,
  zo as InputUrl,
  on as LogoScroller,
  Fo as OptionItem,
  sn as PageFooter,
  en as PageHeader,
  cn as Popup,
  Je as PopupSlot,
  un as PopupWrapper,
  Wo as Progress,
  Or as Radio,
  Qo as RadioGroup,
  Go as SearchInput,
  Jo as Section,
  Xo as SelectInput,
  rn as SettingsLayout,
  ln as SimpleFooter,
  ge as Size,
  Mo as StatsCard,
  pa as TInputText,
  Ko as TInputTextArea,
  Po as Tab,
  Uo as TabPanel,
  Zo as Table,
  Qe as TableCell,
  qe as TableRow,
  Ho as Tabs,
  pa as TextInput,
  ua as ThemeToggle,
  mn as Toast,
  fo as ToastPosition,
  Be as ToastType,
  jo as Toggle,
  xr as Tooltip,
  Vr as TooltipPosition,
  En as default,
  Do as install,
  J as popupService,
  tt as toastService
};
