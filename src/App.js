import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Frame from "./pages/Frame"
import TopBar from "./components/TopBar";
import Select from "./components/Select";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">aaa</div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <TopBar />
      <Select />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/frame/`} element={<Frame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;