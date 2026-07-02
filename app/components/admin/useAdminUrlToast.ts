import { useSearchParams } from "react-router";
import { useEffect, useRef } from "react";
import { useAdminToast } from "~/components/admin/AdminToast";

export type AdminUrlToastConfig = {
  param: string;
  value: string;
  type: "success" | "error";
  message: string;
};

export function useAdminUrlToast(configs: AdminUrlToastConfig[]) {
  const [searchParams, setSearchParams] = useSearchParams();
  const toast = useAdminToast();
  const shownRef = useRef(new Set<string>());

  useEffect(() => {
    let didUpdate = false;
    const nextParams = new URLSearchParams(searchParams);

    for (const config of configs) {
      const key = `${config.param}=${config.value}`;

      if (searchParams.get(config.param) !== config.value) continue;
      if (shownRef.current.has(key)) continue;

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
