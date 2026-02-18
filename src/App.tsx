import { Routes, Route } from "react-router-dom";
import TemplatePage from "./pages/TemplatePage.tsx";
import SideNav from "./components/SideNav";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <SideNav />
      <div className="p-5">
        <Routes>
          <Route path="/" element={<TemplatePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
