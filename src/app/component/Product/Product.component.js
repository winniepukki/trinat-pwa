/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import ProductType from '@type/Product';

import './Product.style.scss';

export class Product extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        product: ProductType.isRequired
    }

    renderProductPromotion() {
        const {
            t,
            product: {
                isRecent = false,
                isRecommended = false
            } = {}
        } = this.props;

        let message = '';

        if (isRecent) {
            message = 'recent';
        } else if (isRecommended) {
            message = 'recommended';
        } else {
            return null;
        }

        return (
            <div className="Product-Promotion">
                <h5>{ t(message) }</h5>
            </div>
        );
    }

    render() {
        const {
            product: {
                title = '',
                description = '',
                price = 0,
                isRecent,
                isRecommended
            } = {}
        } = this.props;

        return (
            <div
              className={ (isRecommended || isRecent)
                  ? 'Product Product-Promoted' : 'Product' }
            >
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

export default withTranslation()(Product);
