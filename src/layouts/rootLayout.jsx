import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Add padding-top to prevent content from being hidden under fixed header */}
      <main className="flex-grow pt-28 md:pt-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;