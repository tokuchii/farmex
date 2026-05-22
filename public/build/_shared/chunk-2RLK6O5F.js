import {
  useAdminToast
} from "/build/_shared/chunk-NPHVSHBY.js";
import {
  useSearchParams
} from "/build/_shared/chunk-NCCBZ6OM.js";
import {
  createHotContext
} from "/build/_shared/chunk-JQ452JWN.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/admin/useAdminUrlToast.ts
var import_react2 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\useAdminUrlToast.ts"
  );
  import.meta.hot.lastModified = "1779410954312.5115";
}
function useAdminUrlToast(configs) {
  const [searchParams, setSearchParams] = useSearchParams();
  const toast = useAdminToast();
  const shownRef = (0, import_react2.useRef)(/* @__PURE__ */ new Set());
  (0, import_react2.useEffect)(() => {
    let didUpdate = false;
    const nextParams = new URLSearchParams(searchParams);
    for (const config of configs) {
      const key = `${config.param}=${config.value}`;
      if (searchParams.get(config.param) !== config.value)
        continue;
      if (shownRef.current.has(key))
        continue;
      shownRef.current.add(key);
      toast[config.type](config.message);
      nextParams.delete(config.param);
      didUpdate = true;
    }
    if (didUpdate) {
      setSearchParams(nextParams, { replace: true });
    }
  }, [configs, searchParams, setSearchParams, toast.error, toast.success]);
}

export {
  useAdminUrlToast
};
//# sourceMappingURL=/build/_shared/chunk-2RLK6O5F.js.map
