import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const internal = router.pathname.includes('/app');
  return internal ? (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        {children}
      </div>
    </div>
  ) : (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
