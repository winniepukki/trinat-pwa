/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

import React from 'react';

import Menu from './Menu.component';

export class MenuContainer extends React.Component {
    containerFunctions = {
        handleOpenState: this.handleOpenState.bind(this)
    }

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    containerProps() {
        const { open } = this.state;
        return {
            open
        };
    }

    handleOpenState() {
        this.setState(({ open }) => ({
            open: !open
        }));
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
