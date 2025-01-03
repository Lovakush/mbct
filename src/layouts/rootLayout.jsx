import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;