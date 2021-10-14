/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes, { element } from 'prop-types';
import React from 'react';

class ErrorBoundary extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(element)
        ]).isRequired
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <h1>Something went wrong!</h1>;
        }

        return children;
    }
}

export default ErrorBoundary;
