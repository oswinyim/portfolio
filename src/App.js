import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isHK={false} />} />
        <Route path="/ca" element={<Home isHK={false} />} />
        <Route path="/hk" element={<Home isHK={true} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
