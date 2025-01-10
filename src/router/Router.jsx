import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Header from '../common/components/Header';
import SignIn from '../pages/SignIn';
import Footer from '../common/components/Footer';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
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
