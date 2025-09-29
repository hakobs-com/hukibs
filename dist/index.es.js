var ot = Object.defineProperty;
var nt = (r, a, t) => a in r ? ot(r, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[a] = t;
var Pe = (r, a, t) => nt(r, typeof a != "symbol" ? a + "" : a, t);
import { defineComponent as g, computed as C, ref as y, watchEffect as je, createElementBlock as I, openBlock as i, mergeProps as te, useSlots as pe, watch as ce, createBlock as N, resolveDynamicComponent as j, withCtx as F, createElementVNode as m, createCommentVNode as p, normalizeClass as s, unref as n, createVNode as M, renderSlot as h, normalizeStyle as Y, toDisplayString as L, resolveComponent as it, Fragment as B, renderList as W, createTextVNode as X, onMounted as ae, onUnmounted as Ae, withModifiers as ie, provide as ge, inject as _e, mergeModels as re, useModel as De, withDirectives as st, vModelDynamic as ct, nextTick as lt, withKeys as ut, reactive as It, markRaw as se, Teleport as Je, createSlots as dt, TransitionGroup as _t } from "vue";
var Et = Object.defineProperty, Rt = Object.defineProperties, pt = Object.getOwnPropertyDescriptors, Ue = Object.getOwnPropertySymbols, At = Object.prototype.hasOwnProperty, Tt = Object.prototype.propertyIsEnumerable, ke = (r, a, t) => a in r ? Et(r, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[a] = t, ee = (r, a) => {
  for (var t in a || (a = {}))
    At.call(a, t) && ke(r, t, a[t]);
  if (Ue)
    for (var t of Ue(a))
      Tt.call(a, t) && ke(r, t, a[t]);
  return r;
}, Te = (r, a) => Rt(r, pt(a)), mt = (r) => r === "" ? "" : r.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([\d])([a-zA-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), Ot = (r) => !isNaN(r) && typeof r == "number", Be = (r) => typeof r == "object" && !Array.isArray(r), le = (r) => typeof r == "object" && Array.isArray(r) && !Be(r), Ce = (r) => {
  if (!Array.isArray(r) || r.length === 0)
    return !1;
  for (let a = 0; a < r.length; a++)
    if (typeof r[a] != "string")
      return !1;
  return !0;
}, Q = (r) => typeof r == "string", Ze = (r) => r == null, Ee = (r) => Ce(r) ? r : Q(r) ? [r] : [], xe = (r) => {
  const a = r.map((t) => t && typeof t == "string" && t.includes(" ") ? xe(t.split(" ")) : (t && typeof t == "string" ? t.trim() : null) || "").flat().filter((t) => t !== "");
  return [...new Set(a)];
}, Lt = (r) => r == null ? !0 : r !== void 0 ? !!r : !1, wt = (r) => typeof r == "boolean", fe = {
  ARRAY: "array"
}, x = {
  STRING: "string",
  ARRAY: "array",
  OBJECT: "object",
  NONE: "none",
  FALSE: "false"
}, St = (r) => Q(r) ? r : "", Dt = (r) => Q(r) || Ce(r) ? r : "", we = (r) => {
  if (!Be(r) || le(r) || Q(r) || Ze(r))
    return !1;
  const a = [
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
    ...new Set(Object.keys(r).find((c) => !a.includes(c)))
  ].length;
}, Ct = (r) => !!(le(r) && Q(r[0]) && (Ce(r[1]) || Q(r[1]))), ft = (r) => !Q(r) && r[2] !== void 0 && !r[2], ht = (r, a, t = {}) => {
  const c = [];
  return ue(
    r,
    St(a[0]),
    Dt(a[1]),
    Te(ee({}, t), { return: fe.ARRAY })
  ).forEach((l) => {
    c.push(l);
  }), c;
}, Me = (r, a, t = {}) => {
  const c = {
    block: r,
    element: "",
    modifier: ""
  };
  if (a.includes(":")) {
    const [o, l] = a.split(":");
    c.element = o, c.modifier = l;
  } else
    c.element = a;
  return ue(c.block, c.element, c.modifier, Te(ee({}, t), {
    return: fe.ARRAY
  }));
}, Nt = (r, a, t = {}) => {
  if (a.show !== void 0 && !a.show || a.s !== void 0 && !a.s)
    return [];
  const c = (a == null ? void 0 : a.block) || a.b || r, o = {
    element: a.element || a.e || "",
    modifier: a.modifier || a.m || ""
  };
  return ue(c, o.element, o.modifier, Te(ee({}, t), {
    return: fe.ARRAY
  }));
}, gt = (r) => Ze(r) ? x.NONE : Q(r) ? x.STRING : (le(r) && r.length < 2 || Ct(r)) && !ft(r) ? x.ARRAY : we(r) ? x.OBJECT : x.FALSE, vt = (r, a = {}) => (...c) => {
  const o = Q(r) ? [r] : r;
  let l = [];
  return o.forEach((u) => {
    (c.length == 0 || c[0] == null || c[0] == "") && l.push(
      ...ue(u, "", "", { return: fe.ARRAY })
    ), c.forEach((T, d) => {
      switch (gt(T)) {
        case x.NONE:
          l.push(...Me(u, "", a));
          break;
        case x.STRING:
          l.push(...Me(u, T, a));
          break;
        case x.ARRAY:
          l.push(...ht(u, T, a));
          break;
        case x.OBJECT:
          l.push(...Nt(u, T, a));
          break;
      }
    });
  }), He({ classes: xe(l), settings: a });
}, de = {
  ARRAY: "array",
  STRING: "string",
  AUTO: "auto"
}, et = (r, a, t) => {
  const c = (r == null ? void 0 : r.show) !== void 0 ? r == null ? void 0 : r.show : wt(t.show) ? t.show : !0;
  let o = {
    element: t.element,
    modifier: t.modifier,
    show: c
  };
  if ((Q(r) || Ce(r)) && Q(a))
    o = {
      element: r,
      modifier: a,
      show: c
    };
  else if (we(r)) {
    const l = r;
    o = {
      element: l.element,
      modifier: l.modifier,
      show: c
    };
  }
  return o;
}, tt = (r) => {
  let a = ee({
    modifier: "--",
    element: "__"
  }, r.prefix);
  return Te(ee({
    toKebabCase: !0,
    return: de.AUTO,
    includeBaseClass: !1
  }, r), {
    prefix: a
  });
}, He = (r) => {
  const a = Array.from(new Set(r.classes.filter((t) => t !== "")));
  switch (r.settings.return) {
    case de.STRING:
      return a.join(" ");
    case de.ARRAY:
      return a;
    default:
    case de.AUTO:
      return a.length == 1 ? a[0] : a;
  }
}, me = (r, a) => (a.toKebabCase && (r = mt(r)), r), Bt = (r) => r.element == null || r.element == "" || r.element.length == 0 ? me(r.block, r.settings) : Ee(r.element).map((a) => {
  var t;
  return `${me(r.block, r.settings)}${(t = r.settings.prefix) == null ? void 0 : t.element}${me(a, r.settings)}`;
}).join(" "), Oe = (r) => {
  var a;
  return r.modifier == null || r.modifier == "" ? r.elementClass : `${r.elementClass}${(a = r.settings.prefix) == null ? void 0 : a.modifier}${me(
    r.modifier,
    r.settings
  )}`;
}, Ht = (r) => {
  const a = [];
  return r.modifier.forEach((t) => {
    a.push(Oe({
      elementClass: r.elementClass,
      modifier: t,
      settings: r.settings
    }));
  }), a;
}, bt = (r) => {
  const a = [];
  return Object.keys(r.modifier).forEach((t) => {
    const c = !!r.modifier[t];
    if (!t.includes("|"))
      a.push(
        Oe({
          elementClass: r.elementClass,
          modifier: c ? t : null,
          settings: r.settings
        })
      );
    else if (Ot(r.modifier[t])) {
      const o = r.modifier[t], u = t.split("|")[o] || "";
      a.push(
        Oe({
          elementClass: r.elementClass,
          modifier: u,
          settings: r.settings
        })
      );
    } else {
      const o = t.split("|")[0], l = t.split("|")[1];
      a.push(
        Oe({
          elementClass: r.elementClass,
          modifier: c ? o : l,
          settings: r.settings
        })
      );
    }
  }), a;
}, ue = (r, a = "", t = "", c) => {
  if (r == "")
    return [];
  const { modifier: o } = et(a, t, {
    element: a,
    modifier: t
  }), l = tt(c), u = [];
  return Ee(a).forEach((T) => {
    const d = Bt({
      block: r,
      element: T,
      settings: l
    });
    switch (l.includeBaseClass && u.push(d), !0) {
      case Q(o):
      case le(o):
        u.push(...Ht({
          elementClass: d,
          modifier: Ee(o),
          settings: l
        }));
        break;
      case Be(o):
        u.push(...bt({ elementClass: d, modifier: o, settings: l }));
        break;
      default:
        u.push(d);
    }
  }), He({ classes: u, settings: l });
}, H = (r, a = {}) => {
  const t = (o = "", l = "", u = a) => {
    const T = tt(ee(ee({}, a), u));
    if (Q(o) && le(o) && o !== null && !Lt(o == null ? void 0 : o.show))
      return "";
    let d = [];
    const { element: R, modifier: _, show: E } = et(o, l, {
      element: we(o) ? o.element : o,
      modifier: we(o) ? o.modifier : l
    });
    switch (!0) {
      case Q(r):
        d = ue(
          r,
          R,
          _,
          Te(ee({}, T), {
            return: de.ARRAY
          })
        );
        break;
      case le(r):
        d = Ee(r).flatMap(
          (A) => Ee(o).map((O) => ue(A, O, l, T)).flat()
        ).flat();
        break;
    }
    return E ? He({
      classes: d,
      settings: T
    }) : "";
  }, c = t;
  return c.bemm = t, c.classes = vt(r, a), c;
}, $ = {
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
}, yt = {
  ADD: $.ADD_M,
  PLUS: $.ADD_M,
  MINUS: $.SUBTRACT_M,
  MIN: $.SUBTRACT_M,
  SUBTRACT: $.SUBTRACT_M,
  MULTIPLY: $.MULTIPLY_M,
  TIMES: $.MULTIPLY_M,
  X: $.MULTIPLY_M,
  CLOSE: $.MULTIPLY_M,
  VISIBLE: $.VISIBLE_M,
  EYE: $.VISIBLE_M,
  SHOW: $.VISIBLE_M,
  INVISIBLE: $.INVISIBLE_M,
  EYE_SLASH: $.INVISIBLE_M,
  HIDE: $.INVISIBLE_M,
  HEART: $.HEART_M,
  LOVE: $.HEART_M
}, e = {
  ...$,
  ...yt
}, Pt = async (r) => {
  switch (r) {
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
const Ut = ["aria-hidden", "aria-label", "innerHTML"], U = /* @__PURE__ */ g({
  __name: "Icon",
  props: {
    name: {},
    size: { default: "medium" },
    color: {},
    ariaLabel: {}
  },
  setup(r) {
    const a = r, { bemm: t } = H("icon"), c = C(() => {
      const d = [t()];
      return a.size && d.push(t("", a.size)), a.color && d.push(t("", `color-${a.color}`)), l.value && d.push(t("", "is-brand")), d;
    }), o = y(""), l = y(!1), u = {
      github: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 72 72"><path d="M27.5 54.5c0 .2.3.4.6.4s.6-.2.6-.4-.3-.4-.6-.4-.6.2-.6.4"/><path d="M27.1 64.1c.9.2 1.7-.5 1.7-1.5v-5.4c-1.1.2-2.4.3-3 .3-1.6-.1-3.1-.3-3.9-.8-.9-.5-2.1-1.5-2.5-2.3-.5-1.1-.6-1.7-1.2-2.6-.5-.9-1.5-1.8-2.1-2.1s-1.2-.8-1.3-1.1.1-.7.7-.8 1.6.1 2.6.6c.8.4 1.7 1.4 2.3 2.3.7 1.1 1.7 2.1 2.5 2.6s2.5.7 4.1.5c.6-.1 1.3-.3 1.8-.6.2-1.5.9-2.8 1.9-3.9-8.5-1-13.1-5-13.1-13.6 0-3.3 1.1-6.1 3-8.2-.2-.5-.4-1.1-.5-1.9-.2-1.8 0-2.9.3-3.9.2-1.1.5-1.8.5-1.8s1.3-.1 2.5.2c1.1.4 2.1.7 3.5 1.5q1.05.6 1.8 1.2c2.2-.6 4.7-.9 7.3-.9q3.9 0 7.2.9c.5-.3 1.2-.8 1.8-1.2 1.4-.8 2.4-1.1 3.5-1.5s2.5-.2 2.5-.2.3.7.5 1.8.5 2.1.3 3.9c-.1.8-.3 1.4-.5 1.9 1.9 2.2 3 4.9 3 8.2 0 8.7-4.7 12.6-13.1 13.6 1.2 1.3 2 3 2 4.9v8.4c0 .9.8 1.6 1.7 1.5 11.6-3.7 19.9-14.6 19.9-27.4C64.8 20.8 51.9 7.9 36 7.9S7.2 20.8 7.2 36.7c0 12.8 8.3 23.6 19.9 27.4"/><path d="M23 54.4c0 .2.2.4.5.4s.6-.1.6-.3-.2-.4-.5-.4-.6.1-.6.3m2.3.4c0 .2.2.4.6.4.3 0 .6-.1.6-.3s-.2-.4-.6-.4-.6.1-.6.3M21.1 53q-.15.3.3.6c.2.2.5.1.6 0q.15-.3-.3-.6c-.2-.2-.5-.2-.6 0m-2.4-3.3c-.1.1-.1.4.1.5.2.2.4.2.6.1.1-.1.1-.4-.1-.5-.3-.2-.5-.2-.6-.1m-1.3-.9c-.1.1 0 .4.3.5.2.1.5.1.5-.1s0-.4-.3-.5c-.2-.1-.5-.1-.5.1m2.5 2.5c-.1.1-.1.4 0 .6.2.2.4.3.6.2.1-.1.1-.4 0-.6-.2-.2-.5-.3-.6-.2"/></svg>',
      google: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 72 72"><path d="M63.7 30.8H36.6V42h15.5c-.7 3.6-2.7 6.6-5.8 8.7-2.6 1.7-5.8 2.8-9.7 2.8-7.5 0-13.9-5.1-16.1-11.9-.6-1.7-.9-3.6-.9-5.5s.3-3.7.9-5.5c2.3-6.8 8.6-11.9 16.1-11.9 4.2 0 8 1.5 11 4.3l8.2-8.2c-5-4.7-11.5-7.5-19.3-7.5-11.3 0-21 6.5-25.7 15.9-1.9 3.8-3 8.1-3 12.8s1.1 9 3.1 12.9c4.7 9.4 14.5 15.9 25.7 15.9 7.8 0 14.3-2.6 19.1-7 5.4-5 8.6-12.4 8.6-21.2-.1-2-.3-4-.6-5.8"/></svg>'
    }, T = {
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
    return je(async () => {
      if (!a.name) {
        o.value = "", l.value = !1;
        return;
      }
      const d = T[a.name] || a.name;
      try {
        if (u[a.name]) {
          o.value = u[a.name], l.value = !0;
          return;
        }
        l.value = !1;
        const R = Object.keys(e).find((_) => e[_] === d);
        if (R) {
          const _ = e[R];
          o.value = await Pt(_);
        } else
          console.warn(`Icon "${a.name}" not found`), o.value = "";
      } catch {
        console.warn(`Icon "${a.name}" not found`), o.value = "", l.value = !1;
      }
    }), (d, R) => (i(), I("div", te({
      class: c.value,
      "aria-hidden": !d.ariaLabel,
      "aria-label": d.ariaLabel
    }, d.$attrs, { innerHTML: o.value }), null, 16, Ut));
  }
}), kt = {
  MEDIUM: "medium"
}, Fe = {
  PRIMARY: "primary",
  OUTLINE: "outline"
}, be = {
  BUTTON: "button",
  SUBMIT: "submit",
  RESET: "reset"
}, oe = /* @__PURE__ */ g({
  __name: "Button",
  props: {
    size: { default: kt.MEDIUM },
    variant: { default: Fe.PRIMARY },
    type: { default: be.BUTTON },
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
  setup(r) {
    const a = r, { bemm: t } = H("button"), c = pe(), o = C(() => {
      const E = [t()];
      return a.icon && E.push(t("", "has-icon")), E.push(t("", a.size)), E.push(t("", a.variant)), (!u.value && a.icon || a.iconOnly) && E.push(t("", "icon-only")), u.value && a.icon && E.push(t("", "text-icon")), a.loading && E.push(t("", "loading")), a.block && E.push(t("", "block")), l.value && E.push(t("", "disabled")), a.fullWidth && E.push(t("", "full-width")), E;
    }), l = y(a.disabled);
    ce(
      () => a.disabled,
      (E) => {
        l.value = E || a.loading;
      },
      { immediate: !0 }
    ), ce(
      () => a.loading,
      (E) => {
        l.value = a.disabled || E;
      }
    );
    const u = C(() => !!(c != null && c.default)), T = C(() => a.to ? "router-link" : a.href ? "a" : a.element || "button"), d = C(() => {
      if (T.value !== "router-link")
        return a.href ? a.href : void 0;
    }), R = C(() => {
      if (T.value === "button")
        return a.type;
    }), _ = C(() => {
      const E = {};
      return a.color && (E["--button-color"] = `var(--color-${a.color})`, E["--button-color-text"] = `var(--color-${a.color}-text)`, a.variant === Fe.OUTLINE && (E["--button-color-text"] = `var(--color-${a.color})`, E["--button-color-text-hover"] = `var(--color-${a.color}-text)`)), E;
    });
    return (E, A) => (i(), N(j(T.value), te({
      to: T.value === "router-link" ? a.to : void 0,
      href: d.value,
      class: o.value,
      disabled: T.value === "button" ? l.value : void 0,
      type: R.value,
      style: _.value,
      title: E.tooltip
    }, E.$attrs), {
      default: F(() => [
        m("div", {
          class: s(n(t)("container"))
        }, [
          E.icon && !E.iconAfter ? (i(), I("span", {
            key: 0,
            class: s(n(t)("icon"))
          }, [
            M(U, { name: E.icon }, null, 8, ["name"])
          ], 2)) : p("", !0),
          u.value && !a.iconOnly ? (i(), I("span", {
            key: 1,
            class: s(n(t)("text"))
          }, [
            h(E.$slots, "default")
          ], 2)) : p("", !0),
          E.icon && E.iconAfter ? (i(), I("span", {
            key: 2,
            class: s(n(t)("icon"))
          }, [
            M(U, { name: E.icon }, null, 8, ["name"])
          ], 2)) : p("", !0)
        ], 2),
        E.loading ? (i(), I("div", {
          key: 0,
          class: s(n(t)("loading"))
        }, [...A[0] || (A[0] = [
          m("span", { class: "spinner" }, null, -1)
        ])], 2)) : p("", !0)
      ]),
      _: 3
    }, 16, ["to", "href", "class", "disabled", "type", "style", "title"]));
  }
}), Ir = /* @__PURE__ */ g({
  __name: "ButtonGroup",
  props: {
    direction: { default: "row" },
    fluid: { type: Boolean, default: !1 },
    gap: { default: "medium" },
    align: { default: "start" },
    justify: { default: "start" },
    wrap: { type: Boolean }
  },
  setup(r) {
    const a = r, { bemm: t } = H("button-group"), c = C(() => {
      const o = [t()];
      return o.push(t("", a.direction)), o.push(t("", `gap-${a.gap}`)), o.push(t("", `align-${a.align}`)), o.push(t("", `justify-${a.justify}`)), a.fluid && o.push(t("", "fluid")), a.wrap && o.push(t("", "wrap")), o;
    });
    return (o, l) => (i(), I("div", {
      class: s(c.value)
    }, [
      h(o.$slots, "default")
    ], 2));
  }
}), Mt = ["data-variant"], Ft = { class: "card__container" }, Wt = {
  key: 0,
  class: "card__title"
}, at = /* @__PURE__ */ g({
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
  setup(r) {
    const a = H("card"), t = r, c = pe(), o = y(), l = y(50), u = y(50), T = y(0), d = C(() => t.title || c.header), R = C(() => c.footer), _ = C(() => a("", [
      "",
      t.variant ? `${t.variant}` : "",
      t.color ? `${t.color}` : "",
      t.color ? "has-color" : "",
      t.featured ? "featured" : "",
      t.hoverable ? "hoverable" : "",
      t.noPadding ? "no-padding" : "",
      d.value ? "has-header" : "",
      R.value ? "has-footer" : ""
    ])), E = C(() => {
      const S = {
        "--pointer-x": `${l.value}%`,
        "--pointer-y": `${u.value}%`,
        "--pointer-angle": `${T.value}deg`
      };
      return t.color && (S["--card-color"] = `var(--color-${t.color})`), S;
    }), A = (S) => {
      if (!o.value) return;
      const w = o.value.getBoundingClientRect(), G = S.clientX - w.left, k = S.clientY - w.top;
      l.value = Math.round(G / w.width * 100), u.value = Math.round(k / w.height * 100);
      const D = 50, b = 50, f = l.value - D, P = u.value - b, v = Math.atan2(P, f) * (180 / Math.PI);
      T.value = Math.round(v);
    }, O = () => {
      l.value = 50, u.value = 50;
    };
    return (S, w) => (i(), I("div", {
      class: s(_.value),
      "data-variant": S.variant,
      style: Y(E.value),
      onMousemove: A,
      onMouseleave: O,
      ref_key: "cardRef",
      ref: o
    }, [
      m("div", {
        class: s(n(a)("glow"))
      }, null, 2),
      m("div", Ft, [
        d.value ? (i(), I("div", {
          key: 0,
          class: s(["card__header", S.noHeaderPadding && "card__header--no-padding"])
        }, [
          S.title ? (i(), I("h3", Wt, L(S.title), 1)) : h(S.$slots, "header", { key: 1 })
        ], 2)) : p("", !0),
        m("div", {
          class: s(["card__content", S.noContentPadding && "card__content--no-padding"])
        }, [
          h(S.$slots, "default")
        ], 2),
        R.value ? (i(), I("div", {
          key: 1,
          class: s(["card__footer", S.noFooterPadding && "card__footer--no-padding"])
        }, [
          h(S.$slots, "footer")
        ], 2)) : p("", !0)
      ])
    ], 46, Mt));
  }
}), Gt = /* @__PURE__ */ g({
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
  setup(r) {
    const a = r, { bemm: t } = H("container"), c = C(() => [
      t(),
      a.fluid && t("", "fluid"),
      a.max && t("", a.max)
    ]), o = C(() => {
      const l = {
        small: "600px",
        medium: "900px",
        large: "1200px",
        wide: "1400px",
        full: "100%",
        "fit-content": "fit-content"
      };
      return {
        "--int-container-max-width": a.maxWidth || l[a.max] || l.large,
        "--int-container-padding": a.padding || "var(--spacing)"
      };
    });
    return (l, u) => (i(), I("div", {
      class: s(c.value),
      style: Y(o.value)
    }, [
      l.showHeader && (l.title || l.subtitle || l.$slots.header) ? (i(), I("header", {
        key: 0,
        class: s(n(t)("header", ["", l.noPadding || l.noHeaderPadding ? "no-padding" : ""]))
      }, [
        m("div", {
          class: s(n(t)("header-content"))
        }, [
          l.title || l.subtitle ? (i(), I("div", {
            key: 0,
            class: s(n(t)("header-text"))
          }, [
            l.title ? (i(), I("h1", {
              key: 0,
              class: s(n(t)("title"))
            }, L(l.title), 3)) : p("", !0),
            l.subtitle ? (i(), I("p", {
              key: 1,
              class: s(n(t)("subtitle"))
            }, L(l.subtitle), 3)) : p("", !0)
          ], 2)) : p("", !0),
          h(l.$slots, "header")
        ], 2)
      ], 2)) : p("", !0),
      m("main", {
        class: s(n(t)("content", ["", l.noPadding || l.noContentPadding ? "no-padding" : ""]))
      }, [
        h(l.$slots, "default")
      ], 2),
      l.showFooter && l.$slots.footer ? (i(), I("footer", {
        key: 1,
        class: s(n(t)("footer", ["", l.noPadding || l.noFooterPadding ? "no-padding" : ""]))
      }, [
        h(l.$slots, "footer")
      ], 2)) : p("", !0)
    ], 6));
  }
}), Kt = ["data-variant", "data-size"], dr = /* @__PURE__ */ g({
  __name: "Badge",
  props: {
    variant: { default: "default" },
    size: { default: "medium" },
    color: {},
    icon: {}
  },
  setup(r) {
    const a = r, t = C(() => [
      "badge",
      a.variant && `badge--${a.variant}`,
      a.size && `badge--${a.size}`,
      a.color && "badge--has-color"
    ]), c = C(() => a.color ? {
      "--badge-color": `var(--color-${a.color})`,
      "--badge-text-color": `var(--color-${a.color})-text`
    } : {});
    return (o, l) => (i(), I("span", {
      class: s(t.value),
      "data-variant": o.variant,
      "data-size": o.size,
      style: Y(c.value)
    }, [
      o.icon ? (i(), N(n(U), {
        key: 0,
        name: o.icon,
        class: "badge__icon"
      }, null, 8, ["name"])) : p("", !0),
      h(o.$slots, "default")
    ], 14, Kt));
  }
}), _r = {
  DEFAULT: "default",
  OUTLINE: "outline"
};
var he = /* @__PURE__ */ ((r) => (r.SMALL = "small", r.MEDIUM = "medium", r.LARGE = "large", r))(he || {}), J = /* @__PURE__ */ ((r) => (r.BACKGROUND = "background", r.FOREGROUND = "foreground", r.PRIMARY = "primary", r.SECONDARY = "secondary", r.SUCCESS = "success", r.WARNING = "warning", r.ERROR = "error", r.INFO = "info", r))(J || {});
const Le = {
  SHORT: "short",
  LONG: "long",
  RIGHT: "right"
}, Vt = {
  BOTTOM_CENTER: "bottom-center"
}, rt = {
  id: "",
  position: Vt.BOTTOM_CENTER,
  clickMode: Le.SHORT,
  pressTime: 500,
  menu: [],
  vibrate: !0,
  disabled: !1,
  size: he.MEDIUM
}, $t = {
  id: "",
  disabled: !1,
  active: !0,
  icon: "",
  label: "",
  link: "",
  action: void 0,
  items: [],
  size: he.MEDIUM,
  type: "default"
}, We = rt, Re = (r) => r.map((a) => {
  const t = { ...$t, ...a };
  return t.items && t.items.length > 0 && (t.items = Re(t.items)), t;
}).filter((a) => !a.disabled && a.active), Yt = ["href", "onClick"], Xt = { key: 0 }, Qt = /* @__PURE__ */ g({
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
  setup(r) {
    const a = H("context-menu-items"), t = r, c = (l) => {
      if (l.link)
        return l.link;
    }, o = (l, u) => {
      var T;
      l.preventDefault(), !((T = u.items) != null && T.length) && (u.action && u.action(), u.link && (window.location.href = u.link), setTimeout(() => {
        var d;
        (d = t.contextMenu) == null || d.close();
      }, 100));
    };
    return (l, u) => {
      const T = it("ContextMenuItems", !0);
      return i(), I("ul", {
        class: s(n(a)("list"))
      }, [
        (i(!0), I(B, null, W(r.items, (d) => {
          var R, _;
          return i(), I("li", {
            key: d.id + d.label,
            class: s(n(a)("list-item", ["", `size-${d.size}`]))
          }, [
            d.type == "default" ? (i(), I(B, { key: 0 }, [
              M(n(oe), {
                icon: d.icon,
                class: s(n(a)("item", ["", "normal", (R = d.items) != null && R.length ? "has-submenu" : ""])),
                variant: "ghost",
                color: n(J).FOREGROUND,
                href: c(d),
                onClick: (E) => o(E, d)
              }, {
                default: F(() => {
                  var E;
                  return [
                    X(L(d.label) + " ", 1),
                    (E = d.items) != null && E.length ? (i(), N(n(U), {
                      key: 0,
                      name: "chevron-right"
                    })) : p("", !0)
                  ];
                }),
                _: 2
              }, 1032, ["icon", "class", "color", "href", "onClick"]),
              (_ = d.items) != null && _.length ? (i(), I("div", {
                key: 0,
                class: s(["panel", n(a)("submenu")])
              }, [
                M(T, {
                  items: n(Re)(d.items),
                  "context-menu": r.contextMenu
                }, null, 8, ["items", "context-menu"])
              ], 2)) : p("", !0)
            ], 64)) : p("", !0),
            d.type == "row" ? (i(), I("div", {
              key: 1,
              class: s(n(a)("row"))
            }, [
              M(T, {
                items: n(Re)(d.items),
                "context-menu": r.contextMenu
              }, null, 8, ["items", "context-menu"])
            ], 2)) : p("", !0),
            d.type == "icon-tile" ? (i(), I("a", {
              key: 2,
              class: s(n(a)("item", ["", "icon-tile"])),
              href: c(d),
              onClick: (E) => o(E, d)
            }, [
              d.icon ? (i(), N(n(U), {
                key: 0,
                class: s(n(a)("icon")),
                name: d.icon
              }, null, 8, ["class", "name"])) : p("", !0),
              d.label ? (i(), I("span", {
                key: 1,
                class: s(n(a)("label"))
              }, L(d.label), 3)) : p("", !0)
            ], 10, Yt)) : p("", !0),
            d.type == "separator" && d.active ? (i(), I("hr", {
              key: 3,
              class: s(n(a)("separator"))
            }, null, 2)) : p("", !0),
            d.type == "header" ? (i(), I("div", {
              key: 4,
              class: s(n(a)("header"))
            }, [
              d.label ? (i(), I("h5", Xt, L(d.label), 1)) : p("", !0)
            ], 2)) : p("", !0)
          ], 2);
        }), 128))
      ], 2);
    };
  }
}), zt = ["id"], qt = /* @__PURE__ */ g({
  __name: "ContextPanel",
  props: {
    config: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(r, { expose: a }) {
    const t = H("context-panel"), c = y(!1), o = y(null), l = y(0), u = y(0), T = r, { id: d, position: R, clickMode: _, pressTime: E, vibrate: A, disabled: O, size: S } = {
      ...rt,
      ...T.config
    }, w = y(null), G = y(!1), k = _ === Le.LONG, D = _ === Le.RIGHT, b = (V) => {
      O || _ !== Le.LONG || (V.preventDefault(), V.stopPropagation(), G.value = !1, w.value = window.setTimeout(() => {
        A && navigator.vibrate && navigator.vibrate(50), v(V), G.value = !0;
      }, E));
    }, f = (V) => {
      O || D && v(V);
    }, P = (V) => {
      V.preventDefault(), V.stopPropagation(), !O && (!k && !D && v(V), k && (w.value && (clearTimeout(w.value), w.value = null), G.value = !1));
    }, K = (V) => {
      O || (V.preventDefault(), w.value && (clearTimeout(w.value), w.value = null));
    }, v = (V) => {
      O || (V && R === "click" && (l.value = Math.round(V.clientX), u.value = Math.round(V.clientY)), c.value ? Ie() : ye());
    }, z = (V) => {
      O || c.value && o.value && !o.value.contains(V.target) && Ie();
    }, q = () => {
      c.value && Ie();
    };
    ae(() => {
      O || (window.addEventListener("click", z), window.addEventListener("resize", q), window.addEventListener("orientationchange", q));
    }), Ae(() => {
      window.removeEventListener("click", z), window.removeEventListener("resize", q), window.removeEventListener("orientationchange", q);
    });
    const Ie = () => c.value = !1, ye = () => {
      setTimeout(() => {
        c.value = !0;
      }, 100);
    };
    return a({
      toggle: v,
      close: Ie,
      open: ye
    }), (V, cr) => (i(), I("div", {
      id: n(d),
      ref_key: "panelRef",
      ref: o,
      class: s(n(t)("", ["", c.value ? "active" : "inactive", `size:${n(S)}`])),
      style: Y(`--click-x: ${l.value}px; --click-y: ${u.value}px`)
    }, [
      m("div", {
        class: s(n(t)("trigger")),
        onPointerdown: ie(b, ["stop"]),
        onPointerup: ie(P, ["stop"]),
        onPointerleave: ie(K, ["stop"]),
        onContextmenu: ie(f, ["prevent", "stop"])
      }, [
        h(V.$slots, "default")
      ], 34),
      c.value ? (i(), I("div", {
        key: 0,
        class: s(n(t)("overlay")),
        onPointerdown: ie(Ie, ["stop"])
      }, null, 34)) : p("", !0),
      m("div", {
        class: s(["panel", n(t)("panel", ["", c.value ? "active" : "", n(R)])])
      }, [
        m("div", {
          class: s(n(t)("content"))
        }, [
          h(V.$slots, "content")
        ], 2)
      ], 2)
    ], 14, zt));
  }
}), Er = /* @__PURE__ */ g({
  __name: "ContextMenu",
  props: {
    config: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(r, { expose: a }) {
    const t = H("context-menu"), c = y(), o = r, { menu: l } = {
      ...We,
      ...o.config
    }, u = y(Re(l));
    return ce(() => o.config, (T, d) => {
      if (T) {
        const { menu: R } = {
          ...We,
          ...T
        };
        u.value = Re(R);
      }
    }, { immediate: !0, deep: !0 }), a({
      close: () => {
        var T;
        return (T = c.value) == null ? void 0 : T.close();
      },
      open: () => {
        var T;
        return (T = c.value) == null ? void 0 : T.open();
      },
      toggle: () => {
        var T;
        return (T = c.value) == null ? void 0 : T.toggle();
      }
    }), (T, d) => (i(), N(qt, {
      ref_key: "contextMenuRef",
      ref: c,
      config: r.config,
      class: s(n(t)("", `size-${r.config.size}`))
    }, {
      default: F(() => [
        h(T.$slots, "default")
      ]),
      content: F(() => [
        u.value && c.value ? (i(), N(Qt, {
          key: 0,
          items: u.value,
          "context-menu": c.value
        }, null, 8, ["items", "context-menu"])) : p("", !0)
      ]),
      _: 3
    }, 8, ["config", "class"]));
  }
}), Rr = /* @__PURE__ */ g({
  __name: "Tabs",
  props: {
    modelValue: { default: "" },
    orientation: { default: "horizontal" }
  },
  emits: ["update:modelValue"],
  setup(r, { emit: a }) {
    const t = r, c = a, { bemm: o } = H("tabs"), l = y(t.modelValue), u = C(() => [
      o(),
      o("", t.orientation)
    ]);
    ce(() => t.modelValue, (d) => {
      l.value = d;
    });
    const T = (d) => {
      l.value = d, c("update:modelValue", d);
    };
    return ge("activeTab", l), ge("selectTab", T), (d, R) => (i(), I("div", {
      class: s(u.value)
    }, [
      m("nav", {
        class: s(n(o)("nav")),
        role: "tablist"
      }, [
        h(d.$slots, "tabs")
      ], 2),
      m("div", {
        class: s(n(o)("panels"))
      }, [
        h(d.$slots, "panels")
      ], 2)
    ], 2));
  }
}), jt = ["aria-selected", "aria-controls", "disabled"], pr = /* @__PURE__ */ g({
  __name: "Tab",
  props: {
    id: {},
    label: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(r) {
    const a = r, { bemm: t } = H("tab"), c = _e("activeTab"), o = _e("selectTab"), l = C(() => (c == null ? void 0 : c.value) === a.id), u = C(() => {
      const d = [t()];
      return l.value && d.push(t("", "active")), a.disabled && d.push(t("", "disabled")), a.icon && d.push(t("", "has-icon")), d;
    }), T = () => {
      !a.disabled && o && o(a.id);
    };
    return (d, R) => (i(), I("button", {
      class: s(u.value),
      "aria-selected": l.value,
      "aria-controls": `panel-${a.id}`,
      disabled: a.disabled,
      onClick: T,
      type: "button",
      role: "tab"
    }, [
      a.icon ? (i(), N(U, {
        key: 0,
        name: a.icon,
        class: s(n(t)("icon"))
      }, null, 8, ["name", "class"])) : p("", !0),
      m("span", {
        class: s(n(t)("label"))
      }, L(a.label), 3)
    ], 10, jt));
  }
}), Jt = ["id", "aria-labelledby"], Ar = /* @__PURE__ */ g({
  __name: "TabPanel",
  props: {
    id: {}
  },
  setup(r) {
    const a = r, { bemm: t } = H("tab-panel"), c = _e("activeTab"), o = C(() => (c == null ? void 0 : c.value) === a.id), l = C(() => [t()]);
    return (u, T) => o.value ? (i(), I("div", {
      key: 0,
      id: `panel-${a.id}`,
      class: s(l.value),
      role: "tabpanel",
      "aria-labelledby": a.id
    }, [
      h(u.$slots, "default")
    ], 10, Jt)) : p("", !0);
  }
}), Zt = ["width", "height"], xt = ["cx", "cy", "r", "stroke-width"], ea = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset", "transform-origin"], ta = ["x", "y"], Ge = /* @__PURE__ */ g({
  __name: "CircularProgress",
  props: {
    percentage: {},
    size: { default: 48 },
    strokeWidth: { default: 4 },
    indeterminate: { type: Boolean, default: !1 },
    color: {}
  },
  setup(r) {
    const a = r, { bemm: t } = H("circular-progress"), c = C(() => a.size / 2), o = C(() => (a.size - a.strokeWidth) / 2), l = C(() => 2 * Math.PI * o.value), u = C(() => {
      if (a.indeterminate)
        return l.value * 0.25;
      const R = Math.min(Math.max(a.percentage || 0, 0), 100);
      return l.value - R / 100 * l.value;
    }), T = C(() => a.percentage ? a.percentage === 100 ? "success" : a.percentage >= 90 ? "almost" : a.percentage >= 50 ? "warning" : "danger" : "default"), d = C(() => `${a.size / 100 * 16 * 1.75}px`);
    return (R, _) => (i(), I("svg", {
      width: R.size,
      height: R.size,
      class: s(n(t)())
    }, [
      m("circle", {
        class: s(n(t)("track")),
        cx: c.value,
        cy: c.value,
        r: o.value,
        "stroke-width": R.strokeWidth,
        fill: "none"
      }, null, 10, xt),
      m("circle", {
        class: s([n(t)("fill", ["", R.color || T.value]), R.indeterminate && n(t)("fill", "indeterminate")]),
        cx: c.value,
        cy: c.value,
        r: o.value,
        "stroke-width": R.strokeWidth,
        fill: "none",
        "stroke-dasharray": l.value,
        "stroke-dashoffset": u.value,
        transform: "rotate(-90)",
        "transform-origin": `${c.value} ${c.value}`
      }, null, 10, ea),
      !R.indeterminate && R.percentage !== void 0 ? (i(), I("text", {
        key: 0,
        x: c.value,
        y: c.value,
        class: s(n(t)("text", ["", R.color || T.value])),
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        style: Y({ fontSize: d.value })
      }, L(Math.round(R.percentage)) + "% ", 15, ta)) : p("", !0)
    ], 10, Zt));
  }
}), Tr = /* @__PURE__ */ g({
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
  setup(r) {
    const a = r, { bemm: t } = H("stats-card"), c = {
      small: 32,
      medium: 48,
      large: 64
    }, o = {
      small: 3,
      medium: 4,
      large: 5
    }, l = C(() => a.formatter ? a.formatter(a.value) : a.layout === "progress-circle" || a.layout === "progress-bar" ? `${u.value}%` : a.value.toString()), u = C(() => a.percentage !== void 0 ? Math.min(100, Math.max(0, a.percentage)) : a.total !== void 0 && typeof a.value == "number" ? Math.min(100, Math.max(0, a.value / a.total * 100)) : 0), T = C(() => {
      const R = u.value;
      return R >= 90 ? "success" : R >= 70 ? "info" : R >= 50 ? "warning" : "error";
    }), d = C(() => {
      switch (a.variant) {
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
    return (R, _) => (i(), N(n(at), {
      variant: d.value,
      hoverable: R.isClickable,
      class: s(n(t)("", ["", R.size]))
    }, {
      default: F(() => [
        R.layout === "icon" ? (i(), I(B, { key: 0 }, [
          m("div", {
            class: s(n(t)("icon-container", { loading: R.isLoading }))
          }, [
            R.isLoading ? (i(), N(n(Ge), {
              key: 0,
              size: c[R.size],
              "stroke-width": 2,
              indeterminate: ""
            }, null, 8, ["size"])) : (i(), I("div", {
              key: 1,
              class: s(n(t)("icon", ["", R.color]))
            }, [
              M(n(U), {
                name: R.icon || "chart-bar"
              }, null, 8, ["name"])
            ], 2))
          ], 2),
          m("div", {
            class: s(n(t)("content"))
          }, [
            m("span", {
              class: s(n(t)("value"))
            }, L(l.value), 3),
            m("span", {
              class: s(n(t)("label"))
            }, L(R.label), 3)
          ], 2)
        ], 64)) : R.layout === "progress-circle" ? (i(), I(B, { key: 1 }, [
          m("div", {
            class: s(n(t)("progress-container"))
          }, [
            M(n(Ge), {
              percentage: u.value,
              size: c[R.size],
              "stroke-width": o[R.size],
              color: T.value
            }, null, 8, ["percentage", "size", "stroke-width", "color"])
          ], 2),
          m("div", {
            class: s(n(t)("content"))
          }, [
            m("span", {
              class: s(n(t)("value"))
            }, L(l.value), 3),
            m("span", {
              class: s(n(t)("label"))
            }, L(R.label), 3)
          ], 2)
        ], 64)) : R.layout === "progress-bar" ? (i(), I(B, { key: 2 }, [
          m("div", {
            class: s(n(t)("header"))
          }, [
            m("span", {
              class: s(n(t)("label"))
            }, L(R.label), 3),
            m("span", {
              class: s(n(t)("value"))
            }, L(l.value), 3)
          ], 2),
          m("div", {
            class: s(n(t)("progress-bar"))
          }, [
            m("div", {
              class: s(n(t)("progress-fill", ["", R.color])),
              style: Y({ width: `${u.value}%` })
            }, null, 6)
          ], 2)
        ], 64)) : R.layout === "compact" ? (i(), I(B, { key: 3 }, [
          R.icon ? (i(), N(n(U), {
            key: 0,
            name: R.icon,
            class: s(n(t)("compact-icon", ["", R.color]))
          }, null, 8, ["name", "class"])) : p("", !0),
          m("span", {
            class: s(n(t)("compact-value"))
          }, L(l.value), 3),
          R.label ? (i(), I("span", {
            key: 1,
            class: s(n(t)("compact-label"))
          }, L(R.label), 3)) : p("", !0)
        ], 64)) : p("", !0),
        R.$slots.action ? (i(), I("div", {
          key: 4,
          class: s(n(t)("action"))
        }, [
          h(R.$slots, "action")
        ], 2)) : p("", !0)
      ]),
      _: 3
    }, 8, ["variant", "hoverable", "class"]));
  }
}), mr = /* @__PURE__ */ g({
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
  setup(r, { emit: a }) {
    const t = r, c = a, { bemm: o } = H("option-item"), l = (u) => {
      t.clickable && c("click", u);
    };
    return (u, T) => (i(), I("div", {
      class: s([
        n(o)(),
        u.clickable && n(o)("", "clickable"),
        u.selected && n(o)("", "selected")
      ]),
      onClick: l
    }, [
      m("div", {
        class: s(n(o)("content"))
      }, [
        u.icon || u.$slots.icon ? (i(), I("div", {
          key: 0,
          class: s(n(o)("icon"))
        }, [
          h(u.$slots, "icon", {}, () => [
            u.icon ? (i(), N(n(U), {
              key: 0,
              name: u.icon
            }, null, 8, ["name"])) : p("", !0)
          ])
        ], 2)) : p("", !0),
        m("div", {
          class: s(n(o)("info"))
        }, [
          u.label || u.$slots.label ? (i(), I("div", {
            key: 0,
            class: s(n(o)("label"))
          }, [
            h(u.$slots, "label", {}, () => [
              X(L(u.label), 1)
            ])
          ], 2)) : p("", !0),
          u.value || u.description || u.$slots.default ? (i(), I("div", {
            key: 1,
            class: s(n(o)("value"))
          }, [
            h(u.$slots, "default", {}, () => [
              X(L(u.value || u.description), 1)
            ])
          ], 2)) : p("", !0)
        ], 2)
      ], 2),
      u.$slots.actions || u.showArrow ? (i(), I("div", {
        key: 0,
        class: s(n(o)("actions"))
      }, [
        h(u.$slots, "actions", {}, () => [
          u.showArrow ? (i(), N(n(U), {
            key: 0,
            name: "chevron-right",
            class: s(n(o)("arrow"))
          }, null, 8, ["class"])) : p("", !0)
        ])
      ], 2)) : p("", !0)
    ], 2));
  }
}), aa = ["stroke-dasharray"], Or = /* @__PURE__ */ g({
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
  setup(r) {
    const a = r, { bemm: t } = H("progress"), c = C(() => a.max === 0 ? 0 : Math.min(100, Math.max(0, a.value / a.max * 100)));
    return (o, l) => (i(), I("div", {
      class: s(n(t)("", [`type-${o.type}`, `size-${o.size}`]))
    }, [
      o.type === "linear" && o.showBar ? (i(), I("div", {
        key: 0,
        class: s(n(t)("bar"))
      }, [
        m("div", {
          class: s(n(t)("fill", {
            indeterminate: o.indeterminate,
            [`variant-${o.variant}`]: !0
          })),
          style: Y(o.indeterminate ? void 0 : { width: `${c.value}%` })
        }, [
          o.showPercentageInBar && !o.indeterminate ? (i(), I("span", {
            key: 0,
            class: s(n(t)("bar-label"))
          }, L(Math.round(c.value)) + "% ", 3)) : p("", !0)
        ], 6)
      ], 2)) : p("", !0),
      o.type === "circular" ? (i(), I("div", {
        key: 1,
        class: s(n(t)("circular"))
      }, [
        (i(), I("svg", {
          class: s(n(t)("circular-svg")),
          viewBox: "0 0 100 100"
        }, [
          m("circle", {
            class: s(n(t)("circular-track")),
            cx: "50",
            cy: "50",
            r: "45",
            fill: "none",
            "stroke-width": "6"
          }, null, 2),
          m("circle", {
            class: s(n(t)("circular-fill", {
              indeterminate: o.indeterminate,
              [`variant-${o.variant}`]: !0
            })),
            cx: "50",
            cy: "50",
            r: "45",
            fill: "none",
            "stroke-width": "6",
            "stroke-dasharray": o.indeterminate ? "212.25 70.75" : `${c.value * 2.83} 283`,
            style: Y(o.indeterminate ? { animation: "circular-indeterminate 1.4s ease-in-out infinite" } : void 0)
          }, null, 14, aa)
        ], 2)),
        o.showPercentage && !o.indeterminate ? (i(), I("div", {
          key: 0,
          class: s(n(t)("circular-label"))
        }, L(Math.round(c.value)) + "% ", 3)) : p("", !0)
      ], 2)) : p("", !0),
      o.label || o.showPercentage ? (i(), I("div", {
        key: 2,
        class: s(n(t)("label"))
      }, [
        o.label ? (i(), I("span", {
          key: 0,
          class: s(n(t)("label-text"))
        }, L(o.label), 3)) : p("", !0),
        o.showPercentage && !o.showPercentageInBar ? (i(), I("span", {
          key: 1,
          class: s(n(t)("label-percentage"))
        }, L(Math.round(c.value)) + "% ", 3)) : p("", !0)
      ], 2)) : p("", !0),
      o.details && o.details.length > 0 ? (i(), I("div", {
        key: 3,
        class: s(n(t)("details"))
      }, [
        (i(!0), I(B, null, W(o.details, (u, T) => (i(), I("span", {
          key: T,
          class: s(n(t)("detail"))
        }, L(u), 3))), 128))
      ], 2)) : p("", !0),
      o.$slots.default ? (i(), I("div", {
        key: 4,
        class: s(n(t)("content"))
      }, [
        h(o.$slots, "default")
      ], 2)) : p("", !0)
    ], 2));
  }
}), ra = ["aria-label"], oa = /* @__PURE__ */ g({
  __name: "ThemeToggle",
  props: {
    theme: { default: "light" }
  },
  emits: ["toggle"],
  setup(r) {
    const a = r, { bemm: t } = H("theme-toggle"), c = C(() => a.theme === "system" ? "monitor" : a.theme === "dark" ? "sun" : "moon");
    return (o, l) => (i(), I("button", {
      class: s(n(t)()),
      onClick: l[0] || (l[0] = (u) => o.$emit("toggle")),
      "aria-label": o.theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      type: "button"
    }, [
      M(n(U), { name: c.value }, null, 8, ["name"])
    ], 10, ra));
  }
});
let Ke = 0;
function na(r = "id") {
  return Ke++, `${r}-${Ke}`;
}
const ia = { class: "input-wrapper" }, sa = ["for"], ca = {
  key: 0,
  class: "input-required"
}, la = {
  key: 1,
  class: "input-description"
}, ua = ["id", "type", "placeholder", "disabled", "readonly", "required"], Ia = ["title"], da = {
  key: 2,
  class: "input-errors"
}, Se = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "BaseInput",
  props: /* @__PURE__ */ re({
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
  emits: /* @__PURE__ */ re(["focus", "blur", "input", "change", "clear", "touched"], ["update:modelValue"]),
  setup(r, { emit: a }) {
    const t = r, c = na("input"), o = De(r, "modelValue"), l = a, u = (_) => {
      const E = _.target;
      o.value = E.value, l("input", _);
    }, T = C(() => [
      "input-container",
      `input-container--${t.size}`,
      `input-container--${t.variant}`,
      t.disabled && "input-container--disabled",
      t.readonly && "input-container--readonly",
      t.error && "input-container--error",
      t.prefixIcon && "input-container--has-prefix",
      t.suffixIcon && "input-container--has-suffix",
      t.clearable && o.value && "input-container--has-clear"
    ]), d = C(() => [
      "input",
      `input--${t.size}`,
      `input--${t.variant}`
    ]), R = () => {
      o.value = "", l("clear");
    };
    return (_, E) => (i(), I("div", ia, [
      _.label ? (i(), I("label", {
        key: 0,
        for: n(c),
        class: "input-label"
      }, [
        X(L(_.label) + " ", 1),
        _.required ? (i(), I("span", ca, "*")) : p("", !0)
      ], 8, sa)) : p("", !0),
      _.description ? (i(), I("div", la, L(_.description), 1)) : p("", !0),
      m("div", {
        class: s(["input-container", T.value])
      }, [
        h(_.$slots, "control", {
          id: n(c),
          value: o.value,
          disabled: _.disabled,
          handleInput: u
        }, () => [
          _.prefixIcon ? (i(), N(n(U), {
            key: 0,
            name: _.prefixIcon,
            class: "input-icon input-icon--prefix"
          }, null, 8, ["name"])) : p("", !0),
          st(m("input", te({
            id: n(c),
            "onUpdate:modelValue": E[0] || (E[0] = (A) => o.value = A),
            type: _.type,
            placeholder: _.placeholder,
            disabled: _.disabled,
            readonly: _.readonly,
            required: _.required,
            class: d.value
          }, _.$attrs, {
            onFocus: E[1] || (E[1] = (A) => _.$emit("focus", A)),
            onBlur: E[2] || (E[2] = (A) => _.$emit("blur", A)),
            onInput: u,
            onChange: E[3] || (E[3] = (A) => _.$emit("change", A))
          }), null, 16, ua), [
            [ct, o.value]
          ]),
          _.suffixIcon ? (i(), N(n(U), {
            key: 1,
            name: _.suffixIcon,
            class: "input-icon input-icon--suffix"
          }, null, 8, ["name"])) : p("", !0),
          _.clearable && o.value ? (i(), I("button", {
            key: 2,
            type: "button",
            class: "input-clear",
            onClick: R,
            title: _.clearTitle
          }, [
            M(n(U), { name: "multiply" })
          ], 8, Ia)) : p("", !0)
        ])
      ], 2),
      _.error && _.error.length ? (i(), I("div", da, [
        (i(!0), I(B, null, W(_.error, (A) => (i(), I("div", {
          key: A,
          class: "input-error"
        }, L(A), 1))), 128))
      ])) : p("", !0)
    ]));
  }
}), Lr = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "SearchInput",
  props: /* @__PURE__ */ re({
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
  emits: /* @__PURE__ */ re(["focus", "blur", "input", "change", "clear"], ["update:modelValue"]),
  setup(r) {
    const a = De(r, "modelValue");
    return (t, c) => (i(), N(n(Se), te({
      modelValue: a.value,
      "onUpdate:modelValue": c[0] || (c[0] = (o) => a.value = o),
      type: "search",
      "prefix-icon": "search",
      clearable: t.clearable
    }, t.$attrs, {
      onFocus: c[1] || (c[1] = (o) => t.$emit("focus", o)),
      onBlur: c[2] || (c[2] = (o) => t.$emit("blur", o)),
      onInput: c[3] || (c[3] = (o) => t.$emit("input", o)),
      onChange: c[4] || (c[4] = (o) => t.$emit("change", o)),
      onClear: c[5] || (c[5] = (o) => t.$emit("clear"))
    }), null, 16, ["modelValue", "clearable"]));
  }
}), _a = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "TextInput",
  props: /* @__PURE__ */ re({
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
  emits: /* @__PURE__ */ re(["focus", "blur", "input", "change", "clear"], ["update:modelValue"]),
  setup(r) {
    const a = De(r, "modelValue");
    return (t, c) => (i(), N(n(Se), te({
      modelValue: a.value,
      "onUpdate:modelValue": c[0] || (c[0] = (o) => a.value = o),
      type: "text"
    }, t.$attrs, {
      onFocus: c[1] || (c[1] = (o) => t.$emit("focus", o)),
      onBlur: c[2] || (c[2] = (o) => t.$emit("blur", o)),
      onInput: c[3] || (c[3] = (o) => t.$emit("input", o)),
      onChange: c[4] || (c[4] = (o) => t.$emit("change", o)),
      onClear: c[5] || (c[5] = (o) => t.$emit("clear"))
    }), null, 16, ["modelValue"]));
  }
}), Ea = ["id", "value", "disabled", "onInput", "onChange"], Ra = {
  key: 0,
  value: ""
}, pa = ["value"], Aa = ["label"], Ta = ["value"], ma = ["id", "value", "disabled", "onChange"], Oa = {
  key: 0,
  value: ""
}, La = ["value"], wa = ["label"], Sa = ["value"], Ne = "select-input", wr = /* @__PURE__ */ g({
  __name: "SelectInput",
  props: /* @__PURE__ */ re({
    modelValue: {},
    label: { default: "" },
    description: { default: "" },
    options: { default: () => [] },
    error: { default: () => [] },
    size: { default: he.MEDIUM },
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
  emits: /* @__PURE__ */ re(["update:modelValue", "change", "touched", "focus", "blur"], ["update:modelValue"]),
  setup(r, { emit: a }) {
    const t = De(r, "modelValue"), c = r, o = a, l = H(Ne), u = (E) => typeof E == "string" ? {
      label: E,
      value: E
    } : E && typeof E == "object" && ("label" in E || "value" in E) ? {
      label: E.label || E.value || "",
      value: E.value || E.label || "",
      disabled: E.disabled,
      icon: E.icon
    } : (console.warn("Invalid option format:", E), {
      label: String(E),
      value: String(E)
    }), T = (E) => !E || !Array.isArray(E) ? !1 : E.some((A) => typeof A == "object" && "title" in A && "options" in A), d = y(T(c.options)), R = C(() => T(c.options) ? c.options.map((E) => ({
      title: E.title,
      options: E.options.map((A) => u(A))
    })) : c.options.map((E) => u(E))), _ = (E) => {
      const O = E.target.value, S = c.allowNull && O === "" ? null : O;
      o("change", S);
    };
    return (E, A) => t.value !== void 0 ? (i(), N(Se, {
      key: 0,
      modelValue: t.value ?? void 0,
      block: Ne,
      label: E.label,
      description: E.description,
      error: E.error,
      size: E.size,
      disabled: E.disabled,
      "onUpdate:modelValue": A[0] || (A[0] = (O) => t.value = O ?? null),
      onChange: _,
      onTouched: A[1] || (A[1] = (O) => E.$emit("touched", O))
    }, {
      control: F(({ id: O, value: S, disabled: w, handleInput: G }) => [
        m("select", {
          id: O,
          value: S ?? "",
          class: s(n(l)("control")),
          disabled: w,
          onInput: G,
          onChange: G
        }, [
          E.allowNull ? (i(), I("option", Ra, L(E.nullLabel), 1)) : p("", !0),
          d.value ? p("", !0) : (i(!0), I(B, { key: 1 }, W(R.value, (k) => (i(), I("option", {
            key: k.value,
            value: k.value
          }, L(k.label), 9, pa))), 128)),
          d.value ? (i(!0), I(B, { key: 2 }, W(R.value, (k) => (i(), I("optgroup", {
            key: k.title,
            label: k.title
          }, [
            (i(!0), I(B, null, W(k.options, (D) => (i(), I("option", {
              key: D.value,
              value: D.value
            }, L(D.label), 9, Ta))), 128))
          ], 8, Aa))), 128)) : p("", !0)
        ], 42, Ea)
      ]),
      _: 1
    }, 8, ["modelValue", "label", "description", "error", "size", "disabled"])) : (i(), N(Se, {
      key: 1,
      modelValue: c.modelValue ?? void 0,
      block: Ne,
      label: E.label,
      description: E.description,
      error: E.error,
      size: E.size,
      disabled: E.disabled,
      "onUpdate:modelValue": A[2] || (A[2] = (O) => E.$emit("update:modelValue", O)),
      onChange: _,
      onTouched: A[3] || (A[3] = (O) => E.$emit("touched", O))
    }, {
      control: F(({ id: O, value: S, disabled: w, handleInput: G }) => [
        m("select", {
          id: O,
          value: S ?? "",
          class: s(n(l)("control")),
          disabled: w,
          onChange: (k) => {
            G(k), _(k);
          }
        }, [
          E.allowNull ? (i(), I("option", Oa, L(E.nullLabel), 1)) : p("", !0),
          d.value ? p("", !0) : (i(!0), I(B, { key: 1 }, W(R.value, (k) => (i(), I("option", {
            key: k.value,
            value: k.value
          }, L(k.label), 9, La))), 128)),
          d.value ? (i(!0), I(B, { key: 2 }, W(R.value, (k) => (i(), I("optgroup", {
            key: k.title,
            label: k.title
          }, [
            (i(!0), I(B, null, W(k.options, (D) => (i(), I("option", {
              key: D.value,
              value: D.value
            }, L(D.label), 9, Sa))), 128))
          ], 8, wa))), 128)) : p("", !0)
        ], 42, ma)
      ]),
      _: 1
    }, 8, ["modelValue", "label", "description", "error", "size", "disabled"]));
  }
}), Da = ["value", "placeholder", "disabled", "readonly", "maxlength", "spellcheck"], Sr = /* @__PURE__ */ g({
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
  setup(r, { emit: a }) {
    const t = r, c = a, o = H("t-input-textarea"), l = y(), u = `textarea-${Math.random().toString(36).substr(2, 9)}`, T = y(0), d = y(0), R = C(() => {
      const O = {};
      return t.autoGrow && T.value && (O.height = `${T.value}px`), t.minRows && d.value && (O.minHeight = `${t.minRows * d.value}px`), t.maxRows && d.value && (O.maxHeight = `${t.maxRows * d.value}px`), O;
    }), _ = (O) => {
      if (!t.autoGrow) return;
      if (O.style.height = "auto", !d.value) {
        const w = window.getComputedStyle(O);
        d.value = parseInt(w.lineHeight);
      }
      let S = O.scrollHeight;
      if (t.minRows && d.value) {
        const w = t.minRows * d.value;
        S = Math.max(S, w);
      }
      if (t.maxRows && d.value) {
        const w = t.maxRows * d.value;
        S = Math.min(S, w);
      }
      T.value = S;
    }, E = (O) => {
      const S = O.target, w = S.value;
      c("update:modelValue", w), c("change", w), t.autoGrow && _(S);
    }, A = (O) => {
      O.key === "Enter" && !O.shiftKey && !O.ctrlKey && !O.metaKey && c("submit", O);
    };
    return ae(() => {
      if (l.value) {
        const O = window.getComputedStyle(l.value);
        d.value = parseInt(O.lineHeight), t.autoGrow && (T.value = t.minRows * d.value, t.modelValue && _(l.value));
      }
    }), (O, S) => (i(), I("div", {
      class: s(n(o)())
    }, [
      O.label ? (i(), I("label", {
        key: 0,
        for: u,
        class: s(n(o)("label"))
      }, L(O.label), 3)) : p("", !0),
      m("div", {
        class: s(n(o)("control-wrapper"))
      }, [
        m("textarea", {
          id: u,
          ref_key: "control",
          ref: l,
          value: O.modelValue,
          style: Y(R.value),
          class: s([n(o)("control"), { "no-resize": !O.allowResize }]),
          placeholder: O.placeholder,
          disabled: O.disabled,
          readonly: O.readonly,
          maxlength: O.maxlength,
          spellcheck: O.spellcheck,
          onInput: E,
          onFocus: S[0] || (S[0] = (w) => O.$emit("focus", w)),
          onBlur: S[1] || (S[1] = (w) => O.$emit("blur", w)),
          onKeydown: A
        }, null, 46, Da)
      ], 2),
      O.description || O.showCount ? (i(), I("div", {
        key: 1,
        class: s(n(o)("footer"))
      }, [
        O.description ? (i(), I("p", {
          key: 0,
          class: s(n(o)("description"))
        }, L(O.description), 3)) : p("", !0),
        O.showCount && O.maxlength ? (i(), I("span", {
          key: 1,
          class: s(n(o)("count"))
        }, L((O.modelValue || "").length) + "/" + L(O.maxlength), 3)) : p("", !0)
      ], 2)) : p("", !0)
    ], 2));
  }
}), Ve = /* @__PURE__ */ g({
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
  setup(r, { emit: a }) {
    const t = r, c = _e("tableType", "table"), o = C(() => t.as ? t.as : c === "table" ? "tr" : "div"), l = a, { bemm: u } = H("table-row"), T = C(() => {
      const _ = [u()];
      return t.clickable && _.push(u("", "clickable")), t.selected && _.push(u("", "selected")), o.value === "div" && _.push(u("", "div")), t.expandable && _.push(u("", "expandable")), t.expanded && _.push(u("", "expanded")), t.level && t.level > 0 && _.push(u("", `level-${t.level}`)), _;
    }), d = C(() => o.value === "div" && t.columns ? {
      display: "grid",
      gridTemplateColumns: t.columns
    } : {}), R = (_) => {
      t.clickable && l("click", _);
    };
    return (_, E) => (i(), N(j(o.value), {
      class: s(T.value),
      style: Y(d.value),
      onClick: R
    }, {
      default: F(() => [
        h(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), $e = /* @__PURE__ */ g({
  __name: "TableCell",
  props: {
    align: { default: "left" },
    nowrap: { type: Boolean, default: !1 },
    as: {},
    className: {}
  },
  setup(r) {
    const a = r, t = _e("tableType", "table"), c = C(() => a.as ? a.as : t === "table" ? "td" : "div"), { bemm: o } = H("table-cell"), l = C(() => {
      const u = [o()];
      return a.align !== "left" && u.push(o("", `align-${a.align}`)), a.nowrap && u.push(o("", "nowrap")), u;
    });
    return (u, T) => (i(), N(j(c.value), {
      class: s([l.value, a.className])
    }, {
      default: F(() => [
        h(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ca = ["onClick"], fa = ["onClick"], ha = {
  key: 1,
  style: { width: "24px" }
}, Na = ["onClick"], ga = {
  key: 1,
  style: { width: "24px" }
}, Dr = /* @__PURE__ */ g({
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
  setup(r, { emit: a }) {
    const t = r, c = a;
    ge("tableType", t.as);
    const o = y(/* @__PURE__ */ new Set());
    je(() => {
      if (t.expandedKeys)
        o.value = new Set(
          (Array.isArray(t.expandedKeys), t.expandedKeys)
        );
      else if (t.defaultExpandAll && t.data) {
        const D = /* @__PURE__ */ new Set(), b = (f, P = "") => {
          f.forEach((K, v) => {
            var q;
            const z = d(K, v);
            ((q = K[t.childrenKey]) == null ? void 0 : q.length) > 0 && (D.add(z), b(K[t.childrenKey], `${P}${v}-`));
          });
        };
        b(t.data), o.value = D;
      }
    });
    const { bemm: l } = H("table"), u = C(() => {
      const D = [l()];
      return t.striped && D.push(l("", "striped")), t.hover && D.push(l("", "hover")), t.bordered && D.push(l("", "bordered")), t.compact && D.push(l("", "compact")), D;
    }), T = C(() => t.columns ? t.columns.map((D) => D.width || "1fr").join(" ") : ""), d = (D, b) => t.rowKey ? typeof t.rowKey == "function" ? t.rowKey(D, b) : String(D[t.rowKey]) : String(b), R = (D, b) => t.selectedKey === void 0 ? !1 : d(D, b) === String(t.selectedKey), _ = (D, b) => {
      t.clickable && c("row-click", D, b);
    }, E = (D, b) => {
      const f = [];
      return t.clickable && f.push(l("row", "clickable")), R(D, b) && f.push(l("row", "selected")), f;
    }, A = (D) => {
      const b = ["header-cell"];
      return D.align && D.align !== "left" && b.push(`align-${D.align}`), D.sortable && b.push("sortable"), b;
    }, O = (D) => {
      const b = [];
      return D.align && D.align !== "left" && b.push(`align-${D.align}`), b;
    }, S = (D, b) => {
      const f = d(D, b);
      return o.value.has(f);
    }, w = (D, b) => {
      const f = d(D, b), P = new Set(o.value);
      P.has(f) ? P.delete(f) : P.add(f), o.value = P, c("expand", !o.value.has(f), D);
    }, G = (D) => {
      var b;
      return t.childrenKey ? ((b = D[t.childrenKey]) == null ? void 0 : b.length) > 0 : !1;
    }, k = C(() => {
      var f;
      if (!t.data || !t.childrenKey || !t.expandable)
        return ((f = t.data) == null ? void 0 : f.map((P, K) => ({ item: P, index: K, level: 0 }))) || [];
      const D = [], b = (P, K = 0, v = "") => {
        P.forEach((z, q) => {
          D.push({ item: z, index: q, level: K, parentIndex: v }), G(z) && S(z, q) && b(z[t.childrenKey], K + 1, `${v}${q}-`);
        });
      };
      return b(t.data), D;
    });
    return (D, b) => (i(), I("div", {
      class: s(n(l)("wrapper"))
    }, [
      (i(), N(j(t.as), {
        class: s(u.value)
      }, {
        default: F(() => [
          t.columns && t.data ? (i(), I(B, { key: 0 }, [
            t.as === "table" ? (i(), I("thead", {
              key: 0,
              class: s(n(l)("head"))
            }, [
              m("tr", null, [
                (i(!0), I(B, null, W(t.columns, (f) => (i(), I("th", {
                  key: f.key,
                  style: Y({ width: f.width }),
                  class: s(A(f))
                }, L(f.label), 7))), 128))
              ])
            ], 2)) : (i(), I("div", {
              key: 1,
              class: s(n(l)("head"))
            }, [
              M(Ve, { columns: T.value }, {
                default: F(() => [
                  (i(!0), I(B, null, W(t.columns, (f) => (i(), N($e, {
                    key: f.key,
                    align: f.align,
                    class: "header-cell"
                  }, {
                    default: F(() => [
                      X(L(f.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["align"]))), 128))
                ]),
                _: 1
              }, 8, ["columns"])
            ], 2)),
            t.as === "table" ? (i(), I("tbody", {
              key: 2,
              class: s(n(l)("body"))
            }, [
              (i(!0), I(B, null, W(k.value, ({ item: f, index: P, level: K }) => (i(), I("tr", {
                key: d(f, P),
                class: s(E(f, P)),
                onClick: (v) => _(f, P)
              }, [
                (i(!0), I(B, null, W(t.columns, (v, z) => (i(), I("td", {
                  key: v.key,
                  class: s(O(v))
                }, [
                  z === 0 && t.expandable ? (i(), I("div", {
                    key: 0,
                    style: Y({ paddingLeft: `${K * t.indentSize}px`, display: "flex", alignItems: "center", gap: "8px" })
                  }, [
                    G(f) ? (i(), I("button", {
                      key: 0,
                      onClick: ie((q) => w(f, P), ["stop"]),
                      class: "expand-button",
                      type: "button"
                    }, [
                      M(n(U), {
                        name: S(f, P) ? "chevron-down" : "chevron-right"
                      }, null, 8, ["name"])
                    ], 8, fa)) : (i(), I("span", ha)),
                    v.render ? (i(), N(j(v.render(f[v.key], f, P, K)), { key: 2 })) : (i(), I(B, { key: 3 }, [
                      X(L(f[v.key]), 1)
                    ], 64))
                  ], 4)) : (i(), I(B, { key: 1 }, [
                    v.render ? (i(), N(j(v.render(f[v.key], f, P, K)), { key: 0 })) : (i(), I(B, { key: 1 }, [
                      X(L(f[v.key]), 1)
                    ], 64))
                  ], 64))
                ], 2))), 128))
              ], 10, Ca))), 128))
            ], 2)) : (i(), I("div", {
              key: 3,
              class: s(n(l)("body"))
            }, [
              (i(!0), I(B, null, W(k.value, ({ item: f, index: P, level: K }) => (i(), N(Ve, {
                key: d(f, P),
                columns: T.value,
                clickable: t.clickable,
                selected: R(f, P),
                level: K,
                expandable: t.expandable && G(f),
                expanded: S(f, P),
                onClick: (v) => _(f, P)
              }, {
                default: F(() => [
                  (i(!0), I(B, null, W(t.columns, (v, z) => (i(), N($e, {
                    key: v.key,
                    align: v.align
                  }, {
                    default: F(() => [
                      z === 0 && t.expandable ? (i(), I("div", {
                        key: 0,
                        style: Y({ paddingLeft: `${K * t.indentSize}px`, display: "flex", alignItems: "center", gap: "8px" })
                      }, [
                        G(f) ? (i(), I("button", {
                          key: 0,
                          onClick: ie((q) => w(f, P), ["stop"]),
                          class: "expand-button",
                          type: "button"
                        }, [
                          M(n(U), {
                            name: S(f, P) ? "chevron-down" : "chevron-right"
                          }, null, 8, ["name"])
                        ], 8, Na)) : (i(), I("span", ga)),
                        v.render ? (i(), N(j(v.render(f[v.key], f, P, K)), { key: 2 })) : (i(), I(B, { key: 3 }, [
                          X(L(f[v.key]), 1)
                        ], 64))
                      ], 4)) : (i(), I(B, { key: 1 }, [
                        v.render ? (i(), N(j(v.render(f[v.key], f, P, K)), { key: 0 })) : (i(), I(B, { key: 1 }, [
                          X(L(f[v.key]), 1)
                        ], 64))
                      ], 64))
                    ]),
                    _: 2
                  }, 1032, ["align"]))), 128))
                ]),
                _: 2
              }, 1032, ["columns", "clickable", "selected", "level", "expandable", "expanded", "onClick"]))), 128))
            ], 2))
          ], 64)) : (i(), I(B, { key: 1 }, [
            D.$slots.header && t.as === "table" ? (i(), I("thead", {
              key: 0,
              class: s(n(l)("head"))
            }, [
              h(D.$slots, "header")
            ], 2)) : p("", !0),
            D.$slots.header && t.as === "div" ? (i(), I("div", {
              key: 1,
              class: s(n(l)("head"))
            }, [
              h(D.$slots, "header")
            ], 2)) : p("", !0),
            t.as === "table" ? (i(), I("tbody", {
              key: 2,
              class: s(n(l)("body"))
            }, [
              h(D.$slots, "default")
            ], 2)) : p("", !0),
            t.as === "div" ? (i(), I("div", {
              key: 3,
              class: s(n(l)("body"))
            }, [
              h(D.$slots, "default")
            ], 2)) : p("", !0),
            D.$slots.footer && t.as === "table" ? (i(), I("tfoot", {
              key: 4,
              class: s(n(l)("foot"))
            }, [
              h(D.$slots, "footer")
            ], 2)) : p("", !0),
            D.$slots.footer && t.as === "div" ? (i(), I("div", {
              key: 5,
              class: s(n(l)("foot"))
            }, [
              h(D.$slots, "footer")
            ], 2)) : p("", !0)
          ], 64))
        ]),
        _: 3
      }, 8, ["class"]))
    ], 2));
  }
}), va = ["data-variant"], Cr = /* @__PURE__ */ g({
  __name: "Section",
  props: {
    variant: { default: "default" },
    centered: { type: Boolean, default: !1 },
    noContainer: { type: Boolean, default: !1 },
    maxWidth: {},
    padding: {},
    fluid: { type: Boolean }
  },
  setup(r) {
    const a = r, { bemm: t } = H("section"), c = {
      maxWidth: a.maxWidth,
      padding: a.padding,
      fluid: a.fluid
    };
    return (o, l) => (i(), I("section", {
      class: s(n(t)("", ["", o.centered ? "centered" : ""])),
      "data-variant": o.variant
    }, [
      h(o.$slots, "before"),
      o.noContainer ? h(o.$slots, "default", { key: 1 }) : (i(), N(n(Gt), te({
        key: 0,
        class: n(t)("container")
      }, c), {
        default: F(() => [
          h(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ], 10, va));
  }
}), fr = /* @__PURE__ */ g({
  __name: "PageHeader",
  props: {
    title: {},
    description: {}
  },
  setup(r) {
    const a = pe(), { bemm: t } = H("page-header"), c = C(() => !!a.actions);
    return (o, l) => (i(), I("div", {
      class: s(n(t)())
    }, [
      m("div", {
        class: s(n(t)("content"))
      }, [
        m("div", {
          class: s(n(t)("left"))
        }, [
          m("h1", {
            class: s(n(t)("title"))
          }, L(o.title), 3),
          o.description ? (i(), I("p", {
            key: 0,
            class: s(n(t)("description"))
          }, L(o.description), 3)) : p("", !0)
        ], 2),
        c.value ? (i(), I("div", {
          key: 0,
          class: s(n(t)("actions"))
        }, [
          h(o.$slots, "actions")
        ], 2)) : p("", !0)
      ], 2)
    ], 2));
  }
}), Ba = ["href"], Ha = ["href", "target", "rel"], hr = /* @__PURE__ */ g({
  __name: "AppHeader",
  props: {
    logo: {},
    navItems: {},
    showThemeToggle: { type: Boolean, default: !0 },
    showSettings: { type: Boolean, default: !1 }
  },
  emits: ["settings-click"],
  setup(r) {
    const { bemm: a } = H("app-header");
    return (t, c) => (i(), I("header", {
      class: s(n(a)())
    }, [
      m("div", {
        class: s(n(a)("container"))
      }, [
        m("div", {
          class: s(n(a)("logo"))
        }, [
          h(t.$slots, "logo", {}, () => [
            t.logo ? (i(), I("a", {
              key: 0,
              href: t.logo.href || "#",
              class: s(n(a)("logo-link"))
            }, [
              t.logo.icon ? (i(), N(n(U), {
                key: 0,
                name: t.logo.icon,
                class: s(n(a)("logo-icon"))
              }, null, 8, ["name", "class"])) : p("", !0),
              t.logo.text ? (i(), I("span", {
                key: 1,
                class: s(n(a)("logo-text"))
              }, L(t.logo.text), 3)) : p("", !0)
            ], 10, Ba)) : p("", !0)
          ])
        ], 2),
        t.navItems && t.navItems.length ? (i(), I("nav", {
          key: 0,
          class: s(n(a)("nav"))
        }, [
          (i(!0), I(B, null, W(t.navItems, (o) => h(t.$slots, "nav-link", {
            key: o.path || o.href,
            item: o
          }, () => [
            m("a", {
              href: o.href || o.path || "#",
              class: s(n(a)("nav-link")),
              target: o.external ? "_blank" : void 0,
              rel: o.external ? "noopener noreferrer" : void 0
            }, [
              X(L(o.label) + " ", 1),
              o.external ? (i(), N(n(U), {
                key: 0,
                name: "open-in-new",
                class: s(n(a)("nav-link-icon"))
              }, null, 8, ["class"])) : p("", !0)
            ], 10, Ha)
          ])), 128))
        ], 2)) : p("", !0),
        m("div", {
          class: s(n(a)("actions"))
        }, [
          h(t.$slots, "actions", {}, () => [
            t.showThemeToggle ? (i(), N(oa, { key: 0 })) : p("", !0),
            t.showSettings ? (i(), N(n(oe), {
              key: 1,
              variant: "outline",
              size: "small",
              icon: "settings",
              onClick: c[0] || (c[0] = (o) => t.$emit("settings-click"))
            })) : p("", !0)
          ]),
          h(t.$slots, "extra-actions")
        ], 2)
      ], 2)
    ], 2));
  }
}), ba = ["title"], ya = ["href", "title"], Pa = ["src", "alt"], Ye = 768, Nr = /* @__PURE__ */ g({
  __name: "AppSidebar",
  props: {
    sections: { default: () => [] },
    userInfo: {},
    collapsed: { type: Boolean },
    collapsible: { type: Boolean, default: !0 }
  },
  emits: ["update:collapsed"],
  setup(r, { emit: a }) {
    const t = r, c = a, { bemm: o } = H("app-sidebar"), l = y(window.innerWidth), u = y(t.collapsed || localStorage.getItem("sidebar-folded") === "true"), T = C(() => l.value <= Ye), d = C(() => l.value <= Ye), R = C(() => t.collapsible && u.value), _ = () => {
      l.value = window.innerWidth;
    }, E = () => {
      t.collapsible && (u.value = !u.value, localStorage.setItem("sidebar-folded", u.value.toString()), c("update:collapsed", u.value));
    };
    return ce(() => t.collapsed, (A) => {
      A !== void 0 && (u.value = A);
    }), ae(() => {
      window.addEventListener("resize", _);
    }), Ae(() => {
      window.removeEventListener("resize", _);
    }), (A, O) => (i(), I(B, null, [
      m("aside", {
        class: s([
          n(o)(),
          R.value && n(o)("", "folded"),
          T.value && n(o)("", "overlay"),
          T.value && !R.value && n(o)("", "overlay-expanded")
        ])
      }, [
        A.collapsible && !d.value ? (i(), I("button", {
          key: 0,
          class: s(n(o)("toggle")),
          onClick: E,
          title: R.value ? "Expand sidebar" : "Collapse sidebar"
        }, [
          M(n(U), {
            name: R.value ? "chevron-right" : "chevron-left"
          }, null, 8, ["name"])
        ], 10, ba)) : p("", !0),
        A.$slots.header ? (i(), I("div", {
          key: 1,
          class: s(n(o)("header"))
        }, [
          h(A.$slots, "header")
        ], 2)) : p("", !0),
        m("nav", {
          class: s(n(o)("nav"))
        }, [
          (i(!0), I(B, null, W(A.sections, (S) => (i(), I("div", {
            key: S.id,
            class: s(n(o)("section"))
          }, [
            S.title && !R.value ? (i(), I("h3", {
              key: 0,
              class: s(n(o)("section-title"))
            }, L(S.title), 3)) : p("", !0),
            m("div", {
              class: s(n(o)("nav-list"))
            }, [
              (i(!0), I(B, null, W(S.items, (w) => h(A.$slots, "nav-link", {
                key: w.path || w.href,
                item: w,
                isFolded: R.value
              }, () => [
                m("a", {
                  href: w.href || w.path || "#",
                  class: s(n(o)("nav-link")),
                  title: R.value ? w.label : void 0
                }, [
                  M(n(U), {
                    name: w.icon,
                    class: s(n(o)("nav-icon"))
                  }, null, 8, ["name", "class"]),
                  R.value ? p("", !0) : (i(), I("span", {
                    key: 0,
                    class: s(n(o)("nav-text"))
                  }, L(w.label), 3)),
                  w.badge && !R.value ? (i(), I("span", {
                    key: 1,
                    class: s(n(o)("nav-badge"))
                  }, L(w.badge), 3)) : p("", !0)
                ], 10, ya)
              ])), 128))
            ], 2)
          ], 2))), 128))
        ], 2),
        A.userInfo || A.$slots.footer ? (i(), I("div", {
          key: 2,
          class: s(n(o)("footer"))
        }, [
          h(A.$slots, "footer", {}, () => [
            A.userInfo ? (i(), I("div", {
              key: 0,
              class: s(n(o)("user-profile", ["", R.value ? "folded" : ""]))
            }, [
              m("div", {
                class: s(n(o)("user-avatar"))
              }, [
                A.userInfo.avatar ? (i(), I("img", {
                  key: 1,
                  src: A.userInfo.avatar,
                  alt: A.userInfo.name || "User avatar",
                  class: s(n(o)("user-image"))
                }, null, 10, Pa)) : (i(), N(n(U), {
                  key: 0,
                  name: "user",
                  class: s(n(o)("user-icon"))
                }, null, 8, ["class"]))
              ], 2),
              R.value ? p("", !0) : (i(), I("div", {
                key: 0,
                class: s(n(o)("user-info"))
              }, [
                A.userInfo.name ? (i(), I("span", {
                  key: 0,
                  class: s(n(o)("user-name"))
                }, L(A.userInfo.name), 3)) : p("", !0),
                A.userInfo.email ? (i(), I("span", {
                  key: 1,
                  class: s(n(o)("user-email"))
                }, L(A.userInfo.email), 3)) : p("", !0),
                A.userInfo.role ? (i(), I("span", {
                  key: 2,
                  class: s(n(o)("user-role"))
                }, L(A.userInfo.role), 3)) : p("", !0)
              ], 2)),
              h(A.$slots, "user-menu-trigger", { isFolded: R.value }, () => [
                R.value ? p("", !0) : (i(), N(n(U), {
                  key: 0,
                  name: "chevron-up",
                  class: s(n(o)("user-menu-arrow"))
                }, null, 8, ["class"]))
              ])
            ], 2)) : p("", !0)
          ])
        ], 2)) : p("", !0)
      ], 2),
      T.value && !R.value ? (i(), I("div", {
        key: 0,
        class: s(n(o)("overlay-backdrop")),
        onClick: E
      }, null, 2)) : p("", !0)
    ], 64));
  }
}), Ua = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left"
}, ka = /* @__PURE__ */ g({
  __name: "Tooltip",
  props: {
    position: { default: Ua.BOTTOM },
    delay: { default: 0.5 },
    color: { default: "foreground" }
  },
  setup(r) {
    const a = H("tooltip"), t = pe(), c = r, o = y(!1);
    ce(
      () => t,
      () => {
        t.default && (o.value = t.default.length > 50);
      },
      {
        immediate: !0
      }
    );
    const l = C(() => ({
      "--tooltip-delay": `${c.delay}s`,
      "--tooltip-color": `var(--color-${c.color}, var(--color-foreground))`,
      "--tooltip-text-color": `var(--color-${c.color}-text, var(--color-background))`,
      "--tooltip-font-size": o.value ? "1em" : "0.75em"
    })), u = C(() => a("", ["", c.position]));
    return (T, d) => (i(), I("div", {
      class: s(u.value),
      style: Y(l.value)
    }, [
      m("div", {
        class: s(n(a)("text"))
      }, [
        h(T.$slots, "default")
      ], 2)
    ], 6));
  }
}), Ma = ["title"], Fa = ["onClick", "title"], Xe = 768, Wa = 1024, gr = /* @__PURE__ */ g({
  __name: "SettingsLayout",
  props: {
    sections: {},
    activeSection: {}
  },
  emits: ["navigate"],
  setup(r, { emit: a }) {
    const t = a, { bemm: c } = H("settings-layout"), o = y(window.innerWidth), l = y(!1), u = C(() => o.value <= Xe), T = C(() => o.value <= Wa && o.value > Xe), d = C(() => !u.value && (l.value || T.value)), R = () => {
      o.value = window.innerWidth;
    }, _ = () => {
      l.value = !l.value;
    }, E = (A) => {
      t("navigate", A);
    };
    return ae(() => {
      window.addEventListener("resize", R);
    }), Ae(() => {
      window.removeEventListener("resize", R);
    }), (A, O) => (i(), I("div", {
      class: s([n(c)(), d.value && n(c)("", "folded")])
    }, [
      m("nav", {
        class: s(n(c)("sidebar"))
      }, [
        u.value ? p("", !0) : (i(), I("button", {
          key: 0,
          class: s(n(c)("toggle")),
          onClick: _,
          title: d.value ? "Expand sidebar" : "Collapse sidebar"
        }, [
          M(n(U), {
            name: d.value ? "chevron-right" : "chevron-left"
          }, null, 8, ["name"])
        ], 10, Ma)),
        m("ul", {
          class: s(n(c)("nav"))
        }, [
          (i(!0), I(B, null, W(A.sections, (S, w) => (i(), I("li", {
            key: S.id,
            class: s(n(c)("nav-item")),
            style: Y(`--i: ${w}`)
          }, [
            m("button", {
              class: s([
                n(c)("nav-button"),
                A.activeSection === S.id && n(c)("nav-button", "active")
              ]),
              onClick: (G) => E(S.id),
              title: d.value ? S.label : void 0
            }, [
              d.value ? (i(), N(n(ka), {
                key: 0,
                text: S.label,
                position: "right"
              }, {
                default: F(() => [
                  M(n(U), {
                    name: S.icon
                  }, null, 8, ["name"])
                ]),
                _: 2
              }, 1032, ["text"])) : (i(), N(n(U), {
                key: 1,
                name: S.icon
              }, null, 8, ["name"])),
              m("span", {
                class: s(n(c)("nav-label"))
              }, L(S.label), 3)
            ], 10, Fa)
          ], 6))), 128))
        ], 2)
      ], 2),
      m("div", {
        class: s(n(c)("main"))
      }, [
        h(A.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ga = (r, a) => {
  const t = r.__vccOpts || r;
  for (const [c, o] of a)
    t[c] = o;
  return t;
}, Ka = {};
function Va(r, a) {
  return i(), I("div", null, [
    h(r.$slots, "default")
  ]);
}
const Qe = /* @__PURE__ */ Ga(Ka, [["render", Va]]), ze = {
  error: (r, ...a) => console.error(r, ...a),
  warn: (r, ...a) => console.warn(r, ...a),
  info: (r, ...a) => console.info(r, ...a),
  debug: (r, ...a) => console.debug(r, ...a)
}, $a = /* @__PURE__ */ g({
  __name: "ConfirmDialog",
  props: {
    title: {},
    message: {},
    icon: { default: "help-circle" },
    confirmLabel: { default: "Confirm" },
    cancelLabel: { default: "Cancel" },
    confirmColor: { default: J.PRIMARY },
    onConfirm: {},
    onCancel: {},
    popupId: {}
  },
  emits: ["close"],
  setup(r, { emit: a }) {
    const t = r, c = a, o = H("confirm-dialog"), l = y(null), u = () => {
      var _;
      (_ = t.onConfirm) == null || _.call(t), c("close");
    }, T = () => {
      var _;
      (_ = t.onCancel) == null || _.call(t), c("close");
    }, d = (_) => {
      switch (_) {
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
    ae(() => {
      lt(() => {
        var E;
        const _ = (E = l.value) == null ? void 0 : E.$el;
        if (_) {
          const A = _.querySelector("button") || _;
          A == null || A.focus();
        }
      });
    });
    const R = (_) => {
      _.key === "Enter" ? (_.preventDefault(), u()) : _.key === "Escape" && (_.preventDefault(), T());
    };
    return ae(() => {
      document.addEventListener("keydown", R);
    }), Ae(() => {
      document.removeEventListener("keydown", R);
    }), (_, E) => (i(), I("div", {
      class: s(n(o)())
    }, [
      m("div", {
        class: s(n(o)("icon"))
      }, [
        M(U, { name: _.icon }, null, 8, ["name"])
      ], 2),
      m("div", {
        class: s(n(o)("content"))
      }, [
        m("h3", {
          class: s(n(o)("title"))
        }, L(_.title), 3),
        m("p", {
          class: s(n(o)("message"))
        }, L(_.message), 3)
      ], 2),
      m("div", {
        class: s(n(o)("actions"))
      }, [
        M(oe, {
          type: n(be).BUTTON,
          color: n(J).SECONDARY,
          onClick: T,
          icon: n(e).ARROW_LEFT,
          class: s(n(o)("cancel-button"))
        }, {
          default: F(() => [
            X(L(_.cancelLabel), 1)
          ]),
          _: 1
        }, 8, ["type", "color", "icon", "class"]),
        M(oe, {
          color: _.confirmColor,
          icon: d(_.confirmColor),
          onClick: u,
          class: s(n(o)("confirm-button")),
          ref_key: "confirmButton",
          ref: l,
          autofocus: ""
        }, {
          default: F(() => [
            X(L(_.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["color", "icon", "class"])
      ], 2)
    ], 2));
  }
}), Ya = /* @__PURE__ */ g({
  __name: "ProgressDialog",
  props: {
    title: {},
    message: {},
    progress: { default: 0 },
    showPercentage: { type: Boolean, default: !1 }
  },
  setup(r) {
    const { bemm: a } = H("progress-dialog");
    return (t, c) => (i(), I("div", {
      class: s(n(a)())
    }, [
      m("div", {
        class: s(n(a)("content"))
      }, [
        t.title ? (i(), I("div", {
          key: 0,
          class: s(n(a)("title"))
        }, L(t.title), 3)) : p("", !0),
        t.message ? (i(), I("div", {
          key: 1,
          class: s(n(a)("message"))
        }, L(t.message), 3)) : p("", !0),
        m("div", {
          class: s(n(a)("progress"))
        }, [
          m("div", {
            class: s(n(a)("progress-bar")),
            style: Y({ width: `${t.progress}%` })
          }, null, 6)
        ], 2),
        t.showPercentage ? (i(), I("div", {
          key: 2,
          class: s(n(a)("percentage"))
        }, L(Math.round(t.progress)) + "%", 3)) : p("", !0)
      ], 2)
    ], 2));
  }
}), Xa = /* @__PURE__ */ g({
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
  setup(r) {
    const a = r, { bemm: t } = H("input-dialog"), c = y(a.initialValue), o = y(""), l = y(null), u = () => {
      var R;
      const d = c.value.trim();
      if (a.validate) {
        const _ = a.validate(d);
        if (_ !== !0) {
          o.value = typeof _ == "string" ? _ : "Invalid input";
          return;
        }
      }
      (R = a.onConfirm) == null || R.call(a, d);
    }, T = () => {
      var d;
      (d = a.onCancel) == null || d.call(a);
    };
    return ae(() => {
      setTimeout(() => {
        var d;
        (d = l.value) == null || d.focus();
      }, 100);
    }), (d, R) => (i(), I("div", {
      class: s(n(t)())
    }, [
      m("h3", {
        class: s(n(t)("title"))
      }, L(d.title), 3),
      d.message ? (i(), I("p", {
        key: 0,
        class: s(n(t)("message"))
      }, L(d.message), 3)) : p("", !0),
      M(n(_a), {
        modelValue: c.value,
        "onUpdate:modelValue": R[0] || (R[0] = (_) => c.value = _),
        placeholder: d.placeholder,
        type: d.type,
        error: o.value,
        class: s(n(t)("input")),
        onKeyup: ut(u, ["enter"]),
        ref_key: "inputRef",
        ref: l
      }, null, 8, ["modelValue", "placeholder", "type", "error", "class"]),
      m("div", {
        class: s(n(t)("actions"))
      }, [
        M(oe, {
          variant: "secondary",
          onClick: T
        }, {
          default: F(() => [
            X(L(d.cancelLabel), 1)
          ]),
          _: 1
        }),
        M(oe, {
          variant: "primary",
          onClick: u
        }, {
          default: F(() => [
            X(L(d.confirmLabel), 1)
          ]),
          _: 1
        })
      ], 2)
    ], 2));
  }
}), Qa = {
  config: {
    background: !0,
    position: "center",
    canClose: !0,
    width: "auto",
    closingTimeout: 1e3
  },
  closePopups: !1
}, za = It({}), qa = {
  ConfirmDialog: $a,
  ProgressDialog: Ya,
  InputDialog: Xa
}, ja = () => {
  const r = y([]), a = () => {
    r.value = [];
  }, t = (l) => {
    var _, E, A, O, S;
    if (r.value.length > 5 && a(), typeof l.component == "string") {
      const w = qa[l.component];
      if (!w)
        return ze.error(`Component "${l.component}" not found in popup registry`), "";
      l.component = se(w);
    } else if (typeof l.component == "function") {
      const w = l.component;
      l = {
        ...l,
        component: se(Qe),
        slots: {
          ...l.slots,
          // @ts-expect-error
          default: w
        }
      };
    }
    const u = { ...Qa, ...l }, T = u.id || crypto.randomUUID();
    u.closePopups && o(T);
    const d = {
      ...u.props,
      ...u.on && Object.entries(u.on).reduce(
        (w, [G, k]) => ({
          ...w,
          [`onUpdate:${G}`]: k,
          [`on${G.charAt(0).toUpperCase() + G.slice(1)}`]: k
        }),
        {}
      )
    }, R = {
      id: T,
      component: u.component ? se(u.component) : se(Qe),
      footer: u.footer ? se(u.footer) : void 0,
      header: u.header ? se(u.header) : void 0,
      actions: u.actions,
      props: d,
      title: u.title || "",
      description: u.description || "",
      config: {
        hasBackground: ((_ = u.config) == null ? void 0 : _.background) ?? !0,
        position: ((E = u.config) == null ? void 0 : E.position) || "center",
        canClose: ((A = u.config) == null ? void 0 : A.canClose) ?? !0,
        width: ((O = u.config) == null ? void 0 : O.width) || "auto",
        closingTimeout: ((S = u.config) == null ? void 0 : S.closingTimeout) || 1e3
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
        r.value.push(R);
      } catch (w) {
        ze.error("Failed to push popup", {
          error: w,
          popupId: T,
          popupsCount: r.value.length
        }), a();
      }
    }), T;
  }, c = (l = {}) => {
    const { id: u, callback: T } = l;
    if (u) {
      const d = r.value.find((R) => R.id === u);
      d && (d.state.closing = !0, T && d.onCallback && d.onCallback(T), setTimeout(() => {
        var R;
        (R = d.onClose) == null || R.call(d), r.value = r.value.filter((_) => _.id !== u);
      }, d.config.closingTimeout));
    } else {
      const d = r.value[r.value.length - 1];
      d && (d.state.closing = !0, setTimeout(() => {
        var R;
        (R = d.onClose) == null || R.call(d), r.value.pop();
      }, d.config.closingTimeout));
    }
  }, o = (l) => {
    r.value.map((u) => u.id).filter((u) => u !== l).forEach((u) => c({ id: u }));
  };
  return {
    popups: r,
    showPopup: t,
    showFormPopup: t,
    hidePopup: (l) => c({ id: l }),
    closePopup: c,
    close: (l) => c({ id: l }),
    closeAllPopups: o,
    resePopupState: a
    // Expose reset method
  };
}, Z = ja();
class Ja {
  constructor() {
    Pe(this, "events");
    this.events = /* @__PURE__ */ new Map();
  }
  // Legacy channel-based methods
  onChannel(a, t) {
    this.events.has(a) || this.events.set(a, []), this.events.get(a).push(t);
  }
  offChannel(a, t) {
    const c = this.events.get(a);
    if (c) {
      const o = c.indexOf(t);
      o > -1 && c.splice(o, 1);
    }
  }
  emitChannel(a, t) {
    const c = this.events.get(a);
    c && c.forEach((o) => o(t));
  }
  // String-based event methods for popup compatibility
  on(a, t) {
    this.events.has(a) || this.events.set(a, []), this.events.get(a).push(t);
  }
  off(a, t) {
    const c = this.events.get(a);
    if (c) {
      const o = c.indexOf(t);
      o > -1 && c.splice(o, 1);
    }
  }
  emit(a, t) {
    const c = this.events.get(a);
    c && c.forEach((o) => o(t));
  }
  clear(a) {
    a ? this.events.delete(a) : this.events.clear();
  }
}
const Za = new Ja();
function xa() {
  return Za;
}
const er = ["id"], tr = ["onClick"], vr = /* @__PURE__ */ g({
  __name: "Popup",
  setup(r) {
    const a = H("popup"), t = xa(), c = C(() => Z.popups.value), o = (_) => {
      _.key === "Escape" && Z.closeAllPopups();
    }, l = (_) => {
      _.id && Z.showPopup({ ..._, component: _.component });
    }, u = (_) => {
      _.id && Z.closePopup({ id: _.id });
    }, T = () => {
      Z.closeAllPopups();
    };
    ae(() => {
      t.on("app:key", o), t.on("app:popup-open", l), t.on("app:popup-close", u), t.on("app:popup-force-close", T);
    }), Ae(() => {
      t.off("app:key", o), t.off("app:popup-open", l), t.off("app:popup-close", u), t.off("app:popup-force-close", T);
    });
    const d = pe(), R = (_) => !!d[_];
    return (_, E) => (i(), N(Je, { to: "body" }, [
      (i(!0), I(B, null, W(c.value, (A) => {
        var O, S;
        return i(), I("div", {
          id: A.id,
          key: A.id,
          class: s([
            n(a)(""),
            n(a)("", A.config.position),
            n(a)("", A.config.hasBackground ? "has-background" : ""),
            n(a)("", `stack-${A.id}`),
            n(a)("", A.state.closing ? "closing" : "")
          ])
        }, [
          A.config.hasBackground ? (i(), I("div", {
            key: 0,
            class: s(n(a)("background")),
            onClick: (w) => n(Z).closePopup({ id: A.id })
          }, null, 10, tr)) : p("", !0),
          m("div", {
            class: s(n(a)("wrapper"))
          }, [
            m("div", {
              class: s(n(a)("container"))
            }, [
              m("div", {
                class: s(n(a)("popup"))
              }, [
                R("header") || A.title ? (i(), I("header", {
                  key: 0,
                  class: s(n(a)("header"))
                }, [
                  A.title ? (i(), I("h4", {
                    key: 0,
                    class: s(n(a)("header-title"))
                  }, L(A.title), 3)) : p("", !0),
                  A.description ? (i(), I("p", {
                    key: 1,
                    class: s(n(a)("header-description"))
                  }, L(A.description), 3)) : p("", !0),
                  h(_.$slots, "header"),
                  A.config.canClose ? (i(), N(oe, {
                    key: 2,
                    class: s(n(a)("close")),
                    icon: n(e).MULTIPLY_M,
                    size: "small",
                    onClick: (w) => n(Z).close(A.id)
                  }, null, 8, ["class", "icon", "onClick"])) : p("", !0),
                  A.header ? (i(), N(j(A.header), { key: 3 })) : p("", !0)
                ], 2)) : p("", !0),
                m("div", {
                  class: s(n(a)("content"))
                }, [
                  (i(), N(j(A.component), te({ ref_for: !0 }, A.props, {
                    key: A.id,
                    "popup-id": A.id,
                    ref_for: !0,
                    ref: (w) => n(za)[A.id] = w,
                    onClose: (w) => n(Z).close(A.id)
                  }), dt({ _: 2 }, [
                    W(A.slots, (w, G) => ({
                      name: G,
                      fn: F(() => [
                        (i(), N(j(w)))
                      ])
                    }))
                  ]), 1040, ["popup-id", "onClose"]))
                ], 2),
                R("footer") || A.footer || (O = A.actions) != null && O.length ? (i(), I("footer", {
                  key: 1,
                  class: s(n(a)("footer"))
                }, [
                  h(_.$slots, "footer"),
                  A.footer ? (i(), N(j(A.footer), te({
                    key: 0,
                    ref_for: !0
                  }, A.props, {
                    onClose: (w) => n(Z).closePopup({ id: A.id })
                  }), null, 16, ["onClose"])) : p("", !0),
                  (S = A.actions) != null && S.length && !A.footer ? (i(), I("div", {
                    key: 1,
                    class: s(n(a)("actions"))
                  }, [
                    (i(!0), I(B, null, W(A.actions, (w) => (i(), N(oe, {
                      key: w.id,
                      type: w.type || n(be).BUTTON,
                      color: w.color || n(J).PRIMARY,
                      icon: w.icon,
                      disabled: w.disabled,
                      loading: w.loading,
                      onClick: w.action,
                      class: s(n(a)("action"))
                    }, {
                      default: F(() => [
                        X(L(w.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["type", "color", "icon", "disabled", "loading", "onClick", "class"]))), 128))
                  ], 2)) : p("", !0)
                ], 2)) : p("", !0)
              ], 2)
            ], 2)
          ], 2)
        ], 10, er);
      }), 128))
    ]));
  }
});
var ne = ((r) => (r[r.DEFAULT = J.PRIMARY] = "DEFAULT", r[r.INFO = J.INFO] = "INFO", r[r.SUCCESS = J.SUCCESS] = "SUCCESS", r[r.WARNING = J.WARNING] = "WARNING", r[r.ERROR = J.ERROR] = "ERROR", r))(ne || {});
const Br = /* @__PURE__ */ g({
  __name: "Alert",
  props: {
    variant: { default: ne.INFO },
    title: {},
    description: {},
    dismissible: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["dismiss"],
  setup(r, { emit: a }) {
    const t = r, c = a, { bemm: o } = H("alert"), l = C(() => t.icon ? t.icon : {
      [ne.DEFAULT]: "",
      [ne.INFO]: "info",
      [ne.SUCCESS]: "check-circle",
      [ne.WARNING]: "alert",
      [ne.ERROR]: "error"
    }[t.variant]), u = () => {
      c("dismiss");
    }, T = C(() => [
      o(),
      t.variant && o("", t.variant)
    ]);
    return (d, R) => (i(), N(n(at), {
      class: s(T.value),
      color: d.variant
    }, {
      default: F(() => [
        m("div", {
          class: s(n(o)("container"))
        }, [
          M(n(U), {
            name: l.value,
            class: s(n(o)("icon"))
          }, null, 8, ["name", "class"]),
          m("div", {
            class: s(n(o)("content"))
          }, [
            d.title ? (i(), I("h4", {
              key: 0,
              class: s(n(o)("title"))
            }, L(d.title), 3)) : p("", !0),
            m("div", {
              class: s(n(o)("description"))
            }, [
              h(d.$slots, "default", {}, () => [
                X(L(d.description), 1)
              ])
            ], 2)
          ], 2),
          d.dismissible ? (i(), I("button", {
            key: 0,
            class: s(n(o)("dismiss")),
            onClick: u
          }, [
            M(n(U), { name: "close" })
          ], 2)) : p("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "color"]));
  }
}), Hr = /* @__PURE__ */ g({
  __name: "EmptyState",
  props: {
    icon: {},
    title: {},
    description: {}
  },
  setup(r) {
    const { bemm: a } = H("empty-state");
    return (t, c) => (i(), I("div", {
      class: s(n(a)())
    }, [
      t.icon ? (i(), N(n(U), {
        key: 0,
        name: t.icon,
        class: s(n(a)("icon"))
      }, null, 8, ["name", "class"])) : p("", !0),
      t.title ? (i(), I("h3", {
        key: 1,
        class: s(n(a)("title"))
      }, L(t.title), 3)) : p("", !0),
      t.description ? (i(), I("p", {
        key: 2,
        class: s(n(a)("description"))
      }, L(t.description), 3)) : p("", !0),
      t.$slots.default || t.$slots.actions ? (i(), I("div", {
        key: 3,
        class: s(n(a)("actions"))
      }, [
        h(t.$slots, "actions", {}, () => [
          h(t.$slots, "default")
        ])
      ], 2)) : p("", !0)
    ], 2));
  }
}), ar = {
  TOP: "top",
  BOTTOM: "bottom",
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right"
}, ve = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  DEFAULT: "default"
}, rr = {
  message: "",
  type: ve.INFO,
  position: ar.TOP_RIGHT,
  duration: 5e3,
  dismissible: !0
}, or = () => {
  const r = y([]), a = (o) => {
    const l = { ...rr, ...o }, u = l.id || crypto.randomUUID(), T = {
      id: u,
      message: l.message,
      title: l.title,
      icon: l.icon,
      duration: l.duration,
      position: l.position,
      type: l.type,
      dismissible: l.dismissible,
      onClose: l.onClose,
      openedTime: Date.now(),
      state: {
        closing: !1
      }
    };
    return r.value.push(T), l.duration && l.duration > 0 && setTimeout(() => {
      t(u);
    }, l.duration), u;
  }, t = (o) => {
    const l = r.value.find((u) => u.id === o);
    l && (l.state.closing = !0, setTimeout(() => {
      var u;
      (u = l.onClose) == null || u.call(l), r.value = r.value.filter((T) => T.id !== o);
    }, 300));
  };
  return {
    toasts: r,
    show: a,
    hide: t,
    hideAll: () => {
      r.value.forEach((o) => t(o.id));
    }
  };
}, qe = or(), nr = ["role", "aria-live"], ir = ["onClick"], br = /* @__PURE__ */ g({
  __name: "Toast",
  setup(r) {
    const { bemm: a } = H("toast"), t = C(() => qe.toasts.value), c = (u) => u === ve.ERROR ? "alert" : "status", o = (u) => u === ve.ERROR ? "assertive" : "polite", l = (u) => {
      qe.hide(u);
    };
    return (u, T) => (i(), N(Je, { to: "body" }, [
      M(_t, {
        name: "toast",
        tag: "div",
        class: "toast-container"
      }, {
        default: F(() => [
          (i(!0), I(B, null, W(t.value, (d) => (i(), I("div", {
            key: d.id,
            class: s(n(a)("", [d.type || "", d.position || ""])),
            role: c(d.type),
            "aria-live": o(d.type),
            style: Y(`--toast-color: var(--color-${d.type})`)
          }, [
            m("div", {
              class: s(n(a)("content"))
            }, [
              d.icon ? (i(), N(n(U), {
                key: 0,
                class: s(n(a)("icon")),
                name: d.icon
              }, null, 8, ["class", "name"])) : p("", !0),
              m("div", {
                class: s(n(a)("body"))
              }, [
                d.title ? (i(), I("div", {
                  key: 0,
                  class: s(n(a)("title"))
                }, L(d.title), 3)) : p("", !0),
                m("div", {
                  class: s(n(a)("message"))
                }, L(d.message), 3)
              ], 2)
            ], 2),
            d.dismissible ? (i(), I("button", {
              key: 0,
              class: s(n(a)("close")),
              onClick: (R) => l(d.id),
              "aria-label": "Close notification"
            }, [
              M(n(U), {
                name: "close",
                size: "small"
              })
            ], 10, ir)) : p("", !0)
          ], 14, nr))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), sr = (r) => r, yr = { install: sr };
export {
  Br as Alert,
  ne as AlertVariant,
  hr as AppHeader,
  Nr as AppSidebar,
  dr as Badge,
  _r as BadgeVariant,
  oe as Button,
  Ir as ButtonGroup,
  at as Card,
  Ge as CircularProgress,
  J as Colors,
  Gt as Container,
  Er as ContextMenu,
  Qt as ContextMenuItems,
  qt as ContextPanel,
  Hr as EmptyState,
  U as Icon,
  mr as OptionItem,
  fr as PageHeader,
  vr as Popup,
  Qe as PopupSlot,
  Or as Progress,
  Lr as SearchInput,
  Cr as Section,
  wr as SelectInput,
  gr as SettingsLayout,
  he as Size,
  Tr as StatsCard,
  _a as TInputText,
  Sr as TInputTextArea,
  pr as Tab,
  Ar as TabPanel,
  Dr as Table,
  $e as TableCell,
  Ve as TableRow,
  Rr as Tabs,
  _a as TextInput,
  oa as ThemeToggle,
  br as Toast,
  ar as ToastPosition,
  ve as ToastType,
  ka as Tooltip,
  Ua as TooltipPosition,
  yr as default,
  sr as install,
  Z as popupService,
  qe as toastService
};
