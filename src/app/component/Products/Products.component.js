/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import CategoryType from '@type/Category';

import { SPECIAL } from './Products.config';

import Category from '@component/Category';
import Skeleton from '@component/Skeleton';

import './Products.style.scss';

export class Products extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        categories: PropTypes.arrayOf(CategoryType).isRequired
    }

    getCategoriesList() {
        const {
            categories = []
        } = this.props;

        if (!categories && !categories.length) {
            return null;
        }

        return categories;
    }

    renderSpecialProducts() {
        if (!this.getCategoriesList().length) {
            return (
              <section
                className="Skeleton-Grid"
              >
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
              </section>
            );
        }

        return this.getCategoriesList().map((category) => {
            const {
                key,
                products
            } = category;

            if (key !== SPECIAL) {
                return null;
            }

            return (
                <Category
                  key={ key }
                  title={ key }
                  products={ products }
                />
            );
        });
    }

    renderProductsWithCategories() {
        return this.getCategoriesList().map((category) => {
            const {
                key = '',
                products
            } = category;

            if (key === SPECIAL) {
                return null;
            }

            return (
                <Category
                  key={ key }
                  title={ key }
                  products={ products }
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

                    <p className="custom-tac">{ t('allergy-notice') }</p>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Products);
