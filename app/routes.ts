import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("products", "routes/products.tsx"),
  route("services", "routes/services.tsx"),
  route("knowledge-transfer", "routes/knowledge-transfer.tsx"),
  route("news", "routes/news.tsx"),
  route("get-involved", "routes/get-involved.tsx"),

] satisfies RouteConfig;
