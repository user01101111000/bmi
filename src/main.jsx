import "./style/reset.css";
import "./style/global.css";
import router from "./routes/routes";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
