import {
  useAdminToast
} from "/build/_shared/chunk-IQOBLU6I.js";
import {
  createHotContext
} from "/build/_shared/chunk-JQ452JWN.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/admin/useAdminActionToast.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\useAdminActionToast.ts"
  );
  import.meta.hot.lastModified = "1779410954312.5115";
}
function useAdminActionToast(formError) {
  const toast = useAdminToast();
  (0, import_react.useEffect)(() => {
    if (formError) {
      toast.error(formError);
    }
  }, [formError, toast.error]);
}

export {
  useAdminActionToast
};
//# sourceMappingURL=/build/_shared/chunk-36KN6UO5.js.map
