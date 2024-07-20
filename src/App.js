import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Store from "./pages/Store";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import { useEffect, useState } from "react";

function App() {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fecthMenu() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/menus");
        const data = await res.json();
        setMenu(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fecthMenu();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/menu"
          element={<Menu menu={menu} isLoading={isLoading} />}
        />
        <Route path="/order" element={<Order />} />
        <Route path="/store" element={<Store />} />
        <Route path="/app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
