/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ProductType } from '@type/Product';
import { SPECIAL } from '../ProductList/ProductList.config';
import Product from '@util/Product/Product';

import './Special.style.scss';

export const mapStateToProps = (state) => ({
    foodMenu: state.menuList.foodMenu,
    error: state.menuList.error
});

class Special extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        foodMenu: PropTypes.arrayOf(ProductType),
        languageCode: PropTypes.string.isRequired
    };

    static defaultProps = {
        foodMenu: []
    }

    constructor(props) {
        super(props);

        this.renderSpecialProducts = this.renderSpecialProducts.bind(this);
    }

    /**
     * Get Special products from the store
     * based on the language selection
     */
    renderSpecialProducts() {
        const {
            t,
            foodMenu,
            languageCode
        } = this.props;

        if (!foodMenu || !foodMenu.length) {
            return t('loading');
        }

        return foodMenu.map((product) => {
            const {
                _id = '',
                category,
                language
            } = product;

            if (category !== SPECIAL || languageCode !== language) {
                return null;
            }

            return <Product key={ _id } product={ product } />;
        });
    }

    render() {
        const { t } = this.props;

        return (
            <div className="Special">
                <section className="special-menu" style={ { marginBottom: '60px' } }>
                    <div className="section-title">
                        <h3>
                            <div className="parallax-headline">Very</div>
                            <div className="parallax-title">{ t('delicious') }</div>
                        </h3>
                    </div>
                </section>
                <div className="container">
                    <div className="parallax-section parallax-section-special">
                        <div className="inner-container inner-container-special">
                            <h3>
                                <p className="parallax-title">{ t('menu.new') }</p>
                            </h3>
                            { this.renderSpecialProducts() }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default
connect(mapStateToProps)(withTranslation()(Special));
