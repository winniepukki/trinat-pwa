/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import { ProductType } from '@type/Product';

import './Product.style.scss';

class Product extends React.Component {
    static propTypes = {
        product: ProductType
    }

    static defaultProps = {
        product: {}
    }

    render() {
        const {
            product: {
                title = '',
                description = '',
                image_url = '',
                price = 0
            } = {}
        } = this.props;

        return (
            <div className="Product">
                <div className="Product-Headline">
                    <img
                      className="Product-Image"
                      src={ image_url }
                      alt={ title }
                    />
                </div>
                <div className="Product-Information">
                    <div className="Product-Title">
                        { title }
                    </div>
                    <div className="Product-Description">
                        { description }
                    </div>
                </div>
                <div className="Product-Price">
                    <p>
                      { price }
                      &euro;
                    </p>
                </div>
            </div>
        );
    }
}

export default Product;
