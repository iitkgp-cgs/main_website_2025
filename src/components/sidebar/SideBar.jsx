import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';  // Sidebar styles

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h2 className="sidebar-title">C G S</h2>
        <ul className="sidebar-menu">
        <li onClick={() => navigate('/')} className="sidebar-item">
            Home
          </li>
          <li onClick={() => navigate('/GameDev')} className="sidebar-item">
            Game Dev
          </li>
          <li onClick={() => navigate('/Graphics')} className="sidebar-item">
            Graphics
          </li>
          <li onClick={() => navigate('/Rnd')} className="sidebar-item">
            RnD
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
