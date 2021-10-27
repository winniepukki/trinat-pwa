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
import EditProduct from '@type/EditProduct';

import './Product.style.scss';

export class Product extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        product: ProductType.isRequired,
        handleEditButtonClick: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        showEditComponent: PropTypes.bool.isRequired,
        message: PropTypes.string.isRequired,
        admin: PropTypes.bool.isRequired,
        values: EditProduct.isRequired
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

    renderProductEdit() {
        const {
            t,
            values: {
                title,
                description,
                price
            },
            message,
            handleChange,
            handleSubmit,
            handleEditButtonClick
        } = this.props;

        return (
            <div>
                <p>{ t(message) }</p>
                <input
                  className="Contact-Input"
                  onChange={ handleChange }
                  type="text"
                  name="title"
                  value={ title }
                />

                <input
                  className="Contact-Input"
                  onChange={ handleChange }
                  type="text"
                  name="description"
                  value={ description }
                />

                <input
                  className="Contact-Input"
                  onChange={ handleChange }
                  type="text"
                  name="price"
                  value={ price }
                />

                <button
                  className="Button Button-Reservation Button-Filled Button-Submit"
                  onClick={ handleSubmit }
                  aria-label={ t('aria.submit-product') }
                >
                    { t('submit') }
                </button>
                <button
                  className="Button Button-Reservation Button-Filled Button-Cancel"
                  onClick={ handleEditButtonClick }
                  aria-label={ t('aria.product-edit-cancel') }
                >
                    { t('cancel') }
                </button>
            </div>
        );
    }

    renderProductContent() {
        const {
            t,
            product: {
                title = '',
                description = '',
                price = 0
            } = {},
            handleEditButtonClick,
            admin
        } = this.props;

        return (
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
                { admin
                    ? (
                        <button
                          className="Button Button-Reservation Button-Filled"
                          onClick={ handleEditButtonClick }
                        >
                            { t('edit') }
                        </button>
                    )
                    : null }
            </div>
        );
    }

    render() {
        const {
            product: {
                isRecent = false,
                isRecommended = false
            } = {},
            showEditComponent = false
        } = this.props;

        return (
            <div
              className={ (isRecommended || isRecent)
                  ? 'Product Product-Promoted' : 'Product' }
            >
                { this.renderProductPromotion() }
                { showEditComponent
                    ? this.renderProductEdit()
                    : this.renderProductContent() }
            </div>
        );
    }
}

export default withTranslation()(Product);
