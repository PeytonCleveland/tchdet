import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-screen bg-slate-900 py-12'>
      <div className='container flex flex-col justify-center items-center gap-4'>
        <Link href='/' passHref>
          <a>
            <img src='/Logo.svg' alt='logo' width={150} />
          </a>
        </Link>
        <p className='text-white text-xs'>
          © 2022 Tchdet. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
