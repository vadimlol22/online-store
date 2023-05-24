import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./store/configureStore";
import MainLayout from "./commonComponents/MainLayout/MainLayout";
import Router from "./routes/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayout>
          <React.StrictMode>
            <Router />
          </React.StrictMode>
        </MainLayout>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
