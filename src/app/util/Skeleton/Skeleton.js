/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */
import React from 'react';

import '../Product/Product.style.scss';
import './Skeleton.style.scss';

class Skeleton extends React.Component {
    render() {
        return (
            <div className="Product">
                <div className="Product-Headline">
                    <div
                      className="Product-Image skeleton"
                    />
                </div>
                <div className="Product-Information">
                    <div className="Product-Title skeleton skeleton-text" />
                    <div className="Product-Description skeleton skeleton-text" />
                </div>
                <div className="Product-Price skeleton skeleton-text skeleton-price" />
            </div>
        );
    }
}

export default Skeleton;
