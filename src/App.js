import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import HomePage from "./views/HomePage";
import TopupPage from "./views/TopupPage";
import TransferPage from "./views/TransferPage";
import WithdrawPage from "./views/WithdrawPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TopupPage" element={<TopupPage />} />
        <Route path="/TransferPage" element={<TransferPage />} />
        <Route path="/WithdrawPage" element={<WithdrawPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
