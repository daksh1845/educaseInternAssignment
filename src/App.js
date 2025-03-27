import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen";
import WelcomeScreen from "./Components/WelcomeScreen";
import SignupScreen from "./Components/SignupScreen";
import AccountSettings from "./Components/AccountSettings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
};

export default App;