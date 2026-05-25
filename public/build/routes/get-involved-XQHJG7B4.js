import {
  AnimatePresence,
  motion
} from "/build/_shared/chunk-ZJN32EVK.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  useLoaderData
} from "/build/_shared/chunk-ZCW6PNXX.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:~/lib/emailjs.server
var require_emailjs = __commonJS({
  "empty-module:~/lib/emailjs.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/get-involved.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);

// node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js
var EmailJSResponseStatus = class {
  constructor(_status = 0, _text = "Network Error") {
    this.status = _status;
    this.text = _text;
  }
};

// node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js
var createWebStorage = () => {
  if (typeof localStorage === "undefined")
    return;
  return {
    get: (key) => Promise.resolve(localStorage.getItem(key)),
    set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    remove: (key) => Promise.resolve(localStorage.removeItem(key))
  };
};

// node_modules/@emailjs/browser/es/store/store.js
var store = {
  origin: "https://api.emailjs.com",
  blockHeadless: false,
  storageProvider: createWebStorage()
};

// node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js
var buildOptions = (options) => {
  if (!options)
    return {};
  if (typeof options === "string") {
    return {
      publicKey: options
    };
  }
  if (options.toString() === "[object Object]") {
    return options;
  }
  return {};
};

// node_modules/@emailjs/browser/es/methods/init/init.js
var init = (options, origin = "https://api.emailjs.com") => {
  if (!options)
    return;
  const opts = buildOptions(options);
  store.publicKey = opts.publicKey;
  store.blockHeadless = opts.blockHeadless;
  store.storageProvider = opts.storageProvider;
  store.blockList = opts.blockList;
  store.limitRate = opts.limitRate;
  store.origin = opts.origin || origin;
};

// node_modules/@emailjs/browser/es/api/sendPost.js
var sendPost = async (url, data, headers = {}) => {
  const response = await fetch(store.origin + url, {
    method: "POST",
    headers,
    body: data
  });
  const message = await response.text();
  const responseStatus = new EmailJSResponseStatus(response.status, message);
  if (response.ok) {
    return responseStatus;
  }
  throw responseStatus;
};

// node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js
var validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey || typeof publicKey !== "string") {
    throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
  }
  if (!serviceID || typeof serviceID !== "string") {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID || typeof templateID !== "string") {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
};

// node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js
var validateTemplateParams = (templateParams) => {
  if (templateParams && templateParams.toString() !== "[object Object]") {
    throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  }
};

// node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js
var isHeadless = (navigator2) => {
  return navigator2.webdriver || !navigator2.languages || navigator2.languages.length === 0;
};

// node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js
var headlessError = () => {
  return new EmailJSResponseStatus(451, "Unavailable For Headless Browser");
};

// node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js
var validateBlockListParams = (list, watchVariable) => {
  if (!Array.isArray(list)) {
    throw "The BlockList list has to be an array";
  }
  if (typeof watchVariable !== "string") {
    throw "The BlockList watchVariable has to be a string";
  }
};

// node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js
var isBlockListDisabled = (options) => {
  return !options.list?.length || !options.watchVariable;
};
var getValue = (data, name) => {
  return data instanceof FormData ? data.get(name) : data[name];
};
var isBlockedValueInParams = (options, params) => {
  if (isBlockListDisabled(options))
    return false;
  validateBlockListParams(options.list, options.watchVariable);
  const value = getValue(params, options.watchVariable);
  if (typeof value !== "string")
    return false;
  return options.list.includes(value);
};

// node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js
var blockedEmailError = () => {
  return new EmailJSResponseStatus(403, "Forbidden");
};

// node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js
var validateLimitRateParams = (throttle, id) => {
  if (typeof throttle !== "number" || throttle < 0) {
    throw "The LimitRate throttle has to be a positive number";
  }
  if (id && typeof id !== "string") {
    throw "The LimitRate ID has to be a non-empty string";
  }
};

// node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js
var getLeftTime = async (id, throttle, storage) => {
  const lastTime = Number(await storage.get(id) || 0);
  return throttle - Date.now() + lastTime;
};
var isLimitRateHit = async (defaultID, options, storage) => {
  if (!options.throttle || !storage) {
    return false;
  }
  validateLimitRateParams(options.throttle, options.id);
  const id = options.id || defaultID;
  const leftTime = await getLeftTime(id, options.throttle, storage);
  if (leftTime > 0) {
    return true;
  }
  await storage.set(id, Date.now().toString());
  return false;
};

// node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js
var limitRateError = () => {
  return new EmailJSResponseStatus(429, "Too Many Requests");
};

// node_modules/@emailjs/browser/es/methods/send/send.js
var send = async (serviceID, templateID, templateParams, options) => {
  const opts = buildOptions(options);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = opts.storageProvider || store.storageProvider;
  const blockList = { ...store.blockList, ...opts.blockList };
  const limitRate = { ...store.limitRate, ...opts.limitRate };
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  validateParams(publicKey, serviceID, templateID);
  validateTemplateParams(templateParams);
  if (templateParams && isBlockedValueInParams(blockList, templateParams)) {
    return Promise.reject(blockedEmailError());
  }
  if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  const params = {
    lib_version: "4.4.1",
    user_id: publicKey,
    service_id: serviceID,
    template_id: templateID,
    template_params: templateParams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
};

// node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js
var validateForm = (form) => {
  if (!form || form.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  }
};

// node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js
var findHTMLForm = (form) => {
  return typeof form === "string" ? document.querySelector(form) : form;
};
var sendForm = async (serviceID, templateID, form, options) => {
  const opts = buildOptions(options);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = store.storageProvider || opts.storageProvider;
  const blockList = { ...store.blockList, ...opts.blockList };
  const limitRate = { ...store.limitRate, ...opts.limitRate };
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  const currentForm = findHTMLForm(form);
  validateParams(publicKey, serviceID, templateID);
  validateForm(currentForm);
  const formData = new FormData(currentForm);
  if (isBlockedValueInParams(blockList, formData)) {
    return Promise.reject(blockedEmailError());
  }
  if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  formData.append("lib_version", "4.4.1");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", publicKey);
  return sendPost("/api/v1.0/email/send-form", formData);
};

// node_modules/@emailjs/browser/es/index.js
var es_default = {
  init,
  send,
  sendForm,
  EmailJSResponseStatus
};

// app/routes/get-involved.tsx
var import_emailjs = __toESM(require_emailjs(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\get-involved.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\get-involved.tsx"
  );
  import.meta.hot.lastModified = "1779438816695.8706";
}
function meta() {
  return [{
    title: "Get Involved"
  }];
}
function GetInvolved() {
  _s();
  const {
    emailJs
  } = useLoaderData();
  const [isClient, setIsClient] = (0, import_react2.useState)(false);
  const [modalOpen, setModalOpen] = (0, import_react2.useState)(false);
  const [modalMessage, setModalMessage] = (0, import_react2.useState)("");
  const [isSending, setIsSending] = (0, import_react2.useState)(false);
  const [formData, setFormData] = (0, import_react2.useState)({
    name: "",
    email: "",
    contact: "",
    message: ""
  });
  (0, import_react2.useEffect)(() => {
    setIsClient(true);
    if (emailJs?.publicKey) {
      es_default.init(emailJs.publicKey);
    }
  }, [emailJs?.publicKey]);
  (0, import_react2.useEffect)(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
  }, [modalOpen]);
  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    let newValue = value;
    if (name === "name") {
      newValue = newValue.replace(/[0-9]/g, "").replace(/\s+/g, " ");
      newValue = newValue.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    }
    if (name === "contact") {
      newValue = newValue.replace(/[^0-9]/g, "").slice(0, 11);
    }
    setFormData({
      ...formData,
      [name]: newValue
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };
    if (!isValidEmail(formData.email)) {
      setModalMessage("Please enter a valid email address (e.g., user@gmail.com)");
      setIsSending(false);
      setModalOpen(true);
      return;
    }
    const cleanedContact = formData.contact.replace(/[^0-9]/g, "");
    const ticketNumber = `FMX-${Date.now().toString().slice(-6)}`;
    const templateParams = {
      title: "Get Involved Inquiry",
      name: formData.name,
      email: formData.email,
      contact: cleanedContact,
      message: formData.message,
      date: (/* @__PURE__ */ new Date()).toLocaleString(),
      ticket_number: ticketNumber
    };
    if (!emailJs) {
      setModalMessage("Email service is not configured. Please set VITE_EMAILJS_* variables in your .env file.");
      setIsSending(false);
      setModalOpen(true);
      return;
    }
    try {
      await es_default.send(emailJs.serviceId, emailJs.templateId, templateParams);
      await es_default.send(emailJs.serviceId, emailJs.autoreplyId, templateParams);
      setModalMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: ""
      });
    } catch (error) {
      console.error("FAILED...", error);
      setModalMessage("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
      setModalOpen(true);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-auto overflow-hidden", suppressHydrationWarning: true, children: [
      isClient ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/Jackpot102.jpg", alt: "Farm Image", className: "w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] object-cover object-top", initial: {
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
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 133,
        columnNumber: 21
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/Jackpot102.jpg", alt: "Farm Image Placeholder", className: "w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] object-cover object-top opacity-0" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 145,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[#007F3D] bg-opacity-45" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 mt-16", children: "FARMEX AT A GLANCE" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full min-h-screen pt-8 pb-16 px-4 sm:px-8 bg-[url('/newbgmachinerental.png')] bg-cover bg-center flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-5xl space-y-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative bg-[#2e9e5b] p-8 md:p-10 flex flex-col justify-between md:w-2/5 overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute w-64 h-64 rounded-full bg-white/[0.07] -top-20 -left-16 pointer-events-none" }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 164,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute w-44 h-44 rounded-full bg-white/[0.06] -bottom-12 -right-12 pointer-events-none" }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-2xl md:text-3xl font-bold leading-snug mb-3", children: [
              "Let's talk about",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 169,
                columnNumber: 40
              }, this),
              "something",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-yellow-300", children: "great" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 171,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 171,
                columnNumber: 65
              }, this),
              "together"
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 168,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white/70 text-sm leading-relaxed mb-8", children: "Have a question or want to partner with FARMEX? Reach out and we'll be in touch." }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 174,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 rounded-lg bg-white/[0.18] flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }, void 0, false, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 184,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 183,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 182,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-white/85 leading-relaxed", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:leadsagriventures@gmail.com", className: "hover:text-yellow-300 transition-colors block", children: "leadsagriventures@gmail.com" }, void 0, false, {
                    fileName: "app/routes/get-involved.tsx",
                    lineNumber: 188,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hr@leadsagri.com", className: "hover:text-yellow-300 transition-colors block", children: "hr@leadsagri.com" }, void 0, false, {
                    fileName: "app/routes/get-involved.tsx",
                    lineNumber: 189,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 187,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 181,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 rounded-lg bg-white/[0.18] flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }, void 0, false, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 197,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 196,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 195,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-white/85 leading-relaxed", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639451709401", className: "hover:text-yellow-300 transition-colors block", children: "+63 945 170 9401 (Customer Service)" }, void 0, false, {
                    fileName: "app/routes/get-involved.tsx",
                    lineNumber: 201,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639064819885", className: "hover:text-yellow-300 transition-colors block", children: "+63 906 481 9885 (Northern Luzon)" }, void 0, false, {
                    fileName: "app/routes/get-involved.tsx",
                    lineNumber: 202,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639173138162", className: "hover:text-yellow-300 transition-colors block", children: "+63 917 313 8162 (CALABARZON)" }, void 0, false, {
                    fileName: "app/routes/get-involved.tsx",
                    lineNumber: 203,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 200,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 194,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 rounded-lg bg-white/[0.18] flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }, void 0, false, {
                    fileName: "app/routes/get-involved.tsx",
                    lineNumber: 211,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, false, {
                    fileName: "app/routes/get-involved.tsx",
                    lineNumber: 212,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 210,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 209,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-white/85 leading-relaxed", children: [
                  "KM 70 National Hwy, Brgy. Bangyas,",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                    fileName: "app/routes/get-involved.tsx",
                    lineNumber: 216,
                    columnNumber: 57
                  }, this),
                  "Calauan, Laguna"
                ] }, void 0, true, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 215,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 208,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 179,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 mt-8 flex gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.facebook.com", target: "_blank", rel: "noopener noreferrer", className: "w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center text-white/80 hover:bg-white/15 hover:text-white transition-colors", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 226,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 225,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 224,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.instagram.com", target: "_blank", rel: "noopener noreferrer", className: "w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center text-white/80 hover:bg-white/15 hover:text-white transition-colors", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 231,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 232,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 233,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 230,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 229,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.youtube.com", target: "_blank", rel: "noopener noreferrer", className: "w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center text-white/80 hover:bg-white/15 hover:text-white transition-colors", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 238,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", { points: "9.75 15.02 15.5 12 9.75 8.98 9.75 15.02", fill: "white" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 239,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 237,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 236,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 223,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#f0faf4] p-8 md:p-10 flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[#1a5c35] text-base font-semibold mb-6", children: [
            "Send us a ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#2e9e5b]", children: "message" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 248,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 247,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-[#b6dfc5] pb-1 focus-within:border-[#2e9e5b] transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-[10.5px] font-semibold text-[#5a9470] uppercase tracking-widest mb-1", children: "Name" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 254,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", placeholder: "Juan dela Cruz", value: formData.name, onChange: handleChange, required: true, className: "w-full bg-transparent border-none outline-none text-[#1a5c35] text-sm placeholder-[#a0c8b0] font-medium" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 257,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 253,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-[#b6dfc5] pb-1 focus-within:border-[#2e9e5b] transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-[10.5px] font-semibold text-[#5a9470] uppercase tracking-widest mb-1", children: "Email Address" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 262,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", placeholder: "you@example.com", value: formData.email, onChange: handleChange, required: true, className: "w-full bg-transparent border-none outline-none text-[#1a5c35] text-sm placeholder-[#a0c8b0] font-medium" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 265,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 261,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-[#b6dfc5] pb-1 focus-within:border-[#2e9e5b] transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-[10.5px] font-semibold text-[#5a9470] uppercase tracking-widest mb-1", children: "Contact Number" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 270,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "contact", placeholder: "+63 900 000 0000", value: formData.contact, onChange: handleChange, required: true, className: "w-full bg-transparent border-none outline-none text-[#1a5c35] text-sm placeholder-[#a0c8b0] font-medium" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 273,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 269,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-[#b6dfc5] pb-1 focus-within:border-[#2e9e5b] transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-[10.5px] font-semibold text-[#5a9470] uppercase tracking-widest mb-1", children: "Your Message" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 278,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "message", rows: 4, placeholder: "Tell us how we can help...", value: formData.message, onChange: handleChange, required: true, className: "w-full bg-transparent border-none outline-none text-[#1a5c35] text-sm placeholder-[#a0c8b0] font-medium resize-none" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 281,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 277,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSending, className: "mt-2 w-full flex items-center justify-center gap-2 bg-[#2e9e5b] hover:bg-[#227a45] text-white text-sm font-semibold py-3 rounded-xl transition-colors disabled:opacity-60", children: [
              isSending && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "animate-spin h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }, void 0, false, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 287,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" }, void 0, false, {
                  fileName: "app/routes/get-involved.tsx",
                  lineNumber: 288,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 286,
                columnNumber: 33
              }, this),
              isSending ? "Submitting..." : "Submit Form"
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 285,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 251,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-80 md:h-[480px] border-2 md:border-4 border-[#2e9e5b] rounded-xl overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { title: "FarmEx Location", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35917.25807111052!2d121.25206336136385!3d14.173866964059993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5f625f843819%3A0x2869c3992b0c6d61!2sLeads%20Agriventures!5e1!3m2!1sen!2sph!4v1755487300350!5m2!1sen!2sph", width: "100%", height: "100%", allowFullScreen: true, loading: "lazy", className: "w-full h-full", referrerPolicy: "no-referrer-when-downgrade" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 298,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 297,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: modalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "bg-white p-6 rounded-xl shadow-2xl text-center max-w-sm w-full", initial: {
      y: 50,
      opacity: 0,
      scale: 0.95
    }, animate: {
      y: 0,
      opacity: 1,
      scale: 1
    }, transition: {
      duration: 0.4,
      ease: "easeOut"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-4xl ${modalMessage.includes("success") ? "text-green-600" : "text-red-600"}`, children: modalMessage.includes("success") ? "\u2705" : "\u274C" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 325,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 324,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-800 text-base", children: modalMessage }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 329,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setModalOpen(false), className: "mt-6 px-4 py-2 bg-[#2e9e5b] text-white rounded-lg hover:bg-[#227a45] transition", children: "OK" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 330,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 312,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 305,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 304,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/get-involved.tsx",
    lineNumber: 130,
    columnNumber: 10
  }, this);
}
_s(GetInvolved, "JgbHcu/4iXkyDMkcMgmbGZL7Hbg=", false, function() {
  return [useLoaderData];
});
_c = GetInvolved;
var _c;
$RefreshReg$(_c, "GetInvolved");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GetInvolved as default,
  meta
};
//# sourceMappingURL=/build/routes/get-involved-XQHJG7B4.js.map
