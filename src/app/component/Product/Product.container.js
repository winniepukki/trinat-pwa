/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';
import { connect } from 'react-redux';

import ProductType from '@type/Product';
import AccountType from '@type/Account';

import Product from './Product.component';

import updateProductMutation from '@query/UpdateProduct.query';

import RESET_TIME_IN_MS from '@component/Reservation/Reservation.config';

export const mapStateToProps = (state) => ({
    account: state.AccountReducer.account
});

export const mapDispatchToProps = () => ({});

export class ProductContainer extends React.Component {
    static propTypes = {
        account: AccountType.isRequired,
        product: ProductType.isRequired
    }

    containerFunctions = {
        handleEditButtonClick: this.handleEditButtonClick.bind(this),
        handleChange: this.handleChange.bind(this),
        handleSubmit: this.handleSubmit.bind(this)
    }

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            showEditComponent: false,
            values: {
                title: '',
                description: '',
                price: 0
            }
        };
    }

    componentDidMount() {
        const {
            product: {
                title = '',
                description = '',
                price = 0
            } = {}
        } = this.props;

        this.setState({
            values: {
                title,
                description,
                price
            }
        });
    }

    containerProps() {
        const {
            values: {
                title = '',
                description = '',
                price = 0
            } = {},
            showEditComponent = false,
            message = ''
        } = this.state;

        const {
            product,
            account: {
                admin = false
            } = {}
        } = this.props;

        return {
            values: {
                title,
                description,
                price
            },
            admin,
            product,
            message,
            showEditComponent
        };
    }

    handleChange(e) {
        const { values } = this.state;
        this.setState({
            values: { ...values, [e.target.name]: e.target.value }
        });
    }

    handleEditButtonClick() {
        this.setState(({ showEditComponent }) => ({
            showEditComponent: !showEditComponent
        }));
    }

    handleSubmit() {
        const {
            product: {
                _id = ''
            } = {}
        } = this.props;
        const {
            values: {
                title = '',
                description = '',
                price = 0
            } = {}
        } = this.state;

        updateProductMutation(_id, title, description, price)
            .then((result) => {
                const {
                    data: {
                        updateProduct: {
                            success = false
                        } = {}
                    } = {}
                } = result;

                if (success) {
                    this.setState({
                        message: 'product-success'
                    });
                    setTimeout(() => {
                        this.setState({
                            message: ''
                        });
                        this.handleEditButtonClick();
                    }, RESET_TIME_IN_MS);
                }
            });
    }

    render() {
        return (
            <Product
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
