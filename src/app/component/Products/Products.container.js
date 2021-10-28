/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import Products from './Products.component';

import fetchProductListQuery from '@query/ProductList.query';

export class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.getProductList = this.getProductList.bind(this);
    }

    async componentDidMount() {
        const products = await this.getProductList();
        this.setState({
            products
        });
    }

    containerProps() {
        const { products = [] } = this.state;

        return {
            products
        };
    }

    async getProductList() {
        return fetchProductListQuery()
            .then(({ data: { products = [] } = {} }) => products);
    }

    render() {
        return (
            <Products
              { ...this.containerProps() }
            />
        );
    }
}

export default ProductsContainer;
