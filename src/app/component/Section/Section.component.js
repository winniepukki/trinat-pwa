/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';

import './Section.style.scss';

export class Section extends React.Component {
    static propTypes = {
        gallery: PropTypes.arrayOf(PropTypes.string)
    };

    static defaultProps = {
        gallery: []
    }

    renderGalleryItems() {
        const {
            gallery = []
        } = this.props;

        return gallery.map((item) => (
            <img className="Section-Gallery-Item" key={ item } src={ item } alt="" />
        ));
    }

    renderGallery() {
        return (
            <div
              className="Section-Gallery"
            >
                { this.renderGalleryItems() }
            </div>
        );
    }

    renderSectionContents() {
        return (
            <div
              className="Section-Contents"
            >
                <h2>
                    <p className="Subtitle">Warm Welcome!</p>
                    <p className="Headline-Strong">
                        Our Story
                    </p>
                </h2>
                <img
                  className="Leaf-Delimiter"
                  src="/assets/img/icons/leaf.png"
                  alt="Section delimiter"
                />
            </div>
        );
    }

    render() {
        return (
            <section
              className="Section"
            >
                <div className="container">
                    <div className="row">
                        <div className="col">{ this.renderGallery() }</div>
                        <div className="col">{ this.renderSectionContents() }</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;
