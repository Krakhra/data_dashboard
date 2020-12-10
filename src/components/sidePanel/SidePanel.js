import React from 'react';
import './SidePanel.css';

const SidePanel = () => (
  <div className="SidePanel">
    <div style={{ marginTop: '50px' }}>
      <a className="homelink" href="/">
        Sustainable Energy
      </a>
    </div>

    <div style={{ marginTop: '100px' }}>
      <p className="navLinkSpacing">
        <i className="fas fa-book"></i>
        <a className="navLinkStyle" href="/literature">
          Literature Review
        </a>
      </p>
      <p className="navLinkSpacing">
        <i className="fas fa-leaf"></i>
        <a className="navLinkStyle" href="/growth">
          Sustainble Energy Growth
        </a>
      </p>
      <p className="navLinkSpacing">
        <i className="fas fa-book"></i>
        <a className="navLinkStyle" href="/question-two">
          Question Two
        </a>
      </p>
    </div>
  </div>
);

export default SidePanel;
