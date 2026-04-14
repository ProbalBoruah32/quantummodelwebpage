import { Link, useLocation } from 'react-router-dom';
import { enrichedDatabase, getEras } from '../data/algorithms';

const Sidebar = () => {
  const eras = getEras();
  const location = useLocation();

  return (
    <aside className="sidebar">
      {eras.map((era, index) => (
        <div key={index} style={{marginBottom: "20px"}}>
          <div className="sidebar-category">{era}</div>
          {enrichedDatabase.filter(a => a.era === era).map(algo => (
            <Link 
              key={algo.id} 
              to={`/algo/${algo.id}`} 
              className={`sidebar-item ${location.pathname === `/algo/${algo.id}` ? 'active' : ''}`}
            >
              {algo.name} <span style={{fontSize: "0.8em", opacity: 0.5}}>[{algo.year}]</span>
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
