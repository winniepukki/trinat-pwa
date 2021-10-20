/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';

import ProductType from '@type/Product';

import './Product.style.scss';

export class Product extends React.Component {
    static propTypes = {
        product: ProductType.isRequired,
        promotion: PropTypes.string
    }

    static defaultProps = {
        promotion: ''
    }

    renderProductPromotion() {
        const { promotion } = this.props;

        if (!promotion) {
            return null;
        }

        return (
            <div className="Product-Promotion">
                <h5>{ promotion }</h5>
            </div>
        );
    }

    render() {
        const {
            product: {
                title = '',
                description = '',
                price = 0
            } = {},
            promotion
        } = this.props;

        return (
            <div className={ promotion ? 'Product Product-Promoted' : 'Product' }>
                { this.renderProductPromotion() }
                <div className="Product-Content">
                    <div className="Product-Content-Top-Holder">
                        <div className="Product-Title-Holder">
                            <p className="Product-Title">{ title }</p>
                        </div>
                        <div className="Product-Content-Line" />
                        <div className="Product-Price">
                        <span>
                            { price }
                            &euro;
                        </span>
                        </div>
                    </div>
                    <div className="Product-Content-Bottom-Holder">
                        <p className="Product-Description">{ description }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
