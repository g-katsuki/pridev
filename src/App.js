import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Frame from "./pages/Frame"
import Calc from "./pages/Calc"
import Links from "./pages/Links"
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/frame/`} element={<Frame />} />
        <Route path={`/calc/`} element={<Calc />} />
        <Route path={`/links/`} element={<Links />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;