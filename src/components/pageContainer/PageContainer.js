import React, { useMemo } from 'react';

import './PageContainer.css';

const Section = ({ className = '', title = '', children = [] }) => (
  <div className={'section-container ' + className}>
    {title.length > 0 ? <h2 className="section-title">{title}</h2> : ''}
    {children || ''}
  </div>
);

const Image = ({ className = '', alt = 'No alt text provided.', src = '' }) => (
  <div className={'image-container ' + className}>
    <img src={src} alt={alt} />
  </div>
);

const Reference = ({ id, text }) => (
  <div style={{ paddingBottom: '30px', paddingLeft: '30px' }}>
    <span style={{ marginLeft: '-30px' }}>[{id}]</span>
    <span style={{ paddingLeft: '30px' }}>
      <em>{text}</em>
    </span>
  </div>
);

const PageContainer = ({ className = '', title = '', children = [] }) => {
  const containers = useMemo(
    () =>
      React.Children.map(children, (child, idx) => (
        <div key={idx} className="content-container">
          {child}
        </div>
      )),
    [children]
  );

  return (
    <div className="page-container-box">
      <div className={'page-container ' + className}>
        <div className="title-container">
          <p className="title">{title}</p>
        </div>

        {containers ? containers : ''}
      </div>
    </div>
  );
};

export { PageContainer as default, Section, Image, Reference };
