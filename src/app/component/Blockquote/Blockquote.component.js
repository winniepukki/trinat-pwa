/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

class Blockquote extends React.Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.renderBlockquoteEntities = this.renderBlockquoteEntities.bind(this);
    }

    renderBlockquoteEntities() {
        const {
            content = '',
            description = '',
            author = ''
        } = this.props;

        return (
            <div className="container">
              <p className="blockquote-content">{ content }</p>
              <p className="description">{ description }</p>
              <p className="author">{ author }</p>
            </div>
        );
    }

    render() {
        return (
            <div className="Blockquote">
              <blockquote className="custom-tac">
                { this.renderBlockquoteEntities() }
              </blockquote>
            </div>
        );
    }
}

export default withTranslation()(Blockquote);
