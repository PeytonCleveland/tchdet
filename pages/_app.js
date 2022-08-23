import '../styles/globals.css';
import Layout from '../components/layout';
import AuthProvider from '../auth/auth-provider';

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default App;
