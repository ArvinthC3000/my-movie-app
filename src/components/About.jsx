import Header from './Header';

const About = ({ match }) => {
  return (
    <>
      <Header />
      <div className='container'>
        <h1>About This App</h1>
        <p>App to search Movies</p>
        <p>Version 1.0.0</p>
      </div>
    </>
  );
};

export default About;
