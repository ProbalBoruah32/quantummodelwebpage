import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AlgorithmDetail from './pages/AlgorithmDetail';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <div className="app-container matrix-bg-overlay">
        <div className="matrix-bg"></div>
        <Navbar />
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/algo/:id" element={<AlgorithmDetail />} />
          </Routes>
        </main>
      </div>
      
      {/* Global Open Source Contact Portal */}
      <div style={{
        marginTop: "auto",
        padding: "1.5rem",
        borderTop: "1px solid var(--border-color)",
        background: "#010403",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        fontFamily: "var(--font-mono)",
        fontSize: "0.9rem"
      }}>
        <div style={{ color: "var(--text-muted)" }}>/// GLOBAL OPEN-SOURCE PROTOCOL INITIATED ///</div>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="https://github.com/ProbalBoruah32/quantummodelwebpage" target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>[ GITHUB REPOSITORY ]</a>
          <a href="mailto:pb168140@gmail.com" className="hover-glow" style={{ color: "var(--primary)", textDecoration: "none" }}>[ SECURE EMAIL COMMS ]</a>
          <a href="https://wa.me/919577184755" target="_blank" rel="noreferrer" className="hover-glow" style={{ color: "var(--primary)", textDecoration: "none" }}>[ ESTABLISH DIRECT E2E LINE ]</a>
        </div>
      </div>

    </Router>
  );
}

export default App;
