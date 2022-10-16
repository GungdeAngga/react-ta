import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import AccountPage from "./views/AccountPage";
import AdminPage from "./views/AdminPage";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
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
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/AccountPage" element={<AccountPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
