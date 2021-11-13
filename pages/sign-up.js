import Button from '../components/button';
import firebase from '../firebase';

console.log(firebase);

const SignUp = () => {
  return (
    <div className='w-full h-screen bg-red-300 -mt-14'>
      <div className='container h-full flex flex-col items-center py-44 relative'>
        <div className='bg-white w-2/5 rounded-md flex flex-col px-8 py-5 space-y-5'>
          <p>
            Welcome to Tchdet! <br />
            Let the adventures begin.
          </p>
          <div>
            <p>Enter your email</p>
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
                type='email'
                className='outline-none py-2 text-lg ml-2 w-full'
              />
              <Button>Continue</Button>
            </div>
          </div>
        </div>
        <p className='absolute bottom-8 text-xs w-2/5 text-center'>
          By creating an account, you agree to the Terms of Service. For more
          information about Tchdet's privacy practices, see the Tchdet Privacy
          Statement. We'll occasionally send you account-related emails.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
