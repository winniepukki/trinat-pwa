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

import './Section.style.scss';

export class Section extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        titleKey: PropTypes.string.isRequired,
        descriptionKey: PropTypes.string.isRequired,
        textKey: PropTypes.string.isRequired,
        gallery: PropTypes.arrayOf(PropTypes.string),
        contentRef: RefType.isRequired
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
        const {
            t,
            titleKey = '',
            descriptionKey = '',
            textKey = '',
            contentRef
        } = this.props;

        return (
            <div
              className="Section-Contents"
              ref={ contentRef }
            >
                <h2>
                    <p className="Subtitle">{ t(titleKey) }</p>
                    <p className="Headline-Strong">
                        { t(descriptionKey) }
                    </p>
                </h2>
                <img
                  className="Leaf-Delimiter"
                  src="/assets/img/icons/leaf.png"
                  alt="Section delimiter"
                />
                <p className="custom-tac">
                    { t(textKey) }
                </p>
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
                        <div
                          className="Section-Item col-sm-6"
                        >
                            { this.renderGallery() }
                        </div>
                        <div
                          className="Section-Item col-sm-6"
                        >
                            { this.renderSectionContents() }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Section);
