import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">react project G.7</Link>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </nav>
    </header>
  )
}

export default Header;