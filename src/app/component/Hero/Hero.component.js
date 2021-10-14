/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import './Hero.style.scss';

export class Hero extends React.Component {
    render() {
        return (
            <section
              className="Hero Main-Section"
            >
                <div className="Hero-Caption">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>
                                    <p className="Subtitle">Warm Welcome!</p>
                                    <p className="Headline">
                                        Trinat
                                        <strong>Kafeinica</strong>
                                    </p>
                                </h2>
                                <p className="Hero-Text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Delectus dolores, illum itaque
                                    illum itaque
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                  className="Hero-Image"
                  src="/assets/img/section/hero.jpg"
                  alt=""
                />
            </section>
        );
    }
}

export default Hero;
