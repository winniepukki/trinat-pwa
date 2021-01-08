import React, { useEffect, useState } from 'react';

import './scroll.style.scss';

const Scroll = (showBelow) => {
  const [show, setShow] = useState(!showBelow);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else if (show) setShow(false);
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    return null;
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="scroll-top">
      <div className="container">
        <button type="button" className="scroll-top-button" onClick={handleClick}>
          <i className="far fa-arrow-alt-circle-up" />
        </button>
      </div>
    </div>
  );
};

export default Scroll;
