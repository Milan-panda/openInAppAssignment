import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthPage />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<Dashboard />}>
          <Route path="/upload" element={<Upload />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
