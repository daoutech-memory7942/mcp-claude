import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ComponentPage, DashboardPage, CheckoutPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="min-h-screen bg-bg-neutral-base flex items-center justify-center p-8"
              data-pimitive-token="Mode-1"
              data-semantic-token="light-mode"
              data-component-token="mint"
            >
              <HomePage />
            </div>
          }
        />
        <Route
          path="/component"
          element={
            <div
              className="min-h-screen bg-bg-neutral-base flex items-center justify-center p-8"
              data-pimitive-token="Mode-1"
              data-semantic-token="light-mode"
              data-component-token="mint"
            >
              <ComponentPage />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div className="h-screen w-screen overflow-hidden">
              <DashboardPage />
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div className="h-screen w-screen overflow-hidden">
              <CheckoutPage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
