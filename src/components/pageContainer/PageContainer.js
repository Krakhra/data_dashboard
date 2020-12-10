import React, { useMemo } from 'react';

import './PageContainer.css';

const Section = ({ className = '', title = '', children = [] }) => (
  <div className={'section-container ' + className}>
    <h2 className="section-title">{title}</h2>
    {children || ''}
  </div>
);

const PageContainer = ({ className = '', title = '', children = [] }) => {
  const containers = useMemo(
    () =>
      children &&
      children.map((child, idx) => (
        <div key={idx} className="content-container">
          {child}
        </div>
      )),
    [children]
  );

  return (
    <div className={'page-container ' + className}>
      <div className="title-container">
        <p className="title">{title}</p>
      </div>

      {containers ? containers : ''}
    </div>
  );
};

export { PageContainer as default, Section };
