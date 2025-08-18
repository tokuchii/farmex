import {
  AnimatePresence,
  motion
} from "/build/_shared/chunk-ZJN32EVK.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-65CJFPR6.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/get-involved.tsx
var import_react = __toESM(require_react(), 1);

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
  import.meta.hot.lastModified = "1755496699254.067";
}
function meta() {
  return [{
    title: "Get Involved"
  }];
}
function GetInvolved() {
  _s();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
  const [modalMessage, setModalMessage] = (0, import_react.useState)("");
  const [isSending, setIsSending] = (0, import_react.useState)(false);
  const [formData, setFormData] = (0, import_react.useState)({
    name: "",
    email: "",
    contact: "",
    message: ""
  });
  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    let newValue = value;
    if (name === "name") {
      newValue = newValue.replace(/[0-9]/g, "");
      newValue = newValue.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    }
    if (name === "contact") {
      newValue = newValue.replace(/[^0-9]/g, "").slice(0, 10);
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
      const emailRegex = /^[^\s@]+@[a-zA-Z][a-zA-Z0-9.-]*\.(com|org|net|edu|gov|io)$/i;
      return emailRegex.test(email);
    };
    if (!isValidEmail(formData.email)) {
      setModalMessage("Please enter a valid email address (e.g., user@gmail.com)");
      setIsSending(false);
      setModalOpen(true);
      return;
    }
    const cleanedContact = formData.contact.replace(/[^0-9]/g, "");
    const templateParams = {
      name: formData.name,
      email: formData.email,
      contact: cleanedContact,
      message: formData.message,
      date: (/* @__PURE__ */ new Date()).toLocaleString()
    };
    try {
      await es_default.send("service_hce3n1d", "template_l1ny1ph", templateParams, "GhCOaNaQzdYhDBH2G");
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
  (0, import_react.useEffect)(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalOpen]);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-auto overflow-hidden", children: [
      isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/jackpot102.jpg", alt: "Farm Image", className: "w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] object-cover object-top", initial: {
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
        lineNumber: 114,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[#007F3D] bg-opacity-45" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26", children: "FARMEX AT A GLANCE" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full min-h-screen pt-8 pb-16 px-4 sm:px-8 bg-[url('/newbgmachinerental.png')] bg-cover bg-center flex flex-col items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-7xl space-y-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[url('/bgmascot-form_get-involved.png')] bg-cover bg-center rounded-xl p-6 md:p-10 shadow-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/pandoybg1.png", alt: "Mascot", className: "w-[350px] h-auto" }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 143,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 bg-yellow-500 w-3/4 md:w-2/3 mt-4" }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-3xl font-semibold mb-4", children: "Sent us a message" }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 150,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "bg-white text-gray-800 p-6 rounded-lg w-full shadow-lg border border-gray-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", placeholder: "Name", value: formData.name, onChange: handleChange, className: "w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none mb-4", required: true }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 153,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", placeholder: "Email Address", value: formData.email, onChange: handleChange, className: "w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none mb-4", required: true }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 155,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "contact", placeholder: "Contact Number", value: formData.contact, onChange: handleChange, className: "w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none mb-4", required: true }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 157,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "message", rows: 6, placeholder: "Your Message", value: formData.message, onChange: handleChange, className: "w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none mb-4 resize-none", required: true }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 159,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 152,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-[#00703C] text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-60", disabled: isSending, children: isSending ? "Submitting..." : "Submit Form" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 162,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 161,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 151,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 149,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 148,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 140,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-black space-y-6 text-sm sm:text-base lg:text-lg w-full px-2 sm:px-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold text-lg sm:text-xl mb-1", children: "Emails:" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 178,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "break-words", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:leadsagriventures@gmail.com", className: "underline text-black hover:text-green-600 break-words", children: "leadsagriventures@gmail.com" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 180,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 179,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "break-words", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hr@leadsagri.com", className: "underline text-black hover:text-green-600 break-words", children: "hr@leadsagri.com" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 185,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 184,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 177,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold text-lg sm:text-xl mb-1", children: "Contact numbers:" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 193,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "FARMEX Customer Service & Support:",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639451709401", className: "underline text-black hover:text-green-600", children: "+63 945 170 9401" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 196,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 194,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Northern Luzon:",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639064819885", className: "underline text-black hover:text-green-600", children: "+63 906 481 9885" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 202,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 200,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "MIMAROPA:",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639267091276", className: "underline text-black hover:text-green-600", children: "+63 917 313 8153" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 208,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 206,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "CALABARZON:",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639173138162", className: "underline text-black hover:text-green-600", children: "+63 917 313 8162" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 214,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 212,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 192,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold text-lg sm:text-xl mb-1", children: "Station Address:" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 222,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "break-words", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.google.com/maps?q=14.330623,121.076050", target: "_blank", rel: "noopener noreferrer", className: "underline text-black hover:text-green-600", children: "Unit A 201 and Alfresco Area, 2nd Floor Coral Center Mall, Barangay San Francisco, Bi\xF1an, Laguna" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 224,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 223,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 221,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 175,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md md:max-w-full h-80 md:h-[480px] border-2 md:border-4 border-[#057A31]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { title: "FarmEx Location", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.64908692822!2d121.27209887587168!3d14.172200686486535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5e176676321b%3A0x7b2c62c941bcd7a3!2s1775%20F.T.%20San%20Luis%20Ave%2C%20Bay%2C%20Laguna%204033!5e0!3m2!1sen!2sph!4v1693817890000!5m2!1sen!2sph", width: "100%", height: "100%", allowFullScreen: true, loading: "lazy", className: "rounded-md shadow-lg", referrerPolicy: "no-referrer-when-downgrade" }, void 0, false, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 233,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 232,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 173,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 137,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-full bg-yellow-500" }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 240,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: modalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", initial: {
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
        lineNumber: 263,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 262,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-800 text-base", children: modalMessage }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 267,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setModalOpen(false), className: "mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition", children: "OK" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 268,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 250,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 243,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 242,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/get-involved.tsx",
    lineNumber: 112,
    columnNumber: 10
  }, this);
}
_s(GetInvolved, "OpILQ1RH1urQkxdr8GaQdDe7SW8=");
_c = GetInvolved;
var _c;
$RefreshReg$(_c, "GetInvolved");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GetInvolved as default,
  meta
};
//# sourceMappingURL=/build/routes/get-involved-GPHMAVLY.js.map
