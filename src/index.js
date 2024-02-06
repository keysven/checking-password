import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";
import registerServiceWorker from "./registerServiceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements(window);
});
