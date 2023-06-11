import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "../global.css";

import { ResponsivenessProvider } from "./contexts/responsiveness";
import { RestaurantProvider } from "./contexts/restaurant/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ResponsivenessProvider>
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </ResponsivenessProvider>
  </React.StrictMode>
);
