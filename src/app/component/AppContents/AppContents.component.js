/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import Hero from '@component/Hero';
import Blockquote from '@component/Blockquote';
import Section from '@component/Section';

export class AppContents extends React.Component {
    render() {
        return (
            <section
              className="AppContents"
            >
                <Hero />
                <Blockquote />
                <Section gallery={ [
                    '/assets/img/section/section-food.jpg',
                    '/assets/img/section/section-plate.jpg'
                ] }
                />
            </section>
        );
    }
}

export default AppContents;
