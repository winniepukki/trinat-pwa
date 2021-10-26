/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import Contact from '@component/Contact';
import Map from '@component/Map';

import RefType from '@type/Ref';

import './Section.style.scss';

export class Section extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        titleKey: PropTypes.string.isRequired,
        descriptionKey: PropTypes.string.isRequired,
        textKey: PropTypes.string,
        mapEnabled: PropTypes.bool,
        gallery: PropTypes.arrayOf(PropTypes.string),
        contentRef: RefType.isRequired
    };

    static defaultProps = {
        gallery: [],
        mapEnabled: false,
        textKey: ''
    }

    renderGalleryItems() {
        const {
            t,
            gallery = []
        } = this.props;

        return gallery.map((item) => (
            <img
              key={ item }
              className="Section-Gallery-Item"
              src={ item }
              alt={ t('aria.section-gallery') }
            />
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

    renderSectionMap() {
        return (
            <div
              className="Section-Map"
            >
                <Map />
            </div>
        );
    }

    renderContent() {
        const {
            t,
            textKey = '',
            mapEnabled = false
        } = this.props;

        return (
            mapEnabled
                ? <Contact />
                : (
                  <p className="custom-tac">
                    { t(textKey) }
                  </p>
                )
        );
    }

    renderSectionContents() {
        const {
            t,
            titleKey = '',
            descriptionKey = '',
            contentRef
        } = this.props;

        return (
            <div
              className="Section-Contents"
              ref={ contentRef }
            >
                <h2>
                    <p className="Subtitle">{ titleKey }</p>
                    <p className="Headline-Strong">
                        { descriptionKey }
                    </p>
                </h2>
                <img
                  className="Leaf-Delimiter"
                  src="/assets/img/icons/leaf.png"
                  alt={ t('aria.section-delim-bg') }
                />
                { this.renderContent() }
            </div>
        );
    }

    render() {
        const {
            mapEnabled = false
        } = this.props;

        return (
            <section
              className={ mapEnabled ? 'Section Section-Mapped' : 'Section' }
            >
                <div className="container">
                    <div className="row">
                        <div
                          className="Section-Item col-sm-6"
                        >
                            { mapEnabled
                                ? this.renderSectionMap()
                                : this.renderGallery() }
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
