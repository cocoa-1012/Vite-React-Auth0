import { Route, Routes } from "react-router-dom";

import { useTheme } from "./themes/ThemeProvider";

import LoginPage from "./pages/auth/Login/Login";
import SignUpPage from "./pages/auth/SignUp/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword/ForgotPassword";

import AuthContextProvider from "./contexts/AuthContext/AuthContextProvider";

import Header from "./components/Header";
import GameSetUpPage from "./pages/GameSetUp/GameSetUp";
import GuestViewPage from "./pages/GuestView/GuestView";


const App = () => {
  const { currentTheme } = useTheme();

  return (
    <AuthContextProvider>
      <div
        style={{ backgroundColor: currentTheme.background }}
        className="flex flex-col bg-darkBlue min-h-screen p-2"
      >
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="game-setup" element={<GameSetUpPage />} />
          <Route path="guest-view" element={<GuestViewPage />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
};

export default App;