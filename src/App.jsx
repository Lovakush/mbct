import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/rootLayout';
import Home from './pages/home';
import Donation from './pages/donation';
import Contact from './pages/contact';
import Certificate from './pages/certificate';
import IdCard from './pages/idcard';
import PolicyPage from './pages/policy';
import SimplePolicyPage from './pages/simplePolicy';
import MemberPolicyPage from './pages/memberPolicy';
import FairIdCard from './pages/fairIdCard';
import DonationCertificate from './components/donationCertificate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path="/fair-id-card" element={<FairIdCard />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/policy-simple" element={<SimplePolicyPage />} />
          <Route path="/member-policy" element={<MemberPolicyPage />} />
          <Route path="/donation-certificate" element={<DonationCertificate payment_id={"pay_Pj6AYSBTCthC6f"}/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;