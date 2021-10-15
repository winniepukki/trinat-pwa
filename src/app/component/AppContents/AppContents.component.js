/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import Hero from '@component/Hero';
import Blockquote from '@component/Blockquote';

export class AppContents extends React.Component {
    render() {
        return (
            <section
              className="AppContents"
            >
                <Hero />
                <Blockquote />
            </section>
        );
    }
}

export default AppContents;