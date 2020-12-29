import React, {useEffect, useState} from 'react';

import './scroll.style.scss';

const Scroll = (showBelow) => {
    const [show, setShow] = useState(!showBelow);

    const handleScroll = () => {
      if(window.pageYOffset > showBelow) {
          if(!show) setShow(true)
      }
      else {
          if(show) setShow(false)
      }
    };

    useEffect(() => {
       if(showBelow) {
           window.addEventListener(`scroll`, handleScroll);
           return () => window.removeEventListener(`scroll`, handleScroll)
       }
    });

    const handleClick = () => {
        window[`scrollTo`]({top: 0, behavior: `smooth`})
    };
    return <div className="scroll-top">
            <div className="container">
                <button className="scroll-top-button" onClick={handleClick}>
                    <i className="far fa-arrow-alt-circle-up"></i>
                </button>
            </div>
        </div>
};

export default Scroll;
