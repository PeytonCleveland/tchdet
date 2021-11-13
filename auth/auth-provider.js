import { useRouter } from 'next/router';
import { UserContext } from '../auth/context';
import { useUserData } from '../auth/hooks';
import { useContext, useEffect } from 'react';

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const userData = useUserData();

  useEffect(() => {
    if (!userData.user && router.pathname.includes('/app')) {
      router.push('/sign-in');
    }
    if (userData.user && router.pathname.includes('/sign-in')) {
      router.push('/app');
    }
  }, [userData]);

  return (
    <UserContext.Provider value={{ user: userData }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
