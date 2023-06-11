import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "../global.css";

import { RestaurantProvider } from "./contexts/restaurant/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </React.StrictMode>
);
