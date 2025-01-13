import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/rootLayout';
import Home from './pages/home';
import Donation from './pages/donation';
import Contact from './pages/contact';
import Certificate from './pages/certificate';
import IdCard from './pages/idcard';
import PolicyPage from './pages/policy';
import MemberPolicyPage from './pages/memberPolicy';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/idcard" element={<IdCard />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/member-policy" element={<MemberPolicyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
