/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React, { createRef } from 'react';

import Blockquote from './Blockquote.component';

export class BlockquoteContainer extends React.Component {
    static propTypes = {
        contentKey: PropTypes.string.isRequired,
        descriptionKey: PropTypes.string.isRequired,
        authorKey: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);

        this.contentRef = createRef();
        this.descriptionRef = createRef();
        this.authorRef = createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleAppearance.bind(this));
    }

    containerProps() {
        const {
            contentKey = '',
            descriptionKey = '',
            authorKey = ''
        } = this.props;

        return {
            contentKey,
            descriptionKey,
            authorKey,
            contentRef: this.contentRef,
            descriptionRef: this.descriptionRef,
            authorRef: this.authorRef
        };
    }

    handleAppearance() {
        const windowBottom = window.screenY + window.innerHeight;

        const contentNode = this.contentRef.current;
        const descriptionNode = this.descriptionRef.current;
        const authorNode = this.authorRef.current;

        const contentNodeOffset = contentNode.getBoundingClientRect();

        if (windowBottom >= contentNodeOffset.top) {
            contentNode.classList.add('Animated-Text-1');
            descriptionNode.classList.add('Animated-Text-2');
            authorNode.classList.add('Animated-Text-3');
        }
    }

    render() {
        return (
            <Blockquote
              { ...this.containerProps() }
            />
        );
    }
}

export default BlockquoteContainer;
