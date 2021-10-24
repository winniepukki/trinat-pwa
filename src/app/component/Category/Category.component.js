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

import Product from '@component/Product';

import './Category.style.scss';

export class Category extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(ProductType).isRequired,
        i18n: PropTypes.instanceOf(Object).isRequired
    }

    renderCategoryProducts() {
        const {
            i18n: {
                language: lang = ''
            } = {},
            products = []
        } = this.props;

        if (!products || !products.length) {
            return null;
        }

        return products.map((product) => {
            const {
                _id = '',
                language = ''
            } = product;

            if (language !== lang) {
                return null;
            }

            return <Product key={ _id } product={ product } />;
        });
    }

    render() {
        const {
            t,
            title = ''
        } = this.props;

        return (
            <section
              className="Category"
            >
                <p className="Category-Title">{ t(`category.${title}`) }</p>
                { this.renderCategoryProducts() }
            </section>
        );
    }
}

export default withTranslation()(Category);
