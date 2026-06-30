import {
  require_build
} from "/build/_shared/chunk-KKCJH6ZU.js";
import {
  motion
} from "/build/_shared/chunk-ZJN32EVK.js";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "/build/_shared/chunk-OJ2362QI.js";
import {
  clsx_default
} from "/build/_shared/chunk-UF6K54N4.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_trainings
} from "/build/_shared/chunk-KA2R6GWF.js";
import "/build/_shared/chunk-HHCPKSUZ.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  Link,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-2744OLY6.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-3BOG53TH.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/services.tsx
var import_react4 = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);

// node_modules/react-calendar/dist/Calendar.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/Calendar/Navigation.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/mimic-function/index.js
var copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
var canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
var changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
var wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
var changeToString = (to, from, name) => {
  const withName = name === "" ? "" : `with ${name.trim()}() `;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  const { writable, enumerable, configurable } = toStringDescriptor;
  Object.defineProperty(to, "toString", { value: newToString, writable, enumerable, configurable });
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}

// node_modules/memoize/distribution/index.js
var cacheStore = /* @__PURE__ */ new WeakMap();
var cacheTimerStore = /* @__PURE__ */ new WeakMap();
function memoize(function_, { cacheKey, cache = /* @__PURE__ */ new Map(), maxAge } = {}) {
  if (maxAge === 0) {
    return function_;
  }
  if (typeof maxAge === "number") {
    const maxSetIntervalValue = 2147483647;
    if (maxAge > maxSetIntervalValue) {
      throw new TypeError(`The \`maxAge\` option cannot exceed ${maxSetIntervalValue}.`);
    }
    if (maxAge < 0) {
      throw new TypeError("The `maxAge` option should not be a negative number.");
    }
  }
  const memoized = function(...arguments_) {
    const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
    const cacheItem = cache.get(key);
    if (cacheItem) {
      return cacheItem.data;
    }
    const result = function_.apply(this, arguments_);
    const computedMaxAge = typeof maxAge === "function" ? maxAge(...arguments_) : maxAge;
    cache.set(key, {
      data: result,
      maxAge: computedMaxAge ? Date.now() + computedMaxAge : Number.POSITIVE_INFINITY
    });
    if (computedMaxAge && computedMaxAge > 0 && computedMaxAge !== Number.POSITIVE_INFINITY) {
      const timer = setTimeout(() => {
        cache.delete(key);
      }, computedMaxAge);
      timer.unref?.();
      const timers = cacheTimerStore.get(function_) ?? /* @__PURE__ */ new Set();
      timers.add(timer);
      cacheTimerStore.set(function_, timers);
    }
    return result;
  };
  mimicFunction(memoized, function_, {
    ignoreNonConfigurable: true
  });
  cacheStore.set(memoized, cache);
  return memoized;
}

// node_modules/get-user-locale/dist/index.js
function isString(el) {
  return typeof el === "string";
}
function isUnique(el, index, arr) {
  return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
  return el.toLowerCase() === el;
}
function fixCommas(el) {
  return el.indexOf(",") === -1 ? el : el.split(",");
}
function normalizeLocale(locale) {
  if (!locale) {
    return locale;
  }
  if (locale === "C" || locale === "posix" || locale === "POSIX") {
    return "en-US";
  }
  if (locale.indexOf(".") !== -1) {
    var _a = locale.split(".")[0], actualLocale = _a === void 0 ? "" : _a;
    return normalizeLocale(actualLocale);
  }
  if (locale.indexOf("@") !== -1) {
    var _b = locale.split("@")[0], actualLocale = _b === void 0 ? "" : _b;
    return normalizeLocale(actualLocale);
  }
  if (locale.indexOf("-") === -1 || !isAllLowerCase(locale)) {
    return locale;
  }
  var _c3 = locale.split("-"), splitEl1 = _c3[0], _d = _c3[1], splitEl2 = _d === void 0 ? "" : _d;
  return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a) {
  var _b = _a === void 0 ? {} : _a, _c3 = _b.useFallbackLocale, useFallbackLocale = _c3 === void 0 ? true : _c3, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? "en-US" : _d;
  var languageList = [];
  if (typeof navigator !== "undefined") {
    var rawLanguages = navigator.languages || [];
    var languages = [];
    for (var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++) {
      var rawLanguagesItem = rawLanguages_1[_i];
      languages = languages.concat(fixCommas(rawLanguagesItem));
    }
    var rawLanguage = navigator.language;
    var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
    languageList = languageList.concat(languages, language);
  }
  if (useFallbackLocale) {
    languageList.push(fallbackLocale);
  }
  return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = memoize(getUserLocalesInternal, { cacheKey: JSON.stringify });
function getUserLocaleInternal(options) {
  return getUserLocales(options)[0] || null;
}
var getUserLocale = memoize(getUserLocaleInternal, { cacheKey: JSON.stringify });
var dist_default = getUserLocale;

// node_modules/@wojtekmaj/date-utils/dist/index.js
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date, offset = defaultOffset) {
    const previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}
function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}
function makeGetRange(getStart, getEnd2) {
  return function makeGetRangeInternal(date) {
    return [getStart(date), getEnd2(date)];
  };
}
function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }
  if (typeof date === "number") {
    return date;
  }
  const year = Number.parseInt(date, 10);
  if (typeof date === "string" && !Number.isNaN(year)) {
    return year;
  }
  throw new Error(`Failed to get year from date: ${date}.`);
}
function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }
  throw new Error(`Failed to get month from date: ${date}.`);
}
function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }
  throw new Error(`Failed to get year from date: ${date}.`);
}
function getCenturyStart(date) {
  const year = getYear(date);
  const centuryStartYear = year + (-year + 1) % 100;
  const centuryStartDate = /* @__PURE__ */ new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
var getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
function getDecadeStart(date) {
  const year = getYear(date);
  const decadeStartYear = year + (-year + 1) % 10;
  const decadeStartDate = /* @__PURE__ */ new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
var getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
function getYearStart(date) {
  const year = getYear(date);
  const yearStartDate = /* @__PURE__ */ new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
var getYearEnd = makeGetEnd(getNextYearStart);
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
var getYearRange = makeGetRange(getYearStart, getYearEnd);
function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date, offset = defaultOffset) {
    const year = getYear(date);
    const month = getMonth(date) + offset;
    const previousPeriod = /* @__PURE__ */ new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
function getMonthStart(date) {
  const year = getYear(date);
  const month = getMonth(date);
  const monthStartDate = /* @__PURE__ */ new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
var getMonthEnd = makeGetEnd(getNextMonthStart);
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
var getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date, offset = defaultOffset) {
    const year = getYear(date);
    const month = getMonth(date);
    const day = getDate(date) + offset;
    const previousPeriod = /* @__PURE__ */ new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
function getDayStart(date) {
  const year = getYear(date);
  const month = getMonth(date);
  const day = getDate(date);
  const dayStartDate = /* @__PURE__ */ new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
var getDayEnd = makeGetEnd(getNextDayStart);
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
var getDayRange = makeGetRange(getDayStart, getDayEnd);
function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}

// node_modules/react-calendar/dist/shared/const.js
var CALENDAR_TYPES = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
};
var CALENDAR_TYPE_LOCALES = {
  gregory: [
    "en-CA",
    "en-US",
    "es-AR",
    "es-BO",
    "es-CL",
    "es-CO",
    "es-CR",
    "es-DO",
    "es-EC",
    "es-GT",
    "es-HN",
    "es-MX",
    "es-NI",
    "es-PA",
    "es-PE",
    "es-PR",
    "es-SV",
    "es-VE",
    "pt-BR"
  ],
  hebrew: ["he", "he-IL"],
  islamic: [
    // ar-LB, ar-MA intentionally missing
    "ar",
    "ar-AE",
    "ar-BH",
    "ar-DZ",
    "ar-EG",
    "ar-IQ",
    "ar-JO",
    "ar-KW",
    "ar-LY",
    "ar-OM",
    "ar-QA",
    "ar-SA",
    "ar-SD",
    "ar-SY",
    "ar-YE",
    "dv",
    "dv-MV",
    "ps",
    "ps-AR"
  ]
};
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];

// node_modules/react-calendar/dist/shared/dateFormatter.js
var formatterCache = /* @__PURE__ */ new Map();
function getFormatter(options) {
  return function formatter(locale, date) {
    var localeWithDefault = locale || dist_default();
    if (!formatterCache.has(localeWithDefault)) {
      formatterCache.set(localeWithDefault, /* @__PURE__ */ new Map());
    }
    var formatterCacheLocale = formatterCache.get(localeWithDefault);
    if (!formatterCacheLocale.has(options)) {
      formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || void 0, options).format);
    }
    return formatterCacheLocale.get(options)(date);
  };
}
function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
  return function(locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}
var formatDateOptions = {
  day: "numeric",
  month: "numeric",
  year: "numeric"
};
var formatDayOptions = { day: "numeric" };
var formatLongDateOptions = {
  day: "numeric",
  month: "long",
  year: "numeric"
};
var formatMonthOptions = { month: "long" };
var formatMonthYearOptions = {
  month: "long",
  year: "numeric"
};
var formatShortWeekdayOptions = { weekday: "short" };
var formatWeekdayOptions = { weekday: "long" };
var formatYearOptions = { year: "numeric" };
var formatDate = getSafeFormatter(formatDateOptions);
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);

// node_modules/react-calendar/dist/shared/dates.js
var SUNDAY = WEEKDAYS[0];
var FRIDAY = WEEKDAYS[5];
var SATURDAY = WEEKDAYS[6];
function getDayOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISO_8601:
      return (weekday + 6) % 7;
    case CALENDAR_TYPES.ISLAMIC:
      return (weekday + 1) % 7;
    case CALENDAR_TYPES.HEBREW:
    case CALENDAR_TYPES.GREGORY:
      return weekday;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function getBeginOfCenturyYear(date) {
  var beginOfCentury = getCenturyStart(date);
  return getYear(beginOfCentury);
}
function getBeginOfDecadeYear(date) {
  var beginOfDecade = getDecadeStart(date);
  return getYear(beginOfDecade);
}
function getBeginOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var year = getYear(date);
  var monthIndex = getMonth(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
function getWeekNumber(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var calendarTypeForWeekNumber = calendarType === CALENDAR_TYPES.GREGORY ? CALENDAR_TYPES.GREGORY : CALENDAR_TYPES.ISO_8601;
  var beginOfWeek = getBeginOfWeek(date, calendarType);
  var year = getYear(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek;
  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === CALENDAR_TYPES.ISO_8601 ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
    year -= 1;
  } while (date < beginOfFirstWeek);
  return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (864e5 * 7)) + 1;
}
function getBegin(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyStart(date);
    case "decade":
      return getDecadeStart(date);
    case "year":
      return getYearStart(date);
    case "month":
      return getMonthStart(date);
    case "day":
      return getDayStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getPreviousCenturyStart(date);
    case "decade":
      return getPreviousDecadeStart(date);
    case "year":
      return getPreviousYearStart(date);
    case "month":
      return getPreviousMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getNextCenturyStart(date);
    case "decade":
      return getNextDecadeStart(date);
    case "year":
      return getNextYearStart(date);
    case "month":
      return getNextMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getPreviousDecadeStart(date, -100);
    case "year":
      return getPreviousYearStart(date, -10);
    case "month":
      return getPreviousMonthStart(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getNextDecadeStart(date, 100);
    case "year":
      return getNextYearStart(date, 10);
    case "month":
      return getNextMonthStart(date, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEnd(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyEnd(date);
    case "decade":
      return getDecadeEnd(date);
    case "year":
      return getYearEnd(date);
    case "month":
      return getMonthEnd(date);
    case "day":
      return getDayEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getPreviousCenturyEnd(date);
    case "decade":
      return getPreviousDecadeEnd(date);
    case "year":
      return getPreviousYearEnd(date);
    case "month":
      return getPreviousMonthEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getPreviousDecadeEnd(date, -100);
    case "year":
      return getPreviousYearEnd(date, -10);
    case "month":
      return getPreviousMonthEnd(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getRange(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyRange(date);
    case "decade":
      return getDecadeRange(date);
    case "year":
      return getYearRange(date);
    case "month":
      return getMonthRange(date);
    case "day":
      return getDayRange(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function(a, b) {
    return a.getTime() - b.getTime();
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}
function toYearLabel(locale, formatYear2, dates) {
  return dates.map(function(date) {
    return (formatYear2 || formatYear)(locale, date);
  }).join(" \u2013 ");
}
function getCenturyLabel(locale, formatYear2, date) {
  return toYearLabel(locale, formatYear2, getCenturyRange(date));
}
function getDecadeLabel(locale, formatYear2, date) {
  return toYearLabel(locale, formatYear2, getDecadeRange(date));
}
function isCurrentDayOfWeek(date) {
  return date.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function isWeekend(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISLAMIC:
    case CALENDAR_TYPES.HEBREW:
      return weekday === FRIDAY || weekday === SATURDAY;
    case CALENDAR_TYPES.ISO_8601:
    case CALENDAR_TYPES.GREGORY:
      return weekday === SATURDAY || weekday === SUNDAY;
    default:
      throw new Error("Unsupported calendar type.");
  }
}

// node_modules/react-calendar/dist/Calendar/Navigation.js
"use client";
var className = "react-calendar__navigation";
function Navigation(_a) {
  var activeStartDate = _a.activeStartDate, drillUp = _a.drillUp, _b = _a.formatMonthYear, formatMonthYear2 = _b === void 0 ? formatMonthYear : _b, _c3 = _a.formatYear, formatYear2 = _c3 === void 0 ? formatYear : _c3, locale = _a.locale, maxDate = _a.maxDate, minDate = _a.minDate, _d = _a.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? "" : _d, navigationAriaLive = _a.navigationAriaLive, navigationLabel = _a.navigationLabel, _e = _a.next2AriaLabel, next2AriaLabel = _e === void 0 ? "" : _e, _f = _a.next2Label, next2Label = _f === void 0 ? "\xBB" : _f, _g = _a.nextAriaLabel, nextAriaLabel = _g === void 0 ? "" : _g, _h = _a.nextLabel, nextLabel = _h === void 0 ? "\u203A" : _h, _j = _a.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? "" : _j, _k = _a.prev2Label, prev2Label = _k === void 0 ? "\xAB" : _k, _l = _a.prevAriaLabel, prevAriaLabel = _l === void 0 ? "" : _l, _m = _a.prevLabel, prevLabel = _m === void 0 ? "\u2039" : _m, setActiveStartDate = _a.setActiveStartDate, showDoubleView = _a.showDoubleView, view = _a.view, views = _a.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== "century";
  var previousActiveStartDate = getBeginPrevious(view, activeStartDate);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginPrevious2(view, activeStartDate) : void 0;
  var nextActiveStartDate = getBeginNext(view, activeStartDate);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginNext2(view, activeStartDate) : void 0;
  var prevButtonDisabled = function() {
    if (previousActiveStartDate.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function() {
    if (previousActiveStartDate2.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious2(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate, "prev");
  }
  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2, "prev2");
  }
  function onClickNext() {
    setActiveStartDate(nextActiveStartDate, "next");
  }
  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2, "next2");
  }
  function renderLabel(date) {
    var label = function() {
      switch (view) {
        case "century":
          return getCenturyLabel(locale, formatYear2, date);
        case "decade":
          return getDecadeLabel(locale, formatYear2, date);
        case "year":
          return formatYear2(locale, date);
        case "month":
          return formatMonthYear2(locale, date);
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    return navigationLabel ? navigationLabel({
      date,
      label,
      locale: locale || getUserLocale() || void 0,
      view
    }) : label;
  }
  function renderButton() {
    var labelClassName = "".concat(className, "__label");
    return (0, import_jsx_runtime.jsxs)("button", { "aria-label": navigationAriaLabel, "aria-live": navigationAriaLive, className: labelClassName, disabled: !drillUpAvailable, onClick: drillUp, style: { flexGrow: 1 }, type: "button", children: [(0, import_jsx_runtime.jsx)("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from"), children: renderLabel(activeStartDate) }), showDoubleView ? (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("span", { className: "".concat(labelClassName, "__divider"), children: " \u2013 " }), (0, import_jsx_runtime.jsx)("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to"), children: renderLabel(nextActiveStartDate) })] }) : null] });
  }
  return (0, import_jsx_runtime.jsxs)("div", { className, children: [prev2Label !== null && shouldShowPrevNext2Buttons ? (0, import_jsx_runtime.jsx)("button", { "aria-label": prev2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev2-button"), disabled: prev2ButtonDisabled, onClick: onClickPrevious2, type: "button", children: prev2Label }) : null, prevLabel !== null && (0, import_jsx_runtime.jsx)("button", { "aria-label": prevAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev-button"), disabled: prevButtonDisabled, onClick: onClickPrevious, type: "button", children: prevLabel }), renderButton(), nextLabel !== null && (0, import_jsx_runtime.jsx)("button", { "aria-label": nextAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next-button"), disabled: nextButtonDisabled, onClick: onClickNext, type: "button", children: nextLabel }), next2Label !== null && shouldShowPrevNext2Buttons ? (0, import_jsx_runtime.jsx)("button", { "aria-label": next2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next2-button"), disabled: next2ButtonDisabled, onClick: onClickNext2, type: "button", children: next2Label }) : null] });
}

// node_modules/react-calendar/dist/CenturyView.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-calendar/dist/CenturyView/Decades.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-calendar/dist/TileGroup.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-calendar/dist/Flex.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function toPercent(num) {
  return "".concat(num, "%");
}
function Flex(_a) {
  var children = _a.children, className8 = _a.className, count = _a.count, direction = _a.direction, offset = _a.offset, style = _a.style, wrap = _a.wrap, otherProps = __rest(_a, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return (0, import_jsx_runtime2.jsx)("div", __assign({ className: className8, style: __assign({ display: "flex", flexDirection: direction, flexWrap: wrap ? "wrap" : "nowrap" }, style) }, otherProps, { children: import_react.Children.map(children, function(child, index) {
    var marginInlineStart = offset && index === 0 ? toPercent(100 * offset / count) : null;
    return (0, import_react.cloneElement)(child, __assign(__assign({}, child.props), { style: {
      flexBasis: toPercent(100 / count),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: marginInlineStart,
      marginInlineStart,
      marginInlineEnd: 0
    } }));
  }) }));
}

// node_modules/react-calendar/dist/shared/utils.js
function between(value, min, max) {
  if (min && min > value) {
    return min;
  }
  if (max && max < value) {
    return max;
  }
  return value;
}
function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName2) {
  var isRange = doRangesOverlap(dateRange, valueRange);
  var classes = [];
  if (isRange) {
    classes.push(baseClassName2);
    var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
    var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
    if (isRangeStart) {
      classes.push("".concat(baseClassName2, "Start"));
    }
    if (isRangeEnd) {
      classes.push("".concat(baseClassName2, "End"));
    }
    if (isRangeStart && isRangeEnd) {
      classes.push("".concat(baseClassName2, "BothEnds"));
    }
  }
  return classes;
}
function isCompleteValue(value) {
  if (Array.isArray(value)) {
    return value[0] !== null && value[1] !== null;
  }
  return value !== null;
}
function getTileClasses(args) {
  if (!args) {
    throw new Error("args is required");
  }
  var value = args.value, date = args.date, hover = args.hover;
  var className8 = "react-calendar__tile";
  var classes = [className8];
  if (!date) {
    return classes;
  }
  var now = /* @__PURE__ */ new Date();
  var dateRange = function() {
    if (Array.isArray(date)) {
      return date;
    }
    var dateType = args.dateType;
    if (!dateType) {
      throw new Error("dateType is required when date is not an array of two dates");
    }
    return getRange(dateType, date);
  }();
  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className8, "--now"));
  }
  if (!value || !isCompleteValue(value)) {
    return classes;
  }
  var valueRange = function() {
    if (Array.isArray(value)) {
      return value;
    }
    var valueType = args.valueType;
    if (!valueType) {
      throw new Error("valueType is required when value is not an array of two dates");
    }
    return getRange(valueType, value);
  }();
  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className8, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className8, "--hasActive"));
  }
  var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className8, "--range"));
  classes.push.apply(classes, valueRangeClassNames);
  var valueArray = Array.isArray(value) ? value : [value];
  if (hover && valueArray.length === 1) {
    var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
    var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className8, "--hover"));
    classes.push.apply(classes, hoverRangeClassNames);
  }
  return classes;
}

// node_modules/react-calendar/dist/TileGroup.js
function TileGroup(_a) {
  var className8 = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b, dateTransform = _a.dateTransform, dateType = _a.dateType, end = _a.end, hover = _a.hover, offset = _a.offset, renderTile = _a.renderTile, start = _a.start, _c3 = _a.step, step = _c3 === void 0 ? 1 : _c3, value = _a.value, valueType = _a.valueType;
  var tiles = [];
  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push(renderTile({
      classes: getTileClasses({
        date,
        dateType,
        hover,
        value,
        valueType
      }),
      date
    }));
  }
  return (0, import_jsx_runtime3.jsx)(Flex, { className: className8, count, offset, wrap: true, children: tiles });
}

// node_modules/react-calendar/dist/CenturyView/Decade.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-calendar/dist/Tile.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
function Tile(props) {
  var activeStartDate = props.activeStartDate, children = props.children, classes = props.classes, date = props.date, formatAbbr = props.formatAbbr, locale = props.locale, maxDate = props.maxDate, maxDateTransform = props.maxDateTransform, minDate = props.minDate, minDateTransform = props.minDateTransform, onClick = props.onClick, onMouseOver = props.onMouseOver, style = props.style, tileClassNameProps = props.tileClassName, tileContentProps = props.tileContent, tileDisabled = props.tileDisabled, view = props.view;
  var tileClassName = (0, import_react2.useMemo)(function() {
    var args = { activeStartDate, date, view };
    return typeof tileClassNameProps === "function" ? tileClassNameProps(args) : tileClassNameProps;
  }, [activeStartDate, date, tileClassNameProps, view]);
  var tileContent = (0, import_react2.useMemo)(function() {
    var args = { activeStartDate, date, view };
    return typeof tileContentProps === "function" ? tileContentProps(args) : tileContentProps;
  }, [activeStartDate, date, tileContentProps, view]);
  return (0, import_jsx_runtime4.jsxs)("button", { className: clsx_default(classes, tileClassName), disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || (tileDisabled === null || tileDisabled === void 0 ? void 0 : tileDisabled({ activeStartDate, date, view })), onClick: onClick ? function(event) {
    return onClick(date, event);
  } : void 0, onFocus: onMouseOver ? function() {
    return onMouseOver(date);
  } : void 0, onMouseOver: onMouseOver ? function() {
    return onMouseOver(date);
  } : void 0, style, type: "button", children: [formatAbbr ? (0, import_jsx_runtime4.jsx)("abbr", { "aria-label": formatAbbr(locale, date), children }) : children, tileContent] });
}

// node_modules/react-calendar/dist/CenturyView/Decade.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className2 = "react-calendar__century-view__decades__decade";
function Decade(_a) {
  var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentCentury = _a.currentCentury, _c3 = _a.formatYear, formatYear2 = _c3 === void 0 ? formatYear : _c3, otherProps = __rest2(_a, ["classes", "currentCentury", "formatYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className2) {
    classesProps.push(className2);
  }
  if (getCenturyStart(date).getFullYear() !== currentCentury) {
    classesProps.push("".concat(className2, "--neighboringCentury"));
  }
  return (0, import_jsx_runtime5.jsx)(Tile, __assign2({}, otherProps, { classes: classesProps, maxDateTransform: getDecadeEnd, minDateTransform: getDecadeStart, view: "century", children: getDecadeLabel(locale, formatYear2, date) }));
}

// node_modules/react-calendar/dist/CenturyView/Decades.js
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var __rest3 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Decades(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringCentury = props.showNeighboringCentury, value = props.value, valueType = props.valueType, otherProps = __rest3(props, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]);
  var start = getBeginOfCenturyYear(activeStartDate);
  var end = start + (showNeighboringCentury ? 119 : 99);
  return (0, import_jsx_runtime6.jsx)(TileGroup, { className: "react-calendar__century-view__decades", dateTransform: getDecadeStart, dateType: "decade", end, hover, renderTile: function(_a) {
    var date = _a.date, otherTileProps = __rest3(_a, ["date"]);
    return (0, import_jsx_runtime6.jsx)(Decade, __assign3({}, otherProps, otherTileProps, { activeStartDate, currentCentury: start, date }), date.getTime());
  }, start, step: 10, value, valueType });
}

// node_modules/react-calendar/dist/CenturyView.js
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
function CenturyView(props) {
  function renderDecades() {
    return (0, import_jsx_runtime7.jsx)(Decades, __assign4({}, props));
  }
  return (0, import_jsx_runtime7.jsx)("div", { className: "react-calendar__century-view", children: renderDecades() });
}

// node_modules/react-calendar/dist/DecadeView.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-calendar/dist/DecadeView/Years.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-calendar/dist/DecadeView/Year.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var __rest4 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className3 = "react-calendar__decade-view__years__year";
function Year(_a) {
  var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentDecade = _a.currentDecade, _c3 = _a.formatYear, formatYear2 = _c3 === void 0 ? formatYear : _c3, otherProps = __rest4(_a, ["classes", "currentDecade", "formatYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className3) {
    classesProps.push(className3);
  }
  if (getDecadeStart(date).getFullYear() !== currentDecade) {
    classesProps.push("".concat(className3, "--neighboringDecade"));
  }
  return (0, import_jsx_runtime8.jsx)(Tile, __assign5({}, otherProps, { classes: classesProps, maxDateTransform: getYearEnd, minDateTransform: getYearStart, view: "decade", children: formatYear2(locale, date) }));
}

// node_modules/react-calendar/dist/DecadeView/Years.js
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
var __rest5 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Years(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringDecade = props.showNeighboringDecade, value = props.value, valueType = props.valueType, otherProps = __rest5(props, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]);
  var start = getBeginOfDecadeYear(activeStartDate);
  var end = start + (showNeighboringDecade ? 11 : 9);
  return (0, import_jsx_runtime9.jsx)(TileGroup, { className: "react-calendar__decade-view__years", dateTransform: getYearStart, dateType: "year", end, hover, renderTile: function(_a) {
    var date = _a.date, otherTileProps = __rest5(_a, ["date"]);
    return (0, import_jsx_runtime9.jsx)(Year, __assign6({}, otherProps, otherTileProps, { activeStartDate, currentDecade: start, date }), date.getTime());
  }, start, value, valueType });
}

// node_modules/react-calendar/dist/DecadeView.js
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
function DecadeView(props) {
  function renderYears() {
    return (0, import_jsx_runtime10.jsx)(Years, __assign7({}, props));
  }
  return (0, import_jsx_runtime10.jsx)("div", { className: "react-calendar__decade-view", children: renderYears() });
}

// node_modules/react-calendar/dist/YearView.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-calendar/dist/YearView/Months.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-calendar/dist/YearView/Month.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var __assign8 = function() {
  __assign8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign8.apply(this, arguments);
};
var __rest6 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var className4 = "react-calendar__year-view__months__month";
function Month(_a) {
  var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c3 = _a.formatMonth, formatMonth2 = _c3 === void 0 ? formatMonth : _c3, _d = _a.formatMonthYear, formatMonthYear2 = _d === void 0 ? formatMonthYear : _d, otherProps = __rest6(_a, ["classes", "formatMonth", "formatMonthYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  return (0, import_jsx_runtime11.jsx)(Tile, __assign8({}, otherProps, { classes: __spreadArray(__spreadArray([], classes, true), [className4], false), formatAbbr: formatMonthYear2, maxDateTransform: getMonthEnd, minDateTransform: getMonthStart, view: "year", children: formatMonth2(locale, date) }));
}

// node_modules/react-calendar/dist/YearView/Months.js
var __assign9 = function() {
  __assign9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign9.apply(this, arguments);
};
var __rest7 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Months(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, otherProps = __rest7(props, ["activeStartDate", "hover", "value", "valueType"]);
  var start = 0;
  var end = 11;
  var year = getYear(activeStartDate);
  return (0, import_jsx_runtime12.jsx)(TileGroup, { className: "react-calendar__year-view__months", dateTransform: function(monthIndex) {
    var date = /* @__PURE__ */ new Date();
    date.setFullYear(year, monthIndex, 1);
    return getMonthStart(date);
  }, dateType: "month", end, hover, renderTile: function(_a) {
    var date = _a.date, otherTileProps = __rest7(_a, ["date"]);
    return (0, import_jsx_runtime12.jsx)(Month, __assign9({}, otherProps, otherTileProps, { activeStartDate, date }), date.getTime());
  }, start, value, valueType });
}

// node_modules/react-calendar/dist/YearView.js
var __assign10 = function() {
  __assign10 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign10.apply(this, arguments);
};
function YearView(props) {
  function renderMonths() {
    return (0, import_jsx_runtime13.jsx)(Months, __assign10({}, props));
  }
  return (0, import_jsx_runtime13.jsx)("div", { className: "react-calendar__year-view", children: renderMonths() });
}

// node_modules/react-calendar/dist/MonthView.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-calendar/dist/MonthView/Days.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-calendar/dist/MonthView/Day.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var __assign11 = function() {
  __assign11 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign11.apply(this, arguments);
};
var __rest8 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className5 = "react-calendar__month-view__days__day";
function Day(_a) {
  var calendarType = _a.calendarType, _b = _a.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a.currentMonthIndex, _c3 = _a.formatDay, formatDay2 = _c3 === void 0 ? formatDay : _c3, _d = _a.formatLongDate, formatLongDate2 = _d === void 0 ? formatLongDate : _d, otherProps = __rest8(_a, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className5) {
    classesProps.push(className5);
  }
  if (isWeekend(date, calendarType)) {
    classesProps.push("".concat(className5, "--weekend"));
  }
  if (date.getMonth() !== currentMonthIndex) {
    classesProps.push("".concat(className5, "--neighboringMonth"));
  }
  return (0, import_jsx_runtime14.jsx)(Tile, __assign11({}, otherProps, { classes: classesProps, formatAbbr: formatLongDate2, maxDateTransform: getDayEnd, minDateTransform: getDayStart, view: "month", children: formatDay2(locale, date) }));
}

// node_modules/react-calendar/dist/MonthView/Days.js
var __assign12 = function() {
  __assign12 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign12.apply(this, arguments);
};
var __rest9 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Days(props) {
  var activeStartDate = props.activeStartDate, calendarType = props.calendarType, hover = props.hover, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, showNeighboringMonth = props.showNeighboringMonth, value = props.value, valueType = props.valueType, otherProps = __rest9(props, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]);
  var year = getYear(activeStartDate);
  var monthIndex = getMonth(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = getDayOfWeek(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  var end = function() {
    if (showFixedNumberOfWeeks) {
      return start + 6 * 7 - 1;
    }
    var daysInMonth = getDaysInMonth(activeStartDate);
    if (showNeighboringMonth) {
      var activeEndDate = /* @__PURE__ */ new Date();
      activeEndDate.setFullYear(year, monthIndex, daysInMonth);
      activeEndDate.setHours(0, 0, 0, 0);
      var daysUntilEndOfTheWeek = 7 - getDayOfWeek(activeEndDate, calendarType) - 1;
      return daysInMonth + daysUntilEndOfTheWeek;
    }
    return daysInMonth;
  }();
  return (0, import_jsx_runtime15.jsx)(TileGroup, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(day) {
    var date = /* @__PURE__ */ new Date();
    date.setFullYear(year, monthIndex, day);
    return getDayStart(date);
  }, dateType: "day", hover, end, renderTile: function(_a) {
    var date = _a.date, otherTileProps = __rest9(_a, ["date"]);
    return (0, import_jsx_runtime15.jsx)(Day, __assign12({}, otherProps, otherTileProps, { activeStartDate, calendarType, currentMonthIndex: monthIndex, date }), date.getTime());
  }, offset, start, value, valueType });
}

// node_modules/react-calendar/dist/MonthView/Weekdays.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var className6 = "react-calendar__month-view__weekdays";
var weekdayClassName = "".concat(className6, "__weekday");
function Weekdays(props) {
  var calendarType = props.calendarType, _a = props.formatShortWeekday, formatShortWeekday2 = _a === void 0 ? formatShortWeekday : _a, _b = props.formatWeekday, formatWeekday2 = _b === void 0 ? formatWeekday : _b, locale = props.locale, onMouseLeave = props.onMouseLeave;
  var anyDate = /* @__PURE__ */ new Date();
  var beginOfMonth = getMonthStart(anyDate);
  var year = getYear(beginOfMonth);
  var monthIndex = getMonth(beginOfMonth);
  var weekdays = [];
  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType));
    var abbr = formatWeekday2(locale, weekdayDate);
    weekdays.push((0, import_jsx_runtime16.jsx)("div", { className: clsx_default(weekdayClassName, isCurrentDayOfWeek(weekdayDate) && "".concat(weekdayClassName, "--current"), isWeekend(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend")), children: (0, import_jsx_runtime16.jsx)("abbr", { "aria-label": abbr, title: abbr, children: formatShortWeekday2(locale, weekdayDate).replace(".", "") }) }, weekday));
  }
  return (0, import_jsx_runtime16.jsx)(Flex, { className: className6, count: 7, onFocus: onMouseLeave, onMouseOver: onMouseLeave, children: weekdays });
}

// node_modules/react-calendar/dist/MonthView/WeekNumbers.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-calendar/dist/MonthView/WeekNumber.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var __assign13 = function() {
  __assign13 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign13.apply(this, arguments);
};
var __rest10 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className7 = "react-calendar__tile";
function WeekNumber(props) {
  var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
  var children = (0, import_jsx_runtime17.jsx)("span", { children: weekNumber });
  if (onClickWeekNumber) {
    var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest10(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return (0, import_jsx_runtime17.jsx)("button", __assign13({}, otherProps, { className: className7, onClick: function(event) {
      return onClickWeekNumber_1(weekNumber_1, date_1, event);
    }, type: "button", children }));
  } else {
    var date = props.date, onClickWeekNumber_2 = props.onClickWeekNumber, weekNumber_2 = props.weekNumber, otherProps = __rest10(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return (0, import_jsx_runtime17.jsx)("div", __assign13({}, otherProps, { className: className7, children }));
  }
}

// node_modules/react-calendar/dist/MonthView/WeekNumbers.js
function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate, calendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var numberOfWeeks = function() {
    if (showFixedNumberOfWeeks) {
      return 6;
    }
    var numberOfDays = getDaysInMonth(activeStartDate);
    var startWeekday = getDayOfWeek(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();
  var dates = function() {
    var year = getYear(activeStartDate);
    var monthIndex = getMonth(activeStartDate);
    var day = getDate(activeStartDate);
    var result = [];
    for (var index = 0; index < numberOfWeeks; index += 1) {
      result.push(getBeginOfWeek(new Date(year, monthIndex, day + index * 7), calendarType));
    }
    return result;
  }();
  var weekNumbers = dates.map(function(date) {
    return getWeekNumber(date, calendarType);
  });
  return (0, import_jsx_runtime18.jsx)(Flex, { className: "react-calendar__month-view__weekNumbers", count: numberOfWeeks, direction: "column", onFocus: onMouseLeave, onMouseOver: onMouseLeave, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 }, children: weekNumbers.map(function(weekNumber, weekIndex) {
    var date = dates[weekIndex];
    if (!date) {
      throw new Error("date is not defined");
    }
    return (0, import_jsx_runtime18.jsx)(WeekNumber, { date, onClickWeekNumber, weekNumber }, weekNumber);
  }) });
}

// node_modules/react-calendar/dist/MonthView.js
var __assign14 = function() {
  __assign14 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign14.apply(this, arguments);
};
var __rest11 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function getCalendarTypeFromLocale(locale) {
  if (locale) {
    for (var _i = 0, _a = Object.entries(CALENDAR_TYPE_LOCALES); _i < _a.length; _i++) {
      var _b = _a[_i], calendarType = _b[0], locales = _b[1];
      if (locales.includes(locale)) {
        return calendarType;
      }
    }
  }
  return CALENDAR_TYPES.ISO_8601;
}
function MonthView(props) {
  var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var _a = props.calendarType, calendarType = _a === void 0 ? getCalendarTypeFromLocale(locale) : _a, formatShortWeekday2 = props.formatShortWeekday, formatWeekday2 = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, childProps = __rest11(props, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function renderWeekdays() {
    return (0, import_jsx_runtime19.jsx)(Weekdays, { calendarType, formatShortWeekday: formatShortWeekday2, formatWeekday: formatWeekday2, locale, onMouseLeave });
  }
  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }
    return (0, import_jsx_runtime19.jsx)(WeekNumbers, { activeStartDate, calendarType, onClickWeekNumber, onMouseLeave, showFixedNumberOfWeeks });
  }
  function renderDays() {
    return (0, import_jsx_runtime19.jsx)(Days, __assign14({ calendarType }, childProps));
  }
  var className8 = "react-calendar__month-view";
  return (0, import_jsx_runtime19.jsx)("div", { className: clsx_default(className8, showWeekNumbers ? "".concat(className8, "--weekNumbers") : ""), children: (0, import_jsx_runtime19.jsxs)("div", { style: {
    display: "flex",
    alignItems: "flex-end"
  }, children: [renderWeekNumbers(), (0, import_jsx_runtime19.jsxs)("div", { style: {
    flexGrow: 1,
    width: "100%"
  }, children: [renderWeekdays(), renderDays()] })] }) });
}

// node_modules/react-calendar/dist/Calendar.js
"use client";
var __assign15 = function() {
  __assign15 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign15.apply(this, arguments);
};
var baseClassName = "react-calendar";
var allViews = ["century", "decade", "year", "month"];
var allValueTypes = ["decade", "year", "month", "day"];
var defaultMinDate = /* @__PURE__ */ new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = /* @__PURE__ */ new Date(864e13);
function toDate(value) {
  if (value instanceof Date) {
    return value;
  }
  return new Date(value);
}
function getLimitedViews(minDetail, maxDetail) {
  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
}
function getView(view, minDetail, maxDetail) {
  if (!view) {
    return maxDetail;
  }
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }
  return maxDetail;
}
function getValueType(view) {
  var index = allViews.indexOf(view);
  return allValueTypes[index];
}
function getValue(value, index) {
  var rawValue = Array.isArray(value) ? value[index] : value;
  if (!rawValue) {
    return null;
  }
  var valueDate = toDate(rawValue);
  if (Number.isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }
  return valueDate;
}
function getDetailValue(_a, index) {
  var value = _a.value, minDate = _a.minDate, maxDate = _a.maxDate, maxDetail = _a.maxDetail;
  var valuePiece = getValue(value, index);
  if (!valuePiece) {
    return null;
  }
  var valueType = getValueType(maxDetail);
  var detailValueFrom = function() {
    switch (index) {
      case 0:
        return getBegin(valueType, valuePiece);
      case 1:
        return getEnd(valueType, valuePiece);
      default:
        throw new Error("Invalid index value: ".concat(index));
    }
  }();
  return between(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function(args) {
  return getDetailValue(args, 0);
};
var getDetailValueTo = function(args) {
  return getDetailValue(args, 1);
};
var getDetailValueArray = function(args) {
  return [getDetailValueFrom, getDetailValueTo].map(function(fn) {
    return fn(args);
  });
};
function getActiveStartDate(_a) {
  var maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom({
    value,
    minDate,
    maxDate,
    maxDetail
  }) || /* @__PURE__ */ new Date();
  return getBegin(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a) {
  var activeStartDate = _a.activeStartDate, defaultActiveStartDate = _a.defaultActiveStartDate, defaultValue = _a.defaultValue, defaultView = _a.defaultView, maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = activeStartDate || defaultActiveStartDate;
  if (valueFrom) {
    return getBegin(rangeType, valueFrom);
  }
  return getActiveStartDate({
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    value: value || defaultValue,
    view: view || defaultView
  });
}
function getIsSingleValue(value) {
  return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
  return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = (0, import_react3.forwardRef)(function Calendar2(props, ref) {
  var activeStartDateProps = props.activeStartDate, allowPartialRange = props.allowPartialRange, calendarType = props.calendarType, className8 = props.className, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, formatDay2 = props.formatDay, formatLongDate2 = props.formatLongDate, formatMonth2 = props.formatMonth, formatMonthYear2 = props.formatMonthYear, formatShortWeekday2 = props.formatShortWeekday, formatWeekday2 = props.formatWeekday, formatYear2 = props.formatYear, _a = props.goToRangeStartOnSelect, goToRangeStartOnSelect = _a === void 0 ? true : _a, inputRef = props.inputRef, locale = props.locale, _b = props.maxDate, maxDate = _b === void 0 ? defaultMaxDate : _b, _c3 = props.maxDetail, maxDetail = _c3 === void 0 ? "month" : _c3, _d = props.minDate, minDate = _d === void 0 ? defaultMinDate : _d, _e = props.minDetail, minDetail = _e === void 0 ? "century" : _e, navigationAriaLabel = props.navigationAriaLabel, navigationAriaLive = props.navigationAriaLive, navigationLabel = props.navigationLabel, next2AriaLabel = props.next2AriaLabel, next2Label = props.next2Label, nextAriaLabel = props.nextAriaLabel, nextLabel = props.nextLabel, onActiveStartDateChange = props.onActiveStartDateChange, onChangeProps = props.onChange, onClickDay = props.onClickDay, onClickDecade = props.onClickDecade, onClickMonth = props.onClickMonth, onClickWeekNumber = props.onClickWeekNumber, onClickYear = props.onClickYear, onDrillDown = props.onDrillDown, onDrillUp = props.onDrillUp, onViewChange = props.onViewChange, prev2AriaLabel = props.prev2AriaLabel, prev2Label = props.prev2Label, prevAriaLabel = props.prevAriaLabel, prevLabel = props.prevLabel, _f = props.returnValue, returnValue = _f === void 0 ? "start" : _f, selectRange = props.selectRange, showDoubleView = props.showDoubleView, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, _g = props.showNavigation, showNavigation = _g === void 0 ? true : _g, showNeighboringCentury = props.showNeighboringCentury, showNeighboringDecade = props.showNeighboringDecade, _h = props.showNeighboringMonth, showNeighboringMonth = _h === void 0 ? true : _h, showWeekNumbers = props.showWeekNumbers, tileClassName = props.tileClassName, tileContent = props.tileContent, tileDisabled = props.tileDisabled, valueProps = props.value, viewProps = props.view;
  var _j = (0, import_react3.useState)(defaultActiveStartDate), activeStartDateState = _j[0], setActiveStartDateState = _j[1];
  var _k = (0, import_react3.useState)(null), hoverState = _k[0], setHoverState = _k[1];
  var _l = (0, import_react3.useState)(Array.isArray(defaultValue) ? defaultValue.map(function(el) {
    return el !== null ? toDate(el) : null;
  }) : defaultValue !== null && defaultValue !== void 0 ? toDate(defaultValue) : null), valueState = _l[0], setValueState = _l[1];
  var _m = (0, import_react3.useState)(defaultView), viewState = _m[0], setViewState = _m[1];
  var activeStartDate = activeStartDateProps || activeStartDateState || getInitialActiveStartDate({
    activeStartDate: activeStartDateProps,
    defaultActiveStartDate,
    defaultValue,
    defaultView,
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    value: valueProps,
    view: viewProps
  });
  var value = function() {
    var rawValue = function() {
      if (selectRange && getIsSingleValue(valueState)) {
        return valueState;
      }
      return valueProps !== void 0 ? valueProps : valueState;
    }();
    if (!rawValue) {
      return null;
    }
    return Array.isArray(rawValue) ? rawValue.map(function(el) {
      return el !== null ? toDate(el) : null;
    }) : rawValue !== null ? toDate(rawValue) : null;
  }();
  var valueType = getValueType(maxDetail);
  var view = getView(viewProps || viewState, minDetail, maxDetail);
  var views = getLimitedViews(minDetail, maxDetail);
  var hover = selectRange ? hoverState : null;
  var drillDownAvailable = views.indexOf(view) < views.length - 1;
  var drillUpAvailable = views.indexOf(view) > 0;
  var getProcessedValue = (0, import_react3.useCallback)(function(value2) {
    var processFunction = function() {
      switch (returnValue) {
        case "start":
          return getDetailValueFrom;
        case "end":
          return getDetailValueTo;
        case "range":
          return getDetailValueArray;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return processFunction({
      maxDate,
      maxDetail,
      minDate,
      value: value2
    });
  }, [maxDate, maxDetail, minDate, returnValue]);
  var setActiveStartDate = (0, import_react3.useCallback)(function(nextActiveStartDate, action) {
    setActiveStartDateState(nextActiveStartDate);
    var args = {
      action,
      activeStartDate: nextActiveStartDate,
      value,
      view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
  }, [activeStartDate, onActiveStartDateChange, value, view]);
  var onClickTile = (0, import_react3.useCallback)(function(value2, event) {
    var callback = function() {
      switch (view) {
        case "century":
          return onClickDecade;
        case "decade":
          return onClickYear;
        case "year":
          return onClickMonth;
        case "month":
          return onClickDay;
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    if (callback)
      callback(value2, event);
  }, [onClickDay, onClickDecade, onClickMonth, onClickYear, view]);
  var drillDown = (0, import_react3.useCallback)(function(nextActiveStartDate, event) {
    if (!drillDownAvailable) {
      return;
    }
    onClickTile(nextActiveStartDate, event);
    var nextView = views[views.indexOf(view) + 1];
    if (!nextView) {
      throw new Error("Attempted to drill down from the lowest view.");
    }
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: "drillDown",
      activeStartDate: nextActiveStartDate,
      value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillDown) {
      onDrillDown(args);
    }
  }, [
    activeStartDate,
    drillDownAvailable,
    onActiveStartDateChange,
    onClickTile,
    onDrillDown,
    onViewChange,
    value,
    view,
    views
  ]);
  var drillUp = (0, import_react3.useCallback)(function() {
    if (!drillUpAvailable) {
      return;
    }
    var nextView = views[views.indexOf(view) - 1];
    if (!nextView) {
      throw new Error("Attempted to drill up from the highest view.");
    }
    var nextActiveStartDate = getBegin(nextView, activeStartDate);
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: "drillUp",
      activeStartDate: nextActiveStartDate,
      value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillUp) {
      onDrillUp(args);
    }
  }, [
    activeStartDate,
    drillUpAvailable,
    onActiveStartDateChange,
    onDrillUp,
    onViewChange,
    value,
    view,
    views
  ]);
  var onChange = (0, import_react3.useCallback)(function(rawNextValue, event) {
    var previousValue = value;
    onClickTile(rawNextValue, event);
    var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
    var nextValue;
    if (selectRange) {
      if (isFirstValueInRange) {
        nextValue = getBegin(valueType, rawNextValue);
      } else {
        if (!previousValue) {
          throw new Error("previousValue is required");
        }
        if (Array.isArray(previousValue)) {
          throw new Error("previousValue must not be an array");
        }
        nextValue = getValueRange(valueType, previousValue, rawNextValue);
      }
    } else {
      nextValue = getProcessedValue(rawNextValue);
    }
    var nextActiveStartDate = (
      // Range selection turned off
      !selectRange || // Range selection turned on, first value
      isFirstValueInRange || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      goToRangeStartOnSelect ? getActiveStartDate({
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        value: nextValue,
        view
      }) : null
    );
    event.persist();
    setActiveStartDateState(nextActiveStartDate);
    setValueState(nextValue);
    var args = {
      action: "onChange",
      activeStartDate: nextActiveStartDate,
      value: nextValue,
      view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onChangeProps) {
      if (selectRange) {
        var isSingleValue = getIsSingleValue(nextValue);
        if (!isSingleValue) {
          onChangeProps(nextValue || null, event);
        } else if (allowPartialRange) {
          if (Array.isArray(nextValue)) {
            throw new Error("value must not be an array");
          }
          onChangeProps([nextValue || null, null], event);
        }
      } else {
        onChangeProps(nextValue || null, event);
      }
    }
  }, [
    activeStartDate,
    allowPartialRange,
    getProcessedValue,
    goToRangeStartOnSelect,
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    onActiveStartDateChange,
    onChangeProps,
    onClickTile,
    selectRange,
    value,
    valueType,
    view
  ]);
  function onMouseOver(nextHover) {
    setHoverState(nextHover);
  }
  function onMouseLeave() {
    setHoverState(null);
  }
  (0, import_react3.useImperativeHandle)(ref, function() {
    return {
      activeStartDate,
      drillDown,
      drillUp,
      onChange,
      setActiveStartDate,
      value,
      view
    };
  }, [activeStartDate, drillDown, drillUp, onChange, setActiveStartDate, value, view]);
  function renderContent(next) {
    var currentActiveStartDate = next ? getBeginNext(view, activeStartDate) : getBegin(view, activeStartDate);
    var onClick = drillDownAvailable ? drillDown : onChange;
    var commonProps = {
      activeStartDate: currentActiveStartDate,
      hover,
      locale,
      maxDate,
      minDate,
      onClick,
      onMouseOver: selectRange ? onMouseOver : void 0,
      tileClassName,
      tileContent,
      tileDisabled,
      value,
      valueType
    };
    switch (view) {
      case "century": {
        return (0, import_jsx_runtime20.jsx)(CenturyView, __assign15({ formatYear: formatYear2, showNeighboringCentury }, commonProps));
      }
      case "decade": {
        return (0, import_jsx_runtime20.jsx)(DecadeView, __assign15({ formatYear: formatYear2, showNeighboringDecade }, commonProps));
      }
      case "year": {
        return (0, import_jsx_runtime20.jsx)(YearView, __assign15({ formatMonth: formatMonth2, formatMonthYear: formatMonthYear2 }, commonProps));
      }
      case "month": {
        return (0, import_jsx_runtime20.jsx)(MonthView, __assign15({ calendarType, formatDay: formatDay2, formatLongDate: formatLongDate2, formatShortWeekday: formatShortWeekday2, formatWeekday: formatWeekday2, onClickWeekNumber, onMouseLeave: selectRange ? onMouseLeave : void 0, showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== "undefined" ? showFixedNumberOfWeeks : showDoubleView, showNeighboringMonth, showWeekNumbers }, commonProps));
      }
      default:
        throw new Error("Invalid view: ".concat(view, "."));
    }
  }
  function renderNavigation() {
    if (!showNavigation) {
      return null;
    }
    return (0, import_jsx_runtime20.jsx)(Navigation, { activeStartDate, drillUp, formatMonthYear: formatMonthYear2, formatYear: formatYear2, locale, maxDate, minDate, navigationAriaLabel, navigationAriaLive, navigationLabel, next2AriaLabel, next2Label, nextAriaLabel, nextLabel, prev2AriaLabel, prev2Label, prevAriaLabel, prevLabel, setActiveStartDate, showDoubleView, view, views });
  }
  var valueArray = Array.isArray(value) ? value : [value];
  return (0, import_jsx_runtime20.jsxs)("div", { className: clsx_default(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className8), ref: inputRef, children: [renderNavigation(), (0, import_jsx_runtime20.jsxs)("div", { className: "".concat(baseClassName, "__viewContainer"), onBlur: selectRange ? onMouseLeave : void 0, onMouseLeave: selectRange ? onMouseLeave : void 0, children: [renderContent(), showDoubleView ? renderContent(true) : null] })] });
});
var Calendar_default = Calendar;

// node_modules/react-calendar/dist/index.js
var dist_default2 = Calendar_default;

// app/styles/calendar.css?url
var calendar_default = "/build/_assets/calendar-ADANAKRG.css?url";

// app/routes/services.tsx
var import_react_lazy_load_image_component = __toESM(require_build(), 1);
var import_trainings = __toESM(require_trainings(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\services.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\services.tsx"
  );
}
var {
  LazyLoadImage
} = import_react_lazy_load_image_component.default;
var links = () => [{
  rel: "stylesheet",
  href: calendar_default
}];
var meta = () => [{
  title: "Services"
}];
function Services() {
  _s();
  const [activeSection, setActiveSection] = (0, import_react4.useState)("rentals");
  const [isClient, setIsClient] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    setIsClient(true);
  }, []);
  const location = useLocation();
  const {
    technicalConsultants,
    machineRentals,
    machineRentalGalleries,
    trainingSessions,
    trainingGalleries,
    trainingHeroes
  } = useLoaderData();
  const rentalGalleryItems = [...machineRentalGalleries].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()).flatMap((gallery) => gallery.images.map((src) => ({
    src,
    alt: gallery.collectionName || "Machine Rental",
    label: gallery.collectionName || "Machine Rental"
  })));
  const heroRecord = technicalConsultants && technicalConsultants.length > 0 ? technicalConsultants[0] : null;
  const heroTitle = heroRecord?.title ?? "Technical Consultation";
  const heroDescription = heroRecord?.description ?? "Farmex's commitment to the rice farming communities does not end in providing quality hybrid rice seeds but extends its hands to those who are in need of free technical consultations. From farmers to agriculture students, Farmex technical team is always ready to share their expertise and strategy on rice farming production and technologies. Regular technical trainings are done to further equip and update our Seed Production Specialists on the latest technologies and having them share new learnings to our farmers.";
  const rentalsHeroRecord = machineRentals && machineRentals.length > 0 ? machineRentals[0] : null;
  const rentalsHeroTitle = rentalsHeroRecord?.title ?? "Machine Rentals";
  const rentalsHeroDescription = rentalsHeroRecord?.descriptions ?? "Genuine to its mission of providing all the Filipino farmer needs, Farmex is offering farm machineries rentals to extend the accessibility of farm technologies and equipment to individual rice farmers and farm cooperatives. With the help of our sister company, Leads Tech, Farmex team also do machine demonstrations and provides after-sales support to our customers.";
  const trainingHeroRecord = trainingHeroes.length > 0 ? trainingHeroes[0] : null;
  const trainingHeroTitle = trainingHeroRecord?.title ?? "Trainings";
  const trainingHeroDescriptions = trainingHeroRecord?.descriptions && trainingHeroRecord.descriptions.length > 0 ? trainingHeroRecord.descriptions : ["Farmex Corporation is proud to be recognized as a Learning Site for Agriculture (LSA). Since the 2nd quarter of 2025, we have been hosting training programs in partnership with the Agricultural Training Institute (ATI)-CALABARZON. Beyond these collaborations, our LAV Station also opens its doors to schools, farmer clusters, and other organizations seeking practical, science-based learning experiences in agriculture.", "As an LSA, we remain committed to helping Filipino farmers and agri-stakeholders across crop industries by providing relevant knowledge, field-based demonstrations, and hands-on training. We believe that continuous education not only improves productivity but also inspires the next generation to pursue and sustain the future of agriculture."];
  (0, import_react4.useEffect)(() => {
    const hash = location.hash;
    if (hash === "#technical-consultation") {
      setActiveSection("consultation");
    } else if (hash === "#training") {
      setActiveSection("training");
    } else if (hash === "#machine-rentals" || hash === "" || hash === "#") {
      setActiveSection("rentals");
    } else {
      setActiveSection("rentals");
    }
  }, [location.hash]);
  const [calendarActiveStartDate, setCalendarActiveStartDate] = (0, import_react4.useState)(/* @__PURE__ */ new Date());
  const [tooltip, setTooltip] = (0, import_react4.useState)({
    visible: false,
    text: "",
    x: 0,
    y: 0
  });
  const [selectedDate, setSelectedDate] = (0, import_react4.useState)(null);
  const [isOpen, setIsOpen] = (0, import_react4.useState)(false);
  const [selectedImage, setSelectedImage] = (0, import_react4.useState)(null);
  const [isImageOpen, setIsImageOpen] = (0, import_react4.useState)(false);
  const trainingRanges = trainingSessions.filter((session) => session.startDate && session.endDate).map((session) => ({
    start: session.startDate,
    end: session.endDate,
    title: session.title,
    createdAt: session.createdAt
  }));
  const isDateInRange = (date, start, end) => {
    const d = date.setHours(0, 0, 0, 0);
    const s = new Date(start).setHours(0, 0, 0, 0);
    const e = new Date(end).setHours(0, 0, 0, 0);
    return d >= s && d <= e;
  };
  const images = trainingGalleries.flatMap((gallery) => gallery.images.map((src) => ({
    src,
    alt: gallery.collectionName || "Training"
  })));
  const [showMore, setShowMore] = (0, import_react4.useState)(false);
  const [showAll, setShowAll] = (0, import_react4.useState)(false);
  const [index, setIndex] = (0, import_react4.useState)(0);
  const [isMobile, setIsMobile] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  (0, import_react4.useEffect)(() => {
    if (images.length === 0)
      return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, [images.length]);
  (0, import_react4.useEffect)(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsImageOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-full min-h-screen relative", children: [
    activeSection === "rentals" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-[350px] sm:h-[400px] md:h-[600px] lg:h-[500px] overflow-hidden", children: [
        isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/machinerentals.png", alt: "Machine Rentals Background", className: "w-full h-full object-cover object-top pt-20", initial: {
          opacity: 0,
          y: 40
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          amount: 0.2
        }, transition: {
          duration: 0.6,
          ease: "easeOut"
        } }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 150,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-green-600 bg-opacity-50" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20 px-4 py-2 pt-20 md:pt-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-2 md:mb-6", children: rentalsHeroTitle }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-[10px] md:text-xl leading-relaxed max-w-4xl text-center mb-4 md:mb-8", children: rentalsHeroDescription }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/get-involved", className: "bg-[#E0B100F7] text-white px-2 md:px-8 py-1 md:py-3 rounded-lg font-bold hover:bg-[#E0B100F7] transition-colors duration-300 inline-block", children: "Contact Us" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 171,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 149,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full py-16 px-4 sm:px-8 bg-[url('/newbgmachinerental.png')] bg-cover bg-center flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8", children: (rentalGalleryItems.length ? rentalGalleryItems : [{
        label: "Mobile Dryer",
        src: "/new_mobiledryer.png",
        alt: "Mobile Dryer"
      }, {
        label: "Tractor",
        src: "/new_tractor.jpeg",
        alt: "Tractor"
      }, {
        label: "Vacuum Seeder",
        src: "/vacuumseeder.jpg",
        alt: "Vacuum Seeder"
      }, {
        label: "Harvester",
        src: "/new_harvester.jpg",
        alt: "Harvester"
      }]).map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "overflow-hidden p-2 sm:p-3 lg:p-4", custom: i, initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        amount: 0.2
      }, transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 sm:px-4 pt-2 sm:pt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-green-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl", children: item.label }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 213,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-20 sm:w-24 md:w-28 h-0.5 sm:h-1 bg-yellow-400 mt-1" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 214,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 212,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[280px] sm:h-[280px] md:h-[350px] lg:h-[450px] w-full overflow-hidden relative rounded py-2 sm:py-3 lg:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.src, alt: item.alt, className: "w-full h-full object-cover border-2 sm:border-3 md:border-4 border-[#00703C] rounded-lg" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 217,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 216,
          columnNumber: 21
        }, this)
      ] }, `${item.label}-${i}`, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 197,
        columnNumber: 34
      }, this)) }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 180,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 147,
      columnNumber: 39
    }, this),
    activeSection === "consultation" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-[400px] sm:h-[400px] md:h-[600px] lg:h-[550px] overflow-hidden flex items-center justify-center", children: [
        isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/bgricederbies_copy.jpg", alt: "Technical Consultation Hero", className: "w-full h-full object-cover object-top pt-20", initial: {
          opacity: 0,
          y: 40
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          amount: 0.2
        }, transition: {
          duration: 0.6,
          ease: "easeOut"
        } }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 230,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-green-600 bg-opacity-50" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 243,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20 px-4 py-2 pt-20 md:pt-16", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-center text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-2 md:mb-6", children: [
            heroTitle.split(" ")[0],
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block md:inline", children: [
              " ",
              heroTitle.split(" ").slice(1).join(""),
              " "
            ] }, void 0, true, {
              fileName: "app/routes/services.tsx",
              lineNumber: 247,
              columnNumber: 42
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 245,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-[10px] md:text-xl leading-relaxed max-w-6xl text-center mb-4 md:mb-8", children: heroDescription }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 249,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/get-involved", className: "bg-[#E0B100F7] text-white px-2 md:px-8 py-1 md:py-3 rounded-lg font-bold hover:bg-[#E0B100F7] transition-colors duration-300 inline-block", children: "Contact Us" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 253,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 229,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full py-8 sm:py-12 bg-white md:bg-[url('/bgmachinerentals.jpg')] md:bg-center md:bg-repeat-y flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-2 sm:px-4 py-4 sm:py-6 flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TechnicalConsultationSlider, { images: heroRecord?.images ?? [] }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 262,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 261,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 260,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 227,
      columnNumber: 44
    }, this),
    activeSection === "training" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-[600px] sm:h-[600px] md:h-[1000px] lg:h-[800px] overflow-hidden", children: [
        isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/newbg-training-section.png", alt: "Training Background", className: "w-full h-full object-cover object-top", initial: {
          opacity: 0,
          y: 40
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          amount: 0.2
        }, transition: {
          duration: 0.6,
          ease: "easeOut"
        } }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 271,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-green-600 bg-opacity-80" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 284,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20 px-4 md:px-8 py-4 pt-24 md:pt-24", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-widest mb-8 md:mb-12 text-center", children: trainingHeroTitle }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 286,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white text-[12px] md:text-lg lg:text-xl font-semibold leading-relaxed max-w-6xl mb-4 md:mb-8 text-justify", children: trainingHeroDescriptions.map((paragraph, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: index2 < trainingHeroDescriptions.length - 1 ? "mb-4" : void 0, children: paragraph }, `training-hero-desc-${index2}`, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 290,
            columnNumber: 69
          }, this)) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 289,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 285,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 270,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-8 px-4 md:px-8 py-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-br from-green-300 via-green-200 to-green-300 rounded-2xl shadow-lg p-4 w-full flex flex-col sticky top-24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-white bg-green-600 bg-opacity-90 rounded-t-2xl py-3 px-6 shadow-lg tracking-wider uppercase animate-fadeIn", children: "Training Schedule" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 307,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center flex-1 overflow-auto h-[400px] md:h-[500px] lg:h-[600px]", children: isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(dist_default2, { className: "w-full border border-gray-600 rounded-b-2xl mb-6", onClickDay: (date) => {
                setSelectedDate(date);
                setIsOpen(true);
              }, activeStartDate: calendarActiveStartDate, onActiveStartDateChange: ({
                activeStartDate
              }) => {
                if (activeStartDate)
                  setCalendarActiveStartDate(activeStartDate);
              }, tileClassName: ({
                date,
                view
              }) => {
                if (view !== "month")
                  return "";
                const range = trainingRanges.find((r) => isDateInRange(date, r.start, r.end));
                const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                let statusClass = "";
                if (range) {
                  const now = /* @__PURE__ */ new Date();
                  const start = new Date(range.start);
                  const end = new Date(range.end);
                  if (now.getTime() >= start.getTime() && now.getTime() <= end.getTime())
                    statusClass = "ongoing";
                  else if (now.getTime() < start.getTime())
                    statusClass = "upcoming";
                  else if (now.getTime() > end.getTime())
                    statusClass = "past";
                }
                if (isSelected)
                  statusClass += " selected";
                return statusClass;
              }, tileContent: ({
                date,
                view
              }) => {
                if (view !== "month")
                  return null;
                const ranges = trainingRanges.filter((r) => isDateInRange(date, r.start, r.end));
                if (!ranges.length)
                  return null;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-full flex flex-col justify-start items-center relative", onMouseEnter: (e) => {
                  setTooltip({
                    visible: true,
                    text: ranges.map((r) => r.title).join(", "),
                    x: e.clientX,
                    y: e.clientY
                  });
                }, onMouseMove: (e) => {
                  setTooltip((prev) => ({
                    ...prev,
                    x: e.clientX,
                    y: e.clientY
                  }));
                }, onMouseLeave: () => setTooltip({
                  visible: false,
                  text: "",
                  x: 0,
                  y: 0
                }), children: ranges.map((range, idx) => {
                  const now = /* @__PURE__ */ new Date();
                  const start = new Date(range.start);
                  const end = new Date(range.end);
                  let bg = "bg-blue-500";
                  if (now.getTime() >= start.getTime() && now.getTime() <= end.getTime())
                    bg = "bg-green-500";
                  else if (now.getTime() > end.getTime())
                    bg = "bg-gray-400";
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `w-2 h-2 rounded-full ${bg} absolute bottom-1` }, idx, false, {
                    fileName: "app/routes/services.tsx",
                    lineNumber: 368,
                    columnNumber: 32
                  }, this);
                }) }, void 0, false, {
                  fileName: "app/routes/services.tsx",
                  lineNumber: 342,
                  columnNumber: 28
                }, this);
              } }, selectedDate ? selectedDate.toDateString() : "calendar", false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 312,
                columnNumber: 25
              }, this),
              tooltip.visible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none z-50", style: {
                top: tooltip.y + 10,
                left: tooltip.x + 10
              }, children: tooltip.text }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 374,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { open: isOpen, onOpenChange: (open) => {
                setIsOpen(open);
                if (!open)
                  setSelectedDate(null);
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "bg-white border-black rounded-lg max-w-2xl w-full h-full max-h-[22vh] py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "text-center font-semibold", children: (() => {
                  if (!selectedDate)
                    return "";
                  const range = trainingRanges.find((r) => isDateInRange(selectedDate, r.start, r.end));
                  const formatDate2 = (date) => date.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  });
                  return range ? `${formatDate2(new Date(range.start))} - ${formatDate2(new Date(range.end))}` : formatDate2(selectedDate);
                })() }, void 0, false, {
                  fileName: "app/routes/services.tsx",
                  lineNumber: 388,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/services.tsx",
                  lineNumber: 387,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-center mt-4 md:mt-6 mb-4", children: selectedDate ? trainingRanges.find((r) => isDateInRange(selectedDate, r.start, r.end))?.title || "No training scheduled for this date." : "" }, void 0, false, {
                  fileName: "app/routes/services.tsx",
                  lineNumber: 402,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/services.tsx",
                lineNumber: 386,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 382,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/services.tsx",
              lineNumber: 311,
              columnNumber: 34
            }, this) }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 310,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 306,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 305,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl shadow-lg p-4 md:p-6 sticky top-24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold mb-4 text-center text-green-700 border-b-2 border-green-300 pb-2", children: "Training Events" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 415,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col gap-3", children: trainingRanges.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, showAll ? trainingRanges.length : 3).map((event, idx) => {
              const now = /* @__PURE__ */ new Date();
              const start = new Date(event.start);
              const end = new Date(event.end);
              const formatDate2 = (date) => date.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
              });
              let statusBg = "bg-gray-200 text-gray-600";
              if (now.getTime() >= start.getTime() && now.getTime() <= end.getTime())
                statusBg = "bg-green-300 text-white";
              else if (now.getTime() < start.getTime())
                statusBg = "bg-blue-200 text-gray-800";
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
                setCalendarActiveStartDate(new Date(start.getFullYear(), start.getMonth(), 1));
                setSelectedDate(start);
              }, className: `w-full text-left p-4 rounded-lg shadow-md transition hover:opacity-90 ${statusBg}`, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold truncate", children: event.title }, void 0, false, {
                  fileName: "app/routes/services.tsx",
                  lineNumber: 437,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: [
                  formatDate2(start),
                  " - ",
                  formatDate2(end)
                ] }, void 0, true, {
                  fileName: "app/routes/services.tsx",
                  lineNumber: 438,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs mt-1", children: now.getTime() > end.getTime() ? "Past" : now.getTime() >= start.getTime() ? "Ongoing" : "Upcoming" }, void 0, false, {
                  fileName: "app/routes/services.tsx",
                  lineNumber: 439,
                  columnNumber: 33
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/services.tsx",
                lineNumber: 432,
                columnNumber: 31
              }, this) }, idx, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 431,
                columnNumber: 26
              }, this);
            }) }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 418,
              columnNumber: 21
            }, this),
            trainingRanges.length > 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowAll(!showAll), className: "text-green-700 font-semibold hover:underline", children: showAll ? "See Less" : "See More" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 447,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 446,
              columnNumber: 51
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 414,
            columnNumber: 30
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 413,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 302,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl md:text-3xl font-extrabold text-center text-green-700 border-b-2 border-green-300 pb-2 mb-8 uppercase tracking-widest", children: "Training Gallery" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 457,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: images.slice(0, showMore ? images.length : 9).map((img, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer group", initial: {
            opacity: 0,
            y: 30
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true,
            amount: 0.2
          }, transition: {
            duration: 0.5,
            delay: i % 3 * 0.12,
            ease: "easeOut"
          }, onClick: () => {
            setSelectedImage(img);
            setIsImageOpen(true);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-hidden h-52", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: img.src, alt: img.alt, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 481,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 480,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between px-4 py-3 bg-white border-t border-gray-100", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2 h-2 rounded-full bg-green-500" }, void 0, false, {
                  fileName: "app/routes/services.tsx",
                  lineNumber: 488,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold text-gray-700 uppercase tracking-wide", children: img.alt }, void 0, false, {
                  fileName: "app/routes/services.tsx",
                  lineNumber: 489,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/services.tsx",
                lineNumber: 487,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-gray-400 font-medium", children: "View" }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 493,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/services.tsx",
              lineNumber: 486,
              columnNumber: 21
            }, this)
          ] }, `${img.src}-${i}`, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 461,
            columnNumber: 80
          }, this)) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 460,
            columnNumber: 15
          }, this),
          images.length > 9 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowMore(!showMore), className: "bg-green-600 text-white px-8 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200", children: showMore ? "Show Less" : "Show More" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 501,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 500,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 456,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 299,
        columnNumber: 11
      }, this),
      isImageOpen && selectedImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4", onClick: () => setIsImageOpen(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full max-w-6xl max-h-[90vh] flex justify-center items-center", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative inline-block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: selectedImage.src, alt: selectedImage.alt, className: "w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 516,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsImageOpen(false), className: "absolute top-1 right-1 text-white text-xs sm:text-sm font-bold bg-black/70 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full hover:bg-black transition", children: "\u2715" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 518,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 515,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 513,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 511,
        columnNumber: 44
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 268,
      columnNumber: 40
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/services.tsx",
    lineNumber: 144,
    columnNumber: 10
  }, this);
}
_s(Services, "boUSBCFNAc2K0MmAW9ChvhoKUEM=", false, function() {
  return [useLocation, useLoaderData];
});
_c = Services;
function TechnicalConsultationSlider({
  images
}) {
  _s2();
  const sliderImages = images.length ? images.map((src, idx) => ({
    src,
    alt: `Technical Consultation ${idx + 1}`
  })) : [{
    src: "/technicalconsultantimg1.jpg",
    alt: "Technical Consultation 1"
  }, {
    src: "/technicalconsultantimg2.jpg",
    alt: "Technical Consultation 2"
  }];
  const [index, setIndex] = (0, import_react4.useState)(0);
  const [touchStart, setTouchStart] = (0, import_react4.useState)(null);
  const [touchEnd, setTouchEnd] = (0, import_react4.useState)(null);
  const prev = () => setIndex((i) => i === 0 ? sliderImages.length - 1 : i - 1);
  const next = () => setIndex((i) => i === sliderImages.length - 1 ? 0 : i + 1);
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd)
      return;
    const distance = touchStart - touchEnd;
    if (distance > 50)
      next();
    if (distance < -50)
      prev();
    setTouchStart(null);
    setTouchEnd(null);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center w-full px-2 sm:px-4", onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: prev, className: "text-3xl sm:text-4xl md:text-5xl text-[#00703C] hover:text-[#00703C] px-1 sm:px-2 focus:outline-none ml-1 sm:ml-4", children: "<" }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 568,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: sliderImages[index].src, alt: sliderImages[index].alt, className: "w-full max-w-[260px] sm:max-w-md md:max-w-lg lg:max-w-4xl h-56 sm:h-80 md:h-[350px] lg:h-[550px] object-cover rounded-lg mx-1 sm:mx-4 border-2 border-gray-200 bg-white" }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 572,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: next, className: "text-3xl sm:text-4xl md:text-5xl text-[#00703C] hover:text-[#00703C] px-1 sm:px-2 focus:outline-none mr-1 sm:mr-4", children: ">" }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 574,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 566,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mt-2 sm:mt-4", children: sliderImages.map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `mx-0.5 sm:mx-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full ${i === index ? "bg-yellow-500" : "bg-gray-300"}`, style: {
      display: "inline-block"
    } }, i, false, {
      fileName: "app/routes/services.tsx",
      lineNumber: 580,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "app/routes/services.tsx",
      lineNumber: 579,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/services.tsx",
    lineNumber: 565,
    columnNumber: 10
  }, this);
}
_s2(TechnicalConsultationSlider, "N7OVlTBA0qgekR4Zaii07AZPUFs=");
_c2 = TechnicalConsultationSlider;
var _c;
var _c2;
$RefreshReg$(_c, "Services");
$RefreshReg$(_c2, "TechnicalConsultationSlider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Services as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/services-OMPTEBFM.js.map
