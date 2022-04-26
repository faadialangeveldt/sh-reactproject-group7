import './footer.css';
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <footer className='container'>
     <section>
       <div>
        <Link to="/" className="logoFooter">react project G.7</Link>
       </div>
       <div>
          <ul>
            <li>Our Menu</li>
            <li>ABout us</li>
          </ul>
       </div>
       <div>
          <ul>
            <li>Gallery</li>
            <li>Reservations</li>
            <li>Contact</li>
          </ul>
       </div>
       <div>
         <FaInstagram style={{marginRight: "10px"}} size={45} />
         <FaFacebookF  size={45} />
         <FaTwitter style={{marginLeft: "10px"}}  size={45} />
       </div>
     </section>
    </footer>

  )
}

export default Footer;