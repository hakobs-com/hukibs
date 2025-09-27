var ot = Object.defineProperty;
var nt = (o, a, t) => a in o ? ot(o, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[a] = t;
var Pe = (o, a, t) => nt(o, typeof a != "symbol" ? a + "" : a, t);
import { defineComponent as g, computed as D, ref as y, watchEffect as je, createElementBlock as l, openBlock as i, mergeProps as te, useSlots as pe, watch as ce, createBlock as h, resolveDynamicComponent as j, withCtx as F, createElementVNode as m, createCommentVNode as A, normalizeClass as s, unref as n, createVNode as M, renderSlot as f, normalizeStyle as Y, toDisplayString as L, resolveComponent as it, Fragment as v, renderList as W, createTextVNode as X, onMounted as ae, onUnmounted as Ae, withModifiers as ie, provide as ge, inject as de, mergeModels as re, useAttrs as st, useModel as De, withDirectives as ct, vModelDynamic as lt, normalizeProps as ut, nextTick as It, withKeys as _t, reactive as dt, markRaw as se, Teleport as Je, createSlots as Et, TransitionGroup as Rt } from "vue";
var pt = Object.defineProperty, At = Object.defineProperties, Tt = Object.getOwnPropertyDescriptors, Ue = Object.getOwnPropertySymbols, mt = Object.prototype.hasOwnProperty, Ot = Object.prototype.propertyIsEnumerable, ke = (o, a, t) => a in o ? pt(o, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[a] = t, ee = (o, a) => {
  for (var t in a || (a = {}))
    mt.call(a, t) && ke(o, t, a[t]);
  if (Ue)
    for (var t of Ue(a))
      Ot.call(a, t) && ke(o, t, a[t]);
  return o;
}, Te = (o, a) => At(o, Tt(a)), Lt = (o) => o === "" ? "" : o.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([\d])([a-zA-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), wt = (o) => !isNaN(o) && typeof o == "number", Be = (o) => typeof o == "object" && !Array.isArray(o), le = (o) => typeof o == "object" && Array.isArray(o) && !Be(o), Ce = (o) => {
  if (!Array.isArray(o) || o.length === 0)
    return !1;
  for (let a = 0; a < o.length; a++)
    if (typeof o[a] != "string")
      return !1;
  return !0;
}, Q = (o) => typeof o == "string", Ze = (o) => o == null, Ee = (o) => Ce(o) ? o : Q(o) ? [o] : [], xe = (o) => {
  const a = o.map((t) => t && typeof t == "string" && t.includes(" ") ? xe(t.split(" ")) : (t && typeof t == "string" ? t.trim() : null) || "").flat().filter((t) => t !== "");
  return [...new Set(a)];
}, St = (o) => o == null ? !0 : o !== void 0 ? !!o : !1, Dt = (o) => typeof o == "boolean", fe = {
  ARRAY: "array"
}, x = {
  STRING: "string",
  ARRAY: "array",
  OBJECT: "object",
  NONE: "none",
  FALSE: "false"
}, Ct = (o) => Q(o) ? o : "", ft = (o) => Q(o) || Ce(o) ? o : "", we = (o) => {
  if (!Be(o) || le(o) || Q(o) || Ze(o))
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
    ...new Set(Object.keys(o).find((c) => !a.includes(c)))
  ].length;
}, ht = (o) => !!(le(o) && Q(o[0]) && (Ce(o[1]) || Q(o[1]))), Nt = (o) => !Q(o) && o[2] !== void 0 && !o[2], gt = (o, a, t = {}) => {
  const c = [];
  return ue(
    o,
    Ct(a[0]),
    ft(a[1]),
    Te(ee({}, t), { return: fe.ARRAY })
  ).forEach((I) => {
    c.push(I);
  }), c;
}, Me = (o, a, t = {}) => {
  const c = {
    block: o,
    element: "",
    modifier: ""
  };
  if (a.includes(":")) {
    const [r, I] = a.split(":");
    c.element = r, c.modifier = I;
  } else
    c.element = a;
  return ue(c.block, c.element, c.modifier, Te(ee({}, t), {
    return: fe.ARRAY
  }));
}, vt = (o, a, t = {}) => {
  if (a.show !== void 0 && !a.show || a.s !== void 0 && !a.s)
    return [];
  const c = (a == null ? void 0 : a.block) || a.b || o, r = {
    element: a.element || a.e || "",
    modifier: a.modifier || a.m || ""
  };
  return ue(c, r.element, r.modifier, Te(ee({}, t), {
    return: fe.ARRAY
  }));
}, Bt = (o) => Ze(o) ? x.NONE : Q(o) ? x.STRING : (le(o) && o.length < 2 || ht(o)) && !Nt(o) ? x.ARRAY : we(o) ? x.OBJECT : x.FALSE, Ht = (o, a = {}) => (...c) => {
  const r = Q(o) ? [o] : o;
  let I = [];
  return r.forEach((u) => {
    (c.length == 0 || c[0] == null || c[0] == "") && I.push(
      ...ue(u, "", "", { return: fe.ARRAY })
    ), c.forEach((T, _) => {
      switch (Bt(T)) {
        case x.NONE:
          I.push(...Me(u, "", a));
          break;
        case x.STRING:
          I.push(...Me(u, T, a));
          break;
        case x.ARRAY:
          I.push(...gt(u, T, a));
          break;
        case x.OBJECT:
          I.push(...vt(u, T, a));
          break;
      }
    });
  }), He({ classes: xe(I), settings: a });
}, _e = {
  ARRAY: "array",
  STRING: "string",
  AUTO: "auto"
}, et = (o, a, t) => {
  const c = (o == null ? void 0 : o.show) !== void 0 ? o == null ? void 0 : o.show : Dt(t.show) ? t.show : !0;
  let r = {
    element: t.element,
    modifier: t.modifier,
    show: c
  };
  if ((Q(o) || Ce(o)) && Q(a))
    r = {
      element: o,
      modifier: a,
      show: c
    };
  else if (we(o)) {
    const I = o;
    r = {
      element: I.element,
      modifier: I.modifier,
      show: c
    };
  }
  return r;
}, tt = (o) => {
  let a = ee({
    modifier: "--",
    element: "__"
  }, o.prefix);
  return Te(ee({
    toKebabCase: !0,
    return: _e.AUTO,
    includeBaseClass: !1
  }, o), {
    prefix: a
  });
}, He = (o) => {
  const a = Array.from(new Set(o.classes.filter((t) => t !== "")));
  switch (o.settings.return) {
    case _e.STRING:
      return a.join(" ");
    case _e.ARRAY:
      return a;
    default:
    case _e.AUTO:
      return a.length == 1 ? a[0] : a;
  }
}, me = (o, a) => (a.toKebabCase && (o = Lt(o)), o), bt = (o) => o.element == null || o.element == "" || o.element.length == 0 ? me(o.block, o.settings) : Ee(o.element).map((a) => {
  var t;
  return `${me(o.block, o.settings)}${(t = o.settings.prefix) == null ? void 0 : t.element}${me(a, o.settings)}`;
}).join(" "), Oe = (o) => {
  var a;
  return o.modifier == null || o.modifier == "" ? o.elementClass : `${o.elementClass}${(a = o.settings.prefix) == null ? void 0 : a.modifier}${me(
    o.modifier,
    o.settings
  )}`;
}, yt = (o) => {
  const a = [];
  return o.modifier.forEach((t) => {
    a.push(Oe({
      elementClass: o.elementClass,
      modifier: t,
      settings: o.settings
    }));
  }), a;
}, Pt = (o) => {
  const a = [];
  return Object.keys(o.modifier).forEach((t) => {
    const c = !!o.modifier[t];
    if (!t.includes("|"))
      a.push(
        Oe({
          elementClass: o.elementClass,
          modifier: c ? t : null,
          settings: o.settings
        })
      );
    else if (wt(o.modifier[t])) {
      const r = o.modifier[t], u = t.split("|")[r] || "";
      a.push(
        Oe({
          elementClass: o.elementClass,
          modifier: u,
          settings: o.settings
        })
      );
    } else {
      const r = t.split("|")[0], I = t.split("|")[1];
      a.push(
        Oe({
          elementClass: o.elementClass,
          modifier: c ? r : I,
          settings: o.settings
        })
      );
    }
  }), a;
}, ue = (o, a = "", t = "", c) => {
  if (o == "")
    return [];
  const { modifier: r } = et(a, t, {
    element: a,
    modifier: t
  }), I = tt(c), u = [];
  return Ee(a).forEach((T) => {
    const _ = bt({
      block: o,
      element: T,
      settings: I
    });
    switch (I.includeBaseClass && u.push(_), !0) {
      case Q(r):
      case le(r):
        u.push(...yt({
          elementClass: _,
          modifier: Ee(r),
          settings: I
        }));
        break;
      case Be(r):
        u.push(...Pt({ elementClass: _, modifier: r, settings: I }));
        break;
      default:
        u.push(_);
    }
  }), He({ classes: u, settings: I });
}, H = (o, a = {}) => {
  const t = (r = "", I = "", u = a) => {
    const T = tt(ee(ee({}, a), u));
    if (Q(r) && le(r) && r !== null && !St(r == null ? void 0 : r.show))
      return "";
    let _ = [];
    const { element: p, modifier: d, show: R } = et(r, I, {
      element: we(r) ? r.element : r,
      modifier: we(r) ? r.modifier : I
    });
    switch (!0) {
      case Q(o):
        _ = ue(
          o,
          p,
          d,
          Te(ee({}, T), {
            return: _e.ARRAY
          })
        );
        break;
      case le(o):
        _ = Ee(o).flatMap(
          (E) => Ee(r).map((O) => ue(E, O, I, T)).flat()
        ).flat();
        break;
    }
    return R ? He({
      classes: _,
      settings: T
    }) : "";
  }, c = t;
  return c.bemm = t, c.classes = Ht(o, a), c;
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
  STICKER: "sticker",
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
}, Ut = {
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
  ...Ut
}, kt = async (o) => {
  switch (o) {
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
      return (await import("./accessibility-person-circled-5C6GTY7Y-5X7zsx-_.js")).IconAccessibilityPersonCircled;
    case e.ACCESSIBILITY_PERSON:
      return (await import("./accessibility-person-4IW5CUU3-CYNWuwrn.js")).IconAccessibilityPerson;
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
      return (await import("./block-partials-PIN5WPMJ-CFzSb_t7.js")).IconBlockPartials;
    case e.BOARD_ADD2:
      return (await import("./board-add2-VO4DY6UO-Byn_Ola3.js")).IconBoardAdd2;
    case e.BOARD_MULTI2_HORIZONTAL:
      return (await import("./board-multi2-horizontal-VZPZBKSO-CD4Nydyk.js")).IconBoardMulti2Horizontal;
    case e.BOARD_MULTI2_VERTICAL:
      return (await import("./board-multi2-vertical-AGC5G4YN-LCK4RLxR.js")).IconBoardMulti2Vertical;
    case e.BOARD_MULTI_DASHBOARD:
      return (await import("./board-multi-dashboard-YWS7AEA6-O8flZblJ.js")).IconBoardMultiDashboard;
    case e.BOARD_MULTI_T_DOWN:
      return (await import("./board-multi-t-down-KRWQBVID-Dus-11Ql.js")).IconBoardMultiTDown;
    case e.BOARD_MULTI_T_LEFT:
      return (await import("./board-multi-t-left-VK6QRLDY-EJNRWq3Z.js")).IconBoardMultiTLeft;
    case e.BOARD_MULTI_T_RIGHT:
      return (await import("./board-multi-t-right-2FG6VLF7-CJmUA8re.js")).IconBoardMultiTRight;
    case e.BOARD_MULTI_T_UP:
      return (await import("./board-multi-t-up-6W6RMJFY-bqxSFCFH.js")).IconBoardMultiTUp;
    case e.BOARD_MULTI:
      return (await import("./board-multi-HO2MXCTZ-DDeLgGvQ.js")).IconBoardMulti;
    case e.BOARD_MULTIPLY2:
      return (await import("./board-multiply2-ZVWVWTXM-BoWwSgnB.js")).IconBoardMultiply2;
    case e.BOARD_SPLIT13_HORIZONTAL:
      return (await import("./board-split13-horizontal-HYLR5CGZ-DBvymQmr.js")).IconBoardSplit13Horizontal;
    case e.BOARD_SPLIT13_VERTICAL:
      return (await import("./board-split13-vertical-WE7YDHAH-CZ8yFwSh.js")).IconBoardSplit13Vertical;
    case e.BOARD_SPLIT2_HORIZONTAL:
      return (await import("./board-split2-horizontal-NSPZUPBF-C1j8BrdX.js")).IconBoardSplit2Horizontal;
    case e.BOARD_SPLIT2_VERTICAL:
      return (await import("./board-split2-vertical-A6GMWCYB-BWfWN9cU.js")).IconBoardSplit2Vertical;
    case e.BOARD_SPLIT31_HORIZONTAL:
      return (await import("./board-split31-horizontal-5H26ZVEJ-BSUUHuLb.js")).IconBoardSplit31Horizontal;
    case e.BOARD_SPLIT31_VERTICAL:
      return (await import("./board-split31-vertical-JQO27HSA-Cvcd6TNS.js")).IconBoardSplit31Vertical;
    case e.BOARD_SPLIT3_HORIZONTAL:
      return (await import("./board-split3-horizontal-A3TJG3VF-DUI3J_Hm.js")).IconBoardSplit3Horizontal;
    case e.BOARD_SPLIT3_VERTICAL:
      return (await import("./board-split3-vertical-O5CAEQTG-_GZrI83k.js")).IconBoardSplit3Vertical;
    case e.BOARD_SPLIT4_HORIZONTAL:
      return (await import("./board-split4-horizontal-LVCSA525-BKvZonWI.js")).IconBoardSplit4Horizontal;
    case e.BOARD_SPLIT4_VERTICAL:
      return (await import("./board-split4-vertical-L2FNCKOY-DarMvYkt.js")).IconBoardSplit4Vertical;
    case e.BOARD_SPLIT_T_DOWN:
      return (await import("./board-split-t-down-HCRYYXJE-CYGqEdmD.js")).IconBoardSplitTDown;
    case e.BOARD_SPLIT_T_LEFT:
      return (await import("./board-split-t-left-Y3GLKJQE-Bbb4kcm3.js")).IconBoardSplitTLeft;
    case e.BOARD_SPLIT_T_RIGHT:
      return (await import("./board-split-t-right-43G76U4W-MjO7gtoj.js")).IconBoardSplitTRight;
    case e.BOARD_SPLIT_T_UP:
      return (await import("./board-split-t-up-NCWFB3KJ-CcxwppeZ.js")).IconBoardSplitTUp;
    case e.BOARD_SUBTRACT2:
      return (await import("./board-subtract2-4M5RG4B6-BkktjwPj.js")).IconBoardSubtract2;
    case e.BOARD:
      return (await import("./board-NQAPU44O-D1wSNqsq.js")).IconBoard;
    case e.BOX_IN:
      return (await import("./box-in-OTUKYWCP-DQBPwxJr.js")).IconBoxIn;
    case e.BOX_OUT:
      return (await import("./box-out-Z5CWCO5C-BZWI4-QW.js")).IconBoxOut;
    case e.BOX:
      return (await import("./box-5MNSOPYL-PjEinbHG.js")).IconBox;
    case e.BOY:
      return (await import("./boy-M3NRWV4D-Dm2qhPoT.js")).IconBoy;
    case e.BROKEN_HEART_F:
      return (await import("./broken-heart-f-K4JTKAF5-BJptOm_V.js")).IconBrokenHeartF;
    case e.BROKEN_HEART_L:
      return (await import("./broken-heart-l-6CPHHGOR-DOLaY07O.js")).IconBrokenHeartL;
    case e.BROKEN_HEART_M:
      return (await import("./broken-heart-m-JDVQXMQT-BEabmpoa.js")).IconBrokenHeartM;
    case e.BUILDING_CHURCH:
      return (await import("./building-church-6FAULJCG-Bo4KvBVj.js")).IconBuildingChurch;
    case e.BUILDING_HOUSE2:
      return (await import("./building-house2-I62NGRPK-gH-FpME_.js")).IconBuildingHouse2;
    case e.BUILDING_HOUSE:
      return (await import("./building-house-ZPNZPBBF-BKnaYExf.js")).IconBuildingHouse;
    case e.BUILDING_SHOP:
      return (await import("./building-shop-OVZNADMC-DlLath-S.js")).IconBuildingShop;
    case e.BUTTON_ADD:
      return (await import("./button-add-QFOLYGT7-CUCkZSYN.js")).IconButtonAdd;
    case e.BUTTON_BROKEN_HEART2:
      return (await import("./button-broken-heart2-ZRI3Y37M-BmARqBOa.js")).IconButtonBrokenHeart2;
    case e.BUTTON_BROKEN_HEART:
      return (await import("./button-broken-heart-TRORLIZN-D0sCCN2S.js")).IconButtonBrokenHeart;
    case e.BUTTON_CHECK2:
      return (await import("./button-check2-274VMEWT-bo5VoqSC.js")).IconButtonCheck2;
    case e.BUTTON_CHECK:
      return (await import("./button-check-IKBIYNB3-B7awq5Fo.js")).IconButtonCheck;
    case e.BUTTON_EDIT2:
      return (await import("./button-edit2-4Q5ANMLP-rlRbQkJo.js")).IconButtonEdit2;
    case e.BUTTON_EDIT:
      return (await import("./button-edit-K63TJTFP-CmqrG57L.js")).IconButtonEdit;
    case e.BUTTON_EXCLAMATION_MARK2:
      return (await import("./button-exclamation-mark2-4PSNVQND-D5tnLd_h.js")).IconButtonExclamationMark2;
    case e.BUTTON_EXCLAMATION_MARK:
      return (await import("./button-exclamation-mark-Y7O6PQDI-X-d4aTbs.js")).IconButtonExclamationMark;
    case e.BUTTON_HEART2:
      return (await import("./button-heart2-NH2X6GXM-BI-nMlFQ.js")).IconButtonHeart2;
    case e.BUTTON_HEART:
      return (await import("./button-heart-7P7D3M33-CROsCpcA.js")).IconButtonHeart;
    case e.BUTTON_INFO2:
      return (await import("./button-info2-YBUKCOFD-C-e7YCXD.js")).IconButtonInfo2;
    case e.BUTTON_INFO:
      return (await import("./button-info-TY4CWGFH-D6Qqn4_-.js")).IconButtonInfo;
    case e.BUTTON_INVISIBLE2:
      return (await import("./button-invisible2-CMQ56PO5-CtAXFmDt.js")).IconButtonInvisible2;
    case e.BUTTON_INVISIBLE:
      return (await import("./button-invisible-INDYMBPL-CuHQjtdN.js")).IconButtonInvisible;
    case e.BUTTON_MULTIPLY:
      return (await import("./button-multiply-D2TMF2PE-H07qf4dh.js")).IconButtonMultiply;
    case e.BUTTON_QUESTION_MARK2:
      return (await import("./button-question-mark2-M6UZCJQV-18RgOukK.js")).IconButtonQuestionMark2;
    case e.BUTTON_QUESTION_MARK:
      return (await import("./button-question-mark-B5WDZ2CA-BxjrwaDt.js")).IconButtonQuestionMark;
    case e.BUTTON_SEARCH2:
      return (await import("./button-search2-S43NPC5Y-ToK4G6KD.js")).IconButtonSearch2;
    case e.BUTTON_SEARCH:
      return (await import("./button-search-U55EPCE4-DEhJPCZY.js")).IconButtonSearch;
    case e.BUTTON_STAR2:
      return (await import("./button-star2-QCPJU3EQ-BcQj0HLV.js")).IconButtonStar2;
    case e.BUTTON_STAR:
      return (await import("./button-star-ORXNX2XV-BeuQJ8pW.js")).IconButtonStar;
    case e.BUTTON_SUBTRACT:
      return (await import("./button-subtract-YEBPLZ4P-Bjg6F9Yk.js")).IconButtonSubtract;
    case e.BUTTON_VISIBLE2:
      return (await import("./button-visible2-RVT2XJM2-hMNmzOBG.js")).IconButtonVisible2;
    case e.BUTTON_VISIBLE:
      return (await import("./button-visible-4LXWHBKG-DGypFegL.js")).IconButtonVisible;
    case e.BUTTON:
      return (await import("./button-GIC32N2W-O9ykQTK2.js")).IconButton;
    case e.CALENDAR2:
      return (await import("./calendar2-3RRR3VXM-B96eErsR.js")).IconCalendar2;
    case e.CALENDAR:
      return (await import("./calendar-FMP6RIIU-C7zWjXt_.js")).IconCalendar;
    case e.CHART_BARS_SQUARED:
      return (await import("./chart-bars-squared-T76IXFHE-BaGSzd3z.js")).IconChartBarsSquared;
    case e.CHART_BUBBLES:
      return (await import("./chart-bubbles-F2I7QYEY-BCWxOm89.js")).IconChartBubbles;
    case e.CHART_CANDLES:
      return (await import("./chart-candles-HNVIP257-Z2yLwMJ_.js")).IconChartCandles;
    case e.CHART_HALF_CIRCLE:
      return (await import("./chart-half-circle-3T2PCADF-DiJqntC9.js")).IconChartHalfCircle;
    case e.CHART_LINE_SQUARED:
      return (await import("./chart-line-squared-LONVERWW-BwiHKRmx.js")).IconChartLineSquared;
    case e.CHART_LINE:
      return (await import("./chart-line-MCPIURDN-CQkKM1pF.js")).IconChartLine;
    case e.CHART_PIE:
      return (await import("./chart-pie-BCQDSFXX-CM9VSGoX.js")).IconChartPie;
    case e.CHECK_FAT:
      return (await import("./check-fat-IW7GKKWQ-06mtdZTP.js")).IconCheckFat;
    case e.CHECK_L:
      return (await import("./check-l-AX2XQ2DQ-BV6hkZSi.js")).IconCheckL;
    case e.CHECK_LIST:
      return (await import("./check-list-UWTCTLYH-DWpNUBBt.js")).IconCheckList;
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
      return (await import("./circled-visible-EALXBGMZ-B65UZZL4.js")).IconCircledVisible;
    case e.CIRCLED:
      return (await import("./circled-5CZ6JTP3-jvYkLAvj.js")).IconCircled;
    case e.CIRCULAR_LOADER:
      return (await import("./circular-loader-FDEBPSES-bRJqrweP.js")).IconCircularLoader;
    case e.CLOCK:
      return (await import("./clock-3VAALZXO-J5uXk5Ny.js")).IconClock;
    case e.CODE_BRACKETS_CIRCLED:
      return (await import("./code-brackets-circled-IQPD4X73-cPSduM8m.js")).IconCodeBracketsCircled;
    case e.CODE_BRACKETS:
      return (await import("./code-brackets-6NZ3AAI3-B-nnLe2f.js")).IconCodeBrackets;
    case e.CODE_CHEVRONS_CIRCLED:
      return (await import("./code-chevrons-circled-3WBI6IYI-C2CGzkv7.js")).IconCodeChevronsCircled;
    case e.CODE_CHEVRONS_OPEN_CIRCLED:
      return (await import("./code-chevrons-open-circled-2UXR2LUA-BWUOinqS.js")).IconCodeChevronsOpenCircled;
    case e.CODE_CHEVRONS_OPEN:
      return (await import("./code-chevrons-open-VJWP7MQG-CYhSNOEp.js")).IconCodeChevronsOpen;
    case e.CODE_CHEVRONS:
      return (await import("./code-chevrons-EDJ233QQ-t3vJc7CP.js")).IconCodeChevrons;
    case e.COMPANY:
      return (await import("./company-SKWYBW2G-D19XiXdg.js")).IconCompany;
    case e.DISLIKE:
      return (await import("./dislike-HEDWFXTA-zyfb2YKl.js")).IconDislike;
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
      return (await import("./file-add267-QI7YL7EQ-DjG7olVj.js")).IconFileAdd267;
    case e.FILE_ADD269:
      return (await import("./file-add269-UFJHGWIQ-Bz3BylCg.js")).IconFileAdd269;
    case e.FILE_ADD:
      return (await import("./file-add-D5IXXPAH-BPz9LmMN.js")).IconFileAdd;
    case e.FILE_ARCHIVE:
      return (await import("./file-archive-3TCXHFP4-x1dC1Ac7.js")).IconFileArchive;
    case e.FILE_ARROW_UP:
      return (await import("./file-arrow-up-K4MKEQTI-DT6fgbVq.js")).IconFileArrowUp;
    case e.FILE_BINARY:
      return (await import("./file-binary-X73ADQLA-CSrEws_U.js")).IconFileBinary;
    case e.FILE_BROKEN_HEART2:
      return (await import("./file-broken-heart2-FECEONC3-BnbPkQNg.js")).IconFileBrokenHeart2;
    case e.FILE_BROKEN_HEART:
      return (await import("./file-broken-heart-32M5J3ZA-Cnq0cTWb.js")).IconFileBrokenHeart;
    case e.FILE_CHECK2:
      return (await import("./file-check2-K4LLRVGY-Dvb8nOq_.js")).IconFileCheck2;
    case e.FILE_CHECK:
      return (await import("./file-check-WIXBG3K6-bcIFOv6Z.js")).IconFileCheck;
    case e.FILE_CLOUD:
      return (await import("./file-cloud-U2GQC7VB-61aoabji.js")).IconFileCloud;
    case e.FILE_CODE:
      return (await import("./file-code-GO2PFB7I-CaIjTmjf.js")).IconFileCode;
    case e.FILE_COLUMNS:
      return (await import("./file-columns-RSBP7YT5-B9-Nus0I.js")).IconFileColumns;
    case e.FILE_EDIT2:
      return (await import("./file-edit2-XCZXRPXE-BV0-tfcE.js")).IconFileEdit2;
    case e.FILE_EDIT:
      return (await import("./file-edit-ON6RXAV5-B3MxR7J_.js")).IconFileEdit;
    case e.FILE_EXCLAMATION_MARK2:
      return (await import("./file-exclamation-mark2-SFOXFAMK-1d7zranz.js")).IconFileExclamationMark2;
    case e.FILE_EXCLAMATION_MARK:
      return (await import("./file-exclamation-mark-KMZY764P-CTYEwMWQ.js")).IconFileExclamationMark;
    case e.FILE_GRAPHS:
      return (await import("./file-graphs-Z6B67SUX-Dc7QwxNr.js")).IconFileGraphs;
    case e.FILE_HEART2:
      return (await import("./file-heart2-AM6E4YH6-Bcv3fey_.js")).IconFileHeart2;
    case e.FILE_HEART:
      return (await import("./file-heart-U5YZ5V6P-BEBK3GjP.js")).IconFileHeart;
    case e.FILE_INFO2:
      return (await import("./file-info2-53ASZMRV-DcaGIWEN.js")).IconFileInfo2;
    case e.FILE_INFO:
      return (await import("./file-info-XH7VH3AK--VWPrcfr.js")).IconFileInfo;
    case e.FILE_INVISIBLE2:
      return (await import("./file-invisible2-3U56H5UJ-DdLcaOyf.js")).IconFileInvisible2;
    case e.FILE_INVISIBLE:
      return (await import("./file-invisible-6CYJGIEV-ByOCxNXO.js")).IconFileInvisible;
    case e.FILE_MULTIPLY:
      return (await import("./file-multiply-VK6C4NER-ry35hf2N.js")).IconFileMultiply;
    case e.FILE_QUESTION_MARK2:
      return (await import("./file-question-mark2-2GV2VT4X-0ev0HotW.js")).IconFileQuestionMark2;
    case e.FILE_QUESTION_MARK:
      return (await import("./file-question-mark-SBKP4XZQ-Dn60wQTw.js")).IconFileQuestionMark;
    case e.FILE_SEARCH2:
      return (await import("./file-search2-AOWE6BZ2-BuhEV38N.js")).IconFileSearch2;
    case e.FILE_SEARCH:
      return (await import("./file-search-YQPCN4MT-BgkVny-3.js")).IconFileSearch;
    case e.FILE_STAR2:
      return (await import("./file-star2-YF5KQNYT-B13vaT5E.js")).IconFileStar2;
    case e.FILE_STAR:
      return (await import("./file-star-TYF2SPEX-BhMzAI-L.js")).IconFileStar;
    case e.FILE_SUBTRACT2:
      return (await import("./file-subtract2-E6IJB55M-DCj6vbLh.js")).IconFileSubtract2;
    case e.FILE_SUBTRACT:
      return (await import("./file-subtract-VLQ7ZWHE-BVJelsAj.js")).IconFileSubtract;
    case e.FILE_TEXT:
      return (await import("./file-text-ZTHSRO2R-KgSxo1Rq.js")).IconFileText;
    case e.FILE_TRAY_STACK:
      return (await import("./file-tray-stack-7JW4K6TD-Btu9MPfw.js")).IconFileTrayStack;
    case e.FILE_TRAY:
      return (await import("./file-tray-WIB3T2XI-C2nCraXL.js")).IconFileTray;
    case e.FILE_VISIBLE2:
      return (await import("./file-visible2-VENXAEZL-CEe7xsA6.js")).IconFileVisible2;
    case e.FILE_VISIBLE:
      return (await import("./file-visible-QX4XCFNP-BPPYebap.js")).IconFileVisible;
    case e.FILE:
      return (await import("./file-5URQKJMS-DjSLZRWU.js")).IconFile;
    case e.FOLDER_ADD2:
      return (await import("./folder-add2-J6DP4AJA-SqKIxQsb.js")).IconFolderAdd2;
    case e.FOLDER_ADD:
      return (await import("./folder-add-6XX737JG-aQzoYAf4.js")).IconFolderAdd;
    case e.FOLDER_BROKEN_HEART2:
      return (await import("./folder-broken-heart2-322SW7MB-lpQMfauN.js")).IconFolderBrokenHeart2;
    case e.FOLDER_BROKEN_HEART:
      return (await import("./folder-broken-heart-TGAIXTW7-DwJO9KZi.js")).IconFolderBrokenHeart;
    case e.FOLDER_CHECK2:
      return (await import("./folder-check2-RG2OOJ5X-DsVJBtxg.js")).IconFolderCheck2;
    case e.FOLDER_CHECK:
      return (await import("./folder-check-4GFFHB2U-DMENnT-1.js")).IconFolderCheck;
    case e.FOLDER_EDIT2:
      return (await import("./folder-edit2-5QQWCGEW-xHPBZQQX.js")).IconFolderEdit2;
    case e.FOLDER_EDIT:
      return (await import("./folder-edit-6BVDUXVD-BDjNesbi.js")).IconFolderEdit;
    case e.FOLDER_EXCLAMATION_MARK2:
      return (await import("./folder-exclamation-mark2-XMWNCAJT-DD4LtVZ7.js")).IconFolderExclamationMark2;
    case e.FOLDER_EXCLAMATION_MARK:
      return (await import("./folder-exclamation-mark-H55BH2FK-D_IQex6O.js")).IconFolderExclamationMark;
    case e.FOLDER_HEART2:
      return (await import("./folder-heart2-MBE5HTEZ-CTXl3HuR.js")).IconFolderHeart2;
    case e.FOLDER_HEART:
      return (await import("./folder-heart-7VSYBTMS-BBPoATCK.js")).IconFolderHeart;
    case e.FOLDER_INFO2:
      return (await import("./folder-info2-SDKDWJIT-Cz2vd7YP.js")).IconFolderInfo2;
    case e.FOLDER_INFO:
      return (await import("./folder-info-TJBPKRPI-C11e85h6.js")).IconFolderInfo;
    case e.FOLDER_INVISIBLE2:
      return (await import("./folder-invisible2-Z3K43HVG-Ds7f0HCE.js")).IconFolderInvisible2;
    case e.FOLDER_INVISIBLE:
      return (await import("./folder-invisible-S5IVGSUT-Cv3MILNx.js")).IconFolderInvisible;
    case e.FOLDER_MULTIPLY2:
      return (await import("./folder-multiply2-AXZPRMC6-Dlf1mkgw.js")).IconFolderMultiply2;
    case e.FOLDER_MULTIPLY:
      return (await import("./folder-multiply-PIDUJ654-DJ54sacM.js")).IconFolderMultiply;
    case e.FOLDER_QUESTION_MARK2:
      return (await import("./folder-question-mark2-YOGFC6Z3-BO4wi8Wn.js")).IconFolderQuestionMark2;
    case e.FOLDER_QUESTION_MARK:
      return (await import("./folder-question-mark-SSQDZEX5-D9IeZCKU.js")).IconFolderQuestionMark;
    case e.FOLDER_SEARCH2:
      return (await import("./folder-search2-ABPPKGJ6-iaZTV_AV.js")).IconFolderSearch2;
    case e.FOLDER_SEARCH:
      return (await import("./folder-search-D7TV624D-DxieZsGO.js")).IconFolderSearch;
    case e.FOLDER_STAR2:
      return (await import("./folder-star2-Q3KSJ4YY-BJuPI_LW.js")).IconFolderStar2;
    case e.FOLDER_STAR:
      return (await import("./folder-star-E4MBR33K-ob1at-8L.js")).IconFolderStar;
    case e.FOLDER_SUBTRACT2:
      return (await import("./folder-subtract2-G47NICEI-CpDG9g7U.js")).IconFolderSubtract2;
    case e.FOLDER_SUBTRACT:
      return (await import("./folder-subtract-APNWK4ZS-Bs-aKY0p.js")).IconFolderSubtract;
    case e.FOLDER_VISIBLE2:
      return (await import("./folder-visible2-A3UK4LHZ-DDGmXwWU.js")).IconFolderVisible2;
    case e.FOLDER_VISIBLE:
      return (await import("./folder-visible-CTGIGNUC-cY9H66HD.js")).IconFolderVisible;
    case e.FOLDER:
      return (await import("./folder-LNLBP2T2-_CwMJBB4.js")).IconFolder;
    case e.GIRL:
      return (await import("./girl-IP4JK4FY-D5QAc0U0.js")).IconGirl;
    case e.GIT_BRANCH:
      return (await import("./git-branch-QQ7ENPC6-CLPpF3eN.js")).IconGitBranch;
    case e.GIT_COMPARE:
      return (await import("./git-compare-7VNURDWE-B4w7hSMA.js")).IconGitCompare;
    case e.GIT_MERGE_QUEUE:
      return (await import("./git-merge-queue-EG4LZH6L-Co643LME.js")).IconGitMergeQueue;
    case e.GIT_MERGE:
      return (await import("./git-merge-ORXZPWHN-58yeVufp.js")).IconGitMerge;
    case e.GIT_PULL_REQUEST_CLOSED:
      return (await import("./git-pull-request-closed-CTXRM5UV-CAbQkBca.js")).IconGitPullRequestClosed;
    case e.GIT_PULL_REQUEST_DRAFT:
      return (await import("./git-pull-request-draft-TLR7FRGU-DbKlyeKC.js")).IconGitPullRequestDraft;
    case e.GIT_PULL_REQUEST:
      return (await import("./git-pull-request-TQ5QKFMJ-DbyAZVgh.js")).IconGitPullRequest;
    case e.GIT_REPO_FORK:
      return (await import("./git-repo-fork-W25QRPRH-COPPSbrM.js")).IconGitRepoFork;
    case e.HEART_BROKEN_SMALL:
      return (await import("./heart-broken-small-QXSUCE5F-DxnlQYCX.js")).IconHeartBrokenSmall;
    case e.HEART_FAT:
      return (await import("./heart-fat-BFR7LP3D-BKS1pfoL.js")).IconHeartFat;
    case e.HEART_L:
      return (await import("./heart-l-L2OR7JPA-DUfJlVfZ.js")).IconHeartL;
    case e.HEART_M:
      return (await import("./heart-m-56LYZT6T-CMqEaERQ.js")).IconHeartM;
    case e.HEART_SMALL:
      return (await import("./heart-small-4NEUM63N-BQTQJntF.js")).IconHeartSmall;
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
      return (await import("./key-backspace-7APX7NHE-9ER8oUJ2.js")).IconKeyBackspace;
    case e.KEY_DELETE:
      return (await import("./key-delete-T5VJEOB4-CFn0dbBG.js")).IconKeyDelete;
    case e.KEY_DOWN:
      return (await import("./key-down-DZNQ2C7R-ZId0D_dd.js")).IconKeyDown;
    case e.KEY_EJECT:
      return (await import("./key-eject-MAXFIBQU-wb3Pslxo.js")).IconKeyEject;
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
      return (await import("./key-shift-62FMGC63-B7ZWPxyx.js")).IconKeyShift;
    case e.KEY_TAB:
      return (await import("./key-tab-PE5WHP5Q-Cl5k92QW.js")).IconKeyTab;
    case e.KEY_UP:
      return (await import("./key-up-6CJJFKCO-BiX9ybdb.js")).IconKeyUp;
    case e.LIKE:
      return (await import("./like-OSOJSZDE-B3MHqFLv.js")).IconLike;
    case e.LINK:
      return (await import("./link-DECGU7JN-CbjtjE8F.js")).IconLink;
    case e.LOADER_DOTS2:
      return (await import("./loader-dots2-Y4BCI2EP-DxjgaKT3.js")).IconLoaderDots2;
    case e.LOADER_DOTS:
      return (await import("./loader-dots-PO2OYHOL-DdV6n27v.js")).IconLoaderDots;
    case e.MALE_SIMPLIFIED:
      return (await import("./male-simplified-NI53UM4R-4dYgS5EB.js")).IconMaleSimplified;
    case e.MOVING_BLOCK:
      return (await import("./moving-block-BRMZBHU4-CHerZs9r.js")).IconMovingBlock;
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
      return (await import("./note-visible2-UIDSUVMV-DrzonAkV.js")).IconNoteVisible2;
    case e.NOTE_VISIBLE:
      return (await import("./note-visible-V4J7OMEC-C-rLf4Oy.js")).IconNoteVisible;
    case e.NOTE:
      return (await import("./note-IAHQUANQ-X-ZK4t90.js")).IconNote;
    case e.ON_TARGET:
      return (await import("./on-target-T34IASTT-CSjsSiFl.js")).IconOnTarget;
    case e.PARAGRAPH:
      return (await import("./paragraph-LSNPNKGT-BdvWY-DV.js")).IconParagraph;
    case e.PERFORMANCE2:
      return (await import("./performance2-5MKL456E-o5sxgXpi.js")).IconPerformance2;
    case e.PERFORMANCE:
      return (await import("./performance-3MW26HN5-C0zGD_31.js")).IconPerformance;
    case e.PIN_TILTED:
      return (await import("./pin-tilted-J4KWBBRV-DWbLDstK.js")).IconPinTilted;
    case e.PIN:
      return (await import("./pin-I2TXPSNB-BpDf6XCg.js")).IconPin;
    case e.PLANNER:
      return (await import("./planner-VZKOAVMV-CuXgHJae.js")).IconPlanner;
    case e.POINTER_ARROW_LINE:
      return (await import("./pointer-arrow-line-PXPJV7HA-LSABTnts.js")).IconPointerArrowLine;
    case e.POINTER_ARROW:
      return (await import("./pointer-arrow-Q76TWWEJ-CM72TroR.js")).IconPointerArrow;
    case e.POINTER_CROSS:
      return (await import("./pointer-cross-ECVW4JJI-ZfQJM1Wm.js")).IconPointerCross;
    case e.POINTER_HAND:
      return (await import("./pointer-hand-DCOZAYRC-C-vh0jM7.js")).IconPointerHand;
    case e.POINTER_LEFT:
      return (await import("./pointer-left-4SYC3YZH-DfCqXNgS.js")).IconPointerLeft;
    case e.POINTER_MOUSE:
      return (await import("./pointer-mouse-W6FZ7CZ4-Bg2nsxeU.js")).IconPointerMouse;
    case e.POINTER_PEN:
      return (await import("./pointer-pen-PPFWEGLY-DZfQUJt-.js")).IconPointerPen;
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
      return (await import("./search-fat-ZTCXTJ7N-BuSuo5YH.js")).IconSearchFat;
    case e.SEARCH_L:
      return (await import("./search-l-JJI2HKFA-DSXcdV-e.js")).IconSearchL;
    case e.SEARCH_M:
      return (await import("./search-m-FDD4PAH3-BIzfBTax.js")).IconSearchM;
    case e.SEARCH_SMALL:
      return (await import("./search-small-PMPKCT77-qe_YYmbw.js")).IconSearchSmall;
    case e.SECTION:
      return (await import("./section-M4KUGKZF-jAa4D9bv.js")).IconSection;
    case e.SETTINGS2:
      return (await import("./settings2-EBUY6TG3-DxdW9Gg2.js")).IconSettings2;
    case e.SETTINGS3:
      return (await import("./settings3-ZEAVYXTH-BaSr6NUa.js")).IconSettings3;
    case e.SETTINGS4:
      return (await import("./settings4-GEDXXCCQ-hS3N90kz.js")).IconSettings4;
    case e.SETTINGS5:
      return (await import("./settings5-YUMKVM76-ChghUmv_.js")).IconSettings5;
    case e.SETTINGS:
      return (await import("./settings-E7MH2T4P-CiPxK5pk.js")).IconSettings;
    case e.SPEECH_BALLOON2:
      return (await import("./speech-balloon2-WWATS5YU-CAURvqi7.js")).IconSpeechBalloon2;
    case e.SPEECH_BALLOON_SQUARE2:
      return (await import("./speech-balloon-square2-JCXKPIGO-CauFhK57.js")).IconSpeechBalloonSquare2;
    case e.SPEECH_BALLOON_SQUARE_COPY:
      return (await import("./speech-balloon-square-copy-AZTSM7ZM-BLQkqaWe.js")).IconSpeechBalloonSquareCopy;
    case e.SPEECH_BALLOON_SQUARE_TEXT:
      return (await import("./speech-balloon-square-text-FO2BIR3E-Dr__87ZJ.js")).IconSpeechBalloonSquareText;
    case e.SPEECH_BALLOON_SQUARE:
      return (await import("./speech-balloon-square-J4KDKKVG-CUHN9Wvv.js")).IconSpeechBalloonSquare;
    case e.SPEECH_BALLOON:
      return (await import("./speech-balloon-FYFRA7MA-c2r0fWHX.js")).IconSpeechBalloon;
    case e.SPEECH_BALLOONS:
      return (await import("./speech-balloons-V6VBSRPM-Ba-w_1G3.js")).IconSpeechBalloons;
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
      return (await import("./squared-visible-SMSS6ZST-DLMG-_i3.js")).IconSquaredVisible;
    case e.SQUARED:
      return (await import("./squared-LQ2H6YVL-YzL-S0Jd.js")).IconSquared;
    case e.STAMP:
      return (await import("./stamp-2IEF2GEC-Bb3xXehh.js")).IconStamp;
    case e.STAR_FAT:
      return (await import("./star-fat-PLMUNHVV-Dr44UHEB.js")).IconStarFat;
    case e.STAR_L:
      return (await import("./star-l-MLHRTXGD-CCNEHVJz.js")).IconStarL;
    case e.STAR_M:
      return (await import("./star-m-YM5FQUAU-CkhvlhSN.js")).IconStarM;
    case e.STAR_SMALL:
      return (await import("./star-small-M73FZAOV-CtIkQAis.js")).IconStarSmall;
    case e.STICKER:
      return (await import("./sticker-GEA6DI7N-4znQgTtY.js")).IconSticker;
    case e.STOPWATCH:
      return (await import("./stopwatch-ELWMPMKI-D1FhYYzJ.js")).IconStopwatch;
    case e.SUBTRACT_FAT:
      return (await import("./subtract-fat-MAI5FNTN-BPoBdD85.js")).IconSubtractFat;
    case e.SUBTRACT_L:
      return (await import("./subtract-l-7ENCDDJB-B6ramxkS.js")).IconSubtractL;
    case e.SUBTRACT_M:
      return (await import("./subtract-m-OJIWLOAR-Y86s-5M2.js")).IconSubtractM;
    case e.SUBTRACT_S:
      return (await import("./subtract-s-5MZFHD7M-DcxGZg9s.js")).IconSubtractS;
    case e.TABLES:
      return (await import("./tables-HIPF5ZRJ-CvVW-PqR.js")).IconTables;
    case e.TALK_ADD:
      return (await import("./talk-add-3PFIGKNM-D5UHAWEp.js")).IconTalkAdd;
    case e.TALK_CHECK:
      return (await import("./talk-check-LFCCA3K4-B_kgv76m.js")).IconTalkCheck;
    case e.TALK_DELETE:
      return (await import("./talk-delete-NCPSGQMY-xDtggeNb.js")).IconTalkDelete;
    case e.TALK_EDIT:
      return (await import("./talk-edit-6OU7RBFX-x79Z6jjA.js")).IconTalkEdit;
    case e.TALK_EXCLAMATION_MARK:
      return (await import("./talk-exclamation-mark-2KSVQHMQ-DyFTEtiQ.js")).IconTalkExclamationMark;
    case e.TALK_HEART_BROKEN:
      return (await import("./talk-heart-broken-O4SUA46O-Dqej50BL.js")).IconTalkHeartBroken;
    case e.TALK_HEART:
      return (await import("./talk-heart-2WVYFTOY-B4TcOjyq.js")).IconTalkHeart;
    case e.TALK_INFO:
      return (await import("./talk-info-TTVGOM6G-OzNUDafh.js")).IconTalkInfo;
    case e.TALK_INVISIBLE:
      return (await import("./talk-invisible-P7SQTTVB-72pW8KFt.js")).IconTalkInvisible;
    case e.TALK_QUESTION_MARK:
      return (await import("./talk-question-mark-TXXJCPYB-Cg16hKTi.js")).IconTalkQuestionMark;
    case e.TALK_SEARCH:
      return (await import("./talk-search-CIQW7LXS-CcygpGcm.js")).IconTalkSearch;
    case e.TALK_STAR:
      return (await import("./talk-star-FWYMHT4B-CJJo8r_y.js")).IconTalkStar;
    case e.TALK_SUBTRACT:
      return (await import("./talk-subtract-CIBMWHF2-DwiiqBW4.js")).IconTalkSubtract;
    case e.TALK_VISIBLE:
      return (await import("./talk-visible-2XEMMSLG-Cub1Oyxu.js")).IconTalkVisible;
    case e.TALK:
      return (await import("./talk-YVCF344G-leKfrSHl.js")).IconTalk;
    case e.TARGET:
      return (await import("./target-WECLDR3I-hvau2SmT.js")).IconTarget;
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
      return (await import("./timer-N6RIZFBC-Cw4jwvbK.js")).IconTimer;
    case e.TRASH2:
      return (await import("./trash2-YCJV6DKZ-C7cRvY2f.js")).IconTrash2;
    case e.TRASH:
      return (await import("./trash-5UKMKIZ3-BvFaCVNo.js")).IconTrash;
    case e.TRIANGLED_EXCLAMATION_MARK:
      return (await import("./triangled-exclamation-mark-BLMXFQHY-BCcT1vB3.js")).IconTriangledExclamationMark;
    case e.TRIANGLED_INFO:
      return (await import("./triangled-info-AAWAPR4V-BCfkBKnu.js")).IconTriangledInfo;
    case e.TRIANGLED_QUESTION_MARK:
      return (await import("./triangled-question-mark-GMAXLP2H-D4ywTIHu.js")).IconTriangledQuestionMark;
    case e.TRIANGLED:
      return (await import("./triangled-T374IC5N-DMcekLNA.js")).IconTriangled;
    case e.USER_ADD:
      return (await import("./user-add-GHJ3EQZH-CT2zMTjL.js")).IconUserAdd;
    case e.USER_DELETE:
      return (await import("./user-delete-26T6D234-B1zDbufh.js")).IconUserDelete;
    case e.USER_GROUP:
      return (await import("./user-group-DFFQ5TGU-P3DQxNOV.js")).IconUserGroup;
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
      return (await import("./visible-s-EJY3QVFR-D5QOO9jM.js")).IconVisibleS;
    case e.WHEELCHAIR_ACTION:
      return (await import("./wheelchair-action-DK7FZP6V-BU6wB1ig.js")).IconWheelchairAction;
    case e.WHEELCHAIR:
      return (await import("./wheelchair-74B4UNFH-PXAtfejH.js")).IconWheelchair;
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
const Mt = ["aria-hidden", "aria-label", "innerHTML"], P = /* @__PURE__ */ g({
  __name: "Icon",
  props: {
    name: {},
    size: { default: "medium" },
    color: {},
    ariaLabel: {}
  },
  setup(o) {
    const a = o, { bemm: t } = H("icon"), c = D(() => {
      const _ = [t()];
      return a.size && _.push(t("", a.size)), a.color && _.push(t("", `color-${a.color}`)), I.value && _.push(t("", "is-brand")), _;
    }), r = y(""), I = y(!1), u = {
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
      "check-circle": "circled-check"
    };
    return je(async () => {
      if (!a.name) {
        r.value = "", I.value = !1;
        return;
      }
      const _ = T[a.name] || a.name;
      try {
        if (u[a.name]) {
          r.value = u[a.name], I.value = !0;
          return;
        }
        I.value = !1;
        const p = Object.keys(e).find((d) => e[d] === _);
        if (p) {
          const d = e[p];
          r.value = await kt(d);
        } else
          console.warn(`Icon "${a.name}" not found`), r.value = "";
      } catch {
        console.warn(`Icon "${a.name}" not found`), r.value = "", I.value = !1;
      }
    }), (_, p) => (i(), l("div", te({
      class: c.value,
      "aria-hidden": !_.ariaLabel,
      "aria-label": _.ariaLabel
    }, _.$attrs, { innerHTML: r.value }), null, 16, Mt));
  }
}), Ft = {
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
    size: { default: Ft.MEDIUM },
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
  setup(o) {
    const a = o, { bemm: t } = H("button"), c = pe(), r = D(() => {
      const R = [t()];
      return a.icon && R.push(t("", "has-icon")), R.push(t("", a.size)), R.push(t("", a.variant)), (!u.value && a.icon || a.iconOnly) && R.push(t("", "icon-only")), u.value && a.icon && R.push(t("", "text-icon")), a.loading && R.push(t("", "loading")), a.block && R.push(t("", "block")), I.value && R.push(t("", "disabled")), a.fullWidth && R.push(t("", "full-width")), R;
    }), I = y(a.disabled);
    ce(
      () => a.disabled,
      (R) => {
        I.value = R || a.loading;
      },
      { immediate: !0 }
    ), ce(
      () => a.loading,
      (R) => {
        I.value = a.disabled || R;
      }
    );
    const u = D(() => !!(c != null && c.default)), T = D(() => a.to ? "router-link" : a.href ? "a" : a.element || "button"), _ = D(() => {
      if (T.value !== "router-link")
        return a.href ? a.href : void 0;
    }), p = D(() => {
      if (T.value === "button")
        return a.type;
    }), d = D(() => {
      const R = {};
      return a.color && (R["--button-color"] = `var(--color-${a.color})`, R["--button-color-text"] = `var(--color-${a.color}-text)`, a.variant === Fe.OUTLINE && (R["--button-color-text"] = `var(--color-${a.color})`, R["--button-color-text-hover"] = `var(--color-${a.color}-text)`)), R;
    });
    return (R, E) => (i(), h(j(T.value), te({
      to: T.value === "router-link" ? a.to : void 0,
      href: _.value,
      class: r.value,
      disabled: T.value === "button" ? I.value : void 0,
      type: p.value,
      style: d.value,
      title: R.tooltip
    }, R.$attrs), {
      default: F(() => [
        m("div", {
          class: s(n(t)("container"))
        }, [
          R.icon && !R.iconAfter ? (i(), l("span", {
            key: 0,
            class: s(n(t)("icon"))
          }, [
            M(P, { name: R.icon }, null, 8, ["name"])
          ], 2)) : A("", !0),
          u.value && !a.iconOnly ? (i(), l("span", {
            key: 1,
            class: s(n(t)("text"))
          }, [
            f(R.$slots, "default")
          ], 2)) : A("", !0),
          R.icon && R.iconAfter ? (i(), l("span", {
            key: 2,
            class: s(n(t)("icon"))
          }, [
            M(P, { name: R.icon }, null, 8, ["name"])
          ], 2)) : A("", !0)
        ], 2),
        R.loading ? (i(), l("div", {
          key: 0,
          class: s(n(t)("loading"))
        }, [...E[0] || (E[0] = [
          m("span", { class: "spinner" }, null, -1)
        ])], 2)) : A("", !0)
      ]),
      _: 3
    }, 16, ["to", "href", "class", "disabled", "type", "style", "title"]));
  }
}), Ar = /* @__PURE__ */ g({
  __name: "ButtonGroup",
  props: {
    direction: { default: "row" },
    fluid: { type: Boolean, default: !1 },
    gap: { default: "medium" },
    align: { default: "start" },
    justify: { default: "start" },
    wrap: { type: Boolean }
  },
  setup(o) {
    const a = o, { bemm: t } = H("button-group"), c = D(() => {
      const r = [t()];
      return r.push(t("", a.direction)), r.push(t("", `gap-${a.gap}`)), r.push(t("", `align-${a.align}`)), r.push(t("", `justify-${a.justify}`)), a.fluid && r.push(t("", "fluid")), a.wrap && r.push(t("", "wrap")), r;
    });
    return (r, I) => (i(), l("div", {
      class: s(c.value)
    }, [
      f(r.$slots, "default")
    ], 2));
  }
}), Wt = ["data-variant"], Gt = { class: "card__container" }, Kt = {
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
  setup(o) {
    const a = o, t = pe(), c = y(), r = y(50), I = y(50), u = D(() => a.title || t.header), T = D(() => t.footer), _ = D(() => [
      "card",
      a.variant && `card--${a.variant}`,
      a.color && `card--${a.color}`,
      a.color && "card--has-color",
      a.featured && "card--featured",
      a.hoverable && "card--hoverable",
      a.noPadding && "card--no-padding",
      u.value && "card--has-header",
      T.value && "card--has-footer"
    ].filter(Boolean)), p = D(() => {
      const E = {
        "--pointer-x": `${r.value}%`,
        "--pointer-y": `${I.value}%`
      };
      return a.color && (E["--card-color"] = `var(--color-${a.color})`), E;
    }), d = (E) => {
      if (!c.value) return;
      const O = c.value.getBoundingClientRect(), N = E.clientX - O.left, w = E.clientY - O.top;
      r.value = Math.round(N / O.width * 100), I.value = Math.round(w / O.height * 100);
    }, R = () => {
      r.value = 50, I.value = 50;
    };
    return (E, O) => (i(), l("div", {
      class: s(_.value),
      "data-variant": E.variant,
      style: Y(p.value),
      onMousemove: d,
      onMouseleave: R,
      ref_key: "cardRef",
      ref: c
    }, [
      m("div", Gt, [
        u.value ? (i(), l("div", {
          key: 0,
          class: s(["card__header", E.noHeaderPadding && "card__header--no-padding"])
        }, [
          E.title ? (i(), l("h3", Kt, L(E.title), 1)) : f(E.$slots, "header", { key: 1 })
        ], 2)) : A("", !0),
        m("div", {
          class: s(["card__content", E.noContentPadding && "card__content--no-padding"])
        }, [
          f(E.$slots, "default")
        ], 2),
        T.value ? (i(), l("div", {
          key: 1,
          class: s(["card__footer", E.noFooterPadding && "card__footer--no-padding"])
        }, [
          f(E.$slots, "footer")
        ], 2)) : A("", !0)
      ])
    ], 46, Wt));
  }
}), Vt = { class: "container__header-content" }, $t = {
  key: 0,
  class: "container__header-text"
}, Yt = {
  key: 0,
  class: "container__title"
}, Xt = {
  key: 1,
  class: "container__subtitle"
}, Qt = /* @__PURE__ */ g({
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
  setup(o) {
    const a = o, t = D(() => [
      "container",
      a.fluid && "container--fluid",
      a.max && `container--${a.max}`
    ]), c = D(() => {
      const r = {
        small: "600px",
        medium: "900px",
        large: "1200px",
        wide: "1400px",
        full: "100%"
      };
      return {
        "--container-max-width": a.maxWidth || r[a.max] || r.large,
        "--container-padding": a.padding || "var(--spacing)"
      };
    });
    return (r, I) => (i(), l("div", {
      class: s(t.value),
      style: Y(c.value)
    }, [
      r.showHeader && (r.title || r.subtitle || r.$slots.header) ? (i(), l("header", {
        key: 0,
        class: s(["container__header", { "container__header--no-padding": r.noHeaderPadding }])
      }, [
        m("div", Vt, [
          r.title || r.subtitle ? (i(), l("div", $t, [
            r.title ? (i(), l("h1", Yt, L(r.title), 1)) : A("", !0),
            r.subtitle ? (i(), l("p", Xt, L(r.subtitle), 1)) : A("", !0)
          ])) : A("", !0),
          f(r.$slots, "header")
        ])
      ], 2)) : A("", !0),
      m("main", {
        class: s(["container__content", { "container__content--no-padding": r.noContentPadding }])
      }, [
        f(r.$slots, "default")
      ], 2),
      r.showFooter && r.$slots.footer ? (i(), l("footer", {
        key: 1,
        class: s(["container__footer", { "container__footer--no-padding": r.noFooterPadding }])
      }, [
        f(r.$slots, "footer")
      ], 2)) : A("", !0)
    ], 6));
  }
}), zt = ["data-variant", "data-size"], Tr = /* @__PURE__ */ g({
  __name: "Badge",
  props: {
    variant: { default: "default" },
    size: { default: "medium" },
    color: {},
    icon: {}
  },
  setup(o) {
    const a = o, t = D(() => [
      "badge",
      a.variant && `badge--${a.variant}`,
      a.size && `badge--${a.size}`,
      a.color && "badge--has-color"
    ]), c = D(() => a.color ? {
      "--badge-color": `var(--color-${a.color})`,
      "--badge-text-color": `var(--color-${a.color})-text`
    } : {});
    return (r, I) => (i(), l("span", {
      class: s(t.value),
      "data-variant": r.variant,
      "data-size": r.size,
      style: Y(c.value)
    }, [
      r.icon ? (i(), h(n(P), {
        key: 0,
        name: r.icon,
        class: "badge__icon"
      }, null, 8, ["name"])) : A("", !0),
      f(r.$slots, "default")
    ], 14, zt));
  }
}), mr = {
  DEFAULT: "default",
  OUTLINE: "outline"
};
var he = /* @__PURE__ */ ((o) => (o.SMALL = "small", o.MEDIUM = "medium", o.LARGE = "large", o))(he || {}), J = /* @__PURE__ */ ((o) => (o.BACKGROUND = "background", o.FOREGROUND = "foreground", o.PRIMARY = "primary", o.SECONDARY = "secondary", o.SUCCESS = "success", o.WARNING = "warning", o.ERROR = "error", o.INFO = "info", o))(J || {});
const Le = {
  SHORT: "short",
  LONG: "long",
  RIGHT: "right"
}, qt = {
  BOTTOM_CENTER: "bottom-center"
}, rt = {
  id: "",
  position: qt.BOTTOM_CENTER,
  clickMode: Le.SHORT,
  pressTime: 500,
  menu: [],
  vibrate: !0,
  disabled: !1,
  size: he.MEDIUM
}, jt = {
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
}, We = rt, Re = (o) => o.map((a) => {
  const t = { ...jt, ...a };
  return t.items && t.items.length > 0 && (t.items = Re(t.items)), t;
}).filter((a) => !a.disabled && a.active), Jt = ["href", "onClick"], Zt = { key: 0 }, xt = /* @__PURE__ */ g({
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
  setup(o) {
    const a = H("context-menu-items"), t = o, c = (I) => {
      if (I.link)
        return I.link;
    }, r = (I, u) => {
      var T;
      I.preventDefault(), !((T = u.items) != null && T.length) && (u.action && u.action(), u.link && (window.location.href = u.link), setTimeout(() => {
        var _;
        (_ = t.contextMenu) == null || _.close();
      }, 100));
    };
    return (I, u) => {
      const T = it("ContextMenuItems", !0);
      return i(), l("ul", {
        class: s(n(a)("list"))
      }, [
        (i(!0), l(v, null, W(o.items, (_) => {
          var p, d;
          return i(), l("li", {
            key: _.id + _.label,
            class: s(n(a)("list-item", ["", `size-${_.size}`]))
          }, [
            _.type == "default" ? (i(), l(v, { key: 0 }, [
              M(n(oe), {
                icon: _.icon,
                class: s(n(a)("item", ["", "normal", (p = _.items) != null && p.length ? "has-submenu" : ""])),
                variant: "ghost",
                color: n(J).FOREGROUND,
                href: c(_),
                onClick: (R) => r(R, _)
              }, {
                default: F(() => {
                  var R;
                  return [
                    X(L(_.label) + " ", 1),
                    (R = _.items) != null && R.length ? (i(), h(n(P), {
                      key: 0,
                      name: "chevron-right"
                    })) : A("", !0)
                  ];
                }),
                _: 2
              }, 1032, ["icon", "class", "color", "href", "onClick"]),
              (d = _.items) != null && d.length ? (i(), l("div", {
                key: 0,
                class: s(["panel", n(a)("submenu")])
              }, [
                M(T, {
                  items: n(Re)(_.items),
                  "context-menu": o.contextMenu
                }, null, 8, ["items", "context-menu"])
              ], 2)) : A("", !0)
            ], 64)) : A("", !0),
            _.type == "row" ? (i(), l("div", {
              key: 1,
              class: s(n(a)("row"))
            }, [
              M(T, {
                items: n(Re)(_.items),
                "context-menu": o.contextMenu
              }, null, 8, ["items", "context-menu"])
            ], 2)) : A("", !0),
            _.type == "icon-tile" ? (i(), l("a", {
              key: 2,
              class: s(n(a)("item", ["", "icon-tile"])),
              href: c(_),
              onClick: (R) => r(R, _)
            }, [
              _.icon ? (i(), h(n(P), {
                key: 0,
                class: s(n(a)("icon")),
                name: _.icon
              }, null, 8, ["class", "name"])) : A("", !0),
              _.label ? (i(), l("span", {
                key: 1,
                class: s(n(a)("label"))
              }, L(_.label), 3)) : A("", !0)
            ], 10, Jt)) : A("", !0),
            _.type == "separator" && _.active ? (i(), l("hr", {
              key: 3,
              class: s(n(a)("separator"))
            }, null, 2)) : A("", !0),
            _.type == "header" ? (i(), l("div", {
              key: 4,
              class: s(n(a)("header"))
            }, [
              _.label ? (i(), l("h5", Zt, L(_.label), 1)) : A("", !0)
            ], 2)) : A("", !0)
          ], 2);
        }), 128))
      ], 2);
    };
  }
}), ea = ["id"], ta = /* @__PURE__ */ g({
  __name: "ContextPanel",
  props: {
    config: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(o, { expose: a }) {
    const t = H("context-panel"), c = y(!1), r = y(null), I = y(0), u = y(0), T = o, { id: _, position: p, clickMode: d, pressTime: R, vibrate: E, disabled: O, size: N } = {
      ...rt,
      ...T.config
    }, w = y(null), G = y(!1), k = d === Le.LONG, S = d === Le.RIGHT, b = (K) => {
      O || d !== Le.LONG || (K.preventDefault(), K.stopPropagation(), G.value = !1, w.value = window.setTimeout(() => {
        E && navigator.vibrate && navigator.vibrate(50), B(K), G.value = !0;
      }, R));
    }, C = (K) => {
      O || S && B(K);
    }, U = (K) => {
      K.preventDefault(), K.stopPropagation(), !O && (!k && !S && B(K), k && (w.value && (clearTimeout(w.value), w.value = null), G.value = !1));
    }, V = (K) => {
      O || (K.preventDefault(), w.value && (clearTimeout(w.value), w.value = null));
    }, B = (K) => {
      O || (K && p === "click" && (I.value = Math.round(K.clientX), u.value = Math.round(K.clientY)), c.value ? Ie() : ye());
    }, z = (K) => {
      O || c.value && r.value && !r.value.contains(K.target) && Ie();
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
      toggle: B,
      close: Ie,
      open: ye
    }), (K, Er) => (i(), l("div", {
      id: n(_),
      ref_key: "panelRef",
      ref: r,
      class: s(n(t)("", ["", c.value ? "active" : "inactive", `size:${n(N)}`])),
      style: Y(`--click-x: ${I.value}px; --click-y: ${u.value}px`)
    }, [
      m("div", {
        class: s(n(t)("trigger")),
        onPointerdown: ie(b, ["stop"]),
        onPointerup: ie(U, ["stop"]),
        onPointerleave: ie(V, ["stop"]),
        onContextmenu: ie(C, ["prevent", "stop"])
      }, [
        f(K.$slots, "default")
      ], 34),
      c.value ? (i(), l("div", {
        key: 0,
        class: s(n(t)("overlay")),
        onPointerdown: ie(Ie, ["stop"])
      }, null, 34)) : A("", !0),
      m("div", {
        class: s(["panel", n(t)("panel", ["", c.value ? "active" : "", n(p)])])
      }, [
        m("div", {
          class: s(n(t)("content"))
        }, [
          f(K.$slots, "content")
        ], 2)
      ], 2)
    ], 14, ea));
  }
}), Or = /* @__PURE__ */ g({
  __name: "ContextMenu",
  props: {
    config: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(o, { expose: a }) {
    const t = H("context-menu"), c = y(), r = o, { menu: I } = {
      ...We,
      ...r.config
    }, u = y(Re(I));
    return ce(() => r.config, (T, _) => {
      if (T) {
        const { menu: p } = {
          ...We,
          ...T
        };
        u.value = Re(p);
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
    }), (T, _) => (i(), h(ta, {
      ref_key: "contextMenuRef",
      ref: c,
      config: o.config,
      class: s(n(t)("", `size-${o.config.size}`))
    }, {
      default: F(() => [
        f(T.$slots, "default")
      ]),
      content: F(() => [
        u.value && c.value ? (i(), h(xt, {
          key: 0,
          items: u.value,
          "context-menu": c.value
        }, null, 8, ["items", "context-menu"])) : A("", !0)
      ]),
      _: 3
    }, 8, ["config", "class"]));
  }
}), Lr = /* @__PURE__ */ g({
  __name: "Tabs",
  props: {
    modelValue: { default: "" },
    orientation: { default: "horizontal" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: a }) {
    const t = o, c = a, { bemm: r } = H("tabs"), I = y(t.modelValue), u = D(() => [
      r(),
      r("", t.orientation)
    ]);
    ce(() => t.modelValue, (_) => {
      I.value = _;
    });
    const T = (_) => {
      I.value = _, c("update:modelValue", _);
    };
    return ge("activeTab", I), ge("selectTab", T), (_, p) => (i(), l("div", {
      class: s(u.value)
    }, [
      m("nav", {
        class: s(n(r)("nav")),
        role: "tablist"
      }, [
        f(_.$slots, "tabs")
      ], 2),
      m("div", {
        class: s(n(r)("panels"))
      }, [
        f(_.$slots, "panels")
      ], 2)
    ], 2));
  }
}), aa = ["aria-selected", "aria-controls", "disabled"], wr = /* @__PURE__ */ g({
  __name: "Tab",
  props: {
    id: {},
    label: {},
    icon: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(o) {
    const a = o, { bemm: t } = H("tab"), c = de("activeTab"), r = de("selectTab"), I = D(() => (c == null ? void 0 : c.value) === a.id), u = D(() => {
      const _ = [t()];
      return I.value && _.push(t("", "active")), a.disabled && _.push(t("", "disabled")), a.icon && _.push(t("", "has-icon")), _;
    }), T = () => {
      !a.disabled && r && r(a.id);
    };
    return (_, p) => (i(), l("button", {
      class: s(u.value),
      "aria-selected": I.value,
      "aria-controls": `panel-${a.id}`,
      disabled: a.disabled,
      onClick: T,
      type: "button",
      role: "tab"
    }, [
      a.icon ? (i(), h(P, {
        key: 0,
        name: a.icon,
        class: s(n(t)("icon"))
      }, null, 8, ["name", "class"])) : A("", !0),
      m("span", {
        class: s(n(t)("label"))
      }, L(a.label), 3)
    ], 10, aa));
  }
}), ra = ["id", "aria-labelledby"], Sr = /* @__PURE__ */ g({
  __name: "TabPanel",
  props: {
    id: {}
  },
  setup(o) {
    const a = o, { bemm: t } = H("tab-panel"), c = de("activeTab"), r = D(() => (c == null ? void 0 : c.value) === a.id), I = D(() => [t()]);
    return (u, T) => r.value ? (i(), l("div", {
      key: 0,
      id: `panel-${a.id}`,
      class: s(I.value),
      role: "tabpanel",
      "aria-labelledby": a.id
    }, [
      f(u.$slots, "default")
    ], 10, ra)) : A("", !0);
  }
}), oa = ["width", "height"], na = ["cx", "cy", "r", "stroke-width"], ia = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset", "transform-origin"], sa = ["x", "y"], Ge = /* @__PURE__ */ g({
  __name: "CircularProgress",
  props: {
    percentage: {},
    size: { default: 48 },
    strokeWidth: { default: 4 },
    indeterminate: { type: Boolean, default: !1 },
    color: {}
  },
  setup(o) {
    const a = o, { bemm: t } = H("circular-progress"), c = D(() => a.size / 2), r = D(() => (a.size - a.strokeWidth) / 2), I = D(() => 2 * Math.PI * r.value), u = D(() => {
      if (a.indeterminate)
        return I.value * 0.25;
      const p = Math.min(Math.max(a.percentage || 0, 0), 100);
      return I.value - p / 100 * I.value;
    }), T = D(() => a.percentage ? a.percentage === 100 ? "success" : a.percentage >= 90 ? "almost" : a.percentage >= 50 ? "warning" : "danger" : "default"), _ = D(() => `${a.size / 100 * 16 * 1.75}px`);
    return (p, d) => (i(), l("svg", {
      width: p.size,
      height: p.size,
      class: s(n(t)())
    }, [
      m("circle", {
        class: s(n(t)("track")),
        cx: c.value,
        cy: c.value,
        r: r.value,
        "stroke-width": p.strokeWidth,
        fill: "none"
      }, null, 10, na),
      m("circle", {
        class: s([n(t)("fill", ["", p.color || T.value]), p.indeterminate && n(t)("fill", "indeterminate")]),
        cx: c.value,
        cy: c.value,
        r: r.value,
        "stroke-width": p.strokeWidth,
        fill: "none",
        "stroke-dasharray": I.value,
        "stroke-dashoffset": u.value,
        transform: "rotate(-90)",
        "transform-origin": `${c.value} ${c.value}`
      }, null, 10, ia),
      !p.indeterminate && p.percentage !== void 0 ? (i(), l("text", {
        key: 0,
        x: c.value,
        y: c.value,
        class: s(n(t)("text", ["", p.color || T.value])),
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        style: Y({ fontSize: _.value })
      }, L(Math.round(p.percentage)) + "% ", 15, sa)) : A("", !0)
    ], 10, oa));
  }
}), Dr = /* @__PURE__ */ g({
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
  setup(o) {
    const a = o, { bemm: t } = H("stats-card"), c = {
      small: 32,
      medium: 48,
      large: 64
    }, r = {
      small: 3,
      medium: 4,
      large: 5
    }, I = D(() => a.formatter ? a.formatter(a.value) : a.layout === "progress-circle" || a.layout === "progress-bar" ? `${u.value}%` : a.value.toString()), u = D(() => a.percentage !== void 0 ? Math.min(100, Math.max(0, a.percentage)) : a.total !== void 0 && typeof a.value == "number" ? Math.min(100, Math.max(0, a.value / a.total * 100)) : 0), T = D(() => {
      const p = u.value;
      return p >= 90 ? "success" : p >= 70 ? "info" : p >= 50 ? "warning" : "error";
    }), _ = D(() => {
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
    return (p, d) => (i(), h(n(at), {
      variant: _.value,
      hoverable: p.isClickable,
      class: s(n(t)("", ["", p.size]))
    }, {
      default: F(() => [
        p.layout === "icon" ? (i(), l(v, { key: 0 }, [
          m("div", {
            class: s(n(t)("icon-container", { loading: p.isLoading }))
          }, [
            p.isLoading ? (i(), h(n(Ge), {
              key: 0,
              size: c[p.size],
              "stroke-width": 2,
              indeterminate: ""
            }, null, 8, ["size"])) : (i(), l("div", {
              key: 1,
              class: s(n(t)("icon", ["", p.color]))
            }, [
              M(n(P), { name: p.icon }, null, 8, ["name"])
            ], 2))
          ], 2),
          m("div", {
            class: s(n(t)("content"))
          }, [
            m("span", {
              class: s(n(t)("value"))
            }, L(I.value), 3),
            m("span", {
              class: s(n(t)("label"))
            }, L(p.label), 3)
          ], 2)
        ], 64)) : p.layout === "progress-circle" ? (i(), l(v, { key: 1 }, [
          m("div", {
            class: s(n(t)("progress-container"))
          }, [
            M(n(Ge), {
              percentage: u.value,
              size: c[p.size],
              "stroke-width": r[p.size],
              color: T.value
            }, null, 8, ["percentage", "size", "stroke-width", "color"])
          ], 2),
          m("div", {
            class: s(n(t)("content"))
          }, [
            m("span", {
              class: s(n(t)("value"))
            }, L(I.value), 3),
            m("span", {
              class: s(n(t)("label"))
            }, L(p.label), 3)
          ], 2)
        ], 64)) : p.layout === "progress-bar" ? (i(), l(v, { key: 2 }, [
          m("div", {
            class: s(n(t)("header"))
          }, [
            m("span", {
              class: s(n(t)("label"))
            }, L(p.label), 3),
            m("span", {
              class: s(n(t)("value"))
            }, L(I.value), 3)
          ], 2),
          m("div", {
            class: s(n(t)("progress-bar"))
          }, [
            m("div", {
              class: s(n(t)("progress-fill", ["", p.color])),
              style: Y({ width: `${u.value}%` })
            }, null, 6)
          ], 2)
        ], 64)) : p.layout === "compact" ? (i(), l(v, { key: 3 }, [
          p.icon ? (i(), h(n(P), {
            key: 0,
            name: p.icon,
            class: s(n(t)("compact-icon", ["", p.color]))
          }, null, 8, ["name", "class"])) : A("", !0),
          m("span", {
            class: s(n(t)("compact-value"))
          }, L(I.value), 3),
          p.label ? (i(), l("span", {
            key: 1,
            class: s(n(t)("compact-label"))
          }, L(p.label), 3)) : A("", !0)
        ], 64)) : A("", !0),
        p.$slots.action ? (i(), l("div", {
          key: 4,
          class: s(n(t)("action"))
        }, [
          f(p.$slots, "action")
        ], 2)) : A("", !0)
      ]),
      _: 3
    }, 8, ["variant", "hoverable", "class"]));
  }
}), Cr = /* @__PURE__ */ g({
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
  setup(o, { emit: a }) {
    const t = o, c = a, { bemm: r } = H("option-item"), I = (u) => {
      t.clickable && c("click", u);
    };
    return (u, T) => (i(), l("div", {
      class: s([
        n(r)(),
        u.clickable && n(r)("", "clickable"),
        u.selected && n(r)("", "selected")
      ]),
      onClick: I
    }, [
      m("div", {
        class: s(n(r)("content"))
      }, [
        u.icon || u.$slots.icon ? (i(), l("div", {
          key: 0,
          class: s(n(r)("icon"))
        }, [
          f(u.$slots, "icon", {}, () => [
            u.icon ? (i(), h(n(P), {
              key: 0,
              name: u.icon
            }, null, 8, ["name"])) : A("", !0)
          ])
        ], 2)) : A("", !0),
        m("div", {
          class: s(n(r)("info"))
        }, [
          u.label || u.$slots.label ? (i(), l("div", {
            key: 0,
            class: s(n(r)("label"))
          }, [
            f(u.$slots, "label", {}, () => [
              X(L(u.label), 1)
            ])
          ], 2)) : A("", !0),
          u.value || u.description || u.$slots.default ? (i(), l("div", {
            key: 1,
            class: s(n(r)("value"))
          }, [
            f(u.$slots, "default", {}, () => [
              X(L(u.value || u.description), 1)
            ])
          ], 2)) : A("", !0)
        ], 2)
      ], 2),
      u.$slots.actions || u.showArrow ? (i(), l("div", {
        key: 0,
        class: s(n(r)("actions"))
      }, [
        f(u.$slots, "actions", {}, () => [
          u.showArrow ? (i(), h(n(P), {
            key: 0,
            name: "chevron-right",
            class: s(n(r)("arrow"))
          }, null, 8, ["class"])) : A("", !0)
        ])
      ], 2)) : A("", !0)
    ], 2));
  }
}), ca = ["stroke-dasharray"], fr = /* @__PURE__ */ g({
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
  setup(o) {
    const a = o, { bemm: t } = H("progress"), c = D(() => a.max === 0 ? 0 : Math.min(100, Math.max(0, a.value / a.max * 100)));
    return (r, I) => (i(), l("div", {
      class: s(n(t)("", [`type-${r.type}`, `size-${r.size}`]))
    }, [
      r.type === "linear" && r.showBar ? (i(), l("div", {
        key: 0,
        class: s(n(t)("bar"))
      }, [
        m("div", {
          class: s(n(t)("fill", {
            indeterminate: r.indeterminate,
            [`variant-${r.variant}`]: !0
          })),
          style: Y(r.indeterminate ? void 0 : { width: `${c.value}%` })
        }, [
          r.showPercentageInBar && !r.indeterminate ? (i(), l("span", {
            key: 0,
            class: s(n(t)("bar-label"))
          }, L(Math.round(c.value)) + "% ", 3)) : A("", !0)
        ], 6)
      ], 2)) : A("", !0),
      r.type === "circular" ? (i(), l("div", {
        key: 1,
        class: s(n(t)("circular"))
      }, [
        (i(), l("svg", {
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
              indeterminate: r.indeterminate,
              [`variant-${r.variant}`]: !0
            })),
            cx: "50",
            cy: "50",
            r: "45",
            fill: "none",
            "stroke-width": "6",
            "stroke-dasharray": r.indeterminate ? "212.25 70.75" : `${c.value * 2.83} 283`,
            style: Y(r.indeterminate ? { animation: "circular-indeterminate 1.4s ease-in-out infinite" } : void 0)
          }, null, 14, ca)
        ], 2)),
        r.showPercentage && !r.indeterminate ? (i(), l("div", {
          key: 0,
          class: s(n(t)("circular-label"))
        }, L(Math.round(c.value)) + "% ", 3)) : A("", !0)
      ], 2)) : A("", !0),
      r.label || r.showPercentage ? (i(), l("div", {
        key: 2,
        class: s(n(t)("label"))
      }, [
        r.label ? (i(), l("span", {
          key: 0,
          class: s(n(t)("label-text"))
        }, L(r.label), 3)) : A("", !0),
        r.showPercentage && !r.showPercentageInBar ? (i(), l("span", {
          key: 1,
          class: s(n(t)("label-percentage"))
        }, L(Math.round(c.value)) + "% ", 3)) : A("", !0)
      ], 2)) : A("", !0),
      r.details && r.details.length > 0 ? (i(), l("div", {
        key: 3,
        class: s(n(t)("details"))
      }, [
        (i(!0), l(v, null, W(r.details, (u, T) => (i(), l("span", {
          key: T,
          class: s(n(t)("detail"))
        }, L(u), 3))), 128))
      ], 2)) : A("", !0),
      r.$slots.default ? (i(), l("div", {
        key: 4,
        class: s(n(t)("content"))
      }, [
        f(r.$slots, "default")
      ], 2)) : A("", !0)
    ], 2));
  }
}), la = ["aria-label"], ua = /* @__PURE__ */ g({
  __name: "ThemeToggle",
  props: {
    theme: { default: "light" }
  },
  emits: ["toggle"],
  setup(o, { emit: a }) {
    const t = o, { bemm: c } = H("theme-toggle"), r = D(() => t.theme === "system" ? "monitor" : t.theme === "dark" ? "sun" : "moon");
    return (I, u) => (i(), l("button", {
      class: s(n(c)()),
      onClick: u[0] || (u[0] = (T) => I.$emit("toggle")),
      "aria-label": I.theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      type: "button"
    }, [
      M(n(P), { name: r.value }, null, 8, ["name"])
    ], 10, la));
  }
});
let Ke = 0;
function Ia(o = "id") {
  return Ke++, `${o}-${Ke}`;
}
const _a = { class: "input-wrapper" }, da = ["for"], Ea = {
  key: 0,
  class: "input-required"
}, Ra = {
  key: 1,
  class: "input-description"
}, pa = ["id", "type", "placeholder", "disabled", "readonly", "required"], Aa = ["title"], Ta = {
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
  setup(o, { emit: a }) {
    const t = o;
    st();
    const c = Ia("input"), r = De(o, "modelValue"), I = a, u = (d) => {
      const R = d.target;
      r.value = R.value, I("input", d);
    }, T = D(() => [
      "input-container",
      `input-container--${t.size}`,
      `input-container--${t.variant}`,
      t.disabled && "input-container--disabled",
      t.readonly && "input-container--readonly",
      t.error && "input-container--error",
      t.prefixIcon && "input-container--has-prefix",
      t.suffixIcon && "input-container--has-suffix",
      t.clearable && r.value && "input-container--has-clear"
    ]), _ = D(() => [
      "input",
      `input--${t.size}`,
      `input--${t.variant}`
    ]), p = () => {
      r.value = "", I("clear");
    };
    return (d, R) => (i(), l("div", _a, [
      d.label ? (i(), l("label", {
        key: 0,
        for: n(c),
        class: "input-label"
      }, [
        X(L(d.label) + " ", 1),
        d.required ? (i(), l("span", Ea, "*")) : A("", !0)
      ], 8, da)) : A("", !0),
      d.description ? (i(), l("div", Ra, L(d.description), 1)) : A("", !0),
      m("div", {
        class: s(["input-container", T.value])
      }, [
        f(d.$slots, "control", {
          id: n(c),
          value: r.value,
          disabled: d.disabled,
          handleInput: u
        }, () => [
          d.prefixIcon ? (i(), h(n(P), {
            key: 0,
            name: d.prefixIcon,
            class: "input-icon input-icon--prefix"
          }, null, 8, ["name"])) : A("", !0),
          ct(m("input", te({
            id: n(c),
            "onUpdate:modelValue": R[0] || (R[0] = (E) => r.value = E),
            type: d.type,
            placeholder: d.placeholder,
            disabled: d.disabled,
            readonly: d.readonly,
            required: d.required,
            class: _.value
          }, d.$attrs, {
            onFocus: R[1] || (R[1] = (E) => d.$emit("focus", E)),
            onBlur: R[2] || (R[2] = (E) => d.$emit("blur", E)),
            onInput: u,
            onChange: R[3] || (R[3] = (E) => d.$emit("change", E))
          }), null, 16, pa), [
            [lt, r.value]
          ]),
          d.suffixIcon ? (i(), h(n(P), {
            key: 1,
            name: d.suffixIcon,
            class: "input-icon input-icon--suffix"
          }, null, 8, ["name"])) : A("", !0),
          d.clearable && r.value ? (i(), l("button", {
            key: 2,
            type: "button",
            class: "input-clear",
            onClick: p,
            title: d.clearTitle
          }, [
            M(n(P), { name: "multiply" })
          ], 8, Aa)) : A("", !0)
        ])
      ], 2),
      d.error && d.error.length ? (i(), l("div", Ta, [
        (i(!0), l(v, null, W(d.error, (E) => (i(), l("div", {
          key: E,
          class: "input-error"
        }, L(E), 1))), 128))
      ])) : A("", !0)
    ]));
  }
}), hr = /* @__PURE__ */ g({
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
  setup(o) {
    const a = De(o, "modelValue");
    return (t, c) => (i(), h(n(Se), te({
      modelValue: a.value,
      "onUpdate:modelValue": c[0] || (c[0] = (r) => a.value = r),
      type: "search",
      "prefix-icon": "search",
      clearable: t.clearable
    }, t.$attrs, {
      onFocus: c[1] || (c[1] = (r) => t.$emit("focus", r)),
      onBlur: c[2] || (c[2] = (r) => t.$emit("blur", r)),
      onInput: c[3] || (c[3] = (r) => t.$emit("input", r)),
      onChange: c[4] || (c[4] = (r) => t.$emit("change", r)),
      onClear: c[5] || (c[5] = (r) => t.$emit("clear"))
    }), null, 16, ["modelValue", "clearable"]));
  }
}), ma = /* @__PURE__ */ g({
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
  setup(o) {
    const a = De(o, "modelValue");
    return (t, c) => (i(), h(n(Se), te({
      modelValue: a.value,
      "onUpdate:modelValue": c[0] || (c[0] = (r) => a.value = r),
      type: "text"
    }, t.$attrs, {
      onFocus: c[1] || (c[1] = (r) => t.$emit("focus", r)),
      onBlur: c[2] || (c[2] = (r) => t.$emit("blur", r)),
      onInput: c[3] || (c[3] = (r) => t.$emit("input", r)),
      onChange: c[4] || (c[4] = (r) => t.$emit("change", r)),
      onClear: c[5] || (c[5] = (r) => t.$emit("clear"))
    }), null, 16, ["modelValue"]));
  }
}), Oa = ["id", "value", "disabled", "onInput", "onChange"], La = {
  key: 0,
  value: ""
}, wa = ["value"], Sa = ["label"], Da = ["value"], Ca = ["id", "value", "disabled", "onChange"], fa = {
  key: 0,
  value: ""
}, ha = ["value"], Na = ["label"], ga = ["value"], Ne = "select-input", Nr = /* @__PURE__ */ g({
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
      default: void 0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ re(["update:modelValue", "change", "touched", "focus", "blur"], ["update:modelValue"]),
  setup(o, { emit: a }) {
    const t = De(o, "modelValue"), c = o, r = a, I = H(Ne), u = (R) => typeof R == "string" ? {
      label: R,
      value: R
    } : R && typeof R == "object" && ("label" in R || "value" in R) ? {
      label: R.label || R.value || "",
      value: R.value || R.label || "",
      disabled: R.disabled,
      icon: R.icon
    } : (console.warn("Invalid option format:", R), {
      label: String(R),
      value: String(R)
    }), T = (R) => !R || !Array.isArray(R) ? !1 : R.some((E) => typeof E == "object" && "title" in E && "options" in E), _ = y(T(c.options)), p = D(() => T(c.options) ? c.options.map((R) => ({
      title: R.title,
      options: R.options.map((E) => u(E))
    })) : c.options.map((R) => u(R))), d = (R) => {
      const E = c.allowNull && R === "" ? null : R;
      r("change", E);
    };
    return (R, E) => t.value !== void 0 ? (i(), h(Se, {
      key: 0,
      modelValue: t.value,
      "onUpdate:modelValue": E[0] || (E[0] = (O) => t.value = O),
      block: Ne,
      label: R.label,
      description: R.description,
      error: R.error,
      size: R.size,
      disabled: R.disabled,
      onChange: d,
      onTouched: E[1] || (E[1] = (O) => R.$emit("touched", O))
    }, {
      control: F(({ id: O, value: N, disabled: w, handleInput: G }) => [
        m("select", {
          id: O,
          value: N ?? "",
          class: s(n(I)("control")),
          disabled: w,
          onInput: G,
          onChange: G
        }, [
          R.allowNull ? (i(), l("option", La, L(R.nullLabel), 1)) : A("", !0),
          _.value ? A("", !0) : (i(!0), l(v, { key: 1 }, W(p.value, (k) => (i(), l("option", {
            key: k.value,
            value: k.value
          }, L(k.label), 9, wa))), 128)),
          _.value ? (i(!0), l(v, { key: 2 }, W(p.value, (k) => (i(), l("optgroup", {
            key: k.title,
            label: k.title
          }, [
            (i(!0), l(v, null, W(k.options, (S) => (i(), l("option", {
              key: S.value,
              value: S.value
            }, L(S.label), 9, Da))), 128))
          ], 8, Sa))), 128)) : A("", !0)
        ], 42, Oa)
      ]),
      _: 1
    }, 8, ["modelValue", "label", "description", "error", "size", "disabled"])) : (i(), h(Se, {
      key: 1,
      value: c.modelValue ?? "",
      block: Ne,
      label: R.label,
      description: R.description,
      error: R.error,
      size: R.size,
      disabled: R.disabled,
      onChange: d,
      onTouched: E[2] || (E[2] = (O) => R.$emit("touched", O))
    }, {
      control: F(({ id: O, value: N, disabled: w, handleInput: G }) => [
        m("select", {
          id: O,
          value: N ?? "",
          class: s(n(I)("control")),
          disabled: w,
          onChange: (k) => {
            G(k), d(k.target.value || null);
          }
        }, [
          R.allowNull ? (i(), l("option", fa, L(R.nullLabel), 1)) : A("", !0),
          _.value ? A("", !0) : (i(!0), l(v, { key: 1 }, W(p.value, (k) => (i(), l("option", {
            key: k.value,
            value: k.value
          }, L(k.label), 9, ha))), 128)),
          _.value ? (i(!0), l(v, { key: 2 }, W(p.value, (k) => (i(), l("optgroup", {
            key: k.title,
            label: k.title
          }, [
            (i(!0), l(v, null, W(k.options, (S) => (i(), l("option", {
              key: S.value,
              value: S.value
            }, L(S.label), 9, ga))), 128))
          ], 8, Na))), 128)) : A("", !0)
        ], 42, Ca)
      ]),
      _: 1
    }, 8, ["value", "label", "description", "error", "size", "disabled"]));
  }
}), va = ["value", "placeholder", "disabled", "readonly", "maxlength", "spellcheck"], gr = /* @__PURE__ */ g({
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
  setup(o, { emit: a }) {
    const t = o, c = a, r = H("t-input-textarea"), I = y(), u = `textarea-${Math.random().toString(36).substr(2, 9)}`, T = y(0), _ = y(0), p = D(() => {
      const O = {};
      return t.autoGrow && T.value && (O.height = `${T.value}px`), t.minRows && _.value && (O.minHeight = `${t.minRows * _.value}px`), t.maxRows && _.value && (O.maxHeight = `${t.maxRows * _.value}px`), O;
    }), d = (O) => {
      if (!t.autoGrow) return;
      if (O.style.height = "auto", !_.value) {
        const w = window.getComputedStyle(O);
        _.value = parseInt(w.lineHeight);
      }
      let N = O.scrollHeight;
      if (t.minRows && _.value) {
        const w = t.minRows * _.value;
        N = Math.max(N, w);
      }
      if (t.maxRows && _.value) {
        const w = t.maxRows * _.value;
        N = Math.min(N, w);
      }
      T.value = N;
    }, R = (O) => {
      const N = O.target, w = N.value;
      c("update:modelValue", w), c("change", w), t.autoGrow && d(N);
    }, E = (O) => {
      O.key === "Enter" && !O.shiftKey && !O.ctrlKey && !O.metaKey && c("submit", O);
    };
    return ae(() => {
      if (I.value) {
        const O = window.getComputedStyle(I.value);
        _.value = parseInt(O.lineHeight), t.autoGrow && (T.value = t.minRows * _.value, t.modelValue && d(I.value));
      }
    }), (O, N) => (i(), l("div", {
      class: s(n(r)())
    }, [
      O.label ? (i(), l("label", {
        key: 0,
        for: u,
        class: s(n(r)("label"))
      }, L(O.label), 3)) : A("", !0),
      m("div", {
        class: s(n(r)("control-wrapper"))
      }, [
        m("textarea", {
          id: u,
          ref_key: "control",
          ref: I,
          value: O.modelValue,
          style: Y(p.value),
          class: s([n(r)("control"), { "no-resize": !O.allowResize }]),
          placeholder: O.placeholder,
          disabled: O.disabled,
          readonly: O.readonly,
          maxlength: O.maxlength,
          spellcheck: O.spellcheck,
          onInput: R,
          onFocus: N[0] || (N[0] = (w) => O.$emit("focus", w)),
          onBlur: N[1] || (N[1] = (w) => O.$emit("blur", w)),
          onKeydown: E
        }, null, 46, va)
      ], 2),
      O.description || O.showCount ? (i(), l("div", {
        key: 1,
        class: s(n(r)("footer"))
      }, [
        O.description ? (i(), l("p", {
          key: 0,
          class: s(n(r)("description"))
        }, L(O.description), 3)) : A("", !0),
        O.showCount && O.maxlength ? (i(), l("span", {
          key: 1,
          class: s(n(r)("count"))
        }, L((O.modelValue || "").length) + "/" + L(O.maxlength), 3)) : A("", !0)
      ], 2)) : A("", !0)
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
  setup(o, { emit: a }) {
    const t = o, c = de("tableType", "table"), r = D(() => t.as ? t.as : c === "table" ? "tr" : "div"), I = a, { bemm: u } = H("table-row"), T = D(() => {
      const d = [u()];
      return t.clickable && d.push(u("", "clickable")), t.selected && d.push(u("", "selected")), r.value === "div" && d.push(u("", "div")), t.expandable && d.push(u("", "expandable")), t.expanded && d.push(u("", "expanded")), t.level && t.level > 0 && d.push(u("", `level-${t.level}`)), d;
    }), _ = D(() => r.value === "div" && t.columns ? {
      display: "grid",
      gridTemplateColumns: t.columns
    } : {}), p = (d) => {
      t.clickable && I("click", d);
    };
    return (d, R) => (i(), h(j(r.value), {
      class: s(T.value),
      style: Y(_.value),
      onClick: p
    }, {
      default: F(() => [
        f(d.$slots, "default")
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
  setup(o) {
    const a = o, t = de("tableType", "table"), c = D(() => a.as ? a.as : t === "table" ? "td" : "div"), { bemm: r } = H("table-cell"), I = D(() => {
      const u = [r()];
      return a.align !== "left" && u.push(r("", `align-${a.align}`)), a.nowrap && u.push(r("", "nowrap")), u;
    });
    return (u, T) => (i(), h(j(c.value), {
      class: s([I.value, a.className])
    }, {
      default: F(() => [
        f(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ba = ["onClick"], Ha = ["onClick"], ba = {
  key: 1,
  style: { width: "24px" }
}, ya = ["onClick"], Pa = {
  key: 1,
  style: { width: "24px" }
}, vr = /* @__PURE__ */ g({
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
  setup(o, { emit: a }) {
    const t = o, c = a;
    ge("tableType", t.as);
    const r = y(/* @__PURE__ */ new Set());
    je(() => {
      if (t.expandedKeys)
        r.value = new Set(
          (Array.isArray(t.expandedKeys), t.expandedKeys)
        );
      else if (t.defaultExpandAll && t.data) {
        const S = /* @__PURE__ */ new Set(), b = (C, U = "") => {
          C.forEach((V, B) => {
            var q;
            const z = _(V, B);
            ((q = V[t.childrenKey]) == null ? void 0 : q.length) > 0 && (S.add(z), b(V[t.childrenKey], `${U}${B}-`));
          });
        };
        b(t.data), r.value = S;
      }
    });
    const { bemm: I } = H("table"), u = D(() => {
      const S = [I()];
      return t.striped && S.push(I("", "striped")), t.hover && S.push(I("", "hover")), t.bordered && S.push(I("", "bordered")), t.compact && S.push(I("", "compact")), S;
    }), T = D(() => t.columns ? t.columns.map((S) => S.width || "1fr").join(" ") : ""), _ = (S, b) => t.rowKey ? typeof t.rowKey == "function" ? t.rowKey(S, b) : String(S[t.rowKey]) : String(b), p = (S, b) => t.selectedKey === void 0 ? !1 : _(S, b) === String(t.selectedKey), d = (S, b) => {
      t.clickable && c("row-click", S, b);
    }, R = (S, b) => {
      const C = [];
      return t.clickable && C.push(I("row", "clickable")), p(S, b) && C.push(I("row", "selected")), C;
    }, E = (S) => {
      const b = ["header-cell"];
      return S.align && S.align !== "left" && b.push(`align-${S.align}`), S.sortable && b.push("sortable"), b;
    }, O = (S) => {
      const b = [];
      return S.align && S.align !== "left" && b.push(`align-${S.align}`), b;
    }, N = (S, b) => {
      const C = _(S, b);
      return r.value.has(C);
    }, w = (S, b) => {
      const C = _(S, b), U = new Set(r.value);
      U.has(C) ? U.delete(C) : U.add(C), r.value = U, c("expand", !r.value.has(C), S);
    }, G = (S) => {
      var b;
      return t.childrenKey ? ((b = S[t.childrenKey]) == null ? void 0 : b.length) > 0 : !1;
    }, k = D(() => {
      var C;
      if (!t.data || !t.childrenKey || !t.expandable)
        return ((C = t.data) == null ? void 0 : C.map((U, V) => ({ item: U, index: V, level: 0 }))) || [];
      const S = [], b = (U, V = 0, B = "") => {
        U.forEach((z, q) => {
          S.push({ item: z, index: q, level: V, parentIndex: B }), G(z) && N(z, q) && b(z[t.childrenKey], V + 1, `${B}${q}-`);
        });
      };
      return b(t.data), S;
    });
    return (S, b) => (i(), l("div", {
      class: s(n(I)("wrapper"))
    }, [
      (i(), h(j(t.as), {
        class: s(u.value)
      }, {
        default: F(() => [
          t.columns && t.data ? (i(), l(v, { key: 0 }, [
            t.as === "table" ? (i(), l("thead", {
              key: 0,
              class: s(n(I)("head"))
            }, [
              m("tr", null, [
                (i(!0), l(v, null, W(t.columns, (C) => (i(), l("th", {
                  key: C.key,
                  style: Y({ width: C.width }),
                  class: s(E(C))
                }, L(C.label), 7))), 128))
              ])
            ], 2)) : (i(), l("div", {
              key: 1,
              class: s(n(I)("head"))
            }, [
              M(Ve, { columns: T.value }, {
                default: F(() => [
                  (i(!0), l(v, null, W(t.columns, (C) => (i(), h($e, {
                    key: C.key,
                    align: C.align,
                    class: "header-cell"
                  }, {
                    default: F(() => [
                      X(L(C.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["align"]))), 128))
                ]),
                _: 1
              }, 8, ["columns"])
            ], 2)),
            t.as === "table" ? (i(), l("tbody", {
              key: 2,
              class: s(n(I)("body"))
            }, [
              (i(!0), l(v, null, W(k.value, ({ item: C, index: U, level: V }) => (i(), l("tr", {
                key: _(C, U),
                class: s(R(C, U)),
                onClick: (B) => d(C, U)
              }, [
                (i(!0), l(v, null, W(t.columns, (B, z) => (i(), l("td", {
                  key: B.key,
                  class: s(O(B))
                }, [
                  z === 0 && t.expandable ? (i(), l("div", {
                    key: 0,
                    style: Y({ paddingLeft: `${V * t.indentSize}px`, display: "flex", alignItems: "center", gap: "8px" })
                  }, [
                    G(C) ? (i(), l("button", {
                      key: 0,
                      onClick: ie((q) => w(C, U), ["stop"]),
                      class: "expand-button",
                      type: "button"
                    }, [
                      M(n(P), {
                        name: N(C, U) ? "chevron-down" : "chevron-right"
                      }, null, 8, ["name"])
                    ], 8, Ha)) : (i(), l("span", ba)),
                    B.render ? (i(), h(j(B.render(C[B.key], C, U, V)), { key: 2 })) : (i(), l(v, { key: 3 }, [
                      X(L(C[B.key]), 1)
                    ], 64))
                  ], 4)) : (i(), l(v, { key: 1 }, [
                    B.render ? (i(), h(j(B.render(C[B.key], C, U, V)), { key: 0 })) : (i(), l(v, { key: 1 }, [
                      X(L(C[B.key]), 1)
                    ], 64))
                  ], 64))
                ], 2))), 128))
              ], 10, Ba))), 128))
            ], 2)) : (i(), l("div", {
              key: 3,
              class: s(n(I)("body"))
            }, [
              (i(!0), l(v, null, W(k.value, ({ item: C, index: U, level: V }) => (i(), h(Ve, {
                key: _(C, U),
                columns: T.value,
                clickable: t.clickable,
                selected: p(C, U),
                level: V,
                expandable: t.expandable && G(C),
                expanded: N(C, U),
                onClick: (B) => d(C, U)
              }, {
                default: F(() => [
                  (i(!0), l(v, null, W(t.columns, (B, z) => (i(), h($e, {
                    key: B.key,
                    align: B.align
                  }, {
                    default: F(() => [
                      z === 0 && t.expandable ? (i(), l("div", {
                        key: 0,
                        style: Y({ paddingLeft: `${V * t.indentSize}px`, display: "flex", alignItems: "center", gap: "8px" })
                      }, [
                        G(C) ? (i(), l("button", {
                          key: 0,
                          onClick: ie((q) => w(C, U), ["stop"]),
                          class: "expand-button",
                          type: "button"
                        }, [
                          M(n(P), {
                            name: N(C, U) ? "chevron-down" : "chevron-right"
                          }, null, 8, ["name"])
                        ], 8, ya)) : (i(), l("span", Pa)),
                        B.render ? (i(), h(j(B.render(C[B.key], C, U, V)), { key: 2 })) : (i(), l(v, { key: 3 }, [
                          X(L(C[B.key]), 1)
                        ], 64))
                      ], 4)) : (i(), l(v, { key: 1 }, [
                        B.render ? (i(), h(j(B.render(C[B.key], C, U, V)), { key: 0 })) : (i(), l(v, { key: 1 }, [
                          X(L(C[B.key]), 1)
                        ], 64))
                      ], 64))
                    ]),
                    _: 2
                  }, 1032, ["align"]))), 128))
                ]),
                _: 2
              }, 1032, ["columns", "clickable", "selected", "level", "expandable", "expanded", "onClick"]))), 128))
            ], 2))
          ], 64)) : (i(), l(v, { key: 1 }, [
            S.$slots.header && t.as === "table" ? (i(), l("thead", {
              key: 0,
              class: s(n(I)("head"))
            }, [
              f(S.$slots, "header")
            ], 2)) : A("", !0),
            S.$slots.header && t.as === "div" ? (i(), l("div", {
              key: 1,
              class: s(n(I)("head"))
            }, [
              f(S.$slots, "header")
            ], 2)) : A("", !0),
            t.as === "table" ? (i(), l("tbody", {
              key: 2,
              class: s(n(I)("body"))
            }, [
              f(S.$slots, "default")
            ], 2)) : A("", !0),
            t.as === "div" ? (i(), l("div", {
              key: 3,
              class: s(n(I)("body"))
            }, [
              f(S.$slots, "default")
            ], 2)) : A("", !0),
            S.$slots.footer && t.as === "table" ? (i(), l("tfoot", {
              key: 4,
              class: s(n(I)("foot"))
            }, [
              f(S.$slots, "footer")
            ], 2)) : A("", !0),
            S.$slots.footer && t.as === "div" ? (i(), l("div", {
              key: 5,
              class: s(n(I)("foot"))
            }, [
              f(S.$slots, "footer")
            ], 2)) : A("", !0)
          ], 64))
        ]),
        _: 3
      }, 8, ["class"]))
    ], 2));
  }
}), Ua = ["data-variant"], Br = /* @__PURE__ */ g({
  __name: "Section",
  props: {
    variant: { default: "default" },
    centered: { type: Boolean, default: !1 },
    noContainer: { type: Boolean, default: !1 },
    maxWidth: {},
    padding: {},
    fluid: { type: Boolean }
  },
  setup(o) {
    const a = o, { bemm: t } = H("section"), c = {
      maxWidth: a.maxWidth,
      padding: a.padding,
      fluid: a.fluid
    };
    return (r, I) => (i(), l("section", {
      class: s(n(t)("", ["", r.centered ? "centered" : ""])),
      "data-variant": r.variant
    }, [
      f(r.$slots, "before"),
      r.noContainer ? f(r.$slots, "default", { key: 1 }) : (i(), h(n(Qt), ut(te({ key: 0 }, c)), {
        default: F(() => [
          f(r.$slots, "default")
        ]),
        _: 3
      }, 16))
    ], 10, Ua));
  }
}), Hr = /* @__PURE__ */ g({
  __name: "PageHeader",
  props: {
    title: {},
    description: {}
  },
  setup(o) {
    const a = pe(), { bemm: t } = H("page-header"), c = D(() => !!a.actions);
    return (r, I) => (i(), l("div", {
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
          }, L(r.title), 3),
          r.description ? (i(), l("p", {
            key: 0,
            class: s(n(t)("description"))
          }, L(r.description), 3)) : A("", !0)
        ], 2),
        c.value ? (i(), l("div", {
          key: 0,
          class: s(n(t)("actions"))
        }, [
          f(r.$slots, "actions")
        ], 2)) : A("", !0)
      ], 2)
    ], 2));
  }
}), ka = ["href"], Ma = ["href", "target", "rel"], br = /* @__PURE__ */ g({
  __name: "AppHeader",
  props: {
    logo: {},
    navItems: {},
    showThemeToggle: { type: Boolean, default: !0 },
    showSettings: { type: Boolean, default: !1 }
  },
  emits: ["settings-click"],
  setup(o) {
    const { bemm: a } = H("app-header");
    return (t, c) => (i(), l("header", {
      class: s(n(a)())
    }, [
      m("div", {
        class: s(n(a)("container"))
      }, [
        m("div", {
          class: s(n(a)("logo"))
        }, [
          f(t.$slots, "logo", {}, () => [
            t.logo ? (i(), l("a", {
              key: 0,
              href: t.logo.href || "#",
              class: s(n(a)("logo-link"))
            }, [
              t.logo.icon ? (i(), h(n(P), {
                key: 0,
                name: t.logo.icon,
                class: s(n(a)("logo-icon"))
              }, null, 8, ["name", "class"])) : A("", !0),
              t.logo.text ? (i(), l("span", {
                key: 1,
                class: s(n(a)("logo-text"))
              }, L(t.logo.text), 3)) : A("", !0)
            ], 10, ka)) : A("", !0)
          ])
        ], 2),
        t.navItems && t.navItems.length ? (i(), l("nav", {
          key: 0,
          class: s(n(a)("nav"))
        }, [
          (i(!0), l(v, null, W(t.navItems, (r) => f(t.$slots, "nav-link", {
            key: r.path || r.href,
            item: r
          }, () => [
            m("a", {
              href: r.href || r.path || "#",
              class: s(n(a)("nav-link")),
              target: r.external ? "_blank" : void 0,
              rel: r.external ? "noopener noreferrer" : void 0
            }, [
              X(L(r.label) + " ", 1),
              r.external ? (i(), h(n(P), {
                key: 0,
                name: "open-in-new",
                class: s(n(a)("nav-link-icon"))
              }, null, 8, ["class"])) : A("", !0)
            ], 10, Ma)
          ])), 128))
        ], 2)) : A("", !0),
        m("div", {
          class: s(n(a)("actions"))
        }, [
          f(t.$slots, "actions", {}, () => [
            t.showThemeToggle ? (i(), h(ua, { key: 0 })) : A("", !0),
            t.showSettings ? (i(), h(n(oe), {
              key: 1,
              variant: "outline",
              size: "small",
              icon: "settings",
              onClick: c[0] || (c[0] = (r) => t.$emit("settings-click"))
            })) : A("", !0)
          ]),
          f(t.$slots, "extra-actions")
        ], 2)
      ], 2)
    ], 2));
  }
}), Fa = ["title"], Wa = ["href", "title"], Ga = ["src", "alt"], Ye = 768, yr = /* @__PURE__ */ g({
  __name: "AppSidebar",
  props: {
    sections: { default: () => [] },
    userInfo: {},
    collapsed: { type: Boolean },
    collapsible: { type: Boolean, default: !0 }
  },
  emits: ["update:collapsed"],
  setup(o, { emit: a }) {
    const t = o, c = a, { bemm: r } = H("app-sidebar"), I = y(window.innerWidth), u = y(t.collapsed || localStorage.getItem("sidebar-folded") === "true"), T = D(() => I.value <= Ye), _ = D(() => I.value <= Ye), p = D(() => t.collapsible && u.value), d = () => {
      I.value = window.innerWidth;
    }, R = () => {
      t.collapsible && (u.value = !u.value, localStorage.setItem("sidebar-folded", u.value.toString()), c("update:collapsed", u.value));
    };
    return ce(() => t.collapsed, (E) => {
      E !== void 0 && (u.value = E);
    }), ae(() => {
      window.addEventListener("resize", d);
    }), Ae(() => {
      window.removeEventListener("resize", d);
    }), (E, O) => (i(), l(v, null, [
      m("aside", {
        class: s([
          n(r)(),
          p.value && n(r)("", "folded"),
          T.value && n(r)("", "overlay"),
          T.value && !p.value && n(r)("", "overlay-expanded")
        ])
      }, [
        E.collapsible && !_.value ? (i(), l("button", {
          key: 0,
          class: s(n(r)("toggle")),
          onClick: R,
          title: p.value ? "Expand sidebar" : "Collapse sidebar"
        }, [
          M(n(P), {
            name: p.value ? "chevron-right" : "chevron-left"
          }, null, 8, ["name"])
        ], 10, Fa)) : A("", !0),
        E.$slots.header ? (i(), l("div", {
          key: 1,
          class: s(n(r)("header"))
        }, [
          f(E.$slots, "header")
        ], 2)) : A("", !0),
        m("nav", {
          class: s(n(r)("nav"))
        }, [
          (i(!0), l(v, null, W(E.sections, (N) => (i(), l("div", {
            key: N.id,
            class: s(n(r)("section"))
          }, [
            N.title && !p.value ? (i(), l("h3", {
              key: 0,
              class: s(n(r)("section-title"))
            }, L(N.title), 3)) : A("", !0),
            m("div", {
              class: s(n(r)("nav-list"))
            }, [
              (i(!0), l(v, null, W(N.items, (w) => f(E.$slots, "nav-link", {
                key: w.path || w.href,
                item: w,
                isFolded: p.value
              }, () => [
                m("a", {
                  href: w.href || w.path || "#",
                  class: s(n(r)("nav-link")),
                  title: p.value ? w.label : void 0
                }, [
                  M(n(P), {
                    name: w.icon,
                    class: s(n(r)("nav-icon"))
                  }, null, 8, ["name", "class"]),
                  p.value ? A("", !0) : (i(), l("span", {
                    key: 0,
                    class: s(n(r)("nav-text"))
                  }, L(w.label), 3)),
                  w.badge && !p.value ? (i(), l("span", {
                    key: 1,
                    class: s(n(r)("nav-badge"))
                  }, L(w.badge), 3)) : A("", !0)
                ], 10, Wa)
              ])), 128))
            ], 2)
          ], 2))), 128))
        ], 2),
        E.userInfo || E.$slots.footer ? (i(), l("div", {
          key: 2,
          class: s(n(r)("footer"))
        }, [
          f(E.$slots, "footer", {}, () => [
            E.userInfo ? (i(), l("div", {
              key: 0,
              class: s(n(r)("user-profile", ["", p.value ? "folded" : ""]))
            }, [
              m("div", {
                class: s(n(r)("user-avatar"))
              }, [
                E.userInfo.avatar ? (i(), l("img", {
                  key: 1,
                  src: E.userInfo.avatar,
                  alt: E.userInfo.name || "User avatar",
                  class: s(n(r)("user-image"))
                }, null, 10, Ga)) : (i(), h(n(P), {
                  key: 0,
                  name: "user",
                  class: s(n(r)("user-icon"))
                }, null, 8, ["class"]))
              ], 2),
              p.value ? A("", !0) : (i(), l("div", {
                key: 0,
                class: s(n(r)("user-info"))
              }, [
                E.userInfo.name ? (i(), l("span", {
                  key: 0,
                  class: s(n(r)("user-name"))
                }, L(E.userInfo.name), 3)) : A("", !0),
                E.userInfo.email ? (i(), l("span", {
                  key: 1,
                  class: s(n(r)("user-email"))
                }, L(E.userInfo.email), 3)) : A("", !0),
                E.userInfo.role ? (i(), l("span", {
                  key: 2,
                  class: s(n(r)("user-role"))
                }, L(E.userInfo.role), 3)) : A("", !0)
              ], 2)),
              f(E.$slots, "user-menu-trigger", { isFolded: p.value }, () => [
                p.value ? A("", !0) : (i(), h(n(P), {
                  key: 0,
                  name: "chevron-up",
                  class: s(n(r)("user-menu-arrow"))
                }, null, 8, ["class"]))
              ])
            ], 2)) : A("", !0)
          ])
        ], 2)) : A("", !0)
      ], 2),
      T.value && !p.value ? (i(), l("div", {
        key: 0,
        class: s(n(r)("overlay-backdrop")),
        onClick: R
      }, null, 2)) : A("", !0)
    ], 64));
  }
}), Ka = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left"
}, Va = /* @__PURE__ */ g({
  __name: "Tooltip",
  props: {
    position: { default: Ka.BOTTOM },
    delay: { default: 0.5 },
    color: { default: "foreground" }
  },
  setup(o) {
    const a = H("tooltip"), t = pe(), c = o, r = y(!1);
    ce(
      () => t,
      () => {
        t.default && (r.value = t.default.length > 50);
      },
      {
        immediate: !0
      }
    );
    const I = D(() => ({
      "--tooltip-delay": `${c.delay}s`,
      "--tooltip-color": `var(--color-${c.color}, var(--color-foreground))`,
      "--tooltip-text-color": `var(--color-${c.color}-text, var(--color-background))`,
      "--tooltip-font-size": r.value ? "1em" : "0.75em"
    })), u = D(() => a("", ["", c.position]));
    return (T, _) => (i(), l("div", {
      class: s(u.value),
      style: Y(I.value)
    }, [
      m("div", {
        class: s(n(a)("text"))
      }, [
        f(T.$slots, "default")
      ], 2)
    ], 6));
  }
}), $a = ["title"], Ya = ["onClick", "title"], Xe = 768, Xa = 1024, Pr = /* @__PURE__ */ g({
  __name: "SettingsLayout",
  props: {
    sections: {},
    activeSection: {}
  },
  emits: ["navigate"],
  setup(o, { emit: a }) {
    const t = a, { bemm: c } = H("settings-layout"), r = y(window.innerWidth), I = y(!1), u = D(() => r.value <= Xe), T = D(() => r.value <= Xa && r.value > Xe), _ = D(() => !u.value && (I.value || T.value)), p = () => {
      r.value = window.innerWidth;
    }, d = () => {
      I.value = !I.value;
    }, R = (E) => {
      t("navigate", E);
    };
    return ae(() => {
      window.addEventListener("resize", p);
    }), Ae(() => {
      window.removeEventListener("resize", p);
    }), (E, O) => (i(), l("div", {
      class: s([n(c)(), _.value && n(c)("", "folded")])
    }, [
      m("nav", {
        class: s(n(c)("sidebar"))
      }, [
        u.value ? A("", !0) : (i(), l("button", {
          key: 0,
          class: s(n(c)("toggle")),
          onClick: d,
          title: _.value ? "Expand sidebar" : "Collapse sidebar"
        }, [
          M(n(P), {
            name: _.value ? "chevron-right" : "chevron-left"
          }, null, 8, ["name"])
        ], 10, $a)),
        m("ul", {
          class: s(n(c)("nav"))
        }, [
          (i(!0), l(v, null, W(E.sections, (N, w) => (i(), l("li", {
            key: N.id,
            class: s(n(c)("nav-item")),
            style: Y(`--i: ${w}`)
          }, [
            m("button", {
              class: s([
                n(c)("nav-button"),
                E.activeSection === N.id && n(c)("nav-button", "active")
              ]),
              onClick: (G) => R(N.id),
              title: _.value ? N.label : void 0
            }, [
              _.value ? (i(), h(n(Va), {
                key: 0,
                text: N.label,
                position: "right"
              }, {
                default: F(() => [
                  M(n(P), {
                    name: N.icon
                  }, null, 8, ["name"])
                ]),
                _: 2
              }, 1032, ["text"])) : (i(), h(n(P), {
                key: 1,
                name: N.icon
              }, null, 8, ["name"])),
              m("span", {
                class: s(n(c)("nav-label"))
              }, L(N.label), 3)
            ], 10, Ya)
          ], 6))), 128))
        ], 2)
      ], 2),
      m("div", {
        class: s(n(c)("main"))
      }, [
        f(E.$slots, "default")
      ], 2)
    ], 2));
  }
}), Qa = (o, a) => {
  const t = o.__vccOpts || o;
  for (const [c, r] of a)
    t[c] = r;
  return t;
}, za = {};
function qa(o, a) {
  return i(), l("div", null, [
    f(o.$slots, "default")
  ]);
}
const Qe = /* @__PURE__ */ Qa(za, [["render", qa]]), ze = {
  error: (o, ...a) => console.error(o, ...a),
  warn: (o, ...a) => console.warn(o, ...a),
  info: (o, ...a) => console.info(o, ...a),
  debug: (o, ...a) => console.debug(o, ...a)
}, ja = /* @__PURE__ */ g({
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
  setup(o, { emit: a }) {
    const t = o, c = a, r = H("confirm-dialog"), I = y(null), u = () => {
      var d;
      (d = t.onConfirm) == null || d.call(t), c("close");
    }, T = () => {
      var d;
      (d = t.onCancel) == null || d.call(t), c("close");
    }, _ = (d) => {
      switch (d) {
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
      It(() => {
        var R;
        const d = (R = I.value) == null ? void 0 : R.$el;
        if (d) {
          const E = d.querySelector("button") || d;
          E == null || E.focus();
        }
      });
    });
    const p = (d) => {
      d.key === "Enter" ? (d.preventDefault(), u()) : d.key === "Escape" && (d.preventDefault(), T());
    };
    return ae(() => {
      document.addEventListener("keydown", p);
    }), Ae(() => {
      document.removeEventListener("keydown", p);
    }), (d, R) => (i(), l("div", {
      class: s(n(r)())
    }, [
      m("div", {
        class: s(n(r)("icon"))
      }, [
        M(P, { name: d.icon }, null, 8, ["name"])
      ], 2),
      m("div", {
        class: s(n(r)("content"))
      }, [
        m("h3", {
          class: s(n(r)("title"))
        }, L(d.title), 3),
        m("p", {
          class: s(n(r)("message"))
        }, L(d.message), 3)
      ], 2),
      m("div", {
        class: s(n(r)("actions"))
      }, [
        M(oe, {
          type: n(be).BUTTON,
          color: n(J).SECONDARY,
          onClick: T,
          icon: n(e).ARROW_LEFT,
          class: s(n(r)("cancel-button"))
        }, {
          default: F(() => [
            X(L(d.cancelLabel), 1)
          ]),
          _: 1
        }, 8, ["type", "color", "icon", "class"]),
        M(oe, {
          color: d.confirmColor,
          icon: _(d.confirmColor),
          onClick: u,
          class: s(n(r)("confirm-button")),
          ref_key: "confirmButton",
          ref: I,
          autofocus: ""
        }, {
          default: F(() => [
            X(L(d.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["color", "icon", "class"])
      ], 2)
    ], 2));
  }
}), Ja = /* @__PURE__ */ g({
  __name: "ProgressDialog",
  props: {
    title: {},
    message: {},
    progress: { default: 0 },
    showPercentage: { type: Boolean, default: !1 }
  },
  setup(o) {
    const { bemm: a } = H("progress-dialog");
    return (t, c) => (i(), l("div", {
      class: s(n(a)())
    }, [
      m("div", {
        class: s(n(a)("content"))
      }, [
        t.title ? (i(), l("div", {
          key: 0,
          class: s(n(a)("title"))
        }, L(t.title), 3)) : A("", !0),
        t.message ? (i(), l("div", {
          key: 1,
          class: s(n(a)("message"))
        }, L(t.message), 3)) : A("", !0),
        m("div", {
          class: s(n(a)("progress"))
        }, [
          m("div", {
            class: s(n(a)("progress-bar")),
            style: Y({ width: `${t.progress}%` })
          }, null, 6)
        ], 2),
        t.showPercentage ? (i(), l("div", {
          key: 2,
          class: s(n(a)("percentage"))
        }, L(Math.round(t.progress)) + "%", 3)) : A("", !0)
      ], 2)
    ], 2));
  }
}), Za = /* @__PURE__ */ g({
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
  setup(o) {
    const a = o, { bemm: t } = H("input-dialog"), c = y(a.initialValue), r = y(""), I = y(null), u = () => {
      var p;
      const _ = c.value.trim();
      if (a.validate) {
        const d = a.validate(_);
        if (d !== !0) {
          r.value = typeof d == "string" ? d : "Invalid input";
          return;
        }
      }
      (p = a.onConfirm) == null || p.call(a, _);
    }, T = () => {
      var _;
      (_ = a.onCancel) == null || _.call(a);
    };
    return ae(() => {
      setTimeout(() => {
        var _;
        (_ = I.value) == null || _.focus();
      }, 100);
    }), (_, p) => (i(), l("div", {
      class: s(n(t)())
    }, [
      m("h3", {
        class: s(n(t)("title"))
      }, L(_.title), 3),
      _.message ? (i(), l("p", {
        key: 0,
        class: s(n(t)("message"))
      }, L(_.message), 3)) : A("", !0),
      M(n(ma), {
        modelValue: c.value,
        "onUpdate:modelValue": p[0] || (p[0] = (d) => c.value = d),
        placeholder: _.placeholder,
        type: _.type,
        error: r.value,
        class: s(n(t)("input")),
        onKeyup: _t(u, ["enter"]),
        ref_key: "inputRef",
        ref: I
      }, null, 8, ["modelValue", "placeholder", "type", "error", "class"]),
      m("div", {
        class: s(n(t)("actions"))
      }, [
        M(oe, {
          variant: "secondary",
          onClick: T
        }, {
          default: F(() => [
            X(L(_.cancelLabel), 1)
          ]),
          _: 1
        }),
        M(oe, {
          variant: "primary",
          onClick: u
        }, {
          default: F(() => [
            X(L(_.confirmLabel), 1)
          ]),
          _: 1
        })
      ], 2)
    ], 2));
  }
}), xa = {
  config: {
    background: !0,
    position: "center",
    canClose: !0,
    width: "auto",
    closingTimeout: 1e3
  },
  closePopups: !1
}, er = dt({}), tr = {
  ConfirmDialog: ja,
  ProgressDialog: Ja,
  InputDialog: Za
}, ar = () => {
  const o = y([]), a = () => {
    o.value = [];
  }, t = (I) => {
    var d, R, E, O, N;
    if (o.value.length > 5 && a(), typeof I.component == "string") {
      const w = tr[I.component];
      if (!w)
        return ze.error(`Component "${I.component}" not found in popup registry`), "";
      I.component = se(w);
    } else if (typeof I.component == "function") {
      const w = I.component;
      I = {
        ...I,
        component: se(Qe),
        slots: {
          ...I.slots,
          // @ts-expect-error
          default: w
        }
      };
    }
    const u = { ...xa, ...I }, T = u.id || crypto.randomUUID();
    u.closePopups && r(T);
    const _ = {
      ...u.props,
      ...u.on && Object.entries(u.on).reduce(
        (w, [G, k]) => ({
          ...w,
          [`onUpdate:${G}`]: k,
          [`on${G.charAt(0).toUpperCase() + G.slice(1)}`]: k
        }),
        {}
      )
    }, p = {
      id: T,
      component: u.component ? se(u.component) : se(Qe),
      footer: u.footer ? se(u.footer) : void 0,
      header: u.header ? se(u.header) : void 0,
      actions: u.actions,
      props: _,
      title: u.title || "",
      description: u.description || "",
      config: {
        hasBackground: ((d = u.config) == null ? void 0 : d.background) ?? !0,
        position: ((R = u.config) == null ? void 0 : R.position) || "center",
        canClose: ((E = u.config) == null ? void 0 : E.canClose) ?? !0,
        width: ((O = u.config) == null ? void 0 : O.width) || "auto",
        closingTimeout: ((N = u.config) == null ? void 0 : N.closingTimeout) || 1e3
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
        o.value.push(p);
      } catch (w) {
        ze.error("Failed to push popup", {
          error: w,
          popupId: T,
          popupsCount: o.value.length
        }), a();
      }
    }), T;
  }, c = (I = {}) => {
    const { id: u, callback: T } = I;
    if (u) {
      const _ = o.value.find((p) => p.id === u);
      _ && (_.state.closing = !0, T && _.onCallback && _.onCallback(T), setTimeout(() => {
        var p;
        (p = _.onClose) == null || p.call(_), o.value = o.value.filter((d) => d.id !== u);
      }, _.config.closingTimeout));
    } else {
      const _ = o.value[o.value.length - 1];
      _ && (_.state.closing = !0, setTimeout(() => {
        var p;
        (p = _.onClose) == null || p.call(_), o.value.pop();
      }, _.config.closingTimeout));
    }
  }, r = (I) => {
    o.value.map((u) => u.id).filter((u) => u !== I).forEach((u) => c({ id: u }));
  };
  return {
    popups: o,
    showPopup: t,
    showFormPopup: t,
    hidePopup: (I) => c({ id: I }),
    closePopup: c,
    close: (I) => c({ id: I }),
    closeAllPopups: r,
    resePopupState: a
    // Expose reset method
  };
}, Z = ar();
class rr {
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
      const r = c.indexOf(t);
      r > -1 && c.splice(r, 1);
    }
  }
  emitChannel(a, t) {
    const c = this.events.get(a);
    c && c.forEach((r) => r(t));
  }
  // String-based event methods for popup compatibility
  on(a, t) {
    this.events.has(a) || this.events.set(a, []), this.events.get(a).push(t);
  }
  off(a, t) {
    const c = this.events.get(a);
    if (c) {
      const r = c.indexOf(t);
      r > -1 && c.splice(r, 1);
    }
  }
  emit(a, t) {
    const c = this.events.get(a);
    c && c.forEach((r) => r(t));
  }
  clear(a) {
    a ? this.events.delete(a) : this.events.clear();
  }
}
const or = new rr();
function nr() {
  return or;
}
const ir = ["id"], sr = ["onClick"], Ur = /* @__PURE__ */ g({
  __name: "Popup",
  setup(o) {
    const a = H("popup"), t = nr(), c = D(() => Z.popups.value), r = (d) => {
      d.key === "Escape" && Z.closeAllPopups();
    }, I = (d) => {
      d.id && Z.showPopup({ ...d, component: d.component });
    }, u = (d) => {
      d.id && Z.closePopup({ id: d.id });
    }, T = () => {
      Z.closeAllPopups();
    };
    ae(() => {
      t.on("app:key", r), t.on("app:popup-open", I), t.on("app:popup-close", u), t.on("app:popup-force-close", T);
    }), Ae(() => {
      t.off("app:key", r), t.off("app:popup-open", I), t.off("app:popup-close", u), t.off("app:popup-force-close", T);
    });
    const _ = pe(), p = (d) => !!_[d];
    return (d, R) => (i(), h(Je, { to: "body" }, [
      (i(!0), l(v, null, W(c.value, (E) => {
        var O, N;
        return i(), l("div", {
          id: E.id,
          key: E.id,
          class: s([
            n(a)(""),
            n(a)("", E.config.position),
            n(a)("", E.config.hasBackground ? "has-background" : ""),
            n(a)("", `stack-${E.id}`),
            n(a)("", E.state.closing ? "closing" : "")
          ])
        }, [
          E.config.hasBackground ? (i(), l("div", {
            key: 0,
            class: s(n(a)("background")),
            onClick: (w) => n(Z).closePopup({ id: E.id })
          }, null, 10, sr)) : A("", !0),
          m("div", {
            class: s(n(a)("wrapper"))
          }, [
            m("div", {
              class: s(n(a)("container"))
            }, [
              m("div", {
                class: s(n(a)("popup"))
              }, [
                p("header") || E.title ? (i(), l("header", {
                  key: 0,
                  class: s(n(a)("header"))
                }, [
                  E.title ? (i(), l("h4", {
                    key: 0,
                    class: s(n(a)("header-title"))
                  }, L(E.title), 3)) : A("", !0),
                  E.description ? (i(), l("p", {
                    key: 1,
                    class: s(n(a)("header-description"))
                  }, L(E.description), 3)) : A("", !0),
                  f(d.$slots, "header"),
                  E.config.canClose ? (i(), h(oe, {
                    key: 2,
                    class: s(n(a)("close")),
                    icon: n(e).MULTIPLY_M,
                    size: "small",
                    onClick: (w) => n(Z).close(E.id)
                  }, null, 8, ["class", "icon", "onClick"])) : A("", !0),
                  E.header ? (i(), h(j(E.header), { key: 3 })) : A("", !0)
                ], 2)) : A("", !0),
                m("div", {
                  class: s(n(a)("content"))
                }, [
                  (i(), h(j(E.component), te({ ref_for: !0 }, E.props, {
                    key: E.id,
                    "popup-id": E.id,
                    ref_for: !0,
                    ref: (w) => n(er)[E.id] = w,
                    onClose: (w) => n(Z).close(E.id)
                  }), Et({ _: 2 }, [
                    W(E.slots, (w, G) => ({
                      name: G,
                      fn: F(() => [
                        (i(), h(j(w)))
                      ])
                    }))
                  ]), 1040, ["popup-id", "onClose"]))
                ], 2),
                p("footer") || E.footer || (O = E.actions) != null && O.length ? (i(), l("footer", {
                  key: 1,
                  class: s(n(a)("footer"))
                }, [
                  f(d.$slots, "footer"),
                  E.footer ? (i(), h(j(E.footer), te({
                    key: 0,
                    ref_for: !0
                  }, E.props, {
                    onClose: (w) => n(Z).closePopup({ id: E.id })
                  }), null, 16, ["onClose"])) : A("", !0),
                  (N = E.actions) != null && N.length && !E.footer ? (i(), l("div", {
                    key: 1,
                    class: s(n(a)("actions"))
                  }, [
                    (i(!0), l(v, null, W(E.actions, (w) => (i(), h(oe, {
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
                  ], 2)) : A("", !0)
                ], 2)) : A("", !0)
              ], 2)
            ], 2)
          ], 2)
        ], 10, ir);
      }), 128))
    ]));
  }
});
var ne = ((o) => (o[o.DEFAULT = J.PRIMARY] = "DEFAULT", o[o.INFO = J.INFO] = "INFO", o[o.SUCCESS = J.SUCCESS] = "SUCCESS", o[o.WARNING = J.WARNING] = "WARNING", o[o.ERROR = J.ERROR] = "ERROR", o))(ne || {});
const kr = /* @__PURE__ */ g({
  __name: "Alert",
  props: {
    variant: { default: ne.INFO },
    title: {},
    description: {},
    dismissible: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["dismiss"],
  setup(o, { emit: a }) {
    const t = o, c = a, { bemm: r } = H("alert"), I = D(() => t.icon ? t.icon : {
      [ne.DEFAULT]: "",
      [ne.INFO]: "info",
      [ne.SUCCESS]: "check-circle",
      [ne.WARNING]: "alert",
      [ne.ERROR]: "error"
    }[t.variant]), u = () => {
      c("dismiss");
    }, T = D(() => [
      r(),
      t.variant && r("", t.variant)
    ]);
    return (_, p) => (i(), h(n(at), {
      class: s(T.value),
      color: _.variant
    }, {
      default: F(() => [
        m("div", {
          class: s(n(r)("container"))
        }, [
          M(n(P), {
            name: I.value,
            class: s(n(r)("icon"))
          }, null, 8, ["name", "class"]),
          m("div", {
            class: s(n(r)("content"))
          }, [
            _.title ? (i(), l("h4", {
              key: 0,
              class: s(n(r)("title"))
            }, L(_.title), 3)) : A("", !0),
            m("div", {
              class: s(n(r)("description"))
            }, [
              f(_.$slots, "default", {}, () => [
                X(L(_.description), 1)
              ])
            ], 2)
          ], 2),
          _.dismissible ? (i(), l("button", {
            key: 0,
            class: s(n(r)("dismiss")),
            onClick: u
          }, [
            M(n(P), { name: "close" })
          ], 2)) : A("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "color"]));
  }
}), Mr = /* @__PURE__ */ g({
  __name: "EmptyState",
  props: {
    icon: {},
    title: {},
    description: {}
  },
  setup(o) {
    const { bemm: a } = H("empty-state");
    return (t, c) => (i(), l("div", {
      class: s(n(a)())
    }, [
      t.icon ? (i(), h(n(P), {
        key: 0,
        name: t.icon,
        class: s(n(a)("icon"))
      }, null, 8, ["name", "class"])) : A("", !0),
      t.title ? (i(), l("h3", {
        key: 1,
        class: s(n(a)("title"))
      }, L(t.title), 3)) : A("", !0),
      t.description ? (i(), l("p", {
        key: 2,
        class: s(n(a)("description"))
      }, L(t.description), 3)) : A("", !0),
      t.$slots.default || t.$slots.actions ? (i(), l("div", {
        key: 3,
        class: s(n(a)("actions"))
      }, [
        f(t.$slots, "actions", {}, () => [
          f(t.$slots, "default")
        ])
      ], 2)) : A("", !0)
    ], 2));
  }
}), cr = {
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
}, lr = {
  message: "",
  type: ve.INFO,
  position: cr.TOP_RIGHT,
  duration: 5e3,
  dismissible: !0
}, ur = () => {
  const o = y([]), a = (r) => {
    const I = { ...lr, ...r }, u = I.id || crypto.randomUUID(), T = {
      id: u,
      message: I.message,
      title: I.title,
      icon: I.icon,
      duration: I.duration,
      position: I.position,
      type: I.type,
      dismissible: I.dismissible,
      onClose: I.onClose,
      openedTime: Date.now(),
      state: {
        closing: !1
      }
    };
    return o.value.push(T), I.duration && I.duration > 0 && setTimeout(() => {
      t(u);
    }, I.duration), u;
  }, t = (r) => {
    const I = o.value.find((u) => u.id === r);
    I && (I.state.closing = !0, setTimeout(() => {
      var u;
      (u = I.onClose) == null || u.call(I), o.value = o.value.filter((T) => T.id !== r);
    }, 300));
  };
  return {
    toasts: o,
    show: a,
    hide: t,
    hideAll: () => {
      o.value.forEach((r) => t(r.id));
    }
  };
}, qe = ur(), Ir = ["role", "aria-live"], _r = ["onClick"], Fr = /* @__PURE__ */ g({
  __name: "Toast",
  setup(o) {
    const { bemm: a } = H("toast"), t = D(() => qe.toasts.value), c = (u) => u === ve.ERROR ? "alert" : "status", r = (u) => u === ve.ERROR ? "assertive" : "polite", I = (u) => {
      qe.hide(u);
    };
    return (u, T) => (i(), h(Je, { to: "body" }, [
      M(Rt, {
        name: "toast",
        tag: "div",
        class: "toast-container"
      }, {
        default: F(() => [
          (i(!0), l(v, null, W(t.value, (_) => (i(), l("div", {
            key: _.id,
            class: s(n(a)("", [_.type || "", _.position || ""])),
            role: c(_.type),
            "aria-live": r(_.type),
            style: Y(`--toast-color: var(--color-${_.type})`)
          }, [
            m("div", {
              class: s(n(a)("content"))
            }, [
              _.icon ? (i(), h(n(P), {
                key: 0,
                class: s(n(a)("icon")),
                name: _.icon
              }, null, 8, ["class", "name"])) : A("", !0),
              m("div", {
                class: s(n(a)("body"))
              }, [
                _.title ? (i(), l("div", {
                  key: 0,
                  class: s(n(a)("title"))
                }, L(_.title), 3)) : A("", !0),
                m("div", {
                  class: s(n(a)("message"))
                }, L(_.message), 3)
              ], 2)
            ], 2),
            _.dismissible ? (i(), l("button", {
              key: 0,
              class: s(n(a)("close")),
              onClick: (p) => I(_.id),
              "aria-label": "Close notification"
            }, [
              M(n(P), {
                name: "close",
                size: "small"
              })
            ], 10, _r)) : A("", !0)
          ], 14, Ir))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), dr = (o) => o, Wr = { install: dr };
export {
  kr as Alert,
  ne as AlertVariant,
  br as AppHeader,
  yr as AppSidebar,
  Tr as Badge,
  mr as BadgeVariant,
  oe as Button,
  Ar as ButtonGroup,
  at as Card,
  Ge as CircularProgress,
  J as Colors,
  Qt as Container,
  Or as ContextMenu,
  xt as ContextMenuItems,
  ta as ContextPanel,
  Mr as EmptyState,
  P as Icon,
  Cr as OptionItem,
  Hr as PageHeader,
  Ur as Popup,
  Qe as PopupSlot,
  fr as Progress,
  hr as SearchInput,
  Br as Section,
  Nr as SelectInput,
  Pr as SettingsLayout,
  he as Size,
  Dr as StatsCard,
  ma as TInputText,
  gr as TInputTextArea,
  wr as Tab,
  Sr as TabPanel,
  vr as Table,
  $e as TableCell,
  Ve as TableRow,
  Lr as Tabs,
  ma as TextInput,
  ua as ThemeToggle,
  Fr as Toast,
  cr as ToastPosition,
  ve as ToastType,
  Va as Tooltip,
  Ka as TooltipPosition,
  Wr as default,
  dr as install,
  Z as popupService,
  qe as toastService
};
