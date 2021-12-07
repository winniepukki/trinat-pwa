/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import { SPECIAL } from '@component/Products/Products.config';

import UnsortedProduct from '@type/UnsortedProduct';

import Product from '@component/Product';

import './Category.style.scss';

export class Category extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(UnsortedProduct).isRequired,
        i18n: PropTypes.instanceOf(Object).isRequired
    }

    renderCategoryProducts() {
        const {
            i18n: {
                language: selectedLanguage = ''
            } = {},
            products = []
        } = this.props;

        if (!products || !products.length) {
            return null;
        }

        return products.map(({
            id = '',
            price = 0,
            isRecommended = false,
            isRecent = false,
            locales = []
        }) => {
            /**
             * Sorting the current language-based product selection
             * Priorities are sorted on the Server-side automatically
            */
            const productData = locales.find(({ lang }) => lang === selectedLanguage);

            const product = {
                id,
                price,
                isRecent,
                isRecommended,
                ...productData
            };

            return <Product key={ id } product={ product } />;
        });
    }

    renderCategoryTitle() {
        const {
            t,
            title = ''
        } = this.props;

        if (title === SPECIAL) {
            return null;
        }

        return <p className="Category-Title">{ t(`category.${title}`) }</p>;
    }

    render() {
        const {
            title = ''
        } = this.props;

        return (
            <section
              className={ title === SPECIAL ? 'Category-Special' : 'Category' }
            >
                { this.renderCategoryTitle() }
                { this.renderCategoryProducts() }
            </section>
        );
    }
}

export default withTranslation()(Category);
