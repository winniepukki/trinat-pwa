/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import Products from './Products.component';

import fetchCategoriesWithProducts from '@query/Categories.query';

export class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };

        this.getProductList = this.getProductList.bind(this);
    }

    async componentDidMount() {
        const categories = await this.getProductList();
        this.setState({
            categories
        });
    }

    containerProps() {
        const { categories = [] } = this.state;

        return {
            categories
        };
    }

    async getProductList() {
        return fetchCategoriesWithProducts()
            .then(({ data: { getCategories = [] } = {} }) => getCategories);
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
