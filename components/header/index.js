import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import Button from '../button';
import Link from 'next/link';
import { auth } from '../../auth/firebase';

const menuItems = [
  { text: 'Tchdet Discord', link: 'https://discord.gg/VQGw77dTeP' },
  { text: 'My Profile', link: '/app/profile' },
];

const externalLinks = [
  { type: 'dropdown', text: 'Explore', link: '/explore' },
  { type: 'link', text: 'Pricing', link: '/pricing' },
  { type: 'link', text: 'Enterprise', link: '/enterprise' },
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
        router.replace('/');
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
    <header className='h-14 flex justify-between items-center px-5 z-50'>
      <Link href='/app' passHref>
        <a>
          <img src='/Logo.svg' alt='logo' width={100} />
        </a>
      </Link>

      <ProfileDropdown />
    </header>
  ) : (
    <header className='w-screen h-16 flex justify-between items-center z-50 backdrop-blur fixed bg-slate-900/90 top-0 left-0 border-b border-slate-800'>
      <div className='container flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <Link href='/' passHref>
            <a>
              <img src='/Logo.svg' alt='logo' width={120} />
            </a>
          </Link>
          <div className='flex items-center select-none justify-center bg-slate-400 bg-opacity-20 text-opacity-100 px-2 py-1 text-xs font-semibold text-sky-300 h-fit rounded-full'>
            Alpha v0.1.6
          </div>
          <div className='flex gap-3 items-center ml-8'>
            {path.includes('/sign') ? null : (
              <>
                {externalLinks.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      href={item.link}
                      variant='text'
                      color={
                        router.pathname.includes(item.link) ? 'blue' : 'white'
                      }
                    >
                      {item.text}
                      {item.type === 'dropdown' && (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4 ml-1'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19 9l-7 7-7-7'
                          />
                        </svg>
                      )}
                    </Button>
                  );
                })}
              </>
            )}
          </div>
        </div>
        <div className='flex gap-6 items-center'>
          {path.includes('/sign') ? (
            <Button href='/' variant='text' color='white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
                />
              </svg>
              Support
            </Button>
          ) : (
            <>
              <Button
                href='/sign-in'
                className='ml-4'
                variant='text'
                color='blue'
              >
                Sign In
              </Button>
              <Button href='/sign-up' className='ml-4' color='white'>
                Get Started
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
