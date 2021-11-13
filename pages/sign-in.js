import Button from '../components/button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../auth/firebase';
import Link from 'next/link';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);
  const router = useRouter();

  const signInUser = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        router.push('/app');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='w-full h-screen bg-gray-300 -mt-14'>
      <div className='container h-full flex flex-col items-center py-44 relative'>
        <div className='bg-white xl:w-2/5 lg:w-1/2 md:w-4/5 rounded-md flex flex-col px-8 py-5 space-y-5 w-full'>
          <p className='text-center'>Welcome back!</p>
          <div>
            <p>Enter your email</p>
            <div className='flex items-center'>
              {validEmail ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 -ml-0.5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.8}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 -ml-0.5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.8}
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  />
                </svg>
              )}
              <input
                type='email'
                name='email'
                id='email'
                className='outline-none py-2 text-lg ml-2 w-full'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!validEmail && (
                <Button onClick={() => setValidEmail(true)}>Continue</Button>
              )}
            </div>
          </div>
          {validEmail && (
            <div>
              <p>Create a password</p>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 -ml-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.8}
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  />
                </svg>
                <input
                  type={visiblePassword ? 'text' : 'password'}
                  className='outline-none py-2 text-lg ml-2 w-full'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={() => setVisiblePassword(!visiblePassword)}>
                  {!visiblePassword ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                      <path
                        fillRule='evenodd'
                        d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z'
                        clipRule='evenodd'
                      />
                      <path d='M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z' />
                    </svg>
                  )}
                </Button>
                <Button onClick={() => signInUser()}>Continue</Button>
              </div>
            </div>
          )}
        </div>
        <div className='bg-white xl:w-2/5 lg:w-1/2 md:w-4/5 rounded-md flex justify-center px-8 py-4 space-y-5 w-full mt-10'>
          <p>
            Or <Link href='/sign-up'>click here</Link> to create your free
            account
          </p>
        </div>

        <p className='absolute bottom-8 text-xs w-2/5 text-center'>
          By creating an account, you agree to the Terms of Service. For more
          information about Tchdet&#39;s privacy practices, see the Tchdet
          Privacy Statement. We&#39;ll occasionally send you account-related
          emails.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
