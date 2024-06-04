import React from 'react';
import './MegaMenu.css';
import { Link } from 'react-router-dom';

const MegaMenu = ({handleMouseEnter, handleMouseLeave}) => {
  return (
    <div className="mega-menu-content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/data">Data</Link></h3>
        <ul>
          <li><a href="#">Engineering & Architecture</a></li>
          <li><a href="#">Management & Governance</a></li>
          <li><a href="#">Reporting & Analytics</a></li>
          <li><a href="#">Predictive Analytics & Dashboard</a></li>
        </ul>
      </div>
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/cloud">Cloud</Link></h3>
        <ul>
          <li><a href="#">Migration & Modernization</a></li>
          <li><a href="#">Optimization</a></li>
          <li><a href="#">Infrastructure</a></li>
          <li><a href="#">System Design</a></li>
        </ul>
      </div>
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/security-and-privacy">Security & Privacy</Link></h3>
        <ul>
          <li><a href="#">Cyber Security</a></li>
          <li><a href="#">SIEM Solution</a></li>
          <li><a href="#">Data privacy</a></li>
          <li><a href="#">ISO:27001</a></li>
        </ul>
      </div>
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/artificial-intelligence">Artificial Intelligence</Link></h3>
        <ul>
          <li><a href="#">AI & Machine learning</a></li>
          <li><a href="#">Intelligent product/platform</a></li>
          <li><a href="#">Chatbot Automation</a></li>
          <li><a href="#">Computer Vision</a></li>
        </ul>
      </div>

      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/governance-and-complaince">Governance & Compliance</Link></h3>
        <ul>
          <li><a href="#">ISO Certification</a></li>
          <li><a href="#">Business Continuity</a></li>
          <li><a href="#">Risk Management</a></li>
          <li><a href="#">Change management</a></li>
          <li><a href="#">Process improvement/optimization</a></li>
          <li><a href="#">Talent development & learning</a></li>
        </ul>
      </div>
     
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/planning-and-execution">Planning and Execution</Link></h3>
        <ul>
          {/* <li><a href="#">Planning and Execution</a></li> */}
          <li><a href="#">Portfolio management</a></li>
          <li><a href="#">Product management</a></li>
          <li><a href="#">Program & Project management</a></li>
          <li><a href="#">Systems implementation</a></li>
        </ul>
      </div>
      
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/development-and-integration">Development & Integration</Link></h3>
        <ul>
          <li><a href="#">Application Development</a></li>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Mobile App Development</a></li>
          <li><a href="#">Third Party Integration</a></li>
          <li><a href="#">Tailored Solutions</a></li>
        </ul>
      </div>
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/service-operations">Service Operations</Link></h3>
        <ul>
          <li><a href="#">24/7 System Support</a></li>
          <li><a href="#">Annual Maintenance Contract</a></li>
          <li><a href="#">System Administration & Improvement</a></li>
        </ul>
      </div>
    </div>
  );
}

export default MegaMenu;
