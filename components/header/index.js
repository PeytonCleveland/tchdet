import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import Button from '../button';
import Link from 'next/link';
import { auth } from '../../auth/firebase';

const menuItems = [
  { text: 'Tchdet Discord', link: 'https://discord.gg/VQGw77dTeP' },
  { text: 'My Profile', link: '/app/profile' },
];

const ProfileDropdown = () => {
  let menuRef = useRef(null);
  let dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClickEvent = (event) => {
    if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
      setIsOpen(!isOpen);
    }
    if (
      menuRef.current &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !menuRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('signed out');
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.addEventListener('click', handleClickEvent, true);
    return () => {
      document.removeEventListener('click', handleClickEvent, true);
    };
  });
  return (
    <div className='relative'>
      <button
        ref={dropdownRef}
        className='flex hover:bg-gray-200 rounded-full pl-1.5 pr-1 py-1 items-center cursor-pointer'
      >
        <img src='/download.svg' className='w-6 h-6 rounded-full' />
        {isOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-800'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
              clipRule='evenodd'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-800'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div
          className='absolute top-10 right-0 p-4 w-44 h-56 bg-gray-100 rounded flex flex-col items-center shadow-md'
          ref={menuRef}
        >
          {menuItems.map((item, index) => {
            return (
              <Button
                key={index}
                href={item.link}
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Button>
            );
          })}
          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  //get path from router
  const router = useRouter();
  const path = router.pathname;

  return path.includes('/app') ? (
    <header className='h-14 flex justify-between items-center px-5'>
      <Link href='/app' passHref>
        <a>Logo</a>
      </Link>

      <ProfileDropdown />
    </header>
  ) : (
    <div className='container h-14 flex justify-between items-center z-50'>
      <div>Logo</div>
      <Button href='/sign-in' className='ml-4'>
        Sign In
      </Button>
      <Button href='/sign-up' className='ml-4'>
        Sign Up
      </Button>
    </div>
  );
};

export default Header;
