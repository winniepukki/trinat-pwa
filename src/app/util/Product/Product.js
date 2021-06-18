/* eslint-disable jsx-a11y/img-redundant-alt */
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
                <div className="row">
                    <div className="row">
                        <img
                          src={ image_url }
                          alt={ `${title} product image` }
                          className="Product-Image"
                        />
                    </div>
                    <div className="col">
                        <p className="starter-title">{ title }</p>
                        <p className="starter-ingredients">{ description }</p>
                    </div>
                    <div className="col">
                        <p className="custom-tar">
                            { price }
                            &euro;
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
