import { Routes, Route } from "react-router-dom";
import TemplatePage from "./pages/TemplatePage.tsx";
import ComponentShowcase from "./pages/ComponentShowcase.tsx";
import SideNav from "./components/NavBar.tsx";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0">
        <SideNav/>
      </div>
      <div className="p-5 mt-15">
        <Routes>
          <Route path="/" element={<TemplatePage />} />
          <Route path="/showcase" element={<ComponentShowcase />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
