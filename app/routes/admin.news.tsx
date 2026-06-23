import { NewsModule } from "~/components/admin/NewsModule";
import type { FetcherWithComponents } from "@remix-run/react";

export const AdminNews = () => {

  return (
    <section>
      <NewsModule
        news={[]}
        fetcher={null as unknown as FetcherWithComponents<{ ok?: boolean; error?: string; message?: string}>}
        cloudinaryConfig={null}
      />
    </section>
  );
};

export default AdminNews;
