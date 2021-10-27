/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React, { createRef } from 'react';

import ScrollTop from './ScrollTop.component';

export class ScrollTopContainer extends React.Component {
    containerFunctions = {
        handleClick: this.handleClick.bind(this)
    }

    constructor(props) {
        super(props);

        this.scrollButtonRef = createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    containerProps() {
        return {
            scrollButtonRef: this.scrollButtonRef
        };
    }

    handleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    handleScroll() {
        const scroll = window.pageYOffset;
        const bound = window.innerHeight / 2;
        const buttonNode = this.scrollButtonRef.current;

        if (scroll >= bound) {
            buttonNode.style.visibility = 'visible';
        } else {
            buttonNode.style.visibility = 'hidden';
        }
    }

    render() {
        return (
            <ScrollTop
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default ScrollTopContainer;
