import Page from '../components/page/Page';
const Home = () => {
  return (
    <Page>
      <section
        style={{
          backgroundImage: `url(https://tailwindcss.com/_next/static/media/hero-dark@90.a7a063e8f9d179fbd72b0b735c5797b7.jpg)`,
        }}
        className='relative bg-cover bg-center bg-no-repeat'
      >
        <div className='bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-2xl'>
          <div className='container text-white py-48'>
            <div className='flex flex-col gap-3 w-1/2'>
              <h1 className='text-5xl font-bold leading-[54px]'>
                Let&apos;s make{' '}
                <span className='text-sky-400'>tutorial hell</span>
                <br />a thing of the past.
              </h1>
              <p className='text-lg text-slate-100 font-light'>
                Build real software engineering skills that translate
                <br /> to the real world, with Tchdet.
              </p>
              <div className='flex mt-2 items-center'>
                <input
                  type='email'
                  placeholder='Email address'
                  className='w-[360px] px-4 py-3 rounded-lg bg-slate-600/20 text-white font-semibold placeholder-slate-100 rounded-r-none border border-slate-600'
                />
                <button className='w-fit px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold rounded-l-none border border-white hover:bg-slate-200'>
                  Get Started For Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-slate-200 py-24 flex flex-col'>
        <h2>Section 2</h2>
        <h2>Section 2</h2>

        <h2>Section 2</h2>

        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
        <h2>Section 2</h2>
      </section>
    </Page>
  );
};
export default Home;
