import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dasboard from "./pages/DashboardBI";
import Detail from "./pages/Details";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dasboard />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
