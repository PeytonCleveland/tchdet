import Button from '../components/button';

const Home = () => {
  return (
    <div>
      <Button href="/Hello">Button Link</Button>
      <Button>Plain Button</Button>
      <Button onClick={() => console.log('I was clicked')}>
        Button with onClick
      </Button>
    </div>
  );
};
export default Home;
