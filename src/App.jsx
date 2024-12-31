import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/rootLayout';
import Home from './pages/home';
import Donation from './pages/donation';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;