import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import HomePage from "./views/HomePage";
import TopupPage from "./views/TopupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TopupPage" element={<TopupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
