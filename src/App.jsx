import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import AuthLayout from "./Layouts/AuthLayout";
import RootLayout from "./Layouts/RootLayout";

function App() {
  return (
    <main className="flex h-screen bg-[#F8FAFF] justify-center md:justify-normal">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
