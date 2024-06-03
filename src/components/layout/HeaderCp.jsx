import React from 'react';

const HeaderCp = ({ headerTitle = '' }) => {
  return (
    <header>
      <div className="wrap">
        <h1 className="FontS20B">{headerTitle}</h1>
      </div>
    </header>
  );
};

export default HeaderCp;
