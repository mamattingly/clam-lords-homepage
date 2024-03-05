import './pageStyles/HomeStyles.css';
import logo from '../assets/clam_lords_logo.png';

function Home() {
  return (
    <div className="home-body">
      <img src={logo} alt="Clam Lords Logo" />
      <h1>Welcome to the Clam Lords' Home Page!</h1>
    </div>
  );
}

export default Home;