import { useRouter } from 'next/router';
import { UserContext } from '../auth/context';
import { useEffect } from 'react';
import { auth } from '../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!loading) {
      if (user == null && router.pathname.includes('/app')) {
        console.log('redirecting from ', router.pathname, ' to /sign-in');
        router.push('/sign-in');
      }
      if (user != null && !router.pathname.includes('/app')) {
        console.log('redirecting to /app');
        router.push('/app');
      }
    }
  }, [user, loading]);

  return loading ? null : (
    <UserContext.Provider value={{ user: user }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
