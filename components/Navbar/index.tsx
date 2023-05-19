import Link from 'next/link';
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
          <li><Link href="#">Home</Link></li>
          <li><Link href="/ourmission">Our Mission</Link></li>
          <li><Link href="/ourteam">Our Team</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/publications">Publications</Link></li>
          <li><Link href="/sponsors">Sponsors/Partners</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </>
  )
}