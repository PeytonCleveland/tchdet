import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const internal = router.pathname.includes('/app');
  const authPage = router.pathname.includes('/sign');
  const onboarding = router.pathname.includes('/onboarding');
  return internal ? (
    onboarding ? (
      <div className='flex h-screen flex-col justify-between items-center'>
        {children}
      </div>
    ) : (
      <div className='flex h-screen flex-col'>
        <Header />
        <div className='flex h-full'>
          <Sidebar />
          {children}
        </div>
      </div>
    )
  ) : (
    <>
      <Header />
      {children}
      {!authPage && <Footer />}
    </>
  );
};

export default Layout;
