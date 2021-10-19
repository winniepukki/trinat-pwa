/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React, { createRef } from 'react';
import Header from './Header.component';

export class HeaderContainer extends React.Component {
    containerFunctions = {
        handleOpenState: this.handleOpenState.bind(this)
    }

    constructor(props) {
        super(props);

        this.headerDetailsRef = createRef();
        this.state = {
            open: false
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    containerProps() {
        const { open } = this.state;
        return {
            open,
            headerDetails: this.headerDetailsRef
        };
    }

    handleScroll() {
        const currentPos = window.pageYOffset;
        const headerNode = this.headerDetailsRef.current;
        const MAX_WIDTH = 500;

        if (currentPos > 100 && document.body.offsetWidth <= MAX_WIDTH) {
            headerNode.classList.add('Header-Short');
        } else {
            headerNode.classList.remove('Header-Short');
        }
    }

    handleOpenState() {
        this.setState(({ open }) => ({
            open: !open
        }));
    }

    render() {
        return (
            <Header
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default HeaderContainer;
