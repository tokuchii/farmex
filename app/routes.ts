import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("get-involved", "routes/get-involved.tsx"),
  route("knowledge-transfer", "routes/knowledge-transfer.tsx"),
  route("news", "routes/news.tsx"),
  route("products", "routes/products.tsx"),
  route("services", "routes/services.tsx"),
  route("register", "routes/register.tsx"),
  route("admin", "routes/admin.tsx", [
    route("dashboard", "routes/admin.dashboard.tsx"),
    route("news", "routes/admin.news.tsx"),
    route("services", "routes/admin.services.tsx"),
    route("testimonial", "routes/admin.testimonial.tsx"),
    route("knowledgeT", "routes/admin.knowledgeT.tsx"),
    route("register", "routes/admin.register.tsx"),
    route("profile", "routes/admin.profile.tsx"),
    route("training", "routes/admin.training.tsx"),
  ]),
] satisfies RouteConfig;
