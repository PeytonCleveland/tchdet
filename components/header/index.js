import { useRouter } from 'next/router';

const Header = () => {
  //get path from router
  const router = useRouter();
  const path = router.pathname;

  return path.includes('/app') ? (
    <header className='h-14 flex justify-between items-center px-5'>
      <div>Logo</div>
      <div>2</div>
    </header>
  ) : (
    <div>External Header</div>
  );
};

export default Header;
