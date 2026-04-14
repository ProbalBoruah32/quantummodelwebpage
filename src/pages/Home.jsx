import { Link } from 'react-router-dom';
import { enrichedDatabase } from '../data/algorithms';

const Home = () => {
  // Let's get the prominent ones for quick access
  const featured = [
    enrichedDatabase.find(a => a.id === 'bb84'),
    enrichedDatabase.find(a => a.id === 'decoy-state'),
    enrichedDatabase.find(a => a.id === 'tf-qkd')
  ];

  return (
    <div>
      <div className="hero glass-panel">
        <h1 className="typewriter">QUANTUM CRYPTOGRAPHY</h1>
        <p style={{marginTop: "20px"}}>
          Welcome to the supercomputer terminal. Accessing the database of quantum cryptographic algorithms. 
          From the foundational BB84 protocol to the latest Twin-Field and Device-Independent paradigms. 
          Use the sidebar to explore the timeline and access detailed schematics.
        </p>
      </div>

      <h2 style={{marginTop: "40px", marginBottom: "20px"}}>CRITICAL PROTOCOLS_</h2>
      
      <div className="grid-cards">
        {featured.map(algo => (
          <div key={algo.id} className="card glass-panel" style={{position: "relative", overflow: "hidden"}}>
            <h3>{algo.name}</h3>
            <div style={{fontFamily: "var(--font-mono)", color: "var(--accent)", fontSize: "0.8rem", marginBottom: "10px"}}>
              ERA: {algo.year}
            </div>
            <p>{algo.description.substring(0, 100)}...</p>
            <Link to={`/algo/${algo.id}`} style={{marginTop: "20px", display: "inline-block", color: "var(--primary)", fontWeight: "bold"}}>
              [ INITIALIZE SEQUENCE ]
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
