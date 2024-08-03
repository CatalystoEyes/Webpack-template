import { createRoot } from "react-dom/client";
import { App } from "./Components/App";
import "./main.module.scss";
const root = createRoot(document.getElementById("root"));

if (!root) {
  throw new Error("root is not found!");
}

root.render(<App />);
