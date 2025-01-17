import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Header from '../common/components/Header';
import SignIn from '../pages/SignIn';
import Footer from '../common/components/Footer';
import Dashboard from '../pages/Dashboard';

function AppRoutes() {
  return (
    <div className="main-div">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

function AppRouter() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default AppRouter;
