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

import { SPECIAL } from './Products.config';
import Product from '@component/Product';

import './Products.style.scss';

export class Products extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        i18n: PropTypes.instanceOf(Object).isRequired,
        products: PropTypes.arrayOf(ProductType)
    }

    static defaultProps = {
        products: []
    }

    renderSpecialProducts() {
        const {
            i18n: {
                language: lang
            } = {},
            products
        } = this.props;

        if (!products || !products.length) {
            return null;
        }

        return products.map((product) => {
            const {
                _id = '',
                category: {
                    title
                } = {},
                language
            } = product;

            if (title !== SPECIAL || lang !== language) {
                return null;
            }

            return <Product key={ _id } product={ product } />;
        });
    }

    render() {
        const { t } = this.props;

        return (
            <section
              className="Products"
            >
                <div className="container">
                    <h4>{ t('special') }</h4>
                    <div className="Products-Special">
                        { this.renderSpecialProducts() }
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Products);
