import React, { useMemo } from 'react';

import './PageContainer.css';

const PageContainer = ({ title, children = [] }) => {
  const containers = useMemo(
    () => children && children.map((child) => <div className="content-container">{child}</div>),
    [children]
  );

  return (
    <div className="page-container">
      <div className="title-container">
        <p className="title">{title}</p>
      </div>

      {containers ? containers : ''}
    </div>
  );
};

export default PageContainer;
