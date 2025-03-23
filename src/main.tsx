import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { doctors } from "./assets/assets_frontend/assets.ts";
import { addDoctors } from "./features/doctors/doctorSlice.ts";

store.dispatch(addDoctors(doctors));

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
