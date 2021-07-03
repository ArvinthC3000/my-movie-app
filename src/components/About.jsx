const About = ({ match }) => {
  console.log(match);
  return (
    <div className='container'>
      <h1>About This App</h1>
      <p>App to search Github users</p>
      <p>Version 1.0.0</p>
    </div>
  );
};

export default About;
