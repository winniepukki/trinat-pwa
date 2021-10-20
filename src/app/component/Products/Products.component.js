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

import Category from '@component/Category';
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

    getProductList() {
        const {
            products = []
        } = this.props;

        if (!products && !products.length) {
            return null;
        }

        return products;
    }

    renderSpecialProducts() {
        const {
            i18n: {
                language: lang
            } = {}
        } = this.props;

        return this.getProductList().map((product) => {
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

    getSortedCategories() {
        return this.getProductList()
            /* Extract category from a product */
            .map(({ category }) => category)
            /* Sort categories based on priority */
            .sort((a, b) => parseFloat(a.priority) - parseFloat(b.priority))
            /* Remove duplicates */
            .filter((v, i, a) => a.findIndex((t) => (t.title === v.title)) === i);
    }

    renderProductsWithCategories() {
        return this.getSortedCategories().map((category) => {
            const {
                title
            } = category;

            if (title === SPECIAL) {
                return null;
            }

            /* Sort products on sorted category and product category */
            const sortedProducts = this.getProductList()
                .filter((
                    { category: { title: categoryTitle } }
                ) => categoryTitle === title);

            return (
                <Category
                  key={ title }
                  title={ title }
                  products={ sortedProducts }
                />
            );
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

                    <div className="Products-Categories">
                        { this.renderProductsWithCategories() }
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Products);
