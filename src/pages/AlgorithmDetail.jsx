import { useParams } from 'react-router-dom';
import { enrichedDatabase } from '../data/algorithms';

const AlgorithmDetail = () => {
  const { id } = useParams();
  const algo = enrichedDatabase.find(a => a.id === id);

  if (!algo) {
    return <div style={{padding: "2rem", color: "red", fontFamily: "var(--font-mono)"}}> ERROR: ALGORITHM NOT FOUND_</div>;
  }

  // Find image in the public folder, fallback or generated
  const imagePath = `/assets/${algo.id}.png`;

  return (
    <div>
      <div className="algo-header">
        <h1 className="typewriter"> {algo.name}_</h1>
        <div className="meta" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <div>
            <span>YEAR: {algo.year}</span> | <span>ERA: {algo.era}</span>
          </div>
          {algo.paperLink && (
            <a 
              href={algo.paperLink} 
              target="_blank" 
              rel="noreferrer" 
              className="glass-panel" 
              style={{padding: "10px 20px", display: "inline-block", color: "var(--primary)", border: "1px solid var(--primary)", fontSize: "0.9rem"}}
            >
              [ VIEW ORIGINAL PAPER ]
            </a>
          )}
        </div>
      </div>

      <div className="algo-content">
        {/* Core overview & Deep Dive */}
        <div className="glass-panel info-section" style={{borderLeft: "4px solid var(--primary)"}}>
          <h2>// BRIEF OVERVIEW</h2>
          <p style={{lineHeight: "1.6", fontSize: "1.1rem", marginBottom: "2rem"}}>{algo.description}</p>
          
          <h2>// DEEP DIVE LOGIC</h2>
          <p style={{lineHeight: "1.6", fontSize: "1.05rem", color: "var(--text-muted)"}}>{algo.deepExplanation}</p>
        </div>

        {/* Before and After Table */}
        {algo.comparison && (
          <div className="glass-panel info-section">
            <h2>// EVOLUTION ANALYSIS</h2>
            <table style={{width: "100%", borderCollapse: "collapse", marginTop: "1rem"}}>
              <thead>
                <tr style={{borderBottom: "1px solid var(--border-color)", textAlign: "left"}}>
                  <th style={{padding: "1rem", color: "#ff003c", borderRight: "1px solid rgba(0, 255, 65, 0.1)"}}>CRITICAL GAP (BEFORE)</th>
                  <th style={{padding: "1rem", color: "var(--primary)"}}>RESOLUTION (NOW)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{padding: "1rem", verticalAlign: "top", color: "var(--text-muted)", borderRight: "1px solid rgba(0, 255, 65, 0.1)"}}>{algo.comparison.before}</td>
                  <td style={{padding: "1rem", verticalAlign: "top", color: "var(--text-main)"}}>{algo.comparison.solved}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Schematics and DataLink video */}
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem"}}>
          
          {/* Column A: Schematics */}
          <div className="glass-panel info-section">
            <h2>// SCHEMATICS</h2>
            <div className="algo-image-placeholder">
              <img src={imagePath} alt={`${algo.name} visual`} onError={(e) => {
                e.target.onerror = null; 
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `[ VISUAL DATA UNAVAILABLE FOR ${algo.name} ]<br/><span style="font-size:0.8em;opacity:0.5;margin-top:10px;display:block">Awaiting render...</span>`;
              }} />
            </div>
            {algo.paperTitle && (
            <div style={{marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic"}}>
              Formal Publication: "{algo.paperTitle}"
            </div>
            )}
          </div>

          {/* Column B: Videos Array */}
          {algo.videoLinks && (
            <div className="glass-panel info-section" style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
              <h2 style={{color: "var(--accent)"}}>// DATALINK: LECTURE STREAMS</h2>
              
              <div style={{color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.5rem", fontFamily: "var(--font-mono)"}}>
                RETRIEVING AUTHORIZED MEDIA FILES... [{algo.videoLinks.length} FOUND]
              </div>
              
              <div style={{display: "flex", flexDirection: "column", gap: "0.8rem", overflowY: "auto", maxHeight: "400px", paddingRight: "10px"}}>
                {algo.videoLinks.map((vid, idx) => (
                  <a 
                    key={idx} 
                    href={vid.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="glass-panel" 
                    style={{
                      padding: "1rem", 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "10px", 
                      color: "var(--text-main)", 
                      borderLeft: "4px solid var(--primary)",
                      background: "rgba(0, 255, 65, 0.05)"
                    }}
                  >
                    <span style={{color: "var(--primary)", fontSize: "1.2rem"}}>▶</span> 
                    <span style={{fontFamily: "var(--font-sans)", fontWeight: "600", fontSize: "0.95rem"}}>{vid.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AlgorithmDetail;
