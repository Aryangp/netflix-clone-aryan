import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { DataContextProvider } from "./context/DataContext";
import { EthContextProvider } from "./context/EthContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <DataContextProvider>
      <AuthContextProvider>
        <EthContextProvider>
            <App />
        </EthContextProvider>
      </AuthContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);
