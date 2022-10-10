import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import HomePage from "./views/HomePage";
import TopupPage from "./views/TopupPage";
import WithdrawPage from "./views/WithdrawPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TopupPage" element={<TopupPage />} />
        <Route path="/WithdrawPage" element={<WithdrawPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
