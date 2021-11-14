import { useRouter } from 'next/router';
import { UserContext } from '../auth/context';
import { useEffect } from 'react';
import { auth } from '../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const path = router.pathname;

  useEffect(() => {
    if (!loading) {
      if (user == null && path.includes('/app')) {
        console.log('redirecting from ', path, ' to /sign-in');
        router.replace('/sign-in');
      }
      if (user != null && !path.includes('/app')) {
        console.log('redirecting to /app');
        router.push('/app');
      }
    }
  }, [user, loading, path]);

  return loading ? null : (
    <UserContext.Provider value={{ user: user }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
