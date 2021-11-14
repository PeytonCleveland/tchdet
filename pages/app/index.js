import { auth } from '../../auth/firebase';

const AuthHome = () => {
  const firstName = auth.currentUser.displayName.split(' ')[0];
  return (
    <div className='w-full h-full bg-gray-800 px-28 py-12 flex flex-col'>
      <div className='flex justify-between  w-full items-end'>
        <h1 className='text-white text-xl'>Welcome back, {firstName}</h1>
        <div className='bg-gray-200 rounded-full flex items-center justify-center px-6 py-1 space-x-4'>
          <p>Daily Goal</p>
          <div className='bg-gray-400 w-52 h-3 rounded-full' />
          <p className='text-sm'>0/250 XP</p>
        </div>
      </div>
    </div>
  );
};

export default AuthHome;
