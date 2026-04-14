const Resources = () => {
  return (
    <div>
      <div className="algo-header">
        <h1 className="typewriter">OFFICIAL_ARCHIVES</h1>
        <div className="meta">
          <span>CLASSIFICATION: PUBLIC</span> | <span>STANDARDS & DOCS</span>
        </div>
      </div>

      <div className="algo-content" style={{gap: "3rem"}}>
        
        {/* Section 1 */}
        <div className="glass-panel info-section" style={{borderLeft: "4px solid var(--primary)"}}>
          <h2 style={{color: "var(--accent)"}}>// 1. OFFICIAL STANDARDS & DOCUMENTATION</h2>
          <p style={{marginBottom: "2rem", color: "var(--text-muted)"}}>Primary sources for the latest finalized algorithms and the science behind them.</p>
          
          <div style={{display: "flex", flexDirection: "column", gap: "1.5rem"}}>
            <div style={{paddingBottom: "1rem", borderBottom: "1px solid rgba(0, 255, 65, 0.1)"}}>
              <h3 style={{fontSize: "1.2rem", color: "var(--text-main)"}}>
                <a href="#" style={{color: "var(--primary)"}}>[LINK] NIST Post-Quantum Cryptography Project</a>
              </h3>
              <p style={{marginTop: "5px", color: "var(--text-muted)"}}>The central hub for the FIPS standards (FIPS 203, 204, and 205). It includes technical FAQs and the full project timeline.</p>
            </div>
            
            <div style={{paddingBottom: "1rem", borderBottom: "1px solid rgba(0, 255, 65, 0.1)"}}>
              <h3 style={{fontSize: "1.2rem", color: "var(--text-main)"}}>
                <a href="#" style={{color: "var(--primary)"}}>[LINK] NIST FIPS 203 (ML-KEM)</a>
              </h3>
              <p style={{marginTop: "5px", color: "var(--text-muted)"}}>The official technical specification for the primary general-purpose encryption standard.</p>
            </div>
            
            <div style={{paddingBottom: "1rem", borderBottom: "1px solid rgba(0, 255, 65, 0.1)"}}>
              <h3 style={{fontSize: "1.2rem", color: "var(--text-main)"}}>
                <a href="#" style={{color: "var(--primary)"}}>[LINK] QuIC Lab - QKD Concepts</a>
              </h3>
              <p style={{marginTop: "5px", color: "var(--text-muted)"}}>A clear breakdown of physics-based protocols like BB84, E91, and BBM92.</p>
            </div>
            
            <div>
              <h3 style={{fontSize: "1.2rem", color: "var(--text-main)"}}>
                <a href="#" style={{color: "var(--primary)"}}>[LINK] IBM's Guide to Quantum-Safe Cryptography</a>
              </h3>
              <p style={{marginTop: "5px", color: "var(--text-muted)"}}>An industry-focused overview of the six primary categories of quantum-safe math.</p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="glass-panel info-section" style={{borderLeft: "4px solid var(--primary)"}}>
          <h2 style={{color: "var(--accent)"}}>// 2. VIDEO TUTORIALS & LECTURES</h2>
          <p style={{marginBottom: "2rem", color: "var(--text-muted)"}}>Visual guides are often better for grasping complex concepts like photon polarization and lattice math.</p>
          
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem"}}>
            <div className="card" style={{border: "1px solid var(--border-color)", background: "rgba(0,0,0,0.3)"}}>
              <h3 style={{fontSize: "1.1rem", borderBottom: "none"}}>Quantum Key Distribution (QKD) Explained step-by-step</h3>
              <p>A foundational video that explains how the physics of QKD actually works.</p>
              <a href="#" style={{marginTop: "10px", display: "inline-block", color: "var(--primary)"}}> ACCESS STREAM</a>
            </div>
            
            <div className="card" style={{border: "1px solid var(--border-color)", background: "rgba(0,0,0,0.3)"}}>
              <h3 style={{fontSize: "1.1rem", borderBottom: "none"}}>BB84 Protocol - Simple Explanation</h3>
              <p>Focuses specifically on the first quantum algorithm and how it detects eavesdroppers.</p>
              <a href="#" style={{marginTop: "10px", display: "inline-block", color: "var(--primary)"}}> ACCESS STREAM</a>
            </div>
            
            <div className="card" style={{border: "1px solid var(--border-color)", background: "rgba(0,0,0,0.3)"}}>
              <h3 style={{fontSize: "1.1rem", borderBottom: "none"}}>Post-Quantum Cryptography Types</h3>
              <p>Explains the different mathematical families like lattice-based and hash-based signatures.</p>
              <a href="#" style={{marginTop: "10px", display: "inline-block", color: "var(--primary)"}}> ACCESS STREAM</a>
            </div>
            
            <div className="card" style={{border: "1px solid var(--border-color)", background: "rgba(0,0,0,0.3)"}}>
              <h3 style={{fontSize: "1.1rem", borderBottom: "none"}}>NIST's Dustin Moody on PQC Strategy</h3>
              <p>A high-level view of how these algorithms are being deployed in the real world.</p>
              <a href="#" style={{marginTop: "10px", display: "inline-block", color: "var(--primary)"}}> ACCESS STREAM</a>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="glass-panel info-section" style={{borderLeft: "4px solid var(--primary)"}}>
          <h2 style={{color: "var(--accent)"}}>// 3. ADVANCED LEARNING CHANNELS</h2>
          <p style={{marginBottom: "2rem", color: "var(--text-muted)"}}>For those who want a deep dive into the implementation and math.</p>
          
          <div style={{display: "flex", flexDirection: "column", gap: "1.5rem"}}>
            <div style={{paddingBottom: "1rem", borderBottom: "1px solid rgba(0, 255, 65, 0.1)"}}>
              <h3 style={{fontSize: "1.2rem", color: "var(--text-main)"}}>
                <a href="#" style={{color: "var(--primary)"}}>[CHANNEL] Cryptography 101 by Alfred Menezes</a>
              </h3>
              <p style={{marginTop: "5px", color: "var(--text-muted)"}}>Highly regarded by experts for its detailed playlists on ML-KEM (Kyber) and ML-DSA (Dilithium).</p>
            </div>
            
            <div>
              <h3 style={{fontSize: "1.2rem", color: "var(--text-main)"}}>
                <a href="#" style={{color: "var(--primary)"}}>[CHANNEL] Quantum Algorithms & Cryptography Course</a>
              </h3>
              <p style={{marginTop: "5px", color: "var(--text-muted)"}}>A full university-style lecture series covering the mathematical models of quantum computation.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resources;
