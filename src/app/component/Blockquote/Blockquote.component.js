/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import RefType from '@type/Ref';

export class Blockquote extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        contentKey: PropTypes.string.isRequired,
        descriptionKey: PropTypes.string.isRequired,
        authorKey: PropTypes.string.isRequired,
        contentRef: RefType.isRequired,
        descriptionRef: RefType.isRequired,
        authorRef: RefType.isRequired
    }

    render() {
        const {
            t,
            contentKey = '',
            descriptionKey = '',
            authorKey = '',
            contentRef,
            descriptionRef,
            authorRef
        } = this.props;

        return (
            <blockquote
              className="Blockquote"
            >
                <div className="Blockquote-Content" ref={ contentRef }>
                    { t(contentKey) }
                </div>
                <div className="Blockquote-Description" ref={ descriptionRef }>
                    { t(descriptionKey) }
                </div>
                <div className="Blockquote-Author" ref={ authorRef }>
                    { t(authorKey) }
                </div>
            </blockquote>
        );
    }
}

export default withTranslation()(Blockquote);
