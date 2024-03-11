/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import GetAndroidApp from './GetAndroidApp.component';

export class GetAndroidAppContainer extends React.Component {
    containerFunctions = {
        handleOpenState: this.handleOpenState.bind(this)
    }

    constructor(props) {
        super(props);

        this.state = {
            open: true
        };
    }

    handleOpenState() {
        this.setState(() => ({
            open: false
        }));
    }

    containerProps() {
        const { open } = this.state;
        return {
            open
        };
    }

    render() {
        return (
            <GetAndroidApp
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default GetAndroidAppContainer;
