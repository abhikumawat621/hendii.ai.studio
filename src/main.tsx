// Ensure window.fetch is safely assignable in sandboxed environments
try {
  const originalFetch = window.fetch ? window.fetch.bind(window) : null;
  let currentFetch = originalFetch;
  Object.defineProperty(window, 'fetch', {
    get: () => currentFetch,
    set: (newFetch) => {
      currentFetch = typeof newFetch === 'function' ? newFetch : originalFetch;
    },
    configurable: true,
    enumerable: true,
  });
} catch (_) {
  // Silent fallback
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
