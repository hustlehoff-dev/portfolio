import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { LanguageProvider } from "./hooks/LangContext.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </StrictMode>
    );
  } catch (err) {
    console.error("❌ Not found #root in DOM: ", err);
  }
}
