import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Dashboard from "./dashboard/Dashboard";
import Login from "./auth/Login";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./auth/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mx-auto my-10 max-w-4xl rounded-lg bg-white p-8 shadow-lg">
      <div className="space-y-6 rounded-lg bg-gray-50 p-6">
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Login />} />
            </Routes>
            {/* <Block />
            <ECDSASigning />
            <SchnorrSigning /> */}
          </BrowserRouter>
        </AuthProvider>
      </div>
    </div>
  </React.StrictMode>
);
