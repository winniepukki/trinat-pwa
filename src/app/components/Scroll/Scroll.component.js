import React from 'react';

import './scroll.style.scss';

class ScrollComponent extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="scroll-top">
        <div className="container">
          <button type="button" className="scroll-top-button" onClick={this.handleClick}>
            <i className="far fa-arrow-alt-circle-up" />
          </button>
        </div>
      </div>
    );
  }
}

export default ScrollComponent;
