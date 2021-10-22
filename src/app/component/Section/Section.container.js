/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React, { createRef } from 'react';

import Section from './Section.component';

export class SectionContainer extends React.Component {
    static propTypes = {
        gallery: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    constructor(props) {
        super(props);

        this.contentRef = createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    containerProps() {
        return {
            contentRef: this.contentRef
        };
    }

    handleScroll() {
        const currentPos = window.pageYOffset;
        const node = this.contentRef.current;
        const nodeOffsetTop = node.getBoundingClientRect().top;

        const DIVIDER = 18;

        if (currentPos > nodeOffsetTop) {
            node.style.transform = `translateY(-${currentPos / DIVIDER}%)`;
        }
    }

    render() {
        const { gallery = [] } = this.props;

        return (
            <Section
              gallery={ gallery }
              { ...this.containerProps() }
            />
        );
    }
}

export default SectionContainer;
