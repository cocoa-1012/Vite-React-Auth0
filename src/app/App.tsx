import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import { useTheme } from "./themes/ThemeProvider";
import Header from "./components/Header";
import SignUpPage from "./pages/SignUp/SignUp";
import ForgotPwdPage from "./pages/ForgotPwd/ForgotPwd";

const App = () => {
  const { currentTheme } = useTheme();

  return (
    <div
      style={{ backgroundColor: currentTheme.background }}
      className=" flex flex-col bg-darkBlue min-h-screen"
    >
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="forgot-password" element={<ForgotPwdPage />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={ <LoginPage/> } />
      </Routes> */}
    </div>
  );
};

export default App;

// <div className=" flex flex-col bg-darkBlue min-h-screen">
// <BrowserRouter>
// <Header />
//   <Routes>
//     <Route path="/" element={<LoginPage />} />
//     <Route path="sign-up" element={<SignUpPage />} />
//     <Route path="forgot-password" element={<ForgotPwdPage />} />
//   </Routes>
// </BrowserRouter>
// </div>
