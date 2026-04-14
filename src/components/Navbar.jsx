import { Link } from 'react-router-dom';
import { Network } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <Link to="/" className="nav-brand">
        <Network size={28} />
        <span>QUANTUM<span style={{color: "var(--text-main)"}}>CORE</span></span>
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/resources" className="nav-link">Archives</Link>
      </div>
    </nav>
  );
};

export default Navbar;
