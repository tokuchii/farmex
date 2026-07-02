import { useEffect } from "react";
import { useAdminToast } from "~/components/admin/AdminToast";

export function useAdminActionToast(formError?: string) {
  const toast = useAdminToast();

  useEffect(() => {
    if (formError) {
      toast.error(formError);
    }
  }, [formError, toast.error]);
}
