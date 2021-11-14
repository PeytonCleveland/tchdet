import { useState } from 'react';
import Button from '../../components/button';
import { auth } from '../../auth/firebase';
import { useRouter } from 'next/router';

const Onboarding = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const router = useRouter();

  const updateName = () => {
    const displayName = `${firstName} ${lastName}`;
    console.log(firstName, lastName);

    auth.currentUser
      .updateProfile({
        displayName: displayName,
      })
      .then(() => {
        router.replace('/app');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>Welcome!</div>
      <div className='flex flex-col bg-gray-400 w-2/5 py-14 px-8'>
        <p>First Name:</p>
        <input
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p>Last Name:</p>
        <input
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Button onClick={updateName}>Continue</Button>
      </div>
    </>
  );
};

export default Onboarding;
