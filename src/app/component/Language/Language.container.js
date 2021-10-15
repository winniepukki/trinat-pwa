/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';

import Language from './Language.component';

export class LanguageContainer extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        handleOpenState: PropTypes.func.isRequired
    }

    containerProps() {
        const { open } = this.props;
        return {
            open
        };
    }

    render() {
        const { handleOpenState } = this.props;
        return (
          <Language
            { ...this.containerProps() }
            handleOpenState={ handleOpenState }
          />
        );
    }
}

export default LanguageContainer;
