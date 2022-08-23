const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
  { title: 'Blog', href: '/blog' },
];

const Sidebar = () => {
  return (
    <div className='w-60 p-5 flex justify-between flex-col bg-slate-900 h-full'>
      <div className='flex flex-col'>
        {navItems.map((item, index) => {
          return (
            <a key={index} href={item.href} className='text-white text-2xl'>
              {item.title}
            </a>
          );
        })}
      </div>
      <div className='flex justify-center w-full bg-white'>
        Get Started (1/4)
      </div>
    </div>
  );
};
export default Sidebar;
