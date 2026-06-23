import {
  useAdminToast
} from "/build/_shared/chunk-KOO4XNJ3.js";
import {
  createHotContext
} from "/build/_shared/chunk-3BOG53TH.js";
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
  import.meta.hot.lastModified = "1779370793440.5916";
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
//# sourceMappingURL=/build/_shared/chunk-H7DKSGHW.js.map
