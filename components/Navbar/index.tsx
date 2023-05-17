import './index.css';
import navbarLogo from '../../assets/pfc-navbar-logo.png';

export default function Navbar () {    
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={ navbarLogo.src } alt="navbar-logo" style={{ width: '50px', height: '50px' }}/>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Publications</a></li>
          <li><a href="#">Sponsors/Partners</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </>
  )
}