/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

import React, { createRef } from 'react';

import Menu from './Menu.component';

export class MenuContainer extends React.Component {
    containerFunctions = {
        handleOpenState: this.handleOpenState.bind(this)
    }

    constructor(props) {
        super(props);

        this.menuRef = createRef();
        this.state = {
            open: false,
            defaultLogo: true
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    containerProps() {
        const { open, defaultLogo } = this.state;
        return {
            open,
            defaultLogo,
            menu: this.menuRef
        };
    }

    handleOpenState() {
        this.setState(({ open }) => ({
            open: !open
        }));
    }

    handleScroll() {
        const currentPos = window.pageYOffset;
        const menuNode = this.menuRef.current;

        if (currentPos > 100) {
            menuNode.classList.add('Menu-Light');
            this.setState({
                defaultLogo: false
            });
        } else {
            menuNode.classList.remove('Menu-Light');
            this.setState({
                defaultLogo: true
            });
        }
    }

    render() {
        return (
            <Menu
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default MenuContainer;
