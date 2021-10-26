/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import Hero from '@component/Hero';
import Blockquote from '@component/Blockquote';
import Section from '@component/Section';
import Delimiter from '@component/Delimiter';
import Products from '@component/Products';

export class Contents extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    }

    render() {
        const { t } = this.props;
        return (
            <section
              className="AppContents"
            >
                <Hero />
                <Blockquote
                  contentKey="blockquote.content"
                  descriptionKey="blockquote.description"
                  authorKey="blockquote.author"
                />
                <Section
                  titleKey="story.title"
                  descriptionKey="story.description"
                  textKey="story.text"
                  gallery={ [
                      '/assets/img/section/section-stirs.jpg',
                      '/assets/img/section/section-plate.jpg'
                  ] }
                />
                <Delimiter
                  headline={ t('menu') }
                  subtitle={ t('our') }
                />
                <Products />
                <Delimiter
                  headline={ t('visit') }
                  subtitle={ t('welcome') }
                  positionDefault={ false }
                  imgIndex={ 2 }
                />
                <Section
                  scrollable={ false }
                  mapEnabled
                  titleKey={ t('contact-us') }
                  descriptionKey={ t('us') }
                />
            </section>
        );
    }
}

export default withTranslation()(Contents);
