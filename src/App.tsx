import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Header";
import LayoutScreen from "./layouts/Layout";
import Home from "./components/Home";
import CoinDetail from "./containers/CoinDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutScreen />}>
        <Route index element={<Home />} />
        <Route path="/coins/:id" element={<CoinDetail />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
