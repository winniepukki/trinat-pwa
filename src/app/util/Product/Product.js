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
                price = 0
            } = {}
        } = this.props;

        return (
            <div className="Product">
                <div className="row">
                    <div className="col">
                        <p className="Product-Title">{ title }</p>
                        <p className="Product-Description">{ description }</p>
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
