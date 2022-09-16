import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Frame from "./pages/Frame"
import Calc from "./pages/Calc"
import Links from "./pages/Links"
import TopBar from "./components/TopBar";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
    <BrowserRouter>
      {/* <div className="App">aaa</div>
      <h1 className="bg-primary text-white display-4">React</h1> */}
      <Header />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/frame/`} element={<Frame />} />
        <Route path={`/calc/`} element={<Calc />} />
        <Route path={`/links/`} element={<Links />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;