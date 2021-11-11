import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import Button from '../button';

const ProfileDropdown = () => {
  let menuRef = useRef(null);
  let dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickEvent = (event) => {
    if (menuRef.current && menuRef.current.contains(event.target)) {
      event.stopPropagation();
    }
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
          className='absolute top-10 right-0 w-40 h-56 bg-red-400 rounded flex flex-col items-center'
          ref={menuRef}
        >
          <Button href='https://discord.gg/VQGw77dTeP'>Tchdet Discord</Button>
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
      <div>Logo</div>
      <ProfileDropdown />
    </header>
  ) : (
    <div>External Header</div>
  );
};

export default Header;
